import { useLocation } from 'preact-iso';
import { useEffect, useState } from 'preact/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const route = useLocation().path;

  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) {
        setMenu(false);
      }
    });
  }, []);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav
      className={`fixed top-0 px-4 sm:px-12 w-full ${menu ? 'h-24 ' : 'h-12 '}flex items-center justify-between flex-col bg-white border-b border-b-gray-200 shadow-lg duration-200 overflow-hidden`}
    >
      <div className={`h-12 w-full flex items-center justify-between`}>
        <a href="/">
          <h1 className={`text-2xl font-black text-gray-700 whitespace-nowrap`}>
            岐阜高専 コンピュータ倶楽部
          </h1>
        </a>
        <div className={`sm:flex hidden gap-12`}>
          <a
            href="/intro"
            className={`underline-offset-2${route == '/intro' && ' underline'}`}
          >
            部活動紹介
          </a>
          {/*<a href="/activity" className={`underline-offset-2${route == "/activity" && " underline"}`}>
                    活動内容
    </a>*/}
          <a
            href="/prod"
            className={`underline-offset-2${route == '/prod' && ' underline'}`}
          >
            制作物
          </a>
        </div>
        <button
          className={`sm:hidden flex items-center justify-center hover:bg-gray-400/25 duration-200 p-1 rounded-sm`}
          onClick={handleMenu}
        >
          {menu ? (
            <FontAwesomeIcon icon={faTimes} className='w-6 h-6' />
          ) : (
            <FontAwesomeIcon icon={faBars} className='w-6 h-6' />
          )}
        </button>
      </div>
      <div className={`gap-12 flex-grow${menu ? ' flex' : ' hidden'}`}>
        <a
          href="/intro"
          className={`underline-offset-2${route == '/intro' && ' underline'}`}
        >
          部活動紹介
        </a>
        {/*<a href="/activity" className={`underline-offset-2${route == "/activity" && " underline"}`}>
                    活動内容
    </a>*/}
        <a
          href="/prod"
          className={`underline-offset-2${route == '/prod' && ' underline'}`}
        >
          制作物
        </a>
      </div>
    </nav>
  );
}
