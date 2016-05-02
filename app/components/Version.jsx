import React from 'react';

import Issue from './Issue';

export default class Version extends React.Component {
    render() {
        const issues = this.props.issues.map(i => <Issue key={i.id} {...i} />);
        const cls = this.props.finished ? 'finished' : '';
        return (
            <div className={cls}>
                <h2>{this.props.ver}</h2>
                <div>
                    {issues}
                </div>
            </div>
        );
    }
}
