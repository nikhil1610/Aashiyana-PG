import {nsut, ddu, vegas} from "../assets"
import { FaWifi, FaBroom, FaTrain, FaScrewdriver  } from "react-icons/fa"
import { GiMeal } from "react-icons/gi"
import { MdSecurity } from "react-icons/md"
import { BiDumbbell } from "react-icons/bi"

const amenities = [
    {
    name:'24*7 Wifi Service',
    icon: FaWifi
    },
    {
    name:'3 Times Food',
    icon: GiMeal
    },
    {
    name:'Daily House Keeping',
    icon:FaBroom
    },
    {
      name:'24*7 Security',
      icon: MdSecurity
    },
    {
      name:'Nearby Gym',
      icon: BiDumbbell
      },
      {
      name:'Metro(dist.-600m)',
      icon: FaTrain
      },
      {
      name:'Regular Maintenance',
      icon:FaScrewdriver
      },
      
]

const nearPlaces = [
    {
        name:'NSUT, Delhi',
        link:nsut
    },
    {
        name:'Deen Dayal Upadhya College, Delhi',
        link:ddu
    },
    {
        name:'Vegas Mall, Dwarka',
        link:vegas
    }
    
]

const photos = [
    {
        name:'NSUT, Delhi',
        src: nsut
    }

]

const testimonials = [
    {
      testimonial:
        "This is one of the Best PG in this Area for Students of DDUC and NSUT . Food Is Awesome . This PG got Spacious Rooms Nad Common Area . The Owner of PG is also very Supportive.",
      name: "Keshav Jha",
      stars: 5,
      time: "a year ago",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Best PG I've ever been to, the owner is really very cooperative and considerate. The food is delicious here.",
      name: "Isha Punia",
      stars: 5,
      time: "a year ago",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "The best thing about this PG is the disiplined and decent behaviour of the owner. Accommodation, mess and hygiene facilities are good and prices are comparatively low.",
      name: "Rao Surjeet",
      stars: 5,
      time: "3 years ago",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
        testimonial:
          "If you are looking for a decent and affordable PG then this would be the best place for you. The people (staff) who are taking care of the PG are really kind and helpful",
        name: "Renu Yadav",
        stars: 5,
        time: "3 years ago",
      //   image: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    ];

export { amenities,photos,nearPlaces,testimonials };