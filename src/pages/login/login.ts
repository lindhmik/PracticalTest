import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {MenuPage} from '../menu/menu';
import {HomePage} from '../home/home';
import firebasePromise from 'firebase';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user; //from html input
  @ViewChild('password') password; //same as above

  constructor(public loadingCtrl: LoadingController, private fbAuth: AngularFireAuth, private alertCtrl:AlertController, private fire :AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
//message after login
  alert(message:string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
//login with email&pass
  signInUser() {
    this.presentLoading(); //some loading effect during a login
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value) //set user & pass as parameters ..call function from AngularFireAuth
    .then( data => { //data ok
     this.alert('Olet kirjautunut sisään'); //show message to user
     this.navCtrl.setRoot(MenuPage); //sidemenu/tabs
    })
    .catch( error => {
      this.alert(error); //error message
    
  })

  console.log('Signing in..');
  }
  //same as above but now using facebook as auth provider via firebase
  fbSignin() {
    this.fbAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      res=> {
         this.alert ('FB-kirjautuminen onnistui');
         this.presentLoading();
         this.navCtrl.push(MenuPage);
      }).catch(error =>{
        this.alert(error)
      });
  }
  //loading effect
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...", 
      duration: 2000 //wanted delay ms
    });
    loader.present();
  }
}
