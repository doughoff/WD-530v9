import { Component } from '@angular/core';
import { AccordionData } from './model/accordionData';
import { AccordionSection } from './model/accordionSection';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: `app.component.html`
})
export class AppComponent {
  constructor() {
    AccordionData.FOUR.forEach((element, index, array) => {
      const section = new AccordionSection(element.label, element.content);
      this.sections.push(section);
    });
    console.info('constructor()');
  }
  sections: AccordionSection[] = [];

  static shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  ngOnInit() {
    console.table(this.sections);
  }
  accordionClick(event: MouseEvent) {
    event.preventDefault();
    const id = event.srcElement['id'];
    console.log('Clicked accordion element', id);
    console.dir(event.srcElement); // to see the properties
    // close all
    this.sections.forEach(section => {
      section.hidden = true;
    });
    const clickedContent = this.sections[id];
    clickedContent.hidden = !clickedContent.isHidden;
  }
  showEventInConsole(event: Event) {
    console.info(event);
    event.preventDefault();
  }
  reverseSections() {
    this.sections.reverse();
  }
  shuffleSections() {
    AppComponent.shuffleArray(this.sections);
  }
  deleteLastSection() {
    this.sections.pop();
  }
}
