var Tab = React.createClass({
	handleTabClick: function() {
		switchToTab(this.props.id);
	},
	handleRemoveClick: function(e) {
		this.props.removeClick(this);
		e.preventDefault();
	},
	render: function() {
		var favicon = 'chrome://favicon/' + this.props.url;
		return (
			<li onClick={this.handleTabClick}>
				<img src={favicon} className="left" />
				<span>{this.props.title}</span>
				<img src="/images/remove.png" className="right" onClick={this.handleRemoveClick} />
			</li>	
		)
	}
});