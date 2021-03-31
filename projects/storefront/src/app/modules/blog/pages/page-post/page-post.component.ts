import { Component, OnInit } from '@angular/core';
import { blogPosts } from '../../../../../data/blog-posts';
import { blogComments } from '../../../../../data/blog-comments';
import { ActivatedRoute } from '@angular/router';

export type PagePostSidebarPosition = 'start' | 'end' | false;

export interface PagePostData {
    featuredImage: boolean;
    sidebarPosition: PagePostSidebarPosition;
}

@Component({
    selector: 'app-page-post',
    templateUrl: './page-post.component.html',
    styleUrls: ['./page-post.component.scss'],
})
export class PagePostComponent implements OnInit {
    posts = blogPosts;
    comments = blogComments;

    featuredImage = true;

    sidebarPosition: PagePostSidebarPosition = 'start';

    get hasImage(): boolean {
        return this.featuredImage;
    }

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.route.data.subscribe((data: PagePostData) => {
            this.featuredImage = data.featuredImage;
            this.sidebarPosition = data.sidebarPosition;
        });
    }
}
