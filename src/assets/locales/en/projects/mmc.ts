import { IProject } from "@/interfaces/project-interface/IProject.interface"
import { Tag } from '@/interfaces/project-interface/tags.enum';
import Template from "@/interfaces/Templates.type"

export const mmc: IProject =  {
  id: 'mmc-backoffice',
  title: 'MMC Backoffice',
  overtitle: 'Purchase Tracking Backoffice - 2023',
  gitUrl: 'https://github.com/JCesar-Developer/mmc-app',

  cardContent: {
    image: require('@/assets/images/mmc-app.jpg'),
    description: {
      title: 'Angular 15 + Bootstrap',
      text: `Control panel for Mobile Media Content company. Role-based functionality: 
      <br/><br/>
      <strong>(Admin): </strong> Manage user accounts and track online sales statistics. 
      <br/> <br/>
      <strong>(User): </strong> Purchase tickets for recreational events through the online platform.`,
    }
  },
  template: Template.template1,

  projectContent: {
    hero: require('@/assets/images/projects/mmc/hero.png'),

    tags: [
      Tag.Angular,
      Tag.RxJS,
      Tag.Bootstrap,
      Tag.TypeScript,
      Tag.WebSockets,
      Tag.HTTP,
    ],
  
    description_1: {
      title: 'Authors',
      highlight_text: '<strong>Technical Test.</strong> Developed for Mobile Media Content, the project involved creating an administration panel that allowed its admin users to have real-time statistical tracking of sales from their salespeople. These salespeople could, in turn, update their sales using the same platform.',
      text: `
        Julio César Asto
      `,
    },
  
    multimedia_1: {
      singleImage: require('@/assets/images/projects/mmc/use-cases.png'),
    },
  
    description_2: {
      title: 'Solution Approach',
      highlight_text: 'To carry out this project, Angular 15 + RxJS was used, applying the modular architecture pattern, where each module of the architecture would be determined by a user role (see use case diagram). Thanks to this implementation, it was relatively easy to implement the following functionalities:',
      text: `
        <ul>
          <li>Login, register, and password recovery system.</li>
          <li>Different interfaces depending on the user role.</li>
          <li>Routing with protection by guards.</li>
          <li>HTTP protocol to send purchases to the database and receive information about previous user purchases.</li>
          <li>WebSockets protocol to receive real-time updates on sales stored in the database.</li>
        </ul>
      `,
    },
  
    multimedia_3: {
      imageOverlay: [
        require('@/assets/images/projects/mmc/page1.jpg'),
        require('@/assets/images/projects/mmc/page2.jpg'),
        require('@/assets/images/projects/mmc/page3.jpg'),
        require('@/assets/images/projects/mmc/page4.jpg'),
      ],
    },
  
    outcome: {
      title: 'Result',
      text: `After fixing some bugs found by the client during the production phase, a perfectly functional application has been obtained according to the client's requirements.<br><br>
  
      Also, the decision to use the Angular framework and a modular architecture makes it easy to understand and read the application. This will significantly reduce technical debt if, in the future, I or future developers decide to implement new functionalities.`,
    }
  }  
}