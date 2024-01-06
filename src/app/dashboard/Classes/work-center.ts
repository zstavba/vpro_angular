import { Classification } from "./classification";
import { CostCities } from "./cost-cities";
import { OrganizationalUnits } from "./organizational-units";
import { User } from "./user";

export class WorkCenter {

    public id: number = 0;
    public title: string = '';
    public fk_classification_id: Classification = new Classification();
    public fk_organizational_units_id: OrganizationalUnits = new OrganizationalUnits();
    public fk_cost_cities_id: CostCities = new CostCities();
    public fk_user_id: User = new User();
    public status: string = '';
    public price_work: string = '';
    public active: boolean = false;
    public created_at: Date = new Date();


    constructor() {}

    static getKeys = () => {
        let WC = Object.keys(new WorkCenter());
        return WC;
    }

}
