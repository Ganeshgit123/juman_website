import { Component,HostListener } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.css']
})
export class HeaderOneComponent {
  endpoint = environment.baseUrl;
  public isCollapsed = true;
  page:any;
  lang: any;
  dir: any;
  headBackground:any;
  getData = [];
  home = [];
  whoWeAre = [];
  operating = [];
  board = [];
  service = [];
  installation = [];
  market = [];
  project = [];
  career = [];
  contact = [];
  logoImg = [];
  
  constructor(public authService: AuthService,) { }

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
    this.dir = localStorage.getItem('dir');

    this.authService.getHeader().subscribe(
      (res: any) => {
        this.getData = res.payload;
        
        this.home = this.getData.filter(element =>{
          return element.seq === 1;
        })
        this.whoWeAre = this.getData.filter(element =>{
          return element.seq === 2;
        })
        this.operating = this.getData.filter(element =>{
          return element.seq === 3;
        })
        this.board = this.getData.filter(element =>{
          return element.seq === 4;
        })
        this.service = this.getData.filter(element =>{
          return element.seq === 5;
        })
        this.installation = this.getData.filter(element =>{
          return element.seq === 6;
        })
        this.market = this.getData.filter(element =>{
          return element.seq === 7;
        })
        this.project = this.getData.filter(element =>{
          return element.seq === 8;
        })
        this.contact = this.getData.filter(element =>{
          return element.seq === 9;
        })
        this.career = this.getData.filter(element =>{
          return element.seq === 10;
        })
        this.logoImg = this.getData.filter(element =>{
          return element.seq === 11;
        })
      })
      
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
