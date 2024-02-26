import { LightningElement } from 'lwc';

export default class BindingHTMLDynamic extends LightningElement {
    myValue;
    handleChange(event){
        this.myValue =event.target.value;
    }
}