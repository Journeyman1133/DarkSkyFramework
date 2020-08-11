$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 2,
  "name": "HomePage Feature",
  "description": "",
  "id": "homepage-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 22758651100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on DarkSky HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSD.verifyTitle()"
});
formatter.result({
  "duration": 1002021900,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify min and max temperatures",
  "description": "",
  "id": "homepage-feature;verify-min-and-max-temperatures",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@home"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click today button on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I get temperatures on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I get min temperature on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I get max temperature on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify min temperature on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I verify max temperature on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSD.clickToday()"
});
formatter.result({
  "duration": 787268500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSD.getTemperature()"
});
formatter.result({
  "duration": 1622449500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSD.getMinTemp()"
});
formatter.result({
  "duration": 212800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSD.getMaxTemp()"
});
formatter.result({
  "duration": 164900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSD.verifyMinTemp()"
});
formatter.result({
  "duration": 108918500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSD.verifyMaxTemp()"
});
formatter.result({
  "duration": 190166200,
  "status": "passed"
});
formatter.after({
  "duration": 2217494100,
  "status": "passed"
});
});