// @flow
import * as React from 'react';

export function mapProps<PropsInput: {}, PropsOutput: {}>(
    propsMapper: PropsInput => PropsOutput
): (React.ComponentType<PropsOutput>) => React.ComponentType<PropsInput> {
    return (WrappedComponent) => {
        const WithProps = props => <WrappedComponent {...propsMapper(props)} />;
        WithProps.displayName = `withMapProps(${WrappedComponent.displayName || WrappedComponent.name})`;
        return WithProps;
    };
}
