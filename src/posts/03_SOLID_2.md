---
icon: edit
date: 2024-03-21 19:40:00.00 -3
tag:
  - solid
category:
  - aula
---

# Princípio Aberto-Fechado (OCP)

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



## Princípio Aberto-Fechado (OCP)

Adaptado de [^RobsonOCP] e [^JoaoRobertoSOLID].

O OCP é mais um daqueles princípios de orientação a objetos que nos ajudam a eliminar *design smells,* possibilitando que nosso código ganhe em facilidade de manutenção e extensão.

::: tip Princípio Aberto-Fechado
Entidades de software (classes, módulos, funções, etc.) devem ser abertas para extensão mas fechadas para modificação.
:::

A moral da história é a seguinte: quando eu precisar estender o comportamento de um código, eu crio código novo ao invés de alterar o código existente.

Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação, ou seja, quando novos comportamentos e recursos precisam ser adicionados no software, devemos estender e não alterar o código fonte original.

### Exemplo prático do OCP:
Em um sistema hipotético de RH, temos duas classes que representam os contratos de trabalhos dos funcionários de uma pequena empresa, contratados e estagiários. Além de uma classe para processar a folha de pagamento.

```java
public class ContratoClt{
    public double salario(){
        //...
    }
}

public class Estagio{
    public double bolsaAuxilio(){
        //...
    }
}

public class FolhaDePagamento{
    private double saldo;
    
    public double calcular(ContratoClt contratoClt  ){
        this.saldo += contratoClt.salario();
    }
    public double calcular(Estagio estagio ){
        this.saldo += estagio.bolsaAuxilio();
    }
}
```

A classe `FolhaDePagamento` precisa verificar o funcionário para aplicar a regra de negócio correta na hora do pagamento. Supondo que a empresa cresceu e resolveu trabalhar com funcionários PJ, obviamente seria necessário modificar essa classe! Sendo assim, estaríamos quebrando o princípio Aberto-Fechado do SOLID.


Qual o problema de se alterar a classe FolhaDePagamento?

Não seria mais fácil apenas acrescentar mais um IF (ou criar um novo método) e verificar o novo tipo de funcionário PJ aplicando as respectivas regras? Sim, e provavelmente essa seria a solução que programadores menos experientes iriam fazer. Mas, esse é exatamente o problema! *Alterar uma classe já existente para adicionar um novo comportamento, corremos um sério risco de introduzir bugs em algo que já estava funcionando.*

::: tip Lembre-se
OCP preza que uma classe deve estar fechada para alteração e aberta para extensão.
:::


Como adicionamos um novo comportamento sem alterar o código fonte já existente?

O guru Uncle Bob resumiu a solução em uma frase:

> Separate extensible behavior behind an interface, and flip the dependencies.

Em tradução direta, seria:

> Separe o comportamento extensível por trás de uma interface e inverta as dependências.

O que devemos fazer é concentrar nos aspectos essências do contexto, abstraindo-os para uma interface. Se as abstrações são bem definidas, logo o software estará aberto para extensão.

### Aplicando OCP na prática

Voltando para o nosso exemplo, podemos concluir que o contexto que estamos lidando é a remuneração dos contratos de trabalho, aplicando as premissas de se isolar o comportamento extensível atrás de uma interface, podemos criar uma interface com o nome `Remuneravel` contendo o método `remuneracao()`, e fazer com que nossas classes de contrato de trabalho implementem essa interface. Além disso, iremos colocar as regras de calculo de remuneração para suas respectivas classes, dentro do método `remuneracao()`, fazendo com que a classe `FolhaDePagamento` dependa somente da interface `Remuneravel` que iremos criar.

Veja o código refatorado abaixo:

```java

public interface Remuneravel{
    public double remuneracao();
}

public class ContratoClt implements Remuneravel{
    public double remuneracao(){
        return salario();
    }
}

public class Estagio implements Remuneravel{
    public double remuneracao(){
        return bolsaAuxilio();
    }
}

public class FolhaDePagamento{
    protected double saldo;
    
    public double calcular(Remuneravel funcionario){
        this.saldo += funcionario.remuneracao();
    }
}
```

Agora a classe `FolhaDePagamento` não precisa mais saber quais métodos chamar para calcular. Ela será capaz de calcular o pagamento corretamente de qualquer novo tipo de funcionário que seja criado no futuro (`ContratoPJ`) — desde que ele implemente a interface `Remuneravel` — sem qualquer necessidade de alteração do seu código fonte. Dessa forma, acabamos de implementar o princípio de Aberto-Fechado do SOLID em nosso código!

Open-Closed Principle também é base para o padrão de projeto Strategy

### Outro Exemplo de violação (OCP)

```java
public class Arquivo{
}
 
public class ArquivoWord extends Arquivo{
    public void gerarDocX(){
        // codigo para geracao do arquivo
    }
}
 
public class ArquivoPdf extends Arquivo{
    public void gerarPdf(){
        // codigo para geracao do arquivo
    }
}
 
public class GeradorDeArquivos{
   public void gerarArquivos(List<Arquivo> arquivos){
      for(Arquivo arquivo : arquivos){
         if (arquivo instanceof ArquivoWord){
            ((ArquivoWord)arquivo).gerarDocX();
         }else if (arquivo instanceof ArquivoPdf){
            ((ArquivoPdf)arquivo).gerarPdf();
         }
      }
   }
}
```

No exemplo acima temos classes que geram arquivos do Word e PDFs. E temos uma classe `GeradorDeArquivos` que recebe uma lista de arquivos e gera todos eles (por _gerar_, entenda criar um arquivo novo no formato especificado e salvá-lo em disco).

Suponha agora que tenhamos que estender a aplicação para dar suporte a arquivos em outro formato, como, por exemplo, arquivos texto (.txt) e precisamos que o método `gerarArquivos` também gere arquivos no novo formato.

Além da nova classe, que poderíamos chamar de `ArquivoTxt`, seríamos obrigados a alterar o método `gerarArquivos` para atender a esse requisito. O mais óbvio seria colocar mais um `else if`, checando pelo novo tipo (txt) e chamando o método correspondente: `((ArquivoTxt)arquivo).gerarTxt()`. Esse padrão seguiria sucessivamente a cada necessidade de um novo formato de arquivo.

Sendo assim, podemos afirmar que o método `gerarArquivos` não está em conformidade com o OCP para mudanças do tipo _preciso de um novo formato de arquivo_, uma vez que o método não está fechado para essas mudanças.

Vamos pensar na situação onde existam outras partes da aplicação que também fazem as verificações por tipo vistas no método `gerarArquivos` para invocar outros métodos específicos de cada classe concreta. Para piorar, algumas dessas partes estão em outros componentes da aplicação.

O que acontece quando precisamos de um novo formato de arquivo?

Além de criarmos nosso novo arquivo, como `ArquivoTxt`, teríamos que:

1. Alterar todos os métodos que precisem fazer uso do novo formato (certamente aqueles com vários `if/else if` ou um belo `switch..case`).
1. Recompilar e fazer o deploy de todos os componentes que foram impactados.

Quando uma mudança dessas acaba causando uma série de mudanças em cascata, fica claro que nosso design não está bom pois, além de mais trabalho para alterarmos, ainda podemos nos esquecer de algumas dessas partes do código.

Além disso, quanto mais código para alterar, que já estava pronto e funcionando, mais chances de introduzir bugs.

#### Atendendo OCP

para atender o OCP o código poderia ser alterado da seguinte forma:

```java

public abstract class Arquivo{
    public abstract void gerar();
}
 
public class ArquivoWord extends Arquivo{
    @Override
    public void gerar(){
        // codigo para geracao do arquivo
    }
}
 
public class ArquivoPdf extends Arquivo{
    @Override
    public void gerar(){
        // codigo para geracao do arquivo
    }
}
 
public class ArquivoTxt extends Arquivo{
    @Override
    public void gerar(){
        // codigo para geracao do arquivo
    }
}
 
public class GeradorDeArquivos{
   public void gerarArquivos(List<Arquivo> arquivos){
      for(Arquivo arquivo : arquivos){
        arquivo.gerar();
      }
   }
}
```

Algumas pequenas mudanças foram realizadas para melhorar a estruturação do código:

1. A classe `Arquivo` foi transformada em uma classe abstrata, já que não há a intenção de instanciá-la diretamente.
2. Foi criado um método abstrato para a geração de arquivos na classe base, denominado de `gerar`.
3. As classes derivadas foram modificadas para implementar o método `gerar`.
4. Um novo requisito foi introduzido, ou seja, um novo tipo de arquivo (`ArquivoTxt`), que também herda da classe `Arquivo` e implementa o método `gerar`.
5. As verificações de tipo presentes no método `gerarArquivos` foram eliminadas e o polimorfismo foi utilizado em seu lugar.

Em resumo, agora sempre que um novo formato de arquivo surgir, é possível estender o comportamento do método `gerarArquivos` para lidar com ele, sem a necessidade de modificá-lo. Basta criar o novo tipo de arquivo e ele estará pronto para ser gerado. Simples e eficiente!

### Conclusão

O Princípio do Aberto/Fechado nos atenta para a aplicação de abstrações e polimorfismo, de forma consciente, garantindo que tenhamos um software mais flexível e, portanto, mais fácil de ser mantido.


## Referências

<!-- @include: ../bib/bib.md -->