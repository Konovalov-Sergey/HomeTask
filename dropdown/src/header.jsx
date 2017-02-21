var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
 
    render: function() {
		var headList = this.props.items.map(function(item){
		  return <ListItem item={item} />
	});

		return <div>
		  <ul>
			{headList}
		  </ul>
		</div>
  	}
});
