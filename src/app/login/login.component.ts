import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentsService } from '../services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
