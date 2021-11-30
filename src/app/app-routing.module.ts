import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestComponent } from './rest/rest.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'custormerservice', component: RestComponent},
  {path:'user', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RestComponent, UserComponent]
