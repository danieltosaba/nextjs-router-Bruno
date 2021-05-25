import Link from "next/link";

export default function Details() {
  const people = [
    { name: "Daniel", vehicle: "Car" },
    { name: "Naum", vehicle: "Bike" },
    { name: "Tijana", vehicle: "Boat" },
    { name: "Bor", vehicle: "Airplane" },
  ];
  return (
    <div>
      {people.map((el) => (
        <div key={`${el.name}${el.vehicle}`}>
          <Link href={`${el.vehicle}/${el.name}`}>
            <a>Link to {`${el.name}'s ${el.vehicle}`}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
