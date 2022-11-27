import React, { Component } from 'react'
import Layout from "../components/Layout";

export default class Product extends Component {
  static async getInitialProps({ req, pathname, query, asPath }) {
    // const res = await axios.get('http://www.nankezs.cn/common/getCode');
    return { pathname }
  }
  render() {
    return (
      <Layout href={this.props.pathname} theme={this.props.theme} setTheme={this.props.setTheme}>
        <p className="text-[2rem]">Projects</p>
        <p className="mb-[2rem] italic opacity-50">Showcase of my projects on front-end development that I'm proud of.</p>
        <div className='fade-in-start'>
          <h1 className="text-[1.125rem] text-[#555] dark:text-[#aaa]" data-fade="1">Next Ecosystem</h1>
          <ul className="mt-6 grid grid-cols-2 gap-4 mb:grid-cols-none sm:grid-cols-1">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/xiedingwei/next-blog" className="cursor-pointer group h-full p-4 hover:bg-[#88888808]">
              <section className=" flex items-center gap-[24px]">
                <div className="text-[38px] opacity-50 group-hover:opacity-70 dark:group-hover:opacity-80">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <title></title>
                    <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#555] group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-100">next-blog</h4>
                  <p className="mb-auto text-sm text-gray-700 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50">唯美清新的个人博客</p>
                </div>
              </section>
            </a>
          </ul>
        </div>
        <div className='fade-in-start'>
          <h1 className="text-[1.125rem] text-[#555] dark:text-[#aaa]" data-fade="1">Umi-js Ecosystem</h1>
          <ul className="mt-6 grid grid-cols-2 gap-4 mb:grid-cols-none sm:grid-cols-1">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/xiedingwei/umi-admin" className="cursor-pointer group h-full p-4 hover:bg-[#88888808]">
              <section className=" flex items-center gap-[24px]">
                <div className="text-[38px] opacity-50 group-hover:opacity-70 dark:group-hover:opacity-80">
                  <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z" fill="currentColor"></path>
                    <path d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z" fill="currentColor"></path>
                    <path d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#555] group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-100">umi-admin</h4>
                  <p className="mb-auto text-sm text-gray-700 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50">动态后台权限管理系统</p>
                </div>
              </section>
            </a>
          </ul>
        </div>
        <div>
          <h1 className="text-[1.125rem] text-[#555] dark:text-[#aaa]" data-fade="2">React Ecosystem</h1>
          <ul className="mt-6 grid grid-cols-2 gap-4 mb:grid-cols-none sm:grid-cols-1">
            <a target="_blank" rel="noopener noreferrer" href="https://gitee.com/xdw_mayun/radmin" className="cursor-pointer group h-full p-4 hover:bg-[#88888808]">
              <section className=" flex items-center gap-[24px]">
                <div className="text-[38px] opacity-50 group-hover:opacity-70 dark:group-hover:opacity-80">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 19h2c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2h2c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2h-2c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2zM20 7v10h-2V7h2zM8 5h8l.001 14H8V5zM4 7h2v10H4V7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#555] group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-100">radmin</h4>
                  <p className="mb-auto text-sm text-gray-700 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50">基于express+react的后台权限管理系统</p>
                </div>
              </section>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://gitee.com/xdw_mayun/university_student_demo" className="cursor-pointer group h-full p-4 hover:bg-[#88888808]">
              <section className=" flex items-center gap-[24px]">
                <div className="text-[38px] opacity-50 group-hover:opacity-70 dark:group-hover:opacity-80">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <title></title>
                    <path d="M22.27 19.385H1.73A1.73 1.73 0 010 17.655V6.345a1.73 1.73 0 011.73-1.73h20.54A1.73 1.73 0 0124 6.345v11.308a1.73 1.73 0 01-1.73 1.731zM5.769 15.923v-4.5l2.308 2.885 2.307-2.885v4.5h2.308V8.078h-2.308l-2.307 2.885-2.308-2.885H3.46v7.847zM21.232 12h-2.309V8.077h-2.307V12h-2.308l3.461 4.039z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#555] group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-100">university_student_demo</h4>
                  <p className="mb-auto text-sm text-gray-700 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50">基于java的springboot后端框架，react前端的大学生后台管理小demo</p>
                </div>
              </section>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://gitee.com/xdw_mayun/eatery_admin" className="cursor-pointer group h-full p-4 hover:bg-[#88888808]">
              <section className=" flex items-center gap-[24px]">
                <div className="text-[38px] opacity-50 group-hover:opacity-70 dark:group-hover:opacity-80">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <title></title>
                    <path d="M17.21 0c-.545.003-1.084.134-1.256.367-.11.165-.192 1.196-.11 1.718 0 0 .032.345.09.614a14.6 14.6 0 0 1-.02.182 7.024 7.024 0 0 1-.097.605c-.01.056-.207.095-.425.152a2.495 2.495 0 0 0-.138-.042c-.234-.069-.385.123-.618.26-.069-.04-.371-.178-.536-.082-.165.096-.275.193-.44.261-.082-.041-.302-.041-.48.028a1.27 1.27 0 0 0-.483.278c-2.314.58-4.813 1.635-5.012 1.741-1.017.522-2.679 1.415-3.434 2.033-1.291 1.071-2.06 2.322-2.363 3.242-.385 1.14-.275 1.827.096 1.387.298-.366 1.632-1.454 2.475-1.999l-.002.007a3.219 3.219 0 0 1 .44-.26l.233-.124.505-.323c.602.552.803 1.433.937 2.63.22 1.841 1.704 2.693 3.434 2.72 1.8.028 2.446.399 3.119 1.305.153.201.318.307.47.368a1.954 1.954 0 0 0-.16.405c-.075.17-.125.38-.157.608a.157.157 0 0 0-.03.075c-.068.536-.055 1.8-.068 2.473-.014.673-.028.77-.083.866-.055.11-.11.178-.178.467-.069.302-.193.384-.316.631-.206.385-.165.81.041 1.003.206.192.77.481 1.538.385.77-.096.88-.151.756-.893-.014-.11-.192-.605-.137-.797.082-.206-.096-.563-.055-.577.041-.014.096-.288.096-.426 0-.137-.014-.796.137-1.14.062-.14.193-.46.326-.785.442-.723.459-1.161.48-1.41.03-.202.046-.46.018-.744.055-.083.289-.275.316-.646 0 0 .644-.337 1.102-1.148.16.557.31.91.286 1.272-.499.39-.684.678-.76.959-.048-.02-.076-.037-.11-.04h-.027a.437.437 0 0 0-.106.029c-.192.068-.041 1.318.165 1.827.206.508.316.81.398 1.36.083.549-.192 1.222-.302 1.524 0 0-.179.536.233.824.358.248 1.704.18 2.308.18.605 0 1.511.219 2.088.109.715-.124.824-.55.399-.77-.426-.22-1.072-.329-1.91-.933-.22-.152-.522-.289-.563-.412-.041-.124-.041-.838-.027-1.457.013-.618.22-1.414.288-1.84.064-.398-.076-.388-.262-.351.032-.147.066-.292.097-.446.344-.632.193-1.223.193-1.223.82-1.044.4-3.27.22-4.048.64.303.96.188.96.188.102-.055.192-.134.274-.224.337-.362.51-.916.51-.916V11c.782-.783 1.151-1.936.26-2.692a1.331 1.331 0 0 0-.219-1.263 1.56 1.56 0 0 0-.37-1.731 1.36 1.36 0 0 0-.487-.297c-.2-.295-.245-.417-.572-.349-.15-.165-.178-.288-.494-.178 0 0-.096-.234-.275-.289a.25.25 0 0 0-.05-.015c-.302-.21-.576-.215-.772-.16-.064-.048-.061-.124-.07-.388-.008-.2-.019-.486-.031-.744.027-.328.102-.974.126-1.303.028-.37.042-.948-.123-1.195C18.303.12 17.754-.003 17.21 0zm-.005.34c.7 0 1.002.22 1.044.343.013.028.082.495.04.797-.013.11-.027.509-.054.687-.014.179-.069.385-.124.673-.041.234-.233.495-.384.536-.261.069-.742.055-1.017 0-.069-.014-.124-.055-.192-.096-.151-.248-.234-.44-.261-.742-.028-.289-.083-.412-.096-.632-.014-.33-.014-.55-.014-.55.014-.178.069-.618.069-.659.013-.123.233-.357.989-.357zm-1.133 2.702c.146.149.301.306.432.416.124.11.426.096.7.096.248 0 .468.028.564-.027.154-.077.355-.235.523-.394.011.152.022.304.026.435.01.295-.043.468.024.57-.082.048-.174.105-.269.156-.151.08-.306.136-.403.115h-.002c-.209-.035-.931-.215-1.331-.407-.167-.259-.335-.398-.326-.448.027-.137.04-.247.054-.425.004-.03.005-.058.008-.088zm-.853.69l.035.001c.424.036.65.152.808.284l.076.03.008-.027c.047.03.102.06.162.088.47.159 1.104.308 1.309.353.247.055.645-.192.838-.316.343-.22.783-.04.989.193.137.15.192.247.192.288.316-.11.357.041.508.206.385-.179.412.041.44.137-.122 0-.298.014-.538.04l-.012-.012c-.144-.153-.402-.289-.599-.384-.087-.031-.18-.049-.252-.097-.11-.055-.22-.137-.385-.123-.687.082-.824.315-1.415.178-.577-.134-.737-.254-1.333-.221l.001.026c-.105.016-.2.03-.22.03-.206.012-.722.067-1.153-.1a1.256 1.256 0 0 0-.161-.076l-.005-.002h-.001c-.18-.07-.39-.11-.63-.112h-.026c.218-.11.356-.259.56-.218.22.041.44.22.564.357a.858.858 0 0 0-.178-.288c.128-.09.245-.229.418-.234zm-1.1.545c.15.002.28.026.417.073.018.009.034.018.059.029.288.137.81.164 1.25.137a2.26 2.26 0 0 0 .563-.095c.322.024.514.11.977.216.31.07.502.045.695-.007.193-.053.386-.13.723-.17a.542.542 0 0 1 .188.013c.038.02.075.04.11.061.062.049.214.135.343.189.164.068.59.357.645.425a.1.1 0 0 0 .038.03c.242.314.407.755.396 1.21-.06.46-.426.214-.626.12-.412-.178-.824-.302-1.305-.302-.48 0-1.099.041-1.635.179-.741.206-.961.192-1.29.027-.33-.178-.907-.618-.907-.618v.01c-.007-.007-.012-.012-.014-.01-.042.069-.138.247-.193.33-.027.522-.343 1.346-.934 1.552a.547.547 0 0 1-.467-.041 2.503 2.503 0 0 0-.55-.275c.481.384.729.673.949 1.181.174.43.415 1.017 1.002 1.646.363-.004.725.097.962.346.137.137.357.289.33.426 0 .041-.083.151-.151.234a3.231 3.231 0 0 1-.207.22c-.054.04-.247.192-.288.22-.041.027-.096.095-.137.109-.138.069-.289.014-.426-.055s.027-.082-.124-.192c-.34-.24-.541-.411-.454-.832-.932-.794-2.561-1.26-2.911-2.108-.22-.55-.248-.824-.042-1.058.605-.687.371-1.346.825-1.634.425-.275.783.04.989.33-.124-.509-.55-.633-.55-.674 0-.632.605-1.071 1.21-1.181.218-.041.389-.062.54-.06zm-1.847.534c-.14.196-.231.435-.246.721-.206.028-.673.055-.907.907a3.39 3.39 0 0 1-.214.62c-.103.045-2.946 1.274-5.229 2.542l-.01-.007c-.32.18-.627.363-.919.546l-.125.077-.001.003c-1.136.723-2.04 1.45-2.637 2.112.412-2.679 2.528-4.08 3.53-4.698 2.42-1.489 4.629-2.225 6.758-2.823zm8.037.323c.26-.004.536.06.756.275.59.577.425 1.209.247 1.648.15.179.508.687.288 1.291-.04.138-.343.138-.563.495.55-.316.893-.233 1.017.165.192.618-.234 1.36-.605 1.772 0-.014-.014-.028-.014-.041-.055.206-.123.604-.535 1.044-.206.22-.371.192-.605.137-.215-.054-.322-.142-.543-.276-.036-.207-.102-.482-.102-.59 0-.044-.004-.141-.01-.243.032-.036.066-.074.106-.114 0 0 .178-.247.44-.233.26.014.535-.041.604-.11 0-.48-.55-.494-.357-1.319.013-.04.082-.11.302-.137-.33-.069-.48-.083-.714-.302l-.013-.013c.11-.253.224-.457.301-.605.193-.385.082-.852.082-.852.207-.069.385-.179.413-.247.203-.673-.164-1.322-.605-1.74.036-.003.073-.005.11-.006zm-5.46.925c.01.016.02.033.034.05.179.22.577.495 1.113.673.26.083.467.028.7-.027 1.123-.278 2.304-.346 3.33.155a1.82 1.82 0 0 1-.157 1.068c-.232.465-.533 1.068-.48 2.215-.246.044-1.419.144-1.992.037-.521-.097-1.416-.525-1.62-.69a6.703 6.703 0 0 1-.125-.848 1.37 1.37 0 0 0 .454-.343c-.412.068-.577.04-.825-.097-.235-.13-.642-.533-.87-.82.229-.29.393-.69.335-1.226.037-.05.07-.099.102-.147zm-4.38 1.598c-.09.253.093.654.224.953.508 1.179 2.07 1.29 3.127 2.18a.723.723 0 0 0 .06.388c.083.165.371.413.371.413-.055.054-.027.164-.027.164.204.217.504.243.547.246-.435 1.248-.816 2.626-.451 4.095-.179.244-.368.445-.531.668a.851.851 0 0 1-.444-.31c-.591-.852-1.457-1.416-3.023-1.374-2.349.055-3.283-.907-3.461-2.748-.094-.974-.357-1.922-.888-2.479C7.489 9.014 9.6 7.937 10.268 7.73a2.8 2.8 0 0 0 .2-.073zm3.496.18c.381.442.795.727 1.193.979.082.343.11.577.192 1.03h-.041l-.027.308a2.836 2.836 0 0 0-.62-.113l.001-.003c-.893-1.057-.7-1.47-1.058-2.019.097-.034.225-.094.36-.182zm5.911 1.086c.076.067.178.12.323.154-.327.68.33.912.37 1.17-.143.083-.367.037-.603.025-.115-.006-.229.065-.321.147l.032-.367c.006-.43.09-.809.2-1.13zM15.79 9.947c.024.035.178.131 1.002.352 1.026.275 2.323.12 2.55.09a.378.378 0 0 1-.022.089c0 .343.055.59.096.81.053.308.13.533.163.74l.008-.007c.234 1.367.561 3.133-.267 4.048.041.192.069.467.014.783a3.204 3.204 0 0 1-.151.535 2.29 2.29 0 0 0-.108.352c-1.1.142-1.755.055-2.06-.015.123-.374.407-.754.876-.735-.022-.911-.264-1.223-.511-1.891.395-.883.299-1.665.621-2.848-.247.261-.44 1.209-.604 1.786-.206.838-.563 1.648-1.525 2.294 0 .22-.069.384-.151.494-.179.261-.412.344-.494.77.11-.138.26-.261.26-.22a8.51 8.51 0 0 1-.025.493l.012.001c-.165 1.044-.522 1.525-.742 2.115-.151.426-.096 1.36-.151 1.374-.385.083-.975-.068-1.14-.15.162-1.14.019-2.278.436-3.6l-.015-.006c.16-.554.478-.878.939-1.464-.161-.52-.532-1.64.266-4.182.033-.014.067-.03.105-.049l.206-.137c.04-.028.096-.069.137-.096.069-.042.371-.371.412-.412.096-.097.165-.124.192-.234.055-.206-.247-.412-.37-.55-.018-.019-.03-.034-.043-.05.013-.039.027-.077.042-.114.01-.125.028-.26.042-.367zm.883 7.942c.05.002.174.122.751.158.66.04 1.539-.083 1.772-.138.234-.055.097.11.069.275l-.026.169c-.399.134-1.008.188-1.416.202-.393.013-.846-.012-1.161-.11-.048-.26-.063-.47-.007-.55a.024.024 0 0 1 .018-.006zm2.506.846c-.02.135-.035.223-.058.372-.388.12-.888.122-1.27.135a4.413 4.413 0 0 1-1.012-.07 2.065 2.065 0 0 1-.033-.109 11.343 11.343 0 0 1-.065-.252c.179.034.53.079 1.15.087a4.142 4.142 0 0 0 1.288-.163zm-.106.685c-.069.44-.055 1.786-.014 2.157.014.11.948.522 1.277.77.107.085.259.157.422.222.042.042.116.105.197.203.162.213.052.436-.135.526-.264-.007-.568-.052-1.074-.128-.695-.104-1.129-.101-1.73-.106v-.003c-.152-.275-.056-.728-.056-.728a2.2 2.2 0 0 1-.809-.18l.012-.026c.234-.48.22-.591.151-1.415-.047-.578-.196-.883-.335-1.195.169.016.409.035.857.041a4.567 4.567 0 0 0 1.237-.138zm-5.306 2.084c.243 0 .6.032.676.1v.014c.014.165.165.399.11.522-.027.069-.096-.041-.192-.068.041.26.151.741.316 1.112.11.248.041.426-.33.495-.33.014-.755 0-1.112-.083-.412-.206-.55-.316-.467-.7.068-.275.494-.59.865-.838-.206.014-.426.165-.398-.014.055-.357.206-.33.302-.508-.02-.02.084-.032.23-.032z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#555] group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-100">eatery_admin</h4>
                  <p className="mb-auto text-sm text-gray-700 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50">扫码点餐小程序后台（gitee有完整项目）</p>
                </div>
              </section>
            </a>
          </ul>
        </div>
        <div>
          <h1 className="text-[1.125rem] text-[#555] dark:text-[#aaa]" data-fade="3">Vue Ecosystem</h1>
          <ul className="mt-6 grid grid-cols-2 gap-4 mb:grid-cols-none sm:grid-cols-1">
            <a target="_blank" rel="noopener noreferrer" href="https://gitee.com/xdw_mayun/mywirte" className="cursor-pointer group h-full p-4 hover:bg-[#88888808]">
              <section className=" flex items-center gap-[24px]">
                <div className="text-[38px] opacity-50 group-hover:opacity-70 dark:group-hover:opacity-80">
                  <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z" fill="currentColor"></path>
                    <path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="currentColor"></path>
                    <path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z" fill="currentColor"></path>
                    <path d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#555] group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-100">C-Node</h4>
                  <p className="mb-auto text-sm text-gray-700 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50">使用Vue开发模仿cnode官网</p>
                </div>
              </section>
            </a>
            {/* <a target="_blank" rel="noopener noreferrer" href="#" className="cursor-pointer group h-full p-4 hover:bg-[#88888808]">
              <section className=" flex items-center gap-[24px]">
                <div className="text-[38px] opacity-50 group-hover:opacity-70 dark:group-hover:opacity-80">
                  <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z" fill="currentColor"></path>
                    <path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="currentColor"></path>
                    <path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z" fill="currentColor"></path>
                    <path d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#555] group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-100">imitation meituan website</h4>
                  <p className="mb-auto text-sm text-gray-700 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50">The latest Vue family bucket + SSR + Koa2 full stack development in 2020</p>
                </div>
              </section>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#" className="cursor-pointer group h-full p-4 hover:bg-[#88888808]">
              <section className=" flex items-center gap-[24px]">
                <div className="text-[38px] opacity-50 group-hover:opacity-70 dark:group-hover:opacity-80">
                  <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z" fill="currentColor"></path>
                    <path d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z" fill="currentColor"></path>
                    <path d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#555] group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-100">Vue-MVVM</h4>
                  <p className="mb-auto text-sm text-gray-700 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50">Analyze the principle of vue implementation and implement a simple version of mvvm</p>
                </div>
              </section>
            </a> */}
          </ul>
        </div>
        <div>
          <h1 className="text-[1.125rem] text-[#555] dark:text-[#aaa]" data-fade="4">Html Ecosystem</h1>
          <ul className="mt-6 grid grid-cols-2 gap-4 mb:grid-cols-none sm:grid-cols-1">
            <a target="_blank" rel="noopener noreferrer" href="https://gitee.com/xdw_mayun/mywirte" className="cursor-pointer group h-full p-4 hover:bg-[#88888808]">
              <section className=" flex items-center gap-[24px]">
                <div className="text-[38px] opacity-50 group-hover:opacity-70 dark:group-hover:opacity-80">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <title></title>
                    <path d="M12.02 0L1.596 6.02l-.02 12L11.978 24l10.426-6.02.02-12zm4.828 17.14l-.96.558-.969-.574V12.99H9.081v4.15l-.96.558-.969-.574V6.854l.964-.552.965.563v4.145h5.838V6.86l.965-.552.964.563z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#555] group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-100">Html-Log</h4>
                  <p className="mb-auto text-sm text-gray-700 opacity-50 dark:text-gray-300 dark:group-hover:text-gray-50">个人前端学习记录，笔记项目等等</p>
                </div>
              </section>
            </a>
          </ul>
        </div>
      </Layout>
    )
  }
}

