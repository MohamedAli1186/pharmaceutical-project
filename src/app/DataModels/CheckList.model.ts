export class Checklist {
  constructor(
    OrganizationID: number,
    Organizationname: string,
    ChecklistID: number,
    ChecklistName: string,
    Questions: string,
    InspectionID: number,
    Question: string,
    Note: string,
    Answer: 'Non-Complied' | 'NA' | 'Compiled',
    AvailCamera: boolean,
    AvailVoice: boolean
  ) {}
}
