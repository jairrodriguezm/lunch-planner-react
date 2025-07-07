import { useState } from 'react'
import { INGREDIENTES } from '../data/ingredientes'
import type { Ingrediente } from '../data/ingredientes'

type Props = {
  ingredientes: Ingrediente[];
  onSeleccionar: (ingredientes: Ingrediente[]) => void;
};

export default function SelectorIngredientes({ ingredientes, onSeleccionar }: Props) {
  const [seleccionados, setSeleccionados] = useState<Ingrediente[]>([]);

  const toggleIngrediente = (ingrediente: Ingrediente) => {
    const existe = seleccionados.find((i) => i.id === ingrediente.id);

    if (existe) {
      const nuevos = seleccionados.filter((i) => i.id !== ingrediente.id);
      setSeleccionados(nuevos);
      onSeleccionar(nuevos);
    } else if (seleccionados.length < 3) {
      const nuevos = [...seleccionados, ingrediente];
      setSeleccionados(nuevos);
      onSeleccionar(nuevos);
    }
  };

  return (
    <div className="p-4 grid grid-cols-2 gap-4">
      {ingredientes.map((ingrediente) => {
        const seleccionado = seleccionados.some((i) => i.id === ingrediente.id);
        return (
          <div
            key={ingrediente.id}
            className={`card bg-base-100 shadow-md transition cursor-pointer hover:shadow-lg ${
              seleccionado ? 'border-2 border-primary' : ''
            }`}
            onClick={() => toggleIngrediente(ingrediente)}
          >
            <figure className="px-4 pt-4">
              <img
                src={ingrediente.imagen}
                alt={ingrediente.nombre}
                className="w-20 h-20 object-contain"
              />
            </figure>
            <div className="card-body items-center text-center p-2">
              <h2 className="card-title text-base">{ingrediente.nombre}</h2>
              {seleccionado && <div className="badge badge-primary mt-2">Seleccionado</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}