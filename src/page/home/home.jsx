import './home.css';
import Projects from '../projects/projects.jsx';

function home () {
    return (
        <>
        <section id="home" className='home'>
            <h1>angelo</h1>
            <p>i do programming, designing, and art.</p>
        </section>
        <Projects/>
        </>
    )
}

export default home;