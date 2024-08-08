import{_ as n,a,b as s}from"./colaboracoes-B2twUomn.js";import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as i,a as t}from"./app-DoHoykSH.js";const l={},c=t('<h1 id="builder" tabindex="-1"><a class="header-anchor" href="#builder"><span>Builder</span></a></h1><hr><h2 id="intencao" tabindex="-1"><a class="header-anchor" href="#intencao"><span>Intenção</span></a></h2><p>Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações.</p><hr><h2 id="tambem-conhecido-como" tabindex="-1"><a class="header-anchor" href="#tambem-conhecido-como"><span>Também conhecido como</span></a></h2><p>Constructor</p><hr><h2 id="motivacao" tabindex="-1"><a class="header-anchor" href="#motivacao"><span>Motivação</span></a></h2><p>Um leitor de um documento em RTF (Rich Text Format) deveria ser capaz de converter RTF em muitos formatos de texto. O leitor poderia converter documentos RTF em texto ASCII comum ou widget de texto, que possa ser editado interativamente. O problema, contudo, é que o número de conversões possíveis é aberto. Por isso, deve ser fácil acrescentar uma nova conversão sem modificar o leitor.</p><p>Uma solução é configurar a classe RTFReader com um objeto TextConverter que converte RTF para uma outra representação de textos. À medida que o RTFReader analisa o documento RTF, ele usa o objeto TextConverter para efetuar a conversão. Sempre que o RTFReader reconhece um símbolo RTF (texto simples, ou uma palavra de controle do RTF), ele emite uma solicitação para o TextConverter para converter esse símbolo. Os objetos TextConverter são responsáveis tanto por efetuar a conversão dos dados como pela representação do símbolo num formato particular.</p><p>As subclasses de TextConverter se especializam em diferentes conversões e formatos. Por exemplo, um ASCIIConverter ignora solicitações para converter qualquer coisa, exceto texto simples. Por outro lado, um TeXConverter implementará operações para todas as solicitações visando produzir uma representação TEX que capture toda a informação estilística do texto. Um TextWidgetConverter produzirá um objeto para uma interface de usuário complexa que permite ao usuário ver e editar o texto.</p><figure><img src="'+n+'" alt="Estrutura Motivação" tabindex="0" loading="lazy"><figcaption>Estrutura Motivação</figcaption></figure><p>Cada tipo de classe conversora implementa o mecanismo para criação e montagem de um objeto complexo, colocando-o atrás de uma interface abstrata. O conversor é separado do leitor, que é responsável pela análise de um documento RTF.</p><p>O padrão Builder captura todos estes relacionamentos. Cada classe conversora é chamada um builder no padrão, e o leitor é chamado de director. Aplicado a este exemplo, o Builder separa o algoritmo para interpretar um formato de texto (isto é, o analisador de documentos RTF) de como um formato convertido é criado e representado. Isso nos permite reutilizar o algoritmo de análise (parsing) do RTFReader para criar diferentes representações de texto a partir de documentos RTF – simplesmente configure o RTFReader com diferentes subclasses de TextConverter.</p><hr><h2 id="aplicabilidade" tabindex="-1"><a class="header-anchor" href="#aplicabilidade"><span>Aplicabilidade</span></a></h2><p>Use o padrão <strong>Builder</strong> quando:</p><ul><li>O algoritmo para criação de um objeto complexo deve ser independente das partes que compõem o objeto e de como elas são montadas.</li><li>O processo de construção deve permitir diferentes representações para o objeto que é construído.</li><li>Composição de vários objetos.</li></ul><hr><h2 id="estrutura" tabindex="-1"><a class="header-anchor" href="#estrutura"><span>Estrutura</span></a></h2><figure><img src="'+a+`" alt="Estrutura do Builder" tabindex="0" loading="lazy"><figcaption>Estrutura do Builder</figcaption></figure><hr><h2 id="participantes" tabindex="-1"><a class="header-anchor" href="#participantes"><span>Participantes</span></a></h2><ul><li><p><strong>Builder</strong> (TextConverter)</p><ul><li>Especifica uma interface abstrata para criação de partes de um objeto-produto.</li></ul></li><li><p><strong>ConcreteBuilder</strong> (ASCIIConverter, TeXConverter, TextWidgetConverter)</p><ul><li>Constrói e monta partes do produto pela implementação da interface de <strong>Builder</strong>;</li><li>Define e mantém a representação que cria;</li><li>Fornece uma interface para recuperação do produto (por exemplo, GetASCIIText, GetTextWidget).</li></ul></li><li><p><strong>Director</strong> (RTFReader)</p><ul><li>Constrói um objeto usando a interface de <strong>Builder</strong>.</li></ul></li><li><p><strong>Product</strong> (ASCIIText, TeXText, TextWidget)</p><ul><li>Representa o objeto complexo em construção. ConcreteBuilder constrói a representação interna do produto e define o processo pelo qual ele é montado;</li><li>Inclui classes que definem as partes constituintes, inclusive as interfaces para a montagem das partes no resultado final.</li></ul></li></ul><hr><h2 id="outro-exemplo" tabindex="-1"><a class="header-anchor" href="#outro-exemplo"><span>Outro exemplo</span></a></h2><p>Usar o padrão Builder só faz sentido quando seus produtos são bem complexos e requerem configuração extensiva. Os dois produtos a seguir são relacionados, embora eles não tenham uma interface em comum.</p><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>class Car is
    // Um carro pode ter um GPS, computador de bordo, e alguns
    // assentos. Diferentes modelos de carros (esportivo, SUV,
    // conversível) podem ter diferentes funcionalidades
    // instaladas ou equipadas.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>class Manual is
    // Cada carro deve ter um manual do usuário que corresponda
    // a configuração do carro e descreva todas suas
    // funcionalidades.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>// A interface builder especifica métodos para criar as
// diferentes partes de objetos produto.
interface Builder is
    method reset()
    method setSeats(...)
    method setEngine(...)
    method setTripComputer(...)
    method setGPS(...)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>// As classes builder concretas seguem a interface do
// builder e fornecem implementações específicas das etapas
// de construção. Seu programa pode ter algumas variações de
// builders, cada uma implementada de forma diferente.
class CarBuilder implements Builder is
    private field car:Car

    // Uma instância fresca do builder deve conter um objeto
    // produto em branco na qual ela usa para montagem futura.
    constructor CarBuilder() is
        this.reset()

    // O método reset limpa o objeto sendo construído.
    method reset() is
        this.car = new Car()

    // Todas as etapas de produção trabalham com a mesma
    // instância de produto.
    method setSeats(...) is
        // Define o número de assentos no carro.

    method setEngine(...) is
        // Instala um tipo de motor.

    method setTripComputer(...) is
        // Instala um computador de bordo.

    method setGPS(...) is
        // Instala um sistema de posicionamento global.

    // Geralmente, após retornar o resultado final para o
    // cliente, espera-se que uma instância de builder comece
    // a produzir outro produto. É por isso que é uma prática
    // comum chamar o método reset no final do corpo do método
    // \`getProduct\`. Contudo este comportamento não é
    // obrigatório, e você pode fazer seu builder esperar por
    // uma chamada explícita do reset a partir do código cliente
    // antes de se livrar de seu resultado anterior.
    method getProduct():Car is
        product = this.car
        this.reset()
        return product
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>// Ao contrário dos outros padrões criacionais, o Builder
// permite que você construa produtos que não seguem uma
// interface comum.
class CarManualBuilder implements Builder is
    private field manual:Manual

    constructor CarManualBuilder() is
        this.reset()

    method reset() is
        this.manual = new Manual()

    method setSeats(...) is
        // Documenta as funcionalidades do assento do carro.

    method setEngine(...) is
        // Adiciona instruções do motor.

    method setTripComputer(...) is
        // Adiciona instruções do computador de bordo.

    method setGPS(...) is
        // Adiciona instruções do GPS.

    method getProduct():Manual is
        // Retorna o manual e reseta o builder.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>// O diretor é apenas responsável por executar as etapas de
// construção em uma sequência em particular. Isso ajuda quando
// produzindo produtos de acordo com uma ordem específica ou
// configuração. A rigor, a classe diretor é opcional, já que o
// cliente pode controlar os builders diretamente.
class Director is
    // O diretor trabalha com qualquer instância builder que
    // o código cliente passar a ele. Dessa forma, o código
    // cliente pode alterar o tipo final do produto recém
    // montado. O diretor pode construir diversas variações
    // do produto usando as mesmas etapas de construção.
    method constructSportsCar(builder: Builder) is
        builder.reset()
        builder.setSeats(2)
        builder.setEngine(new SportEngine())
        builder.setTripComputer(true)
        builder.setGPS(true)

    method constructSUV(builder: Builder) is
        // ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>// O código cliente cria um objeto builder, passa ele para o
// diretor e então inicia o processo de construção. O resultado
// final é recuperado do objeto builder.
class Application is

    method makeCar() is
        director = new Director()

        CarBuilder builder = new CarBuilder()
        director.constructSportsCar(builder)
        Car car = builder.getProduct()

        CarManualBuilder builder = new CarManualBuilder()
        director.constructSportsCar(builder)

        // O produto final é frequentemente retornado de um
        // objeto builder uma vez que o diretor não está
        // ciente e não é dependente de builders e produtos
        // concretos.
        Manual manual = builder.getProduct()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Exemplo retirado do Reactoring Guru</p></blockquote><hr><h2 id="colaboracoes" tabindex="-1"><a class="header-anchor" href="#colaboracoes"><span>Colaborações</span></a></h2><ul><li>O cliente cria o objeto Director e o configura com o objeto Builder desejado.</li><li>Director notifica o construtor sempre que uma parte do produto deve ser construída.</li><li>Builder trata solicitações do diretor e acrescenta partes ao produto.</li><li>O cliente recupera o produto do construtor. <img src="`+s+`" alt="Diagrama de interação" loading="lazy"></li></ul><hr><h2 id="consequencias" tabindex="-1"><a class="header-anchor" href="#consequencias"><span>Consequências</span></a></h2><ul><li>Vantagens</li></ul><ol><li>Separa a criação da utilização.</li><li>O cliente não precisa criar os objetos diretamente.</li><li>O mesmo código pode construir objetos diferentes.</li><li>Oferece um controle mais fino sobre o processo de construção. Ao contrário de padrões de criação que constroem produtos de uma só vez, o Builder constrói o produto passo a passo sob o controle do diretor.</li></ol><ul><li>Desvantagens</li></ul><ol><li>O código final pode se tornar muito complexo.</li></ol><hr><h2 id="implementacao" tabindex="-1"><a class="header-anchor" href="#implementacao"><span>Implementação</span></a></h2><p>Ao implementar o padrão <strong>Builder</strong> leve em consideração os seguintes passos:</p><ol><li>A classe Builder define operações para cada componente que o diretor pode solicitar. Por padrão, essas operações são vazias. A interface do Builder deve ser genérica o suficiente para suportar a construção de diferentes produtos. O modelo de construção pode adicionar componentes ao produto em construção.</li><li>Geralmente, os produtos gerados por diferentes construtores concretos têm representações muito distintas, tornando pouco útil ter uma classe base comum para todos. No exemplo do RTF, objetos como ASCIIText e TextWidget são tão diferentes que não precisam de uma interface comum. O cliente configura o diretor com o construtor específico que cria o tipo desejado de produto. Assim, o cliente pode lidar com os produtos de acordo com o tipo concreto de construtor utilizado.</li><li>Em linguagens como C++, os métodos de construção em Builder são deixados vazios, permitindo que clientes redefinam apenas as operações que desejam personalizar.</li></ol><hr><h2 id="exemplo-de-codigo" tabindex="-1"><a class="header-anchor" href="#exemplo-de-codigo"><span>Exemplo de código</span></a></h2><p>Classe <code>Aparelho</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">exemploAparelho</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Aparelho</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> nome<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> marca<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">MemoriaRAM</span> memoriaRAM<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Memoria</span> memoria<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Processador</span> processador<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Placa</span> placa<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> preco<span class="token punctuation">;</span>

    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Interface <code>BuilderAparelhoInterface</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">exemploAparelho</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BuilderAparelhoInterface</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Aparelho</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Aparelho</span> <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildMemoria</span><span class="token punctuation">(</span><span class="token class-name">Memoria</span> memoria<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildMemoriaRAM</span><span class="token punctuation">(</span><span class="token class-name">MemoriaRAM</span> memoriaRAM<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildProcessador</span><span class="token punctuation">(</span><span class="token class-name">Processador</span> processador<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildPlaca</span><span class="token punctuation">(</span><span class="token class-name">Placa</span> placa<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Double</span> <span class="token function">getPreco</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Classe <code>BuilderAparelho</code> que implementa a interface <code>BuilderAparelhoInterface</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">exemploAparelho</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BuilderAparelho</span> <span class="token keyword">implements</span> <span class="token class-name">BuilderAparelhoInterface</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Aparelho</span> aparelho<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> preco<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Aparelho</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        aparelho <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Aparelho</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> aparelho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Aparelho</span> <span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Aparelho</span> aparelho <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>aparelho<span class="token punctuation">;</span>
        <span class="token keyword">return</span> aparelho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildProcessador</span><span class="token punctuation">(</span><span class="token class-name">Processador</span> processador<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        aparelho<span class="token punctuation">.</span><span class="token function">setProcessador</span><span class="token punctuation">(</span>processador<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildMemoria</span><span class="token punctuation">(</span><span class="token class-name">Memoria</span> memoria<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        aparelho<span class="token punctuation">.</span><span class="token function">setMemoria</span><span class="token punctuation">(</span>memoria<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildMemoriaRAM</span><span class="token punctuation">(</span><span class="token class-name">MemoriaRAM</span> memoriaRAM<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        aparelho<span class="token punctuation">.</span><span class="token function">setMemoriaRAM</span><span class="token punctuation">(</span>memoriaRAM<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildPlaca</span><span class="token punctuation">(</span><span class="token class-name">Placa</span> placa<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        aparelho<span class="token punctuation">.</span><span class="token function">setPlaca</span><span class="token punctuation">(</span>placa<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Double</span> <span class="token function">getPreco</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> preco <span class="token operator">=</span> aparelho<span class="token punctuation">.</span><span class="token function">getPreco</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Classe <code>DirectorCelularSamsung</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">exemploAparelho</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DirectorCelularSamsung</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">BuilderAparelho</span> builder<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DirectorCelularSamsung</span><span class="token punctuation">(</span><span class="token class-name">BuilderAparelho</span> builder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>builder <span class="token operator">=</span> builder<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">criarCelular</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Memoria</span> memoria <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Memoria</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">350.00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildMemoria</span><span class="token punctuation">(</span>memoria<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MemoriaRAM</span> memoriaRAM <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MemoriaRAM</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">90.00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildMemoriaRAM</span><span class="token punctuation">(</span>memoriaRAM<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Placa</span> placa <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Placa</span><span class="token punctuation">(</span><span class="token string">&quot;Samsung&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Galaxy Tab S6 Lite&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">539.90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildPlaca</span><span class="token punctuation">(</span>placa<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Processador</span> processador <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Processador</span><span class="token punctuation">(</span><span class="token string">&quot;Snapdragon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Exynos 1280&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">899.90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildProcessador</span><span class="token punctuation">(</span>processador<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Classe <code>DirectorCelularXiaomi</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">exemploAparelho</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DirectorCelularXiaomi</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">BuilderAparelho</span> builder<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DirectorCelularXiaomi</span><span class="token punctuation">(</span><span class="token class-name">BuilderAparelho</span> builder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>builder <span class="token operator">=</span> builder<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">criarCelular</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Memoria</span> memoria <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Memoria</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">200.00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildMemoria</span><span class="token punctuation">(</span>memoria<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MemoriaRAM</span> memoriaRAM <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MemoriaRAM</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">180.00</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildMemoriaRAM</span><span class="token punctuation">(</span>memoriaRAM<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Placa</span> placa <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Placa</span><span class="token punctuation">(</span><span class="token string">&quot;Xiaomi&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Xiaomi Poco X5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">539.90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildPlaca</span><span class="token punctuation">(</span>placa<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Processador</span> processador <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Processador</span><span class="token punctuation">(</span><span class="token string">&quot;Snapdragon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Snapdragon 765&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Celular&quot;</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">799.90</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">buildProcessador</span><span class="token punctuation">(</span>processador<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Executando código cliente na classe <code>Main</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">exemploAparelho</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BuilderAparelho</span> builderAparelhoCelular <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BuilderAparelho</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">DirectorCelularSamsung</span> directorSamsung <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DirectorCelularSamsung</span><span class="token punctuation">(</span>builderAparelhoCelular<span class="token punctuation">)</span><span class="token punctuation">;</span>
        directorSamsung<span class="token punctuation">.</span><span class="token function">criarCelular</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Aparelho</span> celularSamsung <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Aparelho</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        celularSamsung <span class="token operator">=</span> builderAparelhoCelular<span class="token punctuation">.</span><span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>celularSamsung<span class="token punctuation">.</span><span class="token function">getPreco</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">DirectorCelularXiaomi</span> directorXiaomi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DirectorCelularXiaomi</span><span class="token punctuation">(</span>builderAparelhoCelular<span class="token punctuation">)</span><span class="token punctuation">;</span>
        directorXiaomi<span class="token punctuation">.</span><span class="token function">criarCelular</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Aparelho</span> celularXiaomi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Aparelho</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        celularXiaomi <span class="token operator">=</span> builderAparelhoCelular<span class="token punctuation">.</span><span class="token function">getProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>celularXiaomi<span class="token punctuation">.</span><span class="token function">getPreco</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="usos-conhecidos" tabindex="-1"><a class="header-anchor" href="#usos-conhecidos"><span>Usos conhecidos</span></a></h2><p>O framework Service Configurator do Adaptive Communications Environment usa um builder para construir componentes de serviços de rede que são “linkeditados” a um servidor em tempo de execução [SS94]. Os componentes são descritos com uma linguagem de configuração que é analisada por um analisador LALR(1). As ações semânticas do analisador executam operações sobre o construtor que acrescenta informações ao componente de serviço. Neste caso, o analisador é o Director.</p><hr><h2 id="padroes-relacionados" tabindex="-1"><a class="header-anchor" href="#padroes-relacionados"><span>Padrões relacionados</span></a></h2><p>[Composite]: é o que freqüentemente o builder constrói. [Abstract Factory]: é semelhante a Builder no sentido de que também pode construir objetos complexos. A diferença principal é que o padrão Builder focaliza a construção de um objeto complexo passo a passo. A ênfase do Abstract Factory é sobre famílias de objetos-produto (simples ou complexos). Builder retorna o produto como um passo final, mas no caso do padrão Abstrac Factory o produto é retornado imediatamente.</p><hr><h2 id="referencias" tabindex="-1"><a class="header-anchor" href="#referencias"><span>Referências</span></a></h2><ul><li>Refactoring Guru - https://refactoring.guru/pt-br/design-patterns/builder</li><li>Gamma Erich - Padrões de Projetos - Soluções Reutilizáveis</li><li>Otávio Miranda - Builder Teoria - Padrões de Projeto - Parte 6/45 - https://www.youtube.com/watch?v=2VwLvwsIu-8</li><li>Otávio Miranda - Builder Prática - Padrões de Projeto - Parte 7/45 - https://www.youtube.com/watch?v=LWm3888uOrc</li></ul>`,72),p=[c];function r(u,d){return o(),i("div",null,p)}const b=e(l,[["render",r],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/includes/builder/seminario-1-LuisMiguelADS/","title":"Builder","lang":"pt-BR","frontmatter":{"description":"Builder Intenção Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações. Também conheci...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-ppr.github.io/blog-material-aula/blog-material-aula/includes/builder/seminario-1-LuisMiguelADS/"}],["meta",{"property":"og:site_name","content":"20241 PPR Blog das Aulas"}],["meta",{"property":"og:title","content":"Builder"}],["meta",{"property":"og:description","content":"Builder Intenção Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações. Também conheci..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"article:author","content":"Leandro Souza"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Builder\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Souza\\",\\"url\\":\\"https://github.com/leandro-costa\\"}]}"]]},"headers":[{"level":2,"title":"Intenção","slug":"intencao","link":"#intencao","children":[]},{"level":2,"title":"Também conhecido como","slug":"tambem-conhecido-como","link":"#tambem-conhecido-como","children":[]},{"level":2,"title":"Motivação","slug":"motivacao","link":"#motivacao","children":[]},{"level":2,"title":"Aplicabilidade","slug":"aplicabilidade","link":"#aplicabilidade","children":[]},{"level":2,"title":"Estrutura","slug":"estrutura","link":"#estrutura","children":[]},{"level":2,"title":"Participantes","slug":"participantes","link":"#participantes","children":[]},{"level":2,"title":"Outro exemplo","slug":"outro-exemplo","link":"#outro-exemplo","children":[]},{"level":2,"title":"Colaborações","slug":"colaboracoes","link":"#colaboracoes","children":[]},{"level":2,"title":"Consequências","slug":"consequencias","link":"#consequencias","children":[]},{"level":2,"title":"Implementação","slug":"implementacao","link":"#implementacao","children":[]},{"level":2,"title":"Exemplo de código","slug":"exemplo-de-codigo","link":"#exemplo-de-codigo","children":[]},{"level":2,"title":"Usos conhecidos","slug":"usos-conhecidos","link":"#usos-conhecidos","children":[]},{"level":2,"title":"Padrões relacionados","slug":"padroes-relacionados","link":"#padroes-relacionados","children":[]},{"level":2,"title":"Referências","slug":"referencias","link":"#referencias","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.64,"words":1992},"filePathRelative":"includes/builder/seminario-1-LuisMiguelADS/README.md","autoDesc":true}');export{b as comp,h as data};
