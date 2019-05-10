/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';

export default class Contactbubble extends LightningElement {
    @track selectedContact;

    handleContactSelect(event) {
        console.log(event.target.contact);
        this.selectedContact = event.target.contact;
        console.log(' Bubbled to Grand Parent ');
    }
}