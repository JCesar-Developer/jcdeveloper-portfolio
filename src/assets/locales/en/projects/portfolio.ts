import { IProject } from "@/interfaces/project-interface/IProject.interface"
import Template from "@/interfaces/Templates.type"

export const portfolio: IProject =  {
  id: '2',
  title: 'Portfolio',
  overtitle: 'Personal Website - 2023',
  gitUrl: 'https://github.com/JulitoxD/jcdeveloper-portfolio',
  
  cardContent: {
    image: require('@/assets/images/portfolio.jpg'),
    description: {
      title: 'Figma + Vue3 + Bootstrap',
      text: 'Explore the design and development process of my personal website and the decisions I made to bring it to life.',
    }
  },

  template: Template.template1,

  projectContent: {
    hero: require('@/assets/images/projects/portfolio/hero.png'),
    description_1: {
      title: "Authors",
      text: "Julio César",
      highlight_text: "How would you design a portfolio that looks pleasant and professional, where the projects themselves take center stage, while the developer is only the artistic hand that brought them to life?"
    },
    multimedia_1: {
      singleImage: require('@/assets/images/projects/portfolio/solution.jpg')
    },
    description_2: {
      title: "Approach",
      text: `
        <ol>
          <li>Projects as protagonists.</li>
          <li>Demonstrate the design processes and decision-making approaches behind different project scenarios.</li>
          <li>Audience: Businesses and companies in need of a freelance web developer.</li>
          <li>Showcase the technical knowledge and specialties of the developer.</li>
          <li>Reveal the motivations of the developer.</li>
          <li>Facilitate contact with the developer.</li>
        </ol>
      `,
      highlight_text: "First and foremost, it was necessary to know the target audience for the portfolio, as well as to have clear objectives for it. Once the different scenarios were outlined, it would be determined which proposals would mark the main objectives of the project:"
    },
    multimedia_2: {
      imageGrid: [
        require('@/assets/images/projects/portfolio/process1.png'),
        require('@/assets/images/projects/portfolio/process2.jpg'),
        require('@/assets/images/projects/portfolio/process3.jpg'),
        require('@/assets/images/projects/portfolio/process4.png'),
        require('@/assets/images/projects/portfolio/process5.jpg'),
        require('@/assets/images/projects/portfolio/process6.jpg')
      ]
    },
    outcome: {
      title: "Result",
      text: `
        I wanted to develop a portfolio that stood out, especially for the detailed exposure of my different projects, emphasizing the challenging design and development processes that characterize them.
        <br><br>
        The design of a project is an extensive process that requires making a series of important decisions related to the balance between a pleasant interface and the best possible user experience. And, far from ending with the product delivery; I discovered that it evolves throughout the project's development.
        <br><br>
        Thus, both design and development are iterative processes. Design sets the product path, and development modifies the design to adapt it to the software's needs and features. It is in this constant give-and-take of continuous growth that the magic of creating a digital product resides.
        <br><br>
        With this project, I learned that design is not a static product, and despite its challenging decision-making processes, a design looking good on paper or in Figma doesn't necessarily make it the best final product. It is also prone to change, evolution, and improvement. In summary, I am very satisfied to have carried out this project and to have learned so much from it.
      `
    }
  }
}
