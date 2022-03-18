export default function Home() {
    return (
        <>
            {/* <Head>
                <title>My page title</title>
                <meta property="og:title" content="My page title" key="title" />
                <link rel="stylesheet" href="" />
            </Head> */}
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold underline text-left">
                    Hello world!
                </h1>
                <h2 className="text-black bg-primary xxl:bg-info">Primary</h2>


                <div className="flex flex-row space-x-4 font-mono text-white text-sm font-bold leading-6">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">01</div>
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">02</div>
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div>
                </div>
                <div className="flex flex-row space-x-4 font-mono text-white text-sm font-bold leading-6 mt-10 justify-between">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-orange-500 shadow-lg">01</div>
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg">02</div>
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">03</div>
                </div>
            </div>
        </>
    )
}
