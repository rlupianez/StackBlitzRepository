import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1><input class="input" value ={{name}}>`,
  styles: [
    `h1 { font-family: Lato; 
                color:blue;
                };`,
  ],
})
export class HelloComponent {
  @Input() name: string;
}
