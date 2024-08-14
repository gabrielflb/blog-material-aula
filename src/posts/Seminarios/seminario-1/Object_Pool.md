---
icon: edit
date: 2024-07-25 20:10:00.00 -3
tag:
  - 'Object Pool'
  - gof
category:
  - seminario-1
order: 10
excerpt: Apresentação do Padrão de Projeto Object Pool
author: JoaoAugustoMPdJ, SalvadorCerqueiraJr
---

# Object Pool

## João Augusto Moura Peixoto de Jesus (20211TADSSAJ0004)
[@JoaoAugustoMPdJ](https://github.com/JoaoAugustoMPdJ)

<!-- @include: ../../../includes/seminario-1-JoaoAugustoMPdJ/README.md -->


## Salvador Cerqueira Júnior (20212TADSSAJ0020)
[@SalvadorCerqueiraJr](https://github.com/SalvadorCerqueiraJr)

<!-- @include: ../../../includes/seminario-1-SalvadorCerqueiraJr/README.md -->

## Gabriel Ferreira Lima Brito

```mermaid
---
---
title: Object Pool
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
    }

    class BookPool {
        -List<Book> availableBooks
        -List<Book> inUseBooks
        +BookPool(int poolSize)
        +Book acquireBook()
        +void releaseBook(Book book)
    }

    BookPool "1" --> "*" Book : manages




```
