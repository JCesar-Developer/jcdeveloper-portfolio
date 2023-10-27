import { ICard } from "@/interfaces/ICard.interface"

export const cards: ICard[] = [
  {
    id: 1,
    title: 'MMC Backoffice',
    imageUrl: require('@/assets/images/mmc-app.jpg'),
    gitUrl: 'https://github.com/JulitoxD/mmc-app',
    description: {
      title: 'Angular 15 + Bootstrap',
      text: `Panel de control para empresa Mobile Media Content. Funcionalidad por roles: 
      <br/><br/>
      <strong>(Admin): </strong> Gestionar cuentas de usuarios. Y seguimiento estadístico de ventas online. 
      <br/> <br/>
      <strong>(User): </strong> Compra de entradas (tickets) a eventos recreativos a través de su plataforma online.`,
    }
  },
  { 
    id: 2,
    title: 'Portfolio',
    imageUrl: require('@/assets/images/portfolio.jpg'),
    gitUrl: 'https://github.com/JulitoxD/jcdeveloper-portfolio',
    description: {
      title: 'Vue3 + Bootstrap',
      text: 'Conoce el proceso de diseño y desarrollo de mi página web personal y las decisiones que tomé para llevarla a cabo.',
    }
  },
  {
    id: 3,
    title: 'ng Music Player',
    imageUrl: require('@/assets/images/ng-music-player.jpg'),
    gitUrl: 'https://github.com/JulitoxD/ngMusicPlayer',
    description: {
      title: 'Angular 13 + Firebase',
      text: 'Aplicación web para escuchar música online. <br/><br/> Cuenta con un reproductor de música, se puede crear una cuenta de usuario para guardar las canciones favoritas y crear listas de reproducción personalizadas.',
    }
  }
]
