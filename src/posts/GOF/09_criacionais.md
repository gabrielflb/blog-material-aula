---
icon: edit
date: 2024-07-18 20:00:00.00 -3
tag:
  - GOF
category:
  - aula
#navbar: false
order: 9
---

# Padrões de projeto criacionais

[^GAMMA]

Os padrões de criação abstraem o processo de instanciação. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados.

Um padrão de criação de classe usa a herança para variar a classe que é instanciada, enquanto que um um padrão de criação de objeto delegará a instanciação para outro objeto.

Os padrões de criação se tornam importantes à medida que os sistemas evoluem no sentido de depender mais da composição de objetos do que da herança de classes.

Quando isso acontece, a ênfase se desloca da codificação rígida de um conjunto fixo de comportamentos para a definição de um conjunto menor de comportamentos fundamentais, os quais podem ser compostos em qualquer número para definir comportamentos mais complexos. Assim, criar objetos com comportamentos particulares exige mais do que simplesmente instanciar uma classe.

Há dois temas recorrentes nesses padrões. Primeiro, todos encapsulam conhecimento sobre quais classes concretas são usadas pelo sistema. Segundo, ocultam o modo como as instâncias destas classes são criadas e compostas. Tudo o que o sistema sabe no geral sobre os objetos é que suas classes são definidas por classes abstratas.

Consequentemente, os padrões de criação dão muita flexibilidade ao que, como e quando é criado e a quem cria. Eles permitem configurar um sistema com “objetos-produto” que variam amplamente em estrutura e funcionalidade. A configuração pode ser estática (isto é, especificada em tempo de compilação) ou dinâmica (em tempo de execução).


Algumas vezes, os padrões de criação competem entre si. Por exemplo, há casos em que tanto [Prototype](Prototype.md) como [Abstract Factory](Abstract_Factory.md) podem ser usados proveitosamente. Em outras ocasiões, eles são complementares: [Builder](Builder.md) pode usar um dos outros padrões para implementar quais componentes são construídos. [Prototype](Prototype.md) pode usar [Singleton](Singleton.md) na sua implementação.

- **[Factory Method](Factory_Method.md)** Encapsular a escolha da classe concreta a ser utilizada na criação de objetos de um determinado tipo.
- **[Abstract Factory](Abstract_Factory.md)** Encapsular a escolha das classes concretas a serem utilizadas na criação dos objetos de diversas famílias.
- **[Builder](Builder.md)** Separar o processo de construção de um objeto de sua representação e permitir a sua criação passo-a-passo. Diferentes tipos de objetos podem ser criados com implementações distintas de cada passo.
- **[Prototype](Prototype.md)** Possibilitar a criação de novos objetos a partir da cópia de objetos existentes.
- **[Singleton](Singleton.md)** Permitir a criação de uma única instância de uma classe e fornecer um modo para recuperá-la.
- **[Multiton](Multiton.md)** Permitir a criação de uma quantidade limitada de instâncias de determinada classe e fornecer um modo para recuperá-las.[^K19]
- **[Object Pool](Object_Pool.md)** Possibilitar o reaproveitamento de objetos[^K19]


## Entrega

[Link](https://classroom.github.com/a/rIyLB1fD)

|aluno|padrão|
|--|--|
|Factory Method|<ul><li>Árlei Nóbrega Oliveira</li><li>JOSÉ VICTOR OLIVEIRA DOS SANTOS</li><li>WALLACE SELES NEVES</li></ul>|
|Abstract Factory|<ul><li>Brenda Gabriela Martinez Araújo </li><li>LUCAS FERREIRA DOS SANTOS</li></ul>|
|Builder|<ul><li>GABRIEL FERREIRA LIMA BRITO </li><li>LUIS MIGUEL DE JESUS OLIVEIRA</li><li>Yuri Pêpe do Espírito Santo</li></ul>|
|Prototype| <ul><li>GABRIEL MOREIRA BISPO SANTOS</li><li>Pedro Carlos de Gois Barros Santos</li></ul>|
|<ul><li>Singleton</li><li>Multiton</li></ul>|<ul><li>Guilherme Sampaio Oliveira</li><li>Rian Silva da Fonseca</li></ul>|
|Object Pool|<ul><li>JOÃO AUGUSTO MOURA PEIXOTO DE JESUS</li><li>SALVADOR CERQUEIRA JÚNIOR</li></ul>|

## Referências

<!-- @include: ../../includes/bib.md -->