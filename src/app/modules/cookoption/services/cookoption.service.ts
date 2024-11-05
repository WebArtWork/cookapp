import { Injectable } from '@angular/core';
import { Cookoption } from '../interfaces/cookoption.interface';
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
export class CookoptionService extends CrudService<Cookoption> {
	cookoptions: Cookoption[] = this.getDocs();

	cookoptionsByAuthor: Record<string, Cookoption[]> = {};

	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'cookoption',
			},
			_http,
			_store,
			_alert,
			_core
		);

		this.get();

		this.filteredDocuments(this.cookoptionsByAuthor);
	}
}
