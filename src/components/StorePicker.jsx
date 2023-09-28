import {getCompanyName} from "../helpers.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function StorePicker() {
  const [companyName, setCompanyName] = useState(getCompanyName());
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(companyName);
    navigate(`/store/${companyName}`);
  }

  return (
    <>
      <form className="store-selector" onSubmit={handleSubmit}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          defaultValue={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
          required
          placeholder="Store Name"
        />
        <button type="submit">Visit Store →</button>
      </form>
    </>
  );
}

export default StorePicker
