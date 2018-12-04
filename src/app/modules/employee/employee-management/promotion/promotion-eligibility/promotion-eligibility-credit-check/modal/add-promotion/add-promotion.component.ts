import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import { AddPromotion } from '../../../../models/add-promotion';
import { AddPromotionService } from '../../../../Services/add-promotion.service';
import { UserService } from 'src/app/services/self-service/user.service';
import { User } from 'src/app/models/self-service/user';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css']
})
export class AddPromotionComponent implements OnInit {

  addPromotionObj: AddPromotion = new AddPromotion();
  addPromotion: AddPromotion[];
  userObj=new User();
  users:User[];
  msg: any;

  //insertpromation: FormGroup;
  constructor(private addPromotionService: AddPromotionService,private userService:UserService) {
  }

  ngOnInit() {
    this.getUser();
  }
  addNewPromotion() {
    // this.addPromotionObj.promotedDate=new Date(this.addPromotionObj.promotedDate);
    this.addPromotionService.createAddPromotion(this.addPromotionObj).subscribe(data => {
      console.log(data);
    });

  }
  getUser() {
    return this.userService.getUser().subscribe(
      data => {
        this.users = data;
       this.userObj.id=0;
      }
    )
  }
}






