import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase'
import { PersonaldetailsPage } from '../personaldetails/personaldetails';
import {SkillsPage} from '../skills/skills';
import { ProjectworkPage } from '../projectwork/projectwork';
import { ExtraActivitiesPage } from '../extra-activities/extra-activities';
import {EducationPage} from '../education/education';
import { TeamprojectsPage } from '../teamprojects/teamprojects';


@IonicPage()
@Component({
  selector: 'page-targetedcv',
  templateUrl: 'targetedcv.html',
})
export class TargetedcvPage {
//variables for databaseinformation which came via provider
  SkillRows: FirebaseListObservable<any[]>;
  ActivityRows: FirebaseListObservable<any[]>;
  ProjectRows: FirebaseListObservable<any[]>;
  EdRows: FirebaseListObservable<any[]>;
  TPRows:FirebaseListObservable<any[]>;
  myPerson=""; //variable for object my.person
  
//Get data from database using methods in provider
  constructor(public fbProvider:FirebaseProvider, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.SkillRows = this.fbProvider.getSkillRows();
    this.ActivityRows = this.fbProvider.getActivityRows();
    this.ProjectRows = this.fbProvider.getProjectRows();
    this.EdRows = this.fbProvider.getEdRows();
    this.TPRows= this.fbProvider.getTPRows();
    
  }
  //show/hide elements which containing users cv information .. i decided im not using it..
/* showCv() {
     var doc=document.getElementsByClassName ("pdpage");
     for(var i=0; i<doc.length;i++){
       if(doc[i].style.display=="block"){
         doc[i].style.display="none";
       }else {
        doc[i].style.display="block";
       }
     
     }

  }*/
  //Leading to PdPage
  createCV() {
    this.navCtrl.push(PersonaldetailsPage);
  }
  modSkill(){
    this.navCtrl.push(SkillsPage);
  }
  modEdu(){
    this.navCtrl.push(EducationPage);
  }
  modProject(){
    this.navCtrl.push(ProjectworkPage);
  }
  modHobby(){
    this.navCtrl.push(ExtraActivitiesPage);
  }
  modTP(){
    this.navCtrl.push(TeamprojectsPage);
  }

  ionViewDidLoad() {
    const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`); //information from database
    personRef.on('value', personSnapshot => { 
      this.myPerson = personSnapshot.val(); //object from database to my.person variable
      console.log(personSnapshot.val());
      //document.getElementById("personalInfo").style.display="block"; //show element when loading page(user can hide it if wanted)
     
    });
  }

}

