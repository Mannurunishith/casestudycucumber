$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:cucumber/cucum2.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I Enter the user id \"\u003cname\u003e\" in the feild",
  "keyword": "Given "
});
formatter.step({
  "name": "password in password \"\u003cvalue\u003e\" in password field",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "value"
      ]
    },
    {
      "cells": [
        "sam",
        "51234"
      ]
    },
    {
      "cells": [
        "ram",
        "76543"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I Enter the user id \"sam\" in the feild",
  "keyword": "Given "
});
formatter.match({
  "location": "logindetails.I_Enter_the_user_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password in password \"51234\" in password field",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I Enter the user id \"ram\" in the feild",
  "keyword": "Given "
});
formatter.match({
  "location": "logindetails.I_Enter_the_user_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password in password \"76543\" in password field",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("classpath:cucumber/cucumber.feature");
formatter.feature({
  "name": "This is login Test",
  "description": "  This scenario is for login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I Enter the user id \"\u003cname\u003e\" in the feild",
  "keyword": "Given "
});
formatter.step({
  "name": "password in password \"\u003cvalue\u003e\" in password field",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "value"
      ]
    },
    {
      "cells": [
        "sam",
        "51234"
      ]
    },
    {
      "cells": [
        "ram",
        "76543"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I Enter the user id \"sam\" in the feild",
  "keyword": "Given "
});
formatter.match({
  "location": "logindetails.I_Enter_the_user_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password in password \"51234\" in password field",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I Enter the user id \"ram\" in the feild",
  "keyword": "Given "
});
formatter.match({
  "location": "logindetails.I_Enter_the_user_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "password in password \"76543\" in password field",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});