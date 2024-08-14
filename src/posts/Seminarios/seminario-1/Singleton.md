---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - Singleton
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Singleton
author: GuiSamp, RiansFonseca
---

# Singleton
## Gabriel Ferreira Lima Brito

```mermaid
---
---
title: Exemplo Singleton
---
classDiagram
    class Singleton {
        -static final Singleton instance
        -Singleton()
        +static Singleton getInstance()
        +void showMessage()
    }

```

