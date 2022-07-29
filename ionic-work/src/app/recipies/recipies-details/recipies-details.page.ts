import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipie } from '../recipie.model';
import { RecipiesService } from '../recipies.service';

@Component({
  selector: 'app-recipies-details',
  templateUrl: './recipies-details.page.html',
  styleUrls: ['./recipies-details.page.scss'],
})
export class RecipiesDetailsPage implements OnInit {

  loadedRecipies: Recipie;

  constructor(private activatedRouter: ActivatedRoute, private recipiesService: RecipiesService) { }

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

}
