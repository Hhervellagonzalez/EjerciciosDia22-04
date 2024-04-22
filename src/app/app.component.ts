import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { DetallesComponent } from './detalles/detalles.component';
import { BlogComponent } from './blog/blog.component';
import { InformacionComponent } from './informacion/informacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginaprincipalComponent, DetallesComponent,BlogComponent,InformacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjerciciosDia22-04';
}
