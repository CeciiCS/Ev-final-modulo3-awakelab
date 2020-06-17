$(document).ready(function() {
  $("#calendar").fullCalendar({
    buttonText: {
        prev: "Anterior",
        next: "Siguiente",
        today: "Hoy",
        month: "Mes",
        week: "Semana",
        day: "Día",
    },

    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay"
    },

    defaultView: "month",
    navLinks: true, 
    selectable: true,
    selectHelper: false,
    editable: true,
    eventLimit: true, 

    select: function(start, end) {
      var title = prompt("Event Content:");
      var eventData;
      if (title) {
        eventData = {
          title: title,
          start: start,
          end: end,
          color: '#800080'
        };
        $("#calendar").fullCalendar("renderEvent", eventData, true); 
      }
      $("#calendar").fullCalendar("unselect");
    },

    eventRender: function(event, element) {
      element
        .find(".fc-content")
        .prepend("<span class='closeon material-icons'>&#xe5cd;</span>");
      element.find(".closeon").on("click", function() {
        $("#calendar").fullCalendar("removeEvents", event._id);
      });
    },

    eventClick: function(calEvent) {
      var title = prompt("Edit Event Content:", calEvent.title);
      calEvent.title = title;
      $("#calendar").fullCalendar("updateEvent", calEvent);
    }
  });
});