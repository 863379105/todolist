import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import TodoList from './TodoList';

const root = createRoot(document.getElementById('root'))
root.render(<TodoList />);
