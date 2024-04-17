import { useEffect, useState } from "react";

const materialList = [
  { name: "UBC", source: "/public/UBC.jpg" },
  { name: "430 SS SO", source: "/public/430-SS-SO.jpg" },
  { name: "Rebaba Inoxidable", source: "/public/REBABA.jpg" },
  { name: "Rin", source: "/public/RIN.jpg" },
  { name: "316 SS SO", source: "/public/316-SS-SO.jpg" },
  { name: "201 SS SO", source: "/public/201-SS-SO.jpg" },
];

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)} type="button">
        +
      </button>
      <button onClick={() => setCount(count - 1)} type="button">
        -
      </button>
    </>
  );
}

export function ButtonImageSelector() {
  const [selectedMaterial, setSelectedMaterial] = useState(0);

  const handleSelectMaterial = (index) => {
    setSelectedMaterial(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedMaterial !== 5) {
        setSelectedMaterial(selectedMaterial + 1);
      } else {
        setSelectedMaterial(0);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [selectedMaterial]);

  return (
    <>
      <p className="text-3xl font-light text-left text-wrap mx-auto mb-10 tracking-wide">
        Tenemos experiencia con el manejo de diversos materiales.
      </p>
      <p className="text-3xl font-light text-left text-wrap mx-auto mb-10 tracking-wide">
        Trabajamos con: <strong>{materialList[selectedMaterial]?.name}</strong>
      </p>
      {/* <br /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {materialList.map((material, index) => (
          <button
            style={{
              width: "200px",
              minWidth: "200px",
              height: "200px",
              backgroundImage: `url(${material.source})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "50% 50%",
              margin: "10px",
            }}
            className={
              index === selectedMaterial ? "active-button" : "not-active-button"
            }
            type="button"
            key={material.name}
          ></button>
        ))}
      </div>
      <p className="text-3xl font-light text-left text-wrap mx-auto mb-5 tracking-wide">
        Y muchos materiales industriales más. Contáctenos para cotizar el
        servicio.
      </p>
      <div className="flex justify-center">
        <button
          type="button"
          className="text-3xl bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
          <span className="mx-2">Cotice Aquí</span>
        </button>
      </div>
    </>
  );
}
