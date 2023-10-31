import { IAbout } from '@/interfaces/IAbout.interface';

export const about: IAbout = {
  author: 'Julio César Asto Machuca',
  principal_description: 'Saludos, bienvenido a mi perfil. Mi nombre es Julio César Asto. Soy desarrollador web front end con un año de experiencia, he trabajado en decenas de proyectos que avalan y garantizan la calidad de mis productos web. Y quiero ayudarte con el diseño, desarrollo, evolución y mantenimiento de tus aplicaciones web.',
  
  more_description: [
    {
      id: 0,
      title: 'Garantía de calidad:',
      description: 'Mi compromiso profesional es entregar aplicaciones de alta calidad, asegurando un diseño de interfaz único y atractivo, junto con una interactividad amigable. Además, mediante la aplicación de principios de diseño de software como SOLID y Clean Code, garantizaré que tus aplicaciones web sean legibles, testeables y escalables.'
    },
    {
      id: 1,
      title: 'Legibilidad y escalabilidad:',
      description: `Un proyecto de front-end de calidad se basa en múltiples pilares esenciales. No se trata solo de crear interfaces atractivas y experiencias de usuario divertidas. Mi enfoque se centra en el desarrollo de un código accesible, testeable y comprensible para todo el equipo.`
    },
    {
      id: 2,
      title: 'Aprendizaje constante:',
      description: 'Soy apasionado por la programación y siempre estudio librerías y artículos sobre cómo funciona el software a nivel profundo. Disfruto analizando la arquitectura de proyectos y aspiro a convertirme en un arquitecto de software en el futuro.'
    },
    {
      id: 3,
      title: 'Pasión y colaboración:',
      description: 'Disfruto aprender y colaborar estrechamente en equipos de trabajo. Valoro el conocimiento de mis compañeros como una fuente constante de aprendizaje y lo uso de impulso para el éxito de nuestros proyectos.'
    }, 
    {
      id: 4,
      title: 'Contact & Links',
      description: `
        julioasto.92@gmail.com
        <br/><br/>
        <a href="https://www.linkedin.com/in/julio-c%C3%A9sar-developer/" target="_blank">🔗 LinkedIn </a>|
        <a href="https://drive.google.com/file/d/1IvkH3H4Wp0ft6NcPJxwCl8wz1OtKWI4p/view?usp=drive_link" target="_blank"> 🔗 Currículum </a>|
        <a href="https://github.com/JCesar-Developer" target="_blank"> 🔗 GitHub </a>
      `
    }
  ],

  stack: {
    title: 'Stack de tecnologías',
    table: [
      { 
        subject: 'UI/UX',
        technologies: 'Enfoque en UI/UX + Figma + Canva',
      },
      { 
        subject: 'LENGUAJES',
        technologies: 'JavaScript + TypeScript + HTML + EcmaScript 6',
      },
      { 
        subject: 'ESTILOS',
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
        description: `Me gustan las novelas de misterio y fantasía, soy más bien consumidor novelas y ciencia ficción, más que de alta filosofía. <strong>Algunos de los últimos libros que he leído:</strong>
        <ul>
          <li class="t-gray">La llamada de Kthulu, H.P. Lovecraft, 1928. </li>
          <li class="t-gray">El tunel, Ernesto Sabato, 1948.</li>
        </ul>`
      },
      {
        id: 2,
        title: 'Videojuegos',
        description: `Mi vicio favorito, soy fan de los videojuegos cooperativos y de rol. Aunque últimamente los evito por qué soy capaz de quedarme enganchado a alguno de esos universos paralelos durante días. <strong>Últimos videojuegos favoritos:</strong>
        <ul>
          <li class="t-gray">Starcraft II - Heart of Swarm, Blizzard Entertainment, 2010.</li>
          <li class="t-gray">Divinity Original Sin II, Larian Studios, 2018</li>
        </ul>
        `
      },
      {
        id: 3,
        title: 'Deporte',
        description: `En mi rato libre, intento ir al gimnasio, sobre todo para combatir el sedentarismo y la poca movilidad del oficio. Aspiro a poder practicar halterofilia algún día y poder hacer al menos 12 dominadas en un futuro próximo.`
      },
      {
        id: 4,
        title: 'Viajes',
        description: `Siempre que se pueda y haya la oportunidad, me encanta conocer lugares, culturas y diferentes formas de percibir la vida. Viajar enriquece mi percepción del mundo y espero poder seguir haciéndolo durante un largo tiempo. <strong>Últimos destinos:</strong>
        <ul>
          <li class="t-gray">Santiago de compostela. Galicia. España.</li>
          <li class="t-gray">Granada. Andalucia. España.</li>
        </ul>
        `
      },
      {
        id: 5,
        title: 'IA',
        description: `El mundo de la inteligencia artificial me tiene fascinado, y como programador la he recibido de brazos abiertos, estoy al día de las últimas novedades en inteligencia artificial y muy pronto quiero meterme a fondo a aprender como integrar estos nuevos servicios a mis aplicaciones. <strong>Actualmente usando:</strong>
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
        description: `Trato de estar siempre al día con las nuevas tecnologías de mi profesión, desarrollando en ratos libres pequeños proyectos con la perspectiva de experimentar y ver si vale la pena agregar algunas de estas nuevas tecnologías en mi stack principal. <strong>Actualmente tengo planeado estudiar:</strong>
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
        description: `Mi última aspiración como desarrollador de software, es poder entender los conceptos detrás del desarrollo de software de tal manera, que pueda autodenominarme a mí mismo: Arquitecto de Software. <strong>Últimos libros - artículos leídos:</strong>
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