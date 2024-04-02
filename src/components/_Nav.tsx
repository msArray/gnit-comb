import { useLocation } from "preact-iso"
import { useEffect, useState } from "preact/hooks"

export default function Nav() {
    const route = useLocation().path

    const [menu, setMenu] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 640) {
                setMenu(false);
            }
        });
    }, []);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <nav className={`fixed top-0 px-4 sm:px-12 w-full ${menu ? "h-24 " : "h-12 "}flex items-center justify-between flex-col bg-white border-b border-b-gray-200 shadow-lg duration-200 overflow-hidden`}>
            <div className={`h-12 w-full flex items-center justify-between`}>
                <a href="/">
                    <h1 className={`text-2xl font-black text-gray-700 whitespace-nowrap`}>
                        岐阜高専 コンピュータ倶楽部
                    </h1>
                </a>
                <div className={`sm:flex hidden gap-12`}>
                    <a href="/intro" className={`underline-offset-2${route == "/intro" && " underline"}`}>
                        部活動紹介
                    </a>
                    {/*<a href="/activity" className={`underline-offset-2${route == "/activity" && " underline"}`}>
                    活動内容
    </a>*/}
                    <a href="/prod" className={`underline-offset-2${route == "/prod" && " underline"}`}>
                        制作物
                    </a>
                </div>
                <button className={`sm:hidden flex items-center justify-center hover:bg-gray-400/25 duration-200`} onClick={handleMenu}>
                    {
                        menu ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
                        )
                    }
                </button>
            </div>
            <div className={`gap-12 flex-grow${menu ? " flex" : " hidden"}`}>
                <a href="/intro" className={`underline-offset-2${route == "/intro" && " underline"}`}>
                    部活動紹介
                </a>
                {/*<a href="/activity" className={`underline-offset-2${route == "/activity" && " underline"}`}>
                    活動内容
    </a>*/}
                <a href="/prod" className={`underline-offset-2${route == "/prod" && " underline"}`}>
                    制作物
                </a>
            </div>
        </nav>
    )
}