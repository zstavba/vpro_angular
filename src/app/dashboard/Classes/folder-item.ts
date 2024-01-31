import { Folder } from "./folder";

enum ItemType {
    PDF = 'pdf',
    JPG = 'jpg',
    JPEG = 'jpeg',
    DOCX = 'docx',
    CSV = 'csv',
    XLS = 'xsl',
    DEFAULT = 'null'
}

export class FolderItem {
    
    public id: number = 0;
    public fk_folder_id: Folder = new Folder();
    public title: string = '';
    public type: ItemType = ItemType.DEFAULT;
    public size: number = 0.00;
    public path: string = '';

    constructor() {}

    static setKeys = () => {
        return Object.keys(new FolderItem());
    }

}
