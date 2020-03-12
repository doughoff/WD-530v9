import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Name, Address } from "./model/formSchemas";
import { States } from "./model/states";
import {ValidateCity, ValidationUtilities} from './form.validator';

@Component({
  selector: "name-address-form",
  styleUrls: ["name-address.component.css"],
  templateUrl: `name-address.component.4.html`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameAddressForm implements OnInit {
  submittedDataText: string;
  data: any;
  private _name: Name;
  private _address: Address;
  nameAddressFormGroup: FormGroup;
  private builder: FormBuilder;
  errorMessages: any;
  whenValidStateFor: any;
  states = States.withAbbreviations;

  constructor(builder: FormBuilder) {
    this.builder = builder;
    this._name = new Name();
    this._address = new Address();
    this.buildFormGroup();
    this.setErrorMessages();
    this.updateValidState();
  }
  get name(): Name {
    return this._name;
  }
  set name(arg: Name) {
    this._name = arg;
  }
  get address(): Address {
    return this._address;
  }
  set address(arg: Address) {
    this._address = arg;
  }

  submittingForm1($event, data): void {
    $event.preventDefault();
    console.log("Data 1 was submitted.");
    this.submittedDataText = data.nameFirst + " " + data.nameLast;
  }
  showEachPropertyOf(data): void {
    for (var eachKey in data) {
      console.info(eachKey, "=", data[eachKey]);
    }
  }
  showStringified(data): void {
    console.info("Stringified data:", JSON.stringify(data, null, 2));
  }

  submittingForm2($event, data): void {
    $event.preventDefault();
    console.info("Form 2 was submitted.");
    console.log("Submitted data", data);
    console.info("Model is now: ", this.name, this.address);
    this.name.reset();
    this.address.reset();
    // data.forEach(field => { field.value = ''; });
  }
  submittingForm3($event, formData) {
    $event.preventDefault();
    console.info("Form 3 was submitted.");
    console.info("Model is now: ", this.name, this.address);
    console.info("ngControl form data:", JSON.stringify(formData.value));
  }

  submittingForm4(formData) {
    console.info("Form 4 was submitted.");
    console.info("form data:", JSON.stringify(formData.value));
    console.info(
      "nameAddressFormGroup data:",
      JSON.stringify(this.nameAddressFormGroup.value)
    );
    let keysAndValues: string = "";
    for (const key in formData.controls) {
      keysAndValues += key + " = " + formData.controls[key].value + "\n";
    }
    console.info(keysAndValues);
  }

  private buildFormGroup(): void {
    this.nameAddressFormGroup = this.builder.group({
      nameFirst: [this.name.first, Validators.required],
      nameLast: [
        this.name.last,
        [Validators.required, Validators.minLength(3)]
      ],
      addressStreet: [this.address.street, Validators.required],
      addressCity: [
        this.address.city
        // ,ValidateCity.notWichita_notStartWithK_min3
      ],
      addressState: [this.address.state, Validators.maxLength(2)],
      addressZip: [
        this.address.zip,
        [Validators.required, Validators.pattern("[0-9]{5}(-[0-9]{4})?")]
      ]
    });
    this.nameAddressFormGroup.controls['addressCity'].validator = ValidateCity.notWichita_notStartWithK_min3; 
  }
  showGroupDataInOneLine(formData: FormGroup) {
    return (
      formData.controls["nameFirst"].value +
      " " +
      formData.controls["nameLast"].value +
      ", " +
      formData.controls["addressStreet"].value +
      ", " +
      formData.controls["addressCity"].value +
      ", " +
      formData.controls["addressState"].value +
      " " +
      formData.controls["addressZip"].value
    );
  }
  updateValidState(): void {
    var groupControls = this.nameAddressFormGroup.controls;
    this.whenValidStateFor = {
      nameFirst:
        groupControls["nameFirst"].valid || groupControls["nameFirst"].pristine,
      nameLast:
        groupControls["nameLast"].valid || groupControls["nameLast"].pristine,
      addressStreet:
        groupControls["addressStreet"].valid ||
        groupControls["addressStreet"].pristine,
      addressCity:
        groupControls["addressCity"].valid ||
        groupControls["addressCity"].pristine,
      addressState:
        groupControls["addressState"].valid ||
        groupControls["addressState"].pristine,
      addressZip:
        groupControls["addressZip"].valid ||
        groupControls["addressZip"].pristine
    };
    this.setErrorMessages();
  }
  private setErrorMessages(): void {
    this.errorMessages = {
      nameFirst: "required",
      nameLast: "Use at least 3 characters",
      addressStreet: "required",
      addressCity: ValidationUtilities.getErrorString(this.nameAddressFormGroup.controls ['addressCity'].errors),
      addressState: "x2",
      addressZip: "5 or 5-4 digits"
    };
  }
  showForm(form, event): void {
    console.info(form, event);
    this.updateValidState();
    console.info(this.whenValidStateFor);
    event.preventDefault();
  }

  ngOnInit() {
    this.nameAddressFormGroup.valueChanges.subscribe(value => {
      this.updateValidState();
    });
  }
}
