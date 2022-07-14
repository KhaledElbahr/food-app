import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) { }

  @HostListener('click') toggleOpen() {
    const dropdown = this.elRef.nativeElement;
    console.log(dropdown);
    (dropdown.classList.value === 'dropdown-menu show') ?
      this.renderer.removeClass(dropdown, 'show')
      :
      this.renderer.addClass(dropdown, 'show');
  }
}

