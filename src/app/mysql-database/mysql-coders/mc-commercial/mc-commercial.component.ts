import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SqlTableCodeComponent } from '../../../dashboard/components/sql-table-code/sql-table-code.component';
import { SqlObjectItem } from '../../../dashboard/Classes/sql-object-item';
import { CommercialService } from '../../../Services/commercial.service';
import { response } from 'express';

 enum ObjectType {
  IZJAVE = 'izjave',
  SPLOŠNO = 'splošno',
  DEFAULT = 'osnovno'
}


@Component({
  selector: 'app-mc-commercial',
  standalone: true,
  imports: [
    SqlTableCodeComponent
  ],
  templateUrl: './mc-commercial.component.html',
  styleUrl: './mc-commercial.component.scss'
})
export class McCommercialComponent  implements OnInit {
  public responseTime: any; 
  public selector_name: string = 'commercials' ;

  public DataList: Array<any> = [];

  public SqlObjects : Array<SqlObjectItem> = new Array<SqlObjectItem>();

  constructor (
    private _CommercialService: CommercialService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.setItems(ObjectType.DEFAULT);
  }


  setItems = (item_type: string) => {
    let items: Array<SqlObjectItem>  = [
      {
        id: 1,
        title: 'Bremepis',
        type: ObjectType.IZJAVE,
        icon: 'assets/images/icons/accepted.png'
      },
      {
        id: 2,
        title: 'Delovni Nalog',
        type: ObjectType.IZJAVE,
        icon: 'assets/images/icons/new-document.png'
      },
      {
        id: 4,
        title: 'Dobropis',
        type: ObjectType.IZJAVE,
        icon: 'assets/images/icons/payment-return.png'

      },
      {
        id: 5,
        title: 'Dokumentacijski Sistem',
        type: ObjectType.IZJAVE,
        icon: 'assets/images/icons/system.png'
      },
      {
        id: 6,
        title: 'Fakture',
        type: ObjectType.IZJAVE,
        icon: 'assets/images/icons/oauth.png'
      },
      {
        id: 7,
        title: 'Fakture tujina',
        type: ObjectType.IZJAVE,
        icon: 'assets/images/icons/oauth.png'
      },
      {
        id: 8,
        title: 'Naročila dobaviteljem',
        type: ObjectType.IZJAVE,
        icon: 'assets/images/icons/inventory.png'
      },
      {
        id: 9,
        title: 'Naročila Kupcev',
        type: ObjectType.IZJAVE,
        icon: 'assets/images/icons/demand.png'
      },
      {
        id: 9,
        title: 'Obvestila za izpise',
        type: ObjectType.IZJAVE,
        icon: 'assets/images/icons/alert.png'
      },
      {
        id: 10,
        title: 'Opravljene storitve',
        type: ObjectType.IZJAVE,
        icon: 'assets/images/icons/service-done.png'
      },
      {
        id: 11,
        title: 'Ponudbe',
        type: ObjectType.IZJAVE,
        icon: 'assets/images/icons/purchasing.png'
      },
      {
        id: 12,
        title: 'Predračuni',
        type: ObjectType.IZJAVE,
        icon: 'assets/images/icons/inventory-white.png'
      },
      {
        id: 13,
        title: 'Splošne izjave',
        type: ObjectType.IZJAVE,
        icon: 'assets/images/icons/general-statments.png'
      },
      {
        id: 14,
        title: 'Tekst za email',
        type: ObjectType.IZJAVE,
        icon: 'assets/images/icons/gmail.png'
      },
      {
        id: 15,
        title: 'Načini Odprem',
        type: ObjectType.SPLOŠNO,
        icon: 'assets/images/icons/opening.png'
      }, 
      {
        id: 15,
        title: 'Tečajna Lista',
        type: ObjectType.SPLOŠNO,
        icon: 'assets/images/icons/payment-method.png'
      },
      {
        id: 16,
        title: 'Tipi Reklamacij',
        type: ObjectType.SPLOŠNO,
        icon: 'assets/images/icons/reclamation.png'
      },
      {
        id: 17,
        title: 'Tipi Cen',
        type: ObjectType.SPLOŠNO,
        icon: 'assets/images/icons/price-list.png'
      },
      {
        id: 18,
        title: 'Valute',
        type: ObjectType.SPLOŠNO,
        icon: 'assets/images/icons/currencies.png'
      },
      {
        id: 19,
        title: 'Vrste prometa',
        type: ObjectType.SPLOŠNO,
        icon: 'assets/images/icons/stock.png'
      },
      {
        id: 20,
        title: 'Vrste Tečajne Liste',
        type: ObjectType.SPLOŠNO,
        icon: 'assets/images/icons/sheet.png'
      }
    ]

    switch(item_type){
      case 'izjave':
        const IZJAVE : Array<SqlObjectItem> = items.filter((item : SqlObjectItem) => item.type === ObjectType.IZJAVE);
        this.SqlObjects = IZJAVE;
        break;
        case 'splošno':
          const SPLOŠNO : Array<SqlObjectItem> = items.filter((item: SqlObjectItem) => item.type === ObjectType.SPLOŠNO);
          this.SqlObjects = SPLOŠNO;
          break;
      default:
        this.SqlObjects = [];
        break;
    }

    //this.cdr.detectChanges();
  }

  getExchangeRates = () => {
    this._CommercialService.getExchangeRates().subscribe(
      response => {

      }
    )
  }

  getOpenMode = () => {
    this._CommercialService.getOpenMode().subscribe(
      response => {

      }
    )
  }

  getCreditNote = () => {
    this._CommercialService.getCreditNote().subscribe(
      response => {

      }
    )
  }

  getFakturing = () => {
    this._CommercialService.getFakturing().subscribe(
      response => {
        
      }
    );
  }

}

