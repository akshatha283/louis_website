import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {}

  submitForm(formData: any) {
    return this.http.post('http://localhost:3000/api/form', formData);
  }
}


