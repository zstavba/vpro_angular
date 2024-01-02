export class CustomTarrifs {

    public id?: number = 0;
    public title ?: string = '';
    public stage ?: string = '';
    public class?: string = ''; 
    public type ?: string = '';
    public position ?: string = '';
    public active ?: boolean = false;
    public active_from ?: Date = new Date();
    public active_to ?: Date = new Date();
    public consigment ?: string = '';
    
    
    
    constructor() {}

    static getKeys(): string[] {
        let keys = Object.keys(new CustomTarrifs());
        return keys;
    }


    get activeIcon(): string {
        if (this.active) {
          return `<span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>                                        
                  </span>`;
        } else {
          return `<span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </span> `;
        }
      }



}
