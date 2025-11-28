import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div>
      <h1 className="text-center font-sans font-extrabold text-7xl text-[white] ">
        INSTA CHAT
      </h1>
      <p className="text-end italic text-gray-500 dark:text-gray-400 mb-2 font-extrabold text-2xl">
        -Real Time Chats, Anytime, Anywhere.
      </p>
      <div className="flex  sm:h-[675px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};
export default Home;
