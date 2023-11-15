import { IProject } from "@/interfaces/project-interface/IProject.interface"
import { Tag } from '@/interfaces/project-interface/tags.enum';
import Template from "@/interfaces/Templates.type"

export const rickAndMorty: IProject = {
  id: 'rick-and-morty',
  title: 'Rick and Morty App',
  overtitle: 'App featuring characters from the successful Rick and Morty series - 2023',
  demoUrl: 'https://jc-rick-and-morty.netlify.app/',
  gitUrl: 'https://github.com/JCesar-Developer/Rick-Morty',

  cardContent: {
    image: require('@/assets/images/projects/rickMorty/card.jpg'),
    description: {
      title: 'Vue 3 + TypeScript + Pinia + CompositionAPI',
      text: 'Get to know the App, with which I participated in the Hackathon of the largest digital event of the year 2023 in Barcelona: <strong>"Jump2Digital"</strong>, and also get to know the design and development decisions of this SPA.',
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
      highlight_text: "<strong>Hackathon.</strong> Project developed for the Jump2Digital Barcelona 2023 Hackathon. With this project, I participated as a contestant in the largest annual digital competition in Barcelona. Would you like to know how I approached the project? Keep reading."
    },
  
    multimedia_1: {
      video: 'https://www.youtube.com/embed/zKDtTmTZLfg?si=pvRKtg9Kg7ZREFVl',
    },
  
    description_2: {
      title: "Problem Statement",
      text: `
      The premise was simple: Consume a public API and develop a FrontEnd project (a gallery of cards from the famous series Rick and Morty), using the best programming practices, SOLID principles, clean code, and clean architecture.<br><br>
  
      The project was open-ended in terms of design and should be developed for all platforms: Mobile, Tablet, and desktop computers.`,
      highlight_text: "Jump2Digital Barcelona is the largest event for developers and tech enthusiasts in Barcelona. Speakers, developers, and those interested in the IT world come together for a full day dedicated to the technology and innovation sector, with one of its main events being the 'Hackathon.'"
    },
  
    multimedia_2: {
      singleImage: require('@/assets/images/projects/rickMorty/mockups.png')
    },
  
    description_3: {
      highlight_text: "Project Development (SPA)",
      text: `
      Vite + Vue3 + Pinia + Typescript were the chosen technologies for this competition! This is my favorite stack when developing Single Page Applications (SPAs) as it allows me to design a flexible architecture, showcasing my technical expertise.
      <br><br>
      The architecture proposed for this project has the CORE, the CHARACTERS STORE, which serves as the controller and model for the CHARACTER entity (from the Backend). It constantly listens to changes in the data state served by the API, then delivers it to the views.
      <br><br>
      This way, all views and their components can interact with the controller and update the model, making it a highly interactive product, thanks to the power of JavaScript.
      `,
    },
  
    multimedia_3: {
      singleImage: require('@/assets/images/projects/rickMorty/architecture.jpg')
    },
  
    outcome: {
      title: "Outcome",
      text: `
      The result is this small Single Page Application (SPA), which unfortunately did not make it among the top 100 projects.
      <br><br>
      Nevertheless, the experience served me to evolve and understand that I still have much room for improvement, both as a developer and a future software architect. Instead of getting discouraged, the experience has motivated me to continue participating in these competitions, read more books, understand better and different software architectures, and above all, continue enjoying this process called the development of a digital product.
      <br><br>
      Thank you.
      `
    }
  },
  

}