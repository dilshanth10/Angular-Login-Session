import { Component, OnInit, ViewChild } from '@angular/core';

import { TrainingHistory } from 'src/app/models/training-history';
import { TrainingHistoryService } from 'src/app/services/training-history/training-history.service';

@Component({
  selector: 'app-view-training-history',
  templateUrl: './view-training-history.component.html',
  styleUrls: ['./view-training-history.component.css']
})
export class ViewTrainingHistoryComponent implements OnInit {
  editTraining = new TrainingHistory();
  training: TrainingHistory[];
  deleteObj: TrainingHistory;
  constructor(private trainingHistoryService: TrainingHistoryService) { }

  ngOnInit() {
    this.viewAllTrainingHistory();
  }

  viewAllTrainingHistory() {
    this.trainingHistoryService.getAllTrainingHistory()
      .subscribe(data => {
        this.training = data;
        console.log(data);
      });
  }
  bindTrainingHistory(edit) {
    this.editTraining = Object.assign({}, edit);
  }

  editTrainingHistory() {
    this.trainingHistoryService.updateTrainingHistory(this.editTraining).subscribe(message => {
      alert('successfully Updated');
      // this.viewDepartment();
    });
  }

  confirmDelete(obj) {
    this.deleteObj = obj;
  }

  deleteTrainingHistoryById() {
    this.trainingHistoryService.deleteTrainingHistory(this.deleteObj).subscribe(message => {
      alert('successfully Deleted');
      // this.viewDepartment();
    });
  }


}
