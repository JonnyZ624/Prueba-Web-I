import { Component, inject } from '@angular/core';
import { MusicaService } from '../../service/musica.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {

  musica:any
  servicio=inject(MusicaService)

  ngOnInit(){
    this.servicio.getMusica().subscribe(p=>{console.log(p)
      this.musica=p.musica
    })
  }

}
