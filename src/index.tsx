import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Landing from './pages/Landing';
import Topbar from './components/Topbar/Topbar';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

const rootEl = document.getElementById('root');

const root = ReactDOM.createRoot(rootEl as HTMLElement);

// window.onresize = () => handleScroll();

root.render(
  <React.StrictMode>
    <Layout>
      <Topbar />
      <Content>
        <Landing></Landing>
      </Content>
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

