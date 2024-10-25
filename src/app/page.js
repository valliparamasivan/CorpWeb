import dynamic from 'next/dynamic';
const Home = dynamic(() => import('./home/page'));

const App = () => {
  return <Home/>
};
export default App;