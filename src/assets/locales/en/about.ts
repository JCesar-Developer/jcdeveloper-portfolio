import { IAbout } from '@/interfaces/IAbout.interface';

export const about: IAbout = {
  author: 'Julio César Asto Machuca',
  principal_description: 'Greetings, welcome to my profile. My name is Julio César Asto. I am a front-end web developer with one year of experience, and I have worked on dozens of projects that attest to and ensure the quality of my web products. I want to assist you with the design, development, evolution, and maintenance of your web applications.',
  
  more_description: [
    {
      id: 0,
      title: 'Quality Assurance:',
      description: 'My professional commitment is to deliver high-quality applications, ensuring a unique and attractive interface design, along with user-friendly interactivity. Furthermore, by applying software design principles like SOLID and Clean Code, I will ensure that your web applications are readable, testable, and scalable.'
    },
    {
      id: 1,
      title: 'Readability and Scalability:',
      description: `Quality front-end projects are built on multiple essential pillars. It's not just about creating attractive interfaces and fun user experiences. My focus is on developing code that is accessible, testable, and understandable for the entire team.`
    },
    {
      id: 2,
      title: 'Continuous Learning:',
      description: 'I am passionate about programming and always study libraries and articles on how software works at a deep level. I enjoy analyzing project architectures and aspire to become a software architect in the future.'
    },
    {
      id: 3,
      title: 'Passion and Collaboration:',
      description: `I enjoy learning and closely collaborating in work teams. I value my colleagues' knowledge as a constant source of learning and use it as a driving force for the success of our projects.`
    }, 
    {
      id: 4,
      title: 'Contact & Links',
      description: `
        julioasto.92@gmail.com
        <br/><br/>
        <a href="https://www.linkedin.com/in/julio-c%C3%A9sar-developer/" target="_blank">🔗 LinkedIn </a>|
        <a href="https://drive.google.com/file/d/1XVz6LfjzG2i1B-d_bHLOfHg1m8geF8CP/view?usp=drive_link" target="_blank"> 🔗 Resume </a>|
        <a href="https://github.com/JCesar-Developer" target="_blank"> 🔗 GitHub </a>
      `
    }
  ],

  stack: {
    title: 'Technology Stack',
    table: [
      { 
        subject: 'UI/UX',
        technologies: 'Focus on UI/UX + Figma + Canva',
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
        technologies: 'Currently learning: Astro',
      },
      { 
        subject: 'BACKEND',
        technologies: 'Currently learning: NodeJs + ExpressJs',
      },
      { 
        subject: 'DDBB',
        technologies: 'MySql || Firebase',
      },
    ]
  },

  more_about: {
    title: 'More About Me',
    subjects: [
      {
        id: 1,
        title: 'Books',
        description: `I enjoy mystery and fantasy novels, and I'm more of a consumer of novels and science fiction than high philosophy. <strong>Some of the recent books I've read:</strong>
        <ul>
          <li class="t-gray">The Call of Cthulhu, H.P. Lovecraft, 1928.</li>
          <li class="t-gray">The Tunnel, Ernesto Sabato, 1948.</li>
        </ul>
        `
      },
      {
        id: 2,
        title: 'Video Games',
        description: `My favorite vice is video games, and I'm a fan of cooperative and role-playing games. Although lately, I avoid them because I can get hooked on one of those parallel universes for days. <strong>Recent favorite video games:</strong>
        <ul>
          <li class="t-gray">Starcraft II - Heart of Swarm, Blizzard Entertainment, 2010.</li>
          <li class="t-gray">Divinity Original Sin II, Larian Studios, 2018.</li>
        </ul>
        `
      },
      {
        id: 3,
        title: 'Sports',
        description: `In my free time, I try to go to the gym, mainly to combat sedentary habits and the lack of mobility in my profession. I aspire to be able to practice weightlifting one day and be able to do at least 12 pull-ups in the near future.
        `
      },
      {
        id: 4,
        title: 'Travel',
        description: `Whenever possible and the opportunity arises, I love to explore new places, cultures, and different ways of perceiving life. Travel enriches my perspective on the world, and I hope to continue doing it for a long time. <strong>Recent destinations:</strong>
        <ul>
          <li class="t-gray">Santiago de Compostela, Galicia, Spain.</li>
          <li class="t-gray">Granada, Andalucia, Spain.</li>
        </ul>
        `
      },
      {
        id: 5,
        title: 'AI',
        description: `The world of artificial intelligence fascinates me, and as a programmer, I've embraced it with open arms. I stay up to date with the latest developments in AI and plan to delve into how to integrate these new services into my applications very soon. <strong>Currently using:</strong>
        <ul>
          <li class="t-gray">GitHub Copilot.</li>
          <li class="t-gray">ChatGPT.</li>
          <li class="t-gray">Stable diffusion.</li>
        </ul>
        `
      },
      {
        id: 6,
        title: 'Learning',
        description: `I strive to stay up to date with the latest technologies in my profession, developing small projects in my free time with the perspective of experimenting and seeing if it's worth adding some of these new technologies to my main stack. <strong>Currently planning to study:</strong>
        <ul>
          <li class="t-gray"><strong class="t-gray">Priority: </strong>NodeJs, NestJs, Astro.</li>
          <li class="t-gray"><strong class="t-gray">Secondary: </strong>MongoDB, Mongoose.</li>
          <li class="t-gray"><strong class="t-gray">Tertiary: </strong>Design systems for CSS, GraphQL.</li>
        </ul>
        `
      },
      {
        id: 7,
        title: 'Software Architecture',
        description: `My latest aspiration as a software developer is to understand the concepts behind software development in such a way that I can call myself a Software Architect. <strong>Recent books and articles read:</strong>
        <ul>
          <li class="t-gray">
            <a class="t-gray underline" href='https://cleancommit.io/blog/pwa-vs-spa/' target="_blank">PWA vs SPA - Choosing the right architecture.</a> Tim Davidson. January 2023.
          </li>
          <li class="t-gray">
            <a class="t-gray underline" href='https://openaccess.uoc.edu/bitstream/10609/132730/6/dolmoscTFG0621memoria.pdf' target="_blank">Design and development of a SaaS with serverless architecture for managing online business CRUD.</a> David Olmos Cubells. June 2021.
          </li>
        </ul>
        `
      }
    ]
  }

}