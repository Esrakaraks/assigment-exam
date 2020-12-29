import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-image',
  templateUrl: './red-image.component.html',
  styleUrls: ['./red-image.component.css']
})
export class RedImageComponent implements OnInit {
  redImageList=[
    { imageUrl:'../../assets/image/filiere1.jpg',
      imageText:'Services a la Personne et aux Territoires'},
    { imageUrl:'../../assets/image/filiere2.jpg',
      imageText:'Gestion et Protection de la Nature'},
    { imageUrl:'../../assets/image/filiere1.jpg',
      imageText:'Services a la Personne et aux Territoires'},
    { imageUrl:'../../assets/image/filiere2.jpg',
      imageText:'estion et Protection de la Nature'},
    { imageUrl:'../../assets/image/filiere2.jpg',
      imageText:'estion et Protection de la Nature'},
    { imageUrl:'../../assets/image/filiere2.jpg',
      imageText:'estion et Protection de la Nature'},
   
  
 
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
