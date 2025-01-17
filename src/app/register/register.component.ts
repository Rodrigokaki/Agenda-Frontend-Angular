import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  contacts: Contact[] = [];

  isEditing: Boolean = false;

  formGroupContact: FormGroup;

  fromGroupFilter: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ContactService, private router: Router, private toastr: ToastrService){
    this.formGroupContact = formBuilder.group({
      id:[''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      favorite: [false]
    })

    this.fromGroupFilter = formBuilder.group({
      filter:['0']
    })
  }

  ngOnInit(): void {
      this.loadContacts()
      const url = this.router.url
      if (url.split("/")[1] == "edit"){
        this.isEditing = true
        this.getContactById(url.split("/")[2])
      }
  }

  loadContacts(){
    this.service.getContacts().subscribe({
      next: data => this.contacts = data
    })
  }

  save(){
    this.service.save(this.formGroupContact.value).subscribe({
      next: () => this.router.navigate([''])
    })  
  }
  
  delete(contact: Contact){
    this.service.delete(contact).subscribe({
      next: () => this.loadContacts()
    })
  }

  getContactById(id: String){
    this.service.getContactById(id).subscribe({
      next: data => this.formGroupContact.setValue(data)
    })
  }

  update(){
    this.service.edit(this.formGroupContact.value).subscribe({
      next: () => this.router.navigate([''])
    })
  }

  get name(): any{
    return this.formGroupContact.get("name")
  }

  get age(): any{
    return this.formGroupContact.get("age")
  }

  get gender(): any{
    return this.formGroupContact.get("gender")
  }

  get telephone(): any{
    return this.formGroupContact.get("telephone")
  }

  showToastrSuccess(){
    this.toastr.success('Contato salvo!', 'Sucesso');
  }

}
