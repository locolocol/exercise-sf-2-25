/* import { LightningElement, track, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import PAYMENT_OBJECT from '@salesforce/schema/Payment__c';

export default class StatementPayment extends LightningElement {
    @track selectedPaymentMethod = '';
    @track paymentMethods = [ ];
  
  
  /*
    @track showCheckFields = false;
    @track showCreditCardFields = false;
    @track showAmountField = false;
    @track showBillingFields = false;
    @track checkAccountNumber = '';
    @track checkRoutingNumber = '';
    @track creditCardNumber = '';
    @track expirationMonth = '';
    @track expirationYear = '';
    @track expirationYears = [ ];
    
    /*

    @track securityCode = '';
    @track amount = '';
    @track billingName = '';
    @track billingStreet = '';
    @track billingCity = '';
    @track billingState = '';
    @track billingPostalCode = '';

    @wire(getRecord, { recordId: '$recordId', fields: [...] })
    payment;

    handlePaymentMethodChange(event) {
        this.selectedPaymentMethod = event.detail.value;
        // Implement logic to show relevant payment fields based on the selected payment method
    }

    handleSavePayment() {
        const fields = {};
        fields.Id = this.payment.data.id;
        // Populate the fields based on the selected payment method and input values

        const recordInput = { fields };
        updateRecord(recordInput)
            .then(() => {
                // Handle success
            })
            .catch(error => {
                // Handle error
            });
    }

    get isSaveDisabled() {
        // Implement logic for enabling/disabling save button based on input validation
        return !( Add input validation logic );

        
    }
} */