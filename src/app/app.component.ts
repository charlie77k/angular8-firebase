import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase';
  itemValue = '';
  items :Observable<any[]>

  constructor(private db:AngularFireDatabase){
    this.items = db.list('items').valueChanges();
  }

  onSubmit(from:NgForm){
    // console.log(from.value);
    this.db.list('items').push({name:this.itemValue})
    this.itemValue = '';
  }
}
