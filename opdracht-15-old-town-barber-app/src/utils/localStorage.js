 export const setUserProfile = (profile) => {
localStorage.setItem('UserProfile', JSON.stringify(profile))    
 }

 export const getUserProfile = () => {
    try{
return JSON.parse(localStorage.getItem('UserProfile')) || null
    }catch {
    return null
    };
    
 }
 export const setAppointments = () => {

 }
    

 export const getAppointments = () => {
    
 }
    
