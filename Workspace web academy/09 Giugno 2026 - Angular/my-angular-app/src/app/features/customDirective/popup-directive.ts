import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customPopup]',
})
export class PopupDirective implements OnInit {

  @Input() isPresent: boolean = true;

  constructor(private el: ElementRef) {
    const native = el.nativeElement;

    native.style.display = 'inline-block';
    native.style.padding = '6px 12px';

    native.style.background = 'linear-gradient(135deg, #fee2e2, #fecaca)';
    native.style.color = '#b91c1c';
    native.style.borderRadius = '15px'

    native.style.fontWeight = '700';
    native.style.fontSize = '11px';

    native.style.position = 'absolute';
    native.style.top = '12px';
    native.style.right = '12px';

    native.style.boxShadow = '0 6px 14px rgba(0,0,0,0.12)';
    native.style.zIndex = '10';

    native.style.cursor = 'pointer';
    native.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';

    native.addEventListener('mouseenter', () => {
      native.style.transform = 'scale(1.08)';
      native.style.boxShadow = '0 10px 20px rgba(0,0,0,0.18)';
    });

    native.addEventListener('mouseleave', () => {
      native.style.transform = 'scale(1)';
      native.style.boxShadow = '0 6px 14px rgba(0,0,0,0.12)';
    });
  }
  ngOnInit(): void {

    // if (condition) {

    // }
  }
}
