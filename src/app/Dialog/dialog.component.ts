import { Component, Input } from "@angular/core";

@Component({
  selector: "dialog-component",
  templateUrl: "./dialog.component.html",
  styles: ["./dialog.component.css"]
})
export class DialogComponent {
  @Input() name: string;
}
