const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-14 h-14 border-4 border-dashed border-primary rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
