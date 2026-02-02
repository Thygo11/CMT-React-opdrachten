export default function ShopInfo({ shop }) {
  return (
    <div >
      <h2 >{shop.name}</h2>
      <p >{shop.hours}</p>
 
      {shop.services.map((s) => (
        <div key={s.id} >
          <span>{s.name}</span>
          <span>€ {s.price}</span>
        </div>
      ))}
    </div>
  );
}