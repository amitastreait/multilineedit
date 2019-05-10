/* eslint-disable no-console */
import { LightningElement, track, wire } from 'lwc';
import fetchContacts from '@salesforce/apex/ContactController.fetchContacts';
export default class Contactlist extends LightningElement {

    @track contacts;
    @track error;
    @track selectedContact;

    @wire(fetchContacts)
        wiredContacts({error, data}){
            if(error){
                this.error = error;
                this.data = undefined;
            }
            if(data){
                this.contacts = data;
                this.error = undefined;
            }
        }
    
    handleSelect(event){
        event.preventDefault();
        const selectedContactId = event.detail;
        console.log(' selectedContactId ', selectedContactId);
        const selectedItem = this.contacts.find(
            contact => contact.Id === selectedContactId
        )

        this.selectedContact = selectedItem;
        console.log(' Selected Item ', this.selectedContact);

    }
}