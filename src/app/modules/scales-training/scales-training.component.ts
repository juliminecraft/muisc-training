import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-scales-training',
  templateUrl: './scales-training.component.html',
  styleUrls: ['./scales-training.component.css']
})
export class ScalesTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      this.fillSelectedScalesArray();
      this.setRandomScale();
  }

  private drumtrackurl =
    "https://firebasestorage.googleapis.com/v0/b/bass-scale-practice.appspot.com/o/drums%2F[DRUMSTYLE]_[BPM].mp3?alt=media&token=e9b2f34e-1c12-4d8c-a8b6-ac37b93695bd";
  public scaleIntervalTime = 60000;
  public drumsbpm = 110;
  public drumStyle = "poprock";
  public slider = {
    value: 120
  };

  public scales = {
    C: true,
    G: true,
    D: true,
    A: true,
    E: true,
    B: true,
    F: true,
    Fsharp: true,
    Db: true,
    Ab: true,
    Eb: true,
    Bb: true,
    Am: true,
    Em: true,
    Bm: true,
    Fm: true,
    Cm: true,
    Gm: true,
    Dm: true,
    Fsharpm: true,
    Csharpm: true,
    Gsharpm: true,
    Dsharpm: true,
    Bbm: true
  };

  public currentScale: any;
  public allSelectedScales = new Array();
  public timeToScaleChange = 60000;
  private interval;
  private playing = false;
  public buttonText = "PLAY";
  private audioSrc: string;
  private audioEl: HTMLAudioElement;
  public notallmajorfull = false;
  public notallmajoraccidental = false;
  public notallminorfull = false;
  public notallminoraccidental = false;

  @ViewChild("majorfull", { static: false }) majorfullcheckbox: MatCheckbox;
  @ViewChild("majoraccidental", { static: false })  majoraccidentalcheckbox: MatCheckbox;
  @ViewChild("minorfull", { static: false }) minorfullcheckbox: MatCheckbox;
  @ViewChild("minoraccidental", { static: false })  minoraccidentalcheckbox: MatCheckbox;

  private fillSelectedScalesArray() {
    this.allSelectedScales = new Array();
    for (var prop in this.scales) {
      if (Object.prototype.hasOwnProperty.call(this.scales, prop)) {
        if (this.scales[prop] === true) {
          this.allSelectedScales.push(
            prop
              .replace("sharp", "♯")
              .replace("b", "♭")
              .replace("m", " minor")
          );
        }
      }
    }
  }

  private setRandomScale() {
    var newScale = this.currentScale;
    while (this.currentScale == newScale) {
      this.currentScale = this.allSelectedScales[
        Math.floor(Math.random() * this.allSelectedScales.length)
      ];
    }
  }

  public convertToSeconds(milliseconds: number) {
    if (milliseconds === NaN) {
      return;
    }
    return milliseconds / 1000;
  }

  public togglePlay() {
    if (this.playing === false) {
      this.playing = true;
      this.buttonText = "STOP";
      this.ngOnInit();
      this.interval = setInterval(
        this.setRandomScale.bind(this),
        this.scaleIntervalTime
      );
      this.audioSrc = this.drumtrackurl
        .replace("[BPM]", this.drumsbpm.toString())
        .replace("[DRUMSTYLE]", this.drumStyle);
      this.audioEl = new Audio(this.audioSrc);
      this.audioEl.loop = true;
      this.audioEl.play();
    } else {
      this.playing = false;
      this.buttonText = "PLAY";
      clearInterval(this.interval);
      this.audioEl.pause();
    }
  }

  public changemajorfull(event: any) {
    var checked = event.checked;
    this.scales.C = checked;
    this.scales.G = checked;
    this.scales.D = checked;
    this.scales.A = checked;
    this.scales.E = checked;
    this.scales.B = checked;
    this.scales.F = checked;
  }

  public clickmajorfull() {
    if (
      this.scales.C &&
      this.scales.G &&
      this.scales.D &&
      this.scales.A &&
      this.scales.E &&
      this.scales.F
    ) {
      this.notallmajorfull = false;
      this.majorfullcheckbox.checked = true;
    } else if (
      this.scales.C ||
      this.scales.G ||
      this.scales.D ||
      this.scales.A ||
      this.scales.E ||
      this.scales.F
    ) {
      this.notallmajorfull = true;
    } else {
      this.notallmajorfull = false;
      this.majorfullcheckbox.checked = false;
    }
  }

  public changemajoraccidental(event: any) {
    var checked = event.checked;
    this.scales.Fsharp = checked;
    this.scales.Db = checked;
    this.scales.Ab = checked;
    this.scales.Eb = checked;
    this.scales.Bb = checked;    
  }

  public clickmajoraccidental() {
    if (
      this.scales.Fsharp &&
      this.scales.Db &&
      this.scales.Ab &&
      this.scales.Eb &&
      this.scales.Bb
    ) {
      this.notallmajoraccidental = false;
      this.majoraccidentalcheckbox.checked = true;
    } else if (
      this.scales.Fsharp ||
      this.scales.Db ||
      this.scales.Ab ||
      this.scales.Eb ||
      this.scales.Bb
    ) {
      this.notallmajoraccidental = true;
      this.majoraccidentalcheckbox.checked = false;
    } else {
      this.notallmajoraccidental = false;
      this.majoraccidentalcheckbox.checked = false;
    }
  }

  public changeminorfull(event: any) {
    var checked = event.checked;
    this.scales.Am = checked;
    this.scales.Em = checked;
    this.scales.Bm = checked;
    this.scales.Fm = checked;
    this.scales.Cm = checked;
    this.scales.Gm = checked;
    this.scales.Dm = checked;
  }

  public clickminorfull() {
    if (
      this.scales.Am &&
      this.scales.Em &&
      this.scales.Bm &&
      this.scales.Fm &&
      this.scales.Cm &&
      this.scales.Gm &&
      this.scales.Dm
    ) {
      this.notallminorfull = false;
      this.minorfullcheckbox.checked = true;
    } else if (
      this.scales.Am ||
      this.scales.Em ||
      this.scales.Bm ||
      this.scales.Fm ||
      this.scales.Cm ||
      this.scales.Gm ||
      this.scales.Dm
    ) {
      this.notallminorfull = true;
      this.minorfullcheckbox.checked = false;
    } else {
      this.notallminorfull = false;
      this.minorfullcheckbox.checked = false;
    }
  }

  public changeminoraccidental(event: any) {
    var checked = event.checked;
    this.scales.Fsharpm = checked;
    this.scales.Csharpm = checked;
    this.scales.Gsharpm = checked;
    this.scales.Dsharpm = checked;
    this.scales.Bbm = checked;    
  }

  public clickminoraccidental() {
    if (
      this.scales.Fsharpm &&
      this.scales.Csharpm &&
      this.scales.Gsharpm &&
      this.scales.Dsharpm &&
      this.scales.Bbm
    ) {
      this.notallminoraccidental = false;
      this.minoraccidentalcheckbox.checked = true;
    } else if (
      this.scales.Fsharpm ||
      this.scales.Csharpm ||
      this.scales.Gsharpm ||
      this.scales.Dsharpm ||
      this.scales.Bbm
    ) {
      this.notallminoraccidental = true;
      this.minoraccidentalcheckbox.checked = false;
    }else {
      this.notallminoraccidental = false;
      this.minoraccidentalcheckbox.checked = false;
    }
  }
}
