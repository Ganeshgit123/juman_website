import { Component } from '@angular/core';
import {
  Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel,
  NavigationError, RouteConfigLoadStart, RouteConfigLoadEnd
} from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'juman';
  isLoading: boolean;
  constructor(private router: Router, private translateservice: TranslateService) {
    // Spinner for lazyload modules
    // router.events.forEach((event) => {
    //   if (event instanceof RouteConfigLoadStart) {
    //     this.isLoading = true;
    //   } else if (event instanceof RouteConfigLoadEnd) {
    //     this.isLoading = false;
    //   }
    // });
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
    const lang = localStorage.getItem("lang") || "en";
    const dir = localStorage.getItem("dir") || "ltr";
    this.translateservice.use(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }
  lang: any;
  dir: any;
  header: any;
  transparentHeader: any;

  ngOnInit(): void {
    this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.header = (event.url !== '/')
      }
      if (event instanceof NavigationEnd) {
        this.transparentHeader = (event.url == '/')
      }
    });
    this.lang = localStorage.getItem("lang") || "en";
    this.dir = localStorage.getItem("dir") || "ltr";
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.isLoading = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        this.isLoading = false;
      },2000)
    }

    //Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => {
        this.isLoading = false;
      },2000)
    }
    if (event instanceof NavigationError) {
      setTimeout(() => {
        this.isLoading = false;
      },2000)
    }
  }
}
