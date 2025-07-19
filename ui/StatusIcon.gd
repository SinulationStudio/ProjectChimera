# Filename: ui/StatusIcon.gd
# A simple, reusable component for displaying a status effect icon with a value.
extends PanelContainer

@onready var label: Label = $Label

# Sets the text displayed in the center of the icon.
func set_value(value: String):
	label.text = value
