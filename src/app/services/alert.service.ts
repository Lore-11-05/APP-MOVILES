import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) {}

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Información',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async confirmAlert(header: string, message: string, functionOk: () => void, cancelText: string = 'Cancelar', confirmText: string = 'Aceptar') {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: cancelText,
          role: 'cancel'
        },
        {
          text: confirmText,
          handler: () => {
            functionOk();
          }
        }
      ]
    });
    await alert.present();
  }
}