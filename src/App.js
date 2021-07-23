import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Components
import ScrollToTop from "./components/ScrollToTop"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

// Pages
import Todo from "./pages/Todo"
import Error from "./pages/Error"

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Sidebar />
      <Switch>
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
