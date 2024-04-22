import { Component,  OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {
  Info: any;
  informacionDetallada = [
    {
      id: 1,
      imagen: 'assets/images/foto1.jpg',
      titulo: 'Hacking etico',
      texto: 'Lorem ipsum dolor sit amet. Aut quasi deleniti eum magnam laboriosam ut praesentium nihil ut itaque nisi sed autem molestiae quo obcaecati sint sed nemo necessitatibus. Qui sunt facilis At quidem numquam sed nesciunt eius. Sit ratione iure ea vero sunt non omnis accusamus aut eveniet corporis in cupiditate repudiandae aut dolores magnam et obcaecati saepe. Ab veritatis accusamus qui fugit galisum hic numquam veritatis est numquam quae. Eos officia temporibus sed consequatur autem et recusandae velit ea ullam dolorum qui magnam deleniti eum consequatur dolorem est nihil consequatur. Eum mollitia doloremque sit praesentium expedita a consectetur ipsum. Est aperiam explicabo qui galisum omnis quo dolorum dicta est temporibus ullam? Quo quidem ipsam qui quas quia aut dolorem rerum qui animi quis id nemo officia et quae ratione. Rem provident earum aut itaque quasi sit quidem voluptatem At quibusdam porro. Ex similique quia At voluptate aspernatur ex dolorum quia ea deleniti cumque aut eligendi voluptatem in autem dignissimos est temporibus minima. '
    },
    {
      id: 2,
      imagen: 'assets/images/foto2.jpg',
      titulo: 'Legislacion de seguridad en Europa',
      texto: 'Lorem ipsum dolor sit amet. Aut quasi deleniti eum magnam laboriosam ut praesentium nihil ut itaque nisi sed autem molestiae quo obcaecati sint sed nemo necessitatibus. Qui sunt facilis At quidem numquam sed nesciunt eius. Sit ratione iure ea vero sunt non omnis accusamus aut eveniet corporis in cupiditate repudiandae aut dolores magnam et obcaecati saepe. Ab veritatis accusamus qui fugit galisum hic numquam veritatis est numquam quae. Eos officia temporibus sed consequatur autem et recusandae velit ea ullam dolorum qui magnam deleniti eum consequatur dolorem est nihil consequatur. Eum mollitia doloremque sit praesentium expedita a consectetur ipsum. Est aperiam explicabo qui galisum omnis quo dolorum dicta est temporibus ullam? Quo quidem ipsam qui quas quia aut dolorem rerum qui animi quis id nemo officia et quae ratione. Rem provident earum aut itaque quasi sit quidem voluptatem At quibusdam porro. Ex similique quia At voluptate aspernatur ex dolorum quia ea deleniti cumque aut eligendi voluptatem in autem dignissimos est temporibus minima. '
     },
    {
      id: 3,
      imagen: 'assets/images/foto3.jpg',
      titulo: '¿Como evitar que te hackeen la cuenta?',
      texto: 'Lorem ipsum dolor sit amet. Aut quasi deleniti eum magnam laboriosam ut praesentium nihil ut itaque nisi sed autem molestiae quo obcaecati sint sed nemo necessitatibus. Qui sunt facilis At quidem numquam sed nesciunt eius. Sit ratione iure ea vero sunt non omnis accusamus aut eveniet corporis in cupiditate repudiandae aut dolores magnam et obcaecati saepe. Ab veritatis accusamus qui fugit galisum hic numquam veritatis est numquam quae. Eos officia temporibus sed consequatur autem et recusandae velit ea ullam dolorum qui magnam deleniti eum consequatur dolorem est nihil consequatur. Eum mollitia doloremque sit praesentium expedita a consectetur ipsum. Est aperiam explicabo qui galisum omnis quo dolorum dicta est temporibus ullam? Quo quidem ipsam qui quas quia aut dolorem rerum qui animi quis id nemo officia et quae ratione. Rem provident earum aut itaque quasi sit quidem voluptatem At quibusdam porro. Ex similique quia At voluptate aspernatur ex dolorum quia ea deleniti cumque aut eligendi voluptatem in autem dignissimos est temporibus minima. '
    },
    {
      id: 4,
      imagen: 'assets/images/foto4.jpg',
      titulo: '¿Que es phising?',
      texto: 'Lorem ipsum dolor sit amet. Aut quasi deleniti eum magnam laboriosam ut praesentium nihil ut itaque nisi sed autem molestiae quo obcaecati sint sed nemo necessitatibus. Qui sunt facilis At quidem numquam sed nesciunt eius. Sit ratione iure ea vero sunt non omnis accusamus aut eveniet corporis in cupiditate repudiandae aut dolores magnam et obcaecati saepe. Ab veritatis accusamus qui fugit galisum hic numquam veritatis est numquam quae. Eos officia temporibus sed consequatur autem et recusandae velit ea ullam dolorum qui magnam deleniti eum consequatur dolorem est nihil consequatur. Eum mollitia doloremque sit praesentium expedita a consectetur ipsum. Est aperiam explicabo qui galisum omnis quo dolorum dicta est temporibus ullam? Quo quidem ipsam qui quas quia aut dolorem rerum qui animi quis id nemo officia et quae ratione. Rem provident earum aut itaque quasi sit quidem voluptatem At quibusdam porro. Ex similique quia At voluptate aspernatur ex dolorum quia ea deleniti cumque aut eligendi voluptatem in autem dignissimos est temporibus minima. '
    }
  ];
  @Input()
   id: string = '';
   ngOnInit(): void {
    this.Info = this.informacionDetallada.find(c => c.id === parseInt(this.id, 10));
  }

}
