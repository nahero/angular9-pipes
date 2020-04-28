import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: any, propertyName: string) {
    function compare(a, b) {
      const aName = a[propertyName];
      const bName = b[propertyName];
      return aName < bName ? -1 : aName > bName ? 1 : 0;
    }

    const sortedResults = value.sort(compare);

    return sortedResults;
  }
}
