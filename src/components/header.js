const Header = (title, date, temp) => {

  //creates elements in memory
  const newHeader = document.createElement('div');
  const newDate = document.createElement('span');
  const newTitle = document.createElement('h1');
  const newTemp = document.createElement('span');

  //adds classes to elements
  newHeader.classList.add('header');
  newDate.classList.add('date');
  newTemp.classList.add('temp');

  //creates structure for markup
  newHeader.appendChild(newDate);
  newHeader.appendChild(newTitle);
  newHeader.appendChild(newTemp);

  //adds content to elements
  newDate.textContent = date;
  newTitle.textContent = title;
  newTemp.textContent = temp;

  return newHeader;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const attachmentPoint = document.querySelector(`${selector}`);
  const newHeader1 = Header('sprint challenge', 'February 12th', '70 degrees farenheit');
  attachmentPoint.appendChild(newHeader1);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
