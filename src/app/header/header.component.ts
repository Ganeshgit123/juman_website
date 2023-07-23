import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  public isCollapsed = true;
  page:any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = sessionStorage.getItem('pageName')
  }

  pageActive(value){
    if(value == 'home'){
      sessionStorage.setItem('pageName', value);
    }else{
      this.page = value;
    }
    console.log("page",this.page)
  }
}
