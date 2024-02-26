import { LightningElement } from 'lwc';

export default class GetterExpression extends LightningElement {
    firstName='';
    lastName='';
    changeHandler(event){
        const field= event.target.name;
        if(field ==='firstName'){
            this.firstName=event.target.value;
        }else{
            this.lastName=event.target.value;
        }
    }
    get uppercaseName(){
        // We use backticks (``) for template for template literals in JavaScript provides a convenient
        // way to create strings that can include variables and expressions. 
        return `${this.firstName} ${this.lastName}`.toUpperCase();
     }
}