import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipie.model';
import { RecipiesService } from './recipies.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.page.html',
  styleUrls: ['./recipies.page.scss'],
})
export class RecipiesPage implements OnInit {

  recipes: Recipie[];

  constructor(private recipieService:  RecipiesService) { }

  ngOnInit() {
   this.recipes =  this.recipieService.getAllRecipies();
  }


}
