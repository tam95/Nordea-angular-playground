import { Component, NgModule, OnInit, VERSION } from "@angular/core";
import { NgModel } from "@angular/forms";
import { EventEmitterService } from "./service/event-emitter.service";
import { IDialogData } from "./Dialog/dialog.component";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  dialogData: IDialogData = {
    title: "title",
    message: "message",
    type: "normal"
  };
  dialogData2: IDialogData = {
    title: "title 2",
    message: "message 2",
    type: "confirm"
  };
  constructor(private eventEmitterService: EventEmitterService) {}
  ngOnInit() {}
  dialogClick(dialogData) {
    this.eventEmitterService.onToggleDialog(dialogData);
  };
  dialogConfirmClick() {

  }
}
