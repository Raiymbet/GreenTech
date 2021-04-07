import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/shared/services/registration.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [];
  formgroup: FormGroup;
  
  constructor(
    private userService: UserService,
    private registrationService: RegistrationService
  ) { }

  ngOnInit(): void {
    this.formgroup = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password1: new FormControl('', [Validators.required]),
      password2: new FormControl('', [Validators.required])
    }); 


    this.userService.read().subscribe(res => {
      this.users = res;
    }, (err: HttpErrorResponse) => {
      alert(err.message);
    })
  }

  onSubmit() {
    this.registrationService.create(this.formgroup.value).subscribe(res => {
      alert("Success!");
    }, (err: HttpErrorResponse) => {
      alert(err.message);
    });
  }

}
