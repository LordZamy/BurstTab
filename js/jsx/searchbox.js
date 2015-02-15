var SearchBox = React.createClass({
	componentDidMount: function() {

	},
	handleSearchChange: function() {
		// call parent -- SearchApp.handleSearchChange()
		this.props.onChange(this);
	},
	render: function() {
		return (
			<input onChange={this.handleSearchChange} id="searchBox" autoFocus />
		)
	}
});