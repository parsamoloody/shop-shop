import '@/globalCss'
import Link from 'next/link';
const NotFound = () => {
    return (
        <>
            {/* <Suspense fallback={<h2>Loading...</h2>}>
            <Header />
        </Suspense> */}
            <div className="flex-row items-center justify-center my-44 px-3">
                <h1 className="text-5xl text-center font-bold dark:text-white">404 - Page Not Found</h1>
                <p className='text-center mt-13 dark:text-gray-400'>Your visited page not found. You may go home page.</p>
                <Link className='mx-auto mt-5 flex justify-center bg-secondary text-white h-10 px-4 py-2 w-40' href="/">GO HOME</Link>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default NotFound
