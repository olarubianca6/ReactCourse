import { useEffect } from "react";
import JobInfo from "./Jobinfo";
import { useState } from "react";
import BtnContainer from "./BtnContainer";

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async() => {
    const response = await fetch(proxyUrl + url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() =>{
    fetchJobs();
  },[])

  if(isLoading){
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }

  return (
    <section className="jobs-center">
      <BtnContainer jobs={jobs} currentItem={currentItem} 
      setCurrentItem={setCurrentItem} />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
