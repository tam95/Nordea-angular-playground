import { Component, Input, OnInit } from "@angular/core";
import { EventEmitterService } from "../service/event-emitter.service";
export interface IDialogData {
  title: string;
  message: string;
  type: string;
}
@Component({
  selector: "dialog-component",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent implements OnInit {
  @Input() dialogData: IDialogData;
  hidden: boolean = true;
  constructor(private eventEmitterService: EventEmitterService) {}
  ngOnInit() {
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeToggleDialog.subscribe(
        (dialogData: IDialogData) => {
          this.toggleDialogButton(dialogData);
        }
      );
    }
  }
  public toggleDialogButton(dialogData) {
    if(dialogData) this.dialogData = dialogData;
    this.hidden = false;
  }
  public closeDialog(){
    this.hidden = true;
  }
}
