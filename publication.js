class Publication{
 constructor(title, publisher, type, price, discount, copies, discount, tax){
    this.title = title;
    this.publisher = publisher;
    this.type = type;
    this.price = price;
    this.discount = discount;
    this.copies = copies;
           
 }
 
 toString(){
   const pubString ="Title: " + this.title + "\n" + 
                    "Publisher: " + this.publisher + "\n" + 
                    "Release: " + this.release + "\n" +
                    "Type: " + this.type + "\n" +
                    "Price: " + "€" + this.getPublicPrice() + "\n" +
                    "Discount: " + this.discount+"%" + "\n" +
                    "Copies: " + this.copies + "\n" +
    
   return pubString;



 }
    getPublicPrice{
        const discount = this.price * this.discount / 100;
        const margin = this.price * 0.3;
        const taxt = this .price * this.taxt /100
        const PublicPrice= this.price + taxt - discount + margin;
        const roundedPublicPice = this.round(PublicPrice, 2)
        return getPublicPriceWithoutTaxt;

    }
    round (number, decimalPlace){
        const roundedString = number.toFixed (decimalPlace);
        const roundedNumber = parseFloat(roundedString);
        return roundedNumber;
    }
}