// jQuery Doc Ready
$(function () {
  // Setting up click event on first button
  $("#buttonOne").click(function (){
    // Declaring variables for this function
    const numSet = [5, 10, 15];
    let sum = 0;
    // Collecting input entered by user
    const num = parseInt($("#inputOne").val());
    // Setting up reduce function; combines all number in the array into one
    let sum2 = numSet.reduce(function(sum, value){
      return sum + value;
    });
    // Adding the user's number to the total from the reduce function
    sum2 = sum2 + num;
      // Displaying the final total on the web page
      document.getElementById('answerOne').innerHTML = (sum2);
  });
});


// jQuery Doc Ready
$(function () {
  // Setting up click event on second button
  $("#buttonTwo").click(function (){
    // Declaring variable for this function
    const numSet = [5, 10, 15];
    // Collecting input entered by user
    const num = parseInt($("#inputTwo").val());
    // Setting up map function; adds user's number to every number in the array
    let result = numSet.map(function(value){
      return (value + num);
    });
    // Displaying the new array on the web page
      document.getElementById('answerTwo').innerHTML = (result);
  });
});


// jQuery Doc Ready
$(function () {
  // Setting up click event on third button
  $("#buttonThree").click(function (){
    // Declaring variable for this function
    const numSet = [5, 10, 15];
    // Collecting input entered by user
    const num = parseInt($("#inputThree").val());
    // Using includes method to search array for user's number; answer is displayed on page
    document.getElementById('answerThree').innerHTML = (numSet.includes(num));
  });
});


// jQuery Doc Ready
$(function () {
  // Setting up click event on third button
  $("#buttonFour").click(function (){
    // Declaring variable for this function
    const numSet = [5, 20, 35, 50, 65, 80, 95, 150, 200, 300, 400, 500];
    // Collecting input entered by user
    const num = parseInt($("#inputFour").val());
    // Setting up find function
    let result = numSet.find(function(value){
      return (value > num);
    });
      // Displays the next greatest number from user's entry, if any, on web page
      document.getElementById('answerFour').innerHTML = (result);
  });
});
