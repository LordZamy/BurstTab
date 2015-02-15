var TabList = React.createClass({
	handleRemoveClick: function(tabComponent) {
		this.props.removeClick(tabComponent);
	},
	render: function() {
		var createItem = function(tab, index) {
			return <Tab title={tab.title} key={tab.id} id={tab.id} url={tab.url} removeClick={this.handleRemoveClick} index={index} />
		}.bind(this);
		return (
			<ul className="tabList">
				{this.props.tabs.map(createItem)}
			</ul>
		)
	}
}); 