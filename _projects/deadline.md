---
layout: page
title: Deadline
description: Asymmetric VR multiplayer game about exploring dungeons and missing deadlines
img: assets/img/deadline-cover.webp
importance: 1
category: unity
related_publications: false
---

A two-person project created in Unity during a *Video Game Programming* course; **Deadline** is an asymmetric multiplayer VR game set in a satirical fantasy world inspired by games like **Dungeon Keeper** and **Dungeons**. The game puts one player in the role of a white collar demonic worker who's tasked with designing and building dungeon layouts the second player, a daring adventurer, must navigate through to reach the treasure.

Ordinarily, the heroes explore an alredy built dungeon, but in **Deadline**, the layout is constructed in real-time by demon-player who in-lore *has missed their deadline* and must quickly build a dungeon to delay the hero long enough to avoid getting fired.

{% include figure.liquid path="assets/img/deadline-concept-art.webp" class="img-fluid" %}

The adventurer gameplay is simmilar to hack-and-slash dungeon crawlers and features progression by upgrading weapons and equipment. While not in a trap-filled corridor, the adventurer can visit shop and collect money through a shooting gallery minigame.

{% include figure.liquid path="assets/img/deadline-store.webp" class="img-fluid" %}

<div class="caption">
    The hero has various stats that can be modified by changing equipment in the store between chambers
</div>

At the same time, the demon player must quickly build the dungeon layout using modular pieces while placing traps and enemies, while respecting certain constraints such as ensuring the dungeon is solvable. 

Outside of regular enemies which fire arrows or madly dash with an axe, to fit the game's lighthearted tone, a special enemy type was designed: the *Skeleton Thief*, a harmless grunt that instead of attacking the hero, grabs items needed to complete the dungeon and runs away with them, forcing the hero to chase them down and retrieve the stolen goods.

{% include figure.liquid path="assets/img/deadline-building.webp" class="img-fluid" %}

<div class="caption">
    The level is grid-based and features two layers; the player first defines the floor plan via the blue tiles, then places traps, enemies, loot and other interactable objects on top
</div>

Traversing the dungeon places both players in the same space: the demon can observe the hero navigating the dungeon in real-time and interact with the previously placed traps and enemies to hinder their progress.

{% include figure.liquid path="assets/img/deadline-gameplay.webp" class="img-fluid" %}


<div class="caption">
    Each trap or defeated enemy displays a physical button that can be pressed at the precise moment to maximize its effectiveness against the hero
</div>