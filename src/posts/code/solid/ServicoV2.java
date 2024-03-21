public class Servico{
    private Persistencia persistenciaPessoa;

    public Servico(Persistencia persistenciaPessoa){
        this.persistenciaPessoa = persistenciaPessoa;
    }

    //..
    public void salvar(Pessoa pessoa){
        persistenciaPessoa.salvar(pessoa);
    }
}

public class PersistenciaPessoa implements Persistencia{
    void salvar(Pessoa pessoa){
        //
    }
}