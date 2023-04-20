import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm! : FormGroup;

  constructor(private authService:AuthenticationService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      'login': new FormControl('',[Validators.required]),
      'password':new FormControl('',
        [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      ])
    });
    }

    submit(){
      if(!this.loginForm.valid)
        return;

      const {login,password}=this.loginForm.value;
      console.log()
      this.authService.login(login,password)
        .subscribe({
          next:()=> this.router.navigate(['chat'])
        });

    }
}
