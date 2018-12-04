import { Component, OnInit } from '@angular/core';
import { TrainingHistory } from 'src/app/models/training-history';
import { TrainingHistoryService } from 'src/app/services/training-history/training-history.service';

@Component({
  selector: 'app-add-training-history',
  templateUrl: './add-training-history.component.html',
  styleUrls: ['./add-training-history.component.css']
})
export class AddTrainingHistoryComponent implements OnInit {
  newHistory = new TrainingHistory();
  constructor(private trainingHistoryService: TrainingHistoryService) { }

  ngOnInit() {
  }

  addTrainingHistory() {
    this.trainingHistoryService.createTrainingHistory(this.newHistory).subscribe(xyz => {
      alert('success fully created');
      // this.viewAllTrainingHistory();
    });
  }

}
