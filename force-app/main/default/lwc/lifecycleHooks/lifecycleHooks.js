import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement {
    myList=["a","b",123];
    constructor(){
        super();
       console.log("Constructor"); 
    }
    connectedCallback(){
        this.myList.push("SalesForce Locol");
        console.log("Connected CallBack");
    }
    disconnectedCallback(){
        this.myList=[];
        console.log("Disconnected CallBack");
    }
    renderedCallback(){
        console.log("Rendered Callback");
    }
    errorCallback(error,stack){
        console.log("Error Call back"+error);
    }
}