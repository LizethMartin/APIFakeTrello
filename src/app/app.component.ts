import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  characters: any;
  constructor(private http: HttpClient) {
    this.consultar();
  }

  consultar = async () => {
    this.http.get('https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes?size=12').subscribe((data:any) => {
      this.characters = data.items;
      //console.log(this.characters, typeof(this.characters));
    })
  };

  goBack(id) {
    const des = document.body.querySelector(`#cardT${id}`);
    des.classList.remove('classinvisible');
    des.classList.add('classvisible');

    const desT = document.body.querySelector(`#card${id}`);
    desT.classList.remove('classvisible');
    desT.classList.add('classinvisible');
  }

  goOutCard(id) {
    const desT = document.body.querySelector(`#card${id}`);
    desT.classList.remove('classinvisible');
    desT.classList.add('classvisible');

    const des = document.body.querySelector(`#cardT${id}`);
    des.classList.remove('classvisible');
    des.classList.add('classinvisible');
  }

  hover(id) {
    const content = document.querySelector(`#cardT${id}`);
    content.classList.remove('animate__animated', 'animate__fadeInTopRight', '0.5s');
    content.classList.add('animate__animated', 'animate__rubberBand', '0.5s', 'classvisible');
  }
}
