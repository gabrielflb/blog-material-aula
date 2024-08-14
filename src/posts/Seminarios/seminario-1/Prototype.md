---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - Prototype
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Prototype
author: GabrielMreira, Redror
---

# Prototype

## Gabriel Moreira Bispo Santos (20221TADSSAJ0020)
[@GabrielMreira](https://github.com/GabrielMreira)

<!-- @include: ../../../includes/seminario-1-GabrielMreira/README.md -->


## Pedro Carlos de Gois Barros Santos (20221TADSSAJ0006)
[@Redror](https://github.com/Redror)

<!-- @include: ../../../includes/seminario-1-Redror/README.md -->
## Gabriel Lima
```mermaid
---
---
title: Prototype
---
classDiagram
    class Book {
        -String title
        -String author
        -int pages
        +Book(String title, String author, int pages)
        +void setTitle(String title)
        +void setAuthor(String author)
        +void setPages(int pages)
        +String getTitle()
        +String getAuthor()
        +int getPages()
        +Book clone()
    }

    Book <|-- FictionBook
    FictionBook : +String genre
    FictionBook : +void setGenre(String genre)
    FictionBook : +String getGenre()
    FictionBook : +FictionBook clone()

```
