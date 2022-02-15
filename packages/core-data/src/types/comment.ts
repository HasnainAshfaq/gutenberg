/**
 * Internal dependencies
 */
import { AvatarUrls, RawField, WithEdits } from './common';

export interface Comment {
	/**
	 * Unique identifier for the comment.
	 */
	id: number;
	/**
	 * The ID of the user object, if author was a user.
	 */
	author: number;
	/**
	 * Email address for the comment author.
	 */
	author_email?: string;
	/**
	 * IP address for the comment author.
	 */
	author_ip?: string;
	/**
	 * Display name for the comment author.
	 */
	author_name: string;
	/**
	 * URL for the comment author.
	 */
	author_url: string;
	/**
	 * User agent for the comment author.
	 */
	author_user_agent?: string;
	/**
	 * The content for the comment.
	 */
	content: RawField;
	/**
	 * The date the comment was published, in the site's timezone.
	 */
	date: string;
	/**
	 * The date the comment was published, as GMT.
	 */
	date_gmt?: string;
	/**
	 * URL to the comment.
	 */
	link: string;
	/**
	 * The ID for the parent of the comment.
	 */
	parent: number;
	/**
	 * The ID of the associated post object.
	 */
	post?: number;
	/**
	 * State of the comment.
	 */
	status?: string;
	/**
	 * Type of the comment.
	 */
	type: string;
	/**
	 * Avatar URLs for the comment author.
	 */
	author_avatar_urls: AvatarUrls;
	/**
	 * Meta fields.
	 */
	meta?: {
		[ k: string ]: string;
	};
}

export interface CommentWithEdits extends WithEdits< Comment, 'content' > {}
