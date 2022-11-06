import images from './images';

const wines = [
  {
    title:'Caipirinha',
    price: '27',
    tags: 'Cítrico|Refrescante',
  },
  {
    title: 'Capi Vodka',
    price: '27',
    tags: 'Cítrico| Refrescante',
  },
  {
    title: 'Gin Tõnica',
    price: '32',
    tags: 'Aromático | Refrescante',
  },
  {
    title: 'Moscow Mule',
    price: '31',
    tags: 'Picante| Refrescante',
  },
  {
    title: 'Soda Italiana',
    price: '26',
    tags: 'Não alcoolico| Refrescante',
  },
];

const cocktails = [
  {
    title: 'Desculpinha',
    price: '42',
    tags: 'Doce| Tropical | Alcoólico',
  },
  {
    title: "El Perigoso",
    price: '32',
    tags: 'Citrico| Tropical | Perigoso',
  },
  {
    title: 'Pedaço de mal Caminho',
    price: '37',
    tags: 'Doce | Frutado |Instagramável',
  },
  {
    title: 'Porção do amor',
    price: '37',
    tags: 'Doce| Exótico | Afrodisíaco',
  },
  {
    title: 'Santinha',
    price: '45',
    tags: 'leve | Equilibrado | Frutado ',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
