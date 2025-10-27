---
layout: page
title: CapiJournal
description: AI-powered conversational journal with voice-only interface
img: assets/img/default-cover.webp
importance: 1
category: dotnet
related_publications: false
---

A project during *Natural User Interfaces* course at Wrocław University of Science and Technology. Tasked with creating an application that utilizes technologies enabling natural user interaction, I led a 3-person team to develop **CapiJournal**, an AI-powered conversational journal users access via voice commands.

The application was created using .NET and Semantic Kernel without any graphical user interface, relying solely on voice input and output. The features and integrations included:

- LLMs for natural language understanding, generation and summarization of journal entries
- [Piper TTS](https://github.com/OHF-Voice/piper1-gpl)-based text-to-speech
- Whisper ASR for speech-to-text conversion
- [Rustpotter](https://github.com/GiviMAD/rustpotter)-based wake word detection
- Automatic user recognition using speaker embeddings enabling multi-user support in a household
- [Qdrant](https://qdrant.tech/) vector database for storing and retrieving journal entries based on semantic similarity
- Persistance of user preferences voiced during conversations
- Voice activity detection via [Silero VAD](https://github.com/snakers4/silero-vad)

Custom integrations were provided via REST APIs made in [FastAPI](https://fastapi.tiangolo.com/) or subprocess calls.