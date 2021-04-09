import { Injectable, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs/internal/Subscription";

@Injectable({
  providedIn: "root"
})
export class EventEmitterService {
  invokeToggleDialog = new EventEmitter();
  subsVar: Subscription;

  constructor() {}

  onToggleDialog() {
    this.invokeToggleDialog.emit();
  }
}
