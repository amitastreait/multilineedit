/* eslint-disable no-alert */
import { LightningElement } from 'lwc';

export default class Apifunction extends LightningElement {

    refreshTime(){
        //alert(' Refresh Time Clicked ');
        this.template.querySelector('c-clocklwc').refresh();
    }
}