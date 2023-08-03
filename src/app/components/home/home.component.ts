import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: string[] = ['Noah', 'Liam', 'Mason', 'Jacob'];
  isShowColor = false;
  mentionConfig = {
    items: [
      {
        userid: 'abc@media.com',
        password: 'abc123',
        username: 'tom',
      },
      {
        userid: 'def@media.com',
        password: 'def123',
        username: 'dick',
      },
    ],
    triggerChar: '@',
  };
  data = '';

  constructor() {}

  ngOnInit(): void {}
  getItem(ev) {
    this.isShowColor = true;
    setTimeout(() => {
      this.data = ev.username;
    });
  }
}
