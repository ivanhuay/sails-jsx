/*Module Dependencies*/
var React = require('react');

var AppTest = React.createClass({
	render:function(){
		return(
			<div>
				<p>Prueba react, este texto esta cargado desde jsx del lado del servidor</p>
				<p>Es un ejemplo simple pero sirve para pre renderizar y facilitar el seo para las aplicaciones hechas en react-js</p>
			</div>

			)
	}
});
module.exports = AppTest;