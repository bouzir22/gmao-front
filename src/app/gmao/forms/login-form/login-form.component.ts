import { Router } from '@angular/router';
import { FormGroup, Validators ,FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm :FormGroup;
  hide: boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {

    this.loginForm =new FormGroup({
      email : new FormControl(''),
      password: new FormControl('')
    }



    )
  }

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    this.router.navigate(["/dashboard"]);

  }

}
