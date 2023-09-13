import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';


    datosMenu=[{
      'titulo': 'YOUTUBE',
      'url':'https://www.youtube.com/'
    },
    {
      'titulo': 'FACEBOOK',
      'url':'https://es-la.facebook.com/'
    },
    {
      'titulo': 'INSTAGRAM',
      'url':'https://www.instagram.com/'
    },
    {
      'titulo': 'GOOGLE',
      'url':'https://www.google.com/?hl=es'
    },
    {
      'titulo': 'SENA',
      'url':'https://www.sena.edu.co/es-co/Paginas/default.aspx'
    }];
    
  }
  
 