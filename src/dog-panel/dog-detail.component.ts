import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {Dog}                from './model/dog';

@Component({
    selector: 'dog-detail',
    templateUrl: './dog-detail.component.html',
    styles: [
        '.c-imagePlacement1 {margin:1em 1em 3em 0; max-height:5em}',
        '.c-imagePlacement2 {margin:.5em .5em 1.5em 0; max-height:2.5em}',
        '.tiny.button { margin:0; padding: .6em 1em;}'
    ]
})
export class DogDetail {
    @Input('dogIn') _dog: Dog;
    @Output() messageFromDetail: EventEmitter<any> = new EventEmitter();
  
    get dog() { return this._dog; }
    set dog(dogIn: Dog) {
        console.info('Updating from', this.dog);
        this._dog = dogIn;
        console.info('Updated to', dogIn);
    }
    public payBill(event: MouseEvent) {
        console.info('payBill received event:', event);
        // event.target is typed as EventTarget, an interface for Element
        if (event.target instanceof Element) {
            // parentElement can't be accessed unless it's cast to an Element
            let eventAncestor = (<Element>event.target.parentElement.parentElement);
            console.info('eventParent\'s parent:', eventAncestor);     
            let dogIndex: string = eventAncestor.querySelector('#dogIndex').textContent;
            console.info('scraped Dog index = ', dogIndex); 
        }
        
        let paidAmount = this.dog.balance;
        this.messageFromDetail.emit(['Paid bill', this.dog, paidAmount]);
        this.dog.balance = 0;
        console.info('Paid bill for', this.dog);
    }
}
