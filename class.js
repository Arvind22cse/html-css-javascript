class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    display(){
        console.log(`product is: ${this.name}`);
        console.log(`price is $${this.price}`);
    }
    calculateTot(salestax){
        return this.price+(this.price*salestax);
    }
}
const salestax=0.05;
const prod1=new Product("Shirt",19.99);
const prod2=new Product("pant",22.50);
const prod3=new Product("Underwear",100.00);

prod1.display();
const tot=prod1.calculateTot(salestax);
console.log(`the total price (with tax): $${tot.toFixed(2)}`);

prod2.display();
const tot1=prod2.calculateTot(salestax);
console.log(`the total price (with tax): $${tot1.toFixed(2)}`);

prod3.display();
const tot2=prod3.calculateTot(salestax);
console.log(`the total price (with tax): $${tot2.toFixed(2)}`);
