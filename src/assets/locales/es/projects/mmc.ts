import { IProject } from "@/interfaces/project-interface/IProject.interface"
import { Tag } from '@/interfaces/project-interface/tags.enum';
import Template from "@/interfaces/Templates.type"

export const mmc: IProject =  {
  id: 'mmc-backoffice',
  title: 'MMC Backoffice',
  overtitle: 'Backoffice de seguimiento de compras - 2023',
  gitUrl: 'https://github.com/JCesar-Developer/mmc-app',

  cardContent: {
    image: require('@/assets/images/mmc-app.jpg'),
    description: {
      title: 'Angular 15 + Bootstrap',
      text: `Panel de control para empresa Mobile Media Content. Funcionalidad por roles: 
      <br/><br/>
      <strong>(Admin): </strong> Gestionar cuentas de usuarios. Y seguimiento estadístico de ventas online. 
      <br/> <br/>
      <strong>(User): </strong> Compra de entradas (tickets) a eventos recreativos a través de su plataforma online.`,
    }
  },

  template: Template.template1,

  projectContent: {
    hero: require('@/assets/images/projects/mmc/hero.png'),

    tags: [
      Tag.Angular,
      Tag.RxJS,
      Tag.Bootstrap,
      Tag.TypeScript,
      Tag.WebSockets,
      Tag.HTTP,
    ],

    description_1: {
      title: 'Autores',
      highlight_text: '<strong>Prueba técnica.</strong> Desarrollado para Mobile Media Content, el proyecto consistía en desarrollar un panel de administración, que permitiera a sus usuarios administradores tener un seguimiento estadístico real de las ventas de sus comerciales, los mismos que podrían a su vez ir actualizando sus ventas gracias a esta misma plataforma.',
      text: `
        Julio César Asto
      `
    },

    multimedia_1: {
      singleImage: require('@/assets/images/projects/mmc/use-cases.png'),
    },

    description_2: {
      title: 'Planteamiento de la solución',
      highlight_text: 'Para poder llevar a cabo este proyecto, se utilizó Angular 15 + RxJS, aplicando el patrón de arquitectura modular, donde cada módulo de la arquitectura estaría determinado por un rol de usuario (véase diagrama de casos de uso) Gracias a esta implementación, fue relativamente sencillo implementar las siguientes funcionalidades:',
      text: `
        <ul>
          <li>Sistema de login, register y recovery password.</li>
          <li>Diferentes interfaces, dependiendo del rol de usuario.</li>
          <li>Enrutamiento con protección por guards.</li>
          <li>Protocolo HTTP, para emitir compras a la base de datos y recibir información de compras anteriores de los usuarios.</li>
          <li>Protocolo WebSockets, para recibir información en tiempo real de actualizaciones de las ventas almacenadas en la BBDD.</li>
        </ul>
      `
    },

    multimedia_3: {
      imageOverlay: [
        require('@/assets/images/projects/mmc/page1.jpg'),
        require('@/assets/images/projects/mmc/page2.jpg'),
        require('@/assets/images/projects/mmc/page3.jpg'),
        require('@/assets/images/projects/mmc/page4.jpg'),
      ]
    },

    outcome: {
      title: 'Resultado',
      text: `Tras corregir algunos bugs encontrados por el cliente durante la fase de producción, se ha obtenido una aplicación perfectamente funcional, según los requerimientos del cliente.<br><br>

      Así también la decisión de usar el framework de Angular, y una arquitectura modular, hace fácil el entendimiento y lectura de la aplicación. Lo cual disminuirá significativamente la deuda técnica, si en un futuro, yo mismo o futuros desarrolladores decidieran implementar nuevas funcionalidades.`
    }
  }
}