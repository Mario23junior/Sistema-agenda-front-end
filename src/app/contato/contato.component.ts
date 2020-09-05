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
      contato: Contato[] = [];

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
       const formValues = this.formulario.value;
       const contato : Contato = new Contato(formValues.nome, formValues.email);
       this.service.save(contato).subscribe( resposta  => {
          this.contato.push(resposta);
          console.log(this.contato);
       })
     }

}
