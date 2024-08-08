package src.includes.multiton.leandro;

public enum Configuracao {
    localDb("jdbc:mysql://localhost:3306/meuBanco",
                "admin",
                "senha123"),
    remotoDb("jdbc:mysql://remotehost:3306/outroBanco",
                "root",
                "rootpassword");

    private final String urlBancoDeDados;
    private final String usuario;
    private final String senha;

    private Configuracao(String urlBancoDeDados, String usuario,String senha){
        this.urlBancoDeDados = urlBancoDeDados;
        this.usuario = usuario;
        this.senha = senha;
    }

    public String getSenha() {
        return senha;
    }

    public String getUrlBancoDeDados() {
        return urlBancoDeDados;
    }

    public String getUsuario() {
        return usuario;
    }
    public static void main(String[] args) {
        Configuracao.localDb.getSenha();
    }
    
}