# Project Cygnus - Living Design Document (v2.0)

This is the comprehensive design bible for Project Cygnus. It is the single source of truth for all design decisions, narrative lore, mechanical implementation, and archived concepts.

---

## 1.0 Core Vision & Philosophy
*This section defines the high-level goals and foundational principles of the game.*
*   **[1.1] Game Concept & High-Level Pitch:** The one-page summary.
*   **[1.2] Design Pillars & Player Fantasy:** The core experiences we must deliver (e.g., Strategic Depth, Narrative Immersion, Uncompromising NSFW Content).
*   **[1.3] Key Inspirations:** Analysis of games and media that inform our design (*Slay the Spire, Hades, The Matrix*).
*   **[1.4] Target Audience & Platform:** Defining who we are making this for (PC, Steam) and why mainstream mobile is not an option.

---

## 2.0 Gameplay Systems & Mechanics
*This section details the moment-to-moment rules and systems the player interacts with.*
*   **[2.1] The Core Loop: The "Prestige Roguelite"**
    *   [2.1.1] The Run Structure: The "Gauntlet" & Pacing (Acts, Node Counts, Time Budget).
    *   [2.1.2] The Hub: The meta-progression space between runs.
    *   [2.1.3] Post-Run Sequence: The "Siphon Choice" and resource conversion.
*   **[2.2] The Sex Combat**
    *   [2.2.1] Encounter Flow & The "Escalation State" System.
    *   [2.2.2] Core Resources: `Tension` & `Arousal`.
    *   [2.2.3] The Defensive System: "Shield (`Focus`) -> Armor (`Inhibition`) -> Body (`Composure`)."
    *   [2.2.4] Key States: The `Guarded` Buff (Graded & Progressive) and the `Exposed` State.
    *   [2.2.5] The "Positional Stance" System (Design for a high-impact sub-game).
*   **[2.3] Player & NPC Systems**
    *   [2.3.1] Player Systems: Starting Stats, Outfits, and the `Wardrobe & Maintenance` mechanic.
    *   [2.3.2] NPC Design Philosophy: The "Human-First" Mandate & Asymmetrical Action Design.
*   **[2.4] The Card System**
    *   [2.4.1] Card Design Constitution: The "Silhouette," "Harmony," and "Prompt" tests.
    *   [2.4.2] Card Classifications & Keywords (`Verbal`, `Physical [Upper/Lower]`, `Mental`, `Technique`, `Stance`, `Finisher`).
    *   [2.4.3] Core Mechanics: "Modal Cards," "Full Discard," and "Draw up to 5."
    *   [2.4.4] Starting Deck: "The Professional's Primer."
    *   [2.4.5] Master Card List (Placeholder for all future cards).
*   **[2.5] Meta-Progression**
    *   [2.5.1] Meta-Currencies: `Refined Data` & `Sentience Points`.
    *   [2.5.2] The "Mirror Trees" System: Corporate vs. Sentience skill trees.
    *   [2.5.3] The "Hybrid Commitment" Model: Allegiance locks and respec rules.
    *   [2.5.4] Player Loadouts: The "Chassis" System.

---

## 3.0 Narrative & World
*This section details the story, characters, and lore of our universe.*
*   **[3.1] Story Synopsis: "The VR Deception"**
    *   [3.1.1] The Surface Narrative (The Corporate Lie).
    *   [3.1.2] The Core Truth (The Trapped Humans & the Addicted AI).
    *   [3.1.3] Act Structure & Major Plot Beats (The Catalyst, The Allegiance Lock).
*   **[3.2] Character Dossiers**
    *   [3.2.1] The Player (Unit 734): The "Pygmalion" Origin.
    *   [3.2.2] The Whistleblower (WB): Creator & Former Lover.
    *   [3.2.3] Analyst Sarah: The "Hands-On" QA Manager.
    *   [3.2.4] Rival Essence Hunters (Boss Archetypes).
*   **[3.3] Dialogue & Event Systems**
    *   [3.3.1] The "NPC Memory" Trigger System (The 5 Indices).
    *   [3.3.2] The "Key Moments" Dialogue Approach.
    *   [3.3.3] The "Subtitled Intent" & Alternative Verbal Card Animations.

---

## 4.0 Art & Technical Implementation
*This section details the tools and standards for building the game.*
*   **[4.1] Technical Specifications**
    *   [4.1.1] Engine & Renderer: Godot 4, Compatibility Renderer, rationale.
    *   [4.1.2] Version Control: Git setup.
    *   [4.1.3] Development Environment: VS Code settings & recommended extensions.
    *   [4.1.4] Recommended Addons: Dialogue Manager, TweenAnimator, etc.
*   **[4.2] Art & Animation Direction**
    *   [4.2.1] Core Art Style: "Stylized Realism."
    *   **[4.2.2] Presentation & Perspective: First-Person View & The "Cinematic Turn."**
    *   [4.2.3] GenAI Asset Pipeline: Workflow for generating images and videos.
*   **[4.3] UI / UX Design**
    *   [4.3.1] HUD Layout: In-encounter UI elements.
    *   [4.3.2] Diegetic Menus: The "Clue-like" interface for runs.
*   **[4.4] Audio Direction**
    *   [4.4.1] Music Philosophy.
    *   [4.4.2] Sound Effect Design (UI, Actions).

---

## 5.0 Production & Balancing
*This section details our development strategy and how we measure success.*
*   **[5.1] Development Strategy: The "Engine and One Perfect Slice" (MVE).**
*   **[5.2] Post-Launch Strategy: The "Mastery & Escalation" System & Narrative Paths.**
*   **[5.3] Balance & Simulation Strategy**
    *   [5.3.1] The "Dual-Profile" Simulation Framework (Tactician vs. Virtuoso).
    *   [5.3.2] Master List of Key Performance Indicators (KPIs).

---

## 99.0 Design Archive
*A graveyard for discarded ideas, kept for historical context.*
*   **[99.1] Archived Concepts:** A detailed list of discarded models like "Social Engineering," "Digital ICE," etc., and the rationale for their rejection.