import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PersonaldetailsPage} from '../personaldetails/personaldetails';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goCreate() {
    this.navCtrl.push(PersonaldetailsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
