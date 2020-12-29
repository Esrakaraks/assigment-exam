import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-images',
  templateUrl: './tree-images.component.html',
  styleUrls: ['./tree-images.component.css']
})
export class TreeImagesComponent implements OnInit {
  imageData=[
    {
      imageUrl:"../../assets/image/formation1.jpg",
      text:"Technicien Conseil Vente de Produits de JArdin",
      btnText:"BAC PRO"
    },
    {
      imageUrl:"../../assets/image/formation2.jpg",
      text:"Transformation Alimentaire",
      btnText:"BAC TECHNO"
    },
    {
      imageUrl:"../../assets/image/formation3.jpg",
      text:"Develeopment Animation des Terrtoires Ruraux",
      btnText:"BTSA"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
