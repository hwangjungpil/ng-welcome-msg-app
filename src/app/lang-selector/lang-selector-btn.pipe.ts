import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'langSelectorBtn'
})
export class LangSelectorBtnPipe implements PipeTransform {

  transform(lang: any): any {
    return `${lang.name} (${lang.code})`;
  }

}
