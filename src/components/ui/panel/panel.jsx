/* eslint-disable react/prop-types */
export const Panel = ({ children }) => {
  return <div className='p-3 rounded-4 text-light bg-secondary'>
    {children}
  </div>
}