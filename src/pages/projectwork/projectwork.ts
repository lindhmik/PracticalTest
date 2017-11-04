import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { ExtraActivitiesPage } from '../extra-activities/extra-activities';

//See education.ts. Everything is there
@IonicPage()
@Component({
  selector: 'page-projectwork',
  templateUrl: 'projectwork.html',
})
export class ProjectworkPage {

  ProjectRows: FirebaseListObservable<any[]>;
  newProject="";

  constructor(public firebaseProvider:FirebaseProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.ProjectRows = this.firebaseProvider.getProjectRows();
  
  }
  addProject() {
    this.firebaseProvider.addProject(this.newProject);
  }
 
  removeProject(id) {
    this.firebaseProvider.removeProject(id);
  }

  goActivity() {
    this.navCtrl.push(ExtraActivitiesPage);
  }


}
