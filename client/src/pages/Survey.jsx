import { useNavigate } from "react-router";
import useStorage from "../hooks/useStorage";

const Survey = () => {
  const {value,setValue} = useStorage('user');
  const navigate = useNavigate();

  useEffect(() => {
    if(!value){
      navigate('/login');
    }
  },[]);
  return (
    <section>
      <header>
        <h1>Surveys</h1>
        <form>
          <button type="button" onClick={() => navigate('/surveys/new')}>New</button>
          <button type="button" onClick={() => {
            setValue(null);
            navigate('/login');
          }}>Logout</button>
        </form>
      </header>
    </section>
  )
}

export default Survey