import { LightningElement, api } from 'lwc';

export default class Contacttilebubbling extends LightningElement {
    @api contact;

    handleSelect(event) {
        event.preventDefault();
        const selectEvent = new CustomEvent('contactselect', {
            bubbles: true,
            composed: true
        });
        // Fire the custom event
        this.dispatchEvent(selectEvent);
    }
}