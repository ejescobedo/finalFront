import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Heatmap",
    rtlTitle: "لوحة القيادة",
    icon: "icon-world",
    class: ""
  },
  {
    path: "/maps",
    title: "Maps",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    class: "" },
  /*
  {
    path: "/notifications",
    title: "Notifications",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: ""
  },
  */
  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/login",
    title: "Log out",
    rtlTitle: " ",
    icon: "icon-single-02",
    class: ""
  }
];

export const ROUTESUser: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Heatmpa",
    rtlTitle: "لوحة القيادة",
    icon: "icon-world",
    class: ""
  },
  /*
  {
    path: "/notifications",
    title: "Notifications",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: ""
  },
  */
  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/login",
    title: "Log out",
    rtlTitle: " ",
    icon: "icon-single-02",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}


  ngOnInit() {
    const value = localStorage.getItem('role');
    
    if(value == 'admin'){
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }else{
      this.menuItems = ROUTESUser.filter(menuItem => menuItem);
    }
    
    //this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
