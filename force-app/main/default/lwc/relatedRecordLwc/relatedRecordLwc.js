import { LightningElement, wire, api } from 'lwc';
//import your method 
import opplist from '@salesforce/apex/RelatedRecordLwcCtrl.oppList';

export default class RelatedRecordLwc extends LightningElement {
    // intended to receive a record Id from a parent component.
    @api recordId;

    @wire(opplist, { recId: '$recordId' })
    // records will hold the all record of the opp
    records;
}