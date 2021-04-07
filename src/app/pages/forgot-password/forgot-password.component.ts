import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from 'src/app/shared/services/password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  formgroup: FormGroup;
  
  
  constructor(
    private passwordService: PasswordService
  ) { }

  ngOnInit(): void {
    this.formgroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    this.passwordService.reset(this.formgroup.value).subscribe(res => {
      console.log(res);
    }, (err: HttpErrorResponse) => {
      alert(err.message);
    });
  }
}
