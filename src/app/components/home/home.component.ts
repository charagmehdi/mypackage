import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: string[] = ['tom', 'dick', 'mehdi', 'mohd'];
  isShowColor = false;
  mentionConfig = {
    triggerChar: '@',
    maxItems: 10,
    labelKey: 'username',
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
