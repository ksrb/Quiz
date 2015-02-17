"use strict";

var app = angular.module('app', []);

app.controller('QuizController', ['QuizFactory', function (QuizFactory) {
    this.questions = QuizFactory.getQuestions();

    this.checkAnswers = function () {
        for (var i = 0; i < this.questions.length; i++) {
            var question = this.questions[i];
            if (question.correctAnswer.equals(question.selectedAnswer)) {
                question.setCorrect(true);
            } else {
                question.setCorrect(false);
            }
        }
    }.bind(this);
}]);

app.factory('QuizFactory', function () {
    var questions = [];
    questions.push(new Question(
        new Problem("What is a interface?"),
        //Wrong answers
        [
            new Answer("A subclass of the class Interface"),
            new Answer("A IDE tool that allows for quick refactoring"),
            new Answer("A method that is private to the class")
        ],
        //Correct answer
        new Answer("A construct that specifies the API available to consumers")
    ));

    var getQuestions = function () {
        return questions;
    };

    return {
        getQuestions: getQuestions
    };
});

function Question(problem, answers, correctAnswer) {
    this.problem = problem;
    this.answers = answers;
    this.answers.push(correctAnswer);
    this.correctAnswer = correctAnswer;
    this.selectedAnswer = null;
    this.isCorrect = false;
}

Question.prototype.setCorrect = function (bool) {
    this.isCorrect = bool;
}

function Problem(text) {
    this.text = text;
}

function Answer(text) {
    this.text = text;
}
Answer.prototype.equals = function (other) {
    if (!this instanceof Answer) {
        return false;
    }
    if (this.text !== other.text) {
        return false;
    }
    return true;
}