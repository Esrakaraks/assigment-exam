import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue-images',
  templateUrl: './blue-images.component.html',
  styleUrls: ['./blue-images.component.css']
})
export class BlueImagesComponent implements OnInit {
  blueimageList = [{
    imageUrl: "../../assets/image/actu1.jpg",
    text: "Examen",
    buttonText: "RESULTATS"
  },
  {
    imageUrl: "../../assets/image/actu2.jpg",
    text: "Examen",
    buttonText: "RESULTATS"
  },
  {
    imageUrl: "../../assets/image/actu1.jpg",
    text: "Examen",
    buttonText: "RESULTATS"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
