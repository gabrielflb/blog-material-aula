---
icon: edit
date: 2024-03-27 20:40:00.00 -3
tag:
  - solid
category:
  - aula
order: 5
---

# Princípio da substituição de Liskov

Adaptado de [^JoaoRobertoSOLID].

<!-- @include: ../../includes/SOLID.md -->


## Princípio da substituição de Liskov

[^STACKIFY_LSP]

O Princípio de Substituição de Liskov é uma ferramenta essencial para a identificação de conceitos semelhantes sendo representados por classes diferentes. Ele é baseado na ideia de que uma classe derivada deve ser capaz de substituir sua classe base sem afetar o comportamento do programa. Isso significa que, se um programa pode utilizar objetos de tipos diferentes de maneira intercambiável, então esses objetos deveriam ser de classes que possuem uma relação de herança.

Ao aplicar o LSP, os desenvolvedores podem garantir que suas classes derivadas respeitem as mesmas regras e comportamentos que suas classes base. Isso ajuda a manter a coerência e consistência do código, bem como a facilitar a manutenção e a evolução do software.

Por exemplo, imagine que um programa possui uma classe `Forma` que representa a forma geométrica básica e dela são derivadas duas outras classes `Retângulo` e `Triângulo`. Se o programa tem uma função que calcula a área de uma forma, é importante que essa função funcione de maneira consistente para todas as formas, independentemente de serem retângulos ou triângulos.

Imagine agora que o sistema possui uma classe `Circulo` e essa classe não faça parte da família `Forma`. Durante a execução do programa o comportamento de `Circulo` é muito semelhante aos dos filhos de `Forma`. `Circulo` pode ser desenhado na tela, ter suas características de tamanho e cor alteradas e ter uma formula para o calculo de area. Assim como os objetos da família `Forma`.

### Definição

O Princípio de Substituição de Liskov leva esse nome por ter sido criado por Barbara Liskov, em 1988. A definição formal de Liskov diz que:

::: tip Definição
Se para cada objeto `o1` do tipo `S` há um objeto `o2` do tipo `T` de forma que, para todos os programas `P` definidos em termos de `T`, o comportamento de `P` é inalterado quando `o1` é substituído por `o2` então `S` é um subtipo de `T`
:::


<!-- 
//TODO Deixou de fazer parte da familia, ou passou a fazer a parte da familia (Espacializar o quadrado para gerar um cubo)
-->




## Referências

<!-- @include: ../../includes/bib.md -->