import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.css']
})
export class HeaderOneComponent {

  public isCollapsed = true;
  page:any;
  lang: any;
  dir: any;
  headBackground:any;
  
  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 200) {
      this.headBackground = true;
    }else{
      this.headBackground = false;
    }

  }
  ngOnInit(): void {
    this.page = 'home';
    this.lang = localStorage.getItem("lang") || "en";
    this.dir = localStorage.getItem("dir") || "ltr"
  }

  pageActive(value){
    sessionStorage.setItem('pageName', value);
  }

  switchLang(lang: any) {
    if (lang == "ar") {
      var dir = "rtl";
    } else {
      var dir = "ltr";
    }
    localStorage.setItem("lang", lang);
    localStorage.setItem("dir", dir);
    // console.log("lang",localStorage)
    window.location.reload();
  }
}
