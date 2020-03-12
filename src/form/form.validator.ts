import {FormControl} from '@angular/forms'; 
import {Directive} from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

interface ValidationResult {
    [key: string]: any;
}

export class ValidateCity {	
    public static notWichita_notStartWithK_min3(control: FormControl): ValidationResult {
        var errors = {};
        if (!control.value) {
            errors['no city'] = true;
        }
        if (control.value.match(/Wichita/i)) {
            errors["I don't like Wichita"] = true;
        }
        if (control.value.match(/^K.*/i)) {
            errors["Don't start with a K"] = true;
        }
        if (control.value.length < 3) {
            errors["I need more letters"] = true;
        }
        for (var anyError in errors) {
            if (errors.hasOwnProperty(anyError)) {
                return errors;
            }
        }
        return null;
    }
}
export class ValidationUtilities {
    public static getErrorString(errors: ValidationResult): String {
        var separator = '';
        var errorString = '';
        for (let key in errors) {
            if (errors[key]) {
                // only use error message when true
                errorString += separator + key;
                separator = ', ';
            }
        }
        return errorString;
    }
}
@Directive({
    selector: '[grumpy-city]',
    providers: [
        {
          provide : NG_VALIDATORS,
          useValue: ValidateCity.notWichita_notStartWithK_min3, 
          multi: true
    }]
  })
  export class GrumpyCityValidator {}
  
