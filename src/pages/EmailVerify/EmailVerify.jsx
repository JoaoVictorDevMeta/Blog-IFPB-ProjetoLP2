import { useState, useEffect, Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'

const EmailVerify = () => {
    const [validUrl, setValidUrl] = useState(false);
    const param = useParams();

    useEffect(() => {
        const verifyEmailUrl = async () => {
            try{
                const url = `http://localhost:3000/auth/${param.id}/verify/${param.token}`
                const data = await fetch(url)
                if(data.status === 200){
                    setValidUrl(true)
                }
            } catch (e) {
                console.log(e)
                setValidUrl(false)
            }
        }
        verifyEmailUrl()
    }, [param])

    return (
        <Fragment>
            {validUrl ? (
                <div className='d-flex justify-content-center flex-column align-items-center gap-5' style={{height: '80vh'}}>
                    <h1>Thank you for verifying your email!</h1>
                    <p className='fs-5'>You can now login to your account.</p>
                    <Link to='/login' className='fs-3'>
                        Login
                    </Link>
                </div>
            ): (
                <div className='d-flex justify-content-center align-items-center gap-5' style={{height: '80vh'}}>
                    <h1>404 Not Found</h1>
                </div>
            )}
        </Fragment>
    )
}

export default EmailVerify