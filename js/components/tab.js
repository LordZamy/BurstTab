var Tab = React.createClass({displayName: "Tab",
	handleTabClick: function() {
		switchToTab(this.props.id);
	},
	handleRemoveClick: function() {
		this.props.removeClick(this);	
		return false; 	// to prevent handleTabClick from firing
	},
	render: function() {
		var favicon = 'chrome://favicon/' + this.props.url;
		return (
			React.createElement("li", {onClick: this.handleTabClick}, 
				React.createElement("img", {src: favicon, className: "left"}), 
				React.createElement("span", null, this.props.title), 
				React.createElement("img", {src: "/images/remove.png", className: "right", onClick: this.handleRemoveClick})
			)	
		)
	}
});