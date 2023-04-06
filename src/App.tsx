import './App.css';
// import List from './components/generics/List';

// import Greet from './components/Greet';
// import Person from './components/Greet';
// import PersonList from './components/PersonList';

// import Status from './components/Status';

// import Heading from './components/Heading';
// import Oscar from './components/Oscar';

// import Button from './components/Button';
// import Container from './components/Container';
// import LoggedIn from './components/state/LoggedIn';

// import { ThemeContextProvider } from './components/context/ThemeContext';
// import Box from './components/context/Box';

// import { UserContextProvider } from './components/context/UserContext';
// import User from './components/context/User';

// import Counter from './components/class/Counter';
// import Private from './components/auth/Private';
// import Profile from './components/auth/Profile';

// import RandomNumber from './components/restrictions/RandomNumber';

// import Toast from './components/templateliterals/Toast';

// import CustomButton from './components/html/Button';

import Text from './components/ref/Text';

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne"
  // }

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne"
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent"
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana"
  //   }
  // ]

  return (
    <div className="App">
      {/* <Greet name="Prabhat" messageCount={20} isLoggedIn={false} /> */}
      {/* <Person person={personName} /> */}
      {/* <PersonList names={nameList} /> */}
      {/* <Status status="loading" /> */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name="Prabhat" isLoggedIn={true} /> */}
      {/* <Button handleClick={(event) => { console.log("button clicked", event)}}/> */}
      {/* <Container styles={{border: '1px solid black', padding: '1rem'}} /> */}
      {/* <LoggedIn /> */}
      {/* <ThemeContextProvider>
          <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
       </UserContextProvider> */}
      {/* <Counter message='Count'/> */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}
      
      {/* <List 
        items={['Batman', "superman", "Wonder Woman"]} 
        onClick={(item) => console.log(item)}
      />

      <List 
        items={[1, 2, 3, 4]} 
        onClick={(item) => console.log(item)}
      /> */}

      {/* <List 
            items={[
              {
                first: "Bruce",
                last: 'Wayne'
              }, 
              {
                first: "Clark",
                last: 'Kent'
              },
              {
                first: "Princess",
                last: 'Diana'
              }
            ]} 
            onClick={(item) => console.log(item)}
          /> */}
        {/* <RandomNumber value={10} isPositive isNegative isZero  /> */}
        {/* <RandomNumber value={10} isPositive /> */}
        {/* <Toast position='center-center' /> */}
        {/* <Toast position='center-bottom' /> */}
        {/* <CustomButton variant='primary' /> */}
        {/* <CustomButton variant='primary'>Primary Button</CustomButton> */}
        <Text as='h1' size='lg'>Heading</Text>
        <Text as='p' size='md'>Paragraph</Text>
        <Text as='label' htmlFor='id1' size='sm' color='secondary'>Label</Text>
    </div>
  );
}

export default App;
