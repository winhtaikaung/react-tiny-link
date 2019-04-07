import * as React from 'react';
import { IReactTinyLinkProps, IReactTinyLinkState } from './ReactTinyLinkTypes';
export declare class ReactTinyLink extends React.Component<IReactTinyLinkProps, IReactTinyLinkState> {
    static defaultProps: IReactTinyLinkProps;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export default ReactTinyLink;
