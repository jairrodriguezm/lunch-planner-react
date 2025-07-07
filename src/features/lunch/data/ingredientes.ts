export interface Ingrediente {
  id: string;
  nombre: string;
  categoria: 'proteína' | 'carbohidrato' | 'ensalada';
  imagen: string;
}

export const INGREDIENTES: Ingrediente[] = [
  {
    id: '1',
    nombre: 'Pollo',
    categoria: 'proteína',
    imagen: 'https://openmoji.org/data/color/svg/1F357.svg'
  },
  {
    id: '2',
    nombre: 'Carne',
    categoria: 'proteína',
    imagen: 'https://openmoji.org/data/color/svg/1F969.svg' // bistec
  },
  {
    id: '3',
    nombre: 'Pescado',
    categoria: 'proteína',
    imagen: 'https://openmoji.org/data/color/svg/1F41F.svg'
  },
  {
    id: '4',
    nombre: 'Arroz',
    categoria: 'carbohidrato',
    imagen: 'https://openmoji.org/data/color/svg/1F35A.svg'
  },
  {
    id: '5',
    nombre: 'Papas',
    categoria: 'carbohidrato',
    imagen: 'https://openmoji.org/data/color/svg/1F35F.svg' // papas fritas
  },
  {
    id: '6',
    nombre: 'Plátano',
    categoria: 'carbohidrato',
    imagen: 'https://openmoji.org/data/color/svg/1F34C.svg'
  },
  {
    id: '7',
    nombre: 'Ensalada verde',
    categoria: 'ensalada',
    imagen: 'https://openmoji.org/data/color/svg/1F957.svg'
  },
  {
    id: '8',
    nombre: 'Aguacate',
    categoria: 'ensalada',
    imagen: 'https://openmoji.org/data/color/svg/1F951.svg'
  },
  {
    id: '9',
    nombre: 'Zanahoria',
    categoria: 'ensalada',
    imagen: 'https://openmoji.org/data/color/svg/1F955.svg'
  },
  {
    id: '10',
    nombre: 'Tomate',
    categoria: 'ensalada',
    imagen: 'https://openmoji.org/data/color/svg/1F345.svg'
  }
]