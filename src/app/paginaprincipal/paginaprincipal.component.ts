import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paginaprincipal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './paginaprincipal.component.html',
  styleUrl: './paginaprincipal.component.css'
})
export class PaginaprincipalComponent {
casas = [
  {id : 1, imagen : 'assets/images/chalet1.jpg',nombre: 'Chalet', descripcionCorta : '¡Descubre tu próximo hogar en esta encantadora casa en venta!. Situada en el apacible vecindario de [nombre del vecindario], esta casa ofrece la combinación perfecta de tranquilidad y conveniencia, con fácil acceso a tiendas, restaurantes y parques cercanos.'},
  {id : 2, imagen : 'assets/images/casaCampo.jpg',nombre: 'Casa de Campo', descripcionCorta : 'Ubicada en un entorno natural privilegiado, esta casa de campo ofrece tranquilidad y conexión con la naturaleza, ideal para escapar del bullicio de la ciudad.'},
  {id : 3, imagen : 'assets/images/casaRural.jpg',nombre: 'Casa Rural', descripcionCorta : 'Un encantador alojamiento situado en un entorno natural privilegiado. A continuación, se detallan sus principales características.'}
]
}
