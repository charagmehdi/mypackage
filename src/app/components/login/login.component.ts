import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({}); // Example initialization, adjust as needed

  constructor(
    private formBuilder: FormBuilder,
    private coreService: CoreService,
    private route: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getError(el: string): any {
    switch (el) {
      case 'user':
        if (this.formGroup.get('username')?.hasError('required')) {
          return 'Username required';
        }
        break;
      case 'pass':
        if (this.formGroup.get('password')?.hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }

  onSubmit(data) {
    for (let item of this.coreService.loginJson) {
      if (item.password === data.password && item.username === data.username) {
        this.coreService.loginUserName = data.username;
        this.coreService.isValidUser = true;
        break;
      } else {
        this.coreService.isValidUser = false;
      }
    }
    if (this.coreService.isValidUser) {
      alert('Login Successfully');
      this.route.navigate(['']);
    } else {
      alert('Login Failed Please enter correct credential');
    }
  }
}
