///// PROPERTIES:   TITLE, AUTHOR, GENRE, PRICE, COPIES, PAGE, DISCOUNT, YOP
/// METHODS:  
/// TOSTRING()
/// GETPUBLICPRICE() - CALCOLARE PREZZO AL PUBBLICO [PRICE+10%-DISCOUNT+30%]


class extends Publication {
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
    getPublicPrice(){
        const this.getPublicPriceWithoutTaxt = super.getPublicPriceWithoutTaxt();
        const taxt = this.price * 0.1 ;
        const getPublicPriceWithoutTaxt =  this.price - discount + margin;
        return getPublicPriceWithoutTaxt;

    }
}

