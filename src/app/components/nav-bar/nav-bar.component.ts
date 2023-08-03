import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';
import { cloneDeep } from 'lodash';
import { CoreService } from 'src/app/services/core.service';
interface Bank {
  name: string;
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  private _onDestroy = new Subject<void>();
  public bankCtrl: FormControl = new FormControl();
  private unsubscribe$ = new Subject<void>();
  public bankFilterCtrl: FormControl = new FormControl();

  /** list of banks */

  /** list of banks filtered by search keyword */
  // public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
  blogPost: any = [];
  blogTitleList: any = [];
  titleValue: any;
  filteredBanks: any = [];
  finalList: any = [];
  copyArrayList: any = [];
  constructor(public coreService: CoreService) {}

  ngOnInit(): void {}
  getEvent(ev) {
    if (!this.filteredBanks) {
      return;
    }
    // get the search keyword
    let search = ev;
    if (!search) {
      this.filteredBanks = this.copyArrayList;
      return;
    } else {
      search = ev?.toLowerCase();
    }

    // filter the banks
    this.filteredBanks = this.copyArrayList.filter(
      (bank) => bank.name.toLowerCase().indexOf(search) > -1
    );
  }

  login() {
    // this.authService.login();
  }
  logout() {
    this.coreService.isValidUser = false;
  }
  getCard() {
    // this.blogService.setTitle(this.titleValue);
  }
  onBlur(ev: any) {}
  onInputChange(ev: any) {}
  handleKeydown(ev: any) {}
}
