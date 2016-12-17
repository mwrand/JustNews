import {inject, Behavior} from 'aurelia-framework';
import {WebAPI} from './web-api'


@inject(WebAPI)
export class App {
  constructor(api) {    
    this.api = api
    this.categories = []
    this.newsItems = []
    this.siteName = 'Just News'
  }

  created() {
    this.api.getCategories()
      .then(response => this.setCategories(response))

    this.api.getNewsItems()
        .then(response => this.setNewsItems(response))
  }

  setCategories(response) {
    this.categories = response;
  }

  setNewsItems(response) {
    this.newsItems = response;
  }

}


//export class App {
//  configureRouter(config, router){
//    config.title = 'Contacts';
//    config.map([
//      { route: '',              moduleId: 'no-selection',   title: 'Select'},
//      { route: 'contacts/:id',  moduleId: 'contact-detail', name:'contacts' }
 //   ]);

//    this.router = router;
//  }
//}
