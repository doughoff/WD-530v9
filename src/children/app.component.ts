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
 //-------------------------------------------  optional child component
 @Component({
    selector: 'headline-summary-organizer',
    templateUrl:'headlines.html',
    styles: ['p {color: cadetblue; font-weight: bold; font-size: 1.3rem} '], 
    encapsulation: ViewEncapsulation.None

})
export class HeadlineSummaryOrganizer { }
 //-------------------------------------------  optional child component
 @Component({
    selector: 'details-organizer',
    templateUrl:'details.html',
    styles: ['h1,h2,h3 {font-weight: normal; font-size: 1em'], 
    encapsulation: ViewEncapsulation.None

})
export class DetailsOrganizer { }
 //-----------------------------------------------  root (app) component
 @Component({
    selector: 'app-root',
    styleUrls: ['app.component.css'],
    templateUrl : `app.component.html`
})
export class AppComponent { }
