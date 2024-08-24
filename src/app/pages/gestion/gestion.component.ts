import { Component } from '@angular/core';
import { Tabla1Component } from "../../components/tabla1/tabla1.component";

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [Tabla1Component],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {

}
