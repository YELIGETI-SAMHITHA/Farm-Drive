
 
export default function PageLoader() {

    return (
      <div className="flex items-center justify-center h-screen w-screen fixed bg-gray-100 top-0 left-0 z-50">
        <div className="loader">
          <label>Redirecting...</label>
          <div className="loading"></div>
        </div>
      </div>
    );
  
}
