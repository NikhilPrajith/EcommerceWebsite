import Head from 'next/head'
import styles from "../styles/signup.module.css"
import SignUpForm from '../components/SignUpForm/SignUpForm'
import Link from 'next/link'


export default function SignUp() {
  return (
    <div>
        <div className={styles.container}>
            <Link href="/"><a  className={styles.name}>HypeCart</a></Link>
            <SignUpForm></SignUpForm>
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
