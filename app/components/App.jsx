import React from 'react';

import Version from './Version';

const UNPLANED = 'unplaned';
const VERSION_RE = new RegExp(/^v(\d+)(?:.(\d+))$/);


function versionCompare(a, b) {
    if (a === UNPLANED) {
        return 1;
    }
    if (b === UNPLANED) {
        return -1;
    }
    return a > b;
}


export default class App extends React.Component {
    render() {
        let versions = {};
        this.props.issues.forEach(issue => {
            const tags = issue.tags.filter(t => VERSION_RE.exec(t));
            const ver = tags.length > 0 ? tags[0] : UNPLANED;
            versions[ver] = versions[ver] || {'finished': true, 'issues': []};
            versions[ver].finished = versions[ver].finished && issue.status !== 'Open';
            versions[ver].issues.push(issue);
        });
        const x = Object.keys(versions).sort(versionCompare).map(ver =>
            <Version key={ver} ver={ver} {...versions[ver]} />
        );
        return <div>{x}</div>;
    }
}
