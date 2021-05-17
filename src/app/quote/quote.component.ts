import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'One hand cannot clap',
      'Gabriel',
      'Linda',
      
      new Date(),
      0,
      0),
    new Quote(
      2,
      'Try to fail, but do not fail to try',
      'Akaka',
      'Benard',
      
      new Date(),
      0,
      0),
      
    new Quote(
      3, 
      'Two heads are better one ',
      'Ayuel',
      'John Heywood',
       
      new Date(),
       0,
       0),
  ];

  upvote(index) {
    this.quotes[index].upvotes++;
  }
  downvote(index) {
    this.quotes[index].downvotes++;
  }

  highestUpvote(){
    this.upvote
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
