import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
  //to hold all contacts data from api
  allContacts:any = []
  loginDetails:any ;
  searchKey:string=''

  constructor(private api:ApiService){
    this.loginDetails = new Date()

  }
  ngOnInit(): void {
    // to get all contacts
    this.getAllContacts()
  }

      // to get all contacts
      getAllContacts(){
        //api call to get all contacts
this.api.allContacts()
.subscribe((result:any)=>{
  //result is all contacts array from api
  console.log(result);
  this.allContacts = result
  
})

      }

  // deleteContact
  deleteContact(contactId:any){
    this.api.deleteContact(contactId)
    .subscribe((data:any)=>{
      // window.location.reload()
      this.getAllContacts()
    })
  }

}


