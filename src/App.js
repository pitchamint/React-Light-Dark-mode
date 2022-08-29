import { createContext, useState } from 'react';
import './App.css';
import Content from './component/Content';
import Title from './component/Title';
//ในส่วนของ switch ใช้ npm.js โดยการ install ลงใน Terminal
//สร้าง Context เพื่อเก็บสถานะของโหมด เพื่อที่จะเอาไปใช้ต่อในส่วนอื่น CSS Component
 export const ThemeContext = createContext()

function App() {
  const [theme,setTheme] = useState("light")

  return (
    // ทุกครั้งที่มีการใช้ Context เราจะเอา Context มาครอบ div ของเรา
   <ThemeContext.Provider value={{theme,setTheme}}>
      <div>
        <Title/>
        <Content/>
      </div>
   </ThemeContext.Provider>
  );
}

export default App;
