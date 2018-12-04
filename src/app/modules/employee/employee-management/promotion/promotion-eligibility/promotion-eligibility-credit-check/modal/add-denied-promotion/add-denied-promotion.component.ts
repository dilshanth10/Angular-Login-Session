import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddDeniedPromotionService } from '../../../../services/add-denied-promotion.service';
import { AddDeniedPromotion } from '../../../../models/add-denied-promotion';

@Component({
  selector: 'app-add-denied-promotion',
  templateUrl: './add-denied-promotion.component.html',
  styleUrls: ['./add-denied-promotion.component.css']
})
export class AddDeniedPromotionComponent implements OnInit {
  deniedpromation: FormGroup;
  deniedPromotionObj: AddDeniedPromotion = new AddDeniedPromotion();
  deniedPromotion: AddDeniedPromotion[];
  constructor(private adddeniedpromotionservice: AddDeniedPromotionService) {
  }

  ngOnInit() {
    // this.addDeniedPromortion();
  }

  addDeniedPromortion() {
    this.adddeniedpromotionservice.createDeniedPromotion(this.deniedPromotionObj).subscribe(data => {
      alert("denied promotion added");
      //this.addDeniedPromortion();
    });
  }

}





