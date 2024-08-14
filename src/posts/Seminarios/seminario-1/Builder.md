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

## Gabriel Lima

```mermaid
---
---
title: Builder
---
classDiagram
    class Mirror {
        +String frameMaterial
        +String glassType
        +void setFrameMaterial(String material)
        +void setGlassType(String type)
        +String getFrameMaterial()
        +String getGlassType()
    }
    class GlassDoor {
        +String frameMaterial
        +String glassType
        +String handleType
        +void setFrameMaterial(String material)
        +void setGlassType(String type)
        +void setHandleType(String type)
        +String getFrameMaterial()
        +String getGlassType()
        +String getHandleType()
    }
    class Builder {
        <<interface>>
        +void buildFrameMaterial(String material)
        +void buildGlassType(String type)
        +void buildHandleType(String type)
        +Mirror getMirror()
        +GlassDoor getGlassDoor()
    }
    class MirrorBuilder {
        +void buildFrameMaterial(String material)
        +void buildGlassType(String type)
        +Mirror getMirror()
    }
    class GlassDoorBuilder {
        +void buildFrameMaterial(String material)
        +void buildGlassType(String type)
        +void buildHandleType(String type)
        +GlassDoor getGlassDoor()
    }
    class Director {
        +void constructMirror(Builder builder, String frameMaterial, String glassType)
        +void constructGlassDoor(Builder builder, String frameMaterial, String glassType, String handleType)
    }
    Mirror <|.. MirrorBuilder
    GlassDoor <|.. GlassDoorBuilder
    Builder <|.. MirrorBuilder
    Builder <|.. GlassDoorBuilder
    Director --> Builder : uses
```
