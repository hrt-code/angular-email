import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {

  @Input() type: "submit" | "button" = "button";
  @Input() innerText: string;
  @Input() color: "indigo" = "indigo";
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
    }



  }



}
