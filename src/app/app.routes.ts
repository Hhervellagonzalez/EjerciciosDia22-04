import { Routes } from '@angular/router';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { DetallesComponent } from './detalles/detalles.component';
import { BlogComponent } from './blog/blog.component';
import { InformacionComponent } from './informacion/informacion.component';

export const routes: Routes = [
{path: '', component: PaginaprincipalComponent},
{path: 'Blog', component: BlogComponent},
{path: 'Informacion/:id', component: InformacionComponent},
{path: 'Detalles/:id', component: DetallesComponent}   
];
