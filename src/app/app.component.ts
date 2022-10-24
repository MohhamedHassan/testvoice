import { Component,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-voice';
  play=false
  audio = new Audio('assets/all.ogg');
  @ViewChild('test')
  test!: ElementRef;





  playAudio() {

    if(this.play)this.audio.pause()
    else this.audio.play()
    this.play=!this.play
}
ngOnInit(): void {
  this.audio.onended = ()=> {
   this.play=false
 //  manageImageObjectsLevel();
  }

  this.test.nativeElement.addEventListener('ended', function() {
  //  manageImageObjectsLevel();
}).get(0).play();
}
}
