import React, {useState, useEffect} from 'react';
import {useForm} from './useForm';
// import {Hello} from './Hello';
import {useFetch} from './useFetch';

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });
  const {data, loading} = useFetch('http://numbersapi.com/43/trivia');
  // const [values2, handleChange2] = useForm({
  //   firstName: '',
  //   lastName: '',
  // });
  // const [showHello, setShowHello] = useState(true);

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   // addEventListener must have 2 arguments
  //   window.addEventListener('mousemove', onMouseMove);

  //   return () => {
  //     console.log('unmount');
  //     window.removeEventListener('mousemove');
  //   };
  // }, []);


  // http://numbersapi.com/43/trivia

  useEffect(() => {
    console.log('mount 1');
  });

  useEffect(() => {
    console.log('mount 2');
  });

  return (
    <div>
      <>
        {/* <button
          onClick={() => setShowHello(!showHello)}>
        Button Here
        </button>
        {showHello ? <Hello /> : ''} */}
        <div>{loading ? 'LOADING...' : data}</div>
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange} />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

export default App;
