var Tab = React.createClass({displayName: "Tab",
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
			React.createElement("li", {onClick: this.handleTabClick, className: classString}, 
				React.createElement("img", {src: favicon, className: "left"}), 
				React.createElement("span", null, this.props.title), 
				React.createElement("img", {src: "/images/remove.png", className: "right", onClick: this.handleRemoveClick})
			)	
		)
	}
});