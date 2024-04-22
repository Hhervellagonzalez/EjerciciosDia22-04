import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  informacion = [
    {
      id: 1,
      imagen: 'assets/images/foto1.jpg',
      titulo: 'Hacking etico',
      texto: 'Lorem ipsum dolor sit amet consectetur adipiscing elit neque, volutpat sollicitudin at penatibus est suscipit id venenatis, leo torquent primis per pulvinar sodales semper. Arcu blandit nulla iaculis ultricies gravida etiam laoreet, molestie torquent cum litora ut. '
    },
    {
      id: 2,
      imagen: 'assets/images/foto2.jpg',
      titulo: 'Legislacion de seguridad en Europa',
      texto: 'Lorem ipsum dolor sit amet consectetur adipiscing elit neque, volutpat sollicitudin at penatibus est suscipit id venenatis, leo torquent primis per pulvinar sodales semper. Arcu blandit nulla iaculis ultricies gravida etiam laoreet, molestie torquent cum litora ut. '
    },
    {
      id: 3,
      imagen: 'assets/images/foto3.jpg',
      titulo: '¿Como evitar que te hackeen la cuenta?',
      texto: 'Lorem ipsum dolor sit amet consectetur adipiscing elit neque, volutpat sollicitudin at penatibus est suscipit id venenatis, leo torquent primis per pulvinar sodales semper. Arcu blandit nulla iaculis ultricies gravida etiam laoreet, molestie torquent cum litora ut. '
    },
    {
      id: 4,
      imagen: 'assets/images/foto4.jpg',
      titulo: '¿Que es phising?',
      texto: 'Lorem ipsum dolor sit amet consectetur adipiscing elit neque, volutpat sollicitudin at penatibus est suscipit id venenatis, leo torquent primis per pulvinar sodales semper. Arcu blandit nulla iaculis ultricies gravida etiam laoreet, molestie torquent cum litora ut. '
   }
  ];
}
