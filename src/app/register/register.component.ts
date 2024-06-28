import { Component } from '@angular/core';
import { Contact } from '../contact';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  contacts: Contact[] = [];

  formGroupContact: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formGroupContact = formBuilder.group({
      name: [''],
      age: [''],
      gender: [''],
      telephone: [''],
      favorite: ['']
    })
  }
}
