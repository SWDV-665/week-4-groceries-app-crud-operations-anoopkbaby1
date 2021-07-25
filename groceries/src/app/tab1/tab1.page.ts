import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { GroceriesService } from '../providers/groceries.service';
import { InputDialogService } from '../providers/input-dialog.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesService, public inputDialogService: InputDialogService) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

  async removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = await this.toastCtrl.create({
      color: 'warning',
      message: 'Removing Item - ' + index + " ...",
      duration: 2000,
      position: 'bottom'

    });
    await toast.present();

    this.dataService.removeItem(index); 
  }

  async editItem(item, index) {
    console.log("Edit Item - ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
    this.inputDialogService.showPrompt(item, index);
  } 

  addItem() {
    console.log("Adding Item");
    this.inputDialogService.showPrompt();
  }
}
