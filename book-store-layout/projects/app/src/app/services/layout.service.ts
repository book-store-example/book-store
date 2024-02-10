import { Injectable } from '@angular/core';
import {NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";
import {SidenavComponent} from "../components/sidenav/sidenav.component";
import {NgbOffcanvasRef} from "@ng-bootstrap/ng-bootstrap/offcanvas/offcanvas-ref";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  sidenavRef?: NgbOffcanvasRef;
  constructor(private offCanvasService: NgbOffcanvas) { }

  openSidebar(){
    this.sidenavRef = this.offCanvasService.open(SidenavComponent, { position: 'end',  backdrop: false  });
  }

  closeSidebar(){
    this.sidenavRef?.dismiss();
  }
}
