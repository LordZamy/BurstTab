var Tab = React.createClass({displayName: "Tab",
	handleTabClick: function() {
		switchToTab(this.props.id, this.props.windowId);
	},
	handleRemoveClick: function(e) {
		this.props.removeClick(this);
		e.preventDefault();
	},
	componentDidUpdate: function() {
		// scroll to selected li after updating state
		// this code works but don't know why
		if(this.props.isSelected) {
			var thisBoundingRectTop = this.getDOMNode().getBoundingClientRect().top;
			var thisOffsetHeight = this.getDOMNode().offsetHeight + parseFloat(window.getComputedStyle(this.getDOMNode(), null).getPropertyValue('padding'));
			var documentBoundingRectTop = document.body.getBoundingClientRect().top;

			if(thisBoundingRectTop + thisOffsetHeight - documentBoundingRectTop > document.body.scrollTop + window.innerHeight)
				document.body.scrollTop = thisBoundingRectTop + thisOffsetHeight - documentBoundingRectTop - window.innerHeight;
			else if(this.props.index === 0)
				document.body.scrollTop = 0;
			else if(thisBoundingRectTop - documentBoundingRectTop < document.body.scrollTop)
				document.body.scrollTop = thisBoundingRectTop - documentBoundingRectTop;
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