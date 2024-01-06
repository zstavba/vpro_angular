import { ArticleType } from "./article-type";
import { Classification } from "./classification";
import { CostCities } from "./cost-cities";
import { Country } from "./country";
import { GroupType } from "./group-type";
import { MessurmentUnits } from "./messurment-units";
import { Tax } from "./tax";
import { User } from "./user";

export class ArticleBasics {

    public id: number = 0; 
    public fk_supplier_id: User = new User();
    public fk_manufacturer_id: User = new User();
    public fk_country_id: Country = new Country();
    public fk_mu_id: MessurmentUnits = new MessurmentUnits();
    public fk_tax_id: Tax = new Tax();
    public fk_ct_id: CostCities = new CostCities();
    public fk_article_type_id: ArticleType = new ArticleType();
    public fk_classification_id: Classification = new Classification();
    public fk_group1_id: GroupType = new GroupType();
    public fk_group2_id: GroupType = new GroupType();
    public fk_group3_id: GroupType = new GroupType();
    public fk_group4_id: GroupType = new GroupType();

    public title: string = '';
    public code: string = '';
    public ean:string = '';
    public packagin_type: string = '';
    public treacabillity: string = '';
    public stock:string = '';
    public hidden:boolean = false;
    public intrasant: boolean = false;
    public pallet: boolean = false;
    public a_crate: boolean = false;


    constructor() {}

    static getKeys = () => {
        let AB = Object.keys(new ArticleBasics());
        return AB; 
    }
}


