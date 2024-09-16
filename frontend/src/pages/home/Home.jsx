import MessageContainer from '../../components/messages/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar'; // Ensure you have this component

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blue-lg bg-opacity-0'>
      <Sidebar />
      {/* <MessageContainer /> */}
    </div>
  );
};

export default Home;
