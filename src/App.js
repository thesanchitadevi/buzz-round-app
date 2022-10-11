
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Chart from './Components/Chart/Chart';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import FAQ from './Components/FAQ/FAQ';
import Home from './Components/Home/Home';
import QuizDetails from './Components/QuizDetails/QuizDetails';
import Quizs from './Components/Quizs/Quizs';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Quizs></Quizs>
        },
        {
          path: '/quizs',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Quizs></Quizs>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizDetails></QuizDetails>
        },
        {
          path: '/chart',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Chart></Chart>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
