extends Control
class_name Game

const MAX_LOG_LINES := 8
const PLAYER_AP_MAX := 3

# -------------------------------------------------------------------
# Data classes
# -------------------------------------------------------------------

class CharacterState:
    var name: String
    var composure: int
    var composure_max: int
    var inhibition: int
    var inhibition_max: int
    var focus: int = 0
    var clothing_upper: int = 100
    var clothing_lower: int = 100
    var is_exposed: bool = false

    func _init(_name: String, comp_max: int, inhib_max: int) -> void:
        name = _name
        composure_max = comp_max
        composure = comp_max
        inhibition_max = inhib_max
        inhibition = inhib_max


class Card:
    var id: String
    var name: String
    var card_class: String
    var ap_cost: int
    var composure_damage: int
    var tension_gain: int
    var arousal_gain: int
    var focus_gain: int
    var tension_cost: int
    var arousal_cost: int
    var draw_cards: int
    var requires_exposed: bool

    func _init(
        _id: String,
        _name: String,
        _class: String,
        _ap_cost: int,
        _dmg: int,
        _tension_gain := 0,
        _arousal_gain := 0,
        _focus_gain := 0,
        _tension_cost := 0,
        _arousal_cost := 0,
        _draw_cards := 0,
        _requires_exposed := false
    ) -> void:
        id = _id
        name = _name
        card_class = _class
        ap_cost = _ap_cost
        composure_damage = _dmg
        tension_gain = _tension_gain
        arousal_gain = _arousal_gain
        focus_gain = _focus_gain
        tension_cost = _tension_cost
        arousal_cost = _arousal_cost
        draw_cards = _draw_cards
        requires_exposed = _requires_exposed


enum EscalationStage { APPROACH, CLOSE_QUARTERS, EMBRACE, INTIMACY }

# -------------------------------------------------------------------
# State
# -------------------------------------------------------------------

var player: CharacterState
var sarah: CharacterState

var player_ap: int = PLAYER_AP_MAX
var tension: int = 0
var arousal: int = 0
var intensity: int = 0

var escalation_stage: int = EscalationStage.APPROACH
var turn_number: int = 1
var game_over: bool = false
var player_won: bool = false

var starting_deck: Array[Card] = []
var hand: Array[Card] = []
var draw_pile: Array[Card] = []
var discard_pile: Array[Card] = []

var action_log: Array[String] = []

var rng := RandomNumberGenerator.new()

# -------------------------------------------------------------------
# Node refs
# -------------------------------------------------------------------

@onready var player_status_label: RichTextLabel = $PlayerStatusPanel/PlayerStatusLabel
@onready var sarah_status_label: RichTextLabel = $SarahStatusPanel/SarahStatusLabel
@onready var escalation_bar: HBoxContainer = $TopBar/EscalationBar
@onready var stage_approach: Label = $TopBar/EscalationBar/StageApproach
@onready var stage_close: Label = $TopBar/EscalationBar/StageCloseQuarters
@onready var stage_embrace: Label = $TopBar/EscalationBar/StageEmbrace
@onready var stage_intimacy: Label = $TopBar/EscalationBar/StageIntimacy
@onready var card_container: HBoxContainer = $BottomCards/CardScroll/CardContainer
@onready var action_log_label: RichTextLabel = $ActionLogPanel/ActionLog
@onready var deck_info_label: Label = $BottomRightPanel/DeckInfoLabel
@onready var turn_label: Label = $BottomRightPanel/TurnLabel
@onready var end_turn_button: Button = $BottomRightPanel/EndTurnButton
@onready var game_over_panel: Panel = $GameOverPanel
@onready var game_over_label: Label = $GameOverPanel/GameOverLabel
@onready var play_again_button: Button = $GameOverPanel/PlayAgainButton

var card_button_scene: PackedScene

# -------------------------------------------------------------------
# Lifecycle
# -------------------------------------------------------------------

func _ready() -> void:
    print("Game _ready() starting")
    rng.randomize()
    card_button_scene = load("res://CardButton.tscn")
    if card_button_scene == null:
        push_error("Failed to load CardButton.tscn")
    end_turn_button.pressed.connect(_on_end_turn_pressed)
    play_again_button.pressed.connect(_on_play_again_pressed)
    game_over_panel.visible = false

    _build_starting_deck()
    _reset_game()
    print("Game _ready() finished")

# -------------------------------------------------------------------
# Setup
# -------------------------------------------------------------------

func _build_starting_deck() -> void:
    starting_deck.clear()

    starting_deck.append(Card.new(
        "make_her_blush", "Make Her Blush", "Verbal",
        1, 4,
        5
    ))
    starting_deck.append(Card.new(
        "sensory_overload", "Sensory Overload", "Verbal",
        2, 14,
        6, 0,
        0, 0, 0
    ))
    starting_deck.append(Card.new(
        "caress_thigh", "Teasing Touch (Thigh)", "Physical Lower",
        1, 8,
        0, 4
    ))
    starting_deck.append(Card.new(
        "tactile_override", "Tactile Surge", "Physical Lower",
        3, 20,
        5, 5
    ))
    starting_deck.append(Card.new(
        "upper_contact", "Playful Lean-In", "Physical Upper",
        1, 12,
        0, 6,
        0, 0, 0
    ))
    starting_deck.append(Card.new(
        "upper_powerplay", "Overwhelming Presence", "Physical Upper",
        3, 35,
        0, 10,
        0, 20
    ))
    starting_deck.append(Card.new(
        "steel_nerves", "Steel Your Nerves", "Defensive",
        1, 0,
        0, 0,
        8
    ))
    starting_deck.append(Card.new(
        "mental_fortress", "Mental Fortress", "Defensive",
        2, 0,
        0, 0,
        14
    ))
    starting_deck.append(Card.new(
        "read_body_language", "Read Her Signals", "Verbal",
        0, 0,
        2, 2,
        0, 0, 0,
        1
    ))
    starting_deck.append(Card.new(
        "controlled_breathing", "Controlled Breathing", "Defensive",
        0, 0,
        -4, -4
    ))

func _reset_game() -> void:
    player = CharacterState.new("Player", 100, 75)
    sarah = CharacterState.new("Sarah", 100, 75)

    tension = 0
    arousal = 0
    intensity = 0
    player_ap = PLAYER_AP_MAX
    escalation_stage = EscalationStage.APPROACH
    turn_number = 1
    game_over = false
    player_won = false

    action_log.clear()
    _log("Game started! Begin your approach to Sarah.")

    hand.clear()
    for c in starting_deck:
        hand.append(c)
    draw_pile.clear()
    discard_pile.clear()

    game_over_panel.visible = false

    _update_escalation_stage()
    _refresh_all_ui()

# -------------------------------------------------------------------
# UI
# -------------------------------------------------------------------

func _refresh_all_ui() -> void:
    _update_status_text()
    _update_escalation_bar_ui()
    _refresh_hand_ui()
    _update_deck_info()
    _update_turn_label()
    _refresh_log_label()

func _update_status_text() -> void:
    player_status_label.text = (
        "Composure: %d / %d\n" % [player.composure, player.composure_max]
        + "Inhibition: %d / %d\n" % [player.inhibition, player.inhibition_max]
        + "Upper: %d%%   Lower: %d%%\n" % [player.clothing_upper, player.clothing_lower]
        + "Focus: %d\n" % player.focus
        + "Tension: %d / 100\n" % tension
        + "Arousal: %d / 100\n" % arousal
        + "AP: %d / %d\n" % [player_ap, PLAYER_AP_MAX]
    )

    sarah_status_label.text = (
        "Composure: %d / %d\n" % [sarah.composure, sarah.composure_max]
        + "Inhibition: %d / %d\n" % [sarah.inhibition, sarah.inhibition_max]
        + "Upper: %d%%   Lower: %d%%\n" % [sarah.clothing_upper, sarah.clothing_lower]
        + "Focus: %d\n" % sarah.focus
        + "Exposed: %s\n" % ("Yes" if sarah.is_exposed else "No")
    )

func _update_escalation_bar_ui() -> void:
    var active_color := Color.CYAN
    var inactive_color := Color(0.5, 0.5, 0.5)

    stage_approach.modulate = inactive_color
    stage_close.modulate = inactive_color
    stage_embrace.modulate = inactive_color
    stage_intimacy.modulate = inactive_color

    match escalation_stage:
        EscalationStage.APPROACH:
            stage_approach.modulate = active_color
        EscalationStage.CLOSE_QUARTERS:
            stage_close.modulate = active_color
        EscalationStage.EMBRACE:
            stage_embrace.modulate = active_color
        EscalationStage.INTIMACY:
            stage_intimacy.modulate = active_color

func _refresh_hand_ui() -> void:
    for child in card_container.get_children():
        child.queue_free()

    for card in hand:
        var cb := card_button_scene.instantiate() as CardButton
        cb.setup(card, card.ap_cost, card.composure_damage, card.tension_cost, card.arousal_cost)
        cb.card_chosen.connect(_on_card_chosen)
        card_container.add_child(cb)

func _update_deck_info() -> void:
    deck_info_label.text = "Deck: %d  Draw: %d  Discard: %d" % [
        starting_deck.size(), draw_pile.size(), discard_pile.size()
    ]

func _update_turn_label() -> void:
    turn_label.text = "Turn %d" % turn_number

func _refresh_log_label() -> void:
    action_log_label.clear()
    for line in action_log:
        action_log_label.append_text(line + "\n")

func _log(msg: String) -> void:
    action_log.append(msg)
    if action_log.size() > MAX_LOG_LINES:
        action_log.pop_front()
    _refresh_log_label()

# -------------------------------------------------------------------
# Card play
# -------------------------------------------------------------------

func _can_play(card: Card) -> String:
    if game_over:
        return "The game is already over."
    if player_ap < card.ap_cost:
        return "Not enough AP."
    if tension < card.tension_cost:
        return "Not enough tension."
    if arousal < card.arousal_cost:
        return "Not enough arousal."
    if card.requires_exposed and not sarah.is_exposed:
        return "Sarah is not exposed yet."
    return ""

func _on_card_chosen(card: Card) -> void:
    if game_over:
        return
    var reason := _can_play(card)
    if reason != "":
        _log(reason)
        return
    _play_card(card)

func _play_card(card: Card) -> void:
    player_ap -= card.ap_cost

    tension -= card.tension_cost
    arousal -= card.arousal_cost
    tension = clampi(tension, 0, 100)
    arousal = clampi(arousal, 0, 100)

    tension += card.tension_gain
    arousal += card.arousal_gain
    player.focus += card.focus_gain
    tension = clampi(tension, 0, 100)
    arousal = clampi(arousal, 0, 100)

    if card.composure_damage > 0:
        var effective_damage := _compute_damage_vs_sarah(card, card.composure_damage)
        var actually_dealt := _apply_damage(sarah, effective_damage)
        if actually_dealt > 0:
            _log("%s hits Sarah for %d." % [card.name, actually_dealt])
            intensity = clampi(intensity + int(floor(float(actually_dealt) / 2.0)), 0, 100)

    if card.draw_cards > 0:
        for i in range(card.draw_cards):
            _draw_one_card()

    hand.erase(card)
    discard_pile.append(card)

    _update_escalation_stage()
    _check_victory_condition()
    _refresh_all_ui()

func _draw_one_card() -> void:
    if draw_pile.is_empty():
        if discard_pile.is_empty():
            return
        draw_pile = discard_pile.duplicate()
        discard_pile.clear()
        draw_pile.shuffle()
    var c: Card = draw_pile.pop_back()
    hand.append(c)

# -------------------------------------------------------------------
# Damage model
# -------------------------------------------------------------------

func _compute_damage_vs_sarah(card: Card, base_damage: int) -> int:
    var guard_percent: int = 0
    match card.card_class:
        "Physical Upper":
            guard_percent = sarah.clothing_upper
        "Physical Lower", "Intimate":
            guard_percent = sarah.clothing_lower
        _:
            guard_percent = 0

    var dmg: int = base_damage
    if guard_percent > 0:
        dmg = int(round(float(base_damage) * (1.0 - float(guard_percent) / 100.0)))
    return max(dmg, 0)

func _apply_damage(target: CharacterState, damage: int) -> int:
    var original: int = damage

    if target.focus > 0 and damage > 0:
        var absorbed: int = min(target.focus, damage)
        target.focus -= absorbed
        damage -= absorbed
        _log("%s's focus absorbs %d damage." % [target.name, absorbed])

    if target.inhibition > 0 and damage > 0:
        var inhib_dmg: int = min(target.inhibition, damage)
        target.inhibition -= inhib_dmg
        damage -= inhib_dmg

        var inhib_percent: float = 0.0
        if target.inhibition_max > 0:
            inhib_percent = float(target.inhibition) / float(target.inhibition_max) * 100.0
        var new_guard: int = int(floor(inhib_percent * 0.3))
        target.clothing_upper = new_guard
        target.clothing_lower = new_guard

        if target.inhibition <= 0 and not target.is_exposed:
            target.is_exposed = true
            _log("%s is exposed! Protective guard has collapsed." % target.name)

    if target.composure > 0 and damage > 0:
        var comp_dmg: int = min(target.composure, damage)
        target.composure -= comp_dmg
        damage -= comp_dmg

    var dealt: int = original - damage
    return dealt

# -------------------------------------------------------------------
# Escalation
# -------------------------------------------------------------------

func _update_escalation_stage() -> void:
    if sarah.is_exposed:
        escalation_stage = EscalationStage.INTIMACY
        return

    if intensity < 25:
        escalation_stage = EscalationStage.APPROACH
    elif intensity < 50:
        escalation_stage = EscalationStage.CLOSE_QUARTERS
    else:
        escalation_stage = EscalationStage.EMBRACE

func _get_escalation_name() -> String:
    match escalation_stage:
        EscalationStage.APPROACH:
            return "Approach"
        EscalationStage.CLOSE_QUARTERS:
            return "Close Quarters"
        EscalationStage.EMBRACE:
            return "Embrace"
        EscalationStage.INTIMACY:
            return "Intimacy"
    return ""

# -------------------------------------------------------------------
# Sarah AI
# -------------------------------------------------------------------

func _sarah_take_turn() -> void:
    _log("Sarah's turn begins. Stage: %s" % _get_escalation_name())

    var small_actions: Array[Dictionary] = [
        {"desc": "She throws a sharp remark.", "damage": 3, "tension_gain": 2, "arousal_gain": 0},
        {"desc": "She leans in, testing your resolve.", "damage": 4, "tension_gain": 1, "arousal_gain": 2},
        {"desc": "She studies you silently.", "damage": 2, "tension_gain": 3, "arousal_gain": 1}
    ]
    var medium_actions: Array[Dictionary] = [
        {"desc": "She closes the distance and holds your gaze.", "damage": 8, "tension_gain": 4, "arousal_gain": 4},
        {"desc": "She brushes close as she passes behind you.", "damage": 10, "tension_gain": 3, "arousal_gain": 5}
    ]
    var large_actions: Array[Dictionary] = [
        {"desc": "She takes complete control of the moment.", "damage": 16, "tension_gain": 6, "arousal_gain": 8},
        {"desc": "She dismantles your composure with precision.", "damage": 20, "tension_gain": 8, "arousal_gain": 6}
    ]

    var pattern_roll: float = rng.randf()

    if escalation_stage == EscalationStage.APPROACH or escalation_stage == EscalationStage.CLOSE_QUARTERS:
        if pattern_roll < 0.6:
            for i in range(3):
                _sarah_execute_action(small_actions.pick_random())
        else:
            _sarah_execute_action(medium_actions.pick_random())
            _sarah_execute_action(small_actions.pick_random())
    else:
        if pattern_roll < 0.5:
            _sarah_execute_action(large_actions.pick_random())
        elif pattern_roll < 0.75:
            _sarah_execute_action(medium_actions.pick_random())
            _sarah_execute_action(small_actions.pick_random())
        else:
            for i in range(3):
                _sarah_execute_action(small_actions.pick_random())

func _sarah_execute_action(data: Dictionary) -> void:
    var desc: String = data.get("desc", "")
    var dmg: int = data.get("damage", 0)
    var t_gain: int = data.get("tension_gain", 0)
    var a_gain: int = data.get("arousal_gain", 0)

    if desc != "":
        _log(desc)

    var dealt: int = _apply_damage(player, dmg)
    if dealt > 0:
        _log("You take %d damage." % dealt)

    tension = clampi(tension + t_gain, 0, 100)
    arousal = clampi(arousal + a_gain, 0, 100)

# -------------------------------------------------------------------
# Turn flow
# -------------------------------------------------------------------

func _on_end_turn_pressed() -> void:
    if game_over:
        return

    _log("You end your turn. Focus degrades.")
    player.focus = int(floor(float(player.focus) / 2.0))

    _sarah_take_turn()
    _check_defeat_condition()

    if not game_over:
        player_ap = PLAYER_AP_MAX
        turn_number += 1
        _update_escalation_stage()
        _refresh_all_ui()

func _check_victory_condition() -> void:
    if sarah.composure <= 0 and not game_over:
        game_over = true
        player_won = true
        _show_game_over(true)

func _check_defeat_condition() -> void:
    if player.composure <= 0 and not game_over:
        game_over = true
        player_won = false
        _show_game_over(false)

func _show_game_over(won: bool) -> void:
    game_over = true
    player_won = won
    var msg: String = ""
    if won:
        msg = "Victory! Sarah's composure is broken.\nTurns: %d   Intensity: %d" % [turn_number, intensity]
    else:
        msg = "Defeat. You lose your composure.\nTurns: %d   Intensity: %d" % [turn_number, intensity]

    game_over_label.text = msg
    game_over_panel.visible = true
    _refresh_all_ui()

func _on_play_again_pressed() -> void:
    _reset_game()
