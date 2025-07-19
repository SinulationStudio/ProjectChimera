# Filename: cards/Card.gd
# Script for the Card scene, representing a single "Minimalist Data Fragment".

extends PanelContainer

# Signal emitted when the card is clicked, passing itself as an argument.
signal card_played(card)

# --- Nodes ---
@onready var name_label: Label = $VBoxContainer/Header/NameLabel
@onready var cost_label: Label = $VBoxContainer/Header/CostLabel
@onready var effect_label: RichTextLabel = $VBoxContainer/EffectLabel
@onready var card_art: TextureRect = $VBoxContainer/CardArt

# --- Card Data ---
# We will eventually create a CardData custom resource for this.
var card_data: Dictionary

# --- Public Methods ---

# Populates the card's UI elements from a dictionary of data.
func set_data(data: Dictionary):
	card_data = data
	name_label.text = card_data.get("name", "Unnamed Card")
	cost_label.text = str(card_data.get("cost", "0"))
	effect_label.text = card_data.get("effect_text", "No effect.")
	# card_art.texture = load(card_data.get("art_path", "res://assets/textures/placeholder_art.png")) # Placeholder

# --- Internal Godot Methods ---

# Handle mouse input to detect when the card is played.
func _gui_input(event: InputEvent):
	if event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT and event.is_pressed():
		emit_signal("card_played", self)
		# Add a visual/audio cue for selection
		get_viewport().set_input_as_handled()

# --- Signal Connections (for hover effects) ---

func _on_mouse_entered():
	# Create a tween to animate the hover effect.
	var tween = create_tween().set_trans(Tween.TRANS_QUINT).set_ease(Tween.EASE_OUT)
	# Animate scale and modulate color to indicate selection.
	tween.tween_property(self, "scale", Vector2(1.05, 1.05), 0.1)
	tween.tween_property(self, "modulate", Color(0.8, 0.9, 1.0), 0.1)


func _on_mouse_exited():
	# Create a tween to animate back to the default state.
	var tween = create_tween().set_trans(Tween.TRANS_QUINT).set_ease(Tween.EASE_OUT)
	# Animate back to normal scale and color.
	tween.tween_property(self, "scale", Vector2(1.0, 1.0), 0.1)
	tween.tween_property(self, "modulate", Color(1.0, 1.0, 1.0), 0.1)
