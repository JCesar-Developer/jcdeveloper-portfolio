import { IProject } from "@/interfaces/project-interface/IProject.interface"
import Template from "@/interfaces/Templates.type"

export const project2: IProject =  {
  id: '2',
  title: 'Portfolio',
  subtitle: '',
  gitUrl: 'https://github.com/JulitoxD/jcdeveloper-portfolio',

  cardContent: {
    image: require('@/assets/images/portfolio.jpg'),
    description: {
      title: 'Vue3 + Bootstrap',
      text: 'Learn about the design and development process of my personal website and the decisions I made to create it.',
    }
  },

  projectContent: {
    template: Template.template1,
  }
}