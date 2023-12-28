import { Component } from '@angular/core';
import { SystemPaginationComponent } from '../components/system-pagination/system-pagination.component';
import { TableRowOrderSaveComponent } from '../components/table-row-order-save/table-row-order-save.component';

enum  WORKORDER_STATUS {
  FINISHED = 'Zaključeno',
  WAITING = "Na čakanju",
  EDIT = "Poknjiži"
}

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [
    SystemPaginationComponent,
    TableRowOrderSaveComponent
  ],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})


export class DashboardHomeComponent {

  
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

  public WorkOrderSaveKList : Array<any> = [
    {
      workorder_id: 230058965,
      workorder_title: "FLIS/F T15 (2424) 500/212",
      workorder_status: WORKORDER_STATUS.FINISHED,
      workorder_date: "13. Januar 2024" 
    },
    {
      workorder_id: 230058794,
      workorder_title: "FLIS/F T10 (2020) 480/225",
      workorder_status: WORKORDER_STATUS.EDIT,
      workorder_date: "15. Januar 2024" 
    },
    {
      workorder_id: 230058694,
      workorder_title: "FLIS/F T9 (2323) 570/230",
      workorder_status: WORKORDER_STATUS.WAITING,
      workorder_date: "17. Januar 2024" 
    },
    {
      workorder_id: 230058745,
      workorder_title: "FLIS/F T4 (0504) 525/212",
      workorder_status: WORKORDER_STATUS.WAITING,
      workorder_date: "17. Januar 2024" 
    },
    {
      workorder_id: 230058649,
      workorder_title: "FLIS/F T3 (_01) 350/225",
      workorder_status: WORKORDER_STATUS.WAITING,
      workorder_date: "18. Januar 2024" 
    },
    {
      workorder_id: 230058698,
      workorder_title: "FLIS/F T15 (118118) 550/225",
      workorder_status: WORKORDER_STATUS.WAITING,
      workorder_date: "18. Januar 2024" 
    }
  ]



}
