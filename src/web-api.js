let latency = 200;
let id = 0;

function getId(){
  return ++id;
}

let contacts = [
  {
    id:getId(),
    firstName:'John',
    lastName:'Tolkien',
    email:'tolkien@inklings.com',
    phoneNumber:'867-5309'
  },
  {
    id:getId(),
    firstName:'Clive',
    lastName:'Lewis',
    email:'lewis@inklings.com',
    phoneNumber:'867-5309'
  },
  {
    id:getId(),
    firstName:'Owen',
    lastName:'Barfield',
    email:'barfield@inklings.com',
    phoneNumber:'867-5309'
  },
  {
    id:getId(),
    firstName:'Charles',
    lastName:'Williams',
    email:'williams@inklings.com',
    phoneNumber:'867-5309'
  },
  {
    id:getId(),
    firstName:'Roger',
    lastName:'Green',
    email:'green@inklings.com',
    phoneNumber:'867-5309'
  }
];

let newsItems = [
        { id: 1, text: "US says China will return underwater drone", link: "http://www.cnn.com/2016/12/17/politics/china-drone-donald-trump/index.html", blurb: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam rerum ea excepturi expedita tenetur assumenda voluptatibus eveniet incidunt dicta nostrum quod?"},
        { id: 2, text: "Minnesota football team ends boycott", link: "http://www.cnn.com/2016/12/17/us/minnesota-gophers-end-football-boycott/index.html", blurb: ""},
        { id: 3, text: "Tsunami alerts canceled following 7.9 earthquake", link: "http://www.cnn.com/2016/12/17/asia/earthquake-papua-new-guinea/index.html", blurb: ""},
        { id: 4, text: "Obama's year-end message: I did it right", link: "http://www.cnn.com/2016/12/16/politics/obama-news-conference-i-did-it-right/index.html", blurb: ""},
        { id: 5, text: "Trump says his supporters were 'violent'", link: "http://www.cnn.com/2016/12/16/politics/donald-trump-supporters-vicious-violent/index.html", blurb: ""},
        { id: 6, text: "If the Electoral College goes rogue", link: "http://www.cnn.com/2016/12/16/politics/clinton-trump-electoral-college/index.html", blurb: ""},
        { id: 7, text: "Trump chooses South Carolina congressman as budget director", link: "http://www.cnn.com/2016/12/16/politics/trump-chooses-south-carolina-congressman-as-budget-director/index.html", blurb: ""},
        { id: 8, text: "Obama calls for doctor after woman falls ill", link: "http://www.cnn.com/videos/politics/2016/12/16/barack-obama-press-conference-medical-issue-sot-nr.cnn", blurb: ""},
        { id: 9, text: "Turkish army: 13 soldiers killed, 55 wounded in bombing", link: "http://www.cnn.com/2016/12/17/europe/turkey-explosion/index.html", blurb: ""},
        { id: 10, text: "State Department ups reward for ISIS leader to $25 million", link: "http://www.cnn.com/2016/12/17/politics/state-department-isis-al-baghdadi-reward/index.html", blurb: ""}
];

let categories = [
        { id: 1, name: "Latest" , parentId: null },
        { id: 2, name: "World" , parentId: null },
        { id: 3, name: "National" , parentId: null },
        { id: 4, name: "Satire" , parentId: null },
        { id: 5, name: "Bilinqual" , parentId: null },
        { id: 6, name: "Political" , parentId: null },
        { id: 7, name: "Lifestyle" , parentId: null },
        { id: 8, name: "Gadget" , parentId: null },
        { id: 9, name: "Sports" , parentId: null },
        { id: 10, name: "Fashion" , parentId: null }
]

export class WebAPI {
  isRequesting = false;
  
  getContactList(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = contacts.map(x =>  { return {
          id:x.id,
          firstName:x.firstName,
          lastName:x.lastName,
          email:x.email
        }});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getContactDetails(id){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = contacts.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  saveContact(contact){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(contact));
        let found = contacts.filter(x => x.id == contact.id)[0];

        if(found){
          let index = contacts.indexOf(found);
          contacts[index] = instance;
        }else{
          instance.id = getId();
          contacts.push(instance);
        }

        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  } 
  
  getNewsItem(id){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = newItems.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  getNewsItems(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = newsItems.map(x =>  { return {
          id:x.id,
          text:x.text,
          link:x.link,
          blurb:x.blurb,
        }});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }
  
  getCategory(id){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = categories.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  getCategories(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = categories.map(x =>  { return {
          id:x.id,
          name:x.name,
          parentId:x.parentId
        }});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }
}
