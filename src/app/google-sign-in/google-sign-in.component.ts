import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css']
})

export class GoogleSigninComponent implements OnInit { 

  constructor () {}

  ngOnInit () {}

  onSignIn(googleUser): void {
    
    console.log('foo');

    let profile = googleUser.getBasicProfile();
    
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  
  }

  isSignedIn(): boolean {
    try {
      let auth2 = gapi.auth2.getAuthInstance();   
      return (auth2.isSignedIn.get());
    } catch {
      return false;
    }
  }

  onSignOut(): void {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

}