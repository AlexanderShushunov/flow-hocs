// @flow
import * as React from 'react';

type InjectedProps = {|
    injected: boolean;
|}

type InjectHocDiff = <AllProps>() => (
    React.ComponentType<AllProps> => React.ComponentType<$Diff<AllProps, InjectedProps>>
)

declare var injectHocDiff: InjectHocDiff;

export {injectHocDiff};
