import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { CookoptionService } from '../../services/cookoption.service';
import { Cookoption } from '../../interfaces/cookoption.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { cookoptionFormComponents } from '../../formcomponents/cookoption.formcomponents';

@Component({
	templateUrl: './options.component.html',
	styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
	columns = ['name', 'price', 'type'];

	form: FormInterface = this._form.getForm('cookoption', cookoptionFormComponents);

	config = {
		create: (): void => {
			this._form.modal<Cookoption>(this.form, {
				label: 'Create',
				click: (created: unknown, close: () => void) => {
					this._cookoptionService.create(created as Cookoption);

					close();
				}
			});
		},
		update: (doc: Cookoption): void => {
			this._form.modal<Cookoption>(this.form, [], doc).then((updated: Cookoption) => {
				this._core.copy(updated, doc);

				this._cookoptionService.update(doc);
			});
		},
		delete: (doc: Cookoption): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this cookoption?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._cookoptionService.delete(doc);
						}
					}
				]
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Cookoption): void => {
					this._form.modalUnique<Cookoption>('cookoption', 'url', doc);
				}
			}
		]
	};

	get rows(): Cookoption[] {
		return this._cookoptionService.cookoptions;
	}

	constructor(
		private _translate: TranslateService,
		private _cookoptionService: CookoptionService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {}
}
