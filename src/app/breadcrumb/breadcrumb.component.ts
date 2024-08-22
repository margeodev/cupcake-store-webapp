import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface BreadCrumbItem {
  text: string;
  link?: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

  @Input() items: Array<MenuItem> = [];
  
}
