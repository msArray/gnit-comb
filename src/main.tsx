import { render } from 'preact'
import './index.css'
import { LocationProvider, Router, lazy } from 'preact-iso'
import Nav from './components/_Nav';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Intro = lazy(() => import('./pages/Intro'));
const Prod = lazy(() => import('./pages/Prod'));

function App() {
    return (
        <div className={`selection:bg-sky-600/25 selection:text-gray-800`}>
            <LocationProvider>
                <Nav />
                <main className={`my-12 mx-auto w-full max-w-screen-lg px-4 text-gray-700 min-h-screen`}>
                    <Router>
                        <Home path="/" />
                        <Intro path="/intro" />
                        <Prod path="/prod" />
                        <NotFound default />
                    </Router>
                </main>
            </LocationProvider>
            <section className={`mt-12 h-24 w-full bg-gray-600 text-white flex items-center justify-center`}>
                ©2024 岐阜高専 コンピュータ倶楽部
            </section>
        </div>
    )
}

render(<App />, document.body)
