import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
    const [people, setPeople] = useState(data);
    const [isLoading, setIsLoading] = useState(false);

    const clickHandler = () => {
        setIsLoading(true);
        resetpeople()
    }

    const resetpeople = () => {
        setTimeout(() => {
            setPeople(data);
            setIsLoading(false);
        }, 2000);
    }

    const loadingImage = () => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '53vw', height: '10vh' }}>
            <img src="https://i.gifer.com/ZKZg.gif" alt="Loading" style={{ width: '50px', height: '50px' }} />
        </div>
    );
    return (
    <main>
        <section className='container'>
            {isLoading ? loadingImage() : (people.length > 0 && <h3>{people.length} birthdays today</h3>)}
            <List people={people} />
            <button onClick={() => setPeople([])}>Clear All</button>

            <button onClick={() => clickHandler()}>Reload</button>
        </section>
    </main>
    )
};

export default App;
