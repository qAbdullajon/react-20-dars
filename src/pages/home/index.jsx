import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import LogoImg from "../../assets/Logo.svg";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // yangi usul
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import { NavigateNext } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { HeaderNaviget } from "../../router/routes";
import Menu from "../../assets/menu.svg";
import User from "../../assets/user.svg";

const index = () => {
  const [data, setData] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const getCars = async () => {
    try {
      const res = await axios.get("http://localhost:3000/cars");
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCars();
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/") {
      swiperRef.current.swiper.slideTo(0);
    } else if (location.pathname === "/model-3") {
      swiperRef.current.swiper.slideTo(1);
    } else if (location.pathname === "/model-x") {
      swiperRef.current.swiper.slideTo(2);
    } else if (location.pathname === "/model-y") {
      swiperRef.current.swiper.slideTo(3);
    } else if (location.pathname === "/solar-roof") {
      swiperRef.current.swiper.slideTo(4);
    } else if (location.pathname === "/solar-panels") {
      swiperRef.current.swiper.slideTo(5);
    }
  }, [location.pathname]);

  const initialSlideIndex = parseInt(location.pathname.split("/")[1] || 0, 10);
  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const currentPath = currentSlide.getAttribute("data-path");
    navigate(currentPath);
  };

  return (
    <div className="bg-black w-full h-[100vh] pt-10 px-10">
      <header className="flex justify-between items-center">
        <div>
          <img src={LogoImg} alt="" />
        </div>
        <div className="flex gap-5">
          {HeaderNaviget.map((item, i) => {
            return (
              <NavLink
                style={{
                  color: item.path === location.pathname ? item.color : undefined,
                  borderColor: item.path === location.pathname ? item.color : undefined,
                  border: item.path === location.pathname ? "2px solid" : undefined,
                  borderRadius: "20px",
                  backgroundColor: item.path === location.pathname ? "#F4FBFF1A" : undefined,
                }}
                className="cursor-pointer px-3 h-min"
                to={item.path}
                key={i}
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
        <TextField
          variant="outlined"
          placeholder="Qidirish..."
          size="small"
          autoComplete="off"
          sx={{
            backgroundColor: "#F4FBFF1A",
            color: "#fff",
            borderRadius: "85px",
            "& .MuiInputBase-input": {
              color: "#fff",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#000",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <span className="text-white">
                  <SearchIcon />
                </span>
              </InputAdornment>
            ),
            sx: {
              "& .MuiInputBase-input::placeholder": {
                color: "#fff",
              },
            },
          }}
        />
        <div className="w-[40px] h-[40px] bg-[#F4FBFF1A] flex justify-center items-center rounded-full">
          <img src={User} alt="user" />
        </div>
        <div className="w-[40px] h-[40px] bg-[#F4FBFF1A] flex justify-center items-center rounded-full">
          <img src={Menu} alt="menu" />
        </div>
      </header>
      <Swiper ref={swiperRef} onSlideChange={handleSlideChange} initialSlide={initialSlideIndex} navigation={true} modules={[Navigation]} className="mySwiper">
        {HeaderNaviget.map((item, i) => {
          return (
            <SwiperSlide key={i} className="pt-[250px]" data-path={item.path}>
              <div className="flex items-center flex-col">
                <h1 className={`absolute text-[270px] z-0 font-bold bottom-52`} style={{ color: item.color, opacity: 0.2 }}>
                  {item.name}
                </h1>
                <img src={item.img} style={{ paddingTop: item.style.pt === 2 ? "130px" : "0px" }} className="!w-[70%] relative z-10 h-16" alt="" />
                <img src={item.img} style={{ bottom: i === 1 ? "100px" : i === 2 ? "100px" : "", transform: "scaleY(-1)" }} className={`!w-[70%] z-10 relative rounded-lg transform  scale-y-[-1] opacity-10`} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-between items-center z-50 relative bottom-14">
        <Outlet />
        {HeaderNaviget.map((item, i) => {
          return item.path === location.pathname ? (
            <button key={i} style={{ backgroundColor: item.color, color: i === 2 ? "#000" : i === 4 ? "#000" : i === 5 ? "#000" : "" }} className="rounded-[20px] px-3">
              Order Now <NavigateNext />
            </button>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default index;
