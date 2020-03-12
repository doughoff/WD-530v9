import { Component, Input } from '@angular/core';
import {Dog}            from './model/dog';
import {MockDogs}       from './model/dog-data';

//----------------------------------------  optional child component
@Component({
    selector: 'dog-name',
    styles: [
        '.dog-nameContainer {margin:.4rem; display: inline-block; text-align: right; }',
        '.dog-breed {font-size: .7rem; }'
    ],
    template: `
    <div class='dog-nameContainer'>
        <div class='dog-name'>{{dogNameIn.name | uppercase }}</div>
        <div class='dog-breed'>{{dogNameIn.breed}}</div>
    </div>
`
})
export class DogName {
    @Input( ) dogNameIn: Dog;
}
//-------------------------------------------  optional child component
@Component({
    selector: 'dog-list',
    templateUrl: 'doglist.component.html'
})
export class DogList { 
     @Input('dogsToChildAgain') dogsFromParent: Dog[];
}
//------------------------------------------  optional child component
@Component({
    selector: 'input-child',
    templateUrl: 'inputchild.component.html'
})
export class InputChild {
    @Input('dogsToChild') dogsFromParent: Dog[];
    @Input( ) childVariableIn: string;
    @Input( ) childTextIn: string;
}
//----------------------------------------------  root component
@Component({
    selector: 'app-root',
    styleUrls: ['app.component.css'],
    templateUrl : `app.component.html`
})
export class AppComponent{
    aNumber: number = 123;
    dogs = MockDogs.SIX;
}
