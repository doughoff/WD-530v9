import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    styleUrls: ['app.component.css'],
    templateUrl : `app.component.html`
})
export class AppComponent {
    private title =  'app works!';
    private _property1  : string;

    constructor() {
        this._property1 = 'a property from the constructor';
    }
    public get property1(): string {
        return this._property1 + ' from the accessor';
      }
}
