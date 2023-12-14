import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { ClientserveService } from '../clientserve.service';

@Component({
  selector: 'AddClientComponent',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {
  clientForm!: FormGroup;
  error_messages = {
    'cname': [
      { type: 'required', message: ' Name is required.' },
    ],
    'Address': [
      { type: 'required', message: ' Address is required.' },
    ],
    'cemail': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.>6 ' },
      { type: 'maxlength', message: 'Email length.<30' },
      { type: 'required', message: 'please enter a valid email address.' }
    ],

    'Pass1': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.>6' },
      { type: 'maxlength', message: 'password length.<30' }
    ],
    'Pass2': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.>6' },
      { type: 'maxlength', message: 'password length.<30' }
    ],
  }



  clientService!:ClientserveService;

  constructor(private fb: FormBuilder, clientService:ClientserveService){
    this.clientService=clientService;
    this.clientForm = this.fb.group({
      cname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      Address: new FormControl('', Validators.compose([
        Validators.required
      ])),
      cemail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      Pass1: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      Pass2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
    }, {
      validators: this.password.bind(this)
    });
    
   
  }

  password(formGroup: FormGroup) {
    console.log(formGroup.get('pass1'));
    return formGroup.get('pass1') === formGroup.get('pass2') ? null : { passwordNotMatch: true };
  }

  addClient():void{  
    
    this.clientService.addClient(1,this.clientForm.value.cname,this.clientForm.value.cemail,
      this.clientForm.value.Address,this.clientForm.value.Pass1);  
      
  }
}
