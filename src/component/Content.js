import light from '../image/light.svg'
import dark from '../image/dark.svg'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const Content = () => {
    //ดึงแค่ theme มาใช้เพราะเราไม่ได้มีการเปลี่ยนแปลงค่าในนี้
    const {theme} = useContext(ThemeContext)
    return(
        <main className={theme === "dark"?"dark":"light"}>
            <div>
                <h1>Pitchamint official</h1>
                <p>Dark Mode Workshop</p>
            </div>
            {/* เราต้องการเปลี่ยนแปลงรูปภาพตาม theme ด้วย เรากำหนด import ไว้แล้วที่ด้านบน*/}
            <img src={theme === "dark"?dark:light} alt="logo"/>
        </main>
    )
}

export default Content