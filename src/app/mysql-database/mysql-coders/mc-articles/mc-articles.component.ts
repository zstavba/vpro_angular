import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../Services/article.service';
import { PaginationPipe } from '../../../Pipes/pagination.pipe';
import { SystemPaginationComponent } from '../../../dashboard/components/system-pagination/system-pagination.component';
import { SqlTableCodeComponent } from '../../../dashboard/components/sql-table-code/sql-table-code.component';
import { Article } from '../../../dashboard/Classes/article';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mc-articles',
  standalone: true,
  imports: [
    PaginationPipe,
    SystemPaginationComponent,
    SqlTableCodeComponent,
    RouterLink
    
  ],
  templateUrl: './mc-articles.component.html',
  styleUrl: './mc-articles.component.scss'
})
export class McArticlesComponent implements OnInit {

  public selectedID: number = 0;
  selectedRows: boolean[] = [];
  public ArticleList: Array<Article> = new Array();
  public _ArticleID ?: number | string;

  public ArticleObject: Article = new Article(); 


  constructor(private ArticleService: ArticleService) {}


  ngOnInit(): void {
      this.get();
  }

  get = () => {
    this.ArticleService.get().subscribe(
      response => {
        this.ArticleList = response
        //console.log(this.ArticleList)
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
