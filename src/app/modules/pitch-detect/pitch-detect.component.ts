import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pitch-detect',
  templateUrl: './pitch-detect.component.html',
  styleUrls: ['./pitch-detect.component.css']
})
export class PitchDetectComponent implements OnInit {

  @ViewChild("NoteC", { static: false }) NoteC: HTMLAudioElement;
  @ViewChild("NoteCs", { static: false }) NoteCs: HTMLAudioElement;
  @ViewChild("NoteD", { static: false }) NoteD: HTMLAudioElement;
  @ViewChild("NoteDs", { static: false }) NoteDs: HTMLAudioElement;
  @ViewChild("NoteE", { static: false }) NoteE: HTMLAudioElement;
  @ViewChild("NoteF", { static: false }) NoteF: HTMLAudioElement;
  @ViewChild("NoteFs", { static: false }) NoteFs: HTMLAudioElement;
  @ViewChild("NoteG", { static: false }) NoteG: HTMLAudioElement;
  @ViewChild("NoteGs", { static: false }) NoteGs: HTMLAudioElement;
  @ViewChild("NoteA", { static: false }) NoteA: HTMLAudioElement;
  @ViewChild("NoteAs", { static: false }) NoteAs: HTMLAudioElement;
  @ViewChild("NoteB", { static: false }) NoteB: HTMLAudioElement;
  @ViewChild("NoteC2", { static: false }) NoteC2: HTMLAudioElement;
  @ViewChild("NoteCs2", { static: false }) NoteCs2: HTMLAudioElement;
  @ViewChild("NoteD2", { static: false }) NoteD2: HTMLAudioElement;
  @ViewChild("NoteDs2", { static: false }) NoteDs2: HTMLAudioElement;
  @ViewChild("NoteE2", { static: false }) NoteE2: HTMLAudioElement;

  constructor() { }

  ngOnInit(): void {
  }

  playNote(event: Event) {
    var pianoKey = event.target as HTMLDivElement;
    var audio = pianoKey.children[0] as HTMLAudioElement;
    audio.play();
  }
}
