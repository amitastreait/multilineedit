import { LightningElement, api, track } from 'lwc';

export default class Clocklwc extends LightningElement {

    @track currentTime = new Date();

    @api
    refresh(){
        this.currentTime = new Date();
    }
    
}