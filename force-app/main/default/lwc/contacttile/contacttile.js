import { LightningElement, api } from 'lwc';

export default class Contacttile extends LightningElement {
    @api contact;

    handleSelect(event){
        event.preventDefault();
        const selectEvent = new CustomEvent(
            'select',
            {
                detail : this.contact.Id
            }
        );
        this.dispatchEvent(selectEvent);
    }
}