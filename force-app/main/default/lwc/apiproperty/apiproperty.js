import { LightningElement, api } from 'lwc';

export default class Apiproperty extends LightningElement {
    @api progress = 10;

    handlePercentageChange(event) {
        this.progress = event.target.value;
    }
}