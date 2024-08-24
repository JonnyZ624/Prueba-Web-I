import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ApiComponent } from './pages/api/api.component';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"producto",component:ProductosComponent},
    {path:"gestion",component:GestionComponent},
    {path:"editarProductos/:idProducto",component:EditarProductoComponent},
    {path:"api",component:ApiComponent},

    {path:"**",redirectTo:"",pathMatch:'full' }
];
