import { Component, Input, OnInit } from "@angular/core";
import { EventEmitterService } from "../service/event-emitter.service";
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
  @Input() dialogData: IDialogData;
  title: string;
  message: string;
  constructor(private eventEmitterService: EventEmitterService) {}
  ngOnInit() {
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeToggleDialog.subscribe(
        () => {
          this.toggleDialogButton();
        }
      );
    }
  }
  public toggleDialogButton() {
    console.log("dialogData", this.dialogData);
  }
}
