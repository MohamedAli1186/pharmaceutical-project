// organization.model.ts

export class Organization {
    constructor(
    orgId: number,
    orgName: string,
    orgType: 'banking' | 'finance' | 'wholesale',// Assuming only 3 possible values for orgType
    orgStatus: boolean,
    licenseId: number,
    financialIdentifier: number,
    attachments: string[] | null, // Assuming file paths or URLs for images
    bankAccountNumber: number | null
    ) {}
  }
  