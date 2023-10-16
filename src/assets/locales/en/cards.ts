import { ICard } from "@/interfaces/ICard.interface"

export const cards: ICard[] = [
  {
    id: 1,
    title: 'MMC Backoffice',
    imageUrl: require('@/assets/images/mmc-app.jpg'),
    gitUrl: 'https://github.com/JulitoxD/mmc-app',
    description: {
      title: 'Angular 15 + NodeJS + MySQL',
      text: 'Control Panel (BackOffice) for Company (MMC). An application whose functionality is to provide user account control and statistical sales tracking to the administrators of an online store for ticket and event entry sales. <br/><br/> It manages two user profiles: <span style="font-weight: bolder;">Administrator & User</span>',     
    }
  },
  { 
    id: 2,
    title: 'Portfolio',
    imageUrl: require('@/assets/images/portfolio.jpg'),
    gitUrl: '',
    description: {
      title: 'Vue3 + Composition API',
      text: 'Get to know the design process of my personal website and the decisions I made to bring it to life.',
    }
  },
  {
    id: 3,
    title: 'ng Music Player',
    imageUrl: '',
    gitUrl: '',
    description: {
      title: 'Angular 13 + Firebase',
      text: 'Web application for listening to music online. <br/><br/> It features a music player, and you can create a user account to save favorite songs and create personalized playlists.'
    }
  }
]
