import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipie } from '../recipie.model';
import { RecipiesService } from '../recipies.service';

@Component({
  selector: 'app-recipies-details',
  templateUrl: './recipies-details.page.html',
  styleUrls: ['./recipies-details.page.scss'],
})
export class RecipiesDetailsPage implements OnInit {

  loadedRecipies: Recipie;

  constructor(
    private activatedRouter: ActivatedRoute,
    private recipiesService: RecipiesService,

    private router: Router,
    private altController: AlertController) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipieId')) {
        // redirect if not
        return;
      }
      const recipieId = paramMap.get('recipieId');
      this.loadedRecipies = this.recipiesService.getRecipie(recipieId);
    });
  }

  onDeleteRecipie() {
    this.altController.create(
    {
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipie?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipiesService.deleteRecipie(this.loadedRecipies.id);
            this.router.navigate(['/recipies']);
          }
        }
      ]
    }).then(altCont => {
       altCont.present();
    });
  }

}
