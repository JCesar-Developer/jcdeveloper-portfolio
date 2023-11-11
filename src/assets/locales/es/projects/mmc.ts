import { IProject } from "@/interfaces/project-interface/IProject.interface"
import Template from "@/interfaces/Templates.type"

export const mmc: IProject =  {
  id: '1',
  title: 'MMC Backoffice',
  overtitle: '',

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

  //projectContent: {
  //}
}