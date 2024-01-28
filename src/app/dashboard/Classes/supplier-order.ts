import { Fakturing } from "./fakturing";
import { Language } from "./language";
import { User } from "./user";

enum SupplierOrderType {
    BK = 'BK',
    Fk = 'FK',
    ND = 'ND',
    DEFAULT = 'null'
}



export class SupplierOrder {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_language_id: Language = new Language();
    public idg: string = '';
    public type: SupplierOrderType = SupplierOrderType.DEFAULT;
    public document_type: string = '';
    public description: string = '';
    public summary: string = '';
    public status: string = '';
    public active: boolean = false;
    public updated_at: Date = new Date();
    public created_at: Date = new Date();

    constructor(){}

    static getKeys = () => {
        return Object.keys(new Fakturing());
    }

}
