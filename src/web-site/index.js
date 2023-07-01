import { useEffect, useState } from "react"
import styles from "./Index.module.css"
import axios from "axios"
const Index = () => {
    const [proList, setProList] = useState([])

    useEffect(()=>{
      axios.get("http://localhost:8000/api/listPro").then(res=>{
          setProList(res.data)
      }).catch(err=>{
          console.log(err);
    //   })
    // },[])
    // return (
    //     <div>
            <div className={styles.main}>
                <div>
                    <a href="/" className={styles.rowImag}>
 
                        <div style={{paddingLeft:10}}>
                            <div className={styles.txtBrand}>Ecomm</div>
                        </div>
                       
                    </a>
                </div>
                <div>
                    <ul className={styles.menu}>
                        <a className={styles.menuItem} href="/"><li>Home</li></a>
                        <a className={styles.menuItem} href="/"><li>Course</li></a>
                        <a className={styles.menuItem} href="/"><li>My Lesson</li></a>
                        <a className={styles.menuItem} href="/"><li>Learn now</li></a>
                        <a className={styles.menuItem} href="/dashboard"><li>Login</li></a>
                    </ul>
                </div>
            </div>
            <h1>product {proList.length
            }</h1>
        </div>
    )
}

export default Index;