import { IAbout } from '@/interfaces/IAbout.interface';

export const about: IAbout = {
  author: 'Julio César Asto Machuca',
  principal_description: 'Greetings, welcome to my profile. My name is Julio César Asto Machuca. I am a front-end web developer on my way to becoming a full-stack web developer. And, with the help of my favorite technologies: Figma, TypeScript, Angular, NodeJs, and Vue, I want to assist you with the design, development, and evolution of your web pages.',
  
  more_description: {
    1: {
      title: 'Continuous Learning:',
      description: 'I consider myself a person passionate about programming in a very meticulous way. I constantly find myself studying libraries and/or articles about how things work beneath the programming code. I love studying the architectural planning of different projects, and in the future, I aspire to have the knowledge and capability to consider myself a software architect.'
    },
    2: {
      title: 'Quality Assurance:',
      description: 'As a professional, my commitment is to deliver applications of the highest quality. Applying all my knowledge in software design principles like SOLID and Clean Code, which will ensure that your web applications are highly readable, testable, and above all, scalable.'
    },
    3: {
      title: 'Readability and Scalability:',
      description: "I believe that a good front-end project relies on several essential pillars. It's not enough to create attractive interfaces and fun, intuitive user experiences. My focus is on code that can be accessible, testable, and understandable for all team members. And that's where I dedicate my professional guarantee."
    },
    4: {
      title: 'Passion and Collaboration:',
      description: 'I genuinely enjoy the opportunity to learn and collaborate closely within a team. I value the knowledge that my colleagues and collaborators bring because I consider it an endless source of learning and a springboard to success in the projects we undertake.'
    },
  },

  stack: {
    title: 'Technology Stack',
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
        technologies: 'Currently learning: Astro',
      },
      { 
        subject: 'BACKEND',
        technologies: 'NodeJs + ExpressJs || NestJs',
      },
      { 
        subject: 'DDBB',
        technologies: 'MySql || Firebase',
      },
    ]
  },

  contact: {
    title: 'Contact',
    list: [ 'julioasto.92@gmail.com' ]
  },

  links: {
    title: 'Links',
    list: [ 
      '🔗 LinkedIn',
      '🔗 Resume',
      '🔗 GitHub'
    ]
  },

  more_about: {
    title: 'More About Me',
    subjects: [
      {
        id: 1,
        title: 'Books',
        description: `I enjoy mystery and fantasy novels. I'm more of a consumer of popular books rather than high philosophy. Some of the latest books I've read include:
        <ul>
          <li class="t-gray">The Call of Cthulhu, Howard Philip Lovecraft.</li>
          <li class="t-gray">The Tunnel by Ernesto Sábato.</li>
        </ul>`
      },
      {
        id: 2,
        title: 'Video Games',
        description: `My favorite vice and guilty pleasure is video games. I'm a fan of cooperative and role-playing games. However, I've been avoiding them lately because I can get hooked on a game for days. Some of my favorite video games are:
        <ul>
          <li class="t-gray">Starcraft II - Heart of the Swarm, Blizzard Entertainment, 2010.</li>
          <li class="t-gray">Divinity Original Sin II, Larian Studios, 2018.</li>
        </ul>
        `
      },
      {
        id: 3,
        title: 'Sports',
        description: `In my free time, I try to go to the gym, mainly to combat the sedentary nature of the job and lack of mobility. I aspire to be able to practice weightlifting someday and do at least 12 pull-ups in the near future.`
      },
      {
        id: 4,
        title: 'Travel',
        description: `Whenever possible and when there's an opportunity, I love to explore new places, cultures, and different perspectives on life. Travel enriches my perception of the world and life, and I hope to keep doing it until the end of my days. Some of my recent destinations include:
        <ul>
          <li class="t-gray">Santiago de Compostela, Galicia, Spain.</li>
          <li class="t-gray">Granada, Andalusia, Spain.</li>
        </ul>
        `
      },
      {
        id: 5,
        title: 'AI',
        description: `The world of artificial intelligence fascinates me, and as a programmer, I have welcomed it with open arms. I stay up to date with the latest developments and plan to delve deep into learning how to integrate AI services into my applications. Currently, I'm using:
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
        description: `I try to stay as up-to-date as possible with new technologies, working on small projects in my free time with the perspective of experimenting and seeing if I can add some of these new trends to my knowledge stack. <strong>Currently, I have plans to study:</strong>
        <ul>
          <li class="t-gray"><strong class="t-gray">Priorities: </strong>NodeJs, NestJs, Astro</li>
          <li class="t-gray"><strong class="t-gray">Secondary: </strong>MongoDB, Mongoose</li>
          <li class="t-gray"><strong class="t-gray">Tertiary: </strong>Design systems for CSS, GraphQL</li>
        </ul>
        `
      },
      {
        id: 7,
        title: 'Software Architecture',
        description: `My ultimate aspiration as a software developer is to stay so up to date with the latest technologies and understand the concepts behind software development in such a way that I can call myself a Software Architect. Some of the latest books and articles I've read include:
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