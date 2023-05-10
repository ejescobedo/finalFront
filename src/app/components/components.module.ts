import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeatmapComponent } from './heatmap/heatmap.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, ReactiveFormsModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, HeatmapComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent]
})
export class ComponentsModule {}