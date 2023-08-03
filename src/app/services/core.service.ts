import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  loginUserName = '';
  isShowSuccessMsg: boolean = false;
  loginJson = [
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
  ];
  constructor() {}
}
