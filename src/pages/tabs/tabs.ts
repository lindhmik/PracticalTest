import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//imported pages:

import { ProjectworkPage } from './../projectwork/projectwork';
import { ExtraActivitiesPage } from './../extra-activities/extra-activities';
import { ContactInformationPage } from './../contact-information/contact-information';
import { TargetedcvPage } from './../targetedcv/targetedcv';
import { AboutPage } from './../about/about';
import { SkillsPage } from './../skills/skills';
import { PersonaldetailsPage } from '../personaldetails/personaldetails';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  //Defines which page is which
  tab1Root: any = AboutPage;
  tab6Root: any = ProjectworkPage;
  tab4Root: any = ExtraActivitiesPage;
  tab2Root: any = TargetedcvPage;
  tab3Root: any = ContactInformationPage;
  tab5Root:any = PersonaldetailsPage;
  tab7Root:any = SkillsPage;
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
