import { Component } from '@angular/core';
import { Recommendation } from '../../interfaces/recommendation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})
export class RecommendationsComponent {

  slidingDirection: 'left' | 'right' | null = null;
  sliderCounter: number = 0;
  positionOfDots: number[] = [-1,0,1];
  isDisabled:boolean = false;

  recommendations: Recommendation[] = [
    {
      teamPartner: 'G. Antipin - Team Partner',
      recommendation: 'Max is an extremely friendly individual who remains composed and engaged in collaboration. His positive attitude and ability to work well in a team make him a valuable colleague. Working with him has been very enriching. He has made significant contributions to our project progress, whether it was in CSS or JavaScript, and his performance is truly impressive. He can definitely be proud of his work!'
    },
    {
      teamPartner: 'P. Schlieker - Team Partner',
      recommendation: 'Max was a real asset to our team. His precise working methods and attention to detail contributed significantly to the success of our project and ensured that we planned work phases accurately and implemented them correctly from the start. I would be happy to work with him again.'
    },
    {
      teamPartner: 'R. Söylemez - Team Partner',
      recommendation: 'Together with Max and another student, we created the Kochwelt project. It was a pleasure working with someone who put their heart and soul into the project. Communication within the group was well-planned and effective'
    },
    {
      teamPartner: 'G. Antipin - Team Partner',
      recommendation: 'Max is an extremely friendly individual who remains composed and engaged in collaboration. His positive attitude and ability to work well in a team make him a valuable colleague. Working with him has been very enriching. He has made significant contributions to our project progress, whether it was in CSS or JavaScript, and his performance is truly impressive. He can definitely be proud of his work!'
    },
    {
      teamPartner: 'P. Schlieker - Team Partner',
      recommendation: 'Max was a real asset to our team. His precise working methods and attention to detail contributed significantly to the success of our project and ensured that we planned work phases accurately and implemented them correctly from the start. I would be happy to work with him again.'
    },
    {
      teamPartner: 'R. Söylemez - Team Partner',
      recommendation: 'Together with Max and another student, we created the Kochwelt project. It was a pleasure working with someone who put their heart and soul into the project. Communication within the group was well-planned and effective'
    },
    {
      teamPartner: 'G. Antipin - Team Partner',
      recommendation: 'Max is an extremely friendly individual who remains composed and engaged in collaboration. His positive attitude and ability to work well in a team make him a valuable colleague. Working with him has been very enriching. He has made significant contributions to our project progress, whether it was in CSS or JavaScript, and his performance is truly impressive. He can definitely be proud of his work!'
    },
    {
      teamPartner: 'P. Schlieker - Team Partner',
      recommendation: 'Max was a real asset to our team. His precise working methods and attention to detail contributed significantly to the success of our project and ensured that we planned work phases accurately and implemented them correctly from the start. I would be happy to work with him again.'
    },
    {
      teamPartner: 'R. Söylemez - Team Partner',
      recommendation: 'Together with Max and another student, we created the Kochwelt project. It was a pleasure working with someone who put their heart and soul into the project. Communication within the group was well-planned and effective'
    }
  ]

  slide(direction: 'left' | 'right') {
    this.updateSliderCounter(direction);
    this.slidingDirection = direction;
    this.setDisabledIfNot();
    setTimeout(() => {
      this.slidingDirection = null;
      if (direction === 'right') {
        let lastRec = this.recommendations.pop();
        if (lastRec) {
          this.recommendations.unshift(lastRec);
        }
      } else if (direction === 'left') {
        let firstRec = this.recommendations.shift();
        if (firstRec) {
          this.recommendations.push(firstRec);
        }
      }
    }, 500);

  }

  updateSliderCounter(direction: 'left' | 'right') {
    if((direction === 'right')) {
      this.sliderCounter++;
      if(this.sliderCounter === 2) {
        this.sliderCounter = -1;
      }
    }
    if((direction === 'left')) {
      this.sliderCounter--;
      if(this.sliderCounter === -2) {
        this.sliderCounter = 1;
      }
    }
  }

  setDisabledIfNot() {
    if (this.isDisabled) {
      return;
    }

    this.isDisabled = true;

    setTimeout(() => {
      this.isDisabled = false;
    }, 500);
  }

}