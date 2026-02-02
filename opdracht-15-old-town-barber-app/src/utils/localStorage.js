 
 
export function setUserProfile(profile) {
  localStorage.setItem("userProfile", JSON.stringify(profile));
}
 
 
 
export function setAppointments(appointments) {
  localStorage.setItem("appointments", JSON.stringify(appointments));
}
export function getAppointments() {
  try {
    return JSON.parse(localStorage.getItem("appointments")) || [];
  } catch {
    return [];
  }
}
export function getUserProfile() {
  try {
    return JSON.parse(localStorage.getItem("userProfile")) || null;
  } catch {
    return null;
  }
}
 