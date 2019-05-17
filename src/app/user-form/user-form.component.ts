import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  petsArr: any = [
    { name: 'Dog', value: false },
    { name: 'Snake', value: false },
    { name: 'Rabbit', value: false },
    { name: 'Hamster', value: false },
    { name: 'Cat', value: false },
    { name: 'Exotic', value: false }];

  mainCheckbox = false;
  userForm: FormGroup;
  picsLinks: Array<any>;

  constructor(
    private fb: FormBuilder,
    public api: ApiCallService) {
  }

  ngOnInit() {
    this.initForm();
  }

  chengeAllCheckgoxGroupValue(event) {
    const currentFormArr = <FormArray>this.userForm.get('pets') as FormArray;
    let workingArr = this.petsArr
    if (event.target.checked && currentFormArr.length === 0) {
      this.mainCheckbox = true;
      for (let i = 0; i < workingArr.length; i++) {
        currentFormArr.push(new FormControl(workingArr[i].name));
        workingArr[i].value = true;
      }
    } else if (!event.target.checked) {
      this.mainCheckbox = false;
      for (let i = 0; i < workingArr.length; i++) {
        currentFormArr.removeAt(0);
        workingArr[i].value = false;
      }
    } else if (event.target.checked && currentFormArr.length !== 0) {
      this.mainCheckbox = true;
      workingArr = workingArr.map(function (el) {
        if (el.value === false) {
          el.value = true;
          currentFormArr.push(new FormControl(el.name));
        }
        return el;
      });
    }
  }

  onChangeFormArr(event) {
    this.mainCheckbox = false;
    const currentFormArr = <FormArray>this.userForm.get('pets') as FormArray;
    let workingArr = this.petsArr;
    if (event.target.checked) {
      currentFormArr.push(new FormControl(event.target.value));
      workingArr = workingArr.map(function (el) {
        if (el.name === event.target.value) {
          el.value = true;
        }
        return el;
      });

    } else {
      const i = currentFormArr.controls.findIndex(x => x.value === event.target.value);
      currentFormArr.removeAt(i);
      workingArr = workingArr.map(function (el) {
        if (el.name === event.target.value) {
          el.value = false;
        }
        return el;
      });
    }
  }

  previewFile(event) {

    if (event.target.files) {
      Promise.all(Array.from(event.target.files).map(i => new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(i);
        reader.onload = (event) => {
          resolve(event.target.result);
        }
      }))).then(arr => {
        this.picsLinks = [...arr];
      });
    }
  }

  createMessage() {
    console.log(this.userForm)
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      pets: this.fb.array([]),
      petsName: [''],
      petsDescription: ['']
    })
  }

}
