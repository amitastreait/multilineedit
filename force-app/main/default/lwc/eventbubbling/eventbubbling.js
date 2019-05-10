/* eslint-disable no-console */
import { LightningElement , track, wire } from 'lwc';
import fetchContacts from '@salesforce/apex/ContactController.fetchContacts';
export default class Eventbubbling extends LightningElement {
    @track selectedContact;

    @wire(fetchContacts) contacts;

    handleContactSelect(event) {
        console.log(' Bubbled to Parent');
        this.selectedContact = event.target.contact;
        
    }
}