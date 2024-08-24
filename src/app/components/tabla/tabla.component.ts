import { Component, inject } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio=inject(ProductoService)

  producto: any[] = [];
  filtroTipo: string = '';

  ngOnInit() {
    this.servicio.getProducto().subscribe(p => {
      this.producto = p;
    });
  }

  aplicarFiltro(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.filtroTipo = selectElement.value;
  }

  get productosFiltrados() {
    if (!this.filtroTipo) return this.producto;
    return this.producto.filter(p => p.tipo === this.filtroTipo);
  }

}





