// user.model.ts

export class User {
    constructor(
    orgId: number,
    permissionId: number,
    orgAdminId: string,
    username: string,
    password: string,
    mobileNumber: string, // Assuming mobile number as string for international support
    nationalId: string, // Assuming national ID as string
    email: string,
    businessUserId:number
     )     {}
  }
  