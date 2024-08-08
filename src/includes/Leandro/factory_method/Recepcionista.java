public abstract class Recepcionista {
    public abstract Placa factoryMethod();
 
    public void mostrarPlaca() {
        Placa product = factoryMethod();
        System.out.println(product.sayHi());
    }
 }
 
 interface Placa {
    String sayHi();
 }

 class PlacaPortugues implements Placa{
    public String sayHi(){
        return "bem vindo";
    }
 }

 class PlacaEspanhol implements Placa{
    public String sayHi(){
        return "Bienvenido";
    }
 }

 class RecepcionistaTAM extends Recepcionista{
    public Placa factoryMethod(){
        new PlacaEspanhol();
    } 
 }
 
 class RecepcionistaGol extends Recepcionista{
    public Placa factoryMethod(){
        new PlacaPortugues();
    } 
 }
 

 main{
    Recepcionista r1 = new RecepcionistaGol();
    r1.mostrarPlaca();
    r1 = new RecepcionistaTAM();
    r1.mostrarPlaca();
 }