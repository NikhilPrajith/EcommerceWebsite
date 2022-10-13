import Head from 'next/head'
import LoginForm from '../components/LoginForm/LoginForm'
import styles from "../styles/login.module.css"
import Link from 'next/link'


export default function Login() {
  return (
    <div>
        <div className={styles.container}>
            <Link href="/"><a  className={styles.name}>HypeCart</a></Link>
            <LoginForm></LoginForm>
            <div className={styles.leftSide}>
                
            </div>
            
        </div>

        <style jsx global>{`
            html, body {
            padding: 0;
            margin: 0;
            }
            * {
            box-sizing: border-box;
            }
        `}</style>
    </div>
  )
}
