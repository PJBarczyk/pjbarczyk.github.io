---
layout: page
title: CapiLink
description: Remote control IoT system
img: assets/img/default-cover.webp
importance: 1
category: dotnet
related_publications: false
---

**CapiLink** is a series of projects started in 2022 during *Internet of Things Basics* course at Wrocław University of Science and Technology. Working in a team of two, we developed a remote control IoT system based on idea:

> Enable users to control designated actuators remotely via a wall-mounted access point and a simple 4-button interface; each actuator selectable via a paired RFID tag.

The hardware provided to us during class consisted of **Arduino Uno** microcontroller for the actuator device and **Raspberry Pi 4** for the access point device.

## Python-based first iteration

The first iteration of the project was implemented used the following technologies:

- **Django** backend with **PostgreSQL** database and **Celery** workers for handling device events; handled both device communication and web application requests
- **Vue.js** frontend for managing devices and pairing tags
- **Arduino Uno** microcontroller for the actuator device
- **Raspberry Pi 4** for the access point device
- **MQTT** protocol for communication between devices and backend

Communication over MQTT was secured using symmetrical encryption with pre-shared keys. Domain state such as temporary bindings between devices or paired tags was stored in **PostgreSQL** database and was queried by the backend when handling device events. The project fullfilled the basic requirements, yet had some limitations, such as:

- Low throughput resulting from accessing the database for each device event
- Large overhead of the Celery tasks for each event

The project was deployed on a local **K8s** cluster using **ArgoCD** for GitOps-based deployment.

{% include figure.liquid path="assets/img/capilink-python-arch.jpg" class="img-fluid" %}

<div class="caption">
    K8s architecture of the first iteration of CapiLink system
</div>

## .NET and Orleans rewrite

In the following semester, as a part of *Distributed Information Systems* course, we decided to reimplement the project using new technologies and trying to address the limitations of the first iteration. The introduced or altered technologies included:

- **.NET 6** for the backend with **Blazor** frontend
- **Microsoft Orleans** actor-based framework for the backend, allowing us to model each device as an individual actor, significantly reducing the overhead of handling device events
- **ESP32** microcontrollers for both actuator and access point devices
- **MQTT** protocol for communication between devices and backend, with **mTLS** for securing the communication channels via device-issued x509 certificates
- User authentication and authorization delegated to **Authentik**, utilizing **OpenID Connect** protocol

Some architectural and design changes were also introduced:

- Splitting the device state into *operational* and *descriptive* state; operational state (e.g. current bindings) were stored as actor state which allowed for faster access, while descriptive state (e.g. device metadata) was stored in a relational database enabling complex queries.
- Implementing a web-based version of the access point interface using **Blazor WebAssembly**, allowing easier access on various devices without the need for dedicated hardware.
- Creation of device gateways as separate services responsible for handling communication with devices over MQTT, allowing better separation of concerns and easier scaling of the system.

This version was deployed on a local infrastructure using **Docker Compose** for orchestration. In-memory storage of actor state of actively used devices increased the throughput of the system by two orders of magnitude compared to the first iteration, from ~8 events/sec to thousands of events/sec.

***

This iteration also included deployment in **AWS** as a part of cloud-related coursework; the most notable services used were:

- **AWS Fargate** for hosting the Orleans cluster, device gateways and Blazor application
- **AWS IoT Core** for managing devices and handling MQTT communication
- **AWS SQS** for queuing device events to be processed by the device gateway services
- **AWS Lambda** implementing a custom authorizer for validating device connections to IoT Core in environments where mTLS is not available (e.g. web-based access point interface)

{% include figure.liquid path="assets/img/capilink-aws-arch.webp" class="img-fluid" %}

<div class="caption">
    AWS architecture of the .NET and Orleans-based CapiLink system
</div>

## Microservice-based redesign

The final iteration of the project was carried out during *Information Systems Integration* course, which focused on microservices, message middleware and third-party integrations. The project was redesigned to fit a microservices architecture, splitting the monolithic Orleans application into smaller services communicating via **RabbitMQ** message broker. Other notable changes included:

- Using **Discord** as an interface for recieving notifications and managing the system via a custom bot
- Implementing **database per service** pattern, using either **PostgreSQL** or **Redis** for storing either descriptive or operational state, depending on the service needs
- Designing the system in a modular way, allowing for running a slim set of services for basic functionality, with optional services providing additional features, e.g.:
    - Only running the core services (device management, binding and actuator control) for basic functionality
    - Adding the discord bot service for Discord-based control and notifications
    - Adding a learn mode service for easy pairing of tags to devices via access points    
- Issuing device x509 certificates using **HashiCorp Vault** PKI secrets engine instead of .NET standard library
- Connecting the devices to the broker using **RabbitMQ MQTT plugin**, removing the need for separate device gateway services
- GraphQL API implemented over AMQP for inter-service queries

{% include figure.liquid path="assets/img/capilink-micro-arch.webp" class="img-fluid" %}

<div class="caption">
    C4 container diagram of the microservice-based CapiLink system
</div>