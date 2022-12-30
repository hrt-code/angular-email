import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {

  @Input() type: "submit" | "button" = "button";
  @Input() innerText: string;
  @Input() color: "indigo" | "blue" = "blue";
  @Input() backgroundType: "solid" | "gradient" = "gradient";
  @Input() padding: string = "py-2";
  @Input() width: string = "w-full";
  @Input() loading: boolean = false;


  styleClassList: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.styleClassList =
      // padding
      ` ${this.padding}` +
      //width
      ` ${this.width}`;

    this.setBtnColor();

  }


  setBtnColor() {
    switch (this.color) {
      case "indigo":
      default:
        this.styleClassList +=
          //bg type
          (this.backgroundType == "gradient" ?
            ` bg-gradient-to-r from-indigo-500 to-indigo-700 hover:bg-gradient-to-l ` :
            ` bg-indigo`) +
          //text color
          ` text-white` +
          //shadow
          ` shadow-indigo-500/50`

        break;
      case "blue":
        this.styleClassList +=
          //bg type
          (this.backgroundType == "gradient" ?
            ` bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l ` :
            ` bg-blue`) +
          //text color
          ` text-white` +
          //shadow
          ` shadow-blue-500/50`

        break;
    }
  }



}
