import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../Services/article.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Article } from '../../../dashboard/Classes/article';
import { SqlTableCodeComponent } from '../../../dashboard/components/sql-table-code/sql-table-code.component';
import { CountryService } from '../../../Services/country.service';
import { response } from 'express';
import { CustomTarrifs } from '../../../dashboard/Classes/custom-tarrifs';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../../Pipes/search.pipe';
import { Country } from '../../../dashboard/Classes/country';

import * as $ from 'jquery';

@Component({
  selector: 'app-mc-article-view',
  standalone: true,
  imports: [
    SqlTableCodeComponent,
    RouterLink,
    RouterOutlet,
    SearchPipe,
    FormsModule,
  ],
  templateUrl: './mc-article-view.component.html',
  styleUrl: './mc-article-view.component.scss'
})
export class McArticleViewComponent implements OnInit {

  public _routeID ?: string ;

  public Info ?: Article;
  public CTList: Array<CustomTarrifs> = new Array<CustomTarrifs>();
  public CountryList: Array<Country> = new Array<Country>();
  public searchText: string = '';
  public searchCountryText: string = '';
  public CountryObject: Country = new Country();
  public CountryObjectActive: boolean = false;
  public CustomTariffsObject: CustomTarrifs = new CustomTarrifs();
  public CustomTariffsObjectActive: boolean = false;

  constructor (
    private _ArticleService: ArticleService, 
    private router: ActivatedRoute,
    private _CountryService: CountryService,
    private cdr: ChangeDetectorRef,

    ) {}

  ngOnInit(): void {
      this._routeID = this.router.snapshot.paramMap.get('id') as string;
      this.getInfo();
      this.getCT();
      this.getCountry();
  }

  toggleSelectMenu = (item: string) => {
      switch(item){
        case 'country_list_dropbox':
            jQuery('.country_list_dropbox').fadeToggle();
          break;
        case 'custom_tariffs_dropbox':
          jQuery('.custom_tariffs_dropbox').fadeToggle();
          break;
      }
  }


  setItemToggle = (item: string) => {
    if(jQuery(item).hasClass('translate-x-0')){
      jQuery(item).removeClass('translate-x-0');
      jQuery(item).addClass('translate-x-5');
      jQuery(item).removeClass('bg-white');
      jQuery(item).addClass('bg-indigo-400');
    } else{
      jQuery(item).removeClass('translate-x-5');
      jQuery(item).addClass('translate-x-0');
      jQuery(item).addClass('bg-white');
      jQuery(item).removeClass('bg-indigo-400');
    }
  }

  setObjectToggle = (item: string) => {
      switch(item) {
        case 'active_item':
          this.setItemToggle('.item_active');
        break;
        case 'active_intrasant':
          this.setItemToggle('.intrasant_active');
        break;
      }
  }

  setChosenItem = (item: any, item_type: any, active: boolean) => {
      switch(item_type) {
        case 'country':
            this.CountryObject = item;
            this.CountryObjectActive = active;
            this.cdr.detectChanges();
          break;
        case 'custom_tariffs':
            this.CustomTariffsObject = item;
            this.CustomTariffsObjectActive = active;
            this.cdr.detectChanges();
          break;
      }
  }



  getInfo = () => {
    this._ArticleService.getItemByCode(this._routeID).subscribe(
      (response: any) => {
        this.Info = response[0];
      }
    )
  }

  getCT = () => {
    this._CountryService.getCostumsTarrifs().subscribe(
      response => {
          this.CTList = response;
      }
    )
  }

  getCountry = () => {
    this._CountryService.getList().subscribe(
      response => {
          this.CountryList = response; 
      }
    )
  }
}