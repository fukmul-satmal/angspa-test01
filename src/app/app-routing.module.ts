import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

// ルーティングの設定
const routes: Routes = [
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard], outlet: 'UserProfile' },
//  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'external-api', component: ExternalApiComponent, canActivate: [AuthGuard] }
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
