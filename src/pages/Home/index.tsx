import { useState } from 'preact/hooks';

export default function Home() {
  const Activities = [
    {
      year: 2018,
      date: '10月14,15',
      contest: '第29回 全国高等専門学校 プログラミングコンテスト 阿南大会',
      link: 'http://www.procon.gr.jp/?page_id=64541',
      result: [
        {
          name: '岐阜高専スイーツ同好会',
          category: '競技部門',
          achievement: '決勝トーナメント進出',
        },
        {
          name: 'ACMM -AI Can Make Movie-',
          category: '課題部門',
          achievement: '敢闘賞',
        },
        {
          name: 'DHS -Drones Help to Survey-',
          category: '自由部門',
          achievement: '敢闘賞',
        },
      ],
    },
    {
      year: 2019,
      date: '10月27,28',
      contest: '第30回 全国高等専門学校 プログラミングコンテスト 都城大会',
      link: 'http://www.procon.gr.jp/?page_id=71201',
      result: [
        {
          name: 'ねこさん同好会',
          category: '競技部門',
          achievement: '本選出場',
        },
        {
          name: 'ぶらり案内板 -周辺探索補助アプリケーション-',
          category: 'パテント審査',
          achievement: '優秀賞',
        },
        {
          name: 'TBM -Trash Box Manager-',
          category: 'パテント審査',
          achievement: '奨励賞',
        },
      ],
    },
    {
      year: 2019,
      date: '11月9,10',
      contest: 'パソコン甲子園 2019',
      link: 'https://web-ext.u-aizu.ac.jp/pc-concours/2019/final/f_finalteam2019.html',
      result: [
        {
          name: 'ねこねこのねこ',
          category: 'プログラミング部門',
          achievement: '本選出場',
        },
      ],
    },
  ];

  const [Activity, setActivity] = useState<string>('later');
  const handleActivityChange = (e: any) => {
    console.log(e.target!.value);
    setActivity(e.target!.value);
  };

  return (
    <>
      <section>
        <div
          className={`mt-24 shadow-md border border-gray-800 p-4 rounded-lg`}
        >
          <h2 className={`font-medium text-2xl`}>入部希望の方へ</h2>
          <p className={`text-gray-400`}>2024-04-02更新</p>
        </div>
        <div className={`mt-4 shadow-md border border-gray-800 p-4 rounded-lg`}>
          コンピュータ倶楽部では、入部を希望する方をいつでも募集しています！
          <ul className={`ml-5 list-disc`}>
            <li>入部したいけど方法が分からない</li>
            <li>入部を検討しているけど、詳しく話を聞いておきたい</li>
            <li>プログラミングを体験したい</li>
          </ul>
          など、詳細について聞きたい方は下記フォームにて問い合わせください。
          クラブ登録前の期間は体験講座やります！
          なお、例年4月のクラブ登録前の期間は体験講座を実施します！期間中は申し込みなど一切不要なので、ぜひ遊びに来てください！
          <p>&#xff08;活動曜日:毎週月、水曜日 活動時間:17時まで&#xff09;</p>
        </div>
      </section>
      <section>
        <div
          className={`mt-12 shadow-md border border-gray-800 p-4 rounded-lg`}
        >
          <h2 className={`font-medium text-2xl`}>活動内容</h2>
        </div>
        <div className={`mt-4 shadow-md border border-gray-800 p-4 rounded-lg`}>
          <ul className={`list-disc ml-5 text-lg`}>
            <li>
              <p>競技プログラミング</p>
              <ul className={`ml-5 list-[square]`}>
                <li>
                  <a href="https://atcoder.jp">AtCoder</a>
                </li>
                <li>
                  <a href="https://pckoshien.u-aizu.ac.jp/">
                    パソコン甲子園&#xff08;AOJ&#xff09;
                  </a>
                </li>
                <li>
                  <a href="https://www.procon.gr.jp/">高専プロコン</a>
                </li>
              </ul>
            </li>
            <li>
              プログラミングコンテスト
              <ul className={`ml-5 list-[square]`}>
                <li>
                  <a href="https://www.procon.gr.jp/">高専プロコン</a>
                </li>
              </ul>
            </li>
            <li>ゲーム制作</li>
            <li>Web制作</li>
          </ul>
        </div>
      </section>
      <section>
        <div
          className={`mt-12 shadow-md border border-gray-800 p-4 rounded-lg`}
        >
          <h2 className={`font-medium text-2xl`}>活動実績</h2>
        </div>
        <div className={`mt-4 shadow-md border border-gray-800 p-4 rounded-lg`}>
          <select
            className={`m-2 outline-none border border-gray-300 rounded-md`}
            onChange={handleActivityChange}
          >
            <option value="older">過去のものから</option>
            <option value="later" selected>
              最新のものから
            </option>
          </select>
          <hr className={`bg-gray-300 my-2 h-1 w-full rounded-full`} />
          {(Activity == 'later' ? Activities.reverse() : Activities).map(
            (activity, index) => (
              <>
                <div>
                  <a
                    href={activity.link}
                    className={`text-xl font-medium underline underline-offset-2`}
                  >
                    {activity.contest}
                  </a>
                  <p className={`text-gray-500`}>
                    {activity.year}年
                    {activity.date.split(',').map((day, i) => (
                      <>{`${day}日${i !== activity.date.split(':').length ? ',' : ''}`}</>
                    ))}
                  </p>
                  <ul className={`flex flex-col gap-1`}>
                    {activity.result.map((result) => (
                      <li
                        className={`flex flex-row gap-2 items-center justify-start`}
                      >
                        <p className={`text-lg font-medium`}>{result.name}</p>
                        <p
                          className={`bg-gray-500 px-1 py-0.5 rounded-md text-white`}
                        >
                          {result.category}
                        </p>
                        <p
                          className={`bg-amber-600 px-1 py-0.5 rounded-md text-white`}
                        >
                          {result.achievement}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                {index !== Activities.length - 1 && (
                  <hr className={`my-4 border-gray-300`} />
                )}
              </>
            )
          )}
        </div>
      </section>
      <section className={`mt-12`}>
        <div className={`shadow-md border border-gray-800 p-4 rounded-lg`}>
          <h2 className={`font-medium text-2xl`}>活動報告</h2>
          <p>
            2021年度の活動報告はこちらから
            <a href="/activity/2021">閲覧</a>
          </p>
        </div>
      </section>
    </>
  );
}
