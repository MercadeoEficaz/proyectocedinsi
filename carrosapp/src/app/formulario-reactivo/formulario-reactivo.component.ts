import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder){ }

  ngOnInit() {
    this.loginForm = this.fb.group({
      usuario: ["", Validators.required],
      contrasena: ["", Validators.required],
    })
  }

  get form() {
    return this.loginForm.controls
  }

  onSubmit(){ 
    console.log('enviado', this.loginForm)
  }

}