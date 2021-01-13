Create Database :Appointment
Collection: slots 
	    Booking

#API for Booking by patients
url: http://localhost:5000/addSlot/<date>

body:
{
"Slotid": "" //slotid from the Slots collection
"patientName": "Sample",
"patientAge": 30,
"patientGender": "Male",
}