import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
    
  student:any={};
  students;
   
  constructor() {  

  }
  

  resetStudent(){
    this.student={
      id:0,
      firstName:'',
      lastName:'',
      email:'',
      phone:''
    };
  }
 

 
  ngOnInit() {
    this.resetStudent();

    this.students =
    [
    {id:1,firstName:'John',lastName:'Doe',email:'john@mail',phone:'93458946934'},
    {id:2,firstName:'mikal',lastName:'jack',email:'mikal@mail',phone:'93458946934'},
    {id:3,firstName:'sachin',lastName:'tendulkar',email:'kjkfsdjohn@mail',phone:'93458946934'}
    ]; 

  } 

  addStudent(){
    this.students.push(this.student);
    this.resetStudent();
  }

deleteAllStudents(){
  this.students.splice(this.student);
}

  deleteStudent(id){
    var list=[];
    for(var i=0;i<this.students.length;i++){
      if(id != this.students[i].id){
      list.push(this.students[i]);
    }
   
    
  } 
  this.students=list;
  
  }

  selectStudent(student){
    this.student =student;
  }


  addUpdatePerson(){
    var updated= false;
    if(this.student.id == 0){
       this.student.id = Math.round(Math.random()*100000000);
    }
    for(var i=0;i<this.students.length;i++){
      if(this.student.id = this.students[i].id){
        updated=true;
        this.students[i]=this.student;
        break;
      }
    }
    if(!updated){
      this.students.push(this.student);
    }
    this.resetStudent();
  
  } 

}