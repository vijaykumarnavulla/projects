
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class AppColortDirective {

  constructor(private el: ElementRef,private render:Renderer2) {
      if(AppColortDirective.parenEle){
          this.parentDiv = AppColortDirective.parenEle;
      }
   }


  @Input('appColor') bgColor:string;

  @Input('parentDiv') parentDiv: any;

  private static parenEle:any;


  private backgroundColor(color: string) {
      if(this.parentDiv){
          this.render.setStyle(
            this.parentDiv._element.nativeElement,
            'background-color',
            color
          );
      }
  }

  ngOnInit(){
    if(this.parentDiv && !AppColortDirective.parenEle){
        AppColortDirective.parenEle = this.parentDiv;
      }
      // this.backgroundColor(this.defaultColor);
  }

  ngOnChanges(){
    if(this.bgColor)
    this.backgroundColor(this.bgColor);
  }
}
