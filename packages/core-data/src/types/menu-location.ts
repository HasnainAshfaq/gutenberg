/**
 * Internal dependencies
 */
import { Context, WithoutNevers } from './common';

interface FullMenuLocation< C extends Context > {
	/**
	 * The name of the menu location.
	 */
	name: string;
	/**
	 * The description of the menu location.
	 */
	description: string;
	/**
	 * The ID of the assigned menu.
	 */
	menu: number;
}

export type MenuLocation< C extends Context > = WithoutNevers<
	FullMenuLocation< C >
>;
export interface EditedMenuLocation extends MenuLocation< 'edit' > {}
