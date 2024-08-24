import { Component, inject } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla1',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './tabla1.component.html',
  styleUrl: './tabla1.component.css'
})
export class Tabla1Component {

  servicio=inject(ProductoService)

  producto:any

  ngOnInit() {
    this.servicio.getProducto().subscribe(p => {
      this.producto = p;
    });
  }
  
  eliminar(id:any){
    
    this.servicio.deleteProducto(id).subscribe()
  }

}
