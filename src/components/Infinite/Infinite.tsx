import * as React from 'react';
import {Spinner} from '../Spinner/Spinner';

import './Infinite.css';

const TIMEOUT = 5000;

export interface InfiniteProps {
    fetchNext(): Promise<void>;
}

export class Infinite extends React.Component<InfiniteProps> {
    private spinner: React.RefObject<HTMLDivElement> = React.createRef();
    private observer!: IntersectionObserver;
    private isFetching: boolean = false;
    private isDestroyed: boolean = false;

    public componentDidMount(): void {
        this.observer = new IntersectionObserver((entries) => {
            let isVisible = entries.some((entry) => entry.isIntersecting);

            if (isVisible) {
                this.tryFetch();
            }
        });

        if (this.spinner.current) {
            this.observer.observe(this.spinner.current);
        }
    }

    public componentWillUnmount(): void {
        this.observer.disconnect();
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
                ref={this.spinner}
                className="infinite"
            />
        );
    }

}
