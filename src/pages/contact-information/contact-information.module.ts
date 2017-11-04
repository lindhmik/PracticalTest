import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactInformationPage } from './contact-information';

@NgModule({
  declarations: [
    ContactInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactInformationPage),
  ],
})
export class ContactInformationPageModule {}
