import { Contatos } from './shared/contatos.model';
import { Http }  from '@angular/http';

import { Injectable } from '@angular/core'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class ContatosService{

    constructor( private http:Http){}

    public getContatos(): Promise<Contatos> {
       return this.http.get('http://localhost:3000/clientes')
        .toPromise()
        .then((resposta: any) => resposta.json())
    }
}

    