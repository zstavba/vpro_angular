import { FolderItem } from "./folder-item";
import { User } from "./user";

enum FolderType {
    MERITVE = 'meritve',
    TEHNOLOGIJA = 'tehnologija',
    KONTROLNI_PLAN = 'kontrolni plan',
    NAPAKE = 'vdrževalci napake',
    DEFAULT = 'null',
}

enum MessageType {
    ERROR =  "border border-red-200",
    SUCCESS = "border border-green-200",
    DEFAULT = "border border-gray-200"
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

    public system_message: string = '';
    public message_type: MessageType = MessageType.DEFAULT;

    constructor () {

    }

    static setKeys = () => {
        return Object.keys(new Folder());
    }
}
