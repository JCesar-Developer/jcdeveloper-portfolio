import { IProject } from "@/interfaces/project-interface/IProject.interface"
import { Tag } from '@/interfaces/project-interface/tags.enum';
import Template from "@/interfaces/Templates.type"

export const portfolio: IProject =  {
  id: 'portfolio',
  title: 'Portafolio',
  overtitle: 'Website personal - 2023',
  gitUrl: 'https://github.com/JulitoxD/jcdeveloper-portfolio',
  
  cardContent: {
    image: require('@/assets/images/portfolio.jpg'),
    description: {
      title: 'Figma + Vue3 + Bootstrap',
      text: 'Conoce el proceso de diseño y desarrollo de mi página web personal y las decisiones que tomé para llevarla a cabo.',
    }
  },

  template: Template.template1,

  projectContent: {
    hero: require('@/assets/images/projects/portfolio/hero.png'),

    tags: [
      Tag.Figma,
      Tag.Canva,
      Tag.Vue,
      Tag.Bootstrap,
      Tag.TypeScript,
      Tag.Production,
    ],

    description_1: {
      title: 'Autores',
      text: 'Julio César',
      highlight_text: '¿Cómo plantearías un portafolio que se vea agradable y profesional, donde los protagonistas sean los proyectos en sí mismos, mientras que el desarrollador, únicamente la mano artística que los supo desarrollar?',
    },

    multimedia_1: {
      singleImage: require('@/assets/images/projects/portfolio/solution.jpg'),
    },

    description_2: {
      title: 'Planteamiento',
      text: `
        <ol>
          <li>Proyectos como protagonistas. </li> 
          <li>Demostrar los procesos de diseño y planteamientos de decisiones detrás de diferentes casuísticas de proyectos. </li>
          <li>Audiencia: Negocios y empresas que requieran de un desarrollador web freelancer. </li>
          <li>Exponer el conocimiento técnico y especialidades del desarrollador </li>
          <li>Exponer las motivaciones del desarrollador. </li>
          <li>Facilitar el contacto con el desarrollador. </li>
        </ol>
      `,
      highlight_text: 'Primero que nada, era necesario conocer la audiencia a la que iba dirigida el portafolio, así como tener claros los objetivos que se querían alcanzar con el mismo. Una vez planteadas las diferentes casuísticas, se terminaría determinando cuáles de todas las propuestas demarcarían los objetivos principales del proyecto:',
    },

    multimedia_3: {
      imageGrid: [
        require('@/assets/images/projects/portfolio/process1.png'),
        require('@/assets/images/projects/portfolio/process2.jpg'),
        require('@/assets/images/projects/portfolio/process3.jpg'),
        require('@/assets/images/projects/portfolio/process4.png'),
        require('@/assets/images/projects/portfolio/process5.jpg'),
        require('@/assets/images/projects/portfolio/process6.jpg'),
      ]
    },

    outcome: {
      title: 'Resultado',
      text: `
        Quería desarrollar un portafolio que se distinguiera; sobre todo, por la exposición detallada de mis diferentes proyectos, poniendo énfasis en los arduos procesos de diseño y desarrollo que los caracterizan.
        <br><br>
        El diseño de un proyecto es un proceso extenso, que demanda de la toma de una serie de importantes decisiones relacionadas con el desafío entre una interfaz agradable y la mejor experiencia de usuario posible. Y que, lejos de terminar con la entrega del producto; descubrí que va mutando a lo largo del desarrollo del proyecto.
        <br><br>
        De este modo, tanto el diseño como el desarrollo, son procesos retroalimentativos. El diseño determina el camino producto, y el desarrollo muta el diseño para adaptarlo a las necesidades del software y sus características. Es en este tira y afloja de crecimiento constante, es donde reside la magia de la creación de un producto digital.
        <br><br>
        Con este proyecto, aprendí que el diseño no es un producto estático, y que, pese a sus arduos procesos de toma de decisiones, que un diseño se vea bien en el papel o en Figma, no lo hace necesariamente el mejor producto final y que este, es también propenso a cambio, evolución y mejora. En resumen, me siento muy satisfecho por haber llevado a cabo este proyecto, y por haber aprendido tanto de él.
      `
    }
  }
}