import { Component} from "@angular/core";
import { Dog } from "./model/dog";
import { MockDogs } from "./model/dog-data";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.css"],
  templateUrl: `app.component4.html`
})
export class AppComponent {
  mockDogs: Dog[] = MockDogs.SIX;
  panelStatus: string;

  onMessageFromDetail(event: any[]) {
    var message: string = event[0];
    var dogActedOn: Dog = event[1];
    var paidAmount: number = event[2];
    console.info("Received message", event[0], event[1]);
    this.panelStatus =
      message + " of $" + paidAmount + " for " + dogActedOn.name;
  }
}
