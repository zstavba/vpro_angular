import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../Services/article.service';
import { PaginationPipe } from '../../../Pipes/pagination.pipe';
import { SystemPaginationComponent } from '../../../dashboard/components/system-pagination/system-pagination.component';
import { SqlTableCodeComponent } from '../../../dashboard/components/sql-table-code/sql-table-code.component';

@Component({
  selector: 'app-mc-articles',
  standalone: true,
  imports: [
    PaginationPipe,
    SystemPaginationComponent,
    SqlTableCodeComponent
  ],
  templateUrl: './mc-articles.component.html',
  styleUrl: './mc-articles.component.scss'
})
export class McArticlesComponent implements OnInit {

  public selectedID: number = 0;
  selectedRows: boolean[] = [];
  public ArticleList: Array<any> = new Array();


  constructor(private Article: ArticleService) {}


  ngOnInit(): void {
      this.get();
  }

  get = () => {
    this.Article.get().subscribe(
      response => {
        this.ArticleList = response.article_list
        //console.log(this.ArticleList)
      }

    )
  }

  
  selectRow = (AT: any) => {
    this.selectedID = AT.code;
    this.selectedRows[AT.id] = !this.selectedRows[AT.id];
  }


}
