import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
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

  onSubmit(){
    console.log(this.form.value);
    
  }

}
