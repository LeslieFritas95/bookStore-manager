
class Magazine extends Publication{
    constructor(title, publisher, periodicy, realease, type, price, discount, copies, releaseDate){
        super(title, publisher, type, price,  discount, copies)
        this.periodicy= periodicy;
        this.release= realease;
        this.releaseDate = releaseDate;

    }
    getPublicPrice(){
        return this.price+(this.price/100)*20-(this.price/100)*this.discount+(this.price/100)*30;
    }

    toString(){
        const magazineString = super.toString() + '\n' + 
                             "Periodicy: " + this.periodicy + "\n" + 
                             "Type: " + this.type + "\n" +
                             "Release Date: " + this.releaseDate;
                                
        return magazineString;
    }

    getPublicPrice(){

        const getPublicPriceWithoutTaxt = super.getPublicPriceWithoutTaxt();
        const taxt = this.price* 0.2 ;
        const publicPrice=  getPublicPriceWithoutTaxt + taxt;
        
        return getPublicPriceWithoutTaxt;
    }
}