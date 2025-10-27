---
layout: page
title: Heroes Divided
description: Getting rid of an adventure party one hero at a time; a 24-hour game jam project
img: assets/img/heroes-divided-cover.webp
importance: 1
category: unity
related_publications: false
---

**Heroes Divided** was a 24-hour game jam project created in Unity during the *BIT Festival Wroclaw 2023* for which my 4-person team won the 1st place. Inspired by games like *Dungeon Keeper* and *Dungeons*, the game puts the player in the role of a dungeon master who must prevent a group of adventurers from completing their quest by strategically using lures and monsters to eliminate the party they reach the treasure room.

{% include figure.liquid path="assets/img/heroes-divided-gameplay.webp" class="img-fluid" %}

<div class="caption">
    The player chooses a card from their hand *(bottom center)* and uses it to lure or attack the heroes *(top center)* as they navigate the dungeon towards the treasure room *(top right)*
</div>

Each hero has its own weakness, strength and item of interest that the player can exploit to their advantage. While in group, the heroes cover each other's weaknesses, but once separated, they become vulnerable to the dungeon master's attacks. The loop therefore revolves around luring heroes away from their party members and into deadly situations.

I took the role of lead programmer in the project and was responsible for implementing:

- A* pathfinding for heroes navigating the dungeon
- ScriptableObject-based architecture for defining hero types and their attributes
- Selection mechanism for choosing cards representing traps and monsters and using them on the map

[Tiny Dungeon](https://kenney.nl/assets/tiny-dungeon) asset pack by the amazing [Kenney](https://kenney.nl/) was used for the game's visuals.

