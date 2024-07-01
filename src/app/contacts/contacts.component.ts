import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent extends RegisterComponent{

  onChange(){
    if(this.fromGroupFilter.value.filter == 1){
      for(let c of this.contacts){
        if(c.favorite == false){
          this.contacts.splice(this.contacts.indexOf(c), 1)
        }
      }
    }
    else{
      this.loadContacts()
    }
  }

}
