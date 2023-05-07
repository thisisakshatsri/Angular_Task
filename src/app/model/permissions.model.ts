export interface AllPermissions{
    id:string;
    name: string,
    roleType: number,
    permissions: Permissions[]
  }
  
  
  export interface Permissions{
    id: number,
    name: string,
    entityType: string,
    entityName: string,
    module: string,
    displayName: string,
    description: string
  }