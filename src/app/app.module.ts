import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';

@NgModule({
  declarations: [AppComponent, UserProfileComponent, AuthButtonComponent],
  imports: [
    BrowserModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'fukmul-satmal-02.auth0.com',
      clientId: 'f2TFdb7QID12XZUwNW6mRO9AjdAEnFen',
      redirectUri: `${window.location.origin}/angspa-test01/`
    }),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
