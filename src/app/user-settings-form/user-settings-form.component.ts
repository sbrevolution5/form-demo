import { UserSettings } from './../data/user-settings';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings : UserSettings = {
    name: 'Seth',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'notes go here!'
  }
  userSettings : UserSettings={...this.originalUserSettings};
  subscriptionTypes= ['Monthly', 'Annual', 'Lifetime']
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log('in onSubmit: ', form.valid);
  }
  onBlur(field: NgModel){
    console.log('in onBlur:', field.valid)
  }

}
