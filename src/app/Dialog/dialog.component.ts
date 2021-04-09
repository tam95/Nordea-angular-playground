import { Component, Input, OnInit } from "@angular/core";

export interface DialogData {
  title: string;
  message: string;
}
@Component({
  selector: "dialog-component",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent implements OnInit {
  dialogData: DialogData;
  title: string;
  message: string;
  constructor() {}
  ngOnInit() {
    console.log(this.title);
  }
  public toggleDialogButton() {
    console.log("close clicked");
  }
}
