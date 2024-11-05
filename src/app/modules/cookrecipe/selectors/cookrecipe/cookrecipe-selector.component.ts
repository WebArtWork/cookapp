import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { CookrecipeService } from '../../services/cookrecipe.service';
import { Cookrecipe } from '../../interfaces/cookrecipe.interface';

@Component({
	selector: 'cookrecipe-selector',
	templateUrl: './cookrecipe-selector.component.html',
	styleUrls: ['./cookrecipe-selector.component.scss'],
	standalone: true,
	imports: [SelectModule]
})
export class SelectUserComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Cookrecipe[] {
		return this._cookrecipeService.cookrecipes;
	}

	constructor(private _cookrecipeService: CookrecipeService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
