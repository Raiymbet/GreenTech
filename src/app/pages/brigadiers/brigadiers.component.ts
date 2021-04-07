import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-brigadiers',
  templateUrl: './brigadiers.component.html',
  styleUrls: ['./brigadiers.component.scss']
})
export class BrigadiersComponent implements OnInit {

  brigadiers = [];
  users = [];
  formgroup: FormGroup;

  constructor(
    private userService: UserService,
    private usersService: UsersService) { }

  ngOnInit(): void {
    this.formgroup = new FormGroup({
      user: new FormControl('', Validators.required)
    }); 


    this.userService.read().subscribe(res => {
      this.users = res;
    }, (err: HttpErrorResponse) => {
      alert(err.message);
    })
    
    this.usersService.brigadiersList().subscribe(res => {
      this.brigadiers = res;
    }, (err: HttpErrorResponse) => {
      alert(err.message);
    })
  }

  onSubmit() {
    this.usersService.bigadiersCreate(this.formgroup.value).subscribe(res => {
      alert("Success!");
    }, (err: HttpErrorResponse) => {
      alert(err.message);
    });
  }
}
