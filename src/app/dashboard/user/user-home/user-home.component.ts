import { Component, OnInit } from '@angular/core';
import { UserAvatarComponent } from '../../components/user-avatar/user-avatar.component';
import { RouterLink } from '@angular/router';
import { WarehouseService } from '../../../Services/warehouse.service';
import { LineProductionComponent } from '../../components/line-production/line-production.component';
import { TopClientsComponent } from '../../components/top-clients/top-clients.component';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [
    RouterLink,
    UserAvatarComponent,
    LineProductionComponent,
    TopClientsComponent,
  ],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss'
})
export class UserHomeComponent implements OnInit{

  public WorkOrdersList : Array<any> = [
    {
      workorder_id: 23005895,
      workorder_ident: 995896,
      workorder_title: 'FLIS/F T9 (2323)24 480/230',
      workorder_sub_title: 'PES/PAN 4800 HKT OH',
      workorder__article_ammount: 10,
      workorder_article_length: 510,
      user: {
        first_name: "Petra",
        last_name: "Jalšovec"
      }
    },
    {
      workorder_id: 23005896,
      workorder_ident: 9958475,
      workorder_title: 'FLIS/S 4620 570/6,2/230',
      workorder_sub_title: 'SILON ELAST',
      workorder__article_ammount: 20,
      workorder_article_length: 240,
      user: {
        first_name: "Petra",
        last_name: "Jalšovec"
      }
    },
    {
      workorder_id: 23005862,
      workorder_ident: 995869,
      workorder_title: 'FLIS/F T4 (0504) 24 525/212',
      workorder_sub_title: 'MICRO 525 BT HKT',
      workorder__article_ammount: 15,
      workorder_article_length: 310,
      user: {
        first_name: "Tomaž",
        last_name: "Brumec"
      }
    },
    {
      workorder_id: 23008594,
      workorder_ident: 9945879,
      workorder_title: 'FLIS/F T3 (0110) 24 450/227',
      workorder_sub_title: 'PE 351 HKT OH GT',
      workorder__article_ammount: 6,
      workorder_article_length: 510,
      user: {
        first_name: "Helena",
        last_name: "Mogu"
      }
    }
  ]

  constructor (private _Warehoue: WarehouseService) {}
  ngOnInit(): void {
      //this.getList();
  } 


  // getList = () => {
  //     this._Warehoue.get().subscribe(
  //       response => {
  //         console.log(response);
  //       }
  //     )
  // }



}
