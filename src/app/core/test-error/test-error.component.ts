import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {

  baseURl: string = environment.baseURl;
  validationErrors:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  get500Error() {
    this.http.get(this.baseURl + 'Bug/server-error').subscribe({
      next: (next) => console.info(next),
      error: (err) => console.error(err)
    });
  }

  get404Error() {
    this.http.get(this.baseURl + 'product/986').subscribe({
      next: (next) => console.info(next),
      error: (err) => console.error(err)
    });
  }
  get400Error() {
    this.http.get(this.baseURl + 'Bug/bad-Request').subscribe({
      next: (next) => console.info(next),
      error: (err) => console.error(err)
    });
  }


  get400ValidationError() {
    this.http.get(this.baseURl + 'Bug/bad-request/three').subscribe({
      next: (next) => console.info(next),
      error: (err) => this.validationErrors = err.errors
    });
  }
}
