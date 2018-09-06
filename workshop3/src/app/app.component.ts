import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import{StarWarsService} from './starwars.service'
import{StarWarsStorageService} from './starwars.storage.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('form')
  form: NgForm;

constructor(private swSvc: StarWarsService, private swdbSvc: StarWarsStorageService){}


search(){
  console.log("people id: ", this.form.value.peopleId);

  this.swdbSvc.find(this.form.value.peopleId)
  .then(
 (result) =>{
console.log('found it: ', result)          //success
console.log('result: ',result);
 },
 /*(err)=>{}*/
 this.swSvc.searchPeople.bind(this.swSvc)   //catch
 }


  )
 
  this.swSvc.searchPeople(this.form.value.peopleId)
  //.then(this.swdbSvc.save)
  .then(data =>{
    console.log('result: >>' , data);
    this.swdbSvc.save(data);
  })
  .catch(err => {
    console.log('result: >>',err )
  })
  
  //use searchpplhere
  this.form.resetForm();
}






}
