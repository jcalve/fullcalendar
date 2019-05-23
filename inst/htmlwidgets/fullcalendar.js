HTMLWidgets.widget({
  name: 'fullcalendar',
  type: 'output',

  factory: function(el, width, height) {

    var calendar = null;

    return {
      renderValue: function(x) {
        if (calendar === null) {
          calendar = new FullCalendar.Calendar(el, x);

          Shiny.addCustomMessageHandler("refetch_events", function(info) {
            calendar.refetchEvents();
          });

          Shiny.addCustomMessageHandler("update_locale", function(locale) {
            calendar.setOption("locale", locale);
          });

          calendar.render();
        } else {
          calendar.refetchEvents();  // Fetch events
        }
      },

      resize: function(width, height) {
        // TODO: code to re-render the widget with a new size
      },

      cal: calendar
    };
  }
});
