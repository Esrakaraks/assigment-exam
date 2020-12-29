import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-avatar',
  templateUrl: './slider-avatar.component.html',
  styleUrls: ['./slider-avatar.component.css']
})
export class SliderAvatarComponent implements OnInit {

  avatarList = ['../../assets/image/jane.jpg','https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg'];
  tempAvatar = '';
  constructor() { }

  ngOnInit(): void {
    this.tempAvatar = '../../assets/image/jane.jpg';
    this.nextClick(this.tempAvatar);
  }
  index;
  nextClick(test) {

    for (let i = 0; i < this.avatarList.length; i++) {
      if (test === this.avatarList[this.avatarList.length - 1]) {
        this.tempAvatar = this.avatarList[0];
        return this.tempAvatar;
      }

      else {
        this.tempAvatar = this.avatarList[i + 1]
        return this.tempAvatar;

      }
    }


  }


}
