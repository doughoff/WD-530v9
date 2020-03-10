import { Component, ViewEncapsulation } from '@angular/core';
//-------------------------------------------  optional child component
@Component({
    selector: 'ignored-stuff',
    templateUrl:'ignoring-child.html'
 })
 export class IgnoringChild { }
 //-------------------------------------------  optional child component
 @Component({
     selector: 'unorganized-stuff',
     templateUrl:'organizing-child.html',
     styles: ['p {color: cadetblue; font-weight: bold; font-size: 1.3rem} '], 
     encapsulation: ViewEncapsulation.None
 
 })
 export class OrganizingChild { }
 //-----------------------------------------------  root (app) component
 @Component({
    selector: 'app-root',
    styleUrls: ['app.component.css'],
    templateUrl : `app.component.html`
})
export class AppComponent { }
