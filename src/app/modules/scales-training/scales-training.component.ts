import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { AllKeysAndModes, MajorKeys, MinorKeys } from './models/keys';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-scales-training',
  templateUrl: './scales-training.component.html',
  styleUrls: ['./scales-training.component.css']
})
export class ScalesTrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var a = "a";
    this.fillSelectedScalesArray();
    this.setRandomScale();
  }

  private drumtrackurl =
    "https://firebasestorage.googleapis.com/v0/b/bass-scale-practice.appspot.com/o/drumtracks%2F[DRUMSTYLE]_[SILENTBARS]_[BPM].mp3?alt=media&token=e9b2f34e-1c12-4d8c-a8b6-ac37b93695bd";
  public scaleIntervalTime = 60000;
  public drumsbpm = 110;
  public silentBars = 0.0;
  public drumStyle = "poprock";
  public slider = {
    value: 120
  };

  public scales = new AllKeysAndModes();

  public currentScale: any;
  public allSelectedScales = new Array();
  public timeToScaleChange = 60000;
  private interval;
  private playing = false;
  public buttonText = "PLAY";
  private audioSrc: string;
  private audioEl: HTMLAudioElement;

  private fillSelectedScalesArray() {
    this.allSelectedScales = new Array();
    this.addAllScalesToArray();
  }

  private addAllScalesToArray() {
    this.addMajor();
    this.addDorian();
    this.addPhrygian();
    this.addLydian();
    this.addMixolydian();
    this.addMinor();
    this.addLocrian();
  }

  private replaceAccidentals(note: string) {
    return note
      .replace("FsGb", "Fs / Gb")
      .replace("DsEb", "Ds / Eb")
      .replace("s", "♯")
      .replace("b", "♭")
  }

  private addMajor() {
    for (var prop in this.scales.IonianMajor) {
      if (Object.prototype.hasOwnProperty.call(this.scales.IonianMajor, prop)) {
        if (this.scales.IonianMajor[prop] === true) {
          this.allSelectedScales.push(
            this.replaceAccidentals(prop)
            + " ion (maj)"
          );
        }
      }
    }
  }

  private addDorian() {
    for (var prop in this.scales.Dorian) {
      if (Object.prototype.hasOwnProperty.call(this.scales.Dorian, prop)) {
        if (this.scales.Dorian[prop] === true) {
          this.allSelectedScales.push(
            this.replaceAccidentals(prop)
            + " dor"
          );
        }
      }
    }
  }

  private addPhrygian() {
    for (var prop in this.scales.Phrygian) {
      if (Object.prototype.hasOwnProperty.call(this.scales.Phrygian, prop)) {
        if (this.scales.Phrygian[prop] === true) {
          this.allSelectedScales.push(
            this.replaceAccidentals(prop)
            + " phy"
          );
        }
      }
    }
  }

  private addLydian() {
    for (var prop in this.scales.Lydian) {
      if (Object.prototype.hasOwnProperty.call(this.scales.Lydian, prop)) {
        if (this.scales.Lydian[prop] === true) {
          this.allSelectedScales.push(
            this.replaceAccidentals(prop)
            + " lyd"
          );
        }
      }
    }
  }

  private addMixolydian() {
    for (var prop in this.scales.Mixolydian) {
      if (Object.prototype.hasOwnProperty.call(this.scales.Mixolydian, prop)) {
        if (this.scales.Mixolydian[prop] === true) {
          this.allSelectedScales.push(
            this.replaceAccidentals(prop)
            + " mix"
          );
        }
      }
    }
  }

  private addMinor() {
    for (var prop in this.scales.AeolianMinor) {
      if (Object.prototype.hasOwnProperty.call(this.scales.AeolianMinor, prop)) {
        if (this.scales.AeolianMinor[prop] === true) {
          this.allSelectedScales.push(
            this.replaceAccidentals(prop)
            + " aeo (min)"
          );
        }
      }
    }
  }

  private addLocrian() {
    for (var prop in this.scales.Locrian) {
      if (Object.prototype.hasOwnProperty.call(this.scales.Locrian, prop)) {
        if (this.scales.Locrian[prop] === true) {
          this.allSelectedScales.push(
            this.replaceAccidentals(prop)
            + " mix"
          );
        }
      }
    }
  }

  private setRandomScale() {
    if (this.allSelectedScales.length == 0) {
      this.currentScale = "";
    }
    if (this.allSelectedScales.length == 1) {
      this.currentScale = this.allSelectedScales[0];
    }
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

  public divideByTen(silencedDrumBeats: number) {
    if (silencedDrumBeats === NaN) {
      return
    }
    return silencedDrumBeats / 10;
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
      var audioSrc;
      if (this.silentBars == 0) {
        audioSrc = this.drumtrackurl
          .replace("[BPM]", this.drumsbpm.toString())
          .replace("[DRUMSTYLE]", this.drumStyle)
          .replace("[SILENTBARS]_", "");
      } else {
        audioSrc = this.drumtrackurl
          .replace("[BPM]", this.drumsbpm.toString())
          .replace("[DRUMSTYLE]", this.drumStyle)
          .replace("[SILENTBARS]", this.silentBars.toString() + "barsilence");
      }
      this.audioSrc = audioSrc;
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

  toggleAllNotes(notes: any) {
    var allSelected = true;
    for (var prop in notes) {
      if (Object.prototype.hasOwnProperty.call(notes, prop)) {
        if (notes[prop] === false) {
          allSelected = false;
        }
      }
    }

    for (var prop in notes) {
      if (Object.prototype.hasOwnProperty.call(notes, prop)) {
        notes[prop] = !allSelected;
      }
    }
  }
}
