import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { CookrecipeService } from '../../services/cookrecipe.service';
import { Cookrecipe } from '../../interfaces/cookrecipe.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { cookrecipeFormComponents } from '../../formcomponents/cookrecipe.formcomponents';

@Component({
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('cookrecipe', cookrecipeFormComponents);

	config = {
		create: (): void => {
			this._form.modal<Cookrecipe>(this.form, {
				label: 'Create',
				click: (created: unknown, close: () => void) => {
					this._cookrecipeService.create(created as Cookrecipe);

					close();
				}
			});
		},
		update: (doc: Cookrecipe): void => {
			this._form.modal<Cookrecipe>(this.form, [], doc).then((updated: Cookrecipe) => {
				this._core.copy(updated, doc);

				this._cookrecipeService.update(doc);
			});
		},
		delete: (doc: Cookrecipe): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this cookrecipe?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._cookrecipeService.delete(doc);
						}
					}
				]
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Cookrecipe): void => {
					this._form.modalUnique<Cookrecipe>('cookrecipe', 'url', doc);
				}
			}
		]
	};

	get rows(): Cookrecipe[] {
		return this._cookrecipeService.cookrecipes;
	}

	constructor(
		private _translate: TranslateService,
		private _cookrecipeService: CookrecipeService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {}
}
