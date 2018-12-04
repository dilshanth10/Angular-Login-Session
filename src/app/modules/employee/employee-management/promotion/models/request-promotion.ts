import { Designation } from "./designation";
import { User } from "src/app/models/employee-termination/user";

export class RequestPromotion {
	id: number;
    userId: number;
    designationId: number;
    promotionRemark: string;
    recommendedBy:string;
    createdAt: Date;
    updatedAt: Date;
}