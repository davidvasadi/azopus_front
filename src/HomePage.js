import React, { useEffect, useState } from 'react';

// import axios from 'axios';

export default function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json')
      .then(res => res.json())
      .then(setItems)
      .catch(console.error);

    // Axios verzió:
    // axios.get('…all.json')
    //   .then(res => setItems(res.data))
    //   .catch(console.error);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Azopus Alkotások</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div
            key={item.alkotasAzonosito}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={`https://picsum.photos/seed/${item.alkotasAzonosito}/400/250`}
              alt={item.megjelenitendoNev}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{item.megjelenitendoNev}</h2>
            <p className="text-sm"><span className="font-medium">Név:</span> {item.nev}</p>
            <p className="text-sm"><span className="font-medium">ID:</span> {item.alkotasAzonosito}</p>
            <p className="text-sm"><span className="font-medium">Kezdő időpont:</span> {item.keletkezesKezdoIdopontjaInt}</p>
            <p className="text-sm"><span className="font-medium">Típus:</span> {item.tipus}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
