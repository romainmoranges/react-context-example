import React from 'react';

import { useBackground } from './../ReactiveBackground/context'

const App = () => {
    const { backgroundValue } = useBackground();
    return (
        <p >coucou! la valeur du contexte est {backgroundValue}</p>
    )
}

export default App;