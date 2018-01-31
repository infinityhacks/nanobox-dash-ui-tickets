export default class Shim {

  constructor() {
    this.count = 1
    this.data  = {
      userEmail    : 'contact@parslee.com',
      tickets      : this.getTicketList(),
      activeTicket : null,
      apps         : this.getAppList(),
      users        : this.getUsers()
    }
    this.activeTicket = this.getFullTicket()
  }

  resetTickets() {
    this.data.tickets = this.getTicketList()
  }

  addTicketToList(){
    this.data.tickets.push( this.getAbrevTicket() )
  }

  getData() {
    return {
      userEmail : 'mark@parslee.com',
      tickets   : this.getTicketList(),
      apps      : this.getAppList()
    }
  }

  getTicketList() {
    return [
      this.getAbrevTicket()
    ]
  }

  getAbrevTicket() {
    return {
      id:`01938417`,
      title:'Test Ticket',
      status:'open',
      summary:'Summary of the ticket '
    }
  }

  getFullTicket() {
    return {
      id       : '01938417',
      status   : 'closed',
      title    : 'Problem deploying to digital ocean',
      category : 'app',
      app      : {id:'a', name:'meek-mouse'},
      comments : [
        this.getMessage(),
        this.getMessage(),
        this.getMessage(),
        this.getMessage()
      ]
    }
  }

  getMessage() {
    let person = this.getRandomPerson()
    return {
      text    : this.getRandomMessage(),
      user    : person.user,
      email   : person.email,
      isAdmin : person.isAdmin,
      time    : 1505937191063
    }
  }

  getAppList() {
    return[
      {id:"a", name:' lovely-lemming'},
      {id:"b", name:' sneaky-snake'},
      {id:"c", name:' meek-mouse'},
      {id:"d", name:' daring-devonshire'}
    ]
  }

  printData() {
    console.log(JSON.stringify(this.data, null, 2))
  }

  getRandomMessage() {
    let comments = [
      "Hello, I need some help with my app, it's not connecting to the database as I expected it should.. Does that make sense?",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Got it, thanks!"
    ]
    let randomNum = Math.floor(Math.random() * comments.length)
    return comments[randomNum]
  }

  getUsers() {
    return [
      {user : "johnny-appleseed", email:"contact@parslee.com", isAdmin:true},
      {user : "xanthisefort",     email:"jackson@gmail.com"},
      {user : "keezubun",         email:"michael101@gmail.com"},
      {user : "sanderson",        email:"scott@nanobox.io", isAdmin:true},
    ]
  }

  getRandomPerson(){
    let people = this.getUsers()
    let randomNum = Math.floor(Math.random() * people.length)
    return people[randomNum]
  }

  // Callback that simulates adding the latest comment to the ticket
  addCommentToTicket(message) {
    this.activeTicket.comments.push( {
        text    : message,
        user    : 'tolmark12',
        email   : this.data.userEmail,
        isAdmin : true,
        time    : new Date().getTime()
    } )
  }

}
