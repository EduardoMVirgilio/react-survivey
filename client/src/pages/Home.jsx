import { NavLink } from "react-router"
import Typewriter from "../components/Typewrite"

const Home = () => {
  return (
    <>
      <article>
        <h1>
          <Typewriter text="Welcome to Reverb" delay={100} />
        </h1>
        <p>Reverb is a web application that allows you to create and share surveys.</p>
        <NavLink to="/login" className={`btn ${({isPending}) => isPending ? "pending" : ""}`}> Get Started </NavLink>
      </article>
    </>
  )
}

export default Home