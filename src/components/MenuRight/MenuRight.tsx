import React, { useState } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
  {
    key: 'sub2',
    label: 'Servicios',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      
    ],
  },
];

const MenuRight: React.FC = () => {
  const [current, setCurrent] = useState('1');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ width: '100%', maxWidth: 356, fontSize: '28px',  fontWeight:500}}
      />
    </div>
  );
};

export default MenuRight;