import { Component, OnInit } from '@angular/core';
import { AllKeysAndModes } from './models/keys';
import { CookieService } from 'ngx-cookie-service';
import { GrooveWorkoutSettings } from './models/settings.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-scales-training',
  templateUrl: './scales-training.component.html',
  styleUrls: ['./scales-training.component.css']
})
export class ScalesTrainingComponent implements OnInit {

  private readonly drumtrackurl =
    "https://firebasestorage.googleapis.com/v0/b/bass-scale-practice.appspot.com/o/drumtracks%2F[DRUMSTYLE]_[SILENTBARS]_[BPM].mp3?alt=media&token=e9b2f34e-1c12-4d8c-a8b6-ac37b93695bd";

  public currentScale: any;
  public allSelectedScales = new Array();

  private interval;
  private playing = false;
  public buttonText = "PLAY";
  private audioSrc: string;
  private audioEl: HTMLAudioElement;
  public settings: GrooveWorkoutSettings;
  public downloadSettingsHref: any;
  private file: any;

  constructor(private cookieService: CookieService,
    private sanitizer: DomSanitizer) { }

  private fillSelectedScalesArray() {
    this.allSelectedScales = new Array();
    this.addAllScalesToArray();
  }

  ngOnInit(): void {
    if (this.settings == null) {
      var settingsCookie = this.cookieService.get("groovesettings");

      if (settingsCookie === "") {
        this.settings = {
          scaleIntervalTime: 60000,
          drumsbpm: 110,
          silentBars: 0,
          drumStyle: "poprock",
          modeDisplay: "both",
          scales: new AllKeysAndModes()
        }
      } else {
        this.settings = JSON.parse(settingsCookie);
      }
    }
    this.fillSelectedScalesArray();
    this.setRandomScale();
  }

  public saveSettings() {
    this.cookieService.set("groovesettings", JSON.stringify(this.settings));
  }

  private addAllScalesToArray() {
    var suffixDisplayTemplate = this.createSuffixDisplayTemplate(suffixDisplayTemplate);
    this.addMode(this.settings.scales.IonianMajor, suffixDisplayTemplate
      .replace("[mode]", "ion")
      .replace("[scale]", "maj"));
    this.addMode(this.settings.scales.Dorian, " dor");
    this.addMode(this.settings.scales.Phrygian, " phy");
    this.addMode(this.settings.scales.Lydian, " lyd");
    this.addMode(this.settings.scales.Mixolydian, " mix");
    this.addMode(this.settings.scales.Dorian, " dor");
    this.addMode(this.settings.scales.AeolianMinor, suffixDisplayTemplate
      .replace("[mode]", "aeo")
      .replace("[scale]", "min"));
    this.addMode(this.settings.scales.Locrian, " loc");
  }

  private createSuffixDisplayTemplate(suffixDisplayFormat: any) {
    switch (this.settings.modeDisplay) {
      case "both":
        suffixDisplayFormat = " [mode] ([scale])";
        break;
      case "modes":
        suffixDisplayFormat = " [mode]";
        break;
      case "scales":
        suffixDisplayFormat = " [scale]";
    }
    return suffixDisplayFormat;
  }

  private replaceAccidentals(note: string) {
    return note
      .replace("FsGb", "Fs / Gb")
      .replace("DsEb", "Ds / Eb")
      .replace("s", "♯")
      .replace("b", "♭")
  }

  private addMode(keys: any, suffix: string) {
    for (var prop in keys) {
      if (Object.prototype.hasOwnProperty.call(keys, prop)) {
        if (keys[prop] === true) {
          this.allSelectedScales.push(
            this.replaceAccidentals(prop)
            + " " + suffix
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
        this.settings.scaleIntervalTime
      );
      var audioSrc;
      if (this.settings.silentBars == 0) {
        audioSrc = this.drumtrackurl
          .replace("[BPM]", this.settings.drumsbpm.toString())
          .replace("[DRUMSTYLE]", this.settings.drumStyle)
          .replace("[SILENTBARS]_", "");
      } else {
        audioSrc = this.drumtrackurl
          .replace("[BPM]", this.settings.drumsbpm.toString())
          .replace("[DRUMSTYLE]", this.settings.drumStyle)
          .replace("[SILENTBARS]", this.settings.silentBars.toString() + "barsilence");
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
