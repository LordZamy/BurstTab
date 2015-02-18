var SearchBox = React.createClass({displayName: "SearchBox",
	componentDidMount: function() {

	},
	handleSearchChange: function() {
		// call parent -- SearchApp.handleSearchChange()
		this.props.onChange(this);
	},
	render: function() {
		return (
			React.createElement("input", {onChange: this.handleSearchChange, id: "searchBox", autoFocus: true, placeholder: "Search Tabs"})
		)
	}
});
