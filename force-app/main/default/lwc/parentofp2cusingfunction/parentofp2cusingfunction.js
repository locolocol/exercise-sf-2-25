import { LightningElement } from 'lwc';

export default class Parentofp2cusingfunction extends LightningElement {
    handleclick(){
        this.template.querySelector("c-childofp2cusingfunction").refresh();
    }
}