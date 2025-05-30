import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './pages/home/Home.tsx';
import CreateVideo from './pages/createVideo/CreateVideo.tsx';
import MyVideo from './pages/myvideo/MyVideo.tsx';
import './index.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'create-video',
        element: <CreateVideo />,
      },
      {
        path: 'my-video',
        element: <MyVideo />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
