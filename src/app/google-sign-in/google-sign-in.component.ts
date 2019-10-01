import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-google-signin',
  template: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css']
})

export class GoogleSigninComponent implements AfterViewInit {

  public gapi: any;

ngAfterViewInit() {

   gapi.signin2.render('google-sign-in', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'light',
      'onsuccess': param => this.onSignIn(param)
  });

}

public onSignIn(googleUser) {

   var user : any;

      ((u, p) => {
         u.id            = p.getId();
         u.name          = p.getName();
         u.email         = p.getEmail();
         u.imageUrl      = p.getImageUrl();
         u.givenName     = p.getGivenName();
         u.familyName    = p.getFamilyName();
      })(user, googleUser.getBasicProfile());

      ((u, r) => {
         u.token         = r.id_token;
      })(user, googleUser.getAuthResponse());

      user.save();

      console.log(user);
};

}