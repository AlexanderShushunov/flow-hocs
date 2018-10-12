// @flow
import * as React from 'react';

type InjectedProps = {|
    injected: boolean;
|}

type InjectHocRest = <OwnProps: {}>() => (
    React.ComponentType<{|...OwnProps, ...InjectedProps|}> => React.ComponentType<OwnProps>
)

declare var injectHocRest: InjectHocRest;

export {injectHocRest};
