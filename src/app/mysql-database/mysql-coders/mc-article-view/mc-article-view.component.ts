import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../Services/article.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Article } from '../../../dashboard/Classes/article';
import { SqlTableCodeComponent } from '../../../dashboard/components/sql-table-code/sql-table-code.component';

@Component({
  selector: 'app-mc-article-view',
  standalone: true,
  imports: [
    SqlTableCodeComponent,
    RouterLink
  ],
  templateUrl: './mc-article-view.component.html',
  styleUrl: './mc-article-view.component.scss'
})
export class McArticleViewComponent implements OnInit {

  private _routeID ?: string ;

  public Info: any;

  constructor (private _ArticleService: ArticleService, private router: ActivatedRoute) {}

  ngOnInit(): void {
      this._routeID = this.router.snapshot.paramMap.get('id') as string;
      this.getInfo();
    
    }



  getInfo = () => {
    this._ArticleService.getItemByCode(this._routeID).subscribe(
      response => {
        this.Info = response[0];
        
        //console.log(this.Info);
      }
    )
  }


}


