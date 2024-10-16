import react, { useEffect, useState } from 'react';
import { BASEURL } from '../Constant'; //Capital C was the issue to load

function AdviceDataComp() {
  const [adviceData, setAdviceData] = useState('');
  useEffect(() => {
    fetchAdvice();
  }, []);
  const fetchAdvice = async () => {
    fetch(BASEURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAdviceData(data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Advice data</h1>
      <div>{adviceData}</div>
    </>
  );
}
export default AdviceDataComp;
