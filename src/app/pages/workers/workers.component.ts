import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  workers = [];
  users = [];
  brigadiers = [];

  formgroup: FormGroup;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

    this.formgroup = new FormGroup({
      brigadier: new FormControl('', Validators.required),
      user: new FormControl('', Validators.required),
    }); 


    this.usersService.workersList().subscribe(res => {
      this.workers = res;
    }, (err: HttpErrorResponse) => {
      alert(err.message);
    })
  }

  onSubmit() {
    this.usersService.workersCreate(this.formgroup.value).subscribe(res => {
      alert("Success!");
    }, (err: HttpErrorResponse) => {
      alert(err.message);
    });
  }

}
