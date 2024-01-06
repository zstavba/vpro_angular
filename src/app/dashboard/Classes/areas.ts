export class Areas {

    public id: number = 0;
    public area:string = '';
    public description: string = '';
    public superiors: string = '';
    public municipality: string = '';
    public active: boolean = false;

    constructor(){}

    static getKeys = () => {
        let A = Object.keys(new Areas());
        return A; 
    }

}
