const BookingsList = ({ appointments }) => {
  const sorted = [...appointments].sort(
    (a, b) => new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
  );
 
  return (
    <div >
      <h2>Afspraken:</h2>
 
 
      {sorted.map((a, i) => (
        <div key={i} >
          <b>{a.service.name}</b> — {a.date} om {a.time} (€{a.service.price})
        </div>
      ))}
    </div>
  );
};
 
export default BookingsList;