import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  form=new FormGroup({
    userName:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25)
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25)
    ]),
  })


  constructor() { }

  ngOnInit(): void {
  }

  get formControls() {
    return this.form.controls;
  }

  onSubmit(){
    console.log(this.form.value);
    
  }

}
