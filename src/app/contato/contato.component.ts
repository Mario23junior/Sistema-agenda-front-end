import { Component, OnInit } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from '../contato.service';

import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
       
      formulario: FormGroup;

  constructor(
    private service : ContatoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
      this.formulario = this.fb.group({
        nome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      })       
   

  }
     submit(){
       const erroNomeRequired = this.formulario.controls.nome.errors.required
       const erroEmailRequired = this.formulario.controls.email.errors.required

       console.log('erro Nome Required :', erroNomeRequired);
       console.log('erro email Required :', erroEmailRequired);


       // this.service.save(c).subscribe( resposta  => {
       //    console.log(resposta)
     }

}
