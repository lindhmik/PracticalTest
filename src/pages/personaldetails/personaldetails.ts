import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import Promise from 'firebase';
import {SkillsPage} from '../skills/skills';

@IonicPage()
@Component({
  selector: 'page-personaldetails',
  templateUrl: 'personaldetails.html',
})
export class PersonaldetailsPage {
  user = {};
  userRows:FirebaseListObservable<any[]>;
  public myPerson = {};
 
  newDetail="";
  constructor(public firebaseProvider:FirebaseProvider, public navCtrl: NavController, public navParams: NavParams) {
  }
  
  createPerson(fullName: string, age: string, city: string, languages:string, email:string, presText:string) {
    const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
    personRef.set({
      fullName,
      age,
      city,
      languages,
      email,
      presText
    })

  }
  toSkills(){
    this.navCtrl.push(SkillsPage);
  }

  personalInfo(){
   //document.getElementById("personalInfo").style.display="none";
  }

  ionViewDidLoad() {
    const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
    personRef.on('value', personSnapshot => {
      this.myPerson = personSnapshot.val();
      console.log(personSnapshot.val());
      //document.getElementById("personalInfo").style.display="block";
      
    });
  }

 
}


