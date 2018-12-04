import { ScheduleParAppraisors } from "./schedule-par-appraisors.model";
import { ScheduleParContent } from "./schedule-par-content.model";

export class Par{
    id: number;
    empId: string;
    scheduleDate: Date=new Date();
    overAllScore:number;
    scheduleParAppraisorsList:ScheduleParAppraisors[];
    scheduleParContentList:ScheduleParContent[]
}