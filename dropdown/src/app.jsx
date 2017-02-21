var React = require('react');
var Total = require('./total');

var options = {
  items: [ 
    'Docs',
    'Tutorial',
    'Community',
	 'blogs'
  ]
};

var element = React.createElement(Total, options);
React.render(element, document.querySelector('.container'));
