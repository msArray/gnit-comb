import { render } from 'preact';
import './index.css';
import { LocationProvider, Router, lazy } from 'preact-iso';
import Nav from './components/_Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Intro = lazy(() => import('./pages/Intro'));
const Prod = lazy(() => import('./pages/Prod'));

function App() {
  return (
    <div className={`selection:bg-sky-600/25 selection:text-gray-800`}>
      <LocationProvider>
        <Nav />
        <main
          className={`my-12 mx-auto w-full max-w-screen-lg px-4 text-gray-700 min-h-screen`}
        >
          <Router>
            <Home path="/" />
            <Intro path="/intro" />
            <Prod path="/prod" />
            <NotFound default />
          </Router>
        </main>
      </LocationProvider>
      <section
        className={`mt-12 h-24 w-full bg-gray-600 text-white flex flex-col items-center justify-center`}
      >
        ©2024 岐阜高専 コンピュータ倶楽部
        <div className={`flex gap-2`}>
          <a href="https://github.com/nitgc-comb">
            <FontAwesomeIcon icon={faGithub} size={"1x"} />
          </a>
          <a href="https://twitter.com/nitgc_comb">
            <FontAwesomeIcon icon={faXTwitter} size={"1x"} />
          </a>
        </div>
      </section>
    </div>
  );
}

render(<App />, document.getElementById('app')!);
