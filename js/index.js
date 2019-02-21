var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Input = React.createClass({ displayName: "Input",
	render: function render() {
		return (
			React.createElement("div", { className: "Input" },
				React.createElement("input", { id: this.props.name, autocomplete: "false", required: true, type: this.props.type, placeholder: this.props.placeholder }),
				React.createElement("label", { "for": this.props.name })));


	} });


var Modal = React.createClass({ displayName: "Modal",
	render: function render() {
		return (
			React.createElement("div", { className: "Modal" },
				React.createElement("form", { onSubmit: this.props.onSubmit, className: "ModalForm" },

					React.createElement("img", { id: "logo", src: "https://iv.pl/images/83573343393626068024.png" }),
					React.createElement("h3", null, "LANO"),
					React.createElement(Input, { id: "name", type: "text", placeholder: "Imi\u0119" }),
					React.createElement(Input, { id: "username", type: "email", placeholder: "Email" }),
					React.createElement(Input, { id: "password", type: "password", placeholder: "Has\u0142o" }),
					React.createElement("button", { id: "forgotpass" }, "Nie pami\u0119tasz has\u0142a?"),
					React.createElement("button", { id: "login" }, "Zaloguj ", React.createElement("i", { className: "fa fa-fw fa-chevron-right" })),
					React.createElement("h1", null, "Nie masz konta?"),
					React.createElement("button", { id: "register" }, "Zarejestruj"))));



	} });


var App = React.createClass({ displayName: "App",

	getInitialState: function getInitialState() {
		return { mounted: false };
	},

	componentDidMount: function componentDidMount() {
		this.setState({ mounted: true });
	},

	handleSubmit: function handleSubmit(e) {
		this.setState({ mounted: false });
		e.preventDefault();
	},

	render: function render() {

		var child;
		if (this.state.mounted) {
			child = React.createElement(Modal, { onSubmit: this.handleSubmit });
		}

		return (
			React.createElement("div", { className: "App" },
				React.createElement(ReactCSSTransitionGroup, { transitionName: "example", transitionEnterTimeout: 500, transitionLeaveTimeout: 300 },
					child)));



	} });


ReactDOM.render(
React.createElement(App, null),
document.getElementById('app'));