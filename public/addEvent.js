//
function openForm() {
  document.getElementById("AddEventForm").style.display = "block";
}
function closeForm() {
  document.getElementById("AddEventForm").style.display = "none";
}
const saveEvent = function (e) {
  e.preventDefault();
  const eventName = $('#event-name').val();
  const eventDesc = $('#event-desc').val();
  const eventDate = $('#event-date').val();
  const eventTime = $('#event-time').val();

  const data = {
    title: eventName,
    description: eventDesc,
    date: eventDate,
    time: eventTime
  }
  $.post('api/events', data).then(function (data) {});
}

$('#save-event').on('click', saveEvent);