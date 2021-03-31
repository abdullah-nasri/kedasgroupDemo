import { Component, OnInit } from '@angular/core';
import { BlogCategory } from '../../../../interfaces/category';
import { BlogApi } from '../../../../api/base';
import { Observable } from 'rxjs';
import { Post } from '../../../../interfaces/post';
import { blogPosts } from '../../../../../data/blog-posts';
import { blogWidgetComments } from '../../../../../data/blog-widget-comments';
import { Comment } from '../../../../interfaces/comment';

@Component({
    selector: 'app-blog-sidebar',
    templateUrl: './blog-sidebar.component.html',
    styleUrls: ['./blog-sidebar.component.scss'],
})
export class BlogSidebarComponent implements OnInit {
    categories$: Observable<BlogCategory[]>;

    posts: Post[] = blogPosts.slice(0, 4);

    comments: Comment[] = blogWidgetComments.slice(0, 3);

    constructor(
        private blogApi: BlogApi,
    ) { }

    ngOnInit(): void {
        this.categories$ = this.blogApi.getCategories({depth: 1});
    }
}
