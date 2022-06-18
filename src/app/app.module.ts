import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { ViewUserComponent } from './components/view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUserComponent,
    EditUserComponent,
    ViewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
