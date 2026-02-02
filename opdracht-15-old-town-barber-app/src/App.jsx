import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { getUserProfile, getAppointments, setAppointments } from "./utils/localStorage";
import UserProfile from "./components/UserProfile";
import ShopInfo from "./components/ShopInfo";
import BookingForm from "./components/BookingForm";
import BookingsList from "./components/BookingsList";
 
const shopData = {
  name: "Old Town Barber",
  hours: "Maandag tot zaterdag: 08:00 - 17:00",
  services: [
    { id: 1, name: "Knipbeurt", price: 25 },
    { id: 2, name: "Baard trimmen", price: 15 },
    { id: 3, name: "Haar verfen", price: 90 },
    { id: 4, name: "Wassen + knippen", price: 35 },
  ],
};
 
export default function App() {
  const [user, setUser] = useState(getUserProfile());
  const [appointments, setAppointmentsState] = useState(getAppointments());
 
  useEffect(() => {
    const now = new Date();
    appointments.forEach((a) => {
      const time = new Date(`${a.date}T${a.time}`);
      const diff = (time - now) / 60000;
      if (diff > 0 && diff < 15) {
        toast.info(`⏰ Reminder: ${a.service.name} om ${a.time}`);
      }
    });
  }, [appointments]);
 
 
  const handleUpdate = (updated) => {
    setAppointments(updated);
    setAppointmentsState(updated);
  };
 
  if (!user) return <UserProfile onSave={setUser} />;
 
  return (
    <div>
      <ToastContainer />
 
     
 
      <div >
        <ShopInfo shop={shopData} />
        <BookingForm
          user={user}
          shop={shopData}
          appointments={appointments}
          onNewAppointments={handleUpdate}
        />
                <BookingsList appointments={appointments} />
 
      </div>
    </div>
  );
}