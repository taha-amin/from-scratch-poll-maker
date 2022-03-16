// import functions and grab DOM elements
const optionAAddButton = document.getElementById('option-a-add');
const optionAUndoButton = document.getElementById('option-a-undo');
const optionBAddButton = document.getElementById('option-b-add');
const optionBUndoButton = document.getElementById('option-b-undo');

const submitPollButton = document.getElementById('submit-poll');
const questionEl = document.getElementById('poll-question');
const optionATitleEl = document.getElementById('option-a-title');
const optionAVotesEl = document.getElementById('option-a-votes');
const optionBTitleEl = document.getElementById('option-b-title');
const optionBVotesEl = document.getElementById('option-b-votes');

const pastPollsEl = document.getElementById('past-polls');


// let state
let quetion = '';
let optionAVotes = 0;
let optionBVotes = 0;
let optionATitle = '';
let optionBTitle = '';

const pastPolls = [];

optionAAddButton.addEventListener('click', () => {
  //increment option A votes
    optionAVotes++;

  //call some func
});

optionBAddButton.addEventListener('click', () => {
  //increment option B votes
    optionBVotes++;

  //call some func
});

optionAUndoButton.addEventListener('click', () => {
  //decrement option A votes
    optionAVotes--;

  //call some func
});

optionBUndoButton.addEventListener('click', () => {
  //decrement option B votes
    optionBVotes--;

  //call some func
});

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
