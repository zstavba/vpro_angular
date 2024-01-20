import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../../Services/article.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Article } from '../../../../dashboard/Classes/article';
import { CountryService } from '../../../../Services/country.service';
import { Country } from '../../../../dashboard/Classes/country';
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
import { PaginatePipe } from 'ngx-pagination';
import { SearchPipe } from '../../../../Pipes/search.pipe';
import { GroupService } from '../../../../Services/group.service';
import { GroupType } from '../../../../dashboard/Classes/group-type';
import { Group } from '../../../../dashboard/Classes/group';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Tax } from '../../../../dashboard/Classes/tax';
import { BankService } from '../../../../Services/bank.service';
import { response } from 'express';

@Component({
  selector: 'app-mcav-basics',
  standalone: true,
  imports: [
    FormsModule,
    SearchPipe,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  templateUrl: './mcav-basics.component.html',
  styleUrl: './mcav-basics.component.scss'
})
export class McavBasicsComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  // Route Parameters
  public _childRouteID: any;
  public Info ?: Article;

  // Search Parameters
  public searchUsers: string = '';
  public seachWarehouse: string = '';
  public searchUnitOne: string = '';
  public searchUnitTwo: string = '';
  public searchArticleType: string = '';

  public mergedDataList : { article: Article, country: Country }[] = [];
  
  //Units Functions 
  public MUList: Array<MeasurementUnits> = new Array<MeasurementUnits>();
  public UnitOneObject: MeasurementUnits = new MeasurementUnits(); 
  public UnitOneActive: boolean = false; 
  public UnitTwoObject: MeasurementUnits = new MeasurementUnits(); 
  public UnitTwoActive: boolean = false; 


  // Warehouse Functions
  public WList: Array<Warehouse> = new Array<Warehouse>();
  public ChosenWarehouseObject: Warehouse = new Warehouse(); 
  public WarehouseItemActive: boolean = false; 


  // Custom Tariffs Functions
  public CTList: Array<CustomTarrifs> = new Array<CustomTarrifs>();

  // Article Type Functions
  public ATList: Array<ArticleType> = new Array<ArticleType>();
  public ArticleTypeObject: ArticleType = new ArticleType(); 
  public ArticleTypeActive: boolean = false; 


  // Classification Functions
  public CLList: Array<Classification> = new Array<Classification>();

  //User Informations 'Spenders, Admins, Guest etc'
  public SpendersList: Array<UserInformation> = new Array<UserInformation>();
  public SuppliersList: Array<UserInformation> = new Array<UserInformation>();
  public ChosenSupplierObject: User = new User(); 
  public SupplierItemActive: boolean = false; 


  // List Groups 
  public group1: Array<GroupType> = new Array<GroupType>();
  public group2: Array<GroupType> = new Array<GroupType>();
  public group3: Array<GroupType> = new Array<GroupType>();
  public group4: Array<GroupType> = new Array<GroupType>();

  public ChosenGroup1Object: Group = new Group(); 
  public Group1ItemActive: boolean = false; 
  public ChosenGroup2Object: Group = new Group(); 
  public Group2ItemActive: boolean = false; 
  public ChosenGroup3Object: Group = new Group(); 
  public Group3ItemActive: boolean = false; 
  public ChosenGroup4Object: Group = new Group(); 
  public Group4ItemActive: boolean = false; 

  public group_length: Array<any> = new Array();


  // Tax Parameters
  public TaxList: Array<Tax> = new Array<Tax>();
  public TaxChoseObject: Tax = new Tax();
  public TaxObjectActive: boolean = false; 


  constructor (
    private router: ActivatedRoute, 
    private _ArticleService: ArticleService, 
    private _CountryService: CountryService,
    private _MU: MeasurementsService,
    public _CostUnitsService: CountryService,
    public _ClassificationService: ClassificationsService,
    private _WarehouseService: WarehouseService,
    public _UserService: UserService,
    private _GroupTypeService: GroupService,
    private _BankService: BankService
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
      this.getGroupType('1')
      this.getGroupType('2')
      this.getGroupType('03')
      this.getGroupType('04')

      this.group_length = [
        {
          type: "1",
          title: "Skupina 1",
          group: this.group1

        },
        {
          type: "2",
          title: "Skupina 2",
          group: this.group2

        },
        {
          type: "03",
          title: "Skupina 3",
          group: this.group3
        },
        {
          type: "04",
          title: "Skupina 4",
          group: this.group4
        },
      ];

      this.getTaxList();
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
            this.CLList = response
          }
      );
  }

  getWarehouseList = () => {
    this._WarehouseService.get().subscribe(
      response => {
        this.WList = response; 
        //console.log(response);
      }
    )
  }

  getUserByType = (user_type: string) => {
    let Info =  this._UserService.getByType(user_type);


    switch(user_type){
      case 'suppliers':
        Info.subscribe(
          (response : any) => {
              this.SuppliersList = response
          }
        )
        break;
    }

  }

  getGroupType = (group_name: string) => {
      this._GroupTypeService.getByType(group_name).subscribe(
        response => {
          switch(group_name){
            case '1':
              this.group1 = response
              break;
            case '2':
              this.group2 = response;
              break;
            case '03':
              this.group3 = response;
              break;
            case '04':
              this.group4 = response;
              break;
          }
        }
      )
  }

  getTaxList = () => {
    this._BankService.getTax().subscribe(
      response => {
        this.TaxList = response;
      }
    )
  }

  selectChosenItem = (object: any, name: string, active:boolean) => {
      switch(name){
        case 'article_type':
            this.ArticleTypeObject = object;
            this.ArticleTypeActive = active;
          break;
        case 'unit_one':
            this.UnitOneObject = object;
            this.UnitOneActive = active;
          break;    
        case 'unit_one':
            this.UnitTwoObject = object;
            this.UnitTwoActive = active;
          break;
        case 'suppliers':
          this.ChosenSupplierObject = object;
          this.SupplierItemActive = active;
         break;
        case 'warehouse':
            this.ChosenWarehouseObject = object;
            this.WarehouseItemActive = active;
         break;
        case '1':
            this.ChosenGroup1Object = object;
            this.Group1ItemActive = active;
         break;
        case '2':
          this.ChosenGroup2Object = object;
          this.Group2ItemActive = active;
         break;
        case '03':
          this.ChosenGroup3Object = object;
          this.Group3ItemActive = active;
         break;
        case '04':
          this.ChosenGroup4Object = object;
          this.Group4ItemActive = active;
         break;
        case 'tax':
            this.TaxChoseObject = object;
            this.TaxObjectActive = active;
          break;      
      }
  }



  
  toggleSelectedMenu = (item_name: string) => {
      switch(item_name){
        case 'supplier_menu':
            jQuery('.supplier_menu_dropdown').fadeToggle();
          break;
        case 'manufacturer_menu':
            jQuery('.manufacturer_menu_dropdown').fadeToggle();
          break;
        case 'warehouse_menu':
          jQuery('.warehouse_dropdown_menu').fadeToggle();
          break;
        case 'warehouse_unit_one_dropdown_menu':
            jQuery('.warehouse_unit_one_dropdown_menu').fadeToggle();
          break;
        case 'warehouse_unit_one_dropdown_menu':
            jQuery('.warehouse_unit_one_dropdown_menu').fadeToggle();
          break;
        case 'warehouse_unit_two_dropdown_menu':
            jQuery('.warehouse_unit_two_dropdown_menu').fadeToggle();
          break;
        case 'group_type_dropdown_menu_1':
            jQuery('.group_type_dropdown_menu_1').fadeToggle();
          break;
        case 'group_type_dropdown_menu_2':
            jQuery('.group_type_dropdown_menu_2').fadeToggle();
          break;
        case 'group_type_dropdown_menu_03':
            jQuery('.group_type_dropdown_menu_03').fadeToggle();
          break;
        case 'group_type_dropdown_menu_04':
            jQuery('.group_type_dropdown_menu_04').fadeToggle();
          break;
        case 'article_type_dropdown_menu':
          jQuery('.article_type_dropdown_menu').fadeToggle();
          break;
        case 'warehouse_unit_two_dropdown_menu':
            jQuery('.warehouse_unit_two_dropdown_menu').fadeToggle();
          break;
          case 'tax_menu_dropdown':
            jQuery('.tax_menu_dropdown').fadeToggle();
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
    this.setItemToggle(`.${item}`);
  }

  
  


}
