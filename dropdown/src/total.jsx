var React = require('react');
var ListHeader = require('./listHeader');
var ListFooter = require('./listFooter');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
 
    render: function() {
		var headList = this.props.items.map(function(item){
		  return <ListHeader item={item} />
		});
		var footerList = this.props.itemsFooter.map(function(itemFooter){
			return <ListFooter itemFooter={itemFooter} />
		});
		var list = this.props.thumbnailData.map(function(item,key) {
			return <Thumbnail key={key} {...item} />
		});

		return <div>
		  <ul>{headList}</ul>
		  <div>{list}</div>
		  <ul>{footerList}</ul>
		</div>
  	}
});
