import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(posts: Post[], search: string = ''): Post[] {
    if (!search.trim()) {
      return posts;
    } else {
      return posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.text.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
  }
}
