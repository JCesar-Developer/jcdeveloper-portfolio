import { IProject } from "@/interfaces/project-interface/IProject.interface"
import { Tag } from '@/interfaces/project-interface/tags.enum';
import Template from "@/interfaces/Templates.type"

export const ngMusic: IProject =  {
  id: 'ng-music-player',
  title: 'ng Music Player',
  overtitle: 'Online Music Player - 2022',
  gitUrl: 'https://github.com/JCesar-Developer/ngMusicPlayer',
  
  cardContent: {
    image: require('@/assets/images/ng-music-player.jpg'),
    description: {
      title: 'Angular 13 + Firebase',
      text: 'Online music listening web application. <br/><br/> It features a music player, the ability to create a user account to save favorite songs, and create personalized playlists.',
    }
  },
  template: Template.template1,

  projectContent: {
    hero: require('@/assets/images/projects/ngMusic/hero.png'),

    tags: [
      Tag.Figma,
      Tag.Angular,
      Tag.Firebase,
      Tag.HTTP,
      Tag.DevOps,
      Tag.Trello,
      Tag.Academic,
    ],

    description_1: {
      title: "Authors",
      highlight_text: "<strong>Academic project.</strong> Advised by Paco Gomez Arnal, the final degree project involved developing an online music player. This player would allow us to create our own music albums, store our favorite songs, and edit their information.",
      text: `
      <strong>DevOps:</strong> Julio César Asto <br>
      <strong>UI/UX:</strong> Sergio Ruiz Ramos <br>
      <strong>Front:</strong> Manuel Yerbes Garcia <br>
      <strong>Back:</strong> Kevin Pascual Del Rio`
    },

    multimedia_1: {
      video: 'https://www.youtube.com/embed/mqA-YUZm3Lk?si=7TqOeDmNu3jLmM7t',
    },

    description_2: {
      title: "Problem Statement",
      highlight_text: "The final project was simple in essence but had an additional challenge, which was coordinating 2 separate micro-services (the frontend and the backend) along with 4 developers.",
      text: "Thanks to the esteem and trust of my colleagues, I was responsible for the DevOps function in this project. This involved making all important decisions, such as design choices, selecting libraries and technologies, and most importantly, deciding when to discard ideas and determine which ones would make it to the final product."
    },
    
    multimedia_2: {
      singleImage: require('@/assets/images/projects/ngMusic/studyCases.jpg'),
    },

    description_3: {
      highlight_text: "Design and Development Decisions:",
      text: `
      <ul>
        <li><strong>Design:</strong> The decision was made to develop a desktop-only application, and up to 3 different mockups were presented. The one shown in the images resulted from the final development exploration.</li>
        
        <li><strong>Angular:</strong> We chose Angular for its organized and easily understandable architecture for all team members.</li>
        
        <li><strong>Firebase:</strong> Due to its easy implementation and the fact that the database architecture in collections worked better than a relational database for this project.</li>
        
        <li><strong>Key Decision:</strong> Creating our own music playback library using the power of JavaScript. This decision was made after exploring several libraries, none of which adequately met our requirements.</li>
        </ul>`
    },

    multimedia_3: {
      singleImage: require('@/assets/images/projects/ngMusic/trello.jpg'),
    },

    outcome: {
      title: "Outcome",
      text: `
      I actively participated in this project, both as a developer and as the DevOps for the product. I was actively involved in every part of the project development, exploring and understanding how to distribute responsibilities among my colleagues to achieve small objectives that would integrate into a large application in the long run.<br><br>
      
      As the product leader, I ensured the satisfaction of my team by creating realistic deadlines without losing the ambition to deliver excellent work. This resulted in the best possible outcome: a perfect 10 out of 10 in the final grade, making us one of the most outstanding teams in the course.<br><br>
      
      Finally, none of this would have been possible without the support, participation, and trust of my colleagues. Dedicated to them.`
    }
  }
}