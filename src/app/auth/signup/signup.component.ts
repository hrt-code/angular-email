import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form=new FormGroup({
    userName:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25)
    ]),
    email:new FormControl('',[
      Validators.email,
      Validators.minLength(4),
      Validators.maxLength(25)
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25)
    ]),
    passwordConfirmation:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25)
    ]),
  })

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.form.value);
  }

}
