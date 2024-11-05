import { Injectable } from '@angular/core';
import { Cookrecipe } from '../interfaces/cookrecipe.interface';
import {
	AlertService,
	CoreService,
	HttpService,
	StoreService,
	CrudService
} from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class CookrecipeService extends CrudService<Cookrecipe> {
	cookrecipes: Cookrecipe[] = this.getDocs();

	cookrecipesByAuthor: Record<string, Cookrecipe[]> = {};

	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'cookrecipe',
			},
			_http,
			_store,
			_alert,
			_core
		);

		this.get();

		this.filteredDocuments(this.cookrecipesByAuthor);
	}
}
