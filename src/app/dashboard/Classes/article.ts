import { ArticleType } from "./article-type";
import { Country } from "./country";

export class Article {
    public id ?: number = 0;
    public title ?: string = ''; 
    public code ?: string = ''; 
    public ean ?: string = '';
    public intrasant ?: string = '';
    public manufacturer ?: string = ''; 
    public packaging_type ?: string = ''; 
    public pallet ?: number = 0;
    public stock : any =  ''; 

    constructor() {}    


    static getKeys(): string[] {
        let keys = Object.keys(new Article());
        return keys;
    }


}
