import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "form";
  data: any = "";
  users: any = [];
  num: number[] = [1, 2, 3, 4, 5, 6];
  getValues(val: any) {
    this.data = this.users.push(val);
  }
  
}
