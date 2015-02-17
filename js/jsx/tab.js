var Tab = React.createClass({
	shortenString: function(str) {
		// modify threshold here
		var threshold = 50;

		if(str.length > threshold)
			return str.substring(0, threshold) + '...';
		else
			return str;
	},
	handleTabClick: function() {
		switchToTab(this.props.id);
	},
	handleRemoveClick: function() {
		this.props.removeClick(this);	
		return false; 	// to prevent handleTabClick from firing
	},
	render: function() {
		var title = this.shortenString(this.props.title);
		var favicon = 'chrome://favicon/' + this.props.url;
		return (
			<li onClick={this.handleTabClick}>
				<img src={favicon} className="left" />
				<span>{title}</span>
				<img src="/images/remove.png" className="right" onClick={this.handleRemoveClick} />
			</li>	
		)
	}
});