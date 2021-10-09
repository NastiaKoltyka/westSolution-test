import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
invalid:boolean;
  constructor(private router: Router) { 
    this.invalid=false;
  }
  onSubmit(form: NgForm) {
    if(form.value.username=='admin' && form.value.password=='12345'){
      localStorage.setItem("authorization", "true");
      this.router.navigate(['/profile']);
    }
    else{
      this.invalid=true;
    }
  }
  ngOnInit(): void {
  }

}
