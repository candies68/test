import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/base.css';
import { BrowserRouter } from 'react-router-dom';
import { 
  ConfigProvider
} from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import GetRoutes from '@/router';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider
    locale={zhCN}
    theme={{
      token: {
        colorPrimary: '#00b96b'
      }
    }}
  >
    <React.StrictMode>
      <BrowserRouter>
        <GetRoutes></GetRoutes>
      </BrowserRouter>
    </React.StrictMode>
  </ConfigProvider>
  
);

reportWebVitals();
