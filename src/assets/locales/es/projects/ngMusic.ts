import { IProject } from "@/interfaces/project-interface/IProject.interface"
import { Tag } from '@/interfaces/project-interface/tags.enum';
import Template from "@/interfaces/Templates.type"

export const ngMusic: IProject =  {
  id: 'ng-music-player',
  title: 'ng Music Player',
  overtitle: 'Reproductor de música online - 2022',
  gitUrl: 'https://github.com/JCesar-Developer/ngMusicPlayer',

  cardContent: {
    image: require('@/assets/images/projects/ngMusic/card.jpg'),
    description: {
      title: 'Angular 13 + Firebase + DevOps',
      text: 'Aplicación web para escuchar música online. <br/><br/> Cuenta con un reproductor de música, se puede crear listas de reproducción personalizadas, almacenar tus canciones online y editar los datos de cada una de tus canciones favoritas.',
    }
  },
  
  template: Template.template1,

  projectContent: {
    hero: require('@/assets/images/projects/ngMusic/hero.png'),

    tags: [
      Tag.Figma,
      Tag.Angular,
      Tag.Firebase,
      Tag.JavaScript,
      Tag.HTTP,
      Tag.DevOps,
      Tag.Trello,
      Tag.Academic,
    ],

    description_1: {
      title: 'Autores',
      highlight_text: '<strong>Proyecto académico.</strong> Asesorados por Paco Gomez Arnal, el proyecto final de grado consistía en desarrollar un reproductor de música online. Que nos permitiera construir nuestros propios álbumes de música y almacenar nuestras canciones favoritas, así como también, editar los datos de las mismas.',
      text: `
        <strong>DevOps:</strong> Julio César Asto <br>
        <strong>UI/UX:</strong> Sergio Ruiz Ramos <br>
        <strong>Front:</strong> Manuel Yerbes Garcia <br>
        <strong>Back:</strong> Kevin Pascual Del Rio 
      `,
    },

    multimedia_1: {
      video: 'https://www.youtube.com/embed/mqA-YUZm3Lk?si=7TqOeDmNu3jLmM7t',
    },

    description_2: {
      title: 'Planteamiento del problema',
      highlight_text: `El proyecto final era sencillo en esencia, pero tenía una dificultad extra y esta era coordinar 2 micro-servicios por separado (El frontend y el backend) así como 4 desarrolladores.`,
      text: 'Gracias a la estima y confianza de mis compañeros, en este proyecto me tocó desarrollar la función de DevOps del proyecto, haciéndome cargo de la toma de todas las decisiones importantes del mismo, como por ejemplo, las decisiones de diseño, qué librerías y tecnologías utilizar y finalmente lo más difícil, cuando descartar ideas y decidir cuáles quedan para el producto final.',
    },

    multimedia_2: {
      singleImage: require('@/assets/images/projects/ngMusic/studyCases.jpg'),
    },

    description_3: {
      highlight_text: `Decisiones de diseño y desarrollo:`,
      text: `
      <ul>
        <li><strong>Diseño:</strong> Se tomó la decisión de desarrollar una aplicación únicamente de escritorio y se presentaron hasta 3 mockups diferentes, siendo el mostrado en las imágenes el resultado de la exploración final de desarrollo.
        </li>
        
        <li><strong>Angular:</strong> Debido a que necesitábamos una arquitectura organizada y sencilla de entender por todos los miembros del equipo.
        </li>

        <li><strong>Firebase:</strong> Por su fácil implementación, y por qué la arquitectura de bases de datos en colecciones funcionaba mejor que una base de datos relacional para el presente proyecto.
        </li>

        <li><strong>Decisión importante:</strong> Crear nuestra propia librería de reproducción de música, haciendo uso de la potencia de JavaScript. Debido a que después de explorar varias librerías, ninguna se adaptó adecuadamente a nuestros requerimientos.
        </li>
      </ul>
      `,
    },

    large_multimedia: {
      singleImage: require('@/assets/images/projects/ngMusic/trello.jpg'),
    },

    outcome: {
      title: 'Resultado',
      text: `
      En este proyecto partícipe activamente, tanto como desarrollador, como de DevOps del producto. Involucrándome activamente en cada una de las partes del desarrollo del proyecto, explorando y entendiendo como distribuir las responsabilidades de mis compañeros para, conseguir objetivos pequeños que a largo plazo se integraran en una gran aplicación.<br><br>

      Además, como líder de producto, velé por la satisfacción de mi equipo de trabajo, creando deadlines realistas, sin perder la ambición de presentar un gran trabajo. Consiguiendo así el mejor de los resultados: Un 10 sobre 10 en la calificación final, siendo uno de los equipos más sobresalientes de la asignatura.<br><br>
      
      Finalmente, nada hubiera sido posible sin el apoyo, participación y confianza de mí compañeros. Dedicado a ellos.
      `
    }
  }
}