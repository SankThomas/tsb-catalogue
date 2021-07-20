import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import Header from "./components/Header"

// Pages
import Todo from "./pages/Todo"
import Error from "./pages/Error"

const App = () => {
  return (
    <Router>
      <Switch>
        <Header />
        <Route path="/" exact></Route>
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
