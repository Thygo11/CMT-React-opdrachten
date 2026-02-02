import { useState } from "react";
import { toast } from "react-toastify";
import { getAppointments, setAppointments } from "../utils/localStorage";
 
const BookingForm = ({ user, shop, appointments, onNewAppointments }) => {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
 
  const book = () => {
    if (!service || !date || !time) {
      return toast.error("Vul al de velden in!");
    }
 
   
 
    const selectedService = shop.services.find((s) => s.id == service);
    const newAppointment = { user, service: selectedService, date, time };
 
    const updated = [...appointments, newAppointment];
 
    setAppointments(updated);
    onNewAppointments(updated);
 
    toast.success("De afspraak is geboekt!");
  };
 
  return (
    <div >
      <h2 >Afspraak boeken</h2>
 
      <select  onChange={(e) => setService(e.target.value)} value={service}>
        <option hidden>Service kiezen</option>
        {shop.services.map((s) => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>
 
      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
 
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
 
      <button onClick={book}>Boeken</button>
    </div>
  );
};
 
export default BookingForm;
 
 