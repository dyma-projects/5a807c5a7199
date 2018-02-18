import {  OnInit, Directive ,Input,HostListener,ElementRef,Renderer2} from '@angular/core';

@Directive({
selector: '[color]'
})
export class ColorDirective {
  constructor(private el: ElementRef,private renderer: Renderer2) {
  }
  
  @HostListener('window:keyup', ['$event']) arrowup($event) {
	  if($event.code==='ArrowUp')
	  {this.renderer.setStyle(this.el.nativeElement, 'color', 'purple');}
  else if($event.code==='ArrowDown')
	  {this.renderer.setStyle(this.el.nativeElement, 'color', 'green');}
    else if($event.code==='ArrowLeft')
	  {this.renderer.setStyle(this.el.nativeElement, 'color', 'red');}
    else if($event.code==='ArrowRight')
	  {this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');}
    else 
	  {this.renderer.setStyle(this.el.nativeElement, 'color', 'black');}
   }
  
}
