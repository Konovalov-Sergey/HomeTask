var React = require('react');
var Total = require('./total');

var options = {
  items: [ 
    'Docs',
    'Tutorial',
    'Community',
	'blogs'
  ],
	itemsFooter: [
	'Docs',
	'Community',
	'Resourses',
	'More'
	],
	thumbnailData: [
		{
    	  title: 'Show Courses',
    	  number: 12,
    	  header: 'Learn React',
    	  description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
    	  imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
    	},
		{
    	  title: 'Show Courses',
    	  number: 25,
    	  header: 'Learn Gulp',
    	  description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
    	  imageUrl: 'http://brunch.io/images/others/gulp.png'
    	},
		{
    	  title: 'Show Javascript',
    	  number: 200,
    	  header: 'Learn JS',
    	  description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
    	  imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
    	},
    	{
    	  title: 'Show CSS',
    	  number: 20,
    	  header: 'Learn CSS',
    	  description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
    	  imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
    	}
    ]
};

var element = React.createElement(Total, options);
React.render(element, document.querySelector('.container'));
