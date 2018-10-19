
// jQuery handler that runs the encapsulated code when the page is ready.
$(function() {
    // In this code, jQuery is used to 'download' the data from our server
    // We then dynamically display this content in our table. This is very similar to the group projects you just completed.
    
    const render = function () {
      
      // Empty our output divs
      $('#calendarGrid').empty();
      
      // Run Queries!
      // ==========================================
      runItemQuery();
    }
  
    const renderListItems = function (outputElement, dataList) {
      
      console.log(month);
        console.log(year);
        console.log(day);

      let monthConvert = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
    // Loop through and display each of the customers
      for (let i = 0; i < dataList.length; i++) {
        

        //CHECK "date(number) month year"
        let year = dataList[i].date.split('-', 1)[0];
        let month = parseInt(dataList[i].date.split('-', 1)[1]);
        month = monthConvert[month];
        let day = "date" + dataList[i].date.split('-', 1)[2];
        
        console.log(month);
        console.log(year);
        console.log(day);

        if ( year === $("year").text() && month === $("month").text()) {
          let output = `date${day}`//add to this if it exists
          console.log("its passed");
          if ($(output) && $(output) !== null && $(output) !== undefined) {
            console.log("its extra passed");
          // Then display the input feild (list item) in the HTML
          // Adds an id for editing and deleting
          const listItem =
            $('<p>')
              .attr('class', 'event');
        
            //appends name
          listItem.append(
            $('<p>').text(dataList[i].name + " " + dataList[i].description + " " + dataList.time)
          );
          
          listItem.append(
            $(`<button>`).on('click', function() {
                 sendItemUpdates( dataList[i].Event , dataList[i].date);
            })
           );

           listItem.append(
            $(`<button>`).on('click', function() {
                deleteSelected( dataList[i].Event , dataList[i].date);
            })
           );
          
          outputElement.append(listItem);
        }
      }
     }
    }
  
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
      
      
      // Make the PUT request
      $.ajax(
        {
          url: `/api/events/${route}`,
          method: 'PUT' ,
          data: eventShift 
        })
        .then(function(data) {
          
          // If our PUT request was successfully processed, proceed on
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
      // Make the PUT request
      $.ajax({url: `/api/${route}/${index}`, method: 'DELETE'})
        .then(function(data) {
  
          // If our DELETE request was successfully processed, proceed on
          if (data.success) {
            render();
          } else {
  
            alert('There was a problem with your submission. Please check your entry and try again.');
          }
          
  
        });
    }
  
    const runItemQuery = function () {
      // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
      $.ajax({ url: '/api/events', method: 'GET' })
        .then(function(data) {
          renderListItems('#calendarGrid', data);
        });
    }
  
    // This function resets all of the data in our tables. This is intended to let you restart a demo.
    const clearItems = function () {
      alert('Clearing...');
  
      // Clear the tables on the server and then empty the elements on the client
      $.ajax({ url: '/api/clear', method: 'POST' }).then(function() {
        $('#calendarGrid').empty();
      });
    }
  
    // Render our data to the page
    render();
  });
  