/* eslint-disable no-unused-expressions */
// @flow
import * as React from 'react';
import {injectHocDiff} from './inject-hoc-diff';

type AllProps = {|
    own: string,
    injected: boolean
|}

/*
* Right usage
*/
(injectHocDiff()((props: AllProps) => ''): React.ComponentType<{|own: string|}>);

/*
 * $ExpectError
 * With injected props.
*/
(injectHocDiff()((props: AllProps) => ''): React.ComponentType<AllProps>);

/*
 * $ExpectError
 * there is no props
*/
(injectHocDiff()((props: AllProps) => ''): React.ComponentType<{||}>);

/*
 * $ExpectError
 * only injected prop
*/
(injectHocDiff()((props: AllProps) => ''): React.ComponentType<{|injected: boolean|}>);

/*
 * $ExpectError
 * Other prop
*/
(injectHocDiff()((props: AllProps) => ''): React.ComponentType<{|own: string, otherProp: number|}>);