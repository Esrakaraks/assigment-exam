import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  $nav;
  scrolling: boolean;
  constructor() { }

  ngOnInit(): void {
    this.scroll();
  }
  scroll() {
  
    $(document).scroll(function () {
      this.$nav = $('.navbar');
      this.$nav.toggleClass('scrolled', $(this).scrollTop() > this.$nav.height());

    });
}
}