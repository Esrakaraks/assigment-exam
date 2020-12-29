import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;

 chips  = [
    {name: 'SERVICES LA PERSONNE ET AUX TERRITOIRES'},
    {name: 'BAC PRO'},
    {name: 'BAC TECHNO'},
    {name: 'BTSA'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  remove(fruit): void {
    const index = this.chips.indexOf(fruit);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }
}
