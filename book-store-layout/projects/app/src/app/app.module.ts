import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FusionizeAngularModule} from "@fusionize/fusionize-angular";
import {NgbModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {RouterModule} from "@angular/router";
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SidenavComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FusionizeAngularModule,
    NgbModule,
    NgbNavModule,
    RouterModule.forRoot([
      {path: "", pathMatch: "full", redirectTo: "books"},
      {
        path: "books", component: MainComponent, children: [
          {path: "**", component: MainComponent}
        ]
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
