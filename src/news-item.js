import {customAttribute, bindable, inject} from 'aurelia-framework';

export class NewsItemCustomElement {
  @bindable text;
  @bindable link;
  @bindable blurb;

  constructor() {
   
  }

  attached() {

  }
  
}