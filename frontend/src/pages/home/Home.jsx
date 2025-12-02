import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="w-full">
      <h1 className="text-center font-sans font-extrabold text-3xl sm:text-5xl md:text-7xl text-[white] px-2 py-2">
        INSTA CHAT
      </h1>
      <p className="text-center sm:text-end italic text-gray-500 dark:text-gray-400 mb-2 font-extrabold text-sm sm:text-lg md:text-2xl px-2">
        -Real Time Chats, Anytime, Anywhere.
      </p>
      <div className="flex flex-col sm:flex-row h-auto sm:h-[400px] md:h-[550px] lg:h-[675px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 gap-2 sm:gap-0">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};
export default Home;
