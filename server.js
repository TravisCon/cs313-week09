var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000))

app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/order_details', handleSubmit);

app.listen(app.get('port'), function(){
  console.log("Server is running on port: " + app.get('port'));
});

function handleSubmit(request, response){
  console.log(request.query.type);
  console.log(request.query.weight);
  var type = request.query.type;
  var weight = request.query.weight;
  var price = getPrice(type, weight);
  console.log("Price: " + price);

  var params = {type : type,
                weight : weight,
                price : price};
  response.render("pages/results", params);
}

function getPrice(type, weight) {
  switch(type) {
    case "Stamped Letter":{
      if (weight < 3.5)
        return 0.49 + (weight - 1) * 0.21;
      else
        return 1.12;
    }
    case "Metered Letter": {
      if (weight < 3.5)
        return 0.46 + (weight - 1) * 0.21;
      else
        return 1.09;
    }
    case "Large Envelope":
      var temp = (weight - 1) * 0.21;
      return 0.98 + temp;
    case "Parcel": 
      if (weight < 5)
        return 2.67;
      else
        return 2.67 + (weight - 4) * 0.18;
    default:
      return 0.0;
  }
}