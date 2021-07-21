import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

// Pages
import Todo from "./pages/Todo"
import Error from "./pages/Error"

const App = () => {
  return (
    <Router>
      <Switch>
        <Header />
        <Route path="/" exact>
          <Sidebar />
        </Route>
        <Route path="/todo-list">
          <Todo />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
