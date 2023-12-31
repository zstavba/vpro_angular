import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../../Services/article.service';
import { FormsModule } from '@angular/forms';
import { Article } from '../../../../dashboard/Classes/article';
import { Observable, forkJoin, map } from 'rxjs';
import { CountryService } from '../../../../Services/country.service';
import { Country } from '../../../../dashboard/Classes/country';
import { response } from 'express';

@Component({
  selector: 'app-mcav-basics',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './mcav-basics.component.html',
  styleUrl: './mcav-basics.component.scss'
})
export class McavBasicsComponent implements OnInit {

  public _childRouteID: any;
  public Info ?: Article;

  public mergedDataList : { article: Article, country: Country }[] = [];

  constructor (
    private router: ActivatedRoute, 
    private _ArticleService: ArticleService, 
    private _CountryService: CountryService
  ) {}

  ngOnInit(): void {
      this.router.parent?.params.subscribe(
        params => {
          this._childRouteID = params['id'];
          //console.log(this._childRouteID)
        }
      )
      this.getInfo()
  }

  getInfo = ()=> {
    this._ArticleService.getItemByCode(this._childRouteID).subscribe(
      (response: any) => {
          this.Info = response[0]
      }
    )
    //console.log(this.Info);
  }

}
