var React = require('react');
var ListItem = require('./list-item');
var ListFooter = require('./listFooter')

module.exports = React.createClass({
 
    render: function() {
		var headList = this.props.items.map(function(item){
		  return <ListItem item={item} />
		});
		var footerList = this.props.itemsFooter.map(function(itemFooter){
			return <ListFooter itemFooter={itemFooter} />
		});

		return <div>
		  <ul>{headList}</ul>
		  <ul>{footerList}</ul>
		</div>
  	}
});
