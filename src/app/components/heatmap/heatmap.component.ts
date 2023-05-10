import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatmapComponent {
  dataForm: FormGroup;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required]),
      
    });
  }

  searchByName(): void {
    this.dataService.searchByName(this.dataForm.value.name)
      .subscribe();
  }

  searchByDay(): void {
    this.dataService.searchByDay(this.dataForm.value.day)
      .subscribe();
  }

  searchByTime(): void {
    this.dataService.searchByTime(this.dataForm.value.time)
      .subscribe();
  }
}