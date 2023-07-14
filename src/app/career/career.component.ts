import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ReCaptcha2Component } from 'ngx-captcha';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  protected aFormGroup: FormGroup;
  // @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
   @ViewChild('langInput') langInput: ElementRef;
 
   public captchaIsLoaded = false;
   public captchaSuccess = false;
   public captchaIsExpired = false;
   public captchaResponse?: string;
 
   public theme: 'light' | 'dark' = 'light';
   public size: 'compact' | 'normal' = 'normal';
   public lang = 'en';
   public type: 'image' | 'audio';
  
   constructor(private formBuilder: FormBuilder) {}
  
   ngOnInit() {
     this.aFormGroup = this.formBuilder.group({
       recaptcha: ['', Validators.required]
     });
   }
   // reset(): void {
   //   this.captchaElem.resetCaptcha();
   // }
   handleSuccess(data) {
     console.log(data);
   }
}
