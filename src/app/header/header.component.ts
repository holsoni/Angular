import { Component,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() siteName:string = '';
  @Input() userName:string = '';

  @Output() event = new EventEmitter<string>();

  onEvent(){
    this.event.emit();
  }
}
