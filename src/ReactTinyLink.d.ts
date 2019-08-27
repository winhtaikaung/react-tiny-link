import * as React from 'react';
import { ScraperWraper } from './rules';
import { IReactTinyLinkProps, IReactTinyLinkState } from './ReactTinyLinkTypes';
declare class ReactTinyLink extends React.Component<IReactTinyLinkProps, IReactTinyLinkState> {
    static defaultProps: IReactTinyLinkProps;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export { ReactTinyLink, ScraperWraper };
export default ReactTinyLink;
