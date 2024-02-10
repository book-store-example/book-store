import {Component, Input} from '@angular/core';
import {ConfigurationService} from "@fusionize/fusionize-angular";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  logo = '';
  colorClass : 'bg-info' | 'bg-danger' | 'bg-success' = 'bg-info';

  @Input() set color( c : any){
    switch (c) {
      case "green":
        this.colorClass = 'bg-success';
        break;
      case "red":
        this.colorClass = 'bg-danger';
        break;
      case "blue":
      default:
        this.colorClass = 'bg-info';
    }
  }

  constructor(private configService: ConfigurationService) {
    this.logo =  configService.assetUrl('assets/book-store-logo.png');
  }


}
