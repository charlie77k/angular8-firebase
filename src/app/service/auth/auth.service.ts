import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<firebase.User>;
 
  constructor(private angularFireAuth: AngularFireAuth) {
  this.userData = angularFireAuth.authState;
  }



/* Sign up */
SignUp(email: string, password: string) {
 return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
  }
   
  /* Sign in */
  SignIn(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
  }
   
  /* Sign out */
  SignOut() {
      this.angularFireAuth.auth.signOut();
  }
   
}
