import { IProject } from "@/interfaces/project-interface/IProject.interface"
import { Tag } from '@/interfaces/project-interface/tags.enum';
import Template from "@/interfaces/Templates.type"

export const rickAndMorty: IProject =  {
  id: 'rick-and-morty',
  title: 'Rick and Morty App',
  overtitle: 'App de personajes de la exitosa serie Rick and Morty - 2023',
  demoUrl: 'https://jc-rick-and-morty.netlify.app/',
  gitUrl: 'https://github.com/JCesar-Developer/Rick-Morty',
  
  cardContent: {
    image: require('@/assets/images/projects/rickMorty/card.jpg'),
    description: {
      title: 'Vue 3 + TypeScript + Pinia + CompositionAPI',
      text: 'Conoce la App, con la que participé en la Hackathon del evento digital más grande del año 2023 en Barcelona: <strong>"Jump2Digital"</strong>, y conoce también las decisiones de diseño y de desarrollo de esta SPA.',
    }
  },

  template: Template.template1,

  projectContent: {
    hero: require('@/assets/images/projects/rickMorty/hero.png'),

    tags: [
      Tag.SPA,
      Tag.Vue,
      Tag.Pinia,
      Tag.CompositionAPI,
      Tag.TypeScript,
      Tag.HTTP,
      Tag.Hackaton,
    ],

    description_1: {
      title: "Authors",
      text: "Julio César",
      highlight_text: "<strong>Hackaton.</strong> Proyecto desarrollado para la Hackaton de Jump2Digital Barcelona 2023. Con este proyecto me presenté, concursante, a la mayor competencia digital anual de Barcelona. ¿Te gustaría saber como planteé el proyecto? Sigue leyendo."
    },

    multimedia_1: {
      video: 'https://www.youtube.com/embed/zKDtTmTZLfg?si=pvRKtg9Kg7ZREFVl',
    },

    description_2: {
      title: "Planteamiento del problema",
      text: `
      La premisa era sencilla: Consumir de una API pública y desarrollar un proyecto de FrontEnd (una galería de tarjetas de la famosa serie Rick and Morty), haciendo uso de las mejores prácticas de programación, SOLID, clean code y clean architecture.<br><br>

      El proyecto, era de diseño libre y debería estar desarrollado para todas las plataformas: tanto Móvil, como Tablet y ordenador de escritorio.`,
      highlight_text: "La Jump2Digital Barcelona es el mayor evento para desarrolladores y gente afín al sector de la tecnología en Barcelona. Divulgadores, desarrolladores e interesados en el mundo del IT forman parte de un día entero dedicado al sector de la tecnología y la innovación y uno de sus eventos principales, como no es: “La Hackaton.”"
    },

    
    multimedia_2: {
      singleImage: require('@/assets/images/projects/rickMorty/mockups.png')
    },

    description_3: {
      highlight_text: "Desarrollo del proyecto (SPA)",
      text: `
      ¡Vite + Vue3 +Pinia + Typescript, serían las tecnologías escogidas para este concurso! Siendo este mi Stack favorito a la hora de desarrollar SPAs (Single Page Aplications). Dado que este, me permite plantear una arquitectura libre, la cual me permite a su vez un despliegue de toda mi maestría técnica.
      <br><br>
      La arquitectura planteada para este proyecto tiene por CORE, el CHARACTERS STORE, el cual sirve de controlador y modelo de la entidad CHARACTER (del Backend), y está constantemente escuchando los cambios de estado de los datos servidos por la API, para luego entregarlo a sus vistas.
      <br><br>
      De esta manera, todas las vistas y sus componentes pueden interactuar con el controlador y actualizar el modelo, haciéndolo así un producto altamente interactivo, gracias a la potencia de JavaScript.
      `,
    },

    multimedia_3: {
      singleImage: require('@/assets/images/projects/rickMorty/architecture.jpg')
    },

    outcome: {
      title: "Resultado",
      text: `
      El resultado es esta pequeña SPA (Single Page Aplication), la cual, desgraciadamente, no quedó entre los 100 mejores proyectos.
      <br><br>
      Pese a todo, la experiencia me sirvió para evolucionar y comprender que aún tengo mucho margen de mejora, como desarrollador y futuro arquitecto de software. Contrario a desanimarme, la experiencia me ha motivado a seguir participando de estos concursos, leer más libros, entender mejores y diferentes arquitecturas de Software y sobre todo, seguir disfrutando de este proceso, llamado desarrollo de un producto digital.
      <br><br>
      Gracias.
      `
    }

  },

}