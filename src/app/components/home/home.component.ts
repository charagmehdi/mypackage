import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: any = [];
  isShowColor = false;
  mentionConfig = {
    triggerChar: '@',
    maxItems: 10,
    labelKey: 'username',
  };
  data = '';

  constructor(private coreService: CoreService) {}

  ngOnInit(): void {
    this.items = this.coreService.loginJson.map((item) => {
      return item.username;
    });
  }
  getItem(ev) {
    this.isShowColor = true;
    setTimeout(() => {
      this.data = ev.username;
    });
  }
}
