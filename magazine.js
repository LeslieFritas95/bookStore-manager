
class magazine extends Publication{

    constructor(title, publisher, periodicy, realease, type, price, discount, copies, releaseDate){
        super(title, publisher, type, price,  discount, 20)
        this.periodicy= periodicy;
        this.release= realease;
        this.releaseDate = releaseDate;

    }

    toString() {

        const magazineString = super.toString() + '\n' + 
                             "Periodicy: " + this.realease + "\n" + 
                             "Type: " + this.periodicy + "\n" +
                             "Release Date: " + this.releaseDate;
                                
        return magazineString;
    }

    // getPublicPrice(){

    //     const getPublicPriceWithoutTaxt = super.getPublicPriceWithoutTaxt();
    //     const taxt = this.price* 0.2 ;
    //     const publicPrice=  getPublicPriceWithoutTaxt + taxt;
    //     const roundedPrice = this.round(publicPrice, 2);
        
    //     return roundedPrice;
    // }
}