import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveStudent() {
    this.http.post('http://localhost:8080/student', this.student)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/student-details/', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
