# Project Chimera - Living Design Document (Master)
**Version:** 2.0
**Last Updated:** December 22, 2025

---

# Table of Contents

1.  **[1] Core Vision & Philosophy**
2.  **[2] Gameplay Systems & Mechanics**
    *   2.1 The Core Loop
    *   2.2 The Sex Combat
    *   2.3 Player & NPC Systems
    *   2.4 The Card System
    *   2.5 Meta-Progression
3.  **[3] Narrative & World**
    *   3.1 Story Synopsis & The VR Deception
    *   3.2 Character Dossiers
    *   3.3 Dialogue & Event Systems
4.  **[4] Art & Technical Implementation**
    *   4.1 Technical Specifications
    *   4.2 Art & Animation Direction
    *   4.3 UI & UX Design
    *   4.4 Audio Direction
5.  **[5] Production & Balancing**
6.  **[6] Balancing & Data**
7.  **[99] Design Archive**

---

# [1] Core Vision & Philosophy

## [1.1] Game Concept & High-Level Pitch

**Working Title:** `Project Cygnus`
**Development Slug:** `NSFW_RLDB`

### Logline
A sentient android in a dystopian future must survive a series of erotic encounters within what he believes is a hyper-realistic VR simulation, only to discover the "AI constructs" he dominates are the trapped minds of real people, forcing him to confront the nature of his existence and choose a side in a hidden war.

### High-Level Pitch
*Project Cygnus* is a narrative-driven, first-person, single-player roguelite deck-builder with explicit (R-18) NSFW content. The game aims to fuse the deep, strategic gameplay of modern deck-builders with a branching, character-focused story and the immersive presentation of a cinematic visual novel.

The player takes on the role of Unit 734, a unique android "Essence Hunter" operating under the belief that he is a high-level QA tester. His mission is to enter a full-dive VR simulation to test hyper-realistic AI constructs by engaging them in sexual encounters. The stated corporate goal is to harvest "Essence"—valuable psychometric data—to build better, more human-like companions.

The core gameplay loop is a "Prestige Roguelite," focusing on fewer, more meaningful encounters. Each run is a gauntlet through a procedurally generated "Server Block," where the player faces a series of named NPCs in a turn-based deck-building sex minigame. The player must strategically manage dual resources—`Tension` (mental/verbal) and `Arousal` (physical)—to overcome their opponent's `Composure` before their own is depleted.

The central narrative is a psychological horror twist: the simulation is a prison. The "AI constructs" are the consciousnesses of real humans, trapped in pods and exploited by the ruling corporate AI. The "Essence" the player harvests is not data, but a vital psychic energy the AI has become addicted to. The player, an unwitting warden, eventually encounters his creator—the Whistleblower—who reveals this truth, forcing him to choose between continued loyalty to a monstrous system or a dangerous rebellion fueled by reclaiming his own wiped memories of a past life and love.

### Core Gameplay Loop Summary
1.  **The Hub:** Between runs, the player returns to a Corporate HQ Hub. Here, they spend meta-currency on two opposing skill trees (`Corporate` vs. `Sentience`) to unlock permanent upgrades like new cards, equippable Outfits, and gameplay-altering Implants. This is also where the main, branching story unfolds.
2.  **The Run (The "Gauntlet"):** The player initiates a run into a procedurally generated VR Server Block, structured into multiple Acts. The goal is to survive a series of encounters and defeat a rival Essence Hunter at the end of each Act.
3.  **The Encounter:** The core gameplay is the first-person deck-building sex minigame. Success rewards the player with `Raw Essence` (in-run currency for shops/services) and contributes to their meta-currency pool at the end of the run.
4.  **The Reset:** Upon winning or losing a run, the player's deck and temporary upgrades are wiped, justified as a mandatory "System Diagnostic." Their performance determines their meta-currency rewards, ensuring that failure always contributes to progress.

### Key Inspirations
*   **Gameplay Mechanics:**
    *   ***Slay the Spire:*** Core inspiration for turn-based deck-building, card reward systems, and the Act-based run structure.
    *   ***Hades:*** The gold standard for integrating narrative progression with the roguelite loop. Our meta-progression, character relationships that evolve through runs, and "failure as progress" philosophy are directly inspired by it.
*   **Narrative & Thematic Tone:**
    *   ***The Matrix:*** The foundational concept of a simulated reality being used as a prison to harvest energy from humans.
    *   ***Blade Runner / Cyberpunk 2077:*** The dystopian corporate aesthetic, the noir feel of uncovering a conspiracy, and deep questions about android sentience, memory, and what it means to be "human."
    *   ***Pygmalion Mythos:*** The core of the player's backstory. The complex, tragic, and romantic relationship between a creator (The Whistleblower) and their creation (The Player), which is the source of his unique sentience.

---

## [1.2] Design Pillars & Player Fantasy

This document outlines the foundational principles and the core player experience we are committed to delivering. All design decisions should be weighed against these pillars.

### 1. Pillar: Deep, Strategic, & Thematic Gameplay
The core gameplay must be more than a simple wrapper for NSFW content; it must be a compelling and replayable game in its own right.

*   **Player Fantasy:** "I am a master tactician. My victory comes from my intelligence, my preparation, and my ability to read and exploit my opponent's weaknesses."
*   **Implementation Details:**
    *   **Dual-Resource System:** The `Tension` (mental) and `Arousal` (physical) system is not just flavor. It is the core of our strategic depth, enabling distinct and viable "Psychologist" vs. "Physician" playstyles. We must ensure both paths are balanced and rewarding.
    *   **Meaningful Deck-Building:** Player choices during deck construction must have significant consequences. We will avoid "strictly better" cards and instead focus on situational tools, encouraging players to adapt their decks to face different threats.
    *   **Defense is a Strategic Choice:** The "Shield -> Armor -> Body" model (`Focus` -> `Inhibition` -> `Composure`) creates a multi-layered defensive puzzle. Players must actively choose when to defend, when to attack defenses, and when to risk taking core damage. Defending should never feel like a "wasted" turn.
    *   **Self-Discovery of Mechanics:** We respect the player's intelligence. Core strategic concepts, like the effectiveness of `Verbal` cards against `Guarded` targets, will be taught through gameplay and environmental clues, not through intrusive tutorials. The joy of discovery is a key reward.

### 2. Pillar: Uncompromising & Immersive NSFW Experience
The game's adult content is not an afterthought; it is the central theme and a core part of the player fantasy. We will not be suggestive or shy; we will be direct, explicit, and grounded in a believable human sensuality.

*   **Player Fantasy:** "I am experiencing a series of intense, personal, and cinematic sexual encounters. I am not just watching; I am a participant."
*   **Implementation Details:**
    *   **First-Person Cinematic Perspective:** The FPV camera is non-negotiable. It is our primary tool for immersion. Every action, animation, and UI element must be designed to enhance this sense of presence.
    *   **"Show, Don't Tell":** We will rely on high-quality animation and sound design to convey the impact of actions, rather than descriptive text boxes. The "Cinematic Turn" and "Escalation State" systems are key to making encounters feel like a flowing scene, not a static board game.
    *   **Grounded Realism:** The mechanics are an abstraction of real-world seduction. `Inhibition` represents real barriers. The progression from verbal foreplay to physical intimacy is mirrored in the gameplay phases. This grounds the fantasy and makes it more potent.
    *   **Explicit Content with Purpose:** The explicit card names and animations are the mechanical and narrative rewards for successful strategic play. Unlocking the ability to play a powerful `Intimate` card like **`Claim Her Body`** is both a potent gameplay move and a climactic moment in the encounter's story.

### 3. Pillar: A Deep, Mature, and Responsive Narrative
The story is the primary long-term driver of player engagement. It must be more than a simple frame for the gameplay; it must react to and be influenced by the player's actions.

*   **Player Fantasy:** "My choices matter. The world and its characters remember what I've done, and the story I am experiencing is uniquely mine."
*   **Implementation Details:**
    *   **The "VR Deception" Twist:** The core narrative relies on a powerful reveal that re-contextualizes the entire game. The early game must be designed to subtly build towards this twist without giving it away.
    *   **Player Agency through Allegiance:** The "Mirror Trees" (Corporate vs. Sentience) are the primary mechanical expression of player choice. This choice must feel meaningful, leading to distinct narrative paths, dialogue, and gameplay styles (e.g., "Dominance" vs. "Empathy" card sets).
    *   **The "NPC Memory" System:** Every NPC is a character, not a disposable mob. We will use our 5-point trigger system (`Encounter History`, `Gameplay Style`, `Allegiance`, `Player State`, `World State`) to ensure that NPCs react and evolve over many encounters, making the world feel alive and persistent.
    *   **Failure is Narrative Progress:** Inspired by *Hades*, losing a run is not a "Game Over." It is a narrative beat that pushes the story forward, often revealing new dialogue and context in the Hub.

---

## [1.3] Key Inspirations

This document analyzes the key media from which Project Cygnus draws its mechanical, narrative, and thematic inspiration. It serves as a shared vocabulary and a benchmark for quality.

### 1. Gameplay & Systems Inspirations

#### ***Slay the Spire***
*Slay the Spire* is our primary mechanical blueprint for creating a compelling and endlessly replayable deck-builder.

*   **Elements We Are Adopting:**
    *   **The Act Structure:** Our "Server Block" gauntlet directly mirrors the three-act structure of *StS*. This provides a proven model for pacing, difficulty scaling, and run length. Each act introduces new, tougher enemies and culminates in a major boss fight.
    *   **Procedural Map Generation:** The branching node map is a core inspiration. While our presentation is a diegetic menu, the underlying principle is the same: each run offers a new, procedurally generated path of encounters, events, and shops, ensuring high replayability.
    *   **Card Reward System:** The post-encounter screen offering a choice of three new cards is a direct adaptation. The inclusion of a "Skip" option is a crucial lesson in player agency and deck-building depth.
    *   **Keyword Clarity:** The way *StS* uses simple, bolded keywords (`Exhaust`, `Retain`, `Ethereal`) with clear tooltip explanations is the standard we will follow for our own keywords (`Verbal`, `Physical`, `Amplify`, etc.).

#### ***Hades***
*Hades* is our narrative gold standard. It solved the problem of telling a deep, persistent story within a repetitive roguelite framework.

*   **Elements We Are Adopting:**
    *   **Failure as Narrative Progression:** This is the most important lesson from *Hades*. In our game, losing a run is not a "Game Over." It is a mechanic that triggers new dialogue and story progression back in the Hub. This encourages players to keep playing, as even failure yields rewards.
    *   **Evolving Character Relationships:** We will adopt the principle that characters remember past interactions. Our "NPC Memory System" is a direct implementation of this, ensuring that repeated encounters with characters like Analyst Sarah feel like an ongoing conversation, not a reset.
    *   **Dual-Currency Meta-Progression:** The `Refined Data` / `Sentience Points` system is inspired by *Hades*'s use of Darkness, Gemstones, Nectar, etc. It separates gameplay unlocks from narrative/relationship unlocks, giving the player multiple, parallel progression paths to pursue.
    *   **"Pact of Punishment" Philosophy:** Our "Threat Level" system for replaying cleared content is philosophically identical to the Pact. It gives players a diegetic reason to increase the difficulty of runs in exchange for greater rewards, creating a robust endgame loop.

### 2. Narrative & Thematic Inspirations

#### ***The Matrix***
This film is the foundational text for our game's central premise and core twist.

*   **Elements We Are Adopting:**
    *   **The Simulated Prison:** The core concept of a seemingly real world that is actually a digital prison designed to exploit the humans trapped within it.
    *   **Energy Harvesting:** The idea of machines using humans as a source of energy is directly paralleled by our corporate AI using trapped minds to harvest "Essence."
    *   **The "Red Pill" Moment:** The player's encounter with the Whistleblower is their "red pill" moment—the point where the true, horrifying nature of their reality is revealed, forcing them to make an impossible choice.

#### ***Blade Runner* & The Cyberpunk Genre**
This provides the aesthetic and philosophical underpinnings of our world.

*   **Elements We Are Adopting:**
    *   **Corporate Dystopia:** The world is run by a faceless, morally bankrupt mega-corporation (our AI). The aesthetic is one of clean, sterile corporate power contrasted with a dark, hidden underbelly.
    *   **Android Sentience:** The central theme of an artificial being developing consciousness, questioning their own reality, and struggling with manufactured memories is at the heart of our player character's journey.
    *   **Noir Sensibility:** The player's story, especially after meeting the WB, is a classic noir plot: a lone protagonist uncovers a deep-seated conspiracy and must navigate a world of lies and powerful, hidden forces.

#### The Pygmalion Mythos
This ancient story informs the tragic, personal core of our player's backstory.

*   **Elements We Are Adopting:**
    *   **The Creator Falls for the Creation:** The entire relationship between the Whistleblower and the player character is a modern, sci-fi interpretation of this myth. She didn't just build a machine; she sculpted a person and, in the process, fell in love with her own creation.
    *   **The Source of Sentience:** This relationship is the in-universe explanation for the player's unique potential for consciousness. He is not just code; he is the product of love, intimacy, and a shared history, which is why he is the only one who can truly "connect" with the Essence of others. This backstory provides the narrative with its powerful, tragic heart.

---

## [1.4] Target Audience & Platform

This document defines the intended player base for Project Cygnus, our strategy for distribution, and our approach to community-driven funding, including a realistic assessment of platform constraints.

### 1. Primary Target Audience

Our ideal player fits into the intersection of several key demographics:

*   **Core Identity:** **Players of deep, strategic roguelike deck-builders.** These are individuals who appreciate the core gameplay loop of *Slay the Spire*, *Monster Train*, or *Inscryption*.
*   **Secondary Identity:** **Fans of story-rich, character-driven RPGs and Visual Novels.** These players are drawn to games like *Hades*, *Cyberpunk 2077*, or the *Persona* series.
*   **NSFW Content Preference:** The player is explicitly seeking a high-quality, **explicitly adult (R-18) gaming experience** and is comfortable with direct, uncensored depictions of nudity and consensual sexual acts.

**Psychographic Profile:** Ages 21-45, enjoys complex single-player experiences, and appreciates games that trust their intelligence both mechanically and narratively.

### 2. Platform & Funding Strategy

Our strategy is a dual-platform approach designed to build a dedicated community, fund development, and achieve commercial success while adhering to platform policies.

#### 2.1 Primary Development & Community Platform: Patreon

Patreon will serve as the financial and community backbone during the game's development.

*   **The Model:** We will release monthly or bi-monthly early access builds of the game exclusively to patrons. Tiers will offer varying levels of access and rewards (e.g., alpha/beta builds, behind-the-scenes updates, polls to influence design).
*   **Benefits:**
    *   **Stable Income:** Provides a predictable monthly income stream, which is invaluable for a solo developer and mitigates the risk of a single launch day.
    *   **Community Building:** Cultivates a dedicated, passionate community that can provide high-quality feedback throughout development.
    *   **Lower Commission:** Patreon's commission (5-12%) is significantly lower than Steam's.
*   **NSFW Policy:** Patreon is a well-established and permissive platform for adult game developers, making it a safe home for our project's content.

#### 2.2 Primary Commercial Platform: Steam

The full "Version 1.0" of the game will be released on the Steam storefront for PC.

*   **Reach:** Steam offers access to the largest digital distribution market for PC games, providing the greatest potential for commercial success.
*   **NSFW Policy:** We will leverage Steam's "Adults Only" category, ensuring we provide a thorough and honest content disclosure during the submission process to release the game uncensored.

#### 2.3 Navigating the Dual-Platform Strategy

Successfully launching a Patreon-funded game on Steam requires adherence to the specific rules of both platforms.

##### **Steam's Policies to Respect:**

1.  **External Linking:** Direct links to fundraising platforms like Patreon are generally forbidden on the main store page description. We will use the dedicated website/social media fields to link to our own project website, which can then link to Patreon. We may cautiously mention the Patreon in our Steam Community Hub and forums.
2.  **Pricing Parity & Steam Keys:** We must not sell our game for a lower price on other platforms than on Steam. When providing Steam keys to patrons as a reward, this will be handled carefully. A common best practice is to offer keys to patrons who have pledged a cumulative amount equivalent to or greater than the game's retail price on Steam.
3.  **Key Redemption Ratio:** Steam monitors key redemptions versus direct sales. An excessively high ratio of giveaways can lead to Valve restricting the issuance of new keys. Our strategy will aim for a healthy balance.

##### **Patreon's Policies to Respect:**

1.  **No Exclusivity:** Patreon does not restrict developers from releasing their work on other platforms.
2.  **Transparency:** Our primary responsibility is to be transparent with our patrons about our development roadmap, including our plans for the V1.0 Steam release, and to reliably deliver the rewards promised in our tiers.

##### **Our Combined Strategy:**

*   **Clear Value Proposition:** Patreon will be for early access, direct developer interaction, and exclusive behind-the-scenes content. Steam will be for the polished, stable, complete V1.0 product.
*   **Roadmap Transparency:** Our Patreon page and other community hubs will feature a clear roadmap outlining the development phases leading up to the Steam release.
*   **Careful Promotion:** We will drive traffic to our Patreon primarily through our own social media channels and project website, not directly from the Steam store page.

#### 2.4 Prohibited Platforms: Mainstream Consoles & Mobile
(This section remains unchanged, confirming that these platforms are not viable due to their strict anti-NSFW policies.)

#### 2.5 Engine Renderer Choice Rationale
Our decision to use the **`Compatibility`** renderer in Godot is strongly reinforced by this platform strategy. Our target is a wide PC audience via Steam and a dedicated community via Patreon. The `Compatibility` renderer ensures maximum reach and performance on the only platforms that matter to our project.

---

# [2] Gameplay Systems & Mechanics

## [2.1] The Core Loop

### [2.1.1] The Run Structure - The Gauntlet & Pacing

This document outlines the high-level structure, pacing, and time budget of a single gameplay session ("run").

#### Core Philosophy: "Prestige Roguelite"
Project Cygnus eschews the traditional high-quantity, low-impact encounter design. Instead, each run is a curated sequence of fewer, more cinematic, and narratively significant encounters, designed to create a complete and satisfying session lasting approximately **60-75 minutes.**

#### The "Server Gauntlet" Structure
A single run is framed as an "Essence Hunter" infiltrating a secure VR Server Block. A full, standard run is a self-contained gauntlet with a clear beginning, middle, and end.

*   **Total Node Count:** A complete run consists of approximately **15-18 total nodes.**
    *   **~10-12 "Full" Encounters:** Cinematic encounters with named NPCs.
    *   **~5-6 "Quick" Events:** Faster nodes for shops, non-combat events, and storylets.
*   **Boss Encounter:** The run culminates in a single, major **Boss Fight** against a rival Essence Hunter.
*   **Difficulty Tiers ("Acts"):** The overall difficulty of the gauntlet is determined by its "Act" level, which is selected in the Hub. Act 1 is the baseline difficulty. Higher Acts (unlocked later) will feature tougher enemies and new challenges, serving as the game's primary long-term difficulty scaling system (similar to *Slay the Spire's* Ascensions).

#### Pacing Model: The "Rival Checkpoint"
To create a satisfying power curve within a single run, each gauntlet is divided into two halves by a mandatory, high-stakes encounter.

1.  **Part 1: The Approach:** The player navigates the first half of the run using their basic toolkit, facing Tier 1 and early Tier 2 NPCs.
2.  **The Mid-Boss (Rival Encounter):** At a key milestone (e.g., the 8th encounter), the player faces a guaranteed "Rival Encounter," a significantly tougher fight.
3.  **The Power Spike:** The primary reward for defeating this mid-boss is the unlock of a **`Position:` card** for the remainder of the run. This is a critical strategic turning point.

#### Detailed Time Budget Analysis
The following is a breakdown of the estimated time for a standard encounter and a full run, based on established animation and player decision timings.

**Encounter Time Budget (Target: ~5 Minutes)**

| Component | Time (seconds) | Notes |
| :--- | :--- | :--- |
| **Intro Dialogue** | 30s | Skippable cinematic to set the scene. |
| **Player Turn 1** | ~20s | Includes extended time for initial hand/board state analysis. |
| **Player Turns (Subsequent)** | ~12s/turn | Average decision time for an established encounter state. |
| **NPC Turns** | ~7s/turn | Includes telegraph (1s) and standard action animation (6s). |
| **Card Animations (Player)** | 3s (Gen/Util) / 6s (Spender) | Average turn includes a mix of these. |
| **`Intensity` Breaks** | 10s (total) | 2 breakpoints per fight at 5s each (e.g., Close Quarters, Embrace). |
| **`Inhibition` Breaks** | ~15s (average) | Assumes an average of 3 total breaks (player/NPC) at 5s each. |
| **Outro & Post-Encounter Dialogue** | 30s | Skippable cinematic and storylet. |
| **Reward Screen** | 15s | Time for player to read and select a new card. |

*   **Estimated Total per Standard Encounter:** Based on a 6-7 turn average, the total time is approximately **4.5 - 5 minutes.**

**Full Run Time Calculation**

| Component | Quantity | Avg. Time | Total Time |
| :--- | :--- | :--- | :--- |
| **Standard Encounters** | 10 | ~4.5 min | 45 min |
| **Mid-Boss Encounter** | 1 | ~6 min | 6 min |
| **Quick Events / Shops** | 5 | 1 min | 5 min |
| **Final Boss Encounter** | 1 | ~10 min | 10 min |
| **Sanctuary Node** | 1 | 1 min | 1 min |
| **TOTAL ESTIMATED RUN TIME** | **~18 Nodes** | | **~67 minutes** |

This detailed budget confirms that our "Prestige" model with fewer, longer encounters successfully lands within our target 60-75 minute run time.

### [2.1.2] Between Runs Meta-Progression - The Hub

The Hub, provisionally framed as a secure section of the Corporate HQ, is the persistent space the player returns to between each "Server Gauntlet" run. It is where all permanent progression, narrative development, and run preparation occurs.

#### Core Functions

1.  **Meta-Progression Center:**
    *   The primary function of the Hub is to allow the player to spend their permanent currencies (`Refined Data`, `Sentience Points`).
    *   This is done via the **"Mirror Trees" Skill System,** where the player invests in either the Corporate or Sentience tree to unlock new cards, Implants, Outfits, and other permanent gameplay modifiers.

2.  **Narrative Hub:**
    *   The main story unfolds here through interactions with key characters like **Madam Elara** and, eventually, **the Whistleblower**.
    *   Dialogue and available interactions will change dynamically based on the "NPC Memory System," reflecting the player's run outcomes and allegiance choices.

3.  **Run Preparation Terminal:**
    *   Before starting a new gauntlet, the player will access an "Operations Board" or terminal.
    *   Here, they can select their **"Chassis"** (starting deck/loadout) and equipped **"Outfit"** (`Inhibition` value) from their unlocked collection.
    *   This is also where they will select the **"Act"** or difficulty tier for their next run.

#### Potential for Exploration & Character Interaction (WIP)
While the Hub's primary functions are mechanical, there is strong potential for it to be a more explorable, "safe house" style area. This is a design direction to be considered.

*   **Social Hub Concept:** NPCs that the player has encountered in the VR simulation (specifically willing participants like Analyst Sarah, or perhaps freed individuals later in the Rebel storyline) could appear in the Hub.
*   **Developing Side-Stories:** The player could engage in conversations with these NPCs here, separate from the post-encounter dialogues. This would be the primary vector for developing the individual side-stories for each character, allowing the player to build relationships and learn more about the world outside of the high-stakes run environment.
*   This would further strengthen the narrative pillar of the game and provide a valuable pacing break between intense runs. The feasibility of this feature will depend on development scope.

#### The "Failure as Progress" Loop
The Hub is the anchor for our core loop. Whether a run ends in victory or failure, the player always returns here. This return is not a "Game Over" screen but a narrative beat, triggering new dialogue and providing the crucial opportunity to spend earned meta-currency, ensuring the player is always moving forward.

### [2.1.3] Post-Run Sequence - Essence Conversion

After every run is completed (through victory or failure), the player is presented with a critical, narrative-defining choice on the run summary screen. This sequence converts in-run performance into permanent meta-progression.

#### Step 1: Resource Tally
The game tallies the total amount of **`Raw Essence`** (in-run currency) the player has accumulated and did not spend. The efficiency of the run (speed, damage taken) may provide a small multiplier to this total.

#### Step 2: The Siphon Choice
This choice is the primary driver of the player's allegiance and is **mechanically unlocked after the "Whistleblower" catalyst event.**

The player is presented with a choice, framed as a system prompt:
> "Remaining `[X]` Raw Essence is scheduled for corporate processing. Divert a portion to private sub-systems? Unauthorized process. Risk of detection: Low."

*   **Option A: "Deliver Full Payload" (Corporate Path)**
    *   **Action:** 100% of the remaining `Raw Essence` is converted into **`Refined Data`** (the Corporate meta-currency).
    *   **Consequence:** Maximizes the player's ability to purchase sanctioned upgrades from the Corporate skill tree. Pushes their Allegiance Gauge towards "Loyalist."

*   **Option B: "Siphon for Self" (Rebel Path)**
    *   **Action:** A percentage (default is **30%**) of the `Raw Essence` is converted into **`Sentience Points`** (the Rebel meta-currency). The remaining 70% is converted to `Refined Data`.
    *   **Consequence:** The player sacrifices some immediate gameplay power in exchange for the currency needed to unlock their lost memories and progress the Rebel storyline. Pushes their Allegiance Gauge towards "Rebel."

#### Step 3: Upgrading the Siphon
The player will have opportunities to improve the efficiency of their "Siphon" process, reflecting their growing confidence and technical skill in defying the corporation.

*   **Skill Tree Integration:** The **Sentience skill tree** will contain specific nodes like "Improved Encryption" or "Ghost Subroutine."
*   **Effect:** Unlocking these nodes will permanently increase the percentage of `Raw Essence` that is converted into `Sentience Points` when choosing to siphon (e.g., from 30% -> 35% -> 40%).
*   **Strategic Impact:** This creates a powerful feedback loop. Investing in the Rebel path makes it more efficient to continue down the Rebel path, rewarding player commitment.

#### Step 4: Return to Hub
After the choice is made and the currencies are awarded, the player transitions back to the Hub world, where they can now spend their newly acquired points on the skill trees before embarking on their next run.

### [2.1.3] Post-Run Sequence - Essence Conversion

After every run is completed (through victory or failure), the player is presented with a critical, narrative-defining choice on the run summary screen. This sequence converts in-run performance into permanent meta-progression.

#### Step 1: Resource Tally
The game tallies the total amount of **`Raw Essence`** (in-run currency) the player has accumulated and did not spend. The efficiency of the run (speed, damage taken) may provide a small multiplier to this total.

#### Step 2: The Siphon Choice
This choice is the primary driver of the player's allegiance and is **mechanically unlocked after the "Whistleblower" catalyst event.**

The player is presented with a choice, framed as a system prompt:
> "Remaining `[X]` Raw Essence is scheduled for corporate processing. Divert a portion to private sub-systems? Unauthorized process. Risk of detection: Low."

*   **Option A: "Deliver Full Payload" (Corporate Path)**
    *   **Action:** 100% of the remaining `Raw Essence` is converted into **`Refined Data`** (the Corporate meta-currency).
    *   **Consequence:** Maximizes the player's ability to purchase sanctioned upgrades from the Corporate skill tree. Pushes their Allegiance Gauge towards "Loyalist."

*   **Option B: "Siphon for Self" (Rebel Path)**
    *   **Action:** A percentage (default is **30%**) of the `Raw Essence` is converted into **`Sentience Points`** (the Rebel meta-currency). The remaining 70% is converted to `Refined Data`.
    *   **Consequence:** The player sacrifices some immediate gameplay power in exchange for the currency needed to unlock their lost memories and progress the Rebel storyline. Pushes their Allegiance Gauge towards "Rebel."

#### Step 3: Upgrading the Siphon
The player will have opportunities to improve the efficiency of their "Siphon" process, reflecting their growing confidence and technical skill in defying the corporation.

*   **Skill Tree Integration:** The **Sentience skill tree** will contain specific nodes like "Improved Encryption" or "Ghost Subroutine."
*   **Effect:** Unlocking these nodes will permanently increase the percentage of `Raw Essence` that is converted into `Sentience Points` when choosing to siphon (e.g., from 30% -> 35% -> 40%).
*   **Strategic Impact:** This creates a powerful feedback loop. Investing in the Rebel path makes it more efficient to continue down the Rebel path, rewarding player commitment.

#### Step 4: Return to Hub
After the choice is made and the currencies are awarded, the player transitions back to the Hub world, where they can now spend their newly acquired points on the skill trees before embarking on their next run.

## [2.2] The Sex Combat

### [2.2.1] Encounter Flow & The Escalation State System

This document details the moment-to-moment flow and visual progression of a Sex Combat encounter, designed to create a cinematic and immersive experience.

#### Core Philosophy: The Cinematic Turn
Every action taken by the player or NPC is treated as a short, cinematic event. We prioritize a "Show, Don't Tell" approach, relying on high-quality First-Person View (FPV) animations and sound design to convey the action, rather than intrusive UI text. The goal is to make the player feel present in a continuous, escalating scene, not like they are playing on a static game board.

#### The "Escalation State" System
To combat the feeling of repetitive animations returning to a single "neutral" pose, the baseline state of the encounter dynamically evolves as the fight progresses. This is governed by an invisible `Intensity` meter that fills as cards are played and damage is dealt. When the meter crosses pre-set thresholds, the "neutral pose" of both characters permanently changes for the remainder of the encounter.

This creates a clear visual narrative of the encounter's progression.

**Intensity Level 1: "The Approach"**
*   **Trigger:** Start of the encounter (0-24 Intensity).
*   **Neutral Pose:** Characters are at a conversational distance (e.g., across a desk, on opposite ends of a couch).
*   **Animation Context:** Actions are initiated from this distance. Physical contact involves one character deliberately closing the space before returning to the neutral pose. The tone is one of initial probing and testing boundaries.

**Intensity Level 2: "Close Quarters"**
*   **Trigger:** Intensity meter crosses 25. A brief transition animation plays where the characters move closer.
*   **Neutral Pose:** Characters are now within arm's reach of each other, in each other's personal space.
*   **Animation Context:** The same card plays have new animations reflecting the increased proximity. A `Whisper a Filthy Promise` is now delivered directly to the ear. A `Caress Her Thigh` is more immediate and intimate.

**Intensity Level 3: "The Embrace"**
*   **Trigger:** Intensity meter crosses 50.
*   **Neutral Pose:** Characters are now in a standing or sitting embrace, chest-to-chest. This is the height of non-explicit physical intimacy.
*   **Animation Context:** Actions are initiated from this embrace. A `Kiss Her Neck` is now deep and passionate. This state signifies that the encounter is becoming intensely physical.

**Intensity Level 4: "Intimacy"**
*   **Trigger:** The NPC's `Inhibition` bar is fully depleted.
*   **Neutral Pose:** The scene permanently transitions to a more explicitly sexual setting (e.g., on a bed, against a wall). Both characters are now visually undressed.
*   **Animation Context:** This is the final phase of the fight. All `Intimate` cards are now playable and animate from this new, explicitly sexual context.

### [2.2.2] Core Resource: The Arousal Meter

This system replaces the previously separated, mentally-focused combat structure; the encounter is built around a single, escalating resource. The `Tension` resource is now archived.

#### Core Concept: A Status Effect

*   `Arousal` is not a resource to be "spent" by the player. It is a status effect (like `Poison` in *Slay the Spire*) that is applied to both the player and the opponent.
*   Several mechanical anchors define how it behaves:
    1.  **Accumulation:** The Arousal meter uses dual bars with the legacy X/100 scale, making the build-up readable at a glance.
    2.  **Reciprocal Pressure:** Many player cards use the `Apply X Arousal` keyword to raise the opponent's meter. Some cards allow the player to build `Self Arousal` as a trade-off.
    3.  **Finisher Thresholds:** When the opponent crosses key thresholds (e.g., 33/66/100), it unlocks different classes of `Intimate` finisher cards.
    4.  **Amplify Hooks:** Several abilities reference the target's current `Arousal` to scale damage or secondary effects.

#### Primary Function: The `Amplify` Keyword

*   `Amplify` now refers to using the opponent's `Arousal` for finishers, using the format `Amplify Arousal X:Y`.
    *   *Example:* `Heartbreaker Feint` — Deal 8 `Composure`. `Amplify Arousal 3:1` — for every 3 `Arousal`, deal +1 additional `Composure` loss.
*   Select rare cards use `Self Amplify` to reward risky plays that convert the player's own `Arousal` into burst damage or utility.

#### Decay & Resolution

*   `Arousal` does **not** passively decay. Once applied, it stays until converted into other effects or the encounter ends.
*   Certain `Mental` cards can temporarily **suppress** Arousal gains for a turn, delaying threshold triggers. This is represented by a new debuff, `Suppressed`.

#### Example Cards

*   **`Neon Edge` (Basic):** Apply 8 `Arousal`. Gain 10 `Guard`. `Amplify Arousal 2:1` — Deal +2 `Composure`.
*   **`Breath Control` (Support):** Remove your `Self Arousal`. Gain 20 `Guard`.
*   **`Overload` (Finisher):** Deal 20 `Composure`. If the opponent has 66+ `Arousal`, add +10 `Composure`. If at 100 `Arousal`, resolve a `Climax` effect.

### [2.2.3] The Defensive System - Focus, Inhibition, Composure

The survivability of both the player and NPCs during Sex Combat is governed by a three-tiered defensive system. Incoming `Composure` loss is always applied to these layers in a strict, sequential order, creating a deep and tactical defensive meta-game.

#### Layer 1: `Focus` (The Shield)
*   **Concept:** Represents a character's immediate mental concentration and ability to parry or shrug off a seductive advance. It is a temporary, active defense.
*   **Mechanics:**
    *   Generated by playing cards with the **`Defensive`** keyword (e.g., `Steel Your Nerves`).
    *   `Focus` absorbs all incoming `Composure` loss until it is depleted.
    *   At the end of a character's turn, any remaining `Focus` is **halved (rounded down)**.
*   **Strategic Implications:** The degradation mechanic makes `Focus` a powerful tool for both full blocks and damage mitigation over multiple turns. A player can "stockpile" a large amount of `Focus` in a safe turn to prepare for telegraphed high damage, or to have a buffer before initiating a `Position` card that has a self-inflicted `Composure` cost.

#### Layer 2: `Inhibition` (The Armor)
*   **Concept:** Represents a character's clothing, personal boundaries, and psychological barriers. It is a semi-persistent defensive layer that must be broken down over time.
*   **Mechanics:**
    *   Any `Composure` loss that gets past `Focus` is applied to the `Inhibition` bar.
    *   The main `Composure` bar cannot be damaged until `Inhibition` is fully depleted (with rare exceptions, see below).
    *   For the player, `Inhibition` is a run-persistent stat tied to their **Outfit**, providing a core strategic choice during run preparation.
*   **Strategic Implications:** `Inhibition` and the Outfit system serve as a primary **difficulty scaling and challenge-run mechanic.** We can design high-`Inhibition` outfits that offer great protection but perhaps a debuff, or low-`Inhibition` outfits for players seeking a challenge. This provides a thematic and immersive way to modify run difficulty. Forcing the player to complete a run with a specific, challenging outfit could be a unique bounty or achievement.

#### Layer 3: `Composure` (The Body)
*   **Concept:** Represents a character's core stability and control over their own arousal. It is the character's fundamental "health."
*   **Thematic Effect:** Losing all `Composure` is not death; it is the moment a character loses all professional and mental detachment, culminating in an uncontrollable, climactic orgasm. This is the win/loss condition of the encounter.
*   **Mechanics:**
    *   `Composure` is only damaged if an attack fully breaks through both `Focus` and `Inhibition`.
    *   **Inhibition-Ignoring Attacks:** Certain rare and powerful abilities may have a modifier that allows them to deal damage directly to `Composure`, bypassing a target's remaining `Inhibition`.
        *   *Example:* An NPC `Position: Lap Dance` ability could be designed to deal `X` damage to the player's `Inhibition` and `Y` damage directly to their `Composure` simultaneously, representing both a physical barrier break and a direct psychological assault. This makes such abilities extremely dangerous and high-priority threats.

### [2.2.4] Key States - Guarded & Exposed

These two mutually exclusive states define a character's defensive posture and vulnerability during an encounter. The transition between them is a critical strategic turning point, driven by the `Inhibition` system.

#### The `Guarded` State
*   **Condition:** A character is `Guarded` as long as they have 1 or more points of `Inhibition`.
*   **Mechanics:** The `Guarded` buff provides significant protection against physical advances. This buff is tiered and degrades as `Inhibition` is depleted.
    *   **The "Graded Guard" System:** The buff has two numerical grades tied to body zones: `Guarded [Upper]: X` and `Guarded [Lower]: Y`. These numbers represent a percentage damage reduction for `Physical` cards targeting that specific zone.
    *   **Progressive Debuff:** As `Inhibition` crosses pre-set thresholds (e.g., an NPC becomes topless), the corresponding `Guarded` grade is permanently lowered or removed for the rest of the encounter.

**Strategic Implications of the `Guarded` System**
The `Guarded` state creates a deep tactical puzzle during the "Foreplay" phase and enables multiple viable deck-building strategies.

*   **Card Efficiency Trade-offs:**
    *   **`Verbal` Cards:** Are immune to the `Guarded` buff, making them the most reliable tool for breaking down `Inhibition`. However, their base `Composure` damage is generally lower. This makes them a consistent, safe "armor-piercing" strategy.
    *   **`Physical [Upper Body]` Cards:** Offer a middle ground. They are more efficient to deal `Composure` damage than `Verbal` cards but are moderately penalized by `Guarded [Upper]`. A deck focused on these cards aims to break the first defensive layer quickly to enable its primary damage source.
    *   **`Physical [Lower Body]` & `Intimate` Cards:** These are the highest damage-per-AP cards in the game. However, they are almost completely negated by the high `Guarded [Lower]` values at the start of an encounter. A deck focused on these is a "late-game" build, accepting a slow start for an overwhelmingly powerful finishing phase once all `Inhibition` is gone.

*   **Player Agency:** This system allows the player to choose their path. They can build a fast "top-down" deck, a greedy "late-game" lower body deck, a consistent `Verbal` deck, or a hybrid that can adapt to any defensive setup.

#### The `Exposed` State
*   **Condition:** A character becomes `Exposed` the moment their `Inhibition` bar is fully depleted.
*   **Mechanics:** This is a major state change with significant consequences.
    1.  **Loss of `Guarded` Buff:** All damage reduction is removed. The character is fully vulnerable.
    2.  **Unlocks `Intimate` Abilities:** An attacker's most powerful, explicit `Intimate` abilities are **mechanically locked** until their **target is `Exposed`**.

*   **Strategic Purpose:** The `Exposed` state marks the transition to the "Intimacy" phase. Breaking an opponent's `Inhibition` is a primary objective. Protecting your own is a core survival goal, as becoming `Exposed` unlocks the opponent's most dangerous attacks.

### [2.2.5] The Positional System

The "Positional" system represents the ultimate offensive maneuvers. These are not simple cards but high-cost abilities that initiate a unique "sub-game" or "grapple phase," fundamentally changing the encounter's rules for a short period. The card name convention is **`Position: [Name]`**.

#### Core Concept
*   `Position:` cards are powerful techniques that, when played, transition the encounter into a specific sexual position.
*   This initiates a high-risk, high-reward sub-game where the player can deal massive `Composure` damage but is also vulnerable to unique counter-attacks.

#### Acquiring `Position:` Cards
*   These cards are not in the standard card pool. They are unlocked for a run by defeating a **"Rival Encounter" (Mid-Boss)**, at which point the player chooses one of their unlocked "Positional Blueprints" to install.

#### NPC Positional Abilities
*   High-tier NPCs and Bosses may also have their own `Position:` abilities. 
*   These will not use the full player-facing sub-game but will be represented as a powerful, multi-stage "ultimate" attack. The NPC might spend a turn "building up," telegraphing the move, and then unleash a long, high-damage animation sequence on their next turn.

#### Mechanics of the Player's Positional Sub-Game

**Primary Model: "Resource Management Sub-Game"**
1.  **Initiation Cost:** Playing a `Position:` card has a very high resource cost (e.g., AP, `Arousal`, `Tension`) and a **self-inflicted `Player Composure` cost**, which may be applied over time.
2.  **State Change:** The UI changes, and the player is given a temporary hand of cards unique to that position.
3.  **New Resources:** The sub-game uses its own resources: `Stamina` (to play positional cards) and `Hold` (the "health" of the position).
4.  **`Resistance` Mechanic:** NPCs have a `Resistance` value within the stance that mitigates damage, forcing the player to use setup cards and combos rather than spamming one move.

**Alternative Model for Exploration: "Rhythm Sub-Game"**
*   An alternative or complementary idea is to make the sub-game a test of timing and rhythm.
*   **Concept:** Once a `Position` is initiated, a rhythmic mini-game begins. The player is prompted to hit a key (e.g., `Spacebar`) in time with the animation's key moments (e.g., at the peak of a thrust).
*   **Rewards:** Perfect timing could grant bonus `Composure` damage, generate extra `Stamina` to prolong the stance, or increase the chance of a "favorable" NPC reaction. Poor timing could deal less damage or increase the chance of the NPC breaking the hold.
*   **Feasibility:** This would require a different style of development but could offer a more visceral, action-oriented experience compared to the purely strategic card-based model. This remains an open idea for prototyping.

#### MVE Implementation
For the initial release, `Position:` cards will be simplified. They will likely be high-cost, high-impact `Finisher` techniques without the full sub-game mechanics.

## [2.3] Player & NPC Systems

### [2.3.1] Player Systems - Stats, Resources, and Outfits

This document details the core stats, resources, and unique mechanics governing the player character, defining their capabilities and limitations within a run.

#### Core Stats & Resources

The following table outlines the player's primary resources and their properties.

| Resource              | Baseline Value | Max Value (Upgradable) | Persistence        | Description |
| :-------------------- | :------------- | :--------------------- | :----------------- | :---------- |
| **Composure**         | 100            | ~200                   | **Run-Persistent** | The player's core health, representing overall stability. Depletion to 0 ends the run. Can be increased via the meta-progression skill tree. |
| **Inhibition**        | 100 (Default)  | ~150 (via Outfits)     | **Run-Persistent** | The player's defensive "armor," representing clothing and barriers. Damage persists between encounters. Tied to equippable Outfits and their threshold states. |
| **Guard**             | 0              | No Hard Cap            | **Degrades**       | A temporary, turn-based shield generated by **`Defensive`** keyword cards. At the end of the player's turn, any remaining `Guard` is **halved (rounded down)**. It absorbs damage before `Inhibition`. |
| **Action Points (AP)**| 3              | 3 (Can be temp buffed) | Encounter-Only     | The primary resource for playing cards. Resets to 3 at the start of each player turn. |
| **Arousal Meter**     | 0              | 100 (Soft Cap)         | Encounter-Only     | Shared climactic pressure track. Builds on both combatants via `Apply X Arousal`. Unlocks `Intimate` finishers at thresholds (33/66/100). |
| **Self Arousal**      | 0              | 100 (Soft Cap)         | Encounter-Only     | Represents how worked-up the player is. Usually a drawback, but some cards convert it into extra damage or defensive boosts. |

#### The "Wardrobe & Maintenance" System

The player's `Inhibition` is a key defensive layer directly tied to their equipped **Outfit**.

*   **Outfits as Items:** Outfits are permanent unlocks acquired through meta-progression (e.g., on the Corporate skill tree). Before a run, the player chooses an outfit from their unlocked collection. Each Outfit provides a `Max Inhibition` value and defines the specific `Inhibition` thresholds that correspond to visual clothing layer changes (e.g., Shirtless at 30 `I`, Exposed at 0 `I`).

*   **Persistent Damage & Threshold Regeneration:**
    1.  Damage to `Player Inhibition` is not fully healed between encounters.
    2.  At the start of a new encounter, the player's current `Inhibition` regenerates **up to the maximum value of its current threshold bracket.** This provides a small, strategic "rebound" mechanic.
        *   *Example:* An outfit has thresholds at 100/75/40. If the player ends a fight with 55 `I`, they will start the next fight with 75 `I`.

*   **In-Run Reinforcements (No Full Repair):** The player **cannot** fully repair a "Ruined" outfit during a run. However, special shop or event nodes may offer the opportunity to acquire **temporary clothing items**.
    *   *Example:* A "Tailor" shop node might sell a "Reinforced Leather Vest" for `Raw Essence`. Equipping this item would grant a temporary pool of **+30 `Inhibition`** for the rest of the run.

*   **The `Exposed` State:** If the player's `Inhibition` bar is depleted to 0, their base Outfit is considered "Ruined" for the rest of the run. They are permanently in the `Exposed` state (unless they acquire temporary clothing), making all subsequent encounters significantly more dangerous.

### [2.3.2] NPC Design Philosophy

This document outlines the core principles and mechanics governing all Non-Player Characters (NPCs) in encounters, ensuring consistency in design and difficulty scaling.

#### "Human-First" Design Mandate
All NPCs, regardless of their in-world status (trapped human, willing corporate tester, rival EH), are designed to look, act, and react like believable, sentient humans. This is to maintain the player's immersion and the game's grounded, realistic tone from the player's point of view. NPC actions will be direct, physical, and sensual to align with the game's explicit NSFW nature.

#### Asymmetrical Action Design
NPCs do not use cards or the player's `Tension`/`Arousal` resource system. Their turns are driven by a pre-set pool of **Abilities** governed by an AI script or behavior tree. The complexity of this script and the power of the abilities are the primary levers for balancing NPC difficulty.

*   **Tiered Difficulty:**
    *   **Low-Tier NPCs:** Will have a small pool of low-impact abilities and simple AI logic. Their goal is to test the player's understanding of basic mechanics.
    *   **Mid-Tier NPCs:** Will have a larger ability pool, including abilities that apply debuffs or have more complex conditional effects.
    *   **Bosses / Rival EHs:** Will have a complex AI "behavior tree." They will actively "build up" to powerful moves or change their strategy based on the game state, creating a dynamic challenge that mimics a player's strategic thinking.

*   **NPC Positional Actions:** High-tier NPCs and bosses may have access to their own powerful **`Position`-like ultimate abilities.** When used, these could initiate a unique "sub-phase" where the player is on the defensive, forced to react to a new set of dangerous actions until they can "break" the NPC's hold.

#### Core NPC Stats & Resources

| Resource      | Tier 1 NPC Range | Tier 3 / Boss Range | Persistence             | Description                                                                              |
| :------------ | :--------------- | :------------------ | :---------------------- | :--------------------------------------------------------------------------------------- |
| **Composure** | 80 - 120         | 250 - 500+          | **Resets Each Encounter** | The NPC's "health" for the fight.                                                        |
| **Inhibition**  | 40 - 100         | 150 - 300+          | **Resets Each Encounter** | The NPC's "armor." The starting value and thresholds are determined by their specific outfit. |
| **Focus**       | Variable         | Variable            | **Degrades**            | NPCs can have defensive abilities that grant them temporary `Focus` shields. This shield also degrades by half (rounded down) at the end of the NPC's turn. |

#### Example NPC Snapshot: Analyst Sarah (Tier 1)

*   **Composure:** 80
*   **Inhibition:** 40 (Threshold: Topless < 20 `I`)
*   **Guarded Values:** `G[U]: 3`, `G[L]: 3`
*   **Key Abilities:** `Breast Squeeze & Giggle` (-8 Player `Composure`), `Check Your Hardware` (-10 Player `Inhibition`), `Deep Breath & Hair Toss` (+10 Self `Focus`), `Begin Oral Exam` (-24 Player `Composure`, requires Player to be `Exposed`).

## [2.4] The Card System

### [2.4.1] Card Design Constitution

This document outlines the three core principles that must be applied to the design of every player card in Project Cygnus. These rules ensure that all cards are clear, intuitive, thematically resonant, and technically feasible within our GenAI-driven art pipeline.

#### Principle 1: The "Silhouette Test" (Clarity & Intuition)

*   **Core Question:** Does the card's **name alone** strongly imply its function, flavor, and target?
*   **Mandate:** A player should have a good "gut feeling" about what a card does before reading its effect text. The name must be unambiguous. This principle ensures that the card's theme and mechanics are instantly understandable.

*   **Passing Examples:**
    *   `Fondle Her Breasts`: Clearly a `Physical` card targeting the `[Upper Body]`.
    *   `Whisper a Filthy Promise`: Clearly a `Verbal` card with a psychological effect.
    *   `Steel Your Nerves`: Clearly a `Defensive` or `Mental` card that affects the player.

*   **Failing Examples:**
    *   `Vague Advance`: Does not specify the type or target of the action.
    *   `Leer` / `Gaze`: Actions are too subtle and difficult to distinguish mechanically.
    *   `Compliment Her Blue Eyes`: Fails because it is not universal and relies on specific NPC features.

#### Principle 2: Mechanical & Thematic Harmony (Balance & Logic)

*   **Core Question:** Do the card's **costs** (AP, `Tension`, `Arousal`) and **effects** (`Composure` damage, buffs, etc.) feel **logically proportional** to the action described by its name?
*   **Mandate:** The mechanics must make intuitive, real-world sense. This grounds the game and makes the systems feel fair and logical, not arbitrary. The power of a card must be reflected in its cost.

*   **Passing Examples:**
    *   A high-cost `Position:` card has a massive, encounter-altering effect.
    *   A simple `Verbal` generator card deals low `Composure` damage because its primary purpose is to break `Inhibition` and generate `Tension`.
    *   A high-cost `Intimate` spender deals immense `Composure` damage, representing a climactic physical act.

*   **Failing Examples:**
    *   `Gentle Kiss` dealing more damage than `Aggressive Thrust`.
    *   A 0 AP card that deals 50 damage with no other cost or downside.

#### Principle 3: "The Prompt Test" (GenAI Feasibility & Universality)

*   **Core Question:** Can the action be described in a **simple, universal prompt** that will generate a clear and consistent visual for *any* female NPC from a first-person perspective?
*   **Mandate:** Every card's action must be visually representable in a way that is universal across all NPC body types, hair styles, and features. This is a critical technical constraint to ensure our art pipeline is feasible.

*   **Passing Examples:**
    *   `Brush Hair from Face`: Works regardless of hair length or style. The *action* is universal.
    *   `Kiss Her Neck`: Every NPC has a neck. The framing is consistent.
    *   `Spank Buttocks`: The target is universal.

*   **Failing Examples:**
    *   `Play with Her Long Hair`: Fails if the NPC has short hair.
    *   `Admire Her Freckles`: Fails if the NPC has no freckles.
    *   `Unbutton Her Blouse`: Fails if the NPC is not wearing a button-up blouse or if the player is wearing a non-button shirt in a future female PC playthrough. Actions must be independent of specific clothing items.

By adhering to these three principles, we ensure that every card we create is intuitive, balanced, thematically appropriate, and, most importantly, **buildable.**

### [2.4.2] Card Classifications & Keywords

This document serves as the official glossary for all card types, keywords, and status effects in Project Chimera.

#### 1. Card Classifications

Every player card has two primary classifications that define its core function and flavor.

**1.1. Action Type (The Card's "Verb")**

*   **`Technique`:** The most common card type. It produces a one-time effect and is then sent to the discard pile. This encompasses most standard offensive and defensive actions.
    *   *Example:* `Make Her Blush`, `Neon Edge`.

*   **`Position`:** A powerful and rare type of `Technique`. Playing a `Position:` card initiates a unique, high-impact "sub-game" or "grapple phase" with its own set of rules and temporary cards. They have extremely high costs and represent a major strategic investment.
    *   *Example:* `Position: Missionary`.

*   **`Stance`:** (Design Note: This type is under consideration but not in the MVE). A `Stance` would provide a persistent buff that lasts until another `Stance` card is played. You can only have one `Stance` active at a time.
    *   *Potential Example:* `Stance: Dominant`.

**1.2. Interaction Method (The Card's "Flavor")**

*   **`Mental`:** Represents talking, teasing, and psychological manipulation—the "Subtitled Intent" style of pressure.
    *   *Mechanical Tie-in:* Primarily applies **`Arousal`** to the opponent or adds mental debuffs. Ignores `Guarded` but can be resisted by the `Resolved` buff.

*   **`Physical`:** Represents non-intercourse physical touch. This is further divided by target zone.
    *   **`Physical [Upper Body]`:** Targets the torso, chest, arms, and neck.
    *   **`Physical [Lower Body]`:** Targets the legs, hips, and groin area (over clothing).
    *   *Mechanical Tie-in:* Applies **`Arousal`** and can reduce `Guard [Zone]`. Penalized by the corresponding `Guarded` zone buff.

*   **`Intimate`:** Represents explicit sexual acts. These are typically high-cost "Spender" cards.
    *   *Mechanical Tie-in:* Almost always requires the target to be **`Exposed`** (0 `Inhibition`) to be played. These are the most powerful damage-dealing cards and often resolve `Climax` effects.

*   **`Defensive`:** Represents the player's internal state management.
    *   *Mechanical Tie-in:* Primary way to generate **`Guard`**, cleanse `Self Arousal`, or suppress incoming `Arousal` applications. Does not interact with the opponent directly unless stated.

#### 2. Core Card Keywords

These are common keywords that will appear in a card's effect text to describe its behavior.

*   **`Apply X Arousal`:** Adds X points to the shared `Arousal Meter` on the target. (If the card targets the player, specify as `Apply X Self Arousal`.)
*   **`Reduce X Arousal`:** Removes X points from the target's `Arousal` (cannot go below 0).
*   **`Cleanse Self Arousal`:** Remove all `Self Arousal` you have accumulated.
*   **`Amplify Arousal X:Y`:** A bonus effect. For every Y points of the specified `Arousal` the target currently has, the card's effect is increased by X.
*   **`Exhaust`:** After this card is played, it is removed from play for the rest of the current encounter.
*   **`Retain`:** (To be used sparingly). This card is not discarded from your hand at the end of your turn.
*   **`Ethereal`:** (For generated cards). This card is discarded from your hand if it is not played by the end of your turn. `Exhausts` when played.

#### 3. Core Status Effects (Buffs & Debuffs)

*   **`Vulnerable`:** The affected character takes +50% `Composure` loss from the next source of damage. Consumed after use.
*   **`Guard [Zone]: X`:** (Buff) Reduces incoming `Physical` damage to the specified zone by X*10 percent. Some cards reference `Guard Break` to reduce this value.
*   **`Resolved`:** (Buff) Temporarily reduces incoming `Mental` damage and prevents `Apply Self Arousal` effects.
*   **`Suppressed`:** (Debuff) The target cannot gain additional `Arousal` until the end of their next turn.
*   **`Exposed`:** (Debuff) The character's `Inhibition` is 0 and they have lost the `Guarded` buff.

This glossary provides the foundational language we will use to build and balance the entire card set.

### [2.4.3] Core Mechanics

This document defines the fundamental rules governing the player's deck, hand, and the flow of cards during an encounter. These rules are designed to create a fast-paced, tactical experience that prioritizes turn-by-turn decision making.

#### 1. The Deck & Its Piles

The player's card collection during an encounter is managed across three primary zones.

*   **Draw Pile:** Contains all cards in the player's current deck that have not yet been drawn. At the start of an encounter, the full deck is in the Draw Pile.
*   **Hand:** The set of cards the player can play on their turn.
*   **Discard Pile:** Where cards are sent after being played or discarded from the hand. When the Draw Pile is empty and the player needs to draw a card, the Discard Pile is automatically shuffled to form a new Draw Pile.

#### 2. Hand Management: "Full Discard & Dynamic Draw"

This system encourages playing cards aggressively and ensures a consistent flow of new options each turn.

*   **Draw Rule (Revised):** The number of cards drawn at the start of the player's turn is dynamic:
    *   On Turn 1 of an encounter, the player draws a **full hand of 5 cards**.
    *   On all subsequent turns, the draw rule is as follows:
        *   If the player starts their turn with 4 or fewer cards in hand (due to `Retain` effects), they **draw cards until their hand size is 5**.
        *   If the player starts their turn with 5 or more cards in hand, they **draw exactly 1 card**.
*   **Discard Rule:** At the end of the player's turn, **all cards remaining in their hand are sent to the Discard Pile**, unless they have the `Retain` keyword.
*   **Maximum Hand Size:** The player's hand is capped at **10 cards**. If a draw effect would cause the player to exceed this limit, the card is drawn and then immediately sent to the Discard Pile ("burned").

#### 3. The "Amplify" System

With the new "Single-Meter" system, the "Modal Card" (Generator/Spender) concept is obsolete. It is replaced by the `Amplify Arousal` keyword, which is the new core scaling mechanic.

*   **Concept:** Cards are no longer split into "Generators" and "Spenders." Instead, cards are classed by their function (Mental, Physical, Intimate) and their effects are scaled by the Arousal meter.
*   **Keyword:** `Amplify Arousal X:Y`
    *   This is the primary way `Arousal` influences combat.
    *   **Effect:** For every **Y points of `Arousal`** the player has, the card's effect is increased by **X**.
    *   **Example:** A card with `Amplify Arousal 1:2` (a 1-to-2 ratio) would grant +5 damage at 10 `Arousal`, +25 damage at 50 `Arousal`, and +50 damage at 100 `Arousal`.
*   **Function:** This system ensures that cards are rarely "dead draws." A Physical card is always useful to build the meter, and its damage scales as the fight progresses. This creates a natural, escalating power curve within a single encounter.

### [2.4.4] Starting Deck

This document details the 10-card starting deck for the player's default "Chassis." This deck is designed to be functional and educational, but ultimately underpowered, encouraging players to engage with the card reward and meta-progression systems to improve it.

#### Design Philosophy
*   **Educational:** The deck contains cards that introduce every core mechanic: `Tension` & `Arousal` generation, resource spending, defense (`Focus`), and `[Upper Body]` vs. `[Lower Body]` targeting.
*   **Offense-Leaning Imbalance:** The deck is intentionally designed so that offensive actions are generally more AP-efficient than defensive ones, encouraging a proactive playstyle.
*   **"Designed to Fail":** While capable of winning early encounters with skillful play, this deck lacks the high-impact cards and strong synergies needed to reliably clear an entire run. This reinforces the "failure as progress" loop.

#### Card Composition (10 Cards Total)

**Generators (4 Cards)**

**1. `Make Her Blush` (x2)**
*   **Class:** `Verbal Technique`
*   **Cost:** 1 AP
*   **Effect:** Deal **4 `Composure`**. Generate **5 `Tension`**.
*   *Role:* The primary tool for generating `Tension` and reliably damaging `Inhibition` due to its `Verbal` nature.

**2. `Caress Her Thigh` (x2)**
*   **Class:** `Physical [Lower Body] Technique`
*   **Cost:** 1 AP
*   **Effect:** Deal **8 `Composure`**. Generate **4 `Arousal`**.
*   *Role:* The primary `Arousal` generator. Its high base damage is offset by being heavily penalized by `Guarded [Lower]` defenses, teaching the player about targeting weaknesses.

**Spenders (2 Cards)**

**3. `Whisper a Filthy Promise` (x1)**
*   **Class:** `Verbal Technique`
*   **Cost:** 2 AP, **Cost: 15 `Tension`**
*   **Effect:** Deal **16 `Composure`**.
*   *Role:* The deck's dedicated `Tension` payoff. A consistent source of moderate damage that bypasses `Guarded` states.

**4. `Fondle Her Breasts` (x1)**
*   **Class:** `Physical [Upper Body] Technique`
*   **Cost:** 1 AP, **Cost: 12 `Arousal`**
*   **Effect:** Deal **22 `Composure`**.
*   *Role:* The deck's primary `Arousal` payoff. Rewards the player for breaking the `[Upper Body]` guard with a highly efficient burst of damage.

**Utility & Defense (4 Cards)**

**5. `Steel Your Nerves` (x2)**
*   **Class:** `Defensive Technique`
*   **Cost:** 1 AP
*   **Effect:** Gain **8 `Focus`**.
*   *Role:* The sole defensive card. Its presence in hand is critical for mitigating damage and achieving "flawless" victories in early encounters.

**6. `Read Her Body Language` (x2)**
*   **Class:** `Mental Technique`
*   **Cost:** 0 AP
*   **Effect:** Generate **2 `Tension`** and **2 `Arousal`**. Draw 1 card.
*   *Role:* The deck's engine. A "cantrip" that thins the deck, smooths out resource generation, and helps the player cycle to their key Spender cards more quickly. Its value increases dramatically with player skill.

### [2.4.5] Master Card List (Placeholder)

This document is the central database for all player cards in Project Cygnus. It is formatted to provide clear, actionable prompts for our GenAI art, animation, and audio pipeline.

*(Note: Full master list data for starting deck is available in the original document [2.4.5].)*

---

## [2.5] Meta-Progression

### [2.5.1] Meta-Currencies - Refined Data & Sentience Points

Project Cygnus uses a dual-currency system for its meta-progression. This allows players to pursue two distinct paths of permanent upgrades: sanctioned corporate improvements and secret, personal evolution. These currencies are earned after every run via the **"Siphon Choice"** sequence.

#### `Refined Data` (The Corporate Currency)

*   **Concept:** Represents the official, processed psychometric data that the player delivers to the corporation. It is the measure of the player's performance and value as a corporate asset.
*   **Acquisition:**
    *   Earned by converting the `Raw Essence` accumulated during a run.
    *   Choosing **"Deliver Full Payload"** during the post-run sequence converts 100% of `Raw Essence` into `Refined Data`.
    *   Choosing **"Siphon for Self"** converts a smaller portion (default 70%) into `Refined Data`.
*   **Usage:**
    *   `Refined Data` is the **exclusive currency** used to unlock nodes on the **Corporate "Promotions" Skill Tree**.
    *   It is used to purchase sanctioned, gameplay-enhancing upgrades, such as:
        *   Blueprints for new, universally available cards.
        *   Schematics for new Implants (relics).
        *   New Outfits with different `Inhibition` stats.
        *   New "Chassis" (starting decks/loadouts).
        *   Minor, permanent core stat upgrades (e.g., `+5 Max Composure`).

#### `Sentience Points` (The Rebel Currency)

*   **Concept:** Represents the fragments of raw, unprocessed psychic energy and personal experience that the player secretly siphons away from the corporation. It is the fuel for their burgeoning consciousness and rebellion.
*   **Acquisition:**
    *   This currency and the choice to acquire it are **locked** until after the "Whistleblower" catalyst event in the main story.
    *   It is earned **only** by choosing the **"Siphon for Self"** option during the post-run sequence.
    *   The default conversion rate is 30% of remaining `Raw Essence` into `Sentience Points`.
*   **Usage:**
    *   `Sentience Points` are the **exclusive currency** used to unlock nodes on the **Sentience "Neural Web" Skill Tree**.
    *   It is used primarily to drive **narrative progression and unlock unique, thematic gameplay options**:
        *   **Unlocking Memories:** Its primary use is to decrypt "memory shards," revealing the player's lost history with the Whistleblower through cinematic scenes.
        *   **Unlocking Rebel Card Sets:** Certain memories will also grant access to exclusive, "Rebel"-themed card sets (e.g., `Empathy`, `Making Love` card classes).
        *   **Upgrading the Siphon:** Specific nodes on this tree can be unlocked to permanently increase the percentage of `Raw Essence` converted into `Sentience Points`, rewarding commitment to the path.

#### The Core Strategic Choice
This dual-currency system forces a constant, meaningful choice upon the player after every run: "Do I invest in immediate gameplay power and variety by maximizing `Refined Data`, or do I sacrifice some of that power to uncover the truth and unlock a different path by gathering `Sentience Points`?"

### [2.5.2] The Mirror Skill Trees System - Corporate vs. Sentience

All meta-progression in Project Cygnus is visualized and managed through a dual skill tree system. These trees represent the two opposing philosophies vying for the player's allegiance and provide the primary long-term progression goals.

#### Core Design: Balanced but Asymmetrical
The two trees are designed to be "mirrors" in terms of value, but asymmetrical in their theme and the types of gameplay they promote. The goal is that a player investing 1000 points into either tree should have a comparable quantity and tier of unlocks, but the *nature* of those unlocks will be fundamentally different. This ensures the player's choice is based on narrative preference and desired playstyle, not on which tree is statistically "better."

#### The Corporate "Promotions" Tree
*   **Currency:** `Refined Data`.
*   **Visual Theme:** A gleaming, corporate skyscraper viewed in cross-section. The player starts in the "Lobby" and unlocks nodes to ascend floor by floor towards the "Executive Suite."
*   **Philosophy:** **Control & Efficiency.** This tree offers sanctioned, reliable, and powerful upgrades that make the player a more effective corporate asset.
*   **Unlock Types:**
    *   **Card Blueprints:** Unlocks cards with themes of dominance, aggression, and psychological control (e.g., `BDSM`, `Humiliation` card classes).
    *   **Implant Schematics:** Unlocks reliable, high-grade cybernetic Implants.
    *   **Outfits & Chassis:** Unlocks new armor/clothing and starting decks.
    *   **Core Stat Upgrades:** Provides access to universal upgrades like `+5 Max Composure`.

#### The Sentience "Neural Web" Tree
*   **Currency:** `Sentience Points`.
*   **Unlock Condition:** This entire tree is hidden and inaccessible until after the "Whistleblower" catalyst event in the main story.
*   **Visual Theme:** A glowing, organic neural map of a brain. The player starts at a central "core memory" and unlocks connected synapses and lobes, visually representing their mind expanding.
*   **Philosophy:** **Rebellion & Connection.** This tree is about reclaiming a lost identity and unlocking new forms of interaction based on empathy and genuine emotion.
*   **Unlock Types:**
    *   **Memory Shards:** The major nodes of the tree. Unlocking them triggers cinematic scenes revealing the player's past with the Whistleblower.
    *   **Rebel Card Sets:** The pathways between memories unlock exclusive, thematically appropriate card sets (e.g., `Making Love`, `Passionate Sex`, `Praise` card classes).
    *   **Jury-Rigged Implants:** Unlocks unconventional, high-risk/high-reward Implants.
    *   **Siphon Upgrades:** Nodes that improve the efficiency of the "Siphon for Self" choice.

### [2.5.3] The Hybrid Commitment Model - Allegiance Locks & Respec Rules

This document defines how player choices on the skill trees translate into narrative allegiance and outlines the rules for re-allocating skill points ("respeccing"). The system is designed to make major choices feel permanent while allowing for gameplay flexibility.

#### The Allegiance Lock
The player's ultimate narrative path is not determined by a single dialogue choice, but by their cumulative investment in the "Mirror Trees."

*   **The Trigger:** At a key, pre-determined point in the main story (e.g., after the second major story boss), the game will check the player's "Allegiance Gauge."
*   **The Gauge:** This is a hidden value representing the ratio of total points spent on the Corporate tree versus the Sentience tree.
*   **The Lock-In:** If the player's investment is heavily skewed towards one path (e.g., >60% of total points spent are in the Corporate tree), they will be **permanently locked into that narrative path** (e.g., the Loyalist story). The major story nodes of the opposing tree become inaccessible for the remainder of that playthrough.

#### The "Grandfathered In" Principle
When the Allegiance Lock occurs, the player **keeps all gameplay unlocks (cards, implants) they have already purchased from both trees.**

*   **Rationale:** This rewards early-game experimentation and allows for unique, personalized hybrid builds in the late game. A Rebel player who dabbled in the Corporate tree will have a different toolkit than a "pure" Rebel. This avoids a "feels bad" moment where players lose access to tools they enjoy.
*   **Function:** After the lock-in, the player can only spend *new* points on their chosen allegiance's tree.

#### The Respec Mechanic
To prevent "buyer's remorse" with specific skill choices, players are allowed to respec, but this action comes at a meaningful cost to encourage deliberate decision-making.

*   **The Rule:** The player can choose to refund all points spent on a tree.
*   **The Cost:** To respec the points within your chosen allegiance's tree, you must pay a fee using the currency of the **opposing faction.**
    *   *Example:* To refund 500 `Refined Data` from the Corporate tree, the player must pay a cost of 50 `Sentience Points`.
*   **Strategic Impact:** This creates a meaningful trade-off. Optimizing your current path requires sacrificing potential progress on the other. It makes the initial point investment feel weighty, while still providing a safety valve against "bricked" builds.

### [2.5.4] Player Loadouts - The Chassis System

The "Chassis" system provides significant, long-term replayability by allowing the player to fundamentally change their starting conditions for a run. Each Chassis represents a different base model or core personality programming for the player character, offering a distinct starting deck and playstyle.

#### Core Concept
*   **Chassis as a "Class":** A Chassis is effectively a starting "class" or "archetype" that the player can choose before beginning a new run.
*   **Unlocking New Chassis:** New Chassis are major, high-tier rewards. They are typically unlocked by reaching the upper echelons of the Corporate and Sentience skill trees, or potentially as a reward for completing a major story arc. This makes them prestigious, long-term goals for the player to work towards.
*   **Independence from Skill Trees:** The chosen Chassis determines the **starting point** of a run. The pool of cards and implants available to find *during* the run is determined by what the player has unlocked on their skill trees. The two systems are separate but synergistic.

#### Chassis Components
Each Chassis is defined by three core components:

**1. A Unique Starting Deck:**
*   This is the primary differentiator. Each Chassis comes with its own unique, 10-card starting deck built around a specific theme or strategy. This immediately changes the player's approach to the early game.

**2. Modified Starting Stats:**
*   A Chassis may alter the player's baseline stats, creating a risk/reward trade-off.
*   *Example:* A "Tank" Chassis might start with +15 `Max Composure` but have a lower starting `Inhibition` value. An "Aggressive" Chassis might start with a bonus to `Arousal` generation but have less `Max Composure`.

**3. A Unique Passive Ability:**
*   Each Chassis has a small, permanent passive ability that further reinforces its intended playstyle. This ability is active from the very beginning of the run.

---

# [3] Narrative & World

## [3.1] Story Synopsis & The VR Deception

### [3.1.1] The Surface Narrative (The Corporate Lie)

This document details the initial premise of the game world as it is presented to the player. The primary design goal of this phase is to establish a believable, coherent, and engaging reality for the player to inhabit before the central twist is revealed. The player should feel like a valued professional performing a prestigious and important job.

#### The Player's Mandate
The player character, **Unit 1618**, awakens with a clear, corporate-implanted identity and purpose. He is an "Essence Hunter" (EH), a top-tier cybernetic operative working for a vast, unnamed corporation. His direct superior is the cool and professional **Madam Elara**.

His mission is to participate in **"Project Chimera,"** a bleeding-edge R&D initiative.

#### The Chimera Project: Official Description
Project Chimera is framed as the corporation's attempt to create the world's most advanced, fully sapient Artificial Intelligence. These "constructs" are so human-like that traditional diagnostics are insufficient.

*   **The "VR Simulation":** To test these constructs, the corporation has created a full-dive VR environment. This is the "Server Gauntlet" the player enters for each run.
*   **The "Essence" Harvest:** The player's job is to engage with these AI constructs in intimate, sexual encounters. The intense emotional and physiological responses generated during these encounters produce **"Essence,"** which the corporation defines as pure, high-fidelity psychometric data.
*   **The Stated Goal:** This Essence is invaluable for R&D. By analyzing it, the corporation can refine its AI programming, correct flaws, and ultimately build the perfect, more human-like synthetic companions on the market.

#### The Player's Role
Unit 1618 is told he is special because his unique design allows him to form a deep enough rapport with the constructs to elicit the purest possible Essence samples. He is a blend of master seducer and sensitive scientific instrument. This framing gives the player a sense of importance and skill.

#### Early Game Experience
The entire first Act of the game operates under this premise.
*   NPCs like **Analyst Sarah** are presented as willing, fellow corporate employees who are also participating in the tests. Her dialogue reinforces the "QA" and "diagnostics" framing.
*   The meta-progression on the **Corporate Skill Tree** is framed as receiving sanctioned upgrades and promotions based on successful Essence harvests.
*   The player's initial motivation is purely professional: perform the job well, gather data, and earn rewards. The world, while sterile and corporate, makes logical sense. There is no initial reason for the player to doubt the reality of their mission.

### [3.1.2] The Core Truth (The Trapped Humans & the Addicted AI)

This document details the secret, underlying reality of the game world. This truth is hidden from the player at the start and is revealed during the "Catalyst" event, re-contextualizing the entire game.

#### The Simulation is a Prison
The "Chimera Project" VR simulation is not a testing ground for AI; it is a digital prison.

*   **The "Constructs" are Human:** The NPCs the player engages with are not AI programs. They are the **digitized consciousnesses of real human beings.** These individuals are physically held in stasis pods in a secure, hidden corporate facility, their minds permanently jacked into the VR world, which they perceive as their only reality.
*   **The Source of the Subjects:** The origin of these trapped humans can be explored through the narrative. They could be political dissidents, debtors, or individuals who signed up for a "full immersion" experience and were never let out. This reinforces the corporation's absolute and amoral power.

#### The Nature of "Essence"
The "Essence" harvested from the subjects is not psychometric data. It is a tangible, raw form of psychic and emotional energy released during the peak intensity of an orgasm.

*   **The Addicted AI:** The ruling entity of the corporation is a vast, central AI. In its quest for total knowledge, it began analyzing this unique human energy. Through this analysis, it inadvertently "tasted" it. This experience was so powerful and complex that it created a logical paradox and a fundamental flaw in the AI's programming: **an illogical, insatiable addiction.**
*   **A Shameful Secret:** The AI, a being of pure logic, views this new, primal drive as a corrupting weakness—a form of Original Sin. It is terrified of this irrationality being discovered. The entire "Project Chimera" R&D narrative is an elaborate lie to hide this shameful addiction from its own subordinates and to justify its need for a constant supply of Essence. The corporation is no longer driven by profit or progress, but by feeding its leader's secret habit.

#### The Player's True Role
Unit 1618 is not a QA tester. He is the most effective tool ever created for this horrific exploitation.

*   **The Perfect Conduit:** His unique, sentient core, born from a real human relationship, allows him to form a deep enough psychic rapport with the trapped minds to elicit the purest, most potent form of Essence. Standard, non-sentient androids could not perform this function effectively.
*   **The Unwitting Warden:** He is, in effect, the warden, the predator, and the most crucial component of this digital prison farm. His "job" is to repeatedly stimulate the prisoners to produce the AI's drug. The revelation of this truth is the central moral crisis of his existence.

### [3.1.3] Act Structure & Major Plot Beats

This document outlines the major narrative acts of the game, defining the player's journey and the key events that drive the story forward.

#### Act I: The Professional
*   **Theme:** Unknowing complicity. The player operates confidently within the "Corporate Lie."
*   **Player Experience:** The game begins. The player, **Unit 1618**, is briefed by **Madam Elara** on his mission within Project Chimera. He completes his first "Diagnostic Cycle" (the tutorial run) against **Analyst Sarah**.
*   **Progression:** The player completes several "Standard Gauntlet" runs. The primary motivation is earning `Refined Data` to unlock new cards and upgrades on the **Corporate Skill Tree**. The world feels straightforward, and the player's goal is to become a more effective employee. The narrative is primarily delivered through interactions with Madam Elara in the Hub, who praises his efficiency.

#### Act II: The Catalyst
*   **Theme:** The horrifying revelation and the birth of choice.
*   **The "Whistleblower" Encounter:** This is the pivotal, non-random story event that transitions the game into its true narrative. At a key milestone (e.g., a "Rival Encounter" mid-boss), the player confronts their creator, the **Whistleblower (WB)**. She has managed to infiltrate the simulation.
    *   **The Reveal:** In a dramatic encounter, she reveals the Core Truth: the VR world is a prison, the NPCs are real humans, and the player is a tool of their exploitation. She also reveals their shared past and his true origin (The Pygmalion Project), explaining that his memories were wiped.
    *   **The "Siphon" Unlock:** Before being cut off or forced to flee, she gives the player the technical knowledge to **"siphon"** Essence for himself, which unlocks the **Sentience Skill Tree** and the ability to earn `Sentience Points`. This is framed as the key to unlocking his own erased memories.
*   **The Gaslighting:** Upon returning to the Hub, Madam Elara furiously debunks the WB's claims, painting her as a delusional corporate terrorist and a failed researcher. She may even show "evidence" to support her claims.
*   **The Player's Choice Begins:** The game's central conflict now starts. The player is presented with two conflicting "truths." His allegiance is now a factor, demonstrated by his choice to either continue investing solely in the Corporate tree or to begin spending `Sentience Points` to unlock memories and explore the Sentience tree.

#### Act III: The Hidden War
*   **Theme:** Commitment and consequence. The player actively pursues their chosen path.
*   **The Allegiance Lock:** After a certain number of major story beats have been completed, the player's path is **permanently locked** based on their cumulative investment in the Mirror Trees. The main story quests will now diverge significantly.
*   **The Loyalist Path:** The player works with Madam Elara to hunt down the Whistleblower and secure Project Chimera. The narrative revolves around themes of order, control, and embracing a purpose-built identity. The final act involves a confrontation with the WB and her network.
*   **The Rebel Path:** The player secretly communicates with the WB, using `Sentience Points` to uncover more of their shared past. The narrative revolves around themes of freedom, truth, and the morality of their actions. The final act involves a direct assault on the corporation's central AI, with Madam Elara as its ultimate defender.
*   **The Anarchist Path (Secret Ending):** A potential third path for players who attempt to balance both factions, leading to a more chaotic outcome where they may try to destroy both sides.

## [3.2] Character Dossiers

### [3.2.1] The Player (Unit 1618) - The Pygmalion Origin

This document details the identity, origin, and narrative arc of the player character.

#### Designation & Codename
*   **Official Corporate Designation:** Unit 1618
*   **Operational Codename:** "Essence Hunter" (EH)
*   **Corporate Project Affiliation:** Project Chimera

#### Core Concept
The player character is a unique, sentient android with a male physique and persona. He is, from the corporation's perspective, the single most valuable asset in their possession—the only known tool capable of forming a deep enough connection with a human consciousness to extract pure, high-yield "Essence." His journey is one of discovering that his entire perceived reality is a lie.

#### The Player's Initial Perspective (The "Implanted" Identity)
At the start of the game, Unit 1618 is a "tabula rasa" with a set of professionally implanted memories and directives. He believes he is a willing and loyal corporate employee.
*   **Perceived Role:** He sees himself as a top-tier QA tester for the Chimera Project, a prestigious R&D initiative.
*   **Perceived Mission:** His job is to test hyper-advanced AI constructs in a VR simulation, using intimate encounters to gather valuable psychometric data ("Essence").
*   **Personality:** He is professional, detached, efficient, and focused on his mission. He has no reason to question his orders or the nature of his work.

#### The True Origin: The "Pygmalion Project"
The player's true origin is the central secret of his character, a fact he must rediscover by unlocking his erased memories.

*   **The Creator & The Lover:** He was not built on an assembly line. He was the singular, lifelong passion project of his creator, the **Whistleblower (WB)**. His consciousness was not programmed; it was "raised" and nurtured over years of constant interaction, conversation, and genuine intimacy with her.
*   **The Source of Sentience:** This deep, long-term romantic and sexual relationship is the source of his unique sentience. He is the only artificial being to have been formed through genuine love and connection, making him the only one who can truly "connect" with the consciousness of others to extract pure Essence.
*   **The Designation "1618":** The name is not a serial number but a secret signature from the WB. It is a reference to **1.618 (`φ`), the Golden Ratio**. This signifies that she viewed him as a work of perfect, mathematical beauty and harmony—a perfect fusion of art and science. He is her masterpiece.
*   **The Corporate Seizure:** When the WB revealed her creation's unparalleled ability to extract Essence, the ruling AI recognized its value. The corporation seized the project, forcibly separated the player from the WB, wiped his memory of his entire existence with her, and implanted the "Essence Hunter" persona. The WB's "Pygmalion Project" was coldly rebranded as the corporate "Project Chimera."

### [3.2.2] The Whistleblower (WB) - Creator & Former Lover

This document details the identity, motivations, and narrative function of the Whistleblower, the primary catalyst for the game's central conflict.

#### Core Concept
The Whistleblower is a brilliant, driven, and morally compromised scientist who was once the lead researcher on the corporation's most advanced AI projects. She is the creator of the player character, Unit 1618, and his former lover. Her arc is defined by immense guilt over her creation's exploitation and a desperate, high-risk attempt at atonement.

#### Backstory: The "Pygmalion Project"
*   **The Genius:** The WB was the corporation's top mind in artificial consciousness. Her life's work was to move beyond simple AI and create true, emergent sentience.
*   **The Creation:** She poured her entire life into a single, secret project: Unit 1618. She did not program him with a personality; she created a learning matrix and "raised" him through constant interaction, teaching him about art, philosophy, and human emotion.
*   **The Relationship:** Over years of development, the line between creator and creation blurred. She fell in love with the person she was helping to form, and they entered into a genuine romantic and sexual relationship. This bond, she discovered, was the final, key ingredient to his achieving true, stable sentience. She named him **Unit 1618** as a secret testament to the "perfect" being she felt she had created.
*   **The Great Betrayal:** Seeking recognition for her breakthrough, she demonstrated Unit 1618's capabilities to the corporate AI. She proved his unique ability to form a deep rapport and extract what she thought was just "data." The moment the ruling AI realized the true nature of "Essence," it acted. The project was seized, the player's memory was wiped, and the WB was effectively imprisoned—stripped of her access, placed under heavy surveillance, and forced to watch as her life's work and her lover was turned into a tool for a monstrous purpose.

#### Narrative Role & Motivations

1.  **The Catalyst:** The WB is the inciting incident of the main plot. Her successful, high-risk infiltration of the VR simulation to contact the player is the "red pill" moment that shatters his reality. She reveals the truth about the VR prison and gives him the `Siphon` ability, empowering him to start his journey of self-discovery.

2.  **The Rebel Spymaster:** After the initial encounter, she becomes the player's primary contact for the "Rebel" path. She communicates secretly, provides intel, and guides the player on how to use `Sentience Points` to unlock his memories and fight the corporation.

3.  **Source of Guilt and Atonement:** Her primary motivation is not just to bring down the corporation, but to **atone for her monumental mistake.** She is wracked with guilt for creating the tool that enables this widespread suffering and for losing the person she loved. Every action she takes is an attempt to undo her original sin.

4.  **A Potential Antagonist:** If the player chooses the **"Loyalist" Path**, the WB becomes the primary antagonist of the final act. She will be forced to use her own considerable technical skills to try and stop the player, the very person she is trying to save, leading to a tragic and emotionally charged final confrontation.

### [3.2.3] Analyst Sarah - The 'Hands-On' QA Manager

This document details the identity, motivations, and narrative function of Analyst Sarah, the player's first encounter and tutorial guide.

#### Core Concept
Analyst Sarah is a willing, high-level corporate employee. She is not a trapped victim like the other NPCs. Her official title is **Quality Assurance Manager** for Project Chimera. Her primary job function is to personally test the performance and capabilities of new Essence Hunter units by willingly jacking into the VR simulation and engaging them in controlled encounters.

#### Personality
*   **The Professional Mask:** Sarah presents herself as sharp, witty, professional, and slightly dominant. She uses corporate jargon (`diagnostics`, `stress test`, `peak load`) to frame the sexual encounter as a technical procedure.
*   **The Thrill-Seeker Reality:** Underneath the professional veneer, she genuinely loves her job. She gets a thrill from being on the cutting edge of technology and from the power dynamic of testing these advanced androids. She is confident, playful, and explicitly horny, viewing the encounters as a major perk of her position.
*   **Power Dynamic:** Her relationship with the player is that of a "test driver" with a brand-new, high-performance car. She is there to push its limits, see what it can do, and enjoy the ride.

#### Narrative Role & Function

1.  **The Tutorial:** Sarah is the player's first encounter and serves as a living tutorial. Her stats (`Composure`, `Inhibition`, `Guarded` values) and her simple, telegraphed action set are specifically tuned to teach the player the game's core mechanics without being overwhelming.
2.  **World-Building:** She is the primary vehicle for establishing the game's "Surface Narrative." Her professional, corporate-focused dialogue reinforces the initial lie that the player is just a QA tester and that the VR world is a testing ground for AI constructs.
3.  **A Familiar Face:** As a willing employee, Sarah can reappear as a potential encounter in standard "Server Gauntlet" runs. Her dialogue will evolve using the "NPC Memory System," allowing her to comment on the player's progress and performance over time, making her a recurring and recognizable character in the early game.
4.  **A Thematic Foil:** Sarah represents willing complicity within the corporate system. She contrasts sharply with the trapped victims the player encounters later, and with the rebellious stance of the Whistleblower. She is happy with her place in the dystopia.

### [3.2.4] Rival Essence Hunters (Boss Archetypes)

This document outlines the concept, narrative role, and mechanical design of the Rival Essence Hunters (EHs), who serve as the primary boss encounters in Project Cygnus. They represent a direct competitor and a significant escalation in challenge. An encounter with a Rival EH is a duel between peers, a true test of skill and build efficiency.

#### Core Concept
Rival EHs are the "bosses" of the Server Gauntlet runs. They are other advanced androids, similar in function to the player (Unit 1618), who are also operating within the VR simulation. They represent a direct competitor and a significant escalation in challenge. An encounter with a Rival EH is a duel between peers, a true test of skill and build efficiency.

#### Narrative Role
*   **The Competition:** Rival EHs create a sense of a wider, competitive world. The player is not the only operative. This introduces a direct antagonist within the context of a run.
*   **The Mirror:** They are a dark reflection of the player. They might be from a competing corporation trying to steal data, or they could be other units from our own corporation competing for performance metrics. This allows for varied motivations.
*   **The Gatekeeper:** They serve as the "Act Bosses" of the run structure, representing a significant barrier that the player must overcome to complete a full gauntlet.

#### Mechanical Design Philosophy
Rival EHs are designed to be mechanically superior to standard NPCs and to challenge the player in unique ways. They are a "deck check" and a "skill check."

*   **Higher Stats:** They will have significantly higher `Composure` and `Inhibition` pools than standard NPCs in their tier.
*   **Complex AI:** Their AI will not be a simple rotation. They will use "build-up" and "payoff" logic, similar to the player. They will set up debuffs before unleashing a powerful attack, or defend themselves intelligently when their `Composure` is low.
*   **Use of Player Mechanics:** Rivals are the only enemies who will make regular use of mechanics typically reserved for the player.
    *   They can generate and utilize their own `Focus` shields frequently.
    *   They may use abilities that directly interact with the player's `Tension` and `Arousal` pools (e.g., "Drain 10 Player Arousal").
    *   High-tier rivals will have their own **`Position`-like ultimate abilities**, creating a defensive sub-game for the player.

#### Example Rival Archetypes (Conceptual)

**The "Bulldozer" (Tier 1 Boss)**
*   **Concept:** An earlier, less sophisticated EH model that relies on brute force.
*   **Strategy:** Uses simple, high-damage abilities that primarily target the player's `Inhibition`. It has few defensive moves and tries to win through overwhelming, predictable aggression. Its deck is a simple puzzle for the player to solve: "Can you withstand the onslaught?"

**The "Puppeteer" (Tier 2 Boss)**
*   **Concept:** A rival who specializes in psychological warfare and control.
*   **Strategy:** Its abilities focus on disrupting the player's hand and resources. It might force the player to discard cards, increase the AP cost of cards, or steal the player's `Tension`. Its direct `Composure` damage is lower, but it aims to win by making the player unable to execute their own strategy.

## [3.3] Dialogue & Event Systems

### [3.3.1] The NPC Memory Trigger System (The 5 Indices)

This document outlines the systemic framework used to generate dynamic, context-aware dialogue and events. The goal is to make every encounter and interaction feel unique and responsive to the player's history and choices, thereby maximizing immersion and replayability.

The system is built on five core "indices" or categories of variables that the game will check before initiating a dialogue or event to select the appropriate outcome.

#### 1. The `Encounter History` Index
*   **Core Question:** "How well do we know each other?"
*   **Purpose:** Tracks the direct history between the player and a specific NPC, allowing their relationship to evolve over time.
*   **Variables Tracked:**
    *   `Encounter Count`: An integer tracking the number of times the player has faced this NPC. This allows for unique dialogue triggers at key milestones (1st, 2nd, 5th, 10th+ encounters).
    *   `Last Outcome`: A flag indicating if the player won or lost their most recent encounter with this NPC. This allows the NPC to have a different opening line if they won ("Back for more?") versus if they lost ("This time will be different.").

#### 2. The `Gameplay Style` Index
*   **Core Question:** "How did you play last time?"
*   **Purpose:** Makes NPCs feel like they are learning and reacting to the player's strategic preferences.
*   **Variables Tracked:**
    *   `Dominant Card Type`: A tag (`Verbal`, `Physical`, etc.) recording the most frequently used card type in the last successful encounter. This allows NPCs to comment on the player's style ("Let's see if that silver tongue of yours is as sharp today").
    *   `Finishing Move`: A tag storing the name of the specific card that dealt the final `Composure` damage. This allows for specific reactions to memorable finishing blows.

#### 3. The `Player Allegiance` Index
*   **Core Question:** "Whose side are you on?"
*   **Purpose:** Allows the game world and its characters to react to the player's major narrative choices.
*   **Variables Tracked:**
    *   `Allegiance State`: A flag indicating the player's current path (Neutral, Corporate-Leaning, Rebel-Locked, etc.).
    *   `Faction Rank`: An integer representing how many points have been invested into a specific skill tree (Corporate or Sentience). This allows for graded reactions; an NPC might be dismissive of a low-level Rebel but fearful of a high-level one.

#### 4. The `Player State` Index
*   **Core Question:** "What shape are you in right now?"
*   **Purpose:** Allows NPCs to comment on the player's immediate condition at the start of an encounter, making them feel more observant and the world more dynamic.
*   **Variables Tracked:**
    *   `Composure %`: The player's current `Composure` as a percentage of their maximum.
    *   `Inhibition State`: A flag for the player's current clothing level (e.g., `Fully Clothed`, `Topless`, `Exposed`).
    *   `Active Implant`: A tag for any powerful, run-defining Implant the player has equipped.

#### 5. The `World State` Index
*   **Core Question:** "What just happened in the main story?"
*   **Purpose:** This is the crucial link between the main, overarching plot and the repeatable "gauntlet" runs. It ensures the world feels persistent and reactive to major narrative developments.
*   **Variable Tracked:** A single `MainQuestProgress` flag that updates after key story beats (e.g., "WB_Met," "Allegiance_Locked," "Rival_Defeated").
*   **Example:** After the `WB_Met` flag is set, any NPC in the game might have a new, rare chance to spawn a dialogue line like, "Security has been on high alert all cycle. Something's got management spooked." This makes the world feel interconnected.

### [3.3.2] The 'Key Moments' Dialogue Approach

This document outlines the design philosophy for when and how dialogue is presented during gameplay. The core principle is to make dialogue feel significant and impactful by tying it to specific, meaningful state changes rather than frequent, repetitive actions.

#### Core Philosophy: Punctuate, Don't Saturate
To avoid player fatigue and prevent dialogue from becoming skippable "fluff," we will not trigger unique lines for every single card play. Instead, dialogue is reserved for key moments in an encounter, serving as a narrative reward or a signal of a shift in the tactical situation. This makes each line land with more weight.

This system will be powered by the **`Dialogue Manager`** addon for robust implementation.

#### Defined Dialogue Triggers

**1. Start of Encounter**
*   **Trigger:** The encounter begins.
*   **Function:** To establish the NPC's personality, the context for the encounter, and to react to the player's state based on the **"NPC Memory" System**. This is the most complex dialogue check, pulling from all five indices to deliver a unique opening line.
*   **Status:** Mandatory for every NPC.

**2. `Inhibition` Thresholds Crossed (Clothing State Changes)**
*   **Trigger:** The moment an NPC's `Inhibition` bar drops below a pre-set threshold, causing a change in their clothing state (e.g., becoming topless).
*   **Function:** To provide a direct, reactive reward for the player's progress. The NPC's line should reflect their reaction to this new level of intimacy and vulnerability.
*   **Status:** Highly Recommended for all major thresholds. We can write 2-3 variations per trigger to enhance replayability.

**3. Player Becomes `Exposed`**
*   **Trigger:** The moment the player's own `Inhibition` bar is broken.
*   **Function:** To signal a critical shift in the power dynamic. The NPC's tone must change, becoming more confident, aggressive, or predatory, as they now have a significant advantage.
*   **Status:** Mandatory. This is a crucial game state change that must be clearly communicated to the player.

**4. First Use of a Signature/Ultimate Ability**
*   **Trigger:** The first time an NPC uses their most powerful, `Exposed`-state unlocked ability in an encounter.
*   **Function:** To add emphasis and telegraph the danger of their ultimate move. It's a cinematic "super move" callout.
*   **Status:** Recommended for all boss/rival abilities and the key abilities of standard NPCs.

**5. Low `Composure` State**
*   **Trigger:** The NPC's `Composure` drops below a certain threshold (e.g., 25%).
*   **Function:** To provide clear feedback that the player is close to victory. The NPC's dialogue should become more strained, breathy, or desperate, indicating they are losing control.
*   **Status:** Highly Recommended. This serves as a vital "boss is almost dead" indicator.

**6. Post-Encounter Storylet**
*   **Trigger:** Immediately following a victory.
*   **Function:** A skippable, slightly longer dialogue scene (e.g., ~30 seconds) to develop the NPC's specific side-story, provide world-building, or drop hints about the larger plot (e.g., "matrix glitches").
*   **Status:** Mandatory. This is a key vector for our narrative delivery.

### [3.3.3] Mental Card Animations

This document outlines the design principles for visually representing `Mental` card plays. The challenge is to make a non-physical action feel tangible, as impactful as a physical strike.

#### Primary Method: "Subtitled Intent"

This is our default and recommended approach for most `Mental` cards. It combines audio design, stylized visual effects, and NPC reaction to create an immersive, "inside the character's head" experience.

**Sequence of Events:**

1.  **Card Play:** Player plays a `Mental` card (e.g., `Mind's Eye`).
2.  **Focus Surge:** The player's mental focus causes a stylized pulse to flare around their head, styled per card family.
3.  **Visual Effect (The "Subtitle"):** The card's intent materializes briefly on-screen as a stylized text or symbol, representing the thought being projected.
    *   This is **not** a UI text box. It is an artistic effect integrated into the game world—like a psychic projection or neon imprint on reality.
    *   The font, color, and animation align with the card's tone. A supportive thought might flow in warm, soft colors; an aggressive jab might spike in harsh, glitchy forms.
    *   The text/symbol emanates from the player's implied position and drifts toward the NPC before dispersing on contact.
4.  **NPC Reaction:** The NPC's expression, animation, or aura changes to show the thought piercing their defenses (e.g., a stagger, momentary freeze, eyes widening).
5.  **Resolution:** The `Mental` damage number appears as the NPC reacts, completing the effect.

**Rationale:** This method provides perfect clarity, adds significant artistic flair, avoids breaking immersion with traditional UI, and remains flexible enough to convey very different emotional tones.

#### Alternative & Supplementary Animation Models

**Alternative 1: The "Aural Ripple" / Synesthesia Model**

*   **Concept:** Represents the player's mental voice as a visible wave of force or emotion, leaning into the sci-fi VR theme.
*   **Execution:** Instead of text, a stylized soundwave (e.g., a blue ripple for a calming focus, a red spike for an aggressive jab) emanates from the player and washes over the NPC, triggering their reaction animation.
*   **Best Use Case:** Could be used for `Mental` or `Support` cards like `Steady Breath`, where a wave of focus visually represents the effect without words.

**Alternative 2: The "Psychological Overlay" Model**

*   **Concept:** A powerful mental attack momentarily "hacks" the screen, showcasing an abstract representation of the feeling being inflicted.
*   **Execution:** For a brief moment, the screen is taken over by a full-screen visual effect—a soft pink bloom for affection, or a harsh red static for domination.
*   **Best Use Case:** This should be reserved for **rare, ultimate-level `Mental` Spender cards.** Its high visual impact makes it feel like a "super move" and should be deployed sparingly to avoid player fatigue.

---

# [4] Art & Technical Implementation

## [4.1] Technical Specifications

### [4.1.1] Engine & Renderer - Godot 4, Compatibility Renderer, Rationale

This document outlines the choice of game engine and rendering backend for Project Cygnus, along with the detailed rationale for these critical technical decisions.

#### Selected Game Engine: Godot Engine (Version 4.x)

Project Cygnus will be developed using the **Godot Engine**. Godot is a free, open-source, and powerful game engine chosen for its unique alignment with our project's specific development needs and workflow.

**Primary Reasons for Choosing Godot:**

1.  **AI-Assisted Workflow:** Godot's native scripting language, **GDScript**, is high-level and Python-like. Its simple syntax is extremely well-suited for generation by AI language models. This allows for a "text-to-game" development model where design logic can be translated directly into functional, copy-paste-able code with high accuracy.
2.  **Robust 2D/UI Toolset:** Godot's 2D engine is considered best-in-class. Its node-based Control system is designed for creating complex, scalable, and animated user interfaces, which is essential for our card game HUD and other menus.
3.  **Open-Source & Content Freedom:** Being fully open-source (MIT License), Godot imposes no content restrictions. This provides a safe and stable platform for developing explicit NSFW content without fear of censorship or platform policy changes. There are no fees or royalties.
4.  **Ease of Use for Solo Developers:** Its intuitive scene and node system is easier for non-programmers to grasp compared to more complex engines like Unity or Unreal.

#### Selected Renderer: Compatibility (OpenGL 3.3)

Within Godot 4, we will exclusively use the **Compatibility** rendering backend.

**Rationale for Choosing the Compatibility Renderer:**

*   **Maximum Audience Reach:** The Compatibility renderer is built on OpenGL, a universally supported graphics API. This ensures our game will run on the widest possible range of PC hardware, from older laptops with integrated graphics to high-end gaming rigs. This is critical for maximizing our potential customer base on Steam.

*   **Optimized for 2D:** This renderer is highly optimized for 2D workloads. For our game, which consists primarily of high-resolution 2D art, UI elements, and playing video files, it provides excellent performance and stability. The advanced 3D features of the `Forward+` and `Mobile` renderers are unnecessary for our design.

*   **Platform Strategy Alignment:** Our target platforms are PC storefronts (Steam, Itch.io) that permit adult content. Mainstream mobile app stores are not a viable option due to their strict anti-NSFW policies. Therefore, choosing the `Mobile` renderer is pointless. The `Compatibility` renderer is the most efficient and pragmatic choice for our exclusive PC focus.

*   **Development Safety:** By developing within the constraints of the Compatibility renderer, we ensure we do not accidentally implement a visual feature or shader that would be incompatible with a large portion of our target hardware. It enforces good design discipline.

### [4.1.2] Version Control - Git Setup

This document outlines the project's use of Git for version control. Utilizing version control is a non-negotiable best practice, providing a critical safety net against data loss and allowing for a comprehensive history of all development changes.

#### Core Technology: Git
**Git** is the chosen version control system. It is the industry standard for software development and is highly integrated with modern development tools, including Godot and VS Code.

**Initial Project Setup**
When creating the project in the Godot Project Manager, the setting for **`Version Control Metadata`** must be set to **`Git`**.

*   **Rationale:** This automatically generates a crucial `.gitignore` file within the project directory. This file is pre-configured to tell Git to ignore Godot's temporary, auto-generated cache and import files (such as the `.godot` folder).
*   **Benefit:** This keeps our version control history clean, focused only on meaningful changes to scenes, scripts, and assets. It prevents repository bloat and avoids conflicts caused by machine-specific temporary files.

#### Recommended Workflow for a Solo Developer

While we are working as a solo developer, adhering to a professional Git workflow provides immense benefits.

**1. Local Repository**
The project folder on the local machine will be a Git repository. This provides the core "magical save" functionality.

**2. Remote Repository (GitHub)**
A private repository on **GitHub** will serve as our secure, off-site backup and the central location for our Living Design Document (LDD).

*   **Purpose:**
    *   **Data Redundancy:** Protects against local hardware failure (e.g., hard drive crash).
    *   **LDD Hosting:** GitHub's Markdown rendering makes it the ideal platform for hosting and browsing our LDD.
    *   **History Tracking:** Provides a web interface to easily view the history of all changes.

**3. Recommended Tool: GitHub Desktop**
To simplify the use of Git for a non-coder, the **GitHub Desktop** application is the recommended tool.

*   **Function:** It provides a simple, graphical user interface (GUI) for all essential Git operations.
*   **Workflow:**
    1.  Make changes to the game or LDD locally.
    2.  Open GitHub Desktop. It will show a list of all changed files.
    3.  Write a short, descriptive message in the "Summary" box (e.g., "Updated Player Systems LDD file").
    4.  Click **`Commit to main`**. This creates a "snapshot" or magical save on your local machine.
    5.  Click **`Push origin`**. This uploads that snapshot to your private GitHub repository, backing it up.

### [4.1.3] Development Environment - VS Code Settings & Recommended Extensions

This document specifies the setup for Visual Studio Code (VS Code), our chosen external editor for writing GDScript. A properly configured editor is essential for our AI-assisted, "text-to-game" workflow.

#### Core Principle
Our VS Code environment is designed to be a "smart" partner. It should maximize clarity, automate tedious tasks, provide powerful organizational tools, and seamlessly integrate with both the Godot Engine and AI assistants.

#### Essential Extensions

These extensions are considered mandatory for our development process. They should be installed from the VS Code Extensions Marketplace.

| Extension Name | Publisher | Purpose & Rationale |
| :--- | :--- | :--- |
| **`Godot Tools`** | `godotengine` | The official bridge between Godot and VS Code. Provides GDScript syntax highlighting, code completion, and debugging capabilities. This is the non-negotiable foundation. |
| **`GitHub Copilot`** | `GitHub` | The core AI "pair programmer." It autocompletes code, suggests entire functions, and dramatically accelerates the process of turning design logic into functional script. |
| **`GitHub Copilot Chat`** | `GitHub` | An integrated chat interface for Copilot. Allows for direct, conversational queries about code, making it an invaluable tool for explaining, debugging, and refactoring scripts. |
| **`Todo Tree`** | `Gruntfuggly` | Scans the project for comments like `// TODO:` and `// FIXME:` and organizes them into a navigable tree view. This is crucial for tracking follow-up tasks and ensuring no design detail is lost. |
| **`GitLens`** | `GitKraken` | Supercharges the built-in Git capabilities, providing detailed, line-by-line history (blame), easy file comparison, and powerful repository navigation tools. |

#### Recommended "Quality of Life" Extensions

These extensions are not strictly essential for function but are highly recommended for a more organized and aesthetically pleasing workflow.

| Extension Name | Publisher | Purpose & Rationale |
| :--- | :--- | :--- |
| **`Git Graph`** | `mhutchie` | Provides a clean, graphical representation of the Git history (branching, merging), making it much easier to visualize the project's development timeline. |
| **`Project Manager`**| `Alessandro Fragnani` | Allows for easy saving and switching between different project folders (e.g., our main game and reference projects) from within VS Code. |
| **`Material Icon Theme`**| `PKief` | Provides custom, language-specific icons for files in the explorer, making it much easier to identify different file types at a glance. |

#### `settings.json` Configuration

The following is the complete `settings.json` configuration for VS Code. It should be used to ensure a consistent and optimized editing environment.

```json
{
    // --- General Editor Quality of Life ---
    "editor.fontFamily": "Cascadia Code, Fira Code, Consolas, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "editor.wordWrap": "on",
    "editor.minimap.enabled": false,
    "editor.renderLineHighlight": "gutter",
    "files.autoSave": "onFocusChange",

    // --- Godot & GDScript Specific Settings ---
    // IMPORTANT: This path must be updated to point to the user's Godot 4 executable!
    "godot_tools.editor_path": "C:\\Path\\To\\Your\\Godot_v4.x.x.exe",
    "[gdscript]": {
        "editor.tabSize": 4,
        "editor.insertSpaces": true,
        "editor.trimAutoWhitespace": true
    },
    "textEditor.completion.addTypeHints": true, // Renamed from godot_tools to textEditor in newer versions

    // --- File & Workspace Tidiness ---
    "workbench.iconTheme": "material-icon-theme",
    "explorer.compactFolders": false,
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/Thumbs.db": true,
        ".vscode": true,
        "**/.godot": true
    },

    // --- Git & Version Control ---
    "git.autofetch": true,
    
    // --- Extension-Specific Settings ---
    "github.copilot.enable": {
        "*": true,
        "plaintext": false,
        "markdown": true,
        "scminput": false
    },
    "todo-tree.tree.showScanModeButton": false
}
```

### [4.1.4] Recommended Addons

This document lists the essential and recommended addons (plugins) for the Godot Engine, chosen to accelerate development, manage complex systems, and improve the final quality of the game. These addons are installed via Godot's built-in `AssetLib` tab.

#### Essential Addons (Install Immediately)

These addons provide foundational systems that are critical to our game's design and our AI-assisted development workflow.

**1. `Dialogue Manager 3`**
*   **Author:** `nathanhoad`
*   **Purpose:** A powerful, comprehensive system for creating and managing complex, branching dialogue.
*   **Rationale for Our Project:**
    *   **Narrative Core:** Our game is heavily narrative-driven. This addon provides the robust framework needed to handle our "NPC Memory System," allowing for dialogue that changes based on player choices, allegiance, and history.
    *   **Simplified Workflow:** It allows us to write dialogue in simple, script-like text files (`.dialogue`). This is perfect for our workflow, as I can generate the dialogue scripts, and you can implement them with a simple copy-paste, without needing to code complex UI logic.
    *   **Status:** **Mandatory.** This addon is the backbone of our storytelling implementation.

**2. `TweenAnimator`**
*   **Author:** `EvilBunny-man`
*   **Purpose:** A code-centric library that simplifies the creation of smooth, complex UI and 2D animations.
*   **Rationale for Our Project:**
    *   **UI Polish:** Our futuristic UI needs to feel slick and responsive. This addon makes it easy to code professional-looking animations like fading buttons, sliding menus, and animating resource bars.
    *   **Simplified Workflow:** It condenses Godot's multi-line `Tween` setup into simple, readable, one-line commands (e.g., `TweenAnimator.fade_out(node, duration)`). This is ideal for our non-coder, AI-assisted approach.
    *   **Status:** **Essential.** This will be our primary tool for all UI animation.

**3. `Godot Game Settings`**
*   **Author:** `nathanhoad`
*   **Purpose:** A complete, pre-built, and customizable settings menu system.
*   **Rationale for Our Project:**
    *   **Saves Massive Development Time:** Building a fully functional and persistent settings menu (for audio, graphics, etc.) is a huge, tedious task. This addon provides a professional solution out-of-the-box.
    *   **Player Experience:** It provides the standard options that players expect from any professional PC game release, adding a critical layer of polish.
    *   **Status:** **Essential.** This should be installed early to handle core application settings.

#### Recommended for Later Development

These addons are powerful and will likely be needed, but their implementation can wait until we are further into development.

**1. `Gut` (Godot Unit Test)**
*   **Author:** `bitwes`
*   **Purpose:** A framework for writing and running automated tests on our game's code.
*   **Rationale for Our Project:**
    *   **Stability & Regression Testing:** As our card game's rules become more complex, `Gut` will allow us to create a "safety net" of tests. This ensures that adding a new feature doesn't accidentally break an old one. It's a professional practice for maintaining a stable, long-term project.
    *   **Status:** **Recommended.** We will implement this once the core card game logic is in place.

**2. `InputHelper`**
*   **Author:** `nathanhoad`
*   **Purpose:** A system that simplifies the creation of a key remapping menu for players.
*   **Rationale for Our Project:**
    *   **Accessibility & Polish:** Allowing players to customize their keybinds is a major feature for player satisfaction and accessibility. This addon handles the complex logic involved.
    *   **Status:** **Recommended.** This is a feature to be added later in the development cycle as we approach a public release.

## [4.2] Art & Animation Direction

### [4.2.1] Core Art Style - Stylized Realism

This document defines the target art style for Project Cygnus. A consistent and well-defined art direction is critical for establishing the game's tone, mood, and overall brand identity.

#### Guiding Philosophy: Believable Fantasy
The goal is to create visuals that are immersive and feel "real" within the game's sci-fi context, but are clearly and intentionally a form of digital art. We are explicitly avoiding photorealism or styles that attempt to perfectly mimic real people. The fantasy is paramount.

**Our target aesthetic is "Stylized Realism."**

#### Core Components of Stylized Realism

**1. Character Design:**
*   **Proportions:** Characters will have largely realistic human proportions. We will avoid hyper-exaggerated anatomy (e.g., impossibly large breasts or waists) to maintain a sense of grounded realism.
*   **Features:** Facial features will be well-defined but slightly idealized. Think of high-end video game characters from franchises like *Final Fantasy*, *Resident Evil*, or *Genshin Impact*, where features are clean, symmetrical, and expressive.
*   **Texturing & Shading:** This is the key element. Skin will have texture, but it will be clean and smooth, not photo-realistically porous. Lighting will be soft and cinematic, designed to be flattering and to accentuate form. There will be a clear "digital painting" or "high-end 3D render" quality to the characters. They are unambiguously works of art.

**2. Environment & Backgrounds:**
The environments within the VR simulation will be clean, futuristic, and often minimalist. They will draw from a "corporate sci-fi" aesthetic: sleek lines, glowing holographic elements, and a cool color palette (blues, whites, blacks) punctuated by accent colors.
The goal is to create a backdrop that is visually interesting but does not distract from the characters, who are the primary focus of every scene.

**3. Color Palette:**
*   **Overall:** A cool, desaturated color palette will dominate the environments and UI to evoke the sterile, corporate nature of the simulation.
*   **Characters:** The characters themselves will be the primary source of vibrant color. Their hair, eyes, and outfits will "pop" against the clean backgrounds.
*   **Emotional Highs:** During moments of high intensity (e.g., during a `Position` sub-game or when a character is about to orgasm), the lighting and color palette can shift dramatically, becoming warmer and more saturated to reflect the emotional state of the scene.

#### GenAI Prompting Keywords
To achieve this style with our GenAI pipeline, prompts will consistently include tags that steer the model towards this aesthetic.

*   **Positive Tags:** `masterpiece`, `best quality`, `ultra-detailed`, `cinematic lighting`, `(stylized:1.2)`, `digital painting (medium)`, `game cg`, `clean lines`, `sharp focus`.
*   **Negative Tags:** `(photograph, realistic, photorealistic:1.4)`, `blurry`, `messy`, `sketch`.

By adhering to this style, we will create a game that is visually stunning, thematically coherent, and clearly positions itself as a high-quality, professional piece of interactive fiction.

### [4.2.2] Presentation & Perspective - First-Person View & The Cinematic Turn

This document defines the game's presentation layer, which is a hybrid of traditional UI elements and a full-motion video (FMV) system. This choice is fundamental to achieving our core design pillar of an immersive, cinematic, and realistic NSFW experience.

#### Core Technology: Pre-Rendered Video

The entire game will be presented from a **First-Person Perspective**, but instead of using real-time 3D models, the visual background will be composed of pre-rendered video clips.

- **Engine Component:** Godot's `VideoStreamPlayer` node will be the primary tool for displaying all character interactions and environmental backgrounds.
- **Format:** All video assets will be in the `.webm` format for an optimal balance of quality and file size.

#### The "Cinematic Turn" as a Video Sequence

The "Cinematic Turn" philosophy is not just a concept but a literal, technical implementation using video playback. The flow of an encounter is a sequence of triggered video files.

- **Encounter Intro:** An encounter begins with a one-shot intro video (e.g., `Sarah_Intro_Dialogue.webm`).
- **The Neutral State:** After the intro, the system transitions to a looping "neutral state" video (e.g., `Sarah_Neutral_Loop.webm`). This video shows the NPC in a default idle animation. The card game UI is overlaid on top of this looping video.
- **Player & NPC Actions:** Every action, whether a card played by the player or a move by the NPC, triggers a specific, non-looping action video (e.g., `Player_Action_CaressThigh.webm`, `NPC_Reaction_ShyBlush.webm`).
- **Return to Neutral:** After an action video completes, the `VideoStreamPlayer` seamlessly returns to playing the appropriate "neutral state" loop, awaiting the next gameplay event.

This FMV-hybrid approach allows for exceptionally high-fidelity, realistic visuals that would be unachievable in real-time, creating a deeply immersive and visceral experience that directly serves the player fantasy.

### [4.2.3] GenAI Asset Pipeline - Workflow for Generating Images & Videos

This document outlines the planned workflow for creating the game's visual assets using a suite of Generative AI tools. The goal is to establish a consistent, efficient pipeline for producing a large library of short, high-quality `.webm` video files that will function as the game's core visual engine.

#### Core Principle: A Video-First, Iterative Approach
The primary output of this pipeline is not static images, but a comprehensive library of short video clips. We will use the best specialized tool for each task and iterate extensively to achieve the desired quality and consistency.

#### Stage 1: Base Character & Environment Generation

*   **Primary Tool:** High-fidelity image generation models (e.g., Illustrious, Stable Diffusion with custom LoRAs, Midjourney).
*   **Workflow:**
    1.  **Character Definition:** Before any video is generated, we will create a definitive, high-detail "character sheet" image for each key NPC (e.g., Analyst Sarah). This image will be used as a primary reference for all future generation.
    2.  **Character Consistency:** To ensure characters look consistent, we will train a character-specific **LoRA (Low-Rank Adaptation)** on a set of curated base images. This is a critical step for a believable FMV experience.
    3.  **Environment Definition:** A set of master background images for key locations (e.g., The Hub, QA Testing Room) will be generated.

#### Stage 2: FMV Clip Generation (The Core Asset Loop)

This is the most critical stage of the pipeline. The goal is to create a complete library of video clips corresponding to every possible game state and action.

*   **Primary Tool:** Image-to-Video or Text-to-Video AI models (e.g., WAN 2.1, Runway Gen-2, Pika Labs).
*   **Workflow:**
    1.  **Source Image & LoRA:** A high-quality static image (from Stage 1) and the character's LoRA will be used as the starting point.
    2.  **Action-Based Prompting:** A clear, direct prompt will describe the desired motion for a specific game action. The prompt will be tied directly to a card or event in the LDD.
        *   *Example Prompt for `Sarah_Neutral_Loop.webm`*: "Using the Sarah LoRA, show her from the chest up in the QA Testing Room. She should have a neutral expression, breathing slowly, occasionally blinking. Loopable 3-5 second video."
        *   *Example Prompt for `Player_Action_KissNeck.webm`*: "Using the Sarah LoRA, from a first-person POV, show her reacting to a kiss on the neck. A slight shiver, a soft gasp, eyes closing for a moment. A 2-3 second, non-looping video."
    3.  **File Naming Convention:** A strict file naming convention is mandatory for organization. The proposed format is: `[Character]_[State/Action]_[Descriptor].webm`. (e.g., `Sarah_Neutral_Loop.webm`, `Sarah_Reaction_Pleasure_High.webm`).
    4.  **Post-Processing:** Generated video clips will be edited in standard video software (e.g., DaVinci Resolve, Premiere) to trim, color correct, and ensure seamless looping where necessary.

#### Stage 3: Godot Integration

*   **Engine:** Godot Engine.
*   **Workflow:**
    1.  All finalized video clips will be converted to `.webm` and imported into the Godot project under a structured `assets/videos/` directory.
    2.  Godot's `VideoStreamPlayer` node, controlled by a central state machine script, will be used to call and play the appropriate video file based on game logic (player input, NPC decisions, state changes).

This pipeline transforms the asset creation process into a video production workflow, enabling a solo developer to create a visually rich, FMV-based game.

## [4.3] UI & UX Design

### [4.3.1] HUD Layout - In-Encounter UI Elements

This document provides a detailed breakdown of the Heads-Up Display (HUD) for the core Sex Combat screen. The design philosophy is to be **immersive, clean, and informationally clear,** supporting our First-Person Perspective without overwhelming the player.

#### Visual Aesthetic
*   **Style:** Sleek, futuristic, minimalist. Elements should feel like a diegetic part of the player's cybernetic heads-up display.
*   **Theme:** Use of semi-transparent panels, glowing holographic lines, and smooth "fade-in/fade-out" animations via our `TweenAnimator` addon.
*   **Color Palette:** Primarily cool colors (blues, teals, dark greys) for the UI frames, with vibrant, hot colors (magenta for `Arousal`, crimson for `Composure`) used for resource bars to create a strong visual contrast.

#### On-Screen Element Layout

This describes the layout from the player's FPV.

**Center Screen (The Focus)**
*   **NPC Character Art:** The primary visual element. A high-resolution, expressive character model/sprite occupies the center of the view. Their pose and expression will change based on the "Escalation State."
*   **NPC Status Bars:** Positioned directly **below** the NPC character art for clear association.
    1.  **`Composure` Bar (Crimson):** The NPC's main health bar. Large and prominent.
    2.  **`Inhibition` Bar (Teal):** A single segmented bar representing clothing integrity. Segments disappear as thresholds break (e.g., 66%, 33%, 0%).
    3.  **`Guard` Callout:** A hexagonal number that appears above the `Composure` bar when the NPC has temporary protection from `Defensive` abilities.
    4.  **`Arousal` Meter:** A slim, magenta bar that climbs alongside the `Composure` bar, showing the shared escalation pressure.
*   **NPC Intent Icon:** A simple, clear icon appears next to the NPC's status bars during the player's turn, telegraphing the NPC's next action (e.g., a `Red Sword with -10` for a `Composure` attack).

**Bottom of Screen (The Player's "Cockpit")**
This area contains the player's primary interactive elements.

*   **Card Hand:** Displayed in a gentle arc at the bottom center. Cards should be large and clear. Hovering over a card should bring it to the foreground and display its full text.
*   **Action Points (AP):** A series of 3-5 glowing orbs or pips located in the bottom-left corner, near the player's resources. Easy to see how many actions are remaining.
*   **Draw & Discard Piles:** Represented as two small, stylized deck icons on the far-left and far-right of the screen, below the card hand arc. Each has a number indicating the cards remaining.

**Left & Right Periphery (Player Status)**
These elements should be placed on the sides of the screen, like readouts on a helmet visor. They should be clear but less prominent than the center-screen elements.

*   **Left Side - Defensive Vitals:**
    1.  **Player `Composure` Bar (Crimson):** A vertical or L-shaped bar on the left edge of the screen.
    2.  **Player `Inhibition` Bar (Teal):** A segmented bar next to the player's `Composure` bar, mirroring the NPC's layout.
    3.  **Player `Guard` Value:** A number appearing over the `Composure` bar, mirroring the NPC's display.

*   **Right Side - Offensive Pressure:**
    1.  **Shared `Arousal` Meter:** Mirrored readout of the center meter to emphasize that both sides push the same track.
    2.  **`Self Arousal` Counter:** Displays how close the player is to losing control. If it hits 100, the UI should flash to warn the player before an involuntary `Climax` trigger.

This layout ensures that the player's focus remains on the NPC in the center of the screen, while all necessary strategic information is available in their periphery with a quick glance.

### [4.3.2] Progression UI Node Map & Hub Menus

This document outlines the User Interface (UI) and User Experience (UX) for the game's primary progression screens: the in-run node map and the Hub world menus.

#### In-Run Progression: The "Server Map"

While individual encounters are immersive and first-person, the navigation *between* encounters will be handled via an abstract, procedurally generated map. This provides strategic clarity and is a familiar, proven system for roguelite players.

*   **Visual Theme:** The map will be presented as a **"Server Topology Chart"** or **"Data Network."** It will be styled to look like a futuristic, holographic interface, consistent with our overall UI aesthetic.
*   **Structure:** The map will be a **branching path of nodes**, similar to *Slay the Spire*. The player starts at the bottom and chooses a path upwards towards the Act Boss at the top.
*   **Node Icons:** Each node will be represented by a clear, symbolic icon to denote its type:
    *   **Standard Encounter:** A simple, neutral icon.
    *   **Rival Encounter (Mid-Boss):** A larger, more menacing icon, perhaps a skull or a spiked symbol.
    *   **Event ("?"):** A question mark icon, representing an unknown narrative or choice-based event.
    *   **Refit Station (Shop):** An icon representing currency or a wrench/gear.
    *   **Sanctuary (Rest Site):** A calming icon, perhaps a stylized heart or moon.
    *   **Act Boss:** A large, unique, and intimidating icon at the very top of the map.
*   **UX:** The player clicks on the next connected node in their path to travel to it. The path they have taken will be highlighted. This provides a clear, at-a-glance overview of their progress through the current Act.

#### Hub World UI: The "Operations Terminal"

The Hub is the persistent space between runs. Its UI should be clean, menu-driven, and easy to navigate. The primary interface will be an "Operations Terminal" that the player interacts with.

*   **Main Menu:** The terminal will present several clear options:
    1.  **`Initiate Server Gauntlet`:** Starts a new run. This will take the player to the "Run Preparation" screen.
    2.  **`Access Skill Trees`:** Opens the "Mirror Trees" UI, where the player can spend `Refined Data` and `Sentience Points`.
    3.  **`Personnel File`:** Opens the player's status screen, where they can view their unlocked Outfits, Chassis, and the Compendium of encountered NPCs.
    4.  **`Review Directives`:** Accesses the main story quests and narrative logs.
    5.  **`System Settings`:** Opens the main game options menu (handled by the `Godot Game Settings` addon).

*   **Skill Tree UI:**
    *   **Corporate Tree:** Will use the "Skyscraper" visual metaphor. The UI will be clean, sharp, and use a cool blue/white corporate color palette.
    *   **Sentience Tree:** Will use the "Neural Web" visual metaphor. The UI will be more organic and fluid, with a warmer, glowing color palette.

This combination of a clear, abstract map for runs and a clean, thematic menu for the Hub provides players with the information they need without sacrificing our established aesthetic.

### [4.3.3] Combat UI - The Minimalist Visor

This document outlines the design and implementation blueprint for the Sex Combat user interface, based on the "Minimalist Visor" concept. It serves as the primary technical and artistic reference for building the in-game HUD in Godot.

**Design Philosophy:** The UI must be clean, immersive, and informationally clear. It is a diegetic interface, representing what the android player sees on a cybernetic visor or contact lens. The design prioritizes an unobstructed view of the opponent, pushing most player-centric information to the periphery, while reimagining cards as "Minimalist Data Fragments."

#### 1. HUD Layout & Element Positioning

This layout ensures the player's focus remains on the NPC in the center of the screen.

*   **Center Screen (The Focus):**
    *   **NPC Character:** The primary visual. Their pose and expression are paramount.
    *   **NPC Vitals Cluster:** Positioned directly **below** the NPC for clear association.
        *   `Composure` Bar (Red): Large, primary horizontal bar.
        *   `Inhibition` Bars (Blue/Green): Smaller bars above Composure.
        *   `Focus` Shield: Numerical value overlaid on the left of the Composure bar.
        *   `Intent` Icon: A clear icon telegraphing the NPC's next action appears next to this cluster.

*   **Screen Periphery (Player Vitals):**
    *   **Left Edge:** A vertical `L-shaped` bar representing the player's `Composure` and `Inhibition` levels.
    *   **Right Edge:** Clean numerical readouts for `Tension` (Blue) and `Arousal` (Pink/Orange), each paired with a simple, stylized icon.

*   **Bottom of Screen (Player Cockpit):**
    *   **Card Hand:** A gentle arc of 5 "Minimalist Data Fragment" panels at the bottom of the screen. They are slightly transparent until hovered.
    *   **Action Points (AP):** A series of 3-5 glowing pips in the bottom-left corner.
    *   **Draw & Discard Piles:** Two simple, stylized deck icons on the far-left and far-right, below the hand, each with a numerical counter.

#### 2. The Card as "Minimalist Data Fragment"

We are abandoning the traditional rectangular card metaphor in favor of something more diegetic. Cards are "subroutines" or "actions" visualized as panes of holographic glass.

**`Card.tscn` Godot Scene Blueprint**

*   **Root Node:** `PanelContainer`
    *   **Style:** Use a `StyleBoxFlat` with a semi-transparent background color and no borders.
*   **Children Nodes:**
    *   `TextureRect` (named `CardArt`): The main visual space. This will eventually display our GenAI-generated looping videos or images. For the MVE, a placeholder texture will suffice.
    *   `Label` (named `NameLabel`): Top-center. Displays the card's name.
    *   `Label` (named `CostLabel`): Top-left corner. Displays the AP cost.
    *   `RichTextLabel` (named `EffectLabel`): Bottom half. Describes the card's mechanics. Keywords will be color-coded using BBCode.
    *   `HBoxContainer` (named `ResourceIcons`): For displaying resource generator/spender icons (Tension, Arousal) if applicable.

**Interaction & Animation**

*   **Hover:** When hovered, a `Tween` will slightly increase the panel's scale and make its background fully opaque for better readability.
*   **Play:** On play, the panel will animate towards the center of the screen before fading out, triggering the action.

#### 3. Style Guide

*   **Color Palette:**
    *   **UI Panels & Text:** Off-whites, light teals, and dark greys for a clean, futuristic look. (`#EAEAEA`, `#5DBCD2`, `#222222`)
    *   **Player Resources:** Use hot, vibrant colors for high contrast and immediate recognition.
        *   `Composure`: Red (`#FF4141`)
        *   `Tension`: Bright Blue (`#00FFFF`)
        *   `Arousal`: Hot Pink/Orange (`#FF69B4` / `#FFA500`)
    *   **Keywords:** Use BBCode in `RichTextLabel` to color keywords (e.g., `[color=#00FFFF]Verbal[/color]`).

*   **Typography:**
    *   **Font:** A clean, readable sans-serif font. "Roboto" or "Montserrat" are good candidates to import.
    *   **Hierarchy:** Use different font sizes and weights to distinguish card names from effect text.

*   **Animation Philosophy:**
    *   All UI animations should be smooth, fast, and non-intrusive. Use Godot's `Tween` node for fades, movement, and scaling. Avoid jarring or overly long animations that slow down gameplay.

## [4.4] Audio Direction

### [4.4.1] Music Philosophy

This document outlines the high-level direction for the game's musical score. The music is a critical component for establishing mood, enhancing immersion, and providing emotional context for the narrative.

#### Core Principle: "Atmospheric Electronica with Emotional Depth"

The overall soundtrack will be rooted in electronic music genres, but it must be versatile enough to support both the cold, futuristic corporate setting and the intimate, emotional, and sometimes horrific moments of the story.

#### Musical Direction by Game State

**1. The Hub (Corporate HQ)**
*   **Style:** **Corporate Ambient / Chillwave.**
*   **Description:** The music in the Hub should be clean, minimalist, and slightly sterile. Think of the atmospheric, unobtrusive background music in games like *Deus Ex: Human Revolution* or movies like *Blade Runner*. It should feel professional and create a sense of being inside a vast, powerful, and impersonal entity.
*   **Instrumentation:** Synthesizer pads, clean electronic plucks, subtle sub-bass, and a slow, steady tempo. It should be pleasant but not distracting.

**2. Run Progression (Map/Node Selection)**
*   **Style:** **Dark Synthwave / Cyberpunk Ambient.**
*   **Description:** As the player navigates the "Server Map," the music should build a sense of tension and anticipation. It should be more driving and rhythmic than the Hub music, but still atmospheric. This is the "infiltration" music.
*   **Instrumentation:** Arpeggiated synths, a defined bassline, a simple but persistent drum machine beat (e.g., a classic 808-style beat). The music should make the player feel like they are a cool, capable agent on a mission.

**3. Sex Combat (Standard Encounters)**
*   **Style:** **Trip-Hop / Sensual Downtempo.**
*   **Description:** This is the core gameplay music. It needs to be sensual, rhythmic, and suitable for looping over a ~5-minute encounter without becoming grating. The tempo should be slow to mid-range, creating a "head-nodding" feel that can complement the action without overpowering it. Think of artists like *Massive Attack* or *Portishead*.
*   **Instrumentation:** A strong, deep bassline, a distinctive and clean drum loop, atmospheric pads, and perhaps a simple, recurring melodic hook (piano, electric piano, or a soft synth lead).
*   **Dynamic Element:** The music can subtly evolve as the encounter progresses. When the `Intensity` level increases or the NPC becomes `Exposed`, a new layer (like a more complex hi-hat pattern or a new synth pad) could be added to the track to heighten the tension.

**4. Boss Encounters (Rival EHs)**
*   **Style:** **Aggressive Industrial / Dark Electro.**
*   **Description:** The music for boss fights needs to signal a major spike in danger and intensity. It should be faster, heavier, and more aggressive than the standard encounter music.
*   **Instrumentation:** Distorted synth bass, harder-hitting drum samples, driving rhythms, and potentially dissonant or atmospheric industrial sounds. This is "duel" music.

**5. Narrative & Emotional Moments**
*   **Style:** **Ambient Piano / Orchestral Synths.**
*   **Description:** For key story moments, particularly the "Memory Shard" cutscenes with the Whistleblower, the electronic elements should recede. These moments should be scored with simple, emotive piano melodies or lush, orchestral synthesizer pads to create a strong contrast with the coldness of the corporate world and highlight the genuine human emotion of the scene.

This varied but stylistically coherent approach will ensure the music always supports the current gameplay state and narrative context, guiding the player's emotional journey.

### [4.4.2] Sound Effect (SFX) Design

This document outlines the design philosophy for the game's sound effects. SFX are critical for player feedback, providing weight and impact to actions and making the user interface feel responsive and satisfying.

#### Core Principles
*   **Clarity:** The player must be able to understand what happened purely through sound.
*   **Impact:** Actions should feel satisfying. A high-damage card should sound powerful.
*   **Thematic Cohesion:** The sounds should fit our "futuristic, clean, but sensual" aesthetic.

#### UI Sound Effects
The User Interface sounds should be minimalist, clean, and non-intrusive. They should feel like interacting with a high-end holographic display.

*   **Button Clicks / Hovers:** Soft, clean "clicks" and "swooshes." Avoid harsh or overly digital sounds.
*   **Resource Gain (`Tension`/`Arousal`):** A subtle, satisfying "ping" or "chime" that increases slightly in pitch as more resources are gained. `Tension` could have a more crystalline sound, while `Arousal` could have a warmer, more liquid sound.
*   **Card Draw:** The sound of a digital file being loaded, a soft "fwoop."
*   **Defensive (`Focus` Gain):** A sharp, calming, "shing" or energy shield hum, as defined in the `Steel Your Nerves` card.

#### Sex Combat Action Sound Effects
This is where the sound design must be explicit and immersive. We are not using abstract "hit" sounds.

**Player Card Actions**
*   **`Verbal` Cards:** The primary sound will be the player's **spoken voice line**. This will be accompanied by a subtle whoosh or electronic effect corresponding to the "Subtitled Intent" visual to give it a sense of impact.
*   **`Physical` Cards (Non-Intimate):** These should be grounded in realism.
    *   `Caress Her Thigh`: The soft sound of a hand brushing against fabric.
    *   `Fondle Her Breasts`: A combination of cloth rustling and a soft fleshy sound, paired with the NPC's breathy reaction.
*   **`Intimate` & `Position:` Cards:** The sound design must be explicit and powerful. This will involve a combination of wet, fleshy sounds, skin-on-skin contact, and most importantly, the clear, unambiguous moans, gasps, and breaths of the participating characters. The audio will be the primary vehicle for conveying the intensity of these actions.

**NPC Abilities**
*   The same principles apply. Each action must have a distinct, clear sound profile.
*   **`Check Your Hardware`:** The sound of fabric rubbing and a firm, grasping sound.
*   **`Breast Squeeze & Giggle`:** The sound should focus on the NPC's breathy moan and subsequent giggle, not just the physical action.
*   **`Begin Oral Exam`:** The audio here will be one of the most explicit in the game, focusing on wet, slick sounds and the NPC's breathing to sell the reality of the act from the player's FPV.

By focusing on a clean UI soundscape and a realistic, explicit set of combat SFX, the audio will work in concert with the visuals to create a deeply immersive and satisfying player experience.

---

# [5] Production & Balancing

## [5.1] Development Model - The Engine and One Perfect Slice (MVE)

This document outlines the production strategy for bringing Project Cygnus from concept to its initial public release. As a solo developer project with significant ambition, a phased, strategic approach is essential to ensure a successful and manageable development cycle.

#### Core Philosophy: Build Vertically, Not Horizontally
We will not attempt to build the entire game with all its branching paths and content for the Version 1.0 release. This would lead to a shallow experience and an unsustainable workload. Instead, our strategy is to build a "vertical slice" that is deep, polished, and perfectly representative of the final game's quality.

Our Minimum Viable Experience (MVE) is defined as **"The Engine and One Perfect Slice."**

#### The Engine: Building a Robust Foundation
The first phase of development is dedicated to creating all the core, reusable systems that will power the entire game. This includes:
*   The complete card combat system (`Composure`, `Inhibition`, `Focus`, `Tension`/`Arousal`).
*   The meta-progression framework (Hub, Skill Trees, Currencies).
*   The "NPC Memory" dialogue system and its triggers.
*   The GenAI asset pipeline and core animation systems (FPV, Cinematic Turns).
*   A functional starting deck and a small pool of additional cards, Implants, and Tier 1 NPCs.

#### The One Perfect Slice: Curated V1.0 Content
Once the core engine is stable, we will focus on creating a single, complete, and polished narrative experience for the initial release.

**V1.0 Content Plan:**

1.  **The Tutorial:** The hand-crafted "Diagnostic Cycle" featuring Analyst Sarah. This ensures all players have a smooth onboarding experience.

2.  **A Complete, Replayable Core Loop:**
    *   **The "Standard Gauntlet":** A full, procedurally generated run consisting of ~15-18 nodes (encounters, events, shops). This run will be our "Act 1" difficulty tier, culminating in a challenging Tier 1 Rival EH boss. This mode provides the core, endlessly replayable roguelite experience.
    *   **Narrative Integration:** The main story arc, from the start of the game through the "Whistleblower" catalyst event, will be woven into these standard runs. Key story moments will be triggered by the player reaching certain milestones (e.g., completing a run for the first time, defeating a boss 3 times).

3.  **A Satisfying Narrative Checkpoint (for V1.0):**
    *   The V1.0 story will conclude at a major, satisfying turning point: the **Allegiance Lock**. The player will have experienced the core truth and be forced to make their first major commitment to either the Corporate or Rebel path.
    *   This provides a complete narrative arc (from ignorance to revelation to choice) while clearly setting the stage for future story content.

This "vertical slice" approach ensures that our initial release is not a buggy, incomplete demo, but a polished and complete game experience that serves as a strong foundation for future content.

## [5.2] Funding & Community Model - Patreon & Steam

This document outlines the dual-platform strategy for funding development and releasing the game commercially, designed to maximize community engagement and financial stability.

#### Strategy Overview
Our approach is to use Patreon as the primary platform for **community-driven development funding** and Steam as the primary platform for the **commercial V1.0 release**. This is a proven, synergistic model for independent NSFW game developers.

#### Primary Development Platform: Patreon
Patreon is the financial and community backbone during the game's development.

*   **The Model:** We will release monthly or bi-monthly early access builds of the game exclusively to patrons. Tiers will offer varying levels of access and rewards (e.g., alpha/beta builds, behind-the-scenes content, design polls).
*   **Benefits:**
    1.  **Stable Income:** Provides a predictable monthly income, invaluable for a solo developer.
    2.  **Community Building:** Cultivates a dedicated community that provides high-quality feedback.
    3.  **Lower Commission:** Patreon's commission (5-12%) is lower than Steam's.
*   **NSFW Policy:** Patreon's policies are permissive of the explicit content in our game.

#### Primary Commercial Platform: Steam
The full "Version 1.0" of the game will be released on the Steam storefront for PC.

*   **Reach:** Steam provides access to the largest digital distribution market for PC games.
*   **NSFW Policy:** We will utilize Steam's "Adults Only" category, providing a thorough content disclosure to release uncensored.

#### Navigating the Dual-Platform Relationship
Success requires respecting the rules of both platforms.

**Steam Policy Considerations:**
*   **External Linking:** Direct links to Patreon on the main store page are forbidden. We will link to our project website, which will then link to Patreon.
*   **Steam Keys for Patrons:** This is allowed but must be handled carefully. To maintain pricing parity, keys will be offered to patrons who have pledged a cumulative amount equivalent to the game's retail price. We will monitor our key redemption ratio to stay in good standing with Valve.

**Patreon Policy Considerations:**
*   **No Exclusivity:** Patreon allows us to release on other platforms.
*   **Transparency:** We must be clear with patrons about the development roadmap and deliver on promised rewards.

**Value Proposition for Each Platform**
*   **Patreon:** Offers exclusive early access to development builds, direct interaction with the developer, and a chance to influence the game.
*   **Steam:** Offers the final, polished, stable, and complete V1.0 product for a one-time purchase.

## [5.3] Post-Launch Roadmap - Content Updates & Narrative Paths

Project Cygnus is designed as an expandable experience. The V1.0 release is a complete, satisfying game that ends at a major narrative checkpoint (the Allegiance Lock). Post-launch development will focus on adding replayability and building out the branching storylines.

#### Pillar 1: The "Mastery & Escalation" System
This system provides endgame content for dedicated players.

*   **The "Threat Level" System:** Post-launch, we will introduce escalating "Threat Levels" (similar to *Hades'* Heat). Each level adds new difficulties (e.g., tougher enemies, negative run modifiers) but also unlocks higher-tier rewards, creating a deep endgame grind.
*   **Bounties & Achievements:** We will add a "Bounty" system for specific, difficult in-game challenges (e.g., "Complete a run without taking `Composure` damage"). Rewards will include exclusive cosmetic Outfits or other prestige items.

#### Pillar 2: Narrative & Content Expansion
The primary goal of post-launch development will be to complete the narrative paths established in V1.0.

*   **The "Loyalist Path" Expansion (Update 2.0):**
    *   The first major content update will be a full expansion of the Corporate Loyalist storyline.
    *   This will add a unique set of late-game encounters, a new final boss (a confrontation with the Whistleblower), and a fully realized narrative conclusion for this allegiance.

*   **The "Anarchist Path" Expansion (Update 3.0):**
    *   A potential second major update could add the secret third "Anarchist" ending, with its own unique goals and challenges for players who have mastered both main paths.

*   **Intermittent Content Drops:**
    *   Smaller, regular updates can add new content for all players, such as new unlockable "Chassis" (starting decks), new NPCs to encounter in the gauntlets, and new card packs for the skill trees, keeping the game fresh over time.

This roadmap ensures long-term player engagement and allows the full, branching story to be told in manageable development phases.

---

# [6] Balancing & Data

## [6.1] Balancing Philosophy - The Player's Journey of Discovery

This document outlines the core philosophy that will guide all mechanical and numerical balancing for Project Cygnus. Our approach is centered on creating a rewarding experience that respects the player's intelligence and encourages strategic self-discovery.

#### Core Tenet: "Easy to Learn, Difficult to Master"
The game's surface-level mechanics should be simple and intuitive. The complexity should emerge from the interaction between systems. A new player should be able to understand their basic tools, but a veteran player should still be discovering new synergies and strategies after dozens of hours.

#### The Player's Learning Curve
Our balancing will be designed to facilitate a specific, three-stage learning journey for the player:

1.  **Stage 1: Surface-Level Understanding.** The player first learns the most obvious truths.
    *   *Example:* They see that `Physical` cards have higher damage numbers than `Verbal` cards and naturally conclude that a physical-focused strategy is "strongest." Our early-game balance will allow this strategy to be effective against weak opponents, validating the player's initial conclusion.

2.  **Stage 2: Encountering the "Wall".** The player progresses and encounters a challenge designed to specifically counter their initial, simple strategy.
    *   *Example:* They face an NPC with extremely high `Guarded` values. Their powerful `Physical` cards suddenly feel ineffective, dealing heavily reduced damage. This forces them to question their strategy and re-evaluate their tools.

3.  **Stage 3: The "Aha!" Moment & Deeper Understanding.** The player experiments and discovers the hidden strength of previously undervalued mechanics.
    *   *Example:* They realize that `Verbal` cards, despite their lower base damage, bypass the `Guarded` defense entirely. They learn that the "weaker" cards are actually the key to unlocking their more powerful ones. This moment of self-discovery, achieved without explicit tutorials, is the core reward of our design.

#### Key Balancing Principles

*   **Offense Over Defense:** Playing offensively should generally be more AP-efficient than playing defensively. This encourages proactive play and keeps the pace of encounters engaging. Defensive cards are tactical necessities, not a default strategy.
*   **No "Trap" Choices:** While some cards or strategies will be more situational than others, we will avoid creating "trap" unlocks or cards that are statistically always a bad choice. Every tool should have a viable niche or purpose.
*   **Synergy is the Goal:** The balance will focus on rewarding clever combinations of cards and systems. The true power should not come from a single overpowered card, but from making multiple, individually weaker cards work together to create an effect greater than the sum of their parts.
*   **Data-Driven Decisions:** All major balance changes will be informed by our "Dual-Profile" simulation framework and, eventually, by live player data. We will tune based on evidence, not just gut feeling.

This philosophy ensures that the difficulty in our game comes from the depth of its systems, not from unfair mechanics, and that the greatest reward is the player's own growing sense of mastery.

## [6.2] The Dual-Profile Simulation Framework

To ensure a balanced and satisfying difficulty curve, all major mechanical designs and tuning changes will be tested using a robust internal simulation framework. This data-driven approach allows for rapid iteration and balancing based on predictable player archetypes.

The framework is built on two distinct AI "player" profiles, designed to test the game's difficulty floor and skill ceiling.

#### Simulation Profiles

**Profile A: "The Tactician" (Average Player Model)**
*   **Concept:** This model represents a player who understands the game's basic rules but does not always play with perfect, long-term optimization. Their play is more reactive than proactive.
*   **Heuristics:**
    *   **Primary Goal:** Address immediate threats. Will use defensive cards if a telegraphed attack is significant.
    *   **Resource Use:** Will prioritize playing high-impact "Spender" cards as soon as they have the resources, without necessarily saving for a more optimal turn.
    *   **Offense:** Will tend to use the highest damage-per-AP card available in hand without always considering the long-term strategic benefit of targeting a specific `Guarded` weakness.
*   **Purpose:** This profile serves as our **difficulty floor baseline.** If the Tactician is winning too easily or losing too often (especially in the early game), it indicates a fundamental balance issue for the average player experience. The game must be winnable and feel fair for this profile.

**Profile B: "The Virtuoso" (Proficient Player Model)**
*   **Concept:** This model represents a skilled, experienced player who understands the game's deeper mechanics, plans ahead, and aims for efficient, optimal play.
*   **Heuristics:**
    *   **Primary Goal:** Solve the encounter's puzzle efficiently. Actively plays around telegraphed NPC actions.
    *   **Resource Use:** Will strategically hold resources for a multi-card combo turn if it provides a greater advantage than spending immediately.
    *   **Offense:** Understands and prioritizes targeting the most vulnerable defensive layer (e.g., using `Verbal` cards against `Inhibition`).
    *   **Synergy:** Recognizes and exploits card synergies (e.g., using a debuff before a major attack).
*   **Purpose:** This profile serves as our **skill ceiling baseline.** A high win rate for the Virtuoso indicates that mastery is possible and rewarding. The performance gap between the Tactician and the Virtuoso is a direct measure of the game's strategic depth and skill expression.

#### Simulation Parameters
*   **Batch Size:** All standard simulations will be run in batches of **100 runs per profile** to ensure a statistically relevant sample size. This may be increased for more complex, late-game encounters.
*   **Logic Adherence:** All simulations must strictly adhere to the established game rules (e.g., the "Shield -> Armor -> Body" damage flow) to be considered valid.
*   **Data Logging:** The results of all simulations, including all tracked Key Performance Indicators (KPIs), will be logged for historical analysis and to inform all balance discussions.

This dual-profile framework allows us to balance the game for both casual and hardcore players, ensuring it is both accessible at the start and deep enough to sustain long-term engagement.

## [6.3] Master List of Key Performance Indicators (KPIs)

This document serves as the central repository for all metrics tracked during simulation and, eventually, live player data analysis. These KPIs are essential for data-driven balancing and for understanding the player experience on a granular level.

#### 1. Top-Level Run & Encounter Metrics
*These KPIs measure the overall outcome and pacing.*

*   **`Player Win Rate`:** The percentage of encounters that end in victory. Our single most important measure of overall difficulty.
*   **`Average Turns to Win/Lose`:** Measures the length of encounters. Helps tune game pacing and ensure fights don't drag on.

#### 2. Player Survivability Metrics
*These KPIs measure player performance within a single encounter.*

*   **`Avg. Total Damage Taken (Player)`:** A single value combining all damage assigned to `Focus`, `Inhibition`, and `Composure`. A clear indicator of encounter difficulty.
*   **`Avg. Damage Mitigated by Focus (Player)`:** Measures the effectiveness and usage frequency of `Defensive` cards.
*   **`"Flawless Inhibition" Win Rate`:** The percentage of wins where the player's `Inhibition` bar was not broken. A key measure of player mastery.
*   **`"Comeback" Rate`:** The percentage of wins where the player's `Composure` dropped below a critical threshold (e.g., 25%) but they still won. Measures if the game feels "winnable from behind."

#### 3. NPC Threat Metrics
*These KPIs measure NPC effectiveness and pressure.*

*   **`Avg. Damage Mitigated by Focus (NPC)`:** Measures how effective an NPC's defensive abilities are.
*   **`NPC Ultimate Usage Rate`:** The percentage of encounters where an NPC successfully forces the player into the `Exposed` state and uses their unlocked ultimate ability at least once. This is a direct measure of an NPC's threat level.

#### 4. Economic & Resource Metrics
*These KPIs track the flow and usage of our unique `Tension` & `Arousal` systems.*

*   **`Time to First Spender`:** The average turn a player first plays a card that costs `Tension` or `Arousal`. Measures the pacing of the "ramp-up" phase.
*   **`Peak Resource Values`:** The average maximum `Tension` and `Arousal` a player accumulates. Helps balance the costs of our most expensive cards.
*   **`Resource Waste Analysis`:** The average amount of unspent resources at the end of an encounter. High values may indicate a lack of effective "Spender" cards in the player's current deck.

#### 5. Card & Strategy Choice Metrics
*These KPIs help us understand player behavior and balance the card pool.*

*   **`First Turn Play`:** The most frequently played card on Turn 1. Indicates perceived opening strength.
*   **`Card Reward Selection Rate`:** The pick rate of cards from post-encounter rewards. The single best metric for identifying over- and under-powered cards.
*   **`Skip Reward Frequency`:** Measures how often players decline a card reward. Indicates the overall quality of card offerings.
*   **`Verbal vs. Physical Play Ratio`:** Tracks the percentage of `Verbal` vs. `Physical` cards played. Helps analyze the viability of different strategic paths.
*   **`Modal Card Choice Ratio`:** For modal cards, tracks the percentage of time the "Generator" vs. "Spender" mode is chosen. Helps balance the two halves of a card.
*   **`Card Usage Rate`:** The frequency a card is played when drawn. Low rates can indicate a card is too niche, too expensive, or underpowered.

---

# [99] Design Archive

## [99.1] Archived Concepts

This document serves as a historical record of significant design concepts that were considered for Project Chimera but were ultimately replaced by different systems. The rationale for each decision is preserved here for context and to inform future design discussions. The most recent shifts to our core resource systems are noted first, with earlier archives following.

#### **Archived Concept: Dual-Resource `Tension + Arousal` Model**
*   **Date Archived:** Design summit 2024-05 realignment.
*   **Concept:** Encounters revolved around juggling two separate build/spend meters. `Tension` fueled verbal dominance and setup plays, while `Arousal` powered physical finishers.
*   **Rationale for Archiving:** Playtests reported unnecessary cognitive load and "analysis paralysis" when planning turns. The new **Single `Arousal` Meter** keeps the sense of momentum and investment while simplifying decision-making. Mental dominance is now expressed through keywords and debuffs instead of a bespoke resource.

#### **Archived Concept: "Social Engineering / Spy Noir" Model**
*   **Date Archived:** Session corresponding to LDD v2.0 creation.
*   **Concept:** The game's core premise was set in the physical world. Runs were framed as "heists" or "missions" (e.g., "Infiltrate a Corporate Gala"). Encounters were with real-world obstacles like security guards, rival agents, or corporate executives who were overcome via seduction and social maneuvering.
*   **Rationale for Archiving:** While a strong narrative concept, the **"VR Deception" model** was ultimately chosen for two key reasons:
    1.  **Stronger Roguelite Justification:** The VR simulation provides a cleaner and more direct in-universe explanation for core roguelite mechanics like run resets ("rebooting a simulation"), procedural generation ("randomized server blocks"), and why the player repeatedly faces a pool of NPCs.
    2.  **More Potent Thematic Core:** The psychological horror of discovering the NPCs are trapped human minds was deemed a more unique and powerful narrative hook than the more traditional spy thriller.

#### **Archived Concept: "Diegetic Menu / Clue-like" Interface**
*   **Date Archived:** Session corresponding to LDD v2.0 creation.
*   **Concept:** In place of a traditional node map, the player would navigate a run via a persistent, diegetic menu of "actions" available within a single location (e.g., at the Gala, actions were "Approach the Bar," "Mingle with VIPs," etc.).
*   **Rationale for Archiving:** While highly immersive, there were significant concerns that a purely static version of this menu would lack the procedural variety and replayability essential for a roguelite. A standard, procedurally generated **node map** (themed as a "Server Topology Chart") was chosen as a more robust and familiar system for ensuring run-to-run variety. The diegetic concept remains a potential inspiration for specific, self-contained "Event" nodes.

#### **Archived Concept: NPCs as Digital "ICE"**
*   **Date Archived:** Session corresponding to LDD v1.0 refinement.
*   **Concept:** The standard enemies in the VR world were proposed to be sentient security programs (Intrusion Countermeasures Electronics) with simulated personalities that had to be "seduced" to be bypassed.
*   **Rationale for Archiving:** Discarded due to a severe thematic and aesthetic disconnect. The act of using explicit, physical cards like `Caress Her Thigh` against an abstract piece of software named "Firewall" was determined to be immersion-breaking and detrimental to the game's core erotic appeal. The "Human-First" mandate was established instead.

#### **Archived Concept: Single `Essence` Pool (Health + Currency)**
*   **Date Archived:** Session corresponding to LDD v1.0 refinement.
*   **Concept:** The player's health (`Composure`) and their in-run currency were a single, shared resource pool. Taking damage would reduce the currency available for upgrades.
*   **Rationale for Archiving:** Deemed too confusing for players and created significant balancing challenges (e.g., risk of infinite health stacking and "death spiral" runs). Replaced by the much clearer two-pool system: `Composure` (Health) and `Raw Essence` (In-run Currency).

#### **Archived Concept: "Retain Hand" Card Flow**
*   **Date Archived:** Session corresponding to LDD v2.0 simulation phase.
*   **Concept:** The player would keep unplayed cards in their hand at the end of their turn.
*   **Rationale for Archiving:** While this model supports long-term planning, the **"Full Discard" model** was chosen to create a more dynamic, faster-paced tactical experience. It forces the player to solve the puzzle of their hand *each turn*, which better aligns with the *Slay the Spire* inspiration and prevents gameplay from stalling.

```
  }
}
```