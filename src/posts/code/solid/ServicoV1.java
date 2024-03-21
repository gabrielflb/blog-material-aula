public class Servico{
    private PersistenciaPessoa persistenciaPessoa = new PersistenciaPessoa();

    //..
    public void salvar(Pessoa pessoa){
        persistenciaPessoa.salvar(pessoa);
    }
}

public class PersistenciaPessoa {
    void salvar(Pessoa pessoa){
        //
    }
}