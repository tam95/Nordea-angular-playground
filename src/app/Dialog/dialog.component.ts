import { Component, Input, OnInit } from "@angular/core";

export interface IDialogData {
  title: string;
  message: string;
}
@Component({
  selector: "dialog-component",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent implements OnInit {
  dialogData: IDialogData;
  title: string;
  message: string;
  constructor() {}
  ngOnInit() {}
  public toggleDialogButton() {
    console.log("cacac");
  }
}
