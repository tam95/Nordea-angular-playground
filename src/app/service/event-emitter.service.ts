import { Injectable, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs/internal/Subscription";

@Injectable({
  providedIn: "root"
})
export class EventEmitterService {
  invokeToggleDialogButton = new EventEmitter();
  subsVar: Subscription;

  constructor() {}

  onToggleDialogButton() {
    this.invokeToggleDialogButton.emit();
  }
}
