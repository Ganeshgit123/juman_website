import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment.prod';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {  
   endpoint = environment.baseUrl;
   dir: any;
   getBanners = [];
   getData = [];
   careerForm: FormGroup;
   submitted = false;
   iconImg = null;
   fileImgUpload: any;
   iconImgUrl: any;
   fileUpload:any;
   bannerLength: number;

   constructor(public fb: FormBuilder,public authService: AuthService,private toastr: ToastrService) {}
  
   ngOnInit(): void {
    this.dir = localStorage.getItem('dir')  || "ltr";
    sessionStorage.setItem('pageName', 'career');

     const bannerData = {
      relations: ["header"],
      filter: {
        header: { id: "168d8ed9-6ea5-4707-bdce-c8d0689090f4" }
      },
      sort: { seq: "ASC" }
    }
    this.authService.getBanners(bannerData).subscribe(
      (res: any) => {
         this.getBanners = res.payload.filter(element => {
          return element.isActive;
        })
        this.bannerLength = this.getBanners.length;
      });

      this.careerForm = this.fb.group({
        name: ['', [Validators.required]],
        email: ['', [Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]],
        mobileNumber: ['', [Validators.required, Validators.pattern("^[0-9]{9}")]],
        department: ['', [Validators.required]],
        resume: [''],
      });

      const object = {
        relations: ["header", "images"],
        filter: {
          header: { id: "168d8ed9-6ea5-4707-bdce-c8d0689090f4" }
        },
        sort: { seq: "ASC" }
      }
      this.authService.getSectionsByHeaderId(object).subscribe(
        (res: any) => {
          this.getData = res.payload;
          this.getData = res.payload.filter(element => {
            return element.isActive;
          })
        });
   }

   get f() { return this.careerForm.controls; }


   checkFileFormat(checkFile) {
    if (checkFile.type == 'image/png' || checkFile.type == 'image/jpeg' || checkFile.type == 'application/pdf') {
      return false;
    } else {
      return true;
    }
  }

   uploadImageFile(event){
    const file = event.target.files && event.target.files[0];
    var valid = this.checkFileFormat(event.target.files[0]);
    if (!valid) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        this.fileUpload = event.target.result;
      }
      this.fileImgUpload = file;
    }
   }

   onSubmitData(){
    this.submitted = true;
      if (!(this.careerForm.valid && this.fileImgUpload)) {
        return false;
      }

      const formData = new FormData();
      formData.append('resume', this.fileImgUpload)
      formData.append('name', this.careerForm.value.name)
      formData.append('email', this.careerForm.value.email)
      formData.append('mobileNumber', this.careerForm.value.mobileNumber)
      formData.append('department', this.careerForm.value.department)

      this.authService.createCareer(formData)
      .subscribe((res: any) => {
        if (res.code == 200) {
          this.toastr.success('Success ', 'Form Submitted Successfully');
          this.submitted = false;
          this.fileImgUpload = null;
          this.iconImg = null;
          this.fileUpload = null;
          this.careerForm.reset();
          this.ngOnInit();
        }
      });
   }

}
