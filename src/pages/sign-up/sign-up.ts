import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var firebase
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  password;
  form: any;
  email;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  signup(){
    firebase.auth.createUserWithEmailAndPassword().then (user=>{
      this.navCtrl.push('RegisterPage' )
    })
  }
    login(){
      firebase.auth.signInUserWithEmailPassword(this.form.value.email,this.form.value.password).then (user=>{
       this.navCtrl.push('RegisterPage') 


      })

    }
}
