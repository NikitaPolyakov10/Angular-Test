import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('Москва', Validators.required),
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    console.log('Form', this.form);
    const formData = { ...this.form.value };
    console.log('Form data', formData);
  }

  setCapital() {
    const cityMap: any = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск',
    };

    const cityKey = this.form.get('address')?.get('country')?.value;
    const city = cityMap[cityKey];

    this.form.patchValue({
      address: { city: city },
    });
  }

}
