import React from 'react';

export default class Issue extends React.Component {
    render() {
        const url = `https://pagure.io/lsedlar-test-playground/issue/${this.props.id}`;
        const cls = this.props.status === 'Open' ? 'hidden' : 'status';
        return (
            <div className="issue">
                <a href={url}>#{this.props.id}</a>
                <span className="title">{this.props.title}</span>
                <span className={cls}>{this.props.status}</span>
            </div>
        );
    }
}
