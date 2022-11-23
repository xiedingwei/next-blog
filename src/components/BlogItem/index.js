import React from 'react'
import Link from 'next/link'
export default function BlogItem(props) {
  return (
    <div className='mb-8 w-full rounded-md border border-gray-300 bg-white transform hover:-translate-y-1 hover:scale-102  transition duration-100 hover:shadow-md ease-in-out'
    >
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
                <svg t="1668922850864" className="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="10791" width="16" height="16">
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" p-id="10792"></path>
                  <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" p-id="10793"></path>
                </svg>
                {props.data.readTime} read

              </div>
              <div className="flex items-center gap-1">
                <svg t="1668922811549" className="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="9707" width="16" height="16">
                  <path d="M512.002844 249.457778c189.155556 0 361.415111 183.751111 427.207112 262.542222-65.792 78.791111-238.051556 262.542222-427.207112 262.542222S150.587733 590.791111 84.795733 512C150.587733 433.208889 322.847289 249.457778 512.002844 249.457778zM512.002844 170.666667C277.279289 170.666667 78.395733 394.638222 11.323733 479.715556a51.683556 51.683556 0 0 0 0 64.568888C78.395733 629.361778 277.279289 853.333333 512.002844 853.333333s433.607111-223.971556 500.679112-309.048889a51.683556 51.683556 0 0 0 0-64.568888C945.609956 394.638222 746.7264 170.666667 512.002844 170.666667z m0 262.542222c42.410667 0 76.8 35.271111 76.8 78.791111s-34.389333 78.791111-76.8 78.791111-76.8-35.271111-76.8-78.791111 34.389333-78.791111 76.8-78.791111z m0-78.734222c-62.122667 0-118.129778 38.371556-141.880888 97.251555-23.779556 58.88-10.638222 126.606222 33.28 171.662222a150.755556 150.755556 0 0 0 167.367111 34.133334C628.169956 633.173333 665.602844 575.715556 665.602844 512c0-87.011556-68.750222-157.525333-153.571555-157.525333z" p-id="9708"></path>
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
    </div>
  )
}
