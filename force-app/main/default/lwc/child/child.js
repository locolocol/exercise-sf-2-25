import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    constructor(){
         super();
    console.log("### Constructor of Child");
    }
    connectedCallback(){
        console.log("### Connected Call Back");
    }
    renderedCallback(){
        console.log("###Rendered CallBack");
    }
}