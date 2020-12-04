import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Interceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { AppRoutingModule } from './app-routing.module';
import { ExternalApiComponent } from './pages/external-api/external-api.component';


@NgModule({
  declarations: [AppComponent, UserProfileComponent, AuthButtonComponent, ExternalApiComponent],
  imports: [
    BrowserModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
//      domain: 'fukmul-satmal-02.auth0.com',
//      clientId: 'f2TFdb7QID12XZUwNW6mRO9AjdAEnFen',
//      redirectUri: `https://fukmul-satmal.github.io/angspa-test01/`,

      //アクセストークンをアタッチするInterceptorのURL設定
      ...env.auth,
      httpInterceptor: {
        allowedList: [`${env.dev.serverUrl}/api/messages/protected-message`],
      },
    }),

    AppRoutingModule,
  ],

  //AuthHttpInterceptorをプロバイダーとして登録
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
