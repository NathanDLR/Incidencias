import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Incidencia } from 'src/app/classes/incidencia';
import { IncidenciasServiceService } from 'src/app/services/incidencias-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  id: number;
  ind: number;
  selectedIncidencia: Incidencia;

  constructor(private route: ActivatedRoute, private incidenciasService: IncidenciasServiceService) { }

  ngOnInit() {
    this.displayData();
  }

  displayData(){
    this.route.params.subscribe(m => {
      this.id = m['id'];
    })

    // Iterate through incidencias untill we find the selected one
    for(let i = 0; i < this.incidenciasService.incidencias.length; i++){
      this.ind = this.incidenciasService.incidencias[i].getID();
      
      if(this.ind == this.id){
        this.selectedIncidencia = this.incidenciasService.incidencias[i];
      }
    }
  }
  

}
