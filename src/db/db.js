var user = require("./user.json");
var schedule = require("./schedule.json");
var task = require("./task.json");
var taskFrequency = require("./taskFrequency.json");

module.exports = function() {
  return {
    user: user,
    schedule: schedule,
    task: task,
    "task-frequency": taskFrequency
  };
};
