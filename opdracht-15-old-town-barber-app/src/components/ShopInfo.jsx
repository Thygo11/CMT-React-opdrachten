const shopInfo = {
  naam: "Barbershop Centrum",
  openingstijden: [
    { dag: "Maandag", tijd: "09:00 – 18:00" },
    { dag: "Dinsdag", tijd: "09:00 – 18:00" },
    { dag: "Woensdag", tijd: "09:00 – 18:00" },
    { dag: "Donderdag", tijd: "09:00 – 20:00" },
    { dag: "Vrijdag", tijd: "09:00 – 18:00" },
    { dag: "Zaterdag", tijd: "10:00 – 16:00" },
    { dag: "Zondag", tijd: "Gesloten" },
  ],
};

const services = [
  { naam: "Heren knippen", prijs: "€25", duur: "30 min" },
  { naam: "Baard trimmen", prijs: "€15", duur: "20 min" },
  { naam: "Knippen & Baard", prijs: "€35", duur: "45 min" },
  { naam: "Kinder knipbeurt", prijs: "€20", duur: "30 min" },
];

export default function ShopOverzicht() {
  return (
    <div className="shop">
      <h1>{shopInfo.naam}</h1>

      <section>
        <h2>Openingstijden</h2>
        <ul>
          {shopInfo.openingstijden.map((item) => (
            <li key={item.dag}>
              <strong>{item.dag}:</strong> {item.tijd}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Services</h2>
        <ul className="services">
          {services.map((service) => (
            <li key={service.naam} className="service">
              <span>{service.naam}</span>
              <span>{service.duur}</span>
              <span>{service.prijs}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
