import { useState } from 'react';
import LocalizadorForm from '../components/LocalizadorForm'
import SelectorIngredientes from '../components/SelectorIngredientes'
import { INGREDIENTES } from '../data/ingredientes';

export default function HomePage() {
    const [codigoIngresado, setCodigoIngresado] = useState(false);
    const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState<Ingrediente[]>([]);

    const handleCodigoEncontrado = () => {
        setCodigoIngresado(true);
    };

    return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-md mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold text-center mb-4">Planificador de Almuerzos</h1>

        {!codigoIngresado ? (
          <LocalizadorForm onCodigoValido={handleCodigoEncontrado} />
        ) : (
          <>
            <div className="text-center mb-4">
              <p className="text-sm mb-2">Selecciona hasta 3 ingredientes:</p>
              <SelectorIngredientes
                ingredientes={INGREDIENTES}
                onSeleccionar={(seleccionados) => setIngredientesSeleccionados(seleccionados)}
              />
            </div>

            {ingredientesSeleccionados.length === 3 && (
              <div className="fixed bottom-0 left-0 right-0 p-4 bg-base-100 border-t shadow-md">
                <button className="btn btn-success w-full">
                  Confirmar selección
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}