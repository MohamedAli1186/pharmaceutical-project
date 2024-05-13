export class Agent {
  constructor(
    OrganizationID: number,
    OrganizationName: string,
    ServiceID: number,
    ServiceName: string,
    CashAcceptance: boolean,
    ServiceHotline: string[] | null,
    AgentName: string,
    AgentMobile: number,
    AgentCalendar: boolean,
    AgentAvailableDates: Date,
    AgentBookeddates: Date
  ) {}
}
