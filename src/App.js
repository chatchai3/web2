import './App.css';
import Post from './Post';
import Navbar from './Navbar';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Post img = "me.jpg" name = "ฉัตรชัย ของดี"></Post>
        <Post img = "แพรว.jpg" name = "พิธยาธร บุญราช"></Post>
        <Post img = "ตะวัน.jpg" name = "สิทธิศักดิ์ ไชยทอง"></Post>
        <Post img = "แนน.jpg" name = "จิรนันท์ ทองมาก"></Post>
        <Footer></Footer>
    </div>
  );
}

export default App;
