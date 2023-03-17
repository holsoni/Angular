import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  users:any[] = [];
  submitted: boolean = false;
  profileFbForm = this.fb.group(
    {id: undefined,
      firstName:['firstName', Validators.required],
    lastName:['lastname', Validators.required],
    type:['type'],
    email:['email', [Validators.required,Validators.email]],
    password:['password', [Validators.required, this.validatePassword()]],
    confirmedPassword:['password',Validators.required],
      subjects:this.fb.array([]),
    description:['description'],
      sex: ['sex'],
      phone: ['phone', Validators.pattern(/^\+380\d{9}$/)],
  })
  constructor(private fb:FormBuilder) {
  }
  ngOnInit(){
  }
   validatePassword() : ValidatorFn {
  return (c: AbstractControl) => {
    if(c.value && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*.?%;_])[A-Za-z\d*.?%;_]{6,}$/.test(c.value)) {
      return null;
    } else {
      return {
        password: {
          valid: false
        }
      };
    }
  }}

/*  validateConfirmedPassword(): ValidatorFn = ValidationErrors | null => {
    let pass = this.profileFbForm.get('password')?.value;
    let confirmPass = this.profileFbForm.get('confirmedPassword')?.value;
    return pass === confirmPass ? null : { notSame: true }
  }*/
  onSubmit() {
    this.addProfile();
    console.log(this.users);
    this.resetForm();
    if (this.profileFbForm.valid) {
      console.log('form submitted');
    }
    this.submitted = true;
  }

  resetForm(){
    this.profileFbForm.reset();
    this.subjects.clear();
  }

  addProfile(){
    let newProfile = this.profileFbForm.value;
    newProfile.id = uuidv4();
    console.log(newProfile);
    this.users.push(newProfile);
  }
  get subjects(){
    return this.profileFbForm.get('subjects') as FormArray;
  }

  addSubject() {
    this.subjects.push(this.fb.control(""))
  }
  removeSubject(index: number) {
    this.subjects.removeAt(index);
  }

  removeAllSubjects(){
    this.subjects.clear();
  }

  onCheckboxChange(event:any){
    let sex = event.target.id;
    this.profileFbForm.controls['sex'].setValue(sex);

  }

  checkPassword() {
    const password = this.profileFbForm.get('password')?.value;
    const confirmedPassword = this.profileFbForm.get('confirmedPassword')?.value;

    if (password === confirmedPassword) {
      this.profileFbForm.get('confirmedPassword')?.setErrors(null);
    } else {
      this.profileFbForm.get('confirmedPassword')?.setErrors({ mismatch: true });
    }
  }



}
