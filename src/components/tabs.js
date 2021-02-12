import axios from "axios";

const Tabs = (topics) => {

  //creates topics element and gives it class
  const newTopics = document.createElement('div');
  newTopics.classList.add('topics');

  //iterates over array and creates element, adds class, and inserts newly created element in topics parent element
  topics.forEach( topic => {
    const newTopic = document.createElement('div');
    newTopic.classList.add('tab');
    newTopic.textContent = topic;
    newTopics.appendChild(newTopic);
  })

  return newTopics;

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  axios.get(`https://lambda-times-api.herokuapp.com/topics`) //requests data from API
    .then( response => { //after data is received, execute next lines of code
      const attachmentPoint = document.querySelector(`${selector}`); //create attachment point
      const newestTopics = Tabs(response.data.topics); //look into receive data for array and use array as input for function
      attachmentPoint.appendChild(newestTopics); //append new topics to document
    })
  

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
