import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
  { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
  { path: '/techniciens', title: 'Techniciens',  icon:'business_badge', class: '' },
  { path: '/machines', title: 'machines',  icon:'design_bullet-list-67', class: '' },
  { path: '/pieces', title: 'Pieces',  icon:' loader_gear', class: '' },
  { path: '/fournisseurs', title: 'Fournisseurs',  icon:'shopping_delivery-fast', class: '' },
  { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
  { path: '/fabricants', title: 'fabricants',  icon:'business_bank', class: '' },
  { path: '/cle', title: 'Machines Cle',  icon:'objects_key-25', class: '' },
  { path: '/preventives', title: 'Intervention Preventifs',  icon:'ui-1_calendar-60', class: '' },
  { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },
  { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
  { path: '/bon', title: 'Icons',  icon:'ui-2_settings-90', class: '' },

 // { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
 // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro'  }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
