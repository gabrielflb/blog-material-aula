import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as n,c as r,b as s,a as e}from"./app-B49PEt90.js";const d={},t=e('<h2 id="intencao" tabindex="-1"><a class="header-anchor" href="#intencao"><span>Intenção</span></a></h2><p>O padrão de projeto Builder tem como objetivo separar a construção de um objeto complexo da sua representação, permitindo que o mesmo processo de construção crie diferentes representações. Em outras palavras, ele facilita a criação de objetos complexos passo a passo.</p><h2 id="tambem-conhecido-como" tabindex="-1"><a class="header-anchor" href="#tambem-conhecido-como"><span>Também conhecido como</span></a></h2><p>O padrão Builder também é conhecido como Construtor, Construction Pattern.</p><h2 id="motivacao-para-o-padrao-de-projeto-builder" tabindex="-1"><a class="header-anchor" href="#motivacao-para-o-padrao-de-projeto-builder"><span>Motivação para o Padrão de Projeto Builder</span></a></h2><p>A construção de objetos complexos pode envolver uma série de etapas e opções que variam conforme o contexto e as necessidades do sistema. Codificar a construção desses objetos diretamente nas classes que os utilizam pode resultar em diversos problemas:</p><h3 id="complexidade-na-criacao-de-objetos" tabindex="-1"><a class="header-anchor" href="#complexidade-na-criacao-de-objetos"><span>Complexidade na Criação de Objetos</span></a></h3><p>Quando um objeto requer múltiplos parâmetros para sua construção e alguns desses parâmetros são opcionais, a criação do objeto pode se tornar complexa e difícil de entender. Se o construtor da classe precisa suportar todas as combinações possíveis de parâmetros, o número de construtores pode crescer exponencialmente, resultando em um código difícil de manter e entender.</p><h3 id="diferenca-entre-construcao-e-representacao" tabindex="-1"><a class="header-anchor" href="#diferenca-entre-construcao-e-representacao"><span>Diferença entre Construção e Representação</span></a></h3><p>A lógica para construir um objeto pode ser complexa e diferente da lógica para representar o objeto em si. Quando a construção está codificada diretamente na classe, é difícil separar a construção da representação. O padrão Builder ajuda a manter essas responsabilidades separadas, permitindo uma construção mais flexível e uma representação mais clara.</p><h3 id="manutencao-e-extensibilidade" tabindex="-1"><a class="header-anchor" href="#manutencao-e-extensibilidade"><span>Manutenção e Extensibilidade</span></a></h3><p>Alterar o processo de construção de um objeto (por exemplo, adicionar um novo parâmetro ou alterar o método de construção) pode ser difícil se a construção estiver diretamente acoplada à classe do objeto. Com o padrão Builder, você pode modificar a construção do objeto sem alterar a classe que representa o objeto, facilitando a manutenção e a extensão do código.</p><h3 id="codigo-mais-limpo-e-legivel" tabindex="-1"><a class="header-anchor" href="#codigo-mais-limpo-e-legivel"><span>Código Mais Limpo e Legível</span></a></h3><p>Utilizar o padrão Builder pode tornar o código que cria e configura objetos mais limpo e legível. Em vez de um construtor com muitos parâmetros ou métodos de configuração confusos, o Builder oferece uma interface clara e fluente para configurar os objetos passo a passo.</p><h2 id="aplicabilidade" tabindex="-1"><a class="header-anchor" href="#aplicabilidade"><span>Aplicabilidade</span></a></h2><p>Use o padrão Builder quando:</p><ul><li>o algoritmo para criação de um objeto complexo deve ser independente das partes que compõem o objeto e de como elas são montadas.</li><li>o processo de construção deve permitir diferentes representações para o objeto que é construído</li></ul><h2 id="estrutura" tabindex="-1"><a class="header-anchor" href="#estrutura"><span>Estrutura</span></a></h2><p><strong>Builder</strong>:</p><ul><li>Declara uma interface para criar as partes do objeto <code>Product</code>.</li></ul><p><strong>ConcreteBuilder</strong>:</p><ul><li>Implementa a interface <code>Builder</code> para construir e montar as partes do objeto <code>Product</code>.</li><li>Mantém a representação do produto que está sendo construído.</li><li>Fornece um método para recuperar o produto.</li></ul><p><strong>Director</strong>:</p><ul><li>Constrói um objeto usando a interface <code>Builder</code>.</li><li>Orienta a sequência de construção.</li></ul><p><strong>Product</strong>:</p><ul><li>Representa o objeto complexo em construção.</li></ul><figure><img src="https://github.com/20241-ifba-saj-ads-ppr/seminario-1-YuriPepezin/blob/main/imagens/EstruturaBuilder2.png" alt="Exemplo de imagem" tabindex="0" loading="lazy"><figcaption>Exemplo de imagem</figcaption></figure>',27),l=e(`<h2 id="consequencias" tabindex="-1"><a class="header-anchor" href="#consequencias"><span>Consequências</span></a></h2><p>A seguir são apresentadas as conseqüências-chave da utilização do padrão Builder:</p><blockquote><p>Permite variar a representação interna de um produto. O objeto Builder fornece ao diretor uma interface abstrata para a construção do produto. Essa interface permite ao construtor ocultar a representação e a estrutura interna do produto, bem como o processo de montagem do produto. Como o produto é construído através de uma interface abstrata, tudo o que é necessário para mudar sua representação interna é definir um novo tipo de construtor.</p></blockquote><blockquote><p>O padrão Builder isola o código para construção e representação, melhorando a modularidade pelo encapsulamento da forma como um objeto complexo é construído e representado. Os clientes não precisam saber nada sobre as classes que definem a estrutura interna do produto, pois essas classes não aparecem na interface do Builder. Cada ConcreteBuilder contém todo o código necessário para criar e montar um tipo específico de produto. Esse código é escrito apenas uma vez; assim, diferentes Directors podem reutilizá-lo para construir variantes de produtos com o mesmo conjunto de partes.</p></blockquote><blockquote><p>O padrão Builder oferece um controle mais fino sobre o processo de construção. Ao contrário de outros padrões de criação que constroem produtos de uma só vez, o Builder constrói o produto passo a passo, sob o controle do diretor. Somente quando o produto está terminado o diretor o recupera do construtor. Dessa forma, a interface do Builder reflete o processo de construção do produto de maneira mais explícita do que outros padrões de criação. Isso proporciona um controle mais fino sobre o processo de construção e, consequentemente, sobre a estrutura interna do produto resultante.</p></blockquote><h2 id="implementacao" tabindex="-1"><a class="header-anchor" href="#implementacao"><span>Implementação</span></a></h2><h3 id="exemplo-do-builder-na-pratica" tabindex="-1"><a class="header-anchor" href="#exemplo-do-builder-na-pratica"><span>Exemplo do builder na Pratica</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Pessoa {

    private String nome;
    private String sobrenome;
    private String nick;
    private String email;

    private Pessoa(Builder builder) {
        this.nome = builder.nome;
        this.sobrenome = builder.sobrenome;
        this.nick = builder.nick;
        this.email = builder.email;
    }


    public String getNome() {
        return nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public String getNick() {
        return nick;
    }

    public String getEmail() {
        return email;
    }
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>   public static class Builder {
        private String nome;
        private String sobrenome;
        private String nick;
        private String email;

        public Builder nome(String nome) {
            this.nome = nome;
            return this;
        }

        public Builder sobrenome(String sobrenome) {
            this.sobrenome = sobrenome;
            return this;
        }

        public Builder nick(String nick) {
            this.nick = nick;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Pessoa build() {
            return new Pessoa(this);
        }
    }

    }
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="como-o-main-sem-o-builder" tabindex="-1"><a class="header-anchor" href="#como-o-main-sem-o-builder"><span>COMO O MAIN SEM O BUILDER</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Main {
    public static void main(String[] args) {
        // Criando objetos Pessoa usando o construtor
        Pessoa pessoa1 = new Pessoa(&quot;João&quot;, &quot;Silva&quot;, &quot;joaosilva&quot;, &quot;joao.silva@example.com&quot;);

        // Criando objetos Pessoa usando o construtor padrão e setters
        Pessoa pessoa2 = new Pessoa();
        pessoa2.setNome(&quot;Maria&quot;);
        pessoa2.setSobrenome(&quot;Oliveira&quot;);
        pessoa2.setNick(&quot;mariaoliveira&quot;);
        pessoa2.setEmail(&quot;maria.oliveira@example.com&quot;);
     }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="como-o-main-fica-com-o-builder" tabindex="-1"><a class="header-anchor" href="#como-o-main-fica-com-o-builder"><span>COMO O MAIN FICA COM O BUILDER</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class Main {
        public static void main(String[] args) {
            Pessoa pessoa = new Pessoa.Builder()
                                .nome(&quot;João&quot;)
                                .sobrenome(&quot;Silva&quot;)
                                .nick(&quot;joaosilva&quot;)
                                .email(&quot;joao.silva@example.com&quot;)
                                .build();
    
            
        }
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exemplo-do-uso-do-padrao-de-projeto-builder" tabindex="-1"><a class="header-anchor" href="#exemplo-do-uso-do-padrao-de-projeto-builder"><span>EXEMPLO DO USO DO PADRÂO DE PROJETO BUILDER</span></a></h2>`,14);function c(u,m){const o=i("Mermaid");return n(),r("div",null,[t,s(o,{id:"mermaid-121",code:"eJxLzkksLnbJTEwvSszlUgACsICCS2ZRanJJfpFCNVgQBHQVnEozc1JSixSSIDRcRluhLD8zRSE5P6+4pKg0uURDEyxVy4VkIEwvwjyoLrBhAYlFWHU55+clF6WWpBKtGyIVUJSfAnSHQnpqSVBqcWkOVrOhiiBCcP/q6trB3AqWgNlsU6Ori+4csAJ0J4IMgBkNAAegZSc="}),l])}const b=a(d,[["render",c],["__file","ApYuri.html.vue"]]),h=JSON.parse('{"path":"/includes/seminario-1-YuriPepezin/ApYuri.html","title":"","lang":"pt-BR","frontmatter":{"description":"Intenção O padrão de projeto Builder tem como objetivo separar a construção de um objeto complexo da sua representação, permitindo que o mesmo processo de construção crie difere...","head":[["meta",{"property":"og:url","content":"https://20241-ifba-saj-ads-ppr.github.io/blog-material-aula/blog-material-aula/includes/seminario-1-YuriPepezin/ApYuri.html"}],["meta",{"property":"og:site_name","content":"20241 PPR Blog das Aulas"}],["meta",{"property":"og:description","content":"Intenção O padrão de projeto Builder tem como objetivo separar a construção de um objeto complexo da sua representação, permitindo que o mesmo processo de construção crie difere..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/20241-ifba-saj-ads-ppr/seminario-1-YuriPepezin/blob/main/imagens/EstruturaBuilder2.png"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"article:author","content":"Leandro Souza"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://github.com/20241-ifba-saj-ads-ppr/seminario-1-YuriPepezin/blob/main/imagens/EstruturaBuilder2.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Souza\\",\\"url\\":\\"https://github.com/leandro-costa\\"}]}"]]},"headers":[{"level":2,"title":"Intenção","slug":"intencao","link":"#intencao","children":[]},{"level":2,"title":"Também conhecido como","slug":"tambem-conhecido-como","link":"#tambem-conhecido-como","children":[]},{"level":2,"title":"Motivação para o Padrão de Projeto Builder","slug":"motivacao-para-o-padrao-de-projeto-builder","link":"#motivacao-para-o-padrao-de-projeto-builder","children":[{"level":3,"title":"Complexidade na Criação de Objetos","slug":"complexidade-na-criacao-de-objetos","link":"#complexidade-na-criacao-de-objetos","children":[]},{"level":3,"title":"Diferença entre Construção e Representação","slug":"diferenca-entre-construcao-e-representacao","link":"#diferenca-entre-construcao-e-representacao","children":[]},{"level":3,"title":"Manutenção e Extensibilidade","slug":"manutencao-e-extensibilidade","link":"#manutencao-e-extensibilidade","children":[]},{"level":3,"title":"Código Mais Limpo e Legível","slug":"codigo-mais-limpo-e-legivel","link":"#codigo-mais-limpo-e-legivel","children":[]}]},{"level":2,"title":"Aplicabilidade","slug":"aplicabilidade","link":"#aplicabilidade","children":[]},{"level":2,"title":"Estrutura","slug":"estrutura","link":"#estrutura","children":[]},{"level":2,"title":"Consequências","slug":"consequencias","link":"#consequencias","children":[]},{"level":2,"title":"Implementação","slug":"implementacao","link":"#implementacao","children":[{"level":3,"title":"Exemplo do builder na Pratica","slug":"exemplo-do-builder-na-pratica","link":"#exemplo-do-builder-na-pratica","children":[]},{"level":3,"title":"COMO O MAIN SEM O BUILDER","slug":"como-o-main-sem-o-builder","link":"#como-o-main-sem-o-builder","children":[]},{"level":3,"title":"COMO O MAIN FICA COM O  BUILDER","slug":"como-o-main-fica-com-o-builder","link":"#como-o-main-fica-com-o-builder","children":[]}]},{"level":2,"title":"EXEMPLO DO USO DO PADRÂO DE PROJETO BUILDER","slug":"exemplo-do-uso-do-padrao-de-projeto-builder","link":"#exemplo-do-uso-do-padrao-de-projeto-builder","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.16,"words":948},"filePathRelative":"includes/seminario-1-YuriPepezin/ApYuri.md","autoDesc":true}');export{b as comp,h as data};
