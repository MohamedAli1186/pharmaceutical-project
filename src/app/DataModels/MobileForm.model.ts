export class MobileForm {
  constructor(
    Submissiondate: Date,
    SubmissionID: number,
    OrganizationID: number,
    Organizationname: string,
    UserID: number,
    Username: string,
    ClientID: number,
    ClientName: string,
    ChecklistID: number,
    ChecklistName: string,
    Checklistprogress: number[] | null,
    Checkliststatus: 'New' | 'Submitted',
    InspectionID: number,
    Question: string,
    Note: string,
    Answer: 'Non-Complied' | 'NA' | 'Compiled',
    HasImage: boolean,
    Hasvoice: boolean
  ) {}
}
