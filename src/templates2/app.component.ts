import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  styleUrls: ["app.component.css"],
  templateUrl: `app.component.html`
})
export class AppComponent {
  private _src: string;
  private _alt: string;
  private needsBorder: boolean;
  private isSuccess: boolean;
  private isHidden: boolean;
  private isFourColumns: boolean;

  constructor() {
    this._src =
      "http://www.dogbreedplus.com/dog_names/images/funny-dog-names.jpg";
    this._alt = "funny dog";
    this.needsBorder = true;
    this.isSuccess = true;
    this.isHidden = false;
    this.isFourColumns = true;
  }
  get src(): string {
    return this._src;
  }
  get alt(): string {
    return this._alt;
  }
}
