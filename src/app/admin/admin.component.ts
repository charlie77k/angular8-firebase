import { AuthService } from '../service/auth/auth.service';
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Router } from '@angular/router';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Input() file: File;
  isHovering: boolean;
  files: File[] = [];
  list:any = [];
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  items: any;

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase , private authService:  AuthService, public  afAuth:  AngularFireAuth, public  router:  Router) { }

  ngOnInit() {
    this.items = this.db.list('files').valueChanges();
    this.items.subscribe( e => {
      this.list = e;
        console.log(e);
    })
  }


  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

  logOut(){
    this.authService.SignOut();
    this.router.navigate(['/login']);
  }
}
