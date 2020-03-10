import { Component, Input } from '@angular/core';
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

    get dog() { return this._dog; }
    set dog(dogIn: Dog) {
        console.info('Updating from', this.dog);
        this._dog = dogIn;
        console.info('Updated to', dogIn);
    }
    public payBill(event: MouseEvent) {
        console.info('PayBill received event', event);
        this.dog.balance = 0;
        console.info('Paid bill for', this.dog);
    }
}
