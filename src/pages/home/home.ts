import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from '../register/register'; //imported for navigation use
import {LoginPage} from '../login/login';           //same as above..

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
//method to buttons:
  gotoLogin(){
    this.navCtrl.push(LoginPage); //-> goto login page using navcontroller
  }

  gotoRegister(){
    this.navCtrl.push(RegisterPage); //-> goto register using navcontroller
  }
}
