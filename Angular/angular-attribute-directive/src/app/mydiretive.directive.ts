import { Directive, HostListener, HostBinding, ElementRef, Renderer, Renderer2 } from '@angular/core';

@Directive({
  selector: ' [appVijDirect] '
})
export class MydiretiveDirective {
  constructor(private ele: ElementRef, private rend: Renderer2) { }
  @HostBinding('style.background') color: string;
  @HostBinding('id') _id: string;

  @HostListener('doubleclick')
  test1() {
    this.color = 'black';
  }
  @HostListener('click')
  test() {
    this.color = 'red';
    if (this.ele.nativeElement.querySelector('#testdiv')) {
      const ele: any = this.ele.nativeElement.querySelector('#testdiv');
      this.rend.setStyle(ele, 'display', 'block');
    } else {
      const title = this.ele.nativeElement.innerHTML;
      // const div = this.rend.createElement('span');
      const div = this.rend.createElement('div');
      let str: string = `<div style="background:green;width:fit-content;
      position:relative;bottom:30px;"><h1>${title}</h1></div>`;
      // let str:string = `<div class="tooltiptext"><h1>${title}</h1></div>`;
      div.innerHTML = str;
      // const text = this.rend.createText(title) ;
      // this.rend.setStyle(div, 'background', 'green');
      // this.rend.setStyle(div, 'width', 'fit-content');
      // this.rend.setStyle(div, 'position', 'relative');
      // this.rend.setStyle(div, 'bottom', '30px');
      this.rend.setAttribute(div, 'id', 'testdiv');
      this.rend.setAttribute(div, 'class', 'tooltiptext');
      // this.rend.setStyle(div,'position','absolute');
      // this.rend.appendChild(div, text);
      this.rend.appendChild(this.ele.nativeElement, div);
    }
  }
  @HostListener('document:click', ['$event.target'])
  onBlur(targetElement) {
    const clickedInside = this.ele.nativeElement.contains(targetElement);
    if (!clickedInside) {
      const ele: any = this.ele.nativeElement.querySelector('#testdiv');
      if (ele) this.rend.setStyle(ele, 'display', 'none');
    }
  }


  ngOnInit() {
    this._id = 'lkj';
    debugger;
    this.rend.setAttribute(this.ele.nativeElement, 'id', 'tonnel');
    // alert(this.ele.nativeElement.id+this._id);
    let element = this.ele.nativeElement;
    this.rend.setAttribute(element, 'class', 'tooltip');
  }

}
