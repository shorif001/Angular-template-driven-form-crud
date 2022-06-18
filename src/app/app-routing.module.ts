import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  {path:'add', component:AddUserComponent},
  {path:'edit/:id', component:EditUserComponent},
  {path:'view/:id', component:ViewUserComponent},
  {path:'list', component:ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
