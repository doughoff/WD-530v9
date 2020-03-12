import { Component} from "@angular/core";
import { Dog } from "./model/dog";
import { MockDogs } from "./model/dog-data";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.css"],
  templateUrl: `app.component.html`
})
export class AppComponent {
  mockDogs: Dog[] = MockDogs.SIX;
  panelStatus: string;
  dog: Dog = new Dog(456.00,'Test dog', 1, 'Pug',true,new Date() );

  onMessageFromDetail(event: any[]) {
    var message: string = event[0];
    var dogActedOn: Dog = event[1];
    var paidAmount: number = event[2];
    console.info("Received message", event[0], event[1]);
    this.panelStatus =
      message + " of $" + paidAmount + " for " + dogActedOn.name;
  }
}
