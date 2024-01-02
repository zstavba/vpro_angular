import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
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
import { MessurmentUnits } from '../../../dashboard/Classes/messurment-units';
import { MeasurementsService } from '../../../Services/measurements.service';
import { EventEmitter } from 'stream';
import { SqlTableComponent } from '../../../dashboard/components/sql-table/sql-table.component';
import { AlternativeCiphers } from '../../../dashboard/Classes/alternative-ciphers';

@Component({
  selector: 'app-mc-articles',
  standalone: true,
  imports: [
    PaginationPipe,
    SystemPaginationComponent,
    SqlTableCodeComponent,
    RouterLink,
    SqlTableComponent
  ],
  templateUrl: './mc-articles.component.html',
  styleUrl: './mc-articles.component.scss'
})
export class McArticlesComponent implements OnInit {


  public selector_name: string = 'articles' ;
  public ItemsClicked: number = 0;


  // Parameters List
  public selectedID: number = 0;
  public selectedRows: boolean[] = [];
  public _ArticleID ?: number | string;
  public ArticleObject: Article = new Article(); 


  // Array List of data 
  public DataList: Array<any> = [];
  public ObjectKeys: string[] = [];


  constructor(
    private ArticleService: ArticleService,
    private ProductionService: ProductionService,
    private CountryService: CountryService,
    private BankService: BankService ,
    private MuService: MeasurementsService,
    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit(): void {
      //this.get();

  }

   get = () => {
     this.ArticleService.get().subscribe(
       response => {
        this.DataList =  response;
        this.cdr.detectChanges();
         //console.log(this.ArticleList)
       }
   )
  }



  getArticleTypeList = () => {
    this.ArticleService.getArticleType().subscribe(
      response => {
        this.DataList = response.article_type_list;
        this.cdr.detectChanges();
        //console.log(this.ArticleTypeList)
      }
    )
  }

  getAlternatives = () => {
    this.ProductionService.getAlternatives().subscribe(
      response => {
        //console.log(response);
        this.DataList =  response.alternatives_list;
        this.cdr.detectChanges();
        //console.log(this.AlternativesList)
      }
    );
  }

  setTableKeys =  (table_name: string) =>  {
      switch(table_name) {
        case 'articles':
            let A = Article.getKeys();
            //console.log(A)
            this.DataList = [];
            this.ObjectKeys.push(...A);
          break;
        case 'alternatives':
            let AK = AlternativeCiphers.getKeys();
            this.DataList = [];
            this.ObjectKeys.push(...AK)
            console.log(this.ObjectKeys);
          break;
      }

  }

  getCustomTariffs = () => {
    this.CountryService.getCostumsTarrifs().subscribe(
      response => {
        this.DataList =  response.custom_tariffs_list;
        this.cdr.detectChanges();
        //console.log(this.CustomTariffsList);
      }
    )
  }

  getTax = () => {
    this.BankService.getTax().subscribe(
      response => {
        this.DataList =  response.ddv_list;
        this.cdr.detectChanges();
        //console.log(this.BankTaxList);
      }
    )
  }

  getMu = () => {
    this.MuService.get().subscribe(
      response => {
        this.DataList =  response;
        this.cdr.detectChanges();
        //console.log(this.MuList)
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

  setArrayToZero = () => {
    this.ObjectKeys = [];
    this.DataList = [];
  }

  toggleSelectedItem = (item_name: string) : void => {
      try {

          this.setArrayToZero();
          switch(item_name){
            case 'Vsi Artikli':
              this.selector_name = 'articles' 
              this.setTableKeys('articles');
              this.get();

              break;
            case 'Alternativne Šifre':
              this.selector_name = 'alternatives' 
              this.setTableKeys('alternatives');
              this.getAlternatives(); 

              break;
            case 'Nabava': 
              this.selector_name = 'shopping'
              break;
            case 'Carinske tarife':
              this.selector_name = 'costum_tariffs'
              break;
            case 'Grupe DDV':
              this.selector_name = 'taxes'
              break;
            case 'Izvedbe':
              this.selector_name = 'performance'
              break;
            case 'Merske Enote':
              this.selector_name = 'units'
              break;
            case 'Skupine':
              this.selector_name = 'groups'
              break;
              case 'Tipi Artiklov':
              this.selector_name = 'article_type'
              break;
              case 'delete_items':
              default:
 
                break;
          }
         // console.log(this.selector_name)
          this.cdr.detectChanges();
      } catch(error: any) {
        throw new Error(`Napaka: ${error}`);
      }
  }


}
