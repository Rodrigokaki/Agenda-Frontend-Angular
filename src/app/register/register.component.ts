import { Component } from '@angular/core';
import { Contact } from '../contact';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  contacts: Contact[] = [
    {
      id: 1,
      name: "Rodrigo",
      age: 23,
      gender: 1,
      telephone: 1231123112,
      favorite: 0
    },
    {
      id: 2,
      name: "Aline",
      age: 23,
      gender: 2,
      telephone: 1123154561,
      favorite: 1
    },
    {
      id: 3,
      name: "Seu jorge",
      age: 45,
      gender: 3,
      telephone: 9999999999,
      favorite: 0
    },
  ];

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
