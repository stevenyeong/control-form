import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public newValue: string;

  private formGroup = new FormGroup({});

  public ngOnInit() {

    const validatorArr = [];
    validatorArr.push(this.customValidator);

    this.formGroup.addControl('one', new FormControl('', Validators.compose(validatorArr)));

    this.formGroup.controls['one'].valueChanges.subscribe((data: any) => {
      console.log("FormControl valueChanged:", data);
    });


    this.formGroup.updateValueAndValidity();
    //this.formGroup.controls['one'].updateValueAndValidity();

  }

  public onUpdate(): void {
    console.log("onUpdate:", this.newValue);
    this.formGroup.controls['one'].setValue(this.newValue);

    console.log('One FormControl:', this.formGroup.controls['one'].status);

  }

  private customValidator(fc: FormControl) {
    let isValid = true;

    if (fc.value) {
      fc.value.split('').forEach((char: any) => {
        if (char === 'x') {
          isValid = false;
        }
      });
    }
    return isValid ? null : { customValidator: { valid: false } };
  }

}
