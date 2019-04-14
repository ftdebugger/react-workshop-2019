import * as React from 'react';
import {Spinner} from '../Spinner/Spinner';

import './Infinite.css';
import {withVisibilityStatus, WithVisibilityStatusProps} from '../withVisibilityStatus/withVisibilityStatus';

const TIMEOUT = 5000;

export interface InfiniteProps {
    fetchNext(): Promise<void>;
}

export const Infinite = withVisibilityStatus(
    class Infinite extends React.Component<InfiniteProps & WithVisibilityStatusProps> {
        private isFetching: boolean = false;
        private isDestroyed: boolean = false;

        public componentDidMount(): void {
            if (this.props.isVisible) {
                this.tryFetch();
            }
        }

        public componentDidUpdate(): void {
            if (this.props.isVisible) {
                this.tryFetch();
            }
        }

        public componentWillUnmount(): void {
            this.isDestroyed = true;
        }

        async fetch() {
            if (this.isDestroyed) {
                return;
            }

            if (this.isFetching) {
                return;
            }

            this.isFetching = true;

            try {
                await this.props.fetchNext();
            } finally {
                this.isFetching = false;
            }
        }

        tryFetch() {
            this.fetch().catch((error) => {
                console.log(error);

                setTimeout(() => this.tryFetch(), TIMEOUT);
            });
        }

        render() {
            return (
                <Spinner
                    ref={this.props.rootRef}
                    className="infinite"
                />
            );
        }

    }
);

