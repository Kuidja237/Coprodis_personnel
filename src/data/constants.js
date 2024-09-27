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
    src: 'assets/acceuil.jpg', 
    alt: 'Trouvez le personnel de maison idéal',
    title: 'Trouvez le personnel de maison idéal',
    description: 'Une plateforme simple et efficace pour vos besoins en personnel de maison.'
  },
  { 
    src: 'assets/menagere1.jpg', 
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
    src: 'assets/cuisiniere.jpg', 
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
    title: 'Une gestion parfaite de votre hôtel',
    description: 'Nos gouvernantes asssurent la bonne gestion de vos hôtels.'
  },
  {
    src: 'assets/protocole.jpg',
    alt: 'Staff protocolaire lors d’un événement officiel',
    title: 'Un Staff protocolaire irréprochable',
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
 
];

export const services = [
  'Femme de ménage',
  'Nounou',
  'Cuisinier',
  'Jardinier',
  'Chauffeur',
  'Blanchisseur',
  'Coiffeuse à domicile',
  'Receptioniste',
  'Technicien de surface'
];

export const testimonials = [
  {
    name: 'Furchette bouchon',
    image: 'assets/furchette_et_bouchon.jpg',
    text: "« En tant qu'entreprise, nous avons régulièrement recours aux services de Coprodis pour nos besoins en personnel temporaire. Chaque fois, ils nous fournissent des professionnels qualifiés et fiables, ce qui nous permet de maintenir un haut niveau de productivité. Leur réactivité et la qualité de leurs prestations en font un partenaire de confiance pour nous. Nous recommandons vivement leurs services à toute entreprise cherchant un soutien efficace et professionnel.  ",
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
    image: 'assets/image2.jpg',
    text: "Rendu à la 4 ème année de collaboration avec Coprodis, j'y ai recruté assistant administratif, staff protocolaire ponctuel évènementiel, chauffeur, techniens de surface et nounou au cameroun. je vous recommande fortement Coprodis.",
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
    image: 'assets/image3_congo.jpg',
    text: "Vivant au Congo, je fais toujours appel aux nounous de Coprodis chaque fois que je viens au Cameroun. Leur service est exceptionnel et m’apporte une grande tranquillité d’esprit pour mes enfants. Les nounous sont professionnelles et attentionnées, ce qui me permet de me concentrer sereinement sur mes activités. Je recommande vivement leurs services.",
    rating: 4,
  },
  {
    name : 'Jeanne NGuefack',
    image:'assets/imagebonapriso.jpg',
    text:"Je vis à Bonapriso, j'avais besoin d'un chauffeur pour mes enfants. Depuis que nous avons engagé ce service chez coprodis, leur transport est devenu bien plus facile et sécurisé. Mon chauffeur est ponctuel et attentionné, ce qui me permet de me concentrer sur mon travail. Je recommande vivement coprodis à toutes les familles !",
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