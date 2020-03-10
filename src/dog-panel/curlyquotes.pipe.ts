import { Pipe, PipeTransform } from '@angular/core';

// USAGE for @NgModule
// import {CurlyQuotesPipe}       from './curlyquotes.pipe';
// declarations: [CurlyQuotesPipe]
// USAGE for template
// {{text | curlyquotes}}

@Pipe({name: 'curlyQuotes'})
export class CurlyQuotesPipe implements PipeTransform {
  transform(value: string, args?: any[]) {
      return '\u201C' + value.trim() + '\u201D';
  }
}
