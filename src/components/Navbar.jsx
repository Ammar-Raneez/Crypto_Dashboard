import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Menu, Typography, Avatar } from 'antd';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu
          theme="dark"
          items={[
            { label: 'Home', icon: <HomeOutlined />, key: 'home', onClick: () => navigate('/') },
            { label: 'Cryptocurrencies', icon: <FundOutlined />, key: 'cryptocurrencies', onClick: () => navigate('/cryptocurrencies') },
            { label: 'Exchanges', icon: <MoneyCollectOutlined />, key: 'exchanges', onClick: () => navigate('/exchanges') },
            { label: 'News', icon: <BulbOutlined />, key: 'news', onClick: () => navigate('/news') },
          ]}
        />
      )}
    </div>
  );
};

export default Navbar;