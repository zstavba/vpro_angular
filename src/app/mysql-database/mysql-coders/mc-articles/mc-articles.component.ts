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
import { CustomTarrifs } from '../../../dashboard/Classes/custom-tarrifs';
import { NgxPaginationModule } from 'ngx-pagination';
import { Tax } from '../../../dashboard/Classes/tax';
import { GroupType } from '../../../dashboard/Classes/group-type';
import { resolveNaptr } from 'dns';
import { Sectors } from '../../../dashboard/Classes/sectors';
import { MeasurementUnits } from '../../../dashboard/Classes/measurement-units';
import { GroupService } from '../../../Services/group.service';
import { ArticleType } from '../../../dashboard/Classes/article-type';

@Component({
  selector: 'app-mc-articles',
  standalone: true,
  imports: [
    PaginationPipe,
    SystemPaginationComponent,
    SqlTableCodeComponent,
    RouterLink,
    SqlTableComponent,
    NgxPaginationModule
  ],
  templateUrl: './mc-articles.component.html',
  styleUrl: './mc-articles.component.scss'
})
export class McArticlesComponent implements OnInit {


  public selector_name: string = 'articles' ;
  public ItemsClicked: number = 0;
  p: number = 1;

  // Parameters List
  public selectedID: number = 0;
  public selectedRows: boolean[] = [];
  public _ArticleID ?: number | string;
  public ArticleObject: Article = new Article(); 
  public responseTime: any; 
  

  // Array List of data 
  public DataList: Array<any> = [];
  public ObjectKeys: string[] = [];


  constructor(
    private ArticleService: ArticleService,
    private ProductionService: ProductionService,
    private CountryService: CountryService,
    private BankService: BankService ,
    private MuService: MeasurementsService,
    private cdr: ChangeDetectorRef,
    private GroupService: GroupService
  ) {}


  ngOnInit(): void {
      //this.get();
      //this.getSectors();
    

  }

   get = () => {
    let startTime = performance.now();
     this.ArticleService.get().subscribe(
       response => {
        this.DataList =  response;
        this.cdr.detectChanges();
        let endTime = performance.now();



       }
   )
  }



  getArticleTypeList = () => {
    let startTIme = performance.now();
    this.ArticleService.getArticleType().subscribe(
      response => {
        this.DataList = response;
        this.cdr.detectChanges();

        let endTime = performance.now();
        this.responseTime = ((endTime - startTIme) / 1000).toFixed(2);

        console.log(this.DataList);

        //console.log(this.ArticleTypeList)
      }
    )
  }

  getAlternatives = () => {
    let startTime = performance.now();
    this.ProductionService.getAlternatives().subscribe(
      response => {
        //console.log(response);
        this.DataList =  response.alternatives_list;
        this.cdr.detectChanges();
        let endTime = performance.now();

        this.responseTime = ((endTime - startTime) / 1000).toFixed(2);

        //console.log(this.AlternativesList)
      }
    );
  }

  setTableKeys =  (table_name: string) =>  {
      switch(table_name) {
        case 'articles':
            let A = Article.getKeys();
            this.ObjectKeys.push(...A);
          break;
        case 'alternatives':
            let AK = AlternativeCiphers.getKeys();
            this.ObjectKeys.push(...AK)
          break;
        case 'costum_tariffs':
            let CT = CustomTarrifs.getKeys();
            this.ObjectKeys.push(...CT);
          break;

        case 'tax':
          let tax = Tax.getKeys();
          this.ObjectKeys.push(...tax);
          break;
        case 'sectors': 
            let SE = Sectors.getKeys();
            this.ObjectKeys.push(...SE);
          break;
        case 'meassurment_units':
            let MU = MeasurementUnits.getKeys();
            this.ObjectKeys.push(...MU);
          break;
        case 'groups':
            let GROUP = GroupType.getKeys();
            this.ObjectKeys.push(...GROUP);
          break;
        case 'article_types':
            let AT = ArticleType.getKeys();
            this.ObjectKeys.push(...AT);
          break;
      }

  }

  getCustomTariffs = () => {
    let startTime = performance.now();
    this.CountryService.getCostumsTarrifs().subscribe(
      response => {
        this.DataList =  response;
        this.cdr.detectChanges();
        let endTime = performance.now();
        this.responseTime = ((endTime - startTime) / 1000).toFixed(2);
     
        
      }
    )
  }

  getTax = () => {
    this.BankService.getTax().subscribe(
      response => {
        this.DataList =  response;
        console.log(this.DataList)
        this.cdr.detectChanges();
      }
    )
  }

  getMu = () => {
    let startTime = performance.now();
    this.MuService.get().subscribe(
      response => {
        this.DataList =  response;
        let endTime = performance.now();
        this.responseTime = ((endTime - startTime) / 1000).toFixed(2);
        console.log(this.DataList);
        this.cdr.detectChanges();
      }
    )
  }


  getSectors = () => {

    let startTime = performance.now();
    this.BankService.getSectors().subscribe(
      response => {
        this.DataList = response.sectors_list;

        let endTime = performance.now();

        this.responseTime = ((endTime - startTime) / 1000).toFixed(2);
        //console.log(response);

      }
    );
  }

  getGroup = () => {
    let startTime = performance.now();
    this.GroupService.get().subscribe(
      response => {
        this.DataList = response;
        let endTime = performance.now();
        this.responseTime = ((endTime - startTime) / 1000).toFixed(2);
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
                this.setTableKeys('costum_tariffs');
                this.getCustomTariffs();
              break;
            case 'Grupe DDV':
                this.selector_name = 'taxes'
                this.setTableKeys('tax');
                this.getTax();
              break;
            case 'Izvedbe':
                this.selector_name = 'sectors';
                this.setTableKeys('sectors');
                this.getSectors();
              break;
            case 'Merske Enote':
                this.selector_name = 'meassurment_units';
                this.setTableKeys('meassurment_units');
                this.getMu();
              break;
            case 'Skupine':
                this.selector_name = 'groups'
                this.setTableKeys('groups');
                this.getGroup();
                
              break;
            case 'Tipi Artiklov':
                this.selector_name = 'article_types';
                this.setTableKeys('article_types');
                this.getArticleTypeList();
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
