import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/components/Others/Global.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Landing from './pages/Landing/Landing';
import Topbar from './components/Topbar/Topbar';
import { Layout } from 'antd';
import WebFooter from './components/WebFooter/WebFooter';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStore } from './components/Others/StoreContext';
import Authentication from './pages/Authentication/Authentication';
import Catalog from './pages/Catalog/Catalog';
import Product from './pages/Product/Product';

const { Content } = Layout;

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl as HTMLElement);

// window.onresize = () => handleScroll();

root.render(
  <React.StrictMode>
    <GlobalStore>
      <Layout> {/* Header-Content-Footer Layout */}
        <BrowserRouter>
          <Topbar /> {/* Header */}
            <Content>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Authentication state="login" />} />
                <Route path="/register" element={<Authentication state="register" />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/product" element={<Product />} />
                <Route path="/checkout" element={<div>Page not implemented</div>} />
                <Route path="*" element={<div>Page not found</div>} />
              </Routes>
            </Content>
          <WebFooter /> {/* Footer */}
        </BrowserRouter>
      </Layout>
    </GlobalStore>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

