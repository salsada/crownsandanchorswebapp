///<reference path="knockout-min.js">

var CrownsAndAnchorsGame = require("./CrownsAndAnchorsGame");

class ViewModel {
    constructor(age) {
        this.age = ko.observable(age);

        this.CrownsAndAnchorsGame = new CrownsAndAnchorsGame();

        this.message = ko.pureComputed(function () {
            return `You are ${this.age()} years old`;
        }, this);
    }
};

ko.applyBindings(new ViewModel("47")); 