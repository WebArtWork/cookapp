import { CrudDocument } from 'wacom';

export interface Cookoption extends CrudDocument {
	name: string;
	description: string;
}
