import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { firebaseConfig} from "./environments/environment";
import { FlexLayoutModule } from '@angular/flex-layout';
import {CompanyService} from "./company/company.service";
import {MatCard, MatCardActions} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FlexLayoutModule,
    MatCard,
    MatFormField,
    FormsModule,
    MatCardActions,
    MatButton,
    MatInput
  ],
  providers: [
    provideAnimationsAsync(),
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
