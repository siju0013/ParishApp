import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Weblayout } from '../../Components/Web/weblayout/weblayout';
import { PortalLayout } from '../../Components/Portal/portal-layout/portal-layout';
import { BreadCrumb } from '../bread-crumb/bread-crumb';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, Layout, Weblayout, PortalLayout, BreadCrumb],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']
})
export class Layout {

}
