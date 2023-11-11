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
      text: `Control panel for Mobile Media Content company. Role-based functionality: 
      <br/><br/>
      <strong>(Admin): </strong> Manage user accounts and track online sales statistics. 
      <br/> <br/>
      <strong>(User): </strong> Purchase tickets for recreational events through the online platform.`,
    }
  },
  template: Template.template1,

  //projectContent: {
  //}
}