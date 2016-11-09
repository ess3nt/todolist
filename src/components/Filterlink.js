/**
 * Created by Igor on 04.11.2016.
 */
import React from 'react';
import { Link } from 'react-router';

const Filterlink = ({ filter, children }) => (
    <Link
        to={filter === 'all' ? '' : filter}
        activeStyle={{
            textDecoration: 'none',
            color: 'black'
        }}
    >
        {children}
    </Link>
);

export {Filterlink};