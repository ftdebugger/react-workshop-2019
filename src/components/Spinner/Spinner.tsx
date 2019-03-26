import * as React from 'react';

import classnames from 'classnames';

import './Spinner.css';

export interface SpinnerProps {
    screen?: boolean;
    className?: string;
}

export const Spinner: React.FC<SpinnerProps & React.RefAttributes<HTMLDivElement>> = React.forwardRef(
    function Spinner({screen, className}: SpinnerProps, ref: React.Ref<HTMLDivElement>) {
        return (
            <div
                ref={ref}
                className={classnames('spinner', className, {
                    'spinner_screen': screen,
                })}
            >
                <div className="spinner__inner" />
            </div>
        );
    }
);

