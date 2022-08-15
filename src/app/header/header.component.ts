import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	constructor() {}
	public view: boolean = false;
	public screenWidth: any;
	ngOnInit(): void {
		this.screenWidth = window.innerWidth;
	}
	public show() {
		this.view = !this.view;
	}
}
