import { Component, NgModule, VERSION } from "@angular/core";
import { NgModel } from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private eventEmitterService: EventEmitterService) {}
  name = "Angular " + VERSION.major;
  title = "title";
  toggleDialogButton() {
    this.eventEmitterService.onToggleDialogButton();
  }
}
