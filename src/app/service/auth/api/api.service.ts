import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: AngularFirestore) { }

  getFilesList() {
    return this.firestore.collection('files').snapshotChanges();
}
}
