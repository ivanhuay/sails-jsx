/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/*Module Dependencies*/
var React = require('react'),
	ReactDOMserver = require('react-dom/server');
module.exports = {
	index:function(req,res,next){
		var AppTest = require('../../api/jsx/AppTest'),
			reactHTML = ReactDOMserver.renderToString(<AppTest/>);

		res.view({reactHTML:reactHTML});
	}
};

