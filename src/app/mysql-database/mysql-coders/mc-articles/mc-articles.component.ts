import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../Services/article.service';
import { PaginationPipe } from '../../../Pipes/pagination.pipe';
import { SystemPaginationComponent } from '../../../dashboard/components/system-pagination/system-pagination.component';
import { SqlTableCodeComponent } from '../../../dashboard/components/sql-table-code/sql-table-code.component';
import { Article } from '../../../dashboard/Classes/article';
import { RouterLink } from '@angular/router';
import { response } from 'express';
import { ProductionService } from '../../../Services/production.service';
import { CountryService } from '../../../Services/country.service';
import { BankService } from '../../../Services/bank.service';

@Component({
  selector: 'app-mc-articles',
  standalone: true,
  imports: [
    PaginationPipe,
    SystemPaginationComponent,
    SqlTableCodeComponent,
    RouterLink,
    SqlTableCodeComponent
  ],
  templateUrl: './mc-articles.component.html',
  styleUrl: './mc-articles.component.scss'
})
export class McArticlesComponent implements OnInit {

  // Parameters List
  public selectedID: number = 0;
  public selectedRows: boolean[] = [];
  public _ArticleID ?: number | string;
  public ArticleObject: Article = new Article(); 


  // Array List of data 
  public ArticleList: Array<Article> = new Array();
  public ArticleTypeList: Array<any> = new Array();
  public AlternativesList: Array<any> = new Array();
  public CustomTariffsList: Array<any> =  new Array();
  public BankTaxList: Array<any> =  new Array();



  constructor(
    private ArticleService: ArticleService,
    private ProductionService: ProductionService,
    private CountryService: CountryService,
    private BankService: BankService  
  ) {}


  ngOnInit(): void {
      this.get();
      this.getArticleTypeList();
      this.getAlternatives();
      this.getCustomTariffs();
      this.getTax();
  }

   get = () => {
     this.ArticleService.get().subscribe(
       response => {
         this.ArticleList = response
         //console.log(this.ArticleList)
       }

   )
  }

  getArticleTypeList = () => {
    this.ArticleService.getArticleType().subscribe(
      response => {
        this.ArticleTypeList = response.article_type_list;
        //console.log(this.ArticleTypeList)
      }
    )
  }

  getAlternatives = () => {
    this.ProductionService.getAlternatives().subscribe(
      response => {
        this.AlternativesList = response.alternatives_list;
        //console.log(this.AlternativesList)
      }
    );
  }

  getCustomTariffs = () => {
    this.CountryService.getCostumsTarrifs().subscribe(
      response => {
        this.CustomTariffsList = response.custom_tariffs_list;
        //console.log(this.CustomTariffsList);
      }
    )
  }

  getTax = () => {
    this.BankService.getTax().subscribe(
      response => {
        this.BankTaxList = response.ddv_list;
        //console.log(this.BankTaxList);
      }
    )
  }


  getItemById = (): void  => {
    try {

      if(this._ArticleID == null || this._ArticleID == '')
        throw new Error('Najprej morate izbrati določen element v tabeli, da ga lahko uredite !!! ')

      this.ArticleService.getItemByCode(this._ArticleID).subscribe(
        response => {
          this.ArticleObject = response as Article

          //console.log(this.ArticleObject);
        }
      )
        

    } catch (error: any) {
      throw new Error(`Message: ${error}`);
    }
  }

  
  selectRow = (AT: any) => {
     this.selectedID = AT.code;
     this.selectedRows[AT.id] = !this.selectedRows[AT.id];
     this._ArticleID = AT.code;
  }



}
