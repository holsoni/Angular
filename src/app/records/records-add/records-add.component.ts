import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {RecordService} from "../../service/record.service";
import {v4 as uuidv4} from "uuid";
import {NotificationsService} from "../../service/notification.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-records-add',
  templateUrl: './records-add.component.html',
  styleUrls: ['./records-add.component.css']
})
export class RecordsAddComponent {

  users:any[] = [];
  signedIn:any[] = [];
  record:any;

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
      firstName:['firstName', /*Validators.required*/],
      lastName:['lastname'/*, Validators.required*/],
      type:['type'],
      email:['email'/*, [Validators.required,Validators.email]*/],
      password:['password'/*, [Validators.required, this.validatePassword()]*/],
      confirmedPassword:['password'/*,Validators.required*/],
      subjects:this.fb.array([]),
      description:['description'],
      sex: ['sex'],
      phone: ['phone'/*, Validators.pattern(/^\+380\d{9}$/)*/]
    }/*,{ validators: this.confirmedPasswordvalidation }*/)




  constructor(private snackBar: MatSnackBar, private service: RecordService, private fb: FormBuilder,
              private notifications: NotificationsService) {}

  ngOnInit(){
    this.getProgress();
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

    console.log("value",this.profileFbForm.value);

    this.record = this.profileFbForm.value;

    this.service.create(this.record).subscribe(
      (response) => {
        console.log('Record created successfully:', response);
        this.notifications.showSuccessMessage('Record created successfully');
      },
      (error) => {
        console.error('Error creating record:', error);
        this.notifications.showErrorMessage('Error creating record');
      }
    );
    this.resetForm();
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
      //console.log(newProfile);
      this.users.push(newProfile);
      //this.service.create(newProfile);
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

  getProgress():number{
    let count = 0;
    const controls = this.profileFbForm.controls;
    for (const key in controls) {
      // @ts-ignore
      const control =this.profileFbForm.get(key);
      if (control instanceof FormControl && control.value && control.valid && control.touched) {
        count++;
      }
    }
    count = 100/7 * count;
    return count;
  }

  checkValid() {
    console.log("not valid");
    if(!this.profileFbForm.valid){
      this.notifications.showWarningMessage("Form not valid!");    }
  }
}
