
// jQuery handler that runs the encapsulated code when the page is ready.
$(function() {
    // In this code, jQuery is used to 'download' the data from our server
    // We then dynamically display this content in our table. This is very similar to the group projects you just completed.
  
    const render = function () {
  
      // Empty our output divs
      $('#itemList').empty();
      
      // Run Queries!
      // ==========================================
      runItemQuery();
    }
  
    const renderListItems = function (outputElement, dataList) {
      
    let monthConvert = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
    // Loop through and display each of the customers
      for (let i = 0; i < dataList.length; i++) {
  
        

        //CHECK "date(number) month year"
        let year = dataList[i].date.split('-', 0);
        let month = dataList[i].date.split('-', 1);
        month = monthConvert[month];
        let day = "date" + dataList[i].date.split('-', 2);

        if ( year === $("year") && month === $("month")) {
          let output = `date${day}`//add to this if it exists

          if ($(output) && $(output) !== null && $(output) !== undefined) {
          // Then display the input feild (list item) in the HTML
          // Adds an id for editing and deleting
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

          listItem.append(
            $(`<button>`).on('click', function() {
                 sendItemUpdates( dataList[i].item , 'items');
            })
           );

           listItem.append(
            $(`<button>`).on('click', function() {
                deleteSelected( dataList[i].item , 'items');
            })
           );
          
          output.append(listItem);
        }
        }
    }
    }
  
    function sendItemUpdates(entry, route) {
      console.log('udating', entry);
      console.log(entry + " " + route);
      // Here we grab the form elements
      var flipCheck;
      console.log(entry.checked);
      if (entry.checked === 'true'){
        flipCheck = 'false';
      } else {
        flipCheck = 'true';
      }
      console.log(entry);
      alert("now");
      const itemShift = {
        item: entry,
        checked: flipCheck
      };

        for (let i; i < 0; i++){
        console.log(dataList[i]);
        }
      
      
      // Grab the index from the end of the entry
      const index = entry.split('-')[1];
      console.log(index);
      // Make the PUT request
      $.ajax(
        {
          url: `/api/${route}/${index}`,
          method: 'PUT' ,
          data: itemShift 
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
        .then(function(todoItems) {
          renderListItems('#calendarGrid', todoItems);
        });
    }
  
    // This function resets all of the data in our tables. This is intended to let you restart a demo.
    const clearItems = function () {
      alert('Clearing...');
  
      // Clear the tables on the server and then empty the elements on the client
      $.ajax({ url: '/api/clear', method: 'POST' }).then(function() {
        $('#itemList').empty();
      });
    }
  
    // Render our data to the page
    render();
  });
  