import { useState } from "react";
import { toast } from "react-toastify";
import { setUserProfile } from "../utils/localStorage";
 
const UserProfile = ({ onSave, defaultValues }) => {
 
 
  const saveProfile = () => {
    if (!form.name || !form.email || !form.phone)
      return toast.error("Alle velden invullen");
 
    setUserProfile(form);
    toast.success(" Profiel opgeslagen");
    onSave(form);
  };
    const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
   const [form, setForm] = useState(defaultValues || { name: "", email: "", phone: "" });
 
 
  return (
    <div >
      <h2 >Jouw Profiel</h2>
 
      <input  name="name" placeholder="Naam" value={form.name} onChange={handleChange}/>
      <input  name="email" placeholder="Email" value={form.email} onChange={handleChange}/>
      <input  name="phone" placeholder="Telefoon" value={form.phone} onChange={handleChange}/>
 
      <button onClick={saveProfile}>
        Opslaan
      </button>
    </div>
  );
};
 
export default UserProfile;