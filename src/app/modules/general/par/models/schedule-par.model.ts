import { ScheduleParAppraisors } from "./schedule-par-appraisors.model";
import { ScheduleParContent } from "./schedule-par-content.model";

export class SchedulePar{
    id: number;
    empId: string;
    scheduleDate: Date=new Date();
    scheduleParAppraisorsList:ScheduleParAppraisors[]=[];
    scheduleParContentList:ScheduleParContent[]=[];
}
