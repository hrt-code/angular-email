import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type: "text" | "number" | "password" | "email" = "text";
  @Input() label: string;
  @Input() control: FormControl | any;
  @Input() placeholder: string = "";
  @Input() id: string;

  invalidClassList="bg-red-100 border-red-500 focus:bg-red-100";
  validClassList="bg-slate-50 focus:border-indigo-300 focus:bg-indigo-50"

  constructor() { }

  ngOnInit(): void {
  }

  showErrors() {
    return this.control.errors && this.control.touched && this.control.dirty && this.control.invalid;
  }



}
