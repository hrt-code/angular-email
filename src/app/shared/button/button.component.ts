import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {

  @Input() type: "submit" | "button" = "button";
  @Input() innerHTML: string;
  @Input() color: string;
  @Input() backgroundType: "solid" | "gradient" = "gradient";
  @Input() textColor: string = "white";
  @Input() padding: string = "py-2";
  @Input() width: string = "w-full";

  styleClassList: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    this.styleClassList =
      //bg type
      (this.backgroundType == "gradient" ?
        `bg-gradient-to-r from-${this.color}-500 to-${this.color}-700 hover:bg-gradient-to-l ` :
        `bg-${this.color}`) +
      //text color
      ` text-${this.textColor}` +
      //shadow
      ` shadow-${this.color}-500/50` +
      //padding
      ` ${this.padding}` +
      //width
      ` ${this.width}`

  }




}
