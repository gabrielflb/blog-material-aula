---
icon: edit
date: 2024-03-27 22:00:00.00 -3
tag:
  - solid
category:
  - aula
order: 3
---

# Princípio da Inversão de Dependência (DIP)

Adaptado de [^JoaoRobertoSOLID].

SOLID são cinco princípios da programação orientada a objetos que facilitam no desenvolvimento de softwares, tornando-os fáceis de manter e estender. Esses princípios podem ser aplicados a qualquer linguagem de Programação Orientada a Objetos.

Michael Feathers criou esse  acrônimo após observar cinco princípios da orientação a objetos e design de código criados por Robert C. Martin (a.k.a. Uncle Bob) e abordados no artigo The Principles of OOD


S.O.L.I.D: Os 5 princípios da POO
1. S — Single Responsiblity Principle (Princípio da responsabilidade única)
1. O — Open-Closed Principle (Princípio Aberto-Fechado)
1. L — Liskov Substitution Principle (Princípio da substituição de Liskov)
1. I — Interface Segregation Principle (Princípio da Segregação da Interface)
1. D — Dependency Inversion Principle (Princípio da inversão da dependência)

Esses princípios ajudam o programador a escrever códigos mais limpos, separando responsabilidades, diminuindo acoplamentos, facilitando na refatoração e estimulando o reaproveitamento do código.



## Princípio da Inversão de Dependência (DIP)

[^MACORATTI_DIP]

::: tip Definição

- Dependa de abstrações e não de implementações
- Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações
- Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações

:::

que, basicamente significam *Programe para uma interface/classe abstrata e não para uma classe concreta*.



A dependência em tempo de compilação da maioria dos aplicativos flui na direção da execução do runtime, o que resulta em um gráfico de dependência direta. Por exemplo, se um módulo A chama uma função/método no módulo B, que por sua vez chama uma função/método no módulo C, então em tempo de compilação, A dependerá de B, que dependerá de C, criando uma cadeia de dependência como mostrado abaixo:

<figure>

```plantuml
package "Tempo de compilação" {
    class ClassA
    class ClassB 
    class ClassC 
    ClassA ..>  ClassB :"  Referência"   
    ClassB ..> ClassC :"  Referência"    
    

}

package "Tempo de execução" {
    class ClassA 
    class ClassB 
    class ClassC 
    ClassA ..>  ClassB :"  Controle de Fluxo"   
    ClassB ..> ClassC :"  Controle de Fluxo" 
}

```

<figcaption>Dependência direta</figcaption>
</figure>

A aplicação do princípio de inversão de dependência permite que a `ClasseA` chame métodos em uma abstração implementada por `ClasseB`, possibilitando que `ClasseA` chame `ClasseB` em tempo de execução, mas que `ClasseB` dependa de uma interface controlada por `ClasseA` em tempo de compilação (invertendo assim a dependência em tempo de compilação).

Em tempo de execução, o fluxo de execução do programa permanece inalterado, mas a introdução de interfaces significa que diferentes implementações dessas interfaces podem ser facilmente conectadas.

Sem Inversão da Dependência
@[code](./code/solid/ServicoV1.java)

Com Inversão da Dependência
@[code](./code/solid/ServicoV2.java)

<figure>

```plantuml

package "Tempo de compilação" {
    class ClassA
    class ClassB 
    interface InterfaceB
    class ClassC 
    interface InterfaceC
    ClassA ..  InterfaceB :"  Referência"   
    InterfaceB <|. ClassB
    InterfaceC <|. ClassC
    InterfaceB -[hidden]- InterfaceC
    ClassB ..  InterfaceC :"  Referência"   

}

package "Tempo de execução" {
    class ClassA 
    class ClassB 
    class ClassC 
    ClassA -->  ClassB :"  Controle de Fluxo"   
    ClassB --> ClassC :"  Controle de Fluxo" 
}
```

<figcaption>Inversão da Dependência</figcaption>
</figure>


Assim a inversão de dependência é uma parte essencial da construção de aplicativos fracamente acoplados, pois os detalhes da implementação podem ser escritos para depender e implementar abstrações de nível superior, e não o contrário.

Os aplicativos resultantes são mais testáveis, modulares e sustentáveis como resultado.

Os principais motivos para programar para uma interface/classe abstrata são:

- *Facilidade de manter o código*  - As alterações ficam mais isoladas, não precisa mudar tudo que aceitava uma classe concreta para aceitar outra necessária. È possível mudar a implementação sem quebrar a aplicação.
- *Fica fácil estender o código* - Permite que novas implementações sejam feitas sem alterar tudo que esperava determinado objeto; certos comportamentos se tornam mais genéricos podendo manipular objetos que ele desconhece desde que contenha o contrato esperado;
- *Fica mais fácil realizar testes* - É fácil substituir um objeto real de produção por um falso que facilite o teste;

Além disso interfaces facilitam a redução do acoplamento do código e ajudam a encapsular o código.


### Como podemos obter a inversão da dependência?

Uma das formas de obter a inversão da dependência e usar o padrão de projeto da injeção da dependência. Dessa forma injetamos a dependência para obter a inversão da dependência.

Como exemplo temos Jakarta Contexts and Dependency Injection (CDI) que é um framework para injeção de dependência em Java. Ele fornece um conjunto de anotações e uma infraestrutura para criar e gerenciar objetos de maneira mais fácil e flexível. O CDI é parte da especificação Jakarta EE.

Outras opções são de CDI em java são:

- *Spring Framework*: é uma das alternativas mais populares ao CDI, oferecendo injeção de dependência, controle transacional, gerenciamento de segurança, entre outras funcionalidades. O Spring possui uma comunidade grande e ativa, além de uma ampla documentação.
- *Google Guice*: é um framework de injeção de dependência leve e fácil de usar, que utiliza anotações para definir as dependências entre classes. O Guice foi criado pela Google e é usado em alguns projetos internos da empresa.
- *PicoContainer*: é um framework de injeção de dependência que oferece uma solução simples e eficiente para gerenciamento de objetos. O PicoContainer é leve e fácil de usar, e permite a criação de aplicativos modulares e escaláveis.

## Referências

<!-- @include: ../bib/bib.md -->