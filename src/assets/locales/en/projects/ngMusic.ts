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
      text: 'Online music listening web application. <br/><br/> It features a music player, the ability to create a user account to save favorite songs, and create personalized playlists.',
    }
  },
  template: Template.template1,

//  projectContent: {
//  }
}