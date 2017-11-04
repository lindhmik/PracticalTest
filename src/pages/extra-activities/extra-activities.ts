import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { TargetedcvPage } from '../targetedcv/targetedcv';
//See education.ts .. I commented everything there
@IonicPage()
@Component({
  selector: 'page-extra-activities',
  templateUrl: 'extra-activities.html',
})
export class ExtraActivitiesPage {

ActivityRows: FirebaseListObservable<any[]>; 
newActivity="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public fbProvider: FirebaseProvider) {
    this.ActivityRows = this.fbProvider.getActivityRows();
  }


addActivity() {
  this.fbProvider.addActivity(this.newActivity);
}

removeActivity(id) {
  this.fbProvider.removeActivity(id);
}
goCv(){
  this.navCtrl.push(TargetedcvPage)
}

}
