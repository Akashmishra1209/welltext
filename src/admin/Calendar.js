"use client"

import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Slider,
  Typography
} from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

export default function Component() {
  const [events, setEvents] = useState([])
  const [openDialog, setOpenDialog] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: new Date(),
    end: new Date(),
    allDay: false,
  })
  const [calendarHeight, setCalendarHeight] = useState(600) // Default height

  useEffect(() => {
    const storedEvents = localStorage.getItem('calendarEvents')
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents).map(event => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end)
      })))
    }

    const storedHeight = localStorage.getItem('calendarHeight')
    if (storedHeight) {
      setCalendarHeight(parseInt(storedHeight, 10))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events))
  }, [events])

  useEffect(() => {
    localStorage.setItem('calendarHeight', calendarHeight.toString())
  }, [calendarHeight])

  const handleDateSelect = (selectInfo) => {
    setNewEvent({
      start: selectInfo.start,
      end: selectInfo.end,
      allDay: selectInfo.allDay,
    })
    setOpenDialog(true)
  }

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      const updatedEvents = events.filter(event => event.id !== clickInfo.event.id)
      setEvents(updatedEvents)
    }
  }

  const handleDialogClose = () => {
    setOpenDialog(false)
    setNewEvent({ title: '', start: new Date(), end: new Date(), allDay: false })
  }

  const handleEventAdd = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      const updatedEvents = [...events, { ...newEvent, id: Date.now().toString() }]
      setEvents(updatedEvents)
      handleDialogClose()
    }
  }

  const handleHeightChange = (event, newValue) => {
    setCalendarHeight(newValue)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ p: 2 }}>
        <Box sx={{ height: "450px" }}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            events={events}
            select={handleDateSelect}
            eventClick={handleEventClick}
            height="100%"
          />
        </Box>
      </Box>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event Title"
            fullWidth
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <DateTimePicker
            label="Start Date"
            value={newEvent.start}
            onChange={(date) => setNewEvent({ ...newEvent, start: date || new Date() })}
            renderInput={(params) => <TextField {...params} fullWidth sx={{ mt: 2 }} />}
          />
          <DateTimePicker
            label="End Date"
            value={newEvent.end}
            onChange={(date) => setNewEvent({ ...newEvent, end: date || new Date() })}
            renderInput={(params) => <TextField {...params} fullWidth sx={{ mt: 2 }} />}
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="all-day-label">All Day</InputLabel>
            <Select
              labelId="all-day-label"
              value={newEvent.allDay}
              label="All Day"
              onChange={(e) => setNewEvent({ ...newEvent, allDay: e.target.value })}
            >
              <MenuItem value={false}>No</MenuItem>
              <MenuItem value={true}>Yes</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleEventAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  )
}