import * as React from 'react';

export interface WithVisibilityStatusProps {
    isVisible: boolean;
    rootRef: React.RefObject<HTMLDivElement>;
}

interface ComponentState {
    isVisible: boolean;
}

export function withVisibilityStatus<P>(Component: React.ComponentClass<P & WithVisibilityStatusProps>)
    : React.ComponentClass<P> {
    return class extends React.PureComponent<P, ComponentState> {
        public state: ComponentState = {isVisible: false};
        private element = React.createRef<HTMLDivElement>();
        private observer: IntersectionObserver | undefined;

        public componentDidMount(): void {
            this.observer = new IntersectionObserver((entries) => {
                let isVisible = entries.some((entry) => entry.isIntersecting);

                if (this.state.isVisible !== isVisible) {
                    this.setState({isVisible});
                }
            });

            if (this.element.current) {
                this.observer.observe(this.element.current);
            }
        }

        public componentWillUnmount(): void {
            if (this.observer) {
                this.observer.disconnect();
            }
        }

        render() {
            let {isVisible} = this.state;

            return (
                <Component
                    {...this.props}

                    isVisible={isVisible}
                    rootRef={this.element}
                />
            );
        }

    }
}
