/**
 * Internal dependencies
 */
import { Context } from './common';

export interface NavMenu< C extends Context > {
	/**
	 * Unique identifier for the term.
	 */
	id: number;
	/**
	 * HTML description of the term.
	 */
	description?: string;
	/**
	 * HTML title for the term.
	 */
	name: string;
	/**
	 * An alphanumeric identifier for the term unique to its type.
	 */
	slug: string;
	/**
	 * Meta fields.
	 */
	meta?: Record< string, string >;
	/**
	 * The locations assigned to the menu.
	 */
	locations?: string[];
	/**
	 * Whether to automatically add top level pages to this menu.
	 */
	auto_add?: boolean;
}
