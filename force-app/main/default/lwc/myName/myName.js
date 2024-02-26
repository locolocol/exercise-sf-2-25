import { LightningElement } from 'lwc';

export default class MyName extends LightningElement {
    firstName;
    nameHandler(event){
        // This sonra degiskeni eklememmiz lazim.
        this.firstName=event.target.value;
    }
}