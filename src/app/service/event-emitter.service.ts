import { Injectable, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs/internal/Subscription";
import { IDialogData } from "../Dialog/dialog.component";

@Injectable({
  providedIn: "root"
})
export class EventEmitterService {
  invokeToggleDialog = new EventEmitter();
  subsVar: Subscription;

  constructor() {}

  onToggleDialog(dialogData: IDialogData) {
    this.invokeToggleDialog.emit(dialogData);
  }
}
