$(function() {
  const render = function () {

    // Empty our output divs
    $('#calendarGrid').empty();
    
    // Run Queries!
    // ==========================================
    runItemQuery();
  }

  //adds html tags containing the specific event data
  const renderListItems = function (outputElement, dataList) {
    
  let monthConvert = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      
  // Loop through each event that can be displayed
    for (let i = 0; i < dataList.length; i++) {

      

      //CHECK "date(number) month year"
      let year = dataList[i].date.split('-', 0);
      let month = dataList[i].date.split('-', 1);
      month = monthConvert[month];
      let day = "date" + dataList[i].date.split('-', 2);

      if ( year === $("year") && month === $("month")) {
        let output = `date${day}`//add to this if it exists

        if ($(output) && $(output) !== null && $(output) !== undefined) {

        //creates div for the event
        const listItem = 
          $('<p>')
            .attr('class', 'event');
      
          //appends name
        listItem.append(
          $('<p>').text(dataList[i].name)
        );
          
        //appends description
        listItem.append(
          $('<p>').text(dataList[i].description)
        );

        //appends time
        listItem.append(
          $('<p>').text(dataList[i].time)
        );

        //adds update button
        listItem.append(
          $(`<button>`).on('click', function() {
               sendItemUpdates( dataList[i].item , 'items');
          })
         );
        
         //adds delete button
         listItem.append(
          $(`<button>`).on('click', function() {
              deleteSelected( dataList[i].item , 'items');
          })
         );
        
        outputElement.append(listItem);
      }
      }
  }
  }

  //updates the item with any number of new parameters
  function sendItemUpdates(entry, route) {
    console.log('udating', entry);
    console.log(entry + " " + route);
    // Here we grab the form elements
    const eventShift = {
      name: prompt("new event name"),
      description: prompt("new description"),
      date: prompt("new date"),
      time: prompt("new time")
    };

      for (let i; i < 0; i++){
      console.log(dataList[i]);
      }
    
    
    // Grab the index from the end of the entry
    const index = entry.split('-')[1];
    console.log(index);
    
    $.ajax(
      {
        url: `/api/${route}/${index}`,
        method: 'PUT' ,
        data: eventShift 
      })
      .then(function(data) {
        
        if (data.success) {
          render();
        } else {

          alert('There was a problem with your submission. Please check your entry and try again.');
        }
        
        console.log("test");
      });
      
  }

  const deleteSelected = function ( entry , route ) {

    // Grab the index from the end of the entry
    const index = entry.split('-')[1];
    
    $.ajax({url: `/api/${route}/${index}`, method: 'DELETE'})
      .then(function(data) {

        if (data.success) {
          render();
        } else {

          alert('There was a problem with your submission. Please check your entry and try again.');
        }
        

      });
  }

  const runItemQuery = function () {

    $.ajax({ url: '/api/events', method: 'GET' })
      .then(function(todoItems) {
        renderListItems('#calendarGrid', todoItems);
      });
  }
  
  // Render our data to the page
  render();
});