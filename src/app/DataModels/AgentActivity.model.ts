export class AgentActivity {
  constructor(
    ActivityID: number,
    ActivityName: string,
    ActivityType: 'Delivery' | 'Inspection' | 'Sales' | 'After Sale',
    AvailCamera: boolean,
    AvailVoice: boolean,
    OrganizationID: number,
    Organizationname: string,
    ContactID: string,
    ContactName: string,
    AgentID: number,
    AgentName: string,
    ActivitityPlannedTime: Date,
    Activitystatus: 'Scheduled' | 'Done' | 'Missed' | 'Cancelled',
    ActivityActualTime: Date,
    CheckinLocation: string,
    Attachement: string[] | null
  ) {}
}
