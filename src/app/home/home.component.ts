import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../contatos.service';
import { Contatos } from '../shared/contatos.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ContatosService]
})
export class HomeComponent implements OnInit {

  public contatos: Contatos[]
 
  constructor(private contatosService: ContatosService) { }

  ngOnInit() {
    //this.contatos = this.contatos
    //console.log(this.contatosService.getContatos())

    this.contatosService.getContatos()
    .then(( contatos: Contatos[]) => {
      this.contatos = contatos
    })
     .catch(( param: any ) => {
      console.log(param)
    })
  }
}
