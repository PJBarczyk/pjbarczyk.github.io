---
layout: page
title: VR Excergame
description: Gamified limber excercises in virtual reality.
img: assets/img/zpi-cover.webp
importance: 1
category: unity
related_publications: false
---

Instead of a regular thesis, the *Applied Computer Science* program at Wrocław University of Science and Technology carries out a **ZPI (pl. Zespołowe Przedsięwzięcie Inżynierskie)**, which is a team-based engineering project. I took a leading role in a 4-person team and over the course of a semester we created an **VR excergame** focused on whole-body workout and stretching exercises. The game was built in Unity and designed to be played using a regular OpenXR-compatible VR headset with two hand controllers.

The fundamental idea behind the project was to score players on the precision the excercises are done, as well as to provide real-time feedback on their posture and movement. Because of the limited tracking capabilities of regular VR headsets, we limited the excercises to upper body movement; the set was curated with help from a physiotherapist to ensure the exercises are safe and effective. The gamification elements include an *attack-and-defend* mechanic where players must perform excercises to charge their attacks and defend against incoming enemies.

{% include figure.liquid path="assets/img/zpi-excercise.webp" class="img-fluid" %}

<div class="caption">
    The player receives visual feedback on their posture while performing a stretching excercise via an avatar mirror
</div>

Core features I was responsible for implementing include:

- Tooling for capturing user motion and processing them to extract target movement patterns
- A unified hierarchal interaction system which encompassed everything from scene navigation, dueling phases, to performing individual excercises
- Multimodal feedback system providing visual, audio and haptic feedback to the player based on their performance
- ScriptableObject-based architecture for defining excercises, enemies and game levels

{% include figure.liquid path="assets/img/zpi-defense.webp" class="img-fluid" %}

<div class="caption">
    After completing an excercise, the player must perform a gesture to cast a defensive or offensive spell
</div>

{% include figure.liquid path="assets/img/zpi-tooling.webp" class="img-fluid" %}

<div class="caption">
    Inside Unity Editor, the developer can define multi-step excercises using a visual spline-based tool
</div>