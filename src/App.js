// import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import { AuthProvider } from "./hoc/AuthProvider";
// import Layout from "./components/reactrouter/Layout";
// import HomePage from "./components/pages/HomePage";
// import AboutPage from "./components/pages/AboutPage";
// import BlogPage from "./components/pages/BlogPage";
// import SinglePage from "./components/pages/SinglePage";
// import EditPost from "./components/pages/EditPost";
// import CreatePost from "./components/pages/CreatePost";
// import NotFound from "./components/istore/NotFound";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;

{/* <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />}>
              <Route path="contacts" element={<p>Our contacts</p>} />
              <Route path="team" element={<p>Our team</p>} />
            </Route>
            <Route path="about-us" element={<Navigate to="/about" replace />} />
            <Route path="posts" element={<BlogPage />} />
            <Route path="posts/:id" element={<SinglePage />} />
            <Route path="posts/:id/edit" element={<EditPost />} />
            <Route path="posts/new" element={<CreatePost />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider> */}