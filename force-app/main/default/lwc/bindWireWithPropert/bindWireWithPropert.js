import { LightningElement, wire } from 'lwc';
// This is my Apex Class
import getAcclist from '@salesforce/apex/AccController.getAcclist';

export default class BindWireWithPropert extends LightningElement {
    // bindign to accounts
    @wire(getAcclist) accounts;

}