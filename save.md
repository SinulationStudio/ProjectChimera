# Project Chimera: Living Development Diary

## Instructions for Gemini CLI

**On Session Start:** Read this entire file to understand the project's history. Provide a concise summary of the **most recent** "Session Summary" and its "Suggested Next Steps" to me. Your goal is to seamlessly continue our work.

**On Session End (Saving):** When asked to save, you must **append** to this file, not overwrite it. Create a new entry for the current session's work.
1.  Add a `---` separator to distinguish from previous entries.
2.  Add a new heading: `## Session Summary (Date, HH:MM AM/PM)`. To get the timestamp, use the `date /t && time /t` command.
3.  Under the new heading, detail the work, discussions, and decisions made during the current session.
4.  Define the project's "Last Known State" at the end of the session.
5.  Propose clear, actionable "Suggested Next Steps" for the following session.

---

## Session Summary (Friday, July 18, 2025, 04:50 PM)

1.  **Initial Analysis:** We began by analyzing the existing UI wireframe (`ss.jpg`) against the design goals in `ui_summary.md`. We identified that while the basic layout was functional, it failed to meet key aesthetic and mechanical requirements (e.g., cards were not holographic, the "chunked" inhibition bar was missing, UI layouts were inconsistent).

2.  **Ideation & Rejection:** We briefly considered and rejected a traditional fighting game UI layout, concluding that adhering to the conventions of the *actual* genre (digital card games) was more appropriate. The core principle for card games is "Player at the Bottom, Opponent at the Top."

3.  **Design Evolution - The "Four-Pod" Layout:** We collaboratively designed a new UI layout concept: a symmetrical, four-corner "pod" layout to balance the screen and enhance the diegetic "cockpit visor" feel.
    *   **Top-Left:** Opponent Vitals.
    *   **Top-Right:** Opponent Status.
    *   **Bottom-Left:** Player Vitals.
    *   **Bottom-Right:** Player Resources.

4.  **Hand Management - The "Fanned Hand":** We solved the issue of fitting up to 10 cards by agreeing on a dynamic "fanned hand" layout, positioned in the arc between the two bottom pods, with a "hover-to-focus" interaction.

5.  **Saving Mechanism:** We established that this `save.md` file should function as a "Living Development Diary," with each new save appending to the document rather than overwriting it, including a full timestamp.

---

## Last Known State

We have a verbally agreed-upon, robust UI concept: the **symmetrical "Four-Pod" layout with a "Fanned Hand"**. This concept currently exists only as a detailed description in this diary. No new wireframes, assets, or code have been created yet. The process for maintaining this diary has also been established.

## Suggested Next Steps

1.  **Visual Mockup:** Create a new visual wireframe/mockup that accurately represents the "Four-Pod" layout and the "Fanned Hand." This will serve as the new visual target for implementation.
2.  **Godot Scene Refactoring:** Begin refactoring the `CombatUI.tscn` scene. This would involve:
    *   Removing the old central UI containers.
    *   Creating four new `Control` nodes (or `PanelContainer`) for each of the corner pods.
    *   Re-parenting the existing status bars and labels into their new pod locations.
3.  **Fanned Hand Implementation:** Start developing the logic for the fanned hand display in `CombatUI.gd`. This will require code to dynamically calculate the position, rotation, and overlap of card scenes based on the number of cards in hand.

---

## Session Summary (Monday, July 21, 2025, 12:58 AM)

1.  **Layout Revision:** We revised the "Four-Pod" layout. The Player Vitals are now definitively in the **Top-Left** and the Opponent Vitals are in the **Top-Right**. This is a key design decision to reinforce the "cockpit visor" feel, even though it breaks from card game conventions. The player's health bars will deplete from right-to-left.
2.  **Backup:** We created a backup of the original UI files in the `ui_backup` directory before making major changes.
3.  **Scene Refactoring:** We successfully refactored the `CombatUI.tscn` scene from a two-panel layout to the new four-pod design. This involved restructuring the scene tree and adjusting the layout properties of all major UI elements.
4.  **Script Update:** We updated the `CombatUI.gd` script to reflect the new node paths in the refactored scene, ensuring all `@onready` variables point to the correct UI elements.
5.  **Fanned Hand Implementation:** We implemented the logic for the fanned hand display. This included changing the `PlayerHandContainer` to a standard `Control` node and adding a new `_update_hand_layout` function to `CombatUI.gd` to dynamically calculate the position and rotation of cards.

## Last Known State

The new four-pod UI layout is implemented in both the `CombatUI.tscn` scene and the `CombatUI.gd` script. The fanned hand logic is in place. The project is ready to be run to visually inspect the new UI.

## Suggested Next Steps

1.  **Run the Godot Project:** Execute the Godot project to visually inspect the new UI layout and the fanned hand functionality. The best way to do this is to use the Godot executable from the command line in headless mode with the `--export-debug` flag, targeting a specific scene if needed. This will allow us to catch any runtime errors and see the visual output.
2.  **Debug & Refine:** Based on the visual output, we will likely need to debug and refine the layout. This could involve adjusting the fanning algorithm parameters in `CombatUI.gd`, tweaking the pod positions in `CombatUI.tscn`, or fixing any script errors that arise.
3.  **Hover-to-Focus:** Implement the "hover-to-focus" interaction for the fanned hand, where hovering over a card brings it to the forefront and slightly enlarges it.

---

## Session Summary (Monday, July 21, 2025, 08:30 PM)

1.  **Visual Bug Squashing:** Based on the provided screenshot (`ss.jpg`), we identified and fixed two visual bugs in the UI.
    *   **Player Inhibition Bar:** The logic in `CombatUI.gd` was corrected to make the player's inhibition chunks deplete sequentially from right-to-left.
    *   **Opponent Inhibition Bar:** The logic in `CombatUI.gd` was corrected to make the opponent's inhibition chunks deplete sequentially from left-to-right, and the `fill_mode` in `CombatUI.tscn` was adjusted to match.

## Last Known State

The UI is now visually correct according to the latest design. The four-pod layout is in place, the fanned hand is functional, and the inhibition bars for both player and opponent deplete in the correct directions and manner.

## Suggested Next Steps

1.  **Commit Changes:** Commit the recent UI refactoring and bug fixes to the Git repository with a clear and descriptive commit message.
2.  **Hover-to-Focus:** Implement the "hover-to-focus" interaction for the fanned hand, where hovering over a card brings it to the forefront and slightly enlarges it.
3.  **Card Playability:** Implement a system to determine if a card is playable based on the player's current resources (e.g., Tension, Arousal). This would involve adding logic to `CombatUI.gd` and visual cues to the `Card.tscn` scene (e.g., a colored glow).
