import { Component, OnInit } from '@angular/core';
import { FeedbackModel } from './feedback.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  model:FeedbackModel = {
    name:'',
    email:'',
    feedback:''
  }

  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  sendFeedback(f:NgForm){
    
   this.api.postfeedback(this.model).subscribe(
      res => {
        f.resetForm();
        alert("Feedback Posted!!");
      }
    );
  }
}

