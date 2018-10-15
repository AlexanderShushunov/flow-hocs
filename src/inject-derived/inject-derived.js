// @flow
import * as React from 'react';
import {mapProps} from '../map-props';
import type {Unexact} from '../unexact';

// Usually we have deal with exact types.
type MinOwnProp = {|
    foo: () => boolean;
|}

type InjectedProps = {|
    injected: boolean;
|}

const addProp = <OwnProps: MinOwnProp>(props: OwnProps) => ({
    ...props,
    injected: props.foo()
});

export const injectDerived = mapProps(addProp);
