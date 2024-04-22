import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  casa: any;
  detalles = [
  {id : 1, imagen : 'assets/images/chalet1.jpg',nombre: 'Chalet', descripcion : 'Con un diseño contemporáneo y espacios luminosos, esta casa cuenta con una distribución abierta que maximiza el flujo de luz natural y crea un ambiente acogedor para toda la familia. Las habitaciones están diseñadas para brindar comodidad y privacidad, con amplios armarios empotrados y grandes ventanales que ofrecen vistas panorámicas al jardín.'},
  {id : 2, imagen : 'assets/images/casaCampo.jpg',nombre: 'Casa de Campo', descripcion : 'Con un ambiente acogedor y familiar, esta casa de campo es perfecta para disfrutar de momentos de descanso y recreación en compañía de seres queridos. Su diseño rústico y encantador resalta la belleza de los materiales naturales como la madera y la piedra, creando un ambiente cálido y acogedor'},
  {id : 3, imagen : 'assets/images/casaRural.jpg',nombre: 'Casa Rural', descripcion : 'La casa rural consta de un extenso salón comedor, ideal para reuniones familiares o entre amigos. Además, cuenta con una amplia y funcional cocina totalmente equipada, perfecta para preparar deliciosas comidas caseras.'}
  ]
  @Input()
   id: string = '';
   ngOnInit(): void {
    this.casa = this.detalles.find(c => c.id === parseInt(this.id, 10));
  }
}
