import { ArticleType } from "./article-type";
import { Country } from "./country";

export class Article {
    public id ?: number;
    public title ?: string; 
    public code ?: string; 
    public ean ?: string;
    public intrasant ?: string;
    public manufacturer ?: string; 
    public packaging_type ?: string; 
    public pallet ?: number;
    public stock ?: string; 

    public fk_article_type_id : ArticleType = new ArticleType();
    public fk_country_id: Country = new Country();

    constructor() {}    


}
