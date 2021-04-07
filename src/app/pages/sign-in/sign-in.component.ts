import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  formgroup: FormGroup;
  
  
  constructor(
    private loginService: LoginService,
    private storageService: StorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.formgroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    if(this.storageService.getToken()) {
      // this.router.navigate(['/main'], { });
    }
  }

  onSubmit() {
    this.loginService.login(this.formgroup.value).subscribe(res => {
      this.storageService.setToken(res.token);
      this.storageService.setUserInfo(res.user);
      // this.router.navigate(['main'], { });
    }, (err: HttpErrorResponse) => {
      alert(err.message);
    });
  }
}
