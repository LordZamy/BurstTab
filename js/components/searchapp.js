var SearchApp = React.createClass({displayName: "SearchApp",
	getInitialState: function() {
		return {
			tabs: [],
			index: 0
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

		// change selected tab depending upon position
		if(this.state.index >= result.length)
			this.setState({tabs: result, index: result.length - 1});
		else if(this.state.index < 0)
			this.setState({tabs: result, index: 0});
		else
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
	handleKeyDown: function(e) {
		var index = this.state.index;
		if(e.type === 38 || e.which === 38) {			// Up
			if(index > 0) this.setState({index: index - 1});
			e.preventDefault();
		} else if(e.type === 40 || e.which === 40) { 	// Down
			if(index < this.state.tabs.length - 1) this.setState({index: index + 1});
			e.preventDefault();
		} else if(e.type === 13 || e.which === 13) {	// Enter
			switchToTab(this.state.tabs[index].id);
			e.preventDefault();
		}
	},
	render: function() {
		return(
			React.createElement("div", {onKeyDown: this.handleKeyDown}, 
				React.createElement(SearchBox, {ref: "searchBox", onChange: this.handleSearchChange}), 
				React.createElement(TabList, {tabs: this.state.tabs, removeClick: this.handleRemoveClick, index: this.state.index})
			)
		)
	}
});

React.render(React.createElement(SearchApp, null), document.getElementById('wrapper'));