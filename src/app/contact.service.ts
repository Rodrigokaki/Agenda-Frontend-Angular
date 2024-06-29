import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = "http://localhost:3000/contacts"

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.url)
  }

  save(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>(this.url, contact)
  }
}
