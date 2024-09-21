// src/data/constants.js
import femmeManageImage from '../assets/images/femme-menage.avif';
import nounouImage from '../assets/images/nounou.webp';
import jardinierImage from '../assets/images/jardinier.jpg';
import cuisinierImage from '../assets/images/cuisinier.avif';
import chauffeurImage from '../assets/images/chauffeur.avif';
import gouvernanteImage from '../assets/images/gouvernante2.avif';
import majordomeImage from '../assets/images/majordome2.jpg';
import aideADomicileImage from '../assets/images/aide-a-domicile.jpg';
import personnel from '../assets/images/personnel.jpg';



export const heroImages = [
  { 
    src: personnel, 
    alt: 'Trouvez le personnel de maison idéal',
    title: 'Trouvez le personnel de maison idéal',
    description: 'Une plateforme simple et efficace pour vos besoins en personnel de maison.'
  },
  { 
    src: femmeManageImage, 
    alt: 'Gardez votre maison impeccable sans effort',
    title: 'Un intérieur impeccable',
    description: 'Nos femmes de ménage expertes garantissent un foyer propre et sain.'
  },
  { 
    src: 'assets/nounou.jpg', 
    alt: 'Nounou jouant avec des enfants',
    title: 'Des soins attentionnés pour vos enfants',
    description: 'Nos nounous qualifiées prennent soin de vos enfants avec amour et attention.'
  },
  { 
    src: 'assets/jardinier.jpg', 
    alt: 'Jardinier travaillant dans un jardin',
    title: 'Un jardin de rêve',
    description: 'Nos jardiniers transforment votre extérieur en un véritable paradis vert.'
  },
  { 
    src: cuisinierImage, 
    alt: 'Cuisinier préparant un repas',
    title: 'Des repas délicieux',
    description: 'Nos cuisiniers talentueux préparent des plats savoureux pour toute la famille.'
  },
  { 
    src: chauffeurImage, 
    alt: 'Chauffeur personnel devant une voiture de luxe',
    title: 'Un service de conduite sur mesure',
    description: 'Nos chauffeurs professionnels vous conduisent en toute sécurité et confort.'
  },
  { 
    src: 'assets/gouvernante.jpg', 
    alt: 'Gouvernante arrangeant des fleurs dans un vase',
    title: 'Une gestion parfaite de votre maison',
    description: 'Nos gouvernantes veillent au bon fonctionnement de vos hôtels.'
  },
  {
    src: 'assets/staff_protocole.jpg',
    alt: 'Staff protocolaire lors d’un événement officiel',
    title: 'Un personnel de protocole irréprochable',
    description: 'Nos experts en protocole assurent la gestion parfaite de vos événements officiels.'
  },
  {
    src: 'assets/blanchisseur.jpg',
    alt: 'Blanchisseur en train de repasser du linge',
    title: 'Un service de blanchisserie haut de gamme',
    description: 'Nos blanchisseurs prennent soin de vos textiles avec une attention particulière.'
  },
  {
    src: 'assets/technicien_surface.jpg',
    alt: 'Technicien de surface nettoyant un sol avec un balai',
    title: 'Un entretien impeccable de vos espaces',
    description: 'Nos techniciens de surface garantissent la propreté et l’hygiène de vos locaux.'
  },
  { 
    src: 'assets/aide_domicile.jpg', 
    alt: 'Aide à domicile aidant une personne âgée',
    title: 'Un soutien au quotidien',
    description: 'Nos aides à domicile apportent assistance et compagnie aux personnes âgées.'
  },
];

export const services = [
  'Femme de ménage',
  'Nounou',
  'Cuisinier',
  'Jardinier',
  'Chauffeur',
  'Gouvernante',
  'Majordome',
  'Aide à domicile',
  'Coiffeuse à domicile',
  'Receptioniste'
];

export const testimonials = [
  {
    name: 'Amélie Dubois',
    image: 'assets/femme2.jpg',
    text: "J'ai trouvé une nounou exceptionnelle grâce à Copodis Personnel. Elle s'occupe merveilleusement bien de mes enfants.",
    rating: 5,
  },
  {
    name: 'François Martin',
    image: 'assets/homme3.jpg',
    text: "Le jardinier que j'ai embauché via cette plateforme a transformé mon jardin en un véritable paradis.",
    rating: 4,
  },
  {
    name: 'Sophie Leroy',
    image: 'assets/femme3.jpg',
    text: "Grâce à Copodis Personnel, j'ai trouvé une femme de ménage fiable et efficace. Ma maison n'a jamais été aussi propre !",
    rating: 5,
  },
  {
    name: 'Pierre Dupont',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
    text: "Le cuisinier que j'ai engagé pour mes réceptions est un vrai chef. Mes invités sont toujours impressionnés.",
    rating: 5,
  },
  {
    name: 'Marie Petit',
    image: 'assets/homme1.avif',
    text: "J'ai trouvé une aide à domicile formidable pour ma mère. Elle est attentionnée et professionnelle.",
    rating: 4,
  },
  {
    name : 'Jeanne NGuefack',
    image:'assets/femme1.jpg',
    text:"Nous avions du mal à gérer notre maison et nos enfants malgré plusieurs essais avec différentes ménagères. Avec beaucoup d'espoir, nous avons fait appel à Coprodis. Ils nous ont envoyé une ménagère compétente qui a transformé notre maison et créé un environnement chaleureux pour nos enfants. Grâce à Coprodis, nous avons pu surmonter nos difficultés et profiter d'une maison bien gérée et heureuse.",
    rating:5
  },

];


export const profiles = [
  {
    id: 1,
    name: "Marie Dupont",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    job: "Femme de ménage",
    age: 35,
    city: "Douala",
    rating: 4.8,
    description: "Marie est une femme de ménage expérimentée avec 10 ans d'expérience dans l'entretien de maisons et d'appartements.",
    experience: [
      { role: "Femme de ménage", duration: "2015-2023" },
      { role: "Femme de chambre", duration: "2010-2015" }
    ],
    skills: [
      "Nettoyage en profondeur",
      "Organisation",
      "Repassage",
      "Entretien des surfaces délicates"
    ],
    references: [
      { name: "M. Kamga", comment: "Marie est très professionnelle et efficace. Je la recommande vivement." },
      { name: "Mme. Ngo", comment: "Excellente femme de ménage, toujours ponctuelle et attentive aux détails." }
    ]
  },
  {
    id: 2,
    name: "Jean Tamba",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    job: "Jardinier",
    age: 42,
    city: "Yaoundé",
    rating: 4.6,
    description: "Jean est un jardinier passionné avec une expertise en aménagement paysager et entretien de jardins tropicaux.",
    experience: [
      { role: "Jardinier indépendant", duration: "2018-2023" },
      { role: "Assistant jardinier", duration: "2013-2018" }
    ],
    skills: [
      "Taille des arbres et arbustes",
      "Création de massifs floraux",
      "Entretien de pelouses",
      "Systèmes d'irrigation"
    ],
    references: [
      { name: "Mme. Biya", comment: "Jean a transformé notre jardin en un véritable paradis tropical." },
      { name: "M. Eto'o", comment: "Excellent travail, Jean est créatif et soigneux dans son approche." }
    ]
  },
  { name: "Marie Dupont", job: "Femme de ménage", rating: 4, city: "Paris", image: "https://randomuser.me/api/portraits/women/65.jpg", age: 35 },
  { name: "Sophie Martin", job: "Nounou", rating: 5, city: "Lyon", image: "https://randomuser.me/api/portraits/women/68.jpg", age: 28 },
  { name: "Pierre Leroy", job: "Jardinier", rating: 4, city: "Marseille", image: "https://randomuser.me/api/portraits/men/32.jpg", age: 42 },
  { name: "Jean Dubois", job: "Cuisinier", rating: 5, city: "Bordeaux", image: "https://randomuser.me/api/portraits/men/36.jpg", age: 39 },
  { name: "Claire Petit", job: "Femme de ménage", rating: 4, city: "Lille", image: "https://randomuser.me/api/portraits/women/42.jpg", age: 31 },
  { name: "Luc Moreau", job: "Jardinier", rating: 3, city: "Toulouse", image: "https://randomuser.me/api/portraits/men/55.jpg", age: 45 },
  { name: "Anne Richard", job: "Nounou", rating: 5, city: "Nantes", image: "https://randomuser.me/api/portraits/women/26.jpg", age: 26 },
  { name: "Thomas Bernard", job: "Cuisinier", rating: 4, city: "Strasbourg", image: "https://randomuser.me/api/portraits/men/61.jpg", age: 37 },
  { name: "Émilie Rousseau", job: "Aide à domicile", rating: 4, city: "Nice", image: "https://randomuser.me/api/portraits/women/1.jpg", age: 29 },
  { name: "François Lemaire", job: "Plombier", rating: 5, city: "Rennes", image: "https://randomuser.me/api/portraits/men/2.jpg", age: 41 },
  { name: "Isabelle Girard", job: "Professeur particulier", rating: 4, city: "Montpellier", image: "https://randomuser.me/api/portraits/women/3.jpg", age: 33 },
  { name: "Laurent Mercier", job: "Électricien", rating: 3, city: "Grenoble", image: "https://randomuser.me/api/portraits/men/4.jpg", age: 38 },
  { name: "Nathalie Fournier", job: "Femme de ménage", rating: 5, city: "Dijon", image: "https://randomuser.me/api/portraits/women/5.jpg", age: 44 },
  { name: "Olivier Blanc", job: "Jardinier", rating: 4, city: "Angers", image: "https://randomuser.me/api/portraits/men/6.jpg", age: 36 },
  { name: "Patricia Legrand", job: "Nounou", rating: 5, city: "Le Mans", image: "https://randomuser.me/api/portraits/women/7.jpg", age: 27 },
  { name: "Quentin Roux", job: "Cuisinier", rating: 4, city: "Reims", image: "https://randomuser.me/api/portraits/men/8.jpg", age: 32 },
  { name: "Rachel Lambert", job: "Aide à domicile", rating: 3, city: "Toulon", image: "https://randomuser.me/api/portraits/women/9.jpg", age: 40 },
  { name: "Stéphane Bonnet", job: "Plombier", rating: 5, city: "Le Havre", image: "https://randomuser.me/api/portraits/men/10.jpg", age: 47 },
  { name: "Thérèse Dupuis", job: "Professeur particulier", rating: 4, city: "Saint-Étienne", image: "https://randomuser.me/api/portraits/women/11.jpg", age: 30 },
  { name: "Ulysse Faure", job: "Électricien", rating: 4, city: "Nîmes", image: "https://randomuser.me/api/portraits/men/12.jpg", age: 35 },
  { name: "Valérie Renaud", job: "Femme de ménage", rating: 5, city: "Villeurbanne", image: "https://randomuser.me/api/portraits/women/13.jpg", age: 39 },
  { name: "William Gautier", job: "Jardinier", rating: 3, city: "Clermont-Ferrand", image: "https://randomuser.me/api/portraits/men/14.jpg", age: 43 },
  { name: "Xavière Meunier", job: "Nounou", rating: 5, city: "Aix-en-Provence", image: "https://randomuser.me/api/portraits/women/15.jpg", age: 25 },
  { name: "Yves Lacroix", job: "Cuisinier", rating: 4, city: "Brest", image: "https://randomuser.me/api/portraits/men/16.jpg", age: 37 },
  { name: "Zoé Perrin", job: "Aide à domicile", rating: 4, city: "Tours", image: "https://randomuser.me/api/portraits/women/17.jpg", age: 31 },
  { name: "Alain Caron", job: "Plombier", rating: 5, city: "Limoges", image: "https://randomuser.me/api/portraits/men/18.jpg", age: 46 },
  { name: "Béatrice Aubert", job: "Professeur particulier", rating: 4, city: "Amiens", image: "https://randomuser.me/api/portraits/women/19.jpg", age: 34 },
  { name: "Cédric Lemoine", job: "Électricien", rating: 3, city: "Perpignan", image: "https://randomuser.me/api/portraits/men/20.jpg", age: 40 },
  { name: "Diane Martel", job: "Femme de ménage", rating: 5, city: "Metz", image: "https://randomuser.me/api/portraits/women/21.jpg", age: 29 },
  { name: "Éric Boucher", job: "Jardinier", rating: 4, city: "Besançon", image: "https://randomuser.me/api/portraits/men/22.jpg", age: 38 },
  { name: "Flore Hubert", job: "Nounou", rating: 5, city: "Orléans", image: "https://randomuser.me/api/portraits/women/23.jpg", age: 26 },
  { name: "Gérard Bouvier", job: "Cuisinier", rating: 4, city: "Rouen", image: "https://randomuser.me/api/portraits/men/24.jpg", age: 41 },
  { name: "Hélène Carpentier", job: "Aide à domicile", rating: 3, city: "Mulhouse", image: "https://randomuser.me/api/portraits/women/25.jpg", age: 33 },
  { name: "Irène Dupuy", job: "Plombier", rating: 5, city: "Caen", image: "https://randomuser.me/api/portraits/women/27.jpg", age: 37 },
  { name: "Jacques Masson", job: "Professeur particulier", rating: 4, city: "Nancy", image: "https://randomuser.me/api/portraits/men/28.jpg", age: 45 },
  { name: "Karine Guerin", job: "Électricien", rating: 4, city: "Saint-Denis", image: "https://randomuser.me/api/portraits/women/29.jpg", age: 32 },
  { name: "Léon Bertrand", job: "Femme de ménage", rating: 5, city: "Argenteuil", image: "https://randomuser.me/api/portraits/men/30.jpg", age: 39 },
  { name: "Monique Morel", job: "Jardinier", rating: 3, city: "Roubaix", image: "https://randomuser.me/api/portraits/women/31.jpg", age: 44 },
  { name: "Nicolas Mathieu", job: "Nounou", rating: 5, city: "Tourcoing", image: "https://randomuser.me/api/portraits/men/33.jpg", age: 28 },
  { name: "Odette Barbier", job: "Cuisinier", rating: 4, city: "Montreuil", image: "https://randomuser.me/api/portraits/women/34.jpg", age: 36 },
  { name: "Pascal Perrot", job: "Aide à domicile", rating: 4, city: "Avignon", image: "https://randomuser.me/api/portraits/men/35.jpg", age: 42 },
  { name: "Quynh Nguyen", job: "Plombier", rating: 5, city: "Nanterre", image: "https://randomuser.me/api/portraits/women/37.jpg", age: 30 },
  { name: "Rémi Schmitt", job: "Professeur particulier", rating: 4, city: "Créteil", image: "https://randomuser.me/api/portraits/men/38.jpg", age: 35 },
  { name: "Sylvie Collet", job: "Électricien", rating: 3, city: "Versailles", image: "https://randomuser.me/api/portraits/women/39.jpg", age: 41 },
  { name: "Thierry Lemaire", job: "Femme de ménage", rating: 5, city: "Pau", image: "https://randomuser.me/api/portraits/men/40.jpg", age: 38 },
  { name: "Ursule Brun", job: "Jardinier", rating: 4, city: "Colombes", image: "https://randomuser.me/api/portraits/women/41.jpg", age: 34 },
  { name: "Victor Carre", job: "Nounou", rating: 5, city: "Aulnay-sous-Bois", image: "https://randomuser.me/api/portraits/men/43.jpg", age: 27 },
  { name: "Wendy Maillard", job: "Cuisinier", rating: 4, city: "Rueil-Malmaison", image: "https://randomuser.me/api/portraits/women/44.jpg", age: 33 },
  { name: "Xavier Benoit", job: "Aide à domicile", rating: 4, city: "Champigny-sur-Marne", image: "https://randomuser.me/api/portraits/men/45.jpg", age: 39 }
];