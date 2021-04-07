import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/shared/services/registration.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formgroup: FormGroup;
  
  
  constructor(
    private registrationServise: RegistrationService
  ) { }

  ngOnInit(): void {
    this.formgroup = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password1: new FormControl('', [Validators.required]),
      password2: new FormControl('', [Validators.required])
    });    
  }

  onSubmit() {
    this.registrationServise.create(this.formgroup.value).subscribe(res => {
      console.log("Registration result: ", res);
    }, (err: HttpErrorResponse) => {
      alert(err.message);
    });
  }

}
