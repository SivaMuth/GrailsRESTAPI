import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { StudentComponent } from "./student/student.component";
import { StudentCreateComponent } from "./student-create/student-create.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { StudentEditComponent } from "./student-edit/student-edit.component";

const routes: Routes = [
  {
    path: 'students',
    component: StudentComponent,
    data: { title: 'Student List' }
  },
  {
    path: 'student-create',
    component: StudentCreateComponent,
    data: { title: 'Add Student' }
  },
  {
    path: 'student-details/:id',
    component: StudentDetailComponent,
    data: { title: 'Student Details' }
  },
  {
    path: 'student-edit/:id',
    component: StudentEditComponent,
    data: { title: 'Edit Student' }
  },
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
