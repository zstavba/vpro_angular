import { DebitNote } from "./debit-note";
import { Language } from "./language";
import { User } from "./user";

enum EstimatesType {
    BK = 'BK',
    Fk = 'FK',
    ND = 'ND',
    NK = 'NK',
    PO = 'PO',
    PR = 'PR',
    DEFAULT = 'null'
}


export class Estimates {

    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_language_id: Language = new Language();
    public idg: string = '';
    public description: string = '';
    public document_type: string = '';
    public type: EstimatesType = EstimatesType.DEFAULT;
    public summary: string = '';
    public status: string = '';
    public active: boolean = false;
    public date_to: Date = new Date();
    public date_from: Date = new Date();
    public updated_at: Date = new Date();
    public created_at: Date = new Date();

    constructor() {}

    static getKeys = () => {
        return Object.keys(new DebitNote());
    }


}
