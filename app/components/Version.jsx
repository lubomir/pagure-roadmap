import React from 'react';

import Issue from './Issue';

export default class Version extends React.Component {
    render() {
        const issues = this.props.issues.map(i => <Issue key={i.id} {...i} />);
        const total = this.props.issues.length;
        const finished = this.props.issues.filter(i => i.status !== 'Open').length;
        const ratio = Math.floor(finished * 10 / total);
        const cls = this.props.finished ? 'finished' : '';
        return (
            <div className={cls}>
                <h2>
                    {this.props.ver}
                    <div className="indicator"><div className={`ratio ratio-${ratio}`} /></div>
                </h2>
                <div>
                    {issues}
                </div>
            </div>
        );
    }
}
