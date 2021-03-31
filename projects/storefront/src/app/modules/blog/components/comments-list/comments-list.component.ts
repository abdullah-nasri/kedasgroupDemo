import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-comments-list',
    templateUrl: './comments-list.component.html',
    styleUrls: ['./comments-list.component.scss'],
})
export class CommentsListComponent {
    @Input() comments: any;

    @Input() level = 0;

    constructor() { }
}
