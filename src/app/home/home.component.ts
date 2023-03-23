import {Component, Input, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import { v4 as uuidv4 } from 'uuid';
import {elementAt} from "rxjs";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  users:any[] = [];
  signedIn:any[] = [];
  checked:boolean = false;
  profileExisting:boolean = false;
  wrongData:boolean = false;
  confirmedPasswordvalidation: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    let password = control.get('password');
    let confirmedPassword = control.get('confirmedPassword');

    if(!this.profileExisting){
      return password && confirmedPassword && password.value != confirmedPassword.value ?
        { passwordNotConfirmed: true } : null;
    }
    else return null;
  };

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
      phone: ['phone', Validators.pattern(/^\+380\d{9}$/)]
  },{ validators: this.confirmedPasswordvalidation })




  constructor(private fb:FormBuilder) {
  }
  ngOnInit(){

  }
   validatePassword() : ValidatorFn  {

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



  onSubmit() {
    this.addProfile();
    this.resetForm();
    console.log("users: ")
    console.log(this.users);
    console.log("signed users: ")
    console.log(this.signedIn);


  }

  resetForm(){
    this.profileFbForm.reset();
    this.subjects.clear();
    this.checked = false;
    this.profileFbForm.get('confirmedPassword')?.setValidators(Validators.required);

  }

  get checkBoxValue(){
    return this.checked;
  }

  addProfile(){
    if(this.profileExisting){
      let newProfile = this.profileFbForm.value;
      newProfile.id = this.signedUserId;
      this.signedIn.push(this.profileFbForm.value)
    }
    else{
      let newProfile = this.profileFbForm.value;
      newProfile.id = uuidv4();
      console.log(newProfile);
      this.users.push(newProfile);
    }


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

  checkProfileExistence():boolean{
    if(this.users.length > 0) {
      let name = this.profileFbForm.get('firstName')?.value;
      let lastName = this.profileFbForm.get('lastName')?.value;
      let profile = this.users.find(prof => prof.firstName.toLowerCase() === name?.toLowerCase()
        && prof.lastName.toLowerCase() === lastName?.toLowerCase());


      if(profile != null){
       // console.log("checkProfileEx TRUE" );
        console.log(profile.id);
        this.profileExisting = true;
        this.profileFbForm.get('confirmedPassword')?.clearValidators();
        this.profileFbForm.get('confirmedPassword')?.updateValueAndValidity();

        return true;
      }
      else {
      //  console.log("checkProfileEx FALSE" );
        this.profileExisting = false;
      }

    }
  //  console.log(this.profileExisting);
    return false;
  }

  signIn():boolean {
    let inpPassword = this.profileFbForm.get('password')?.value;
    let inpEmail = this.profileFbForm.get('email')?.value;
    let name = this.profileFbForm.get('firstName')?.value;
    let lastName = this.profileFbForm.get('lastName')?.value;
    let profile = this.users.find(prof => prof.firstName.toLowerCase() === name?.toLowerCase()
      && prof.lastName.toLowerCase() === lastName?.toLowerCase());
    let password = profile.password;
    let email = profile.email;

    console.log("password: "+ password);
    console.log("email: "+email);
    console.log("inp password: "+ inpPassword);
    console.log("inp email: "+inpEmail);

    if (password.toString() == inpPassword?.toString() && email.toString() == inpEmail?.toString()){
      console.log("You can sign in")
      this.wrongData = false;
      return false;
    }
    else {
      this.wrongData = true;
    }

    console.log(this.wrongData);
    return false;
  }


  get signedUserId():string{
    let name = this.profileFbForm.get('firstName')?.value;
    let lastName = this.profileFbForm.get('lastName')?.value;
    let profile = this.users.find(prof => prof.firstName.toLowerCase() === name?.toLowerCase()
      && prof.lastName.toLowerCase() === lastName?.toLowerCase());

    return profile.id;
  }

   wrongDataFalse(){
      this.wrongData = false;
  }

}
