---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - 'Factory Method'
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Factory Method
author: Arlei10, zevictoros
---
# Factory Method

## Árlei Nóbrega Oliveira (20221TADSSAJ0012)

[@Arlei10](https://github.com/Arlei10)

<!-- @include: ../../../includes/seminario-1-Arlei10/README.md -->

## José Victor Oliveira dos Santos (20212TADSSAJ0008)

[@zevictoros](https://github.com/zevictoros)

<!-- @include: ../../../includes/seminario-1-zevictoros/README.md -->

## WALLACE SELES NEVES


## Leandro

@[code](../../../includes/Leandro/factory_method/Recepcionista.java)

## João Augusto

<figure>

```plantuml

@startuml
interface Relatorio {
    +generate(): void
}

class RelatorioEmPDF implements Relatorio {
    +generate(): void
}

class RelatorioEmExcel implements Relatorio {
    +generate(): void
}

abstract class RelatorioFactory {
    +createRelatorio(): Relatorio
}

class PDFRelatorioFactory extends RelatorioFactory {
    +createRelatorio(): Relatorio
}

class ExcelRelatorioFactory extends RelatorioFactory {
    +createRelatorio(): Relatorio
}

Relatorio <|-- RelatorioEmPDF
Relatorio <|-- RelatorioEmExcel
RelatorioFactory <|-- PDFRelatorioFactory
RelatorioFactory <|-- ExcelRelatorioFactory
RelatorioFactory --> Relatorio : createRelatorio()
PDFRelatorioFactory --> RelatorioEmPDF : creates >
ExcelRelatorioFactory --> RelatorioEmExcel : creates >
@enduml


```

</figure>

## Gabriel Lima
```mermaid
---
---
title: Pessoa e Telefone 
---
classDiagram
    class Book {
        <<abstract>>
        +String title
        +String author
        +int pages
        +void setTitle(String title)
        +void setAuthor(String author)
        +void setPages(int pages)
        +String getTitle()
        +String getAuthor()
        +int getPages()
    }

    class FictionBook {
        +FictionBook()
        +String genre
        +void setGenre(String genre)
        +String getGenre()
    }

    class ScienceBook {
        +ScienceBook()
        +String field
        +void setField(String field)
        +String getField()
    }

    class BookFactory {
        <<interface>>
        +Book createBook()
    }

    class FictionBookFactory {
        +Book createBook()
    }

    class ScienceBookFactory {
        +Book createBook()
    }

    Book <|-- FictionBook
    Book <|-- ScienceBook
    BookFactory <|.. FictionBookFactory
    BookFactory <|.. ScienceBookFactory
    FictionBookFactory --> FictionBook : creates
    ScienceBookFactory --> ScienceBook : creates



```
