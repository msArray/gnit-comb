export default function Intro() {
    return (
        <>
            <section>
                <div className={`mt-24 shadow-md border border-gray-800 p-4 rounded-lg`}>
                    <h2 className={`font-medium text-2xl`}>Q.コンピュータ俱楽部って何をしているの？</h2>
                </div>
                <div className={`mt-4 shadow-md border border-gray-800 p-4 rounded-lg`}>
                    <p className={`text-xl font-bold`}>A.パソコンを使って様々なことに挑戦している部活です</p>
                    <p>
                        コンピュータ俱楽部では、競技プログラミングやプログラミングコンテスト、ゲーム制作など、パソコンを使った様々な活動を行っています。ただ、活動は個人の自由なので、自分の興味のあることを見つけて楽しむことができます。
                    </p>
                    <p>
                        もしやってみたいことがあれば、ぜひ相談してください！新しいことにも積極的に挑戦していきます！
                    </p>
                    <p className={`my-1 text-lg font-medium`}>現在検討中のもの</p>
                    <ul className={`ml-5 list-disc mb-2`}>
                        <li>
                            部内でのゲームコンテスト&#xff08;毎年行っています&#xff09;
                        </li>
                        <li>
                            VOCALOIDを使ってみる
                        </li>
                        <li>
                            Unityを使ったゲーム制作
                        </li>
                    </ul>
                    <p>
                        先輩たちも優しく、分からないことがあれば気軽に聞くことができます。また、部活動の中で友達を作ることもできるので、一緒に楽しく活動していきましょう！
                    </p>
                </div>
            </section>
            <section>
                <div className={`mt-24 shadow-md border border-gray-800 p-4 rounded-lg`}>
                    <h2 className={`font-medium text-2xl`}>Q.どんなイベントがありますか？</h2>
                </div>
                <div className={`mt-4 shadow-md border border-gray-800 p-4 rounded-lg`}>
                    <p className={`text-xl font-bold`}>A.毎年行っているスケジュールや昨年行ったことを時系列で紹介します！</p>
                    <ul className={`my-4`}>
                        <li>
                            <p className={`text-lg font-semibold`}>4月:ゲーム制作講座</p>
                            <p><a href="https://p5js.org/" className={`text-sky-600 underline`}>p5.js</a>というものを使って簡単なゲームを作りプログラミングとはどういうものかを知るところから始めます。</p>
                        </li>
                        <li>
                            <p className={`text-lg font-semibold`}>5~7月:競技プログラミング</p>
                            <p><a href="https://atcoder.jp/" className={`text-sky-600 underline`}>atcoder</a>を使ってより複雑なプログラミングに慣れていきます。9月ぐらいにある高専プロコンに向けて練習したりします。</p>
                        </li>
                        <li>
                            <p className={`text-lg font-semibold`}>8月:部活なし</p>
                            <p>学校が休みなため部活動はありませんが、コンテストに参加したりする場合は学校に集まったりもしてたらしい&#xff08;コロナ前の話&#xff09;</p>
                            <p>夏休み明けにゲームコンテストを行ったりした年もあります。そういったものに向けて個人で練習したりします。</p>
                        </li>
                        <li>
                            <p className={`text-lg font-semibold`}>9月:高専プロコン</p>
                            <p>高専プロコンに向けて練習を重ね、本番に挑みます。シアトル研修と被って出られないこともあります。</p>
                        </li>
                        <li>
                            <p className={`text-lg font-semibold`}>10月:ゲームコンテスト & 高専祭</p>
                            <p>部内でゲームを作り、それの評価を競い合うコンテストを行います。景品も出ます！</p>
                            <p>また、そのコンテストで作った作品を高専祭に出したりもします。今年はどんな作品が生まれるのか楽しみです！</p>
                        </li>
                        <li>
                            <p className={`text-lg font-semibold`}>11~月:???</p>
                            <p>忙しくなってきたりして、「これだ！」といった目立った活動はありませんがゲームコンテストだったりプログラミング講座を行ったりします。</p>
                        </li>
                    </ul>
                    <p>
                        また昨年はバーベキューや年間打ち上げなども行いました！
                    </p>
                    <p>
                        今年はどんなイベントがあるのか、楽しみにしていてください！
                    </p>
                </div>
            </section>
        </>
    )
}