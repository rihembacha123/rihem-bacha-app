import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'user/:username', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
