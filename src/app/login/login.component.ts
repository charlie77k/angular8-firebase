import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isOpen: boolean =true;
  user:any =[];
  items :Observable<any[]>
  msg: string;

  constructor(private authService:  AuthService, public  afAuth:  AngularFireAuth, 
    public  router:  Router, 
    private db:AngularFireDatabase) { 
    this.items = db.list('users').valueChanges();
  }



  ngOnInit(){}

  onClickRegister(){
    this.isOpen = !this.isOpen 
  }
 
  onClickLogin(form:NgForm){
    let data:any = form;
    this.authService.SignIn(data.email, data.password)
    .then(res => {
      console.log('login Successfully signed up!', res);
      // this.db.list('users').push(form)
      this.msg = "login Succsesful .";
      this.router.navigate(['/admin']);
      })
      .catch(error => {
      console.log('Something is wrong:',this.msg = error.message);
      });  
  }

  onRegiasterSubmit(form:NgForm){
    let data:any = form;
    this.authService.SignUp(data.email, data.password)
    .then(res => {
      console.log('You are Successfully signed up!', res);
      this.msg = "Register Succsesful .";
      this.isOpen = !this.isOpen 
      this.db.list('users').push(form)
      })
      .catch(error => {
      console.log('Something is wrong:',this.msg = error.message);
      });  
  }

      // this.db.list('users').push(form)
  // firebase.app().database().ref("users").orderByChild("email")
  // .equalTo(data.email).once("value", snapshot => {
  //  const userData = snapshot.val();
  //  console.log("exists!", userData);
  // })

  signInWithFacebook() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  signInWithTwitter() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider() 
    )
  }

  signInWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }
}
