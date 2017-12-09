import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import Promise from 'firebase';
import firebase from 'firebase';

@Injectable()
export class FirebaseProvider {
 
  //variables to different datasheets
  constructor(public afd: AngularFireDatabase, public sfd:AngularFireDatabase, public efd:AngularFireDatabase, public pfd:AngularFireDatabase) { }
 
  //get data bring us data from particular sheet, add saves particular data (paramater) to database and remove removes it.
  getEdRows() {
    return this.efd.list('/EdRows/');
  }
 
  addEd(name)  {
    this.efd.list('/EdRows/').push(name);
  }
 
  removeEd(id) {
    this.efd.list('/EdRows/').remove(id);
  }
  getSkillRows() {
    return this.sfd.list('/SkillRows/');
  }
 
  addSkill(name) {
    this.sfd.list('/SkillRows/').push(name);
  }
 
  removeSkill(id) {
    this.sfd.list('/SkillRows/').remove(id);
  }

  addProject(name){
    this.afd.list('/projectRows/').push(name)
  }
  getProjectRows() {
    return this.afd.list(`/projectRows/`);

  }
  removeProject(id) {
    this.afd.list('/projectRows/').remove(id);
  }
  addActivity(name){
    this.pfd.list('/ActivityRows/').push(name)
  }
  getActivityRows() {
    return this.pfd.list(`/ActivityRows/`);

  }
  removeActivity(id) {
    this.pfd.list('/ActivityRows/').remove(id);
  }
  addTP(name){
    this.pfd.list('/TPRows/').push(name)
  }
  getTPRows() {
    return this.pfd.list(`/TPRows/`);

  }
  removeTP(id) {
    this.pfd.list('/TPRows/').remove(id);
  }
}


