import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentsService } from '../services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email:string =""
  password:string =""

  constructor(private toaster:ToastrService, private api:StudentsService, private router:Router){}

  login(){
    // login logic
    if(this.email && this.password){
      // this.toaster.success("Proceed to API call")
      this.api.getStudentsDetails().subscribe({
        next:(res:any)=>{
          console.log(res);
          // navigate
          this.router.navigateByUrl("/home")
        },
        error:(reason:any)=>{
          console.log(reason.message);
          
        }
      })
    }else{
      this.toaster.info("Please Fill The Form Completely!!!")
    }
  }
}
