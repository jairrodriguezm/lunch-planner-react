import { useState } from 'react'

type Props = {
  onCodigoValido: () => void;
};

export default function LocalizadorForm({ onCodigoValido }: Props) {
  const [localizador, setLocalizador] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localizador.trim() !== '') {
      console.log('Localizador:', localizador);
      onCodigoValido(); // Notificar al padre que el código es válido
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Código del localizador</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          placeholder="Ej: ABC123"
          value={localizador}
          onChange={(e) => setLocalizador(e.target.value)}
        />
      </div>
      <button className="btn btn-primary w-full" type="submit">
        Buscar
      </button>
    </form>
  )
}