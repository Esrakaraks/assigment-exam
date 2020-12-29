import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-double-select',
  templateUrl: './double-select.component.html',
  styleUrls: ['./double-select.component.css']
})
export class DoubleSelectComponent implements OnInit {
  multip = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
