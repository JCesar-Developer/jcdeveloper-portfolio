import { ICard } from "@/interfaces/ICard.interface"

export const cards: ICard[] = [
  {
    id: 1,
    title: 'MMC Backoffice',
    imageUrl: require('@/assets/images/mmc-app.jpg'),
    gitUrl: '',
    description: {
      title: 'Angular 15 + NodeJS + MySQL',
      text: 'Panel de control (BackOffice) para empresa (MMC). Aplicación cuya funcionalidad es brindar control de cuentas de usuarios y seguimiento estadístico de ventas a los administradores de una tienda online de ventas de tickets y entradas a eventos. <br/><br/> Maneja dos perfiles de usuario: <span style="font-weight: bolder;">Administrador & Usuario</span>',
    }
  },
  { 
    id: 2,
    title: 'Portfolio',
    imageUrl: '',
    gitUrl: '',
    description: {
      title: 'Vue3 + Composition API',
      text: 'Conoce el proceso de diseño de mi web personal y las decisiones que tomé para llevarla a cabo.',
    }
  },
  {
    id: 3,
    title: 'ng Music Player',
    imageUrl: '',
    gitUrl: '',
    description: {
      title: 'Angular 13 + Firebase',
      text: 'Aplicación web para escuchar música online. <br/><br/> Cuenta con un reproductor de música, se puede crear una cuenta de usuario para guardar las canciones favoritas y crear listas de reproducción personalizadas.',
    }
  }
]
