import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl, FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {RecordService} from "../../service/record.service";
import {v4 as uuidv4} from "uuid";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-records-edit',
  templateUrl: './records-edit.component.html',
  styleUrls: ['./records-edit.component.css']
})
export class RecordsEditComponent implements OnInit{

  id:any;
  record:any = {};

  checked:boolean = false;
  submitted=false;
  profileFbForm:FormGroup;
  constructor(private service: RecordService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.profileFbForm = this.fb.group({
      id: '',
      firstName: [''/*, Validators.required*/],
      lastName: [''/*, Validators.required*/],
      email: [''/*, [Validators.required, Validators.email]*/],
      type: '',
      password: [''/*, [Validators.required, Validators.minLength(6)]*/],
      confirmedPassword: [''/*, Validators.required*/],
      subjects: this.fb.array([]),
      sex: '',
      phone: '',
      description: ''
    }/*, { validators: this.confirmedPasswordvalidation }*/);
  }

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.service.getById(this.id)
      .subscribe(data => {
        this.record = data;
        this.profileFbForm.patchValue(this.record);
      }, error => console.log(error));
  }



  confirmedPasswordvalidation: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    let password = control.get('password');
    let confirmedPassword = control.get('confirmedPassword');

      return password && confirmedPassword && password.value != confirmedPassword.value ?
        { passwordNotConfirmed: true } : null;
  };



  updateRecord() {
    this.service.update(this.id, this.profileFbForm.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/records/list']);},
      error => console.log(error));
    this.record = null;
    this.service.getAll();
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
    this.updateRecord();
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

}
