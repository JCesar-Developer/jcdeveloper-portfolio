import { IProject } from "@/interfaces/project-interface/IProject.interface"
import Template from "@/interfaces/Templates.type"

export const ngMusic: IProject =  {
  id: '3',
  title: 'ng Music Player',
  overtitle: '',

  cardContent: {
    image: require('@/assets/images/ng-music-player.jpg'),
    description: {
      title: 'Angular 13 + Firebase',
      text: 'Aplicación web para escuchar música online. <br/><br/> Cuenta con un reproductor de música, se puede crear una cuenta de usuario para guardar las canciones favoritas y crear listas de reproducción personalizadas.',
    }
  },
  
  template: Template.template1,

  //projectContent: {

  //}
}