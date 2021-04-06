import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
   
     heroes:string[]= ['spiderman','ironman','hulk','thor','capitan america'];

     heroeborrado: string = '' ;
 
borrarheroe(){
  console.log('borrando');
  this.heroeborrado=this.heroes.shift()|| '';

}


}

 