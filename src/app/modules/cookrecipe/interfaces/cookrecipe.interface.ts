import { CrudDocument } from 'wacom';

export interface Cookrecipe extends CrudDocument {
	name: string;
	description: string;
}
