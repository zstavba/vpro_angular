import { Language } from "./language";
import { User } from "./user";

enum DebitNoteType {
    BK = 'BK',
    DEFAULT = 'null'
}

export class DebitNote {
    
    public id: number = 0;
    public fk_user_id: User = new User();
    public fk_language_id: Language = new Language();
    public idg: string = '';
    public description: string = '';
    public document_type: string = '';
    public type: DebitNoteType = DebitNoteType.DEFAULT;
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
