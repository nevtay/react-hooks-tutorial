import React, {useState, useEffect} from 'react';
import {useForm} from './useForm';
import {Hello} from './Hello';

const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });
  // const [values2, handleChange2] = useForm({
  //   firstName: '',
  //   lastName: '',
  // });
  // const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    console.log('render');

    return () => {
      console.log('unmount');
    };
  }, [values.email]);

  return (
    <div>
      <>
        {/* <button
          onClick={() => setShowHello(!showHello)}>
        Button Here
        </button>
        {showHello ? <Hello /> : ''} */}
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
