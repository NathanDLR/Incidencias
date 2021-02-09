import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Incidencia } from 'src/app/classes/incidencia';
import { IncidenciasServiceService } from 'src/app/services/incidencias-service.service';
import { ModalPage } from "../modal/modal.page";

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.page.html',
  styleUrls: ['./incidencias.page.scss'],
})
export class IncidenciasPage implements OnInit {

  incidencias: Incidencia[];
  resolvedIncidencias: Incidencia[];
  ind: number;
  selectedIncidencia: Incidencia;

  constructor(public modalController : ModalController, private arrayIncidenciasService: IncidenciasServiceService, private router: Router){
    this.incidencias = this.arrayIncidenciasService.incidencias;
    this.resolvedIncidencias = [];
  }

  ngOnInit() {
  }

  async presentModal(){
    const modal = await this.modalController.create({
      component: ModalPage
      
    });
    return await modal.present();
  }

  showDetails(id: number){
    this.router.navigate(['/details', {id: id}]);
  }

  checkAsResolved(id: number){
    // Iterate through incidencias untill we find the selected one
    for(let i = 0; i < this.arrayIncidenciasService.incidencias.length; i++){
      this.ind = this.arrayIncidenciasService.incidencias[i].getID();
      
      if(this.ind == id){
        this.selectedIncidencia = this.arrayIncidenciasService.incidencias[i];

        // Check incidencia as resolved 
        this.selectedIncidencia.setSolved(true);

        // Delete from array
        this.arrayIncidenciasService.deleteIncidencia(this.selectedIncidencia);

        // Add it to resolvedIncidencias array
        this.resolvedIncidencias.push(this.selectedIncidencia);
      }
    }
  }
}

