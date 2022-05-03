class Moto extends Vehicle{
    constructor(nome, fondatore, stato, settore, fondazione){
        super(nome, fondatore, stato, settore, fondazione, 2)
    }
    toString(){
        const pubString = "Moto: \n"+super.toString()
        return pubString;
    }
}