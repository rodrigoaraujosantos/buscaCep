import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Informacoes } from './models/informacoes';


import { BuscaCepService } from './services/busca-cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  
  localCepForm: FormGroup = this.fb.group({
    cep: ['',[Validators.required]]
  })

  gInformacoes!: any

  constructor(
    private buscaCepService: BuscaCepService,
    private fb: FormBuilder
  ) {}

  
  OnInit(){
    this.buscaCepService.prucurarCep('04364030').subscribe((data) => {console.log(data)})
  }

  recebendoCepHtml(){
    const cepInformado = this.localCepForm.get('cep')?.value

    this.buscaCepService.prucurarCep(cepInformado).subscribe((data) => {
        this.gInformacoes = data
    })
    
  }

  clearCep() {
    
  }

}
  