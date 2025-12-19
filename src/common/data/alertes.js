//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg"
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../assets/images/users/avatar-3.jpg"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import avatar5 from "../../assets/images/users/avatar-5.jpg"
import avatar6 from "../../assets/images/users/avatar-6.jpg"
import avatar7 from "../../assets/images/users/avatar-7.jpg"
import avatar8 from "../../assets/images/users/avatar-8.jpg"

import img1 from "../../assets/images/companies/img-1.png";
import img2 from "../../assets/images/companies/img-2.png";
import img3 from "../../assets/images/companies/img-3.png";

import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";

const Alertes = [
  {
    id: "1",
    type: "incendie",
    risque: "électricité",
    lanceePar: { nom: "AMOUSSOU Yann", num: "019999999" },
    localisation: {
      quartier: "Cadjèhoun",
      lat: "6.3573",
      lng: "2.3811"
    },
    victimes: 2,
    statut: "en attente",
    attribuee: null,
    rapport: null,
    date: "2025-12-01 08:15"
  },
  {
    id: "2",
    type: "inondation",
    risque: "chimique",
    lanceePar: { nom: "KOFFI Mireille", num: "018888888" },
    localisation: {
      quartier: "Zogbo",
      lat: "6.3846",
      lng: "2.3654"
    },
    victimes: 5,
    statut: "attribuee",
    attribuee: "2",
    rapport: null,
    date: "2025-12-02 09:30"
  },

  {
    id: "3",
    type: "accident",
    risque: "électricité",
    lanceePar: { nom: "DIALLO Moussa", num: "017777777" },
    localisation: {
      quartier: "Akpakpa",
      lat: "6.3659",
      lng: "2.4426"
    },
    victimes: 1,
    statut: "approuvée",
    attribuee: null,
    rapport: null,
    date: "2025-12-03 10:45"
  },

  {
    id: "4",
    type: "malaise",
    risque: "malaise",
    lanceePar: { nom: "N'DIAYE Fatou", num: "016666666" },
    localisation: {
      quartier: "Fidjrossè",
      lat: "6.3544",
      lng: "2.3729"
    },
    victimes: 1,
    statut: "en cours",
    attribuee: "4",
    rapport: null,
    date: "2025-12-04 11:00"
  },

  {
    id: "5",
    type: "fuite de gaz",
    risque: "fuite",
    lanceePar: { nom: "OUEDRAOGO Paul", num: "015555555" },
    localisation: {
      quartier: "Godomey",
      lat: "6.3907",
      lng: "2.3286"
    },
    victimes: 3,
    statut: "terminee",
    attribuee: "5",
    rapport: {
      redigePar: "Lieutenant ADJAHO",
      fonction: "Chef d'intervention",
      contenu: "Fuite colmatée, périmètre sécurisé, aucun blessé.",
      date: "2025-12-05 14:40"
    },
    date: "2025-12-05 12:20"
  },

  {
    id: "6",
    type: "incendie",
    risque: "électricité",
    lanceePar: { nom: "KOUASSI Jean", num: "014444444" },
    localisation: {
      quartier: "Houeyiho",
      lat: "6.3731",
      lng: "2.3669"
    },
    victimes: 4,
    statut: "en attente",
    attribuee: null,
    rapport: null,
    date: "2025-12-06 13:10"
  },

  {
    id: "7",
    type: "inondation",
    risque: "chimique",
    lanceePar: { nom: "TRAORE Awa", num: "013333333" },
    localisation: {
      quartier: "Agla",
      lat: "6.3725",
      lng: "2.3546"
    },
    victimes: 6,
    statut: "attribuee",
    attribuee: "2",
    rapport: null,
    date: "2025-12-07 14:05"
  },

  {
    id: "8",
    type: "accident",
    risque: "électricité",
    lanceePar: { nom: "SOW Mamadou", num: "012222222" },
    localisation: {
      quartier: "Mènontin",
      lat: "6.3788",
      lng: "2.4021"
    },
    victimes: 2,
    statut: "approuvée",
    attribuee: null,
    rapport: null,
    date: "2025-12-08 15:30"
  },

  {
    id: "9",
    type: "malaise",
    risque: "malaise",
    lanceePar: { nom: "BARRY Mariam", num: "011111111" },
    localisation: {
      quartier: "Vèdoko",
      lat: "6.3618",
      lng: "2.3926"
    },
    victimes: 1,
    statut: "en cours",
    attribuee: "4",
    rapport: null,
    date: "2025-12-09 16:45"
  },

  {
    id: "10",
    type: "fuite de gaz",
    risque: "fuite",
    lanceePar: { nom: "ZONGO Pierre", num: "010101010" },
    localisation: {
      quartier: "Abomey-Calavi",
      lat: "6.4485",
      lng: "2.3556"
    },
    victimes: 0,
    statut: "terminee",
    attribuee: "5",
    rapport: {
      redigePar: "Lieutenant ADJAHO",
      fonction: "Chef d'intervention",
      contenu: "Aucune victime, fuite maîtrisée rapidement.",
      date: "2025-12-10 18:30"
    },
    date: "2025-12-10 17:55"
  },

  {
    id: "11",
    type: "incendie",
    risque: "électricité",
    lanceePar: { nom: "OUATTARA Salif", num: "019191919" },
    localisation: {
      quartier: "Togoudo",
      lat: "6.4441",
      lng: "2.3198"
    },
    victimes: 3,
    statut: "en attente",
    attribuee: null,
    rapport: null,
    date: "2025-12-11 18:20"
  },

  {
    id: "12",
    type: "inondation",
    risque: "chimique",
    lanceePar: { nom: "KABORE Alice", num: "018181818" },
    localisation: {
      quartier: "Sèmè-Kpodji",
      lat: "6.3532",
      lng: "2.6249"
    },
    victimes: 7,
    statut: "attribuee",
    attribuee: "2",
    rapport: null,
    date: "2025-12-12 19:40"
  }
];



  
const Casernes = [
  {
    id: 1,
    name: "Caserne Cotonou Centre",
    quartier: "Cadjèhoun",
    lat: 6.3575,
    lng: 2.3813
  },
  {
    id: 2,
    name: "Caserne Zogbo",
    quartier: "Zogbo",
    lat: 6.3852,
    lng: 2.3661
  },
  {
    id: 3,
    name: "Caserne Akpakpa",
    quartier: "Akpakpa",
    lat: 6.3658,
    lng: 2.4429
  },
  {
    id: 4,
    name: "Caserne Fidjrossè",
    quartier: "Fidjrossè",
    lat: 6.3542,
    lng: 2.3725
  },
  {
    id: 5,
    name: "Caserne Godomey",
    quartier: "Godomey",
    lat: 6.3912,
    lng: 2.3291
  },
  {
    id: 6,
    name: "Caserne Houeyiho",
    quartier: "Houeyiho",
    lat: 6.3734,
    lng: 2.3674
  },
  {
    id: 7,
    name: "Caserne Agla",
    quartier: "Agla",
    lat: 6.3728,
    lng: 2.3551
  },
  {
    id: 8,
    name: "Caserne Abomey-Calavi",
    quartier: "Abomey-Calavi",
    lat: 6.4489,
    lng: 2.3562
  }
];

const series = [
  {
    name: "Alertes terminée",
    type: "column",
    data: [23, 11, 22, 27, 13, 22, 52, 21, 44, 22, 30],
  },
  {
    name: "Toutes les alertes",
    type: "line",
    data: [23, 11, 34, 27, 17, 22, 62, 32, 44, 22, 39],
  },
]

const options = {
  chart: { height: 280, type: "line", stacked: !1, toolbar: { show: !1 } },
  stroke: { width: [0, 2, 5], curve: "smooth" },
  plotOptions: { bar: { columnWidth: "20%", endingShape: "rounded" } },
  colors: ["#556ee6", "#F46A6A"],
  fill: {
    gradient: {
      inverseColors: !1,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
  ],
  markers: { size: 0 },
  yaxis: { min: 0 },
}

const recentAlertsData = [
  // 🔴 EN ATTENTE
  {
    id: 1,
    type: "incendie",
    risque: "électricité",
    statut: "en attente",
    victimes: 2,
    attribuee: null,
    localisation: {
      quartier: "Cadjèhoun",
      lat: "6.3703",
      lng: "2.3912"
    },
    lanceePar: {
      nom: "AMOUSSOU Yann",
      num: "019999999"
    },
    intervenants: [],
    date: "2025-12-12 09:10"
  },

  // 🟠 APPROUVÉE (pas encore attribuée)
  {
    id: 2,
    type: "accident",
    risque: "chimique",
    statut: "approuvée",
    victimes: 3,
    attribuee: null,
    localisation: {
      quartier: "Akpakpa",
      lat: "6.3658",
      lng: "2.4452"
    },
    lanceePar: {
      nom: "DIALLO Moussa",
      num: "017777777"
    },
    intervenants: [],
    date: "2025-12-12 11:45"
  },

  // 🔵 ATTRIBUÉE (intervention pas encore démarrée)
  {
    id: 3,
    type: "malaise",
    risque: "malaise",
    statut: "attribuee",
    victimes: 1,
    attribuee: {
      id: 2,
      nom: "Caserne Fidjrossè",
      contact: "014545454"
    },
    localisation: {
      quartier: "Fidjrossè",
      lat: "6.3545",
      lng: "2.3768"
    },
    intervenants: [],
    date: "2025-12-12 13:30"
  },

  // 🟡 EN COURS
  {
    id: 4,
    type: "incendie",
    risque: "électricité",
    statut: "en cours",
    victimes: 4,
    attribuee: {
      id: 1,
      nom: "Caserne Akpakpa",
      contact: "013333333"
    },
    localisation: {
      quartier: "Akpakpa",
      lat: "6.3660",
      lng: "2.4450"
    },
    lanceePar: {
      nom: "KOUASSI Jean",
      num: "014444444"
    },
    intervenants: [
      { id: 1, src: avatar4 },
      { id: 2, src: avatar5 },
      { id: 3, avatarTitle: "S", bgColor: "bg-danger", text: "S" }
    ],
    date: "2025-12-12 14:10"
  },

  // 🟢 TERMINÉE
  {
    id: 5,
    type: "fuite de gaz",
    risque: "fuite",
    statut: "terminee",
    victimes: 0,
    attribuee: {
      id: 3,
      nom: "Caserne Calavi",
      contact: "015555555"
    },
    localisation: {
      quartier: "Calavi",
      lat: "6.4485",
      lng: "2.3556"
    },
    lanceePar: {
      nom: "OUEDRAOGO Paul",
      num: "015555555"
    },
    intervenants: [
      { id: 1, src: avatar8 },
      { id: 2, src: avatar7 }
    ],
    date: "2025-12-12 15:50"
  }
];



const statusClasses = {
  waiting: "badge-soft-secondary",
  approved: "badge-soft-primary",
  complete: "badge-soft-success",
  pending: "badge-soft-warning",
}

export { Alertes, series, options, statusClasses, Casernes, recentAlertsData }
