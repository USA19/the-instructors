import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="w-64 fixed hidden sm:block">
        <Sidebar />
      </div>

      <div className="sm:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout