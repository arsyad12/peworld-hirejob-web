/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import axios from "axios";

function Talent(props) {

const [listData,setListData] = React.useState(props.data.slice(0,4))
console.log(listData)
  return (
    <>

<Head>
    <title>Talent List</title>
</Head>

      <Header />

      <div className="bg-[#F6F7F8]">
        {/* Head */}
        <div className="flex items-center mt-5 bg-[#5E50A1] h-[80px]  ">
          <h5 className="text-[white] text-[20px] mx-10">Top Talent | Peworlds</h5>
        </div>
        {/* end of head */}

        {/* card */}
        <div className="m-10 card-talent">
        <div className="container">
          {listData.map((item, key) => (
            <div key={key} className="border bg-[white] drop-shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-8">
                <div className="img-profile flex justify-center md:justify-left p-[20px] ">
                  <img src={item.photo} alt="photo" />
                </div>

                <div className="identity col-span-5">
                  <p className="pt-[5px] md:pt-[10px] text-center md:text-left">
                    {item.fullname}
                  </p>
                  <p className="pt-[10px] md:pt-[10px] text-center md:text-left">
                    {item.role}
                  </p>

                  <div className="pt-[10px] flex gap-2 justify-center md:justify-start">
                    <img src="/map.png" className="w-[16px] h-[16px] mt-[3px]" />
                    <p className="text-[14px]">{item.location}</p>
                  </div>

                  <div className="flex justify-center md:justify-start gap-2 md:gap-3  m-2">
                    {["PHP", "Javascript", "React Js"]?.map((item, key) => (
                      <button
                        key={key}
                        className="border-2  bg-[#FBB01799] w-[120px] mt-[15px] md:mt-[5px] mb-[10px] rounded-[4px] border-[#FBB01799]"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="identity col-span-2 flex items-center flex justify-center md:justify-start mb-[20px]">
                  <button className="border-2 p-[2px] bg-[#5E50A1] w-1/2 text-[white] rounded-[4px] border-[#5E50A1] mt-[5px] md:mt-[20px]">
                    Lihat Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        {/* end of card */}

        {/* pagination */}
        <div className="container mt-20">
          <div className="flex justify-center gap-[10px]">
            <div className="previous">
              <button className="border-2 bg-[#FFFFFF] border-[#E2E5ED] p-[12px]">
                <img src="/previous.png" />
              </button>
            </div>
            
            {[...Array(6)]?.map((item,key) => (
            <div key={item} className="previous">
              <button className={` ${key===0 ? "border-2 bg-[#5E50A1] border-[#5E50A1] p-[10px] text-[white]" : "border-2 bg-[#FFFFFF] border-[#E2E5ED] p-[10px]"}`} >
                {++key}
              </button>
            </div>
            ))}
            <div className="forward">
              <button className="border-2 bg-[#FFFFFF] border-[#E2E5ED] p-[12px]">
                <img src="/forward.png" /> 
              </button>
            </div>
          </div>
        </div>
        {/* end of pagination */}

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const request = await axios({
    method:'get',
    url: "http://localhost:3000/api/listTalent",
  })
  
  return {props:request.data}
  
}
export default Talent;
