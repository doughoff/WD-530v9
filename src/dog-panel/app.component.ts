import { Component } from "@angular/core";
import { Dog } from "./model/dog";
import { MockDogs } from "./model/dog-data";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.css"],
  templateUrl: `app.component4.html`
})
export class AppComponent {
  mockDogs: Dog[] = MockDogs.SIX;
}
