var Tab = React.createClass({
	handleTabClick: function() {
		switchToTab(this.props.id);
	},
	handleRemoveClick: function(e) {
		this.props.removeClick(this);
		e.preventDefault();
	},
	componentDidUpdate: function() {
		// scroll to selected li after updating state
		// TODO: fix bad code
		if(this.props.isSelected) {
			if(this.getDOMNode().getBoundingClientRect().top + this.getDOMNode().offsetHeight - document.body.getBoundingClientRect().top > document.body.scrollTop + window.innerHeight)
				document.body.scrollTop = this.getDOMNode().getBoundingClientRect().top + this.getDOMNode().offsetHeight - document.body.getBoundingClientRect().top - window.innerHeight;
			else if(this.getDOMNode().getBoundingClientRect().top - document.body.getBoundingClientRect().top < document.body.scrollTop)
				document.body.scrollTop = this.getDOMNode().getBoundingClientRect().top - document.body.getBoundingClientRect().top;
		}
	},
	render: function() {
		var favicon = 'chrome://favicon/' + this.props.url;

		var classString = '';
		if(this.props.isSelected) classString += 'selected';
		
		return (
			<li onClick={this.handleTabClick} className={classString}>
				<img src={favicon} className="left" />
				<span>{this.props.title}</span>
				<img src="/images/remove.png" className="right" onClick={this.handleRemoveClick} />
			</li>	
		)
	}
});