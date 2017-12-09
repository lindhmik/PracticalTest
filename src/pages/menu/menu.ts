import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, AlertController } from 'ionic-angular'; //imported ViewChild and Nav which are used later on as a reference to app's root nav
import {HomePage} from '../home/home';
//imported pages:
import { TabsPage } from './../tabs/tabs';
import firebase from 'firebase';


//defines what data (and which datatypes) "my pages array" has:
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  //my root page for menu/tabs navigation and reference to apps root nav:
  rootPage=TabsPage;
  @ViewChild(Nav) nav: Nav;
//array which contains my pages
  pages: PageInterface[] = [
    { title: 'About', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 0, icon: 'home' },
    { title: 'Targeted CV Page', pageName: 'TabsPage', tabComponent: 'TargetedcvPage', index: 1, icon: 'md-information-circle' },
    { title: 'Contact Information', pageName: 'TabsPage', tabComponent: 'ContactInformationPage', index: 2, icon: 'contact' },

    
 
  ];

 
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl:AlertController) {
  }
  alert(message:string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  logOut(): Promise<void> {
    this.alert("You are logged out!");
    this.navCtrl.push(HomePage);
    return firebase.auth().signOut();
    
  }
  openPage(page: PageInterface) {
    let params = {};
    
    if(page.index) {
      params = { tabIndex: page.index};
    }
 
    if(this.nav.getActiveChildNav() && page.index != undefined){
     this.nav.getActiveChildNav().select(page.index);
    }
   }
   
   isActive(page: PageInterface) {
 
   }
 
   ionViewDidLoad() {
     console.log('ionViewDidLoad MenuPage');
   }
  
 
 }
