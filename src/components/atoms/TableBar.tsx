import React from 'react';

const TableBar = ({ name }: { name: string }) => {
  return (
    <div className="absolute top-0 w-full">
      <div className=" w-full h-[6px] bg-[#FB4F00]" />
      <div className=" w-fit px-5 h-10 bg-[#FB4F00] ml-auto rounded-b-xl flex items-center justify-center">
        <span className=" font-bold text-xl text-white mt-[-2px]">{name}</span>
      </div>
    </div>
  );
};

export default TableBar;
