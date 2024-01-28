import { Language } from "./language";
import { User } from "./user";

enum FakturingType {
    BK = 'BK',
    Fk = 'FK',
    DEFAULT = 'null'
}


export class Fakturing {
    
    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_language_id: Language = new Language();
    public idg: string = '';
    public type: FakturingType = FakturingType.DEFAULT;
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
