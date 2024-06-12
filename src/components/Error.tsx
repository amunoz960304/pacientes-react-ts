const Error = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className='text-center my-4 p-3 bg-red-600 uppercase text-sm  text-white'>
      {children}
    </p>
  );
};

export default Error;
