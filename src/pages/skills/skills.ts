import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import {EducationPage} from '../education/education';

@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
//See education.ts. Everything is there
export class SkillsPage {

  SkillRows: FirebaseListObservable<any[]>;
  newSkill="";

  constructor(public fbProvider:FirebaseProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.SkillRows = this.fbProvider.getSkillRows();
  }
  addSkill() {
    this.fbProvider.addSkill(this.newSkill);
  }
 
  removeSkill(id) {
    this.fbProvider.removeSkill(id);
  }
  goEducation(){
    this.navCtrl.push(EducationPage)
  }

}
