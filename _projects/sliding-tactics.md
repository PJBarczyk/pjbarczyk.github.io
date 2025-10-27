---
layout: page
title: Sliding Tactics
description: Isometric shooter with smart-ish enemies and terrain manipulation
img: assets/img/sliding-tactics-cover.webp
importance: 1
category: unity
related_publications: false
---

**Sliding Tactics** is one of a mini-projects I created during *Individual Course of Study* of *Video Game Programming* course at Wrocław University of Science and Technology. The game is a isometric spellcasting shooter with smart-ish enemies and terrain the player can manipulate to their advantage.

{% include figure.liquid path="assets/img/sliding-tactics-casting.webp" class="img-fluid" %}

<div class="caption">
    Covers can be used by both player and enemies to avoid incoming fire while trying to get a good angle to attack from
</div>

The main gimmick of the game is a custom stack-based AI system controlling the enemies and crowd mechanics. Each enemy has a stack of actions they will perform one after another, such as:

- Moving behind a cover
- Casting a spell at the player
- Hunkering down to avoid incoming fire
- Getting dizzy from the terrain shifting

The last action being a result of the player's ability to freeze time and slide tiles of the terrain around them, simmilar to a sliding puzzle. This allows the player to avoid enemy fire, get behind enemies or put them in front of their allies' attacks. Other worth mentioning features include:

- Async-first approach to the game loop using the then-new [Awaitables](https://docs.unity3d.com/ScriptReference/Awaitable.html)
- Custom 3D models, rigs and animations created in Blender
- Anti crowding mechanics where enemies will try to avoid clustering together to get better line of sight to the player

{% include figure.liquid path="assets/img/sliding-tactics-tiles.webp" class="img-fluid" %}

<div class="caption">
    Player can freeze time at will and slide terrain tiles around to manipulate their and enemy positions
</div>