import { FolderItem } from "./folder-item";
import { User } from "./user";

enum FolderType {
    MERITVE = 'meritve',
    TEHNOLOGIJA = 'tehnologija',
    KONTROLNI_PLAN = 'kontrolni plan',
    NAPAKE = 'vdrževalci napake',
    DEFAULT = 'null',
}


export class Folder {

    public id: number = 0;
    public fk_user_id: User = new User();
    public title: string = '';
    public type: FolderType = FolderType.DEFAULT;
    public folder_has_children: boolean = false;
    public folder_items: Array<FolderItem> = new Array<FolderItem>();
    public updated_at: Date = new Date();
    public created_at: Date = new Date();

    constructor () {

    }

    static setKeys = () => {
        return Object.keys(new Folder());
    }
}
