import './stylesheets/version.css';
import './stylesheets/issue.css';

import React from 'react';
import App from './components/App';

const data = {
  'args': {
    'assignee': null,
    'author': null,
    'status': 'all',
    'tags': [
      'roadmap'
    ]
  },
  'issues': [
    {
      'assignee': null,
      'blocks': [],
      'comments': [],
      'content': 'Fix all the things',
      'date_created': '1462217009',
      'depends': [],
      'id': 16,
      'private': false,
      'status': 'Open',
      'tags': [
        'v0.1',
        'roadmap'
      ],
      'title': 'Fix all the things',
      'user': {
        'fullname': 'Lubom\u00edr Sedl\u00e1\u0159',
        'name': 'lsedlar'
      }
    },
    {
      'assignee': null,
      'blocks': [],
      'comments': [],
      'content': 'Add tests',
      'date_created': '1462217164',
      'depends': [],
      'id': 17,
      'private': false,
      'status': 'Open',
      'tags': [
        'v0.1',
        'roadmap'
      ],
      'title': 'Add tests',
      'user': {
        'fullname': 'Lubom\u00edr Sedl\u00e1\u0159',
        'name': 'lsedlar'
      }
    },
    {
      'assignee': null,
      'blocks': [],
      'comments': [],
      'content': 'Set up CI',
      'date_created': '1462217317',
      'depends': [],
      'id': 18,
      'private': false,
      'status': 'Open',
      'tags': [
        'v0.2',
        'roadmap'
      ],
      'title': 'Set up CI',
      'user': {
        'fullname': 'Lubom\u00edr Sedl\u00e1\u0159',
        'name': 'lsedlar'
      }
    },
    {
      'assignee': null,
      'blocks': [
        '20'
      ],
      'comments': [],
      'content': 'Provide RPM',
      'date_created': '1462217553',
      'depends': [],
      'id': 19,
      'private': false,
      'status': 'Open',
      'tags': [
        'v0.2',
        'roadmap'
      ],
      'title': 'Provide RPM',
      'user': {
        'fullname': 'Lubom\u00edr Sedl\u00e1\u0159',
        'name': 'lsedlar'
      }
    },
    {
      'assignee': null,
      'blocks': [],
      'comments': [],
      'content': 'Include it in Fedora',
      'date_created': '1462217588',
      'depends': [
        '19'
      ],
      'id': 20,
      'private': false,
      'status': 'Open',
      'tags': [
        'roadmap'
      ],
      'title': 'Include package in Fedora',
      'user': {
        'fullname': 'Lubom\u00edr Sedl\u00e1\u0159',
        'name': 'lsedlar'
      }
    },
    {
      'assignee': null,
      'blocks': [],
      'comments': [],
      'content': 'Create README',
      'date_created': '1462217622',
      'depends': [],
      'id': 21,
      'private': false,
      'status': 'Fixed',
      'tags': [
        'v0.0',
        'roadmap'
      ],
      'title': 'Create README',
      'user': {
        'fullname': 'Lubom\u00edr Sedl\u00e1\u0159',
        'name': 'lsedlar'
      }
    },
    {
      'assignee': null,
      'blocks': [],
      'comments': [],
      'content': 'Write actual code',
      'date_created': '1462217650',
      'depends': [],
      'id': 22,
      'private': false,
      'status': 'Invalid',
      'tags': [
        'v0.0',
        'roadmap'
      ],
      'title': 'Write actual code',
      'user': {
        'fullname': 'Lubom\u00edr Sedl\u00e1\u0159',
        'name': 'lsedlar'
      }
    }
  ],
  'total_issues': 7
};

main();

function main() {
    var app = document.createElement('div');
    document.body.appendChild(app);
    React.render(<App issues={data.issues} />, app);

    // This fails due to CORS restrictions on Pagure
    // fetch('https://pagure.io/api/0/lsedlar-test-playground/issues?status=all&tags=roadmap')
    // .then(response => response.json())
    // .then(json => {
    //     var app = document.createElement('div');
    //     document.body.appendChild(app);
    //     React.render(<App issues={json.issues} />, app);
    // });
}
