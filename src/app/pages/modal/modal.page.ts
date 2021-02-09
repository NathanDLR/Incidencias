import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AlertController, ModalController} from '@ionic/angular';
import { IncidenciasServiceService } from 'src/app/services/incidencias-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  nuevaIncidenciaForm: FormGroup;

  constructor(private incidenciasService: IncidenciasServiceService , public alertController: AlertController, public modalController: ModalController) {
  }

  ngOnInit() {
    this.nuevaIncidenciaForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),

      description: new FormControl('', [
        Validators.required
      ]),

      date: new FormControl('', [
        Validators.required
      ]),

      solved: new FormControl('', [
        Validators.required
      ])

    })
  }

  async validate(name, desc, date){

    // Check if inputs are empty
    if(name.value == "" || desc.value == ""){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debes rellenar todos los campos',
        buttons: ['OK']
      })

      await alert.present();

    }
    else{
      this.createNewIncidencia(name.value, desc.value, date.value);
      this.dismissModal();
    }
  }

  // Create new Incidencia
  createNewIncidencia(name, desc, date){
    this.incidenciasService.addIncidencia(this.incidenciasService.createNewIncidencia(name, desc, date, false));
    // console.log(this.incidenciasService.incidencias);
  }

  dismissModal(){
    this.modalController.dismiss();
  }

}
