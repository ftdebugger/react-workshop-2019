import * as React from 'react';

import classnames from 'classnames';
import {withVisibilityStatus, WithVisibilityStatusProps} from '../withVisibilityStatus/withVisibilityStatus';

export interface ImageProps {
    src?: string;
    alt?: string;
    ratio?: number;
    className?: string;
}

interface ComponentState {
    hidden: boolean;
}

export const Image = withVisibilityStatus(
    class Image extends React.Component<ImageProps & WithVisibilityStatusProps, ComponentState> {
        public state: ComponentState = {
            hidden: true,
        };

        private image: React.RefObject<HTMLImageElement> = React.createRef();

        onLoad() {
            let image = this.image.current;

            if (image && this.state.hidden) {
                if (image.naturalHeight > 0) {
                    this.setState({hidden: false});
                }
            }
        }

        render() {
            let {src, alt, ratio, className, rootRef, isVisible} = this.props;
            let {hidden} = this.state;

            if (!src) {
                return null;
            }

            return (
                <div
                    className={classnames('image', className, {
                        'image_hidden': hidden,
                    })}
                    style={{
                        minHeight: ratio ? `${ratio * 100}vw` : undefined,
                    }}
                    ref={rootRef}
                >
                    {isVisible && (
                        <img
                            src={src}
                            className="image__image"
                            alt={alt}
                            onLoad={() => this.onLoad()}
                            ref={this.image}
                        />
                    )}
                </div>
            );
        }

    }
);

