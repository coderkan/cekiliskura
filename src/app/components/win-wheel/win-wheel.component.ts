import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { InputWheelService } from 'src/app/services/input-wheel/input-wheel.service';
declare var Winwheel: any;
import Swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-win-wheel',
  templateUrl: './win-wheel.component.html',
  styleUrls: ['./win-wheel.component.scss']
})
export class WinWheelComponent implements OnInit {

  // Vars used by the code in this page to do power controls.
  wheelSpinning: boolean = false;
  theWheel: any = {};
  winner = '';
  isRunning: boolean = false;

  @ViewChild('spinButton') spinButton: ElementRef<HTMLInputElement>;
  constructor(private service: InputWheelService) { }

  ngOnInit() {
    let audio = new Audio('../../../assets/tick.mp3');
    this.winner = "------";
    $('#_winner').text(this.winner);

    let swalAlert = (indSgm) => {
      Swal.fire({
        title: '<span style="color: white;">Tebrikler</span>',
        html: '<h1><span style="color: white;">' + indSgm.text + '</span></h1>',
        background: '#fff url("/assets/fire2.gif")',
        imageUrl: '/assets/cup4.png',
        imageWidth: 60,
        imageHeight: 100,
      });
    };

    let onComplete = (indSgm) => {
      this.isRunning = false;
      this.winner = indSgm.text;
      $('#_winner').text(indSgm.text);
      swalAlert(indSgm);
    };

    // audio.play();
    // Create winwheel as per normal.
    this.theWheel = new Winwheel({
      'canvasId': 'canvas',
      'pointerAngle': 0,
      'numSegments': 2,     // Specify number of segments.
      'textFontSize': 28,    // Set font size as desired.
      'responsive': true,  // This wheel is responsive!
      'segments':        // Define segments including colour and text.
      [
        { 'fillStyle': '#eae56f', 'text': 'Welcome To' },
        { 'fillStyle': '#89f26e', 'text': 'CekilisKura' },
      ],
      'pins':
      {
        'outerRadius': 6,
        'number': 16,
        'responsive': true, // This must be set to true if pin size is to be responsive, if not just location is.
      },
      'animation':           // Specify the animation to use.
      {
        'type': 'spinToStop',
        'duration': 13,     // Duration in seconds.
        'spins': 8,     // Number of complete spins.
        'callbackFinished': onComplete,
        'callbackSound': this.playSound,    // Specify function to call when sound is to be triggered.
        'soundTrigger': 'pin'         // Pins trigger the sound for this animation.
      }
    });

    var width = document.getElementById('canvasContainer').offsetWidth;
    var widthOriginal = width;
    width = width * 0.70;
    document.getElementById('canvas').style.width = '' + width + "px";
    document.getElementById('prizePointer').style.left = '' + ((widthOriginal / 2) + 5) + 'px';
    var rect = document.getElementById('canvas').getBoundingClientRect();

    // listen loaded values from input item component.
    this.service.list.subscribe(l => {
      if (l.length != 0)
        this.removeAllSegments();
      l.forEach(el => {
        let newSegment = this.theWheel.addSegment(); // Add segment
        newSegment.text = el;        // Set text and fillStyle using returned
        newSegment.fillStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);         // pointer to the segment object.
        this.theWheel.draw();
      });

    })

  }

  removeAllSegments() {
    for (var i = 0; i < this.theWheel.numSegments; i++) {
      this.theWheel.deleteSegment();
      this.theWheel.draw();
    }
    this.theWheel.numSegments = 0;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    var width = document.getElementById('canvasContainer').offsetWidth;
    var widthOriginal = width;
    width = width * 0.70;
    document.getElementById('canvas').style.width = '' + width + "px";
    document.getElementById('prizePointer').style.left = '' + ((widthOriginal / 2) + 5) + 'px';
    var rect = document.getElementById('canvas').getBoundingClientRect();
  }

  playSound() {
    let audio = new Audio('../../../assets/tick.mp3');
    audio.load();
    // Stop and rewind the sound (stops it if already playing).
    audio.pause();
    audio.currentTime = 0;

    // Play the sound.
    audio.play();
  }

  // Called by the onClick of the canvas, starts the spinning.
  startSpin() {
    if(this.isRunning)
      return;
    this.isRunning = true;
    this.winner = '';
    $('#_winner').text(this.winner);
    // Stop any current animation.
    this.theWheel.stopAnimation(false);

    // Reset the rotation angle to less than or equal to 360 so spinning again
    // works as expected. Setting to modulus (%) 360 keeps the current position.
    this.theWheel.rotationAngle = this.theWheel.rotationAngle % 360;

    // Start animation.
    this.theWheel.startAnimation();
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

}
