import { IAbout } from '@/interfaces/IAbout.interface';

export const about: IAbout = {
  author: 'Julio César Asto Machuca',
  principal_description: 'Saludos, bienvenido a mi perfil. Mi nombre es Julio César Asto Machuca. Soy desarrollador web front-end de camino a convertirme en un desarrollador web full-stack. Y, de la mano de mis tecnologías favoritas: Figma, TypeScript, Angular, NodeJs y Vue, quiero ayudarte con el diseño, desarrollo y evolución de tus páginas web.',
  
  more_description: [
    {
      id: 1,
      title: 'Aprendizaje constante:',
      description: 'Me considero una persona apasionada por la programación de manera muy minuciosa. Constantemente me encuentro a mí mismo, estudiando librerías y/o artículos sobre como funcionan las cosas por debajo del código de programación. Me encanta estudiar la planificación arquitectónica de diferentes proyectos y en un futuro aspiro a tener el conocimiento y la capacidad suficiente para considerarme a mí mismo un arquitecto de software.'
    },
    {
      id: 2,
      title: 'Garantía de calidad:',
      description: 'Como profesional, mi compromiso es entregar aplicaciones de la más alta calidad. Aplicando todo mi conocimiento en principios de diseño de software, como SOLID y Clean Code, lo que garantizarán que tus aplicaciones web sean altamente legibles, testeables y sobre todo escalables.'
    },
    {
      id: 3,
      title: 'Legibilidad y escalabilidad:',
      description: 'Considero que un buen proyecto de front-end, se sostiene de varios pilares esenciales. No basta solo con crear interfaces vistosas y experiencias de usuario divertidas e intuitivas. Mi enfoque se orienta hacia un código que pueda ser accesible, testeable y comprensible para todos los miembros del equipo. Y a ello le dedico mi garantía profesional.'
    },
    {
      id: 4,
      title: 'Pasión y colaboración:',
      description: 'Disfruto genuinamente la oportunidad de aprender y colaborar estrechamente en un equipo de trabajo. Valoro el conocimiento que mis compañeros y colaboradores aportan, ya que lo considero una fuente inagotable de aprendizaje y un trampolín hacia el éxito en los proyectos que emprendemos.'
    }, 
    {
      id: 5,
      title: 'Contact & Links',
      description: `
        julioasto.92@gmail.com
        <br/><br/>
        <a href="https://www.linkedin.com/in/julio-c%C3%A9sar-developer/" target="_blank">🔗 LinkedIn </a>
        <a>| 🔗 Resume </a>
        <a>| 🔗 GitHub </a>
          
      `
    }
  ],

  stack: {
    title: 'Stack de tecnologías',
    table: [
      { 
        subject: 'UI/UX',
        technologies: 'UI/UX Design Basics + Figma + Canva',
      },
      { 
        subject: 'LANGUAGES',
        technologies: 'JavaScript + TypeScript + HTML + EcmaScript 6',
      },
      { 
        subject: 'STYLES',
        technologies: 'CSS, SCSS, Bootstrap, Tailwind',
      },
      { 
        subject: 'CSR / SPA',
        technologies: 'Angular 15, 16 + RxJs || Vue2, Vue3',
      },
      { 
        subject: 'SSR / MPA',
        technologies: 'Angular Universal || Nuxt',
      },
      { 
        subject: 'SSG',
        technologies: 'Actualmente aprendiendo: Astro',
      },
      { 
        subject: 'BACKEND',
        technologies: 'Actualmente aprendiendo: NodeJs + ExpressJs',
      },
      { 
        subject: 'DDBB',
        technologies: 'MySql || Firebase',
      },
    ]
  },

  more_about: {
    title: 'Más sobre mí',
    subjects: [
      {
        id: 1,
        title: 'Libros',
        description: `Me gustan las novelas de misterio y fantacía, soy más bien consumidor de libros pop, más que de alta filosofía, <strong>algunos de los últimos libros que he leido:</strong>
        <ul>
          <li class="t-gray">La llamada de Kthulu, howard philip lovecraft.</li>
          <li class="t-gray">El tunel de Hernesto Sábato.</li>
        </ul>`
      },
      {
        id: 2,
        title: 'Videojuegos',
        description: `Mi vicio favorito y pecado culposo, soy fan de los juegos cooperativos y de rol. Pero últimamente los evito porqué soy capaz de quedarme enganchado a algún juego durante días. <strong>Videojuegos favoritos:</strong>
        <ul>
          <li class="t-gray">Starcraft II - Heart of Swarm, Blizzard Entertainment, 2010.</li>
          <li class="t-gray">Divinity Original Sin II, Larian Studios, 2018</li>
        </ul>
        `
      },
      {
        id: 3,
        title: 'Deporte',
        description: `En mi rato libre, intento ir al gimnasio, sobre todo para combatir el sedentarismo y la falta de movilidad del oficio. Aspiro a poder practicar halterofilia algún día y poder hacer al menos 12 dominadas en un futuro próximo.`
      },
      {
        id: 4,
        title: 'Viajes',
        description: `Siempre que se pueda y halla la oportunidad, me encanta conocer nuevos lugares, nuevas culturas y diferentes formas de ver la vida. Viajar enriquece mi percepción del mundo y de la vida y espero poder seguir haciéndolo hasta el final de mis días. <strong>Últimos destinos:</strong>
        <ul>
          <li class="t-gray">Santiago de compostela. Galicia. España.</li>
          <li class="t-gray">Granada. Andalucia. España.</li>
        </ul>
        `
      },
      {
        id: 5,
        title: 'IA',
        description: `El mundo de la inteligencia artificial me tiene fascinado, y como programador la he recibido de brazos abiertos, estoy al día de las nuevas novedades y muy pronto quiero meterme a fondo a aprender como integrar los servicios de las IA a mis aplicaciones. <strong>Actualmente usando:</strong>
        <ul>
          <li class="t-gray">GitHub Copilot.</li>
          <li class="t-gray">ChatGPT.</li>
          <li class="t-gray">Stable diffusion.</li>
        </ul>
        `
      },
      {
        id: 6,
        title: 'Aprendizajes',
        description: `Trato de estar lo más posible al día con las nuevas tecnologías, desarrollando en mi tiempo libre pequeños proyectos con la perspectiva de experimentar y ver si puedo agregar algunas de estas nuevas tendencias en mi stack de conocimientos. <strong>Actualmente tengo planeado estudiar:</strong>
        <ul>
          <li class="t-gray"><strong class="t-gray">Prioritarios: </strong>NodeJs, NestJs, Astro</li>
          <li class="t-gray"><strong class="t-gray">Secundarios: </strong>MongoDB, Mongoose</li>
          <li class="t-gray"><strong class="t-gray">Terciarios: </strong>Dessing systems para CSS, GraphQL</li>
        </ul>
        `
      },
      {
        id: 7,
        title: 'Arquitectura de software',
        description: `Mi última aspiración como desarrollador de software, es poder estar tan al día con las últimas tecnologías y entender los conceptos detrás del desarrollo de software de tal manera, que pueda denominarme a mí mismo: Arquitecto de Software. <strong>Últimos libros - artículos leidos:</strong>
        <ul>
          <li class="t-gray">
            <a class="t-gray underline" href='https://cleancommit.io/blog/pwa-vs-spa/' target="_blank">PWA vs SPA - Choosing the right architecture.</a> Tim Davidson. Enero del 2023.
          </li>
          <li class="t-gray">
            <a class="t-gray underline" href='https://openaccess.uoc.edu/bitstream/10609/132730/6/dolmoscTFG0621memoria.pdf' target="_blank">Diseño y desarrollo de un SaaS con arquitectura serverless para la gestión del CRUD de negocios Online.</a> David Olmos Cubells. Junio del 2021.
          </li>
        </ul>
        `
      }
    ]
  }
}