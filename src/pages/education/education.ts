import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectworkPage } from '../projectwork/projectwork';

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage { 

  EdRows: FirebaseListObservable<any[]>; //database list EdRows
  newEd=""; //input from html

  constructor(public fbProvider:FirebaseProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.EdRows = this.fbProvider.getEdRows(); //call get method from provider. data goes to this.Edrows variable
    
  }
  addEd() {
    this.fbProvider.addEd(this.newEd); //add html input to database (via provider)
  }
 
  removeEd(id) {
    this.fbProvider.removeEd(id); //same as above but remove
  }
  goworkProjects(){
    this.navCtrl.push(ProjectworkPage) //navigate to projectpage
  }


  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPage');
  }

}
