import { Component, OnInit } from '@angular/core';
import {take} from "rxjs";
import {ConfigurationService} from "@fusionize/fusionize-angular";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  navbarColor = 'blue';

  constructor(configService: ConfigurationService) {
    configService.config$().pipe(take(1)).subscribe((c)=>
      this.navbarColor = c.navbarColor
    );
  }

}
