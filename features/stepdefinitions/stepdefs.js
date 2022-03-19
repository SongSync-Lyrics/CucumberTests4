const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const exp = require("constants");


// Feature 1
Given("I am {string}", function(expectedAnswer){
  if(expectedAnswer == "the owner"){
    this.userType = "owner";
  }else{
    this.userType = "not the app owner";
  }
});

When("I want to check for which songs were played", function(){
  if(this.userType == "owner"){
    this.actualAnswer = "can";
  }else{
    this.actualAnswer = "can't";
  }
});

Then("I {} get a list of songs", function(expectedAnswer){
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});


// Feature 2
Given("I am a user of SongSync", function(){
  this.userType = "user";
});

When("I navigate through the website", function(){
  this.actualAnswer = "large";
});

Then("the buttons and icons should be {}", function(expectedAnswer){
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});


// Feature 3
Given("I am a {string}", function(expectedAnswer){
    if(expectedAnswer == "leader"){
      this.userType = "leader";
    }else{
      this.userType = "follower";
    }
  }
);

When("I want to play another song", function(){
  if(this.userType == "leader"){
    this.actualAnswer = "upload";
  }else{
    this.actualAnswer = "play";
  }
})

Then("I can {} another song without rejoining the session", function(expectedAnswer){
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});


// Feature 4
Given("Im a {}", function(expectedAnswer){
  if(expectedAnswer == "follower"){
    this.userType = "follower";
  }else{
    this.userType = "leader";
  }
});

When("I want to leave a session", function(){
  if(this.userType == "follower"){
    this.actualAnswer = "leave";
  }else{
    this.actualAnswer = "end";
  }
});

Then("I can press a button and {} the session", function(expectedAnswer){
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});


// Feature 5
Given("it is {} outside", function(expectedAnswer){
  if(expectedAnswer == "dark"){
    this.time = expectedAnswer;
  }else{
    this.time = expectedAnswer;
  }
});

When("I want to use the app", function(){
  if(this.time == "dark"){
    this.actualAnswer = "dark";
  }else{
    this.actualAnswer = "light";
  }
});

Then("I can change the app to {} mode", function(expectedAnswer){
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});