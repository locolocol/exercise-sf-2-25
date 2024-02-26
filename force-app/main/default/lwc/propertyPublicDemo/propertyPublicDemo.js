import { LightningElement, api } from 'lwc';

export default class PropertyPublicDemo extends LightningElement {
    message ='Public Propety';
    @api recordId;
}