---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - 'Abstract Factory'
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Abstract Factory
author: Brenda-Martinez
---
# Abstract Factory


## Brenda Gabriela Martinez Araújo (20221TADSSAJ0001) 

[@Brenda-Martinez](https://github.com/Brenda-Martinez)

<!-- @include: ../../../includes/seminario-1-Brenda-Martinez/README.md -->





## João Augusto

<figure>
  
```plantuml

@startuml
interface Personagem {
    +descricao(): String
}

interface Equipamento {
    +usar(): void
}

interface RPGFactory {
    +criarPersonagem(): Personagem
    +criarEquipamento(): Equipamento
}

class Cavaleiro implements Personagem {
    +descricao(): String
}

class Espada implements Equipamento {
    +usar(): void
}

class Mago implements Personagem {
    +descricao(): String
}

class Cajado implements Equipamento {
    +usar(): void
}

class CavaleiroFactory implements RPGFactory {
    +criarPersonagem(): Personagem
    +criarEquipamento(): Equipamento
}

class MagoFactory implements RPGFactory {
    +criarPersonagem(): Personagem
    +criarEquipamento(): Equipamento
}

RPGFactory <|-- CavaleiroFactory
RPGFactory <|-- MagoFactory
CavaleiroFactory --> Cavaleiro : cria >
CavaleiroFactory --> Espada : cria >
MagoFactory --> Mago : cria >
MagoFactory --> Cajado : cria >
@enduml

```
</figure>

## Gabriel Lima
```mermaid
---
---
title: Abstract Factory
---
classDiagram
    class Button {
        <<interface>>
        +void render()
    }

    class WindowsButton {
        +void render()
    }

    class MacButton {
        +void render()
    }

    class Checkbox {
        <<interface>>
        +void render()
    }

    class WindowsCheckbox {
        +void render()
    }

    class MacCheckbox {
        +void render()
    }

    class GUIFactory {
        <<interface>>
        +Button createButton()
        +Checkbox createCheckbox()
    }

    class WindowsFactory {
        +Button createButton()
        +Checkbox createCheckbox()
    }

    class MacFactory {
        +Button createButton()
        +Checkbox createCheckbox()
    }

    Button <|.. WindowsButton
    Button <|.. MacButton
    Checkbox <|.. WindowsCheckbox
    Checkbox <|.. MacCheckbox
    GUIFactory <|.. WindowsFactory
    GUIFactory <|.. MacFactory
    WindowsFactory --> WindowsButton : creates
    WindowsFactory --> WindowsCheckbox : creates
    MacFactory --> MacButton : creates
    MacFactory --> MacCheckbox : creates


```
