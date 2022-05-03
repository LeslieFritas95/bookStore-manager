class Vehicle{
    constructor(nome, fondatore, stato, settore, fondazione, ruote){
       this.nome = nome;
       this.fondatore = fondatore;
       this.stato = stato;
       this.settore = settore;
       this.fondazione = fondazione;
       this.ruote = ruote;
    }
    
    toString(){
      const pubString = "Nome: " + this.nome + "\n" + 
                       "Fondatore: " + this.fondatore + "\n" + 
                       "Stato: " + this.stato +"\n" +
                       "Settore: " + this.settore +"\n" +
                       "Fondazione: " + this.fondazione +"\n" +                      
                       "Ruote: " + this.ruote;
       
        return pubString;
    }
}