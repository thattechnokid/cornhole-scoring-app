import { Component } from '@angular/core';

@Component({
  selector: 'cornhole-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cornhole';

  redOverallScore = 0;
  blueOverallScore = 0;

  blueInHole = 0;
  redInHole = 0;

  blueInCount = 0;
  redInCount = 0;

  finalBlue = 0;
  finalRed = 0;

  whoIsWinning = "";
  winningTeamColor = "";


  addBags(button:string,location:string,color:string){
    switch(button){
      case 'p':
        switch(location){
          case 'count':
            switch(color){
              case 'r':
                this.redInCount++;
                break;
              case 'b':
                this.blueInCount++;
                break;
            }
            break;
          case 'hole':
            switch (color) {
              case 'r':
                this.redInHole++;
                break;
              case 'b':
                this.blueInHole++;
                break;
            }
            break;  
        }
        break; 

      case 'm':
        switch (location) {
          case 'count':
            switch (color) {
              case 'r':
                this.redInCount--;
                break;
              case 'b':
                this.blueInCount--;
                break;
            }
            break;
          case 'hole':
            switch (color) {
              case 'r':
                this.redInHole--;
                break;
              case 'b':
                this.blueInHole--;
                break;
            }
            break;
        }
        break;
    }
  }

  addToFinalScore(){


    this.finalBlue = ((this.blueInHole * 3) + this.blueInCount);

    this.finalRed = ((this.redInHole * 3) + this.redInCount);

    if(this.finalBlue > this.finalRed){
      this.blueOverallScore += (this.finalBlue - this.finalRed)
    }else if(this.finalRed > this.finalBlue){
      this.redOverallScore += (this.finalRed - this.finalBlue);
    }else{
      //Nothing
    }

    if(this.redOverallScore >= 21){
      window.alert("The RED Team WINS!!");
      this.whoIsWinning = "The RED Team Wins!";
    }else if(this.blueOverallScore >= 21){
      window.alert("The BLUE Team WINS!!");
      this.whoIsWinning = "The BLUE Team Wins!";
    }else if(this.redOverallScore > this.blueOverallScore){
      this.whoIsWinning = "The Red Team is in the Lead!"
    } else if (this.blueOverallScore > this.redOverallScore) {
      this.whoIsWinning = "The Blue Team is in the Lead!"
  }



    //Reset Values after submit

    this.blueInHole = 0;
    this.redInHole = 0;

    this.blueInCount = 0;
    this.redInCount = 0;
  }
  resetGame() {
    this.redOverallScore = 0;
    this.blueOverallScore = 0;

    this.blueInHole = 0;
    this.redInHole = 0;

    this.blueInCount = 0;
    this.redInCount = 0;

    this.finalBlue = 0;
    this.finalRed = 0;

    this.whoIsWinning = "";
  }
}
