var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'FullStack Vietnam', per: 
//   true });
// });

router.get('/', function (req, res, next) {
	var obj;
	fs.readFile('./db/tamnguyen.json', 'utf8', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		console.log(obj)
		res.render('tamnguyen', { datashop: obj });
		// 	title: 'Users List',
		// 	data: obj.lists
		//});
	});
});


module.exports = router;
