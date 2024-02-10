import {Component} from '@angular/core';
import {ServiceDirectoryService} from "@fusionize/fusionize-angular";
import {LayoutService} from "./services/layout.service";

@Component({
  selector: 'app-5aedf71a73074aed949c0a8e010e3397-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {

  constructor(layoutService: LayoutService,
              serviceDirectory: ServiceDirectoryService) {
    serviceDirectory.register(layoutService, "layoutService");
  }

}
