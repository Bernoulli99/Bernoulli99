import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[]=['Spiderman', 'Ironman', 'Thor', 'Hulk', 'Cap America'];
  heroeBorrado: string='';

  borrarPrimerHeroe(){
    this.heroeBorrado=this.heroes.shift()||'';
  }
  borrarUltimoHeroe(){
    this.heroeBorrado=this.heroes.pop()||'';
  }
}
