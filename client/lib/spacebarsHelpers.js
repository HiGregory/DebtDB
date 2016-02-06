
Template.registerHelper("debug", function (optionalValue) {
  if (typeof console !== "undefined" || typeof console.log !== "undefined") {
    console.log("Current Context");
    console.log("====================");
    console.log(this);
    if (optionalValue) {
      console.log("Value");
      console.log("====================");
      console.log(optionalValue);
    }
    return "";
  }
  alert(this);
  if (optionalValue) {
    alert(optionalValue);
  }
  return "";
});
Template.registerHelper("constant", function (what) {
  return Meteor.App[what.toUpperCase()];
});

Template.registerHelper("formatMoney", function(amount) {
    if (!amount) amount = 0;
    return accounting.formatMoney(amount);
});
Template.registerHelper("calendar", function(date) {
  if (date) {
    return moment(date).calendar();
  }
});
Template.registerHelper("fromNow", function(date) {
  if (date) {
    return moment(date).fromNow();
  }
});
Template.registerHelper("colorByNumber", function(number) {
  var color = "";
  if (number > 0.0) {
    color = "green";
  } else if (number < 0.0) {
    color = "red";
  }
  return color;
});

Template.registerHelper("sessionEq", function(key, value, out) {
  var returnVal = "";
  if (Session.equals(key, value)) {
    returnVal = _.isObject(out) ? "active" : out;
  }
  return returnVal;
});
Template.registerHelper("routeEq", function(param, value, out) {
  var returnVal = "";
  if (Router.current().params[param] == value) {
    returnVal = _.isObject(out) ? "active" : out;
  }
  return returnVal;
});
