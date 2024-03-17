import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { RegisterComponent } from './register/register.component';
import { MessagesComponent } from './messages/messages.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
import { AdminstudComponent } from './adminstud/adminstud.component';
import { AdNotesComponent } from './ad-notes/ad-notes.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'students', component:StudentListComponent},
  {path:'register', component:RegisterComponent},
  {path:'add', component:AddStudentComponent},
  {path:'edit', component:EditStudentComponent},
  {path:'message',component:MessagesComponent},
  {path:'adinlogin', component:AdminLoginComponent},
  {path:'adhome', component:AdminHomeComponent},
  {path:'adstud', component:AdminstudComponent},
  {path:'admessage', component:AdminMessagesComponent},
  {path:'adnotes', component:AdNotesComponent},
  {path:'notes', component:NotesComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
