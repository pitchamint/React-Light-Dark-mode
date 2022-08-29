import { useContext } from "react"
import Switch from "react-switch"
import { ThemeContext } from "../App"

const Title = () => {
    //สรา้ง state เปลี่ยนเป็น context (เพราะเราไปประกาศ state ที่ App.js แล้ว) เพื่อควบคุมการทำงานของ switch ในการเปลี่ยนแปลงค่าจะมีแค่ค่า true กับ false แต่ถ้านำไปใช้งานจริง เราจะตั้งเป็น dark light
    const {theme,setTheme} = useContext(ThemeContext)
    //กำหนดให้ค่าใน state เปลี่ยนตาม checked
    const toggleSwitch = (checked) => {
        setTheme(
            //เช็คค่าที่อยู่ในตัวแปร theme แบบลดรูป if else (thenary)(เปลี่ยนค่าจาก true/false เป็น dark/light)
            theme === "light" ? "dark" : "light"
        )
    }

    return(
        //className จะถูกตั้งค่าตามตัวแปรที่กำหนดใน theme โดยใช้ ifelse มากำหนดค่า ถ้า theme เป็น dark classname ก็ dark แต่ถ้าไม่ก็เป็น light
        <header className={theme === "dark"?"dark":"light"}>
            {/* [{theme}]นำเอาชื่อ theme ที่กำหนดไว้ใน App.js มาแสดงผล */}
            <span>Mode [{theme}]</span>
            <Switch
                onChange = {toggleSwitch}
                //ผูกค่า state กับ component ใช้คำสั่ง checked จะมีสถานะเป็น boolean
                checked = {theme === "dark"}
                //ซึ่งตัว checked แสดง การ on/off ของปุ่ม อันที่เราเขียนหมายถึง ถ้าสไลด์เป็น on จะให้เป็น dark mode
                //กำหนดรูปแบบไอคอนที่เราดึงมาใช้ ไม่ให้แสดงไอคอน
                uncheckedIcon={false}
                checkedIcon={false}
                //กำหนดสีของ switch
                onColor={'#ffa500'}

            />
        </header>
    )
}

export default Title