import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  constructor(private http:HttpClient) { }
   private API_MUSICA="https://jritsqmet.github.io/web-api/musica.json"


   getMusica():Observable<any>{
    return this.http.get(this.API_MUSICA)
   }
}
