# fullcalendaR

This is a simple R package that allows you to create calendar
[widgets](http://www.htmlwidgets.org/) from R using the
[FullCalendar](https://fullcalendar.io) javascript library.

Install by using the `devtools` package:

``` r
devtools::install_github("jcalve/fullcalendar")
```

Or run from the command line:

``` sh
R -e "devtools::install()"
```

# Example

``` r
calendar_data = data.frame(
  title = paste("Event", 1:3),
  start = c("2017-03-01", "2017-03-01", "2017-03-15"),
  end = c("2017-03-02", "2017-03-04", "2017-03-18"),
  color = c("red", "blue", "green")
)
## or a javascript function
## calendar_data <- JS(read_file("www/js/calendarEventSource.js"))

settings = list(
  plugins = list("interaction", "dayGrid", "timeGrid"),
  editable = TRUE,
  locale = "es",
  firstDay = 1,
  defaultView = list("dayGridMonth"),
  header = list(
    left = "prev, next today",
    center = "title",
    right = "dayGridMonth, dayGridWeek, dayGridDay"
  ),
  ## Calendar events
  eventClick = JS(read_file("calendarEventClick.js")),
  eventDrop = JS(read_file("calendarEventDrop.js"))
)

fullcalendar(calendar_data, settings = settings)
```
