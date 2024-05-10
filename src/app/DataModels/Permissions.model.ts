// permissions.model.ts

export class Permissions {
    constructor(
    permissionId: number,
    mobileNumber: string, // Assuming mobile number as string for international support
    orgAdminId: number,
    userStatus: boolean,
    superAdmin: boolean,
    organizationAdmin: boolean,
    merchant: boolean,
    serviceAgent: boolean,
    fieldAgent: boolean,
    inventoryWorker: boolean,
    consumer: boolean){}
   
}
  