import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getStudent(this.route.snapshot.params['id']);
  }

  getStudent(id) {
    this.http.get('http://localhost:8080/student/'+id).subscribe(data => {
      this.student = data;
    });
  }

  updateStudent(id) {
    this.http.put('http://localhost:8080/student/'+id, this.student)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/student-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
