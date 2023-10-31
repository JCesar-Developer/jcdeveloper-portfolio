import { IProject } from "@/interfaces/project-interface/IProject.interface"
import Template from "@/interfaces/Templates.type"

export const project2: IProject =  {
  id: '2',
  title: 'Portafolio',
  subtitle: 'Website personal - 2023',
  gitUrl: 'https://github.com/JulitoxD/jcdeveloper-portfolio',

  cardContent: {
    image: require('@/assets/images/portfolio.jpg'),
    description: {
      title: 'Vue3 + Bootstrap',
      text: 'Conoce el proceso de diseño y desarrollo de mi página web personal y las decisiones que tomé para llevarla a cabo.',
    }
  },

  projectContent: {
    template: Template.template1,
    hero: {
      image: 'https://picsum.photos/900/900',
      highlight_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officia sunt inventore quibusdam odio accusamus assumenda aut, incidunt quisquam ducimus et omnis ipsa aperiam eligendi fugiat magni repellendus modi dolorem!',
      authors: {
        title: 'Autores',
        authors: [ 'Julio César', 'Julio César', 'Julio César' ]
      },
      links: {
        title: 'Enlaces',
        links: []
      }
    },
    solution: {
      image: 'https://picsum.photos/650/450',
      title: 'Solución',
      highlight_text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque tempore nemo cumque, repellat in saepe a reiciendis aperiam exercitationem modi est asperiores aliquid atque, impedit voluptates!',
      solution_description: `
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolor ut doloribus fuga placeat animi in illum veniam cumque impedit aspernatur mollitia eaque architecto sed, sapiente error soluta iste dolorum.
      <br><br>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolor ut doloribus fuga placeat animi in illum veniam cumque impedit aspernatur mollitia eaque architecto sed, sapiente error soluta iste dolorum.
      `
    },
    process: [
      'https://picsum.photos/250/300',
      'https://source.unsplash.com/random/250x300',
      'https://source.unsplash.com/random/250x300',
      'https://source.unsplash.com/random/250x300',
      'https://source.unsplash.com/random/250x300',
      'https://source.unsplash.com/random/250x300',
      'https://source.unsplash.com/random/250x300',
      'https://source.unsplash.com/random/250x300',
      'https://picsum.photos/250/300'
    ],
    process_explanation: {
      image: 'https://picsum.photos/900/400',
      highlight_text: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
      explanation: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex error soluta rem voluptas. Quidem necessitatibus numquam sequi fugit iusto culpa? Nulla eaque accusamus optio praesentium laboriosam eum. Voluptatum nemo nobis sint distinctio?
      <br><br>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptate facere natus fugit nulla esse similique neque delectus deserunt magni in, maiores minus accusantium veniam excepturi voluptatem optio distinctio, ratione nesciunt animi sit. Vero libero quaerat enim voluptatum?
      `
    },
    outcome: {
      title: 'Resultado',
      explanation: `
      <p class="p2-r">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus provident quaerat repellat, facilis quod laborum quia quisquam eligendi cum dolores, quis quas error neque fugiat pariatur autem nemo obcaecati.</p>
      <br>
      <p class="p2-r">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus provident quaerat repellat, facilis quod laborum quia quisquam eligendi cum dolores, quis quas error neque fugiat pariatur autem nemo obcaecati.</p>
      <br>
      <p class="p2-r">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus provident quaerat repellat, facilis quod laborum quia quisquam eligendi cum dolores, quis quas error neque fugiat pariatur autem nemo obcaecati.</p>
      <br>
      <p class="p2-r">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus provident quaerat repellat, facilis quod laborum quia quisquam eligendi cum dolores, quis quas error neque fugiat pariatur autem nemo obcaecati.</p>
      `
    }
  }
}