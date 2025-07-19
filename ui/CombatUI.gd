# Filename: ui/CombatUI.gd
# Manages the entire combat HUD, including player/opponent vitals and the card hand.

extends Control

# --- Preloaded Scenes ---
const CardScene = preload("res://cards/Card.tscn")

# --- Nodes ---
@onready var player_hand_container: HBoxContainer = $PlayerHandContainer
@onready var end_turn_button: Button = $PlayerCockpit/VBoxContainer/ActionContainer/EndTurnButton
@onready var deck_count_label: Label = $PlayerCockpit/VBoxContainer/ActionContainer/DeckCountLabel
@onready var discard_pile_label: Label = $PlayerCockpit/VBoxContainer/ActionContainer/DiscardPileLabel


# Opponent Nodes
@onready var opponent_composure_bar: ProgressBar = $OpponentVitalsContainer/VBoxContainer/OpponentComposureBar
@onready var opponent_composure_label: Label = $OpponentVitalsContainer/VBoxContainer/OpponentComposureBar/OpponentComposureLabel
@onready var opponent_inhibition_chunks = [$OpponentVitalsContainer/VBoxContainer/OpponentInhibitionContainer/OpponentInhibitionChunk1, $OpponentVitalsContainer/VBoxContainer/OpponentInhibitionContainer/OpponentInhibitionChunk2]
@onready var opponent_focus_icon = $OpponentVitalsContainer/VBoxContainer/OpponentStats/OpponentFocusIcon
@onready var opponent_guarded_upper: Label = $OpponentVitalsContainer/VBoxContainer/OpponentStats/OpponentGuardedContainer/OpponentGuardedUpper
@onready var opponent_guarded_lower: Label = $OpponentVitalsContainer/VBoxContainer/OpponentStats/OpponentGuardedContainer/OpponentGuardedLower

# Player Nodes
@onready var player_composure_bar: ProgressBar = $PlayerCockpit/VBoxContainer/PlayerVitalsContainer/PlayerComposureBar
@onready var player_composure_label: Label = $PlayerCockpit/VBoxContainer/PlayerVitalsContainer/PlayerComposureBar/PlayerComposureLabel
@onready var player_inhibition_chunks = [$PlayerCockpit/VBoxContainer/PlayerVitalsContainer/PlayerInhibitionContainer/PlayerInhibitionChunk1, $PlayerCockpit/VBoxContainer/PlayerVitalsContainer/PlayerInhibitionContainer/PlayerInhibitionChunk2, $PlayerCockpit/VBoxContainer/PlayerVitalsContainer/PlayerInhibitionContainer/PlayerInhibitionChunk3]
@onready var player_focus_icon = $PlayerCockpit/VBoxContainer/PlayerStats/PlayerFocusIcon
@onready var player_tension_label: Label = $PlayerCockpit/VBoxContainer/PlayerStats/PlayerTensionLabel
@onready var player_arousal_label: Label = $PlayerCockpit/VBoxContainer/PlayerStats/PlayerArousalLabel

# --- Game State ---
var deck: Array[Dictionary] = []
var hand: Array[Node] = []
var discard_pile: Array[Dictionary] = []

# --- Public Methods ---

func update_player_vitals(data: Dictionary):
	var max_composure = data.get("max_composure", 100)
	var composure = data.get("composure", 100)
	var inhibition = data.get("inhibition", 50)
	var focus = data.get("focus", 0)

	player_composure_bar.max_value = max_composure
	player_composure_bar.value = composure
	player_composure_label.text = "%d/%d" % [composure, max_composure]

	# Update Inhibition Chunks (20, 20, 10)
	var inhibition_remaining = float(inhibition)
	for chunk in player_inhibition_chunks:
		var chunk_value = min(inhibition_remaining, chunk.max_value)
		chunk.value = chunk_value
		inhibition_remaining -= chunk_value
	
	player_tension_label.text = "Tension: %d" % data.get("tension", 0)
	player_arousal_label.text = "Arousal: %d" % data.get("arousal", 0)
	
	player_focus_icon.set_value(str(focus))
	player_focus_icon.visible = focus > 0

func update_opponent_vitals(data: Dictionary):
	var max_composure = data.get("max_composure", 100)
	var composure = data.get("composure", 100)
	var inhibition = data.get("inhibition", 50)
	var focus = data.get("focus", 0)

	opponent_composure_bar.max_value = max_composure
	opponent_composure_bar.value = composure
	opponent_composure_label.text = "%d/%d" % [composure, max_composure]

	# Update Inhibition Chunks (25, 25) - Reversed
	var total_damage = data.get("max_inhibition", 50) - inhibition
	# Iterate backwards for right-to-left depletion
	for i in range(opponent_inhibition_chunks.size() - 1, -1, -1):
		var chunk = opponent_inhibition_chunks[i]
		var damage_to_deal = min(total_damage, chunk.max_value)
		chunk.value = chunk.max_value - damage_to_deal
		total_damage -= damage_to_deal

	opponent_focus_icon.set_value(str(focus))
	opponent_focus_icon.visible = focus > 0

	# Update Guarded Status based on inhibition breakpoints
	var guarded_upper = inhibition > 25
	var guarded_lower = inhibition > 0
	opponent_guarded_upper.visible = guarded_upper
	opponent_guarded_lower.visible = guarded_lower
	opponent_guarded_upper.text = "G[U]: %d%%" % data.get("guarded_upper_value", 30)
	opponent_guarded_lower.text = "G[L]: %d%%" % data.get("guarded_lower_value", 30)


# Initializes the combat scene. For the MVE, we'''ll use some test data.
func start_combat():
	# Create a sample deck for testing.
	deck = [
		{ "name": "Whisper Promise", "cost": 1, "effect_text": "Generate 10 [color=#00FFFF]Tension[/color]." },
		{ "name": "Caress Thigh", "cost": 1, "effect_text": "Generate 8 [color=#FF69B4]Arousal[/color]." },
		{ "name": "Steel Nerves", "cost": 0, "effect_text": "Gain 5 [color=lightblue]Focus[/color]." },
		{ "name": "Gentle Kiss", "cost": 2, "effect_text": "Deal 10 [color=red]Composure[/color] damage." },
		{ "name": "Deep Gaze", "cost": 1, "effect_text": "Opponent loses 5 [color=lightblue]Focus[/color]." }
	]
	
	# Draw an initial hand.
	draw_cards(5)

	# Set initial opponent stats for testing (Sarah) - Inhibition at 30 to show partial depletion
	var opponent_stats = {
		"composure": 100, "max_composure": 100,
		"inhibition": 30, "max_inhibition": 50,
		"focus": 10,
		"guarded_upper_value": 30,
		"guarded_lower_value": 30
	}
	update_opponent_vitals(opponent_stats)

	# Set initial player stats for testing - Inhibition at 35 to show partial depletion
	var player_stats = {
		"composure": 100, "max_composure": 100,
		"inhibition": 35, "max_inhibition": 50,
		"focus": 5,
		"tension": 0,
		"arousal": 0
	}
	update_player_vitals(player_stats)
	
	_update_deck_discard_labels()


# Draws a specified number of cards from the deck.
func draw_cards(amount: int):
	for i in range(amount):
		if deck.is_empty():
			# Reshuffle discard pile into deck if needed (not implemented for MVE)
			break
		
		var card_data = deck.pop_front()
		add_card_to_hand(card_data)
	
	_update_deck_discard_labels()

# Instances a new card scene and adds it to the player'''s hand.
func add_card_to_hand(card_data: Dictionary):
	var new_card = CardScene.instantiate()
	player_hand_container.add_child(new_card)
	new_card.set_data(card_data)
	hand.append(new_card)
	
	# Connect the card'''s played signal to our handler.
	new_card.card_played.connect(_on_card_played)

func _update_deck_discard_labels():
	deck_count_label.text = "Deck: %d" % deck.size()
	discard_pile_label.text = "Discard: %d" % discard_pile.size()

# --- Signal Handlers ---

# Called when a card in the hand is clicked.
func _on_card_played(card_node):
	print("Card played: ", card_node.card_data.name)
	
	# Move card from hand to discard pile
	hand.erase(card_node)
	discard_pile.append(card_node.card_data)
	card_node.queue_free()
	
	_update_deck_discard_labels()

func _on_EndTurnButton_pressed():
	print("Turn Ended")
	# NOTE: Opponent turn logic will go here.
	# For now, we'''ll just draw the player a new hand.
	
	# Discard current hand
	for card_node in hand:
		discard_pile.append(card_node.card_data)
		card_node.queue_free()
	hand.clear()
	
	# Draw 5 new cards
	draw_cards(5)


# --- Godot Methods ---

func _ready():
	# Connect signals
	end_turn_button.pressed.connect(_on_EndTurnButton_pressed)
	
	# Start combat automatically for testing purposes.
	start_combat()
