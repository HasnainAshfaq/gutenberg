/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useState, useEffect, Children } from '@wordpress/element';
import deprecated from '@wordpress/deprecated';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Modal from '../modal';
import KeyboardShortcuts from '../keyboard-shortcuts';
import Button from '../button';
import PageControl from './page-control';
import { BackButtonIcon, ForwardButtonIcon } from './icons';
import FinishButton from './finish-button';

export default function Guide( {
	children,
	className,
	contentLabel,
	finishButtonText,
	onFinish,
	pages = [],
} ) {
	const [ currentPage, setCurrentPage ] = useState( 0 );

	useEffect( () => {
		if ( Children.count( children ) ) {
			deprecated( 'Passing children to <Guide>', {
				alternative: 'the `pages` prop',
			} );
		}
	}, [ children ] );

	if ( Children.count( children ) ) {
		pages = Children.map( children, ( child ) => ( { content: child } ) );
	}

	const canGoBack = currentPage > 0;
	const canGoForward = currentPage < pages.length - 1;

	const goBack = () => {
		if ( canGoBack ) {
			setCurrentPage( currentPage - 1 );
		}
	};

	const goForward = () => {
		if ( canGoForward ) {
			setCurrentPage( currentPage + 1 );
		}
	};

	if ( pages.length === 0 ) {
		return null;
	}

	return (
		<Modal
			className={ classnames( 'components-guide', className ) }
			contentLabel={ contentLabel }
			onRequestClose={ onFinish }
		>
			<KeyboardShortcuts
				key={ currentPage }
				shortcuts={ {
					left: goBack,
					right: goForward,
				} }
			/>

			<div className="components-guide__container">
				<div className="components-guide__page">
					{ pages[ currentPage ].image }

					<PageControl
						currentPage={ currentPage }
						numberOfPages={ pages.length }
						setCurrentPage={ setCurrentPage }
					/>

					{ pages[ currentPage ].content }

					{ ! canGoForward && (
						<FinishButton
							className="components-guide__inline-finish-button"
							onClick={ onFinish }
						>
							{ finishButtonText || __( 'Finish' ) }
						</FinishButton>
					) }
				</div>

				<div className="components-guide__footer">
					{ canGoBack && (
						<Button
							className="components-guide__back-button"
							icon={ <BackButtonIcon /> }
							onClick={ goBack }
						>
							{ __( 'Previous' ) }
						</Button>
					) }
					{ canGoForward && (
						<Button
							className="components-guide__forward-button"
							icon={ <ForwardButtonIcon /> }
							onClick={ goForward }
						>
							{ __( 'Next' ) }
						</Button>
					) }
					{ ! canGoForward && (
						<FinishButton
							className="components-guide__finish-button"
							onClick={ onFinish }
						>
							{ finishButtonText || __( 'Finish' ) }
						</FinishButton>
					) }
				</div>
			</div>
		</Modal>
	);
}
