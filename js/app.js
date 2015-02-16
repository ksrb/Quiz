"use strict";

var app = angular.module('app', []);

app.controller('QuizController', [function () {
    var answer = new Answer("A interface is a construct that specifies the API available to consumers");
    this.question = new Question(
        new Problem("What is a interface?"),
        //Answers
        [
            answer,
            new Answer("Two"),
            new Answer("Three"),
            new Answer("Four")
        ],
        //Answer
        answer
    );
}]);

function Question(problem, answers, answer) {
    if (problem && problem instanceof Problem) {
        this.problem = problem;
    }
    if (answers && answers instanceof Answer) {
        this.answers = answers;
    }
    if (answer && answer instanceof Answer) {
        this.answer = answer;
    }
}

function Problem(text) {
    this.text = text;
}

function Answer(text) {
    this.text = text;
}