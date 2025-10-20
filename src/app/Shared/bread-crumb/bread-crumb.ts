
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import {  RouterLink } from '@angular/router';
@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bread-crumb.html',
  styleUrl: './bread-crumb.scss'
})
export class BreadCrumb {
  breadcrumbs: { label: string; url: string }[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadcrumbs(this.route.root);
      });
  }

  private buildBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: any[] = []
  ): any[] {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) return breadcrumbs;

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map((segment: any) => segment.path).join('/');
      if (routeURL !== '') url += `/${routeURL}`;

      const label = child.snapshot.data['breadcrumb'] || this.formatLabel(routeURL);
      if (label) breadcrumbs.push({ label, url });

      return this.buildBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  private formatLabel(segment: string): string {
    if (!segment) return '';
    return segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
}
