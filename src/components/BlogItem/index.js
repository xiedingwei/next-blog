import React from 'react'
import Link from 'next/link'
// import { lazyload } from 'react-lazyload';
import { useInView } from 'react-intersection-observer';
import Loading from '../Loading';


// @lazyload({
//   height: 200,
//   once: true,
//   offset: 100
// })
export default function BlogItem(props) {
  // const [ref, inView] = useInView({ delay: 1000, threshold: 1, triggerOnce: true, rootMargin: '0px 0px' });

  return (
    <div ref={null} className='mb-8 w-full rounded-md border border-gray-300 dark:bg-[#222222] bg-white transform hover:-translate-y-1 hover:scale-102  transition duration-100 hover:shadow-md ease-in-out'
    >
      {/* {inView ? */}
      <Link href={'/blog/' + props.data.fileName}>
        <div className="flex items-end p-4 mb:flex-col">
          <div style={{ flex: '3' }} className="w-full">
            <h4 className="text-gray-800 dark:text-gray-100 text-lg font-semibold">{props.data.title}</h4>
            <p className="mt-4 mb-2 text-sm text-gray-600 dark:text-gray-300">
              <span className="font-bold text-gray-800 dark:text-gray-100">{props.data.update}</span>
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{props.data.describe}</p>
            <div className="mt-2 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {props.data.readTime} read

              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                - views

              </div>
            </div>
          </div>
          <div style={{ flex: '1' }} className="w-full px-4 py-2 mt-2 flex flex-wrap justify-end gap-y-1 gap-x-2 text-sm text-black dark:text-gray-100">
            <button className="bg-opacity-80 dark:!bg-opacity-60 inline-block rounded-md px-1.5 py-0.5 font-medium transition-colors bg-gray-100 text-gray-700 hover:text-black disabled:bg-gray-200 disabled:text-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-500 focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed" tabIndex="-1">
              {props.data.type}
            </button>
          </div>
        </div>
      </Link>
      {/* : '未出现'} */}
    </div>
  )
}
