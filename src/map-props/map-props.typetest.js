/* eslint-disable no-unused-expressions */
// @flow
import * as React from 'react';
import {mapProps} from './map-props';

/*
* Right usage
*/
(
    mapProps(
        ({prop}) => ({newProp: String(prop * 2)})
    )(
        (props: {newProp: string}) => props.newProp
    ): React.ComponentType<{|prop: number|}>
);

/*
 * Type of map function is incompatible with components
*/
(
    mapProps(
        ({prop}) => ({newProp: String(prop * 2)})
    )(
        /* $ExpectError */
        (props: {newProp: number}) => props.newProp
    ): React.ComponentType<{|prop: number|}>
);


/*
 * Map function does not provide all props.
*/
(
    mapProps(
        ({prop}) => ({newProp: String(prop * 2)})
    )(
        /* $ExpectError */
        (props: {newProp: string, oneMore: number}) => props.newProp
    ): React.ComponentType<{|prop: number|}>
);

/*
 * Add types to map function restrict output component.
*/
(
    mapProps(
        /* $ExpectError */
        ({prop}: {|prop: number|}) => ({newProp: String(prop * 2)})
    )(
        (props: {newProp: string}) => props.newProp
    ): React.ComponentType<{|prop: number, oneMore: boolean|}>
);