import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { DropzoneDirective } from './dropzone.directive';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { FilesizePipe } from './service/auth/pipe/filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    DropzoneDirective,
    UploadTaskComponent,
    FilesizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
