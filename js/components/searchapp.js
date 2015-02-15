var SearchApp = React.createClass({displayName: "SearchApp",
	getInitialState: function() {
		return {
			tabs: [] 
		}
	},
	componentDidMount: function() {
		getAllTabs(function(tabs) {
			this.setState({tabs: tabs}, function() {
				allTabs = tabs;
			});
		}.bind(this));
	},
	handleSearchChange: function(searchComponent) {
		var searchValue = searchComponent.getDOMNode().value;
		var f = new Fuse(allTabs, fuseOptions);
		if(searchValue === '' || searchValue === null) {
			this.setState({tabs: allTabs});
			return;
		}
		var result = f.search(searchValue);
		this.setState({tabs: result});
	},
	handleRemoveClick: function(tabComponent) {
		// close chosen tab first
		closeTab(tabComponent.props.id);

		// get index of tab in allTabs array and remove it
		var index = findInTabArray(tabComponent.props.id);
		allTabs.splice(index, 1);

		// update state
		this.handleSearchChange(this.refs.searchBox);
	},
	render: function() {
		return(
			React.createElement("div", null, 
				React.createElement(SearchBox, {ref: "searchBox", onChange: this.handleSearchChange}), 
				React.createElement(TabList, {tabs: this.state.tabs, removeClick: this.handleRemoveClick})
			)
		)
	}
});

React.render(React.createElement(SearchApp, null), document.getElementById('wrapper'));