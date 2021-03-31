import { Component, OnInit } from '@angular/core';
import { blogPosts } from '../../../../../data/blog-posts';
import { ActivatedRoute } from '@angular/router';

export type PageBlogLayout = 'classic' | 'grid' | 'list';

export type PageBlogSidebarPosition = 'start' | 'end';

export interface PageBlogData {
    layout: PageBlogLayout;
    sidebarPosition: PageBlogSidebarPosition;
}

@Component({
    selector: 'app-page-blog',
    templateUrl: './page-blog.component.html',
    styleUrls: ['./page-blog.component.scss'],
})
export class PageBlogComponent implements OnInit {
    layout: PageBlogLayout = 'grid';

    sidebarPosition: PageBlogSidebarPosition = 'end';

    posts = blogPosts;

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.route.data.subscribe((data: PageBlogData) => {
            this.layout = data.layout;
            this.sidebarPosition = data.sidebarPosition;
        });
    }
}
