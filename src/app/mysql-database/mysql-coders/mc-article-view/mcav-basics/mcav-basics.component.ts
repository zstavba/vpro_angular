import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../../Services/article.service';
import { FormsModule } from '@angular/forms';
import { Article } from '../../../../dashboard/Classes/article';

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
  public Info: Article = new Article();

  constructor (private router: ActivatedRoute, private _ArticleService: ArticleService) {}

  ngOnInit(): void {
      this.router.parent?.params.subscribe(
        params => {
          this._childRouteID = params['id'];
          //console.log(this._childRouteID)
        }
      )
      this.getInfo()
  }

  getInfo = () => {
    this._ArticleService.getItemByCode(this._childRouteID).subscribe(
      response => {
        this.Info = response[0];
        console.log(this.Info)
      }
    )
  }

}
