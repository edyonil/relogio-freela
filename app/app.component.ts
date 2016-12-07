import { Component } from "@angular/core";
import { User } from "./shared/User/user";
import { UserService } from "./shared/user/user.service";


@Component({
  selector: "my-app",
  template: "<page-router-outlet></page-router-outlet>",
})
export class AppComponent {}