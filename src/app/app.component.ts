import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBF8ImYz5eBaw5sia1-LGUMS9nwSf88B-o',
      authDomain: 'datavisualization-f3d6b.firebaseapp.com',
    });
  }

}
