---
icon: edit
date: 2024-03-21 18:40:00.00 -3
tag:
  - solid
category:
  - aula
order: 3
---

# Princípios SOLID - Princípio da Responsabilidade Única (SRP)

Adaptado de [^JoaoRobertoSOLID].

<!-- @include: ../../includes/SOLID.md -->

## Princípio da Responsabilidade Única (SRP)

Adaptado de [^RobsonSRP] e [^JoaoRobertoSOLID].

Este princípio nada mais é do que uma perspectiva diferente para um dos mais fundamentais princípios da orientação a objetos: a coesão.

Esse princípio declara que uma classe deve ser especializada em um único assunto e possuir apenas uma responsabilidade dentro do software, ou seja, a classe deve ter uma única tarefa ou ação para executar.

::: tip Princípio da Responsabilidade Única
Uma classe deve ter um, e somente um, motivo para mudar.
:::

Vamos tentar entender o que isso significa e eventuais problemas causados pela violação deste princípio.

### Alguns Problemas


Quando estamos aprendendo programação orientada a objetos, sem sabermos, damos a uma classe mais de uma responsabilidade e acabamos criando classes que fazem de tudo (*God Class*). Num primeiro momento isso pode parecer eficiente, mas como as responsabilidades acabam se misturando, quando há necessidade de realizar alterações nessa classe, será difícil modificar uma dessas responsabilidades sem comprometer as outras. Toda alteração acaba sendo introduzida com um certo nível de incerteza em nosso sistema — principalmente se não existirem testes automatizados!

Alguns problemas decorrentes da utilização de *God Class*:

- Dificuldade de compreensão e, portanto, dificuldade de manutenção.
- Dificuldade de reuso.
- Com responsabilidades entrelaçadas em uma mesma classe, pode ficar difícil alterar uma dessas responsabilidades sem comprometer as outras (rigidez) e pode acabar quebrando outras partes do software (fragilidade).
- Acoplamento alto, ou seja, a classe tem um número excessivo de dependências, e portanto fica mais sujeita a mudanças em decorrência de alterações em outras classes (novamente a fragilidade).

### Exemplos Comuns de Violação

Imaginem uma classe de negócio Pedido:

```java
public class Pedido{
    public void adicionarProduto(Produto produto, int quantidade){}
    public double calcularTotal(){}
    public void gerarXML(){}
}
```

No exemplo acima, temos uma quebra do SRP de uma forma bem explícita, uma vez que temos responsabilidades que deveriam ser de componentes distintos do software. Enquanto os dois primeiros métodos fazem sentido para o domínio do qual Pedido faz parte, o último está relacionado à exibição de dados em um formato específico, o que faz mais sentido em camadas superiores, como de Aplicação ou de UI.

Em um projeto com várias classes seguindo esse “padrão”, fica difícil – ou impossível – manter a coesão em um nível mais alto: em nível de componentes. Em outras palavras, o software acaba sendo um emaranhado de classes sem um divisão clara de camadas.

De forma mais prática: chega um momento onde fica impossível separar determinadas classes em uma class library devido à referência circular. Também fica complicado fazer o deploy de componentes isolados por haver dependências demais entre eles.

Outros exemplos comuns são: 
  1. Classes que misturam negócio e persistência (Pedido, por exemplo, contém métodos que sabem incluir, alterar e excluir pedidos, fazendo com o que mesmo seja acoplado com classes como SqlConnection ou ainda algum ORM); 
  1. *View models* que apresentam regras de negócio;

### Um Exemplo Menos Óbvio

Nem sempre é fácil identificar várias responsabilidades em uma mesma classe. Eu diria que na maioria das vezes não é. Aliás, atribuir responsabilidades é uma das principais tarefas de um programador OO.

Mesmo que uma classe de negócio esteja fazendo apenas tarefas relacionadas ao seu domínio, ela pode estar fazendo coisas demais.

Vejamos o seguinte exemplo:
```java
public class Cliente{
    // dados do cliente, como Nome, CPF, etc.
    // outros métodos
 
    public double calcularDescontoPara(Venda venda)    {
        if (FormaDePagamento.AVista.equals(venda.getFormaDePagamento()){
            if (venda.getTotal() > 2000)
                return venda.getTotal() * 0.2;
            return venda.getTotal() * 0.1;
        }
        return 0;
    }
}
```
Observem acima que o método `calcularDescontoPara` não manipula nenhum dado da classe `Cliente`, ou seja, nenhuma informação do cliente é necessária para se determinar o valor do desconto.

Sendo assim, esta classe possui pelo menos duas razões para mudar: uma quando houver alteração na lógica de negócio referente a um `Cliente` e outra quando houver alguma alteração na lógica de uma `Venda`.

Certamente, faz mais sentido que este método seja da classe `Venda`!

### Outro exemplo

```java
public class Order{
    public double calculateTotalSum(){/*...*/}
    public List<Item> getItems(){/*...*/}
    public int getItemCount(){/*...*/}
    public void addItem(Item item){/*...*/}
    public void deleteItem(Item item){/*...*/}

    public void printOrder(){/*...*/}
    public void showOrder(){/*...*/}

    public void load(){/*...*/}
    public void save(){/*...*/}
    public void update(){/*...*/}
    public void delete(){/*...*/}
}
```

A classe `Order` viola o SRP porque realiza 3 tipos distintos de tarefas. Além de lidar com as informações do pedido, ela também é responsável pela exibição e manipulação dos dados. Lembre-se, o princípio da responsabilidade única preza que uma classe deve ter um, e somente um, motivo para mudar.

A violação do _Single Responsibility Principle_ pode gerar alguns problemas, sendo eles:
- Falta de coesão — uma classe não deve assumir responsabilidades que não são suas;
- Alto acoplamento — Mais responsabilidades geram um maior nível de dependências, deixando o sistema engessado e frágil para alterações;
- Dificuldades na implementação de testes automatizados — É difícil de "mockar" esse tipo de classe;
- Dificuldades para reaproveitar o código;
Aplicando o SRP na classe Order, podemos refatorar o código da seguinte forma:

```java
public class Order{
    public double calculateTotalSum(){/*...*/}
    public List<Item> getItems(){/*...*/}
    public int getItemCount(){/*...*/}
    public void addItem(Item item){/*...*/}
    public void deleteItem(Item item){/*...*/}
}

public class OrderRepository{
    public Order load(double orderId){/*...*/}
    public Order save(Order order){/*...*/}
    public Order update(Order order){/*...*/}
    public void delete(Order order){/*...*/}
}

public class OrderViewer{
    public void printOrder(Order order){/*...*/}
    public void showOrder(Order order){/*...*/}
}
```

Perceba no exemplo acima que agora temos 3 classes, cada uma cuidando da sua responsabilidade.

O princípio da responsabilidade única não se limita somente a classes, ele também pode ser aplicado em métodos e funções, ou seja, tudo que é responsável por executar uma ação, deve ser responsável por apenas aquilo que se propõe a fazer.


### Conclusão

O SRP é um dos princípios mais importantes que existe na orientação a objetos. Quando falamos de responsabilidades e coesão estamos tocando em dois pontos-chave da OO, que nos ajudam a criar classes menores, de mais fácil entendimento, manutenção e reuso.


## Referências

<!-- @include: ../../includes/bib.md -->