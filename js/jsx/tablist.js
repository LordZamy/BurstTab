var TabList = React.createClass({
	handleRemoveClick: function(tabComponent) {
		this.props.removeClick(tabComponent.props.id);
	},
	render: function() {
		var createItem = function(tab, index) {
			var selected = false;
			if(index === this.props.index) selected = true;
			return <Tab title={tab.title} key={tab.id} id={tab.id} url={tab.url} removeClick={this.handleRemoveClick} isSelected={selected} index={index} />
		}.bind(this);
		return (
			<ul className="tabList">
				{this.props.tabs.map(createItem)}
			</ul>
		)
	}
}); 