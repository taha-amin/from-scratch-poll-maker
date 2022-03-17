import { renderPoll } from './render-utils.js';

// import functions and grab DOM elements
const optionAAddButton = document.getElementById('option-a-add');
const optionAUndoButton = document.getElementById('option-a-undo');
const optionBAddButton = document.getElementById('option-b-add');
const optionBUndoButton = document.getElementById('option-b-undo');

const form = document.querySelector('form');

const submitPollButton = document.getElementById('submit-poll');
const questionEl = document.getElementById('poll-question');
const optionATitleEl = document.getElementById('option-a-title');
const optionAVotesEl = document.getElementById('option-a-votes');
const optionBTitleEl = document.getElementById('option-b-title');
const optionBVotesEl = document.getElementById('option-b-votes');

const pastPollsEl = document.getElementById('past-polls');

// let state
let question = '';
let optionAVotes = 0;
let optionBVotes = 0;
let optionATitle = '';
let optionBTitle = '';

const pastPolls = [];

optionAAddButton.addEventListener('click', () => {
  //increment option A votes
    optionAVotes++;


    optionAVotesEl.textContent = optionAVotes;
});

optionBAddButton.addEventListener('click', () => {
  //increment option B votes
    optionBVotes++;

    optionBVotesEl.textContent = optionBVotes;
});

optionAUndoButton.addEventListener('click', () => {
  //decrement option A votes
    optionAVotes--;

    optionAVotesEl.textContent = optionAVotes;
});

optionBUndoButton.addEventListener('click', () => {
  //decrement option B votes
    optionBVotes--;

    optionBVotesEl.textContent = optionBVotes;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    question = data.get('user-question');
    optionATitle = data.get('user-option-a');
    optionBTitle = data.get('user-option-b');

    displayCurrentPoll();
});

submitPollButton.addEventListener('click', () => {
    form.reset();

    const poll = makePoll();

    pastPolls.push(poll);

    resetValues();

    displayCurrentPoll();

    displayAllPolls();
});

function makePoll() {
    return {
        question: question,
        optionATitle: optionATitle,
        optionBTitle: optionBTitle,
        optionAVotes: optionAVotes,
        optionBVotes: optionBVotes,
    };
  
}

//This function will reset values to call later in other functions if needed
function resetValues() {
    question = '';
    optionATitle = '';
    optionBTitle = '';
    optionAVotes = 0;
    optionBVotes = 0;
}

//function will display current state of current poll
function displayCurrentPoll() {
    questionEl.textContent = question;

    optionATitleEl.textContent = optionATitle;
    optionBTitleEl.textContent = optionBTitle;

    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;
}

//Function will clear out DOM and append to poll div using current state of past polls
function displayAllPolls() {
    pastPollsEl.textContent = '';

    for (let pastPoll of pastPolls) {
        const container = renderPoll(pastPoll);

        pastPollsEl.append(container);
    }
}