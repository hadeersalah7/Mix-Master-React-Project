import React from 'react'
import { useRouteError, Link } from 'react-router-dom';
import img from "../assets/not-found.svg"
import Wrapper from '../assets/wrappers/ErrorPage';
const Error = () => {
    const error = useRouteError()
    if (error.status === 404) {
        return <Wrapper>
            <div>
                <img src={img} alt="not found" className="img"/>
                <h3>ohhh!</h3>
                <p>We can't find the page that you're looking for!</p>
                <Link to="/">Back home</Link>
            </div>
        </Wrapper>
    }
    return (
        <Wrapper>
            <div>
                <h3>Something went wrong</h3>
            </div>
        </Wrapper>
    )
}

export default Error