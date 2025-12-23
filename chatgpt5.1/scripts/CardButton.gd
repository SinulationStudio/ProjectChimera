extends Button
class_name CardButton

signal card_chosen(card)

var card

func setup(new_card, ap: int, damage: int, tension_cost: int, arousal_cost: int) -> void:
    card = new_card
    var cost_text := "AP:%d" % ap
    if tension_cost > 0:
        cost_text += "  T:%d" % tension_cost
    if arousal_cost > 0:
        cost_text += "  A:%d" % arousal_cost
    var dmg_text := ""
    if damage > 0:
        dmg_text = "  Dmg:%d" % damage
    text = "%s\n%s%s" % [card.name, cost_text, dmg_text]

func _ready() -> void:
    pressed.connect(_on_pressed)

func _on_pressed() -> void:
    if card != null:
        card_chosen.emit(card)
