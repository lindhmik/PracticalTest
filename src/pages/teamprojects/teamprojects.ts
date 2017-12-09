import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { TargetedcvPage } from '../targetedcv/targetedcv';

/**
 * Generated class for the TeamprojectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teamprojects',
  templateUrl: 'teamprojects.html',
})
export class TeamprojectsPage {

  TPRows: FirebaseListObservable<any[]>; 
  newTP="";
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public fbProvider: FirebaseProvider) {
      this.TPRows = this.fbProvider.getTPRows();
    }
  
  
  addTP() {
    this.fbProvider.addTP(this.newTP);
  }
  
  removeTP(id) {
    this.fbProvider.removeTP(id);
  }
  goCv(){
    this.navCtrl.push(TargetedcvPage);
  }
  
  }
