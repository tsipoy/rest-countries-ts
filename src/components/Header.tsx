import React from 'react';

type Props = {
    title: string;
}

const Header = ({ title = "Hello"}: Props) => {

    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Header

