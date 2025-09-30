// App.jsx
import { GitMerge, Tv, Book, Languages} from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-between">
      
      {/* 中间内容 */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold mb-2 tracking-widest">Jackey</h1>
        <p className="text-sm  mb-1">Undergraduate</p>
        <p className="text-sm tracking-widest mb-4">Beijing UIBE</p>

        {/* 联系方式 */}
        <div className="text-xs tracking-widest mb-6 text-center">

          <p className="mb-1">1364877031@qq.com</p>
          <p className="mb-2">+86 182-6574-8659</p>
        </div>

        {/* 链接区域 */}
        <div className="flex justify-center gap-8 text-xs">
          <a
            href="https://space.bilibili.com/15001103"
            className="group relative flex flex-col items-center justify-center cursor-pointer text-black"
          >
            <Tv size={20} className="group-hover:opacity-20 transition duration-300" />
            <span 
                className="absolute top-full mt-3 px-3 py-1 bg-white border border-black 
                          text-xs text-black tracking-widest whitespace-nowrap 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-opacity duration-200 ease-in-out 
                          z-10 shadow-md"
            >
                bilibili
            </span>
          </a>
          
          <a
            href="https://github.com/1ackey"
            className="group relative flex flex-col items-center justify-center cursor-pointer text-black "
          >
            <GitMerge size={20} className="group-hover:opacity-20 transition duration-300"/>
            {/* Tooltip */}
            <span 
                className="absolute top-full mt-3 px-3 py-1 bg-white border border-black 
                          text-xs text-black tracking-widest whitespace-nowrap 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-opacity duration-200 ease-in-out 
                          z-10 shadow-md"
            >
                Git
            </span>
          </a>

          <a
            href="#"
            className="group relative flex flex-col items-center justify-center cursor-pointer text-black"
          >
            <Book size={20} className="group-hover:opacity-20 transition duration-300"/>
            {/* Tooltip */}
            <span 
                className="absolute top-full mt-3 px-3 py-1 bg-white border border-black 
                          text-xs text-black tracking-widest whitespace-nowrap 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-opacity duration-200 ease-in-out 
                          z-10 shadow-md"
            >
                Slides(开发中)
            </span>
          </a>

          <a
            href="#"
            className="group relative flex flex-col items-center justify-center cursor-pointer text-black"
          >
            <Languages size={20} className="group-hover:opacity-20 transition duration-300"/>
            {/* Tooltip */}
            <span 
                className="absolute top-full mt-3 px-3 py-1 bg-white border border-black 
                          text-xs text-black tracking-widest whitespace-nowrap 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-opacity duration-200 ease-in-out 
                          z-10 shadow-md"
            >
                ?(开发中)
            </span>
          </a>
        </div>
      </div>

      {/* 页脚版权 */}
      <footer className="text-center text-xs py-5">
        Copyright © 2025 @刘威特 All Rights Reserved.
        <br />
        京 ICP 备 2025123567 号 - 1
      </footer>
    </div>
  );
}

export default App;
