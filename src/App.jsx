import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './routes/Home';
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <BrowserRouter basename="/til/">
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/hello`} element={
          <h1>Hello!!</h1>
        }>
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail />}>
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} >
        </Route>
      </Routes>
      </BrowserRouter>
    </Router>
  );
}

export default App
