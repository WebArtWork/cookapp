import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { CookoptionService } from '../../services/cookoption.service';
import { Cookoption } from '../../interfaces/cookoption.interface';

@Component({
	selector: 'cookoption-selector',
	templateUrl: './cookoption-selector.component.html',
	styleUrls: ['./cookoption-selector.component.scss'],
	standalone: true,
	imports: [SelectModule]
})
export class SelectUserComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Cookoption[] {
		return this._cookoptionService.cookoptions;
	}

	constructor(private _cookoptionService: CookoptionService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
