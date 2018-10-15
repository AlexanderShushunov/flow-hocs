/* eslint-disable no-unused-expressions */
// @flow
import * as React from 'react';
import {injectDerived} from './inject-derived';

type OwnProps = {|
    own: number,
    foo: () => boolean
|};

/*
* Right usage
*/
(
    injectDerived(
        (props: {|...OwnProps, injected: boolean|}) => props.injected
    ): React.ComponentType<OwnProps>
);

/*
 * Should check, that all wrapped component gets all props
*/
(
    injectDerived(
        /* $ExpectError */
        (props: {|...OwnProps, injected: boolean, oneMore: number|}) => (props.oneMore + 1)
    ): React.ComponentType<OwnProps>
);
