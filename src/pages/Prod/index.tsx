export default function Prod() {
    const ProductionList = [
        { author: "mas122005,msArray", link: "https://github.com/msArray/DanmakuCat", title: "DanmakuCat", category: "リズムゲーム" },
        { author: "he3", link: "", title: "PixelShooter", category: "シューティングゲーム" },
    ]
    return (
        <>
            {
                ProductionList.map((production, index) => (
                    <>
                        <div className={`${index == 0 ? "mt-24" : "mt-8"} w-full flex flex-col border border-gray-700 p-4 rounded-md`}>
                            <a href={production.link} className={`text-xl font-medium underline underline-offset-2`}>{production.title}</a>
                            <p className={`text-gray-500 flex`}>制作者:{production.author}</p>
                            <p className={`text-gray-500 flex`}>カテゴリー:{production.category}</p>
                        </div>
                    </>
                ))
            }
        </>
    )
}