import { ICard } from "@/interfaces/ICard.interface"

export const cards: ICard[] = [
  {
    id: 1,
    title: 'MMC Backoffice',
    imageUrl: require('@/assets/images/mmc-app.jpg'),
    gitUrl: 'https://github.com/JulitoxD/mmc-app',
    description: {
      title: 'Angular 15 + Bootstrap',
      text: `Control panel for Mobile Media Content company. Role-based functionality: 
      <br/><br/>
      <strong>(Admin): </strong> Manage user accounts and track online sales statistics. 
      <br/> <br/>
      <strong>(User): </strong> Purchase tickets for recreational events through the online platform.`,
    }
  },
  { 
    id: 2,
    title: 'Portfolio',
    imageUrl: require('@/assets/images/portfolio.jpg'),
    gitUrl: 'https://github.com/JulitoxD/jcdeveloper-portfolio',
    description: {
      title: 'Vue3 + Bootstrap',
      text: 'Learn about the design and development process of my personal website and the decisions I made to create it.',
    }
  },
  {
    id: 3,
    title: 'ng Music Player',
    imageUrl: require('@/assets/images/ng-music-player.jpg'),
    gitUrl: 'https://github.com/JulitoxD/ngMusicPlayer',
    description: {
      title: 'Angular 13 + Firebase',
      text: 'Online music listening web application. <br/><br/> It features a music player, the ability to create a user account to save favorite songs, and create personalized playlists.',
    }
  }
]
