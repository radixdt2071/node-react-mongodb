import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import LoginForm from "./pages/LoginForm";
import TaskList from './pages/TaskList';
import TaskForm from './pages/TaskForm';
import RegisterForm from "./pages/RegisterForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="*" element={<NoPage />} />
          <Route path="tasks" element={<TaskList />}>
            <Route path="create" element={<TaskForm />} />
            <Route path="edit/:id" element={<TaskForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
