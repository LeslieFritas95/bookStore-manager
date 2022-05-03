///// PROPERTIES:   TITLE, AUTHOR, GENRE, PRICE, COPIES, PAGE, DISCOUNT, YOP
/// METHODS:  
/// TOSTRING()
/// GETPUBLICPRICE() - CALCOLARE PREZZO AL PUBBLICO [PRICE+10%-DISCOUNT+30%]


class Book extends Publication {
    constructor (title, author, editor, genre, price, copies, pages, discount, yop){
        super(title, editor, genre, price, copies, discount, 10)
        this.author = author;
        this.pages = pages;
        this.yop = yop
    }
    toString(){
        
        const bookString = super.toString()+'\n'+
                           "Author: " + this.author + "\n" + 
                           "Pages: " + this.pages + "\n" +
                           "Year of publishing: " + this.yop;
                                
        return bookString;
    }
    // getPublicPrice(){
    //     return this.price+(this.price/100)*10-(this.price/100)*this.discount+(this.price/100)*30;
    //     const getPublicPriceWithoutTaxt = super.getPublicPriceWithoutTaxt();
    //     const taxt = this.price * 0.1 ;
    //     const publicPrice = PublicPriceWithoutTaxt+taxt;
        //    const rounderPrice = this.rounderPrice(publicPrice, 2);
        //    return rounderPrice

    // }
}

