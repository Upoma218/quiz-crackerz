import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Topics from './Components/Topics/Topics';
import Blogs from './Components/Blogs/Blogs';
import ErrorPage from './ErrorPage/ErrorPage';
import Main from './layout/Main';
import Quizzes from './Components/Quizes/Quizzes';
import Quiz from './Components/Quiz/Quiz';
import Statistics from './Components/Statistics/Statistics';

<layout></layout>;



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children: [
        {
          path: '/',
          loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/quiz/:quizId',
          loader:async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quizzes></Quizzes>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
       

      ],
      
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>
    }

  ])
     
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
