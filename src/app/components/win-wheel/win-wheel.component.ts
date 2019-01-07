import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
declare var Winwheel: any;

@Component({
  selector: 'app-win-wheel',
  templateUrl: './win-wheel.component.html',
  styleUrls: ['./win-wheel.component.scss']
})
export class WinWheelComponent implements OnInit {

  // Vars used by the code in this page to do power controls.
  wheelPower = 0;
  wheelSpinning: boolean = false;
  theWheel: any;

  @ViewChild('spinButton') spinButton: ElementRef<HTMLInputElement>;
  constructor() { }

  ngOnInit() {
    this.theWheel = new Winwheel({
      'numSegments': 8,     // Specify number of segments.
      'outerRadius': 212,   // Set outer radius so wheel fits inside the background.
      'textFontSize': 28,    // Set font size as desired.
      'segments':        // Define segments including colour and text.
      [
        { 'fillStyle': '#eae56f', 'text': 'Prize 1' },
        { 'fillStyle': '#89f26e', 'text': 'Prize 2' },
        { 'fillStyle': '#7de6ef', 'text': 'Prize 3' },
        { 'fillStyle': '#e7706f', 'text': 'Prize 4' },
        { 'fillStyle': '#eae56f', 'text': 'Prize 5' },
        { 'fillStyle': '#89f26e', 'text': 'Prize 6' },
        { 'fillStyle': '#7de6ef', 'text': 'Prize 7' },
        { 'fillStyle': '#e7706f', 'text': 'Prize 8' }
      ],
      'animation':           // Specify the animation to use.
      {
        'type': 'spinToStop',
        'duration': 5,     // Duration in seconds.
        'spins': 8,     // Number of complete spins.
        'callbackFinished': this.alertPrize
      }
    });
  }


  // -------------------------------------------------------
  // Function to handle the onClick on the power buttons.
  // -------------------------------------------------------
  powerSelected(powerLevel) {
    // Ensure that power can't be changed while wheel is spinning.
    if (this.wheelSpinning == false) {
      // Reset all to grey incase this is not the first time the user has selected the power.
      document.getElementById('pw1').className = "";
      document.getElementById('pw2').className = "";
      document.getElementById('pw3').className = "";

      // Now light up all cells below-and-including the one selected by changing the class.
      if (powerLevel >= 1) {
        document.getElementById('pw1').className = "pw1";
      }

      if (powerLevel >= 2) {
        document.getElementById('pw2').className = "pw2";
      }

      if (powerLevel >= 3) {
        document.getElementById('pw3').className = "pw3";
      }

      // Set wheelPower var used when spin button is clicked.
      this.wheelPower = powerLevel;

      // Light up the spin button by changing it's source image and adding a clickable class to it.
      //$("#spin_button").attr("src", "../../../assets/wheels/spin_on.png");
      this.spinButton.nativeElement.src = "../../../assets/wheels/spin_on.png";
      //document.getElementById('spin_button').src = "../../../assets/wheels/spin_on.png";
      document.getElementById('spin_button').className = "clickable";
    }
  }
  // -------------------------------------------------------
  // Click handler for spin button.
  // -------------------------------------------------------
  startSpin() {
    // Ensure that spinning can't be clicked again while already running.
    if (this.wheelSpinning == false) {
      // Based on the power level selected adjust the number of spins for the wheel, the more times is has
      // to rotate with the duration of the animation the quicker the wheel spins.
      if (this.wheelPower == 1) {
        this.theWheel.animation.spins = 3;
      } else if (this.wheelPower == 2) {
        this.theWheel.animation.spins = 8;
      } else if (this.wheelPower == 3) {
        this.theWheel.animation.spins = 15;
      }

      // Disable the spin button so can't click again while wheel is spinning.
      //$("#spin_button").attr("src", "../../../assets/wheels/spin_off.png");
      //document.getElementById('spin_button').src       = "../../../assets/wheels/spin_off.png";
      this.spinButton.nativeElement.src = "../../../assets/wheels/spin_off.png";
      document.getElementById('spin_button').className = "";

      // Begin the spin animation by calling startAnimation on the wheel object.
      this.theWheel.startAnimation();

      // Set to true so that power can't be changed and spin button re-enabled during
      // the current animation. The user will have to reset before spinning again.
      this.wheelSpinning = true;
    }
  }

  // -------------------------------------------------------
  // Function for reset button.
  // -------------------------------------------------------
  resetWheel() {
    this.theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    this.theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    this.theWheel.draw();                // Call draw to render changes to the wheel.

    document.getElementById('pw1').className = "";  // Remove all colours from the power level indicators.
    document.getElementById('pw2').className = "";
    document.getElementById('pw3').className = "";

    this.wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
  }

  // -------------------------------------------------------
  // Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters
  // note the indicated segment is passed in as a parmeter as 99% of the time you will want to know this to inform the user of their prize.
  // -------------------------------------------------------
  alertPrize(indicatedSegment) {
    // Do basic alert of the segment text. You would probably want to do something more interesting with this information.
    alert("You have won " + indicatedSegment.text);
  }

}
