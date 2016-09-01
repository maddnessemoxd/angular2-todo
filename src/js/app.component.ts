import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{ title }}</h1><ul><li *ngFor = 'let item of arr'>{{ item }}</li></ul>`
})

export class AppComponent {
    title: string;
    arr: string[];

    constructor() {
        this.title = 'Todo app';
        this.arr = ['test1', 'test2', 'test3'];
    }
}
