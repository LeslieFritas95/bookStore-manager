class Auto extends Vehicle{
    constructor(nome, fondatore, stato, settore, fondazione, posti){
        super(nome, fondatore, stato, settore, fondazione, 4)
        this.posti = posti       
    }

    toString(){
        const pubString = super.toString()+" \n posti:  "+this.posti
        return pubString;
    }
}
