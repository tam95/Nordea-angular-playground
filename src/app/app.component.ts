import { Component, NgModule, VERSION } from "@angular/core";
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
    messge: "message"
  };
  constructor(private eventEmitterService: EventEmitterService) {}
  ngOnInit() {}
  dialogClick() {
    this.eventEmitterService.onToggleDialog();
  }
}
