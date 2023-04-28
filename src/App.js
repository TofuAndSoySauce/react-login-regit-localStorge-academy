import './App.css';
import {Container,Nav,Navbar} from 'react-bootstrap';
import Login from './Login';
import Join from './Join';
import { Route, Routes } from 'react-router-dom';
import { Suspense, useState } from 'react';
import Main from './Main';
import FindID from './FindName';

function App() {
  let [show,setShow]=useState(false);
  let [showName,setShowName]=useState("");
  return (
    <div className="App">
     
      

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Simple Join&Login</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/join">Join</Nav.Link>
            {!show?<Nav.Link href="/login">Login</Nav.Link>:null}
            <Nav.Link href="/findid">Find ID</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

      <Suspense fallback={<div>로딩중</div>}>
      <Routes>
        <Route path='/' element={<Main show={show} showName={showName}/>}/>
        <Route path="/join" element={
          <Join />
        }/>
        <Route path="/login" element={
          <Login show={show} setShow={setShow} setShowName={setShowName}/>
      } />
        <Route path="/findid" element={<FindID></FindID>} />
        <Route path='*' element={<div>에러 페이지</div>}/>
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
