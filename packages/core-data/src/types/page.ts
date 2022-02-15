/**
 * Internal dependencies
 */
import {
	CommentStatus,
	PingStatus,
	PostStatus,
	RawField,
	WithEdits,
} from './common';

export interface Page {
	/**
	 * The date the post was published, in the site's timezone.
	 */
	date: string | null;
	/**
	 * The date the post was published, as GMT.
	 */
	date_gmt?: string | null;
	/**
	 * The globally unique identifier for the post.
	 */
	guid?: RawField;
	/**
	 * Unique identifier for the post.
	 */
	id: number;
	/**
	 * URL to the post.
	 */
	link: string;
	/**
	 * The date the post was last modified, in the site's timezone.
	 */
	modified?: string;
	/**
	 * The date the post was last modified, as GMT.
	 */
	modified_gmt?: string;
	/**
	 * An alphanumeric identifier for the post unique to its type.
	 */
	slug: string;
	/**
	 * A named status for the post.
	 */
	status?: PostStatus;
	/**
	 * Type of post.
	 */
	type: string;
	/**
	 * A password to protect access to the content and excerpt.
	 */
	password?: string;
	/**
	 * Permalink template for the post.
	 */
	permalink_template?: string;
	/**
	 * Slug automatically generated from the post title.
	 */
	generated_slug?: string;
	/**
	 * The ID for the parent of the post.
	 */
	parent?: number;
	/**
	 * The title for the post.
	 */
	title: RawField;
	/**
	 * The content for the post.
	 */
	content?: RawField & {
		/** Whether the content is protected with a password. */
		is_protected: boolean;
		/** Version of the content block format used by the page. */
		block_version?: string;
	};
	/**
	 * The ID for the author of the post.
	 */
	author: number;
	/**
	 * The excerpt for the post.
	 */
	excerpt: RawField;
	/**
	 * The ID of the featured media for the post.
	 */
	featured_media: number;
	/**
	 * Whether or not comments are open on the post.
	 */
	comment_status?: CommentStatus;
	/**
	 * Whether or not the post can be pinged.
	 */
	ping_status?: PingStatus;
	/**
	 * The order of the post in relation to other posts.
	 */
	menu_order?: number;
	/**
	 * Meta fields.
	 */
	meta?: {
		[ k: string ]: string;
	};
	/**
	 * The theme file to use to display the post.
	 */
	template?: string;
}

export interface PageWithEdits
	extends WithEdits< Page, 'guid' | 'title' | 'content' | 'excerpt' > {}
