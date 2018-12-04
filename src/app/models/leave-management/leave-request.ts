import { LeaveAllocation } from "./leave-allocation";

export class LeaveRequest {
    leaveAllocation : LeaveAllocation = new LeaveAllocation();
    startDate :Date;
    endDate : Date;
    noOfDays: number;
    reason : string;
    attachment : File;
    userName : string;
    createdAt: Date;
}
