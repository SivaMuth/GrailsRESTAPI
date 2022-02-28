import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getStudentDetail(this.route.snapshot.params['id']);
  }

  getStudentDetail(id) {
    this.http.get('http://localhost:8080/student/'+id).subscribe(data => {
      this.student = data;
    });
  }

  deleteStudent(id) {
    this.http.delete('http://localhost:8080/student/'+id)
      .subscribe(res => {
          this.router.navigate(['/students']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
