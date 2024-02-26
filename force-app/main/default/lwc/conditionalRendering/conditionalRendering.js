import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    showMe='false';
    changeHandle(event){
        this.showMe=event.target.checked;
    }
}