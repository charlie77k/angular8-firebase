import { AuthService } from '../service/auth/auth.service';
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Router } from '@angular/router';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

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
  items: AngularFireList<any> = null;

  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore, //cloud firebase 
    private db: AngularFireDatabase , 
    private authService:  AuthService, 
    public  afAuth:  AngularFireAuth,
    public  router:  Router) { }

  ngOnInit() { //load all upladed files
    this.firestore.collection('files').snapshotChanges().subscribe( res => {
      this.list =  res.map(e => {
              return {
                id: e.payload.doc.id ,
                downloadURL: e.payload.doc.data()['downloadURL'], 
                path: e.payload.doc.data()['path'],   
              } })
        // console.log(this.list);        
    })
  }

  onClickDelete(id){ 
    this.firestore.doc('files/' + id).delete();
    
 }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  //push file to upload task component
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






    // this.items = this.db.list('/files')
    // this.items.valueChanges().subscribe( e => {
    //   this.list = e;
    //     console.log(e);
    // })
