# Router Link React router

Made out of frustration with `react-router`, this router library is incredibly easy to use.

### INSTALLATION

`npm i router-link` or `yarn add router-link`

### USAGE

An example application can be found here: [React App Boilerplate with Mobx](https://github.com/fugroup/react-base)

```javascript
// Define your routes in a file called routes.js
import Home from '@/views/Home.js'
import About from '@/views/About.js'
import Login from '@/views/Login.js'
import Chat from '@/views/Chat.js'
import NotFound from '@/views/NotFound.js'

const routes = [
  { path: '/', view: Home },
  { path: '/about', view: About },
  { path: '/login', view: Login },
  { path: '/chat', view: Chat },
  { path: '*', view: NotFound }
]

export default routes


// In your App.js, the top level component
import React, { Component } from 'react'
import { Router } from '@/router-link'
import Navigation from '@/components/Navigation.js'
import routes from './routes.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation/>
        </header>
        <main className="App-main">
          <Router routes={ routes }/>
        </main>
      </div>
    )
  }
}

export default App


// Use the Link to create links for navigation
// They will create a-tags with an active class for styling.
import React, { Component } from 'react'
import { Link } from '@/router-link'
import { store } from '@/store.js'

class Home extends Component {
  render() {
    return (
      <Link to="/login">Log in</Link> to get started!
    )
  }
}

export default Home
```

### NAVIGATION

In your components you can use the `router.push('/path')` to programmatically trigger a route:

```javascript
// Import the router library
import { router } from 'router-link'

// Do this anywhere inside your component to redirect
router.push('/login')
```

### DYNAMIC ROUTES

Define dynamic routes by adding a `:` in front of the sub-path, and get the parameters as props:

```javascript
// Define route with parameters
const routes = [
  { path: '/messages/:id', view: Messages }
]

// Use like this
<Link to={ `/messages/${ message.id }` }>Message</Link>
```

In this case the the `id` will be available as `this.props.route.id` in your component.


### LICENSE

MIT Licensed. Enjoy!
