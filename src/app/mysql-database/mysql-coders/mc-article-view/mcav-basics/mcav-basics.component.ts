import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../../Services/article.service';
import { FormsModule } from '@angular/forms';
import { Article } from '../../../../dashboard/Classes/article';
import { Observable, forkJoin, map } from 'rxjs';
import { CountryService } from '../../../../Services/country.service';
import { Country } from '../../../../dashboard/Classes/country';
import { response } from 'express';
import { MeasurementUnits } from '../../../../dashboard/Classes/measurement-units';
import { MeasurementsService } from '../../../../Services/measurements.service';
import { CostCities } from '../../../../dashboard/Classes/cost-cities';
import { CustomTarrifs } from '../../../../dashboard/Classes/custom-tarrifs';
import { ArticleType } from '../../../../dashboard/Classes/article-type';
import { ClassificationsService } from '../../../../Services/classifications.service';
import { Classification } from '../../../../dashboard/Classes/classification';
import { WarehouseService } from '../../../../Services/warehouse.service';
import { Warehouse } from '../../../../dashboard/Classes/warehouse';
import { UserService } from '../../../../Services/user.service';
import { UserInformation } from '../../../../dashboard/Classes/user-information';
import { User } from '../../../../dashboard/Classes/user';
import { support } from 'jquery';

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
  public MUList: Array<MeasurementUnits> = new Array<MeasurementUnits>();
  public CTList: Array<CustomTarrifs> = new Array<CustomTarrifs>();
  public ATList: Array<ArticleType> = new Array<ArticleType>();
  public CLList: Array<Classification> = new Array<Classification>();
  public WList: Array<Warehouse> = new Array<Warehouse>();
  public SpendersList: Array<UserInformation[]> = new Array<UserInformation[]>();
  public SuppliersList: Array<UserInformation> = new Array<UserInformation>();


  constructor (
    private router: ActivatedRoute, 
    private _ArticleService: ArticleService, 
    private _CountryService: CountryService,
    private _MU: MeasurementsService,
    public _CostUnitsService: CountryService,
    public _ClassificationService: ClassificationsService,
    private _WarehouseService: WarehouseService,
    public _UserService: UserService
  ) {}

  ngOnInit(): void {
      this.router.parent?.params.subscribe(
        params => {
          this._childRouteID = params['id']
        }
      )
      this.getInfo();
      this.getUnits();
      this.getCT();  
      this.getTypeList();    
      this.getClassification();
      this.getWarehouseList();
      this.getUserByType('suppliers');
  }

  getInfo = ()=> {
    this._ArticleService.getItemByCode(this._childRouteID).subscribe(
      (response: any) => {
          this.Info = response[0]
        }
    )
  }

  getTypeList = () => {
    this._ArticleService.getArticleType().subscribe(
      response => {
        this.ATList = response;
      }
    )
  }

  getUnits = () => {
    this._MU.get().subscribe(
      response => {
        this.MUList = response;
      }
    )
  }

  getCT = () => {
      this._CostUnitsService.getCostumsTarrifs().subscribe(
        response => {
            this.CTList = response;
        }
      )
  }

  getClassification = () => {
      this._ClassificationService.get().subscribe(
          response => {
            this.CLList = response;
            //console.log(this.CLList);
          }
      );
  }

  getWarehouseList = () => {
    this._WarehouseService.get().subscribe(
      response => {
        this.WList = response; 
      }
    )
  }

  getUserByType = (user_type: string) => {
    let Info =  this._UserService.getByType(user_type);


    switch(user_type){
      case 'suppliers':
        Info.subscribe(
          (response : any) => {
              this.SuppliersList = response;
              console.log(this.SuppliersList);
          }
        )
        break;
    }

  }



  

}
