import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  contacts: Contact[] = [];

  formGroupContact: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ContactService){
    this.formGroupContact = formBuilder.group({
      name: [''],
      age: [''],
      gender: [''],
      telephone: [''],
      favorite: ['']
    })
  }

  ngOnInit(): void {
      this.loadContacts()
  }

  loadContacts(){
    this.service.getContacts().subscribe({
      next: data => this.contacts = data
    })
  }

  save(){
    this.service.save(this.formGroupContact.value).subscribe({
      next: data => this.contacts.push(data)
    })
  }

  edit(contact: Contact){

  }
  
  delete(contact: Contact){

  }

}
