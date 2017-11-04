import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//imported pages:
import {RegisterPage} from '../pages/register/register'; 
import {LoginPage} from '../pages/login/login';
import {MenuPage} from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { ProjectworkPage } from '../pages/projectwork/projectwork';
import { ExtraActivitiesPage } from '../pages/extra-activities/extra-activities';
import { ContactInformationPage } from '../pages/contact-information/contact-information';
import { TargetedcvPage } from '../pages/targetedcv/targetedcv';
import { AboutPage } from '../pages/about/about'; 
import { PersonaldetailsPage } from '../pages/personaldetails/personaldetails';
import {SkillsPage} from '../pages/skills/skills';
import {EducationPage} from '../pages/education/education';

//firebase related: This is mess.. I have lots of problems after some update. Im not sure if everything below is needed but
//im not brave enough to remove anything as i finally got this working..
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { FirebaseProvider } from '../providers/firebase/firebase';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import firebase from 'firebase';
import firebasePromise from 'firebase';
//firebase info for authentication and database
const firebaseAuth = {
  apiKey: "AIzaSyD6kRpfXjlQrzz0LwCezcFWfr_bJ2WKtqk",
  authDomain: "mycvapp-aa3eb.firebaseapp.com",
  databaseURL: "https://mycvapp-aa3eb.firebaseio.com",
  projectId: "mycvapp-aa3eb",
  storageBucket: "mycvapp-aa3eb.appspot.com",
  messagingSenderId: "970052206437"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    MenuPage,
    TabsPage,
    ProjectworkPage,
    ExtraActivitiesPage,
    ContactInformationPage,
    TargetedcvPage,
    AboutPage,
    PersonaldetailsPage,
    SkillsPage,
    EducationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth), //initialize firebase
    AngularFireAuthModule,
    HttpModule,
    AngularFireDatabaseModule,
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    MenuPage,
    TabsPage,
    ProjectworkPage,
    ExtraActivitiesPage,
    ContactInformationPage,
    TargetedcvPage,
    AboutPage,
    PersonaldetailsPage,
    SkillsPage,
    EducationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider //provider which is used by my methods
  ]
})
export class AppModule {}
