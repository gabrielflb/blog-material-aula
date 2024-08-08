---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - builder
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Builder
author: gabrielflb, LuisMiguelADS, YuriPepezin
---
# Builder

## Gabriel Ferreira Lima Brito (20212TADSSAJ0015)

[@gabrielflb](https://github.com/gabrielflb)

<!-- @include: ../../../includes/seminario-1-gabrielflb/README.md -->

## Luis Miguel de Jesus Oliveira (20211TADSSAJ0005)

[@LuisMiguelADS](https://github.com/LuisMiguelADS)

<!-- @include: ../../../includes/seminario-1-LuisMiguelADS/README.md -->

## Yuri Pêpe do Espírito Santo (20221TADSSAJ0005)

[@YuriPepezin](https://github.com/YuriPepezin)

<!-- @include: ../../../includes/seminario-1-YuriPepezin/ApYuri.md -->

## Leandro

<figure>

```plantuml

<!-- @include: ../../../includes/Leandro/builder/build.plantuml -->

```

<figcaption> Exemplo de builder</figcaption>
</figure>

# João Augusto

<figure>

```plantuml

@startuml
interface Pizza {
    + getMassa() : String
    + getMolho() : String
    + getRecheio() : String
}

interface PizzaBuilder {
    + setMassa(String massa) : void
    + setMolho(String molho) : void
    + setRecheio(String recheio) : void
    + build() : Pizza
}

class PizzaSimplesBuilder implements PizzaBuilder {
    - String massa
    - String molho
    - String recheio
    
    + setMassa(String massa) : void
    + setMolho(String molho) : void
    + setRecheio(String recheio) : void
    + build() : Pizza
}

class PizzaGourmetBuilder implements PizzaBuilder {
    - String massa
    - String molho
    - String recheio
    
    + setMassa(String massa) : void
    + setMolho(String molho) : void
    + setRecheio(String recheio) : void
    + build() : Pizza
}

interface PizzaDirector {
    + setBuilder(PizzaBuilder builder) : void
    + construirPizza() : Pizza
}

class PizzaMargheritaDirector implements PizzaDirector {
    - PizzaBuilder builder
    + setBuilder(PizzaBuilder builder) : void
    + construirPizza() : Pizza
}

class PizzaPepperoniDirector implements PizzaDirector {
    - PizzaBuilder builder
    + setBuilder(PizzaBuilder builder) : void
    + construirPizza() : Pizza
}

PizzaBuilder <|-- PizzaSimplesBuilder
PizzaBuilder <|-- PizzaGourmetBuilder
PizzaDirector <|-- PizzaMargheritaDirector
PizzaDirector <|-- PizzaPepperoniDirector
PizzaDirector --> PizzaBuilder : setBuilder(builder)
PizzaDirector --> Pizza : construirPizza()
PizzaBuilder --> Pizza : build()
@enduml


```
<figcaption> Exemplo de builder </figcaption>
</figure>
