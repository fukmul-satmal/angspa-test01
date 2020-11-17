import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';

// ルーティングの設定
const routes: Routes = [
  { path: 'user-profile', component: UserProfileComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
