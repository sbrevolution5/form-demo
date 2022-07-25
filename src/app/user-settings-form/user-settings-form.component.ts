import { DataService } from './../data/data.service';
import { UserSettings } from './../data/user-settings';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings : UserSettings = {
    name: 'Seth',
    emailOffers: true,
    interfaceStyle: 'Dark',
    subscriptionType: 'Annual',
    notes: 'notes go here!'
  }
  startDate: Date;
  userSettings : UserSettings={...this.originalUserSettings};
  subscriptionTypes= new Observable<string[]>();
  postError = false;
  postErrorMessage = '';
  constructor(private dataService: DataService) {
    this.startDate = new Date();
  }
  singleModel = 'On';
  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();

  }
  onHttpError(errorResponse: any){
    console.log('error: ',errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.message;
  }
  onSubmit(form: NgForm){
    console.log('in onSubmit: ', this.userSettings.interfaceStyle);
    if(form.valid){

      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success', result),
        error => this.onHttpError(error)
        );
      }
  }
  onBlur(field: NgModel){
    console.log('in onBlur:', field.valid)
  }

}

