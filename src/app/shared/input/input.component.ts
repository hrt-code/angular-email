import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type: "text" | "number" | "password"|"email"="text";
  @Input() label: string;
  @Input() control: FormControl | any;
  @Input() placeholder: string="";
  @Input() id: string;


  constructor() { }

  ngOnInit(): void {
  }

}
