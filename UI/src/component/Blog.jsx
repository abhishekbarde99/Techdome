import React from "react";
import Navbar from "./Navbar";
import "./style.css";
import Arrowcicle from "../image/Arrowcicle.png";
import backarrow from "../image/backarrow.png";
import blogdetails1 from "../image/blogdetails1.jpg"
import blogdetails2 from "../image/blogdetails2.jpg"
import blogdetails3 from "../image/blogdetails3.jpg"
import swal from "sweetalert";

import { Navigate } from "react-router-dom";


export default function Blog() {

  const Auth=localStorage.getItem("Auth");
 
    if(Auth === "200")
    {

  return (
    <>
      <Navbar />
      <div className="blog_text_1">ATTACK ON THE TITANS</div>

      <div className="blog_text_2">1Million+Reads</div>

        {/* 1st star start */}
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
          className="blog_star1"
        />
      </div>

      {/* 1st star end */}

      {/* second star start  */}

      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
          className="blog_star2"
        />
      </div>

      {/* second star end */}

       {/* third star start  */}

       <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
          className="blog_star3"
        />
      </div>

      {/* third star end */}

      {/* fourth star start  */}

      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
          className="blog_star4"
        />
      </div>

      {/* fourth star end */}

         {/* fifth star start  */}

      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2107/2107957.png"
          className="blog_star5"
        />
      </div>

      {/* fifth star end */}

      <div>
        <img
          className="blog_img"
          src="https://c4.wallpaperflare.com/wallpaper/571/2/562/holiday-halloween-clash-of-clans-wallpaper-preview.jpg"
        />
      </div>
        <div></div>

      <div className="blog_chapter_1">Chapter 1</div>

      <div>
        <p className="blog_paragraph">
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tenim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptam minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt n id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint 
        </p>
      </div>
     
      <hr  style={{
                width: "88%",
            height: "3px",
            borderTop: "3px solid black",
            marginLeft:"70px"}}/> 


<div style={{ display: "flex" }}>
  <span> <img src={Arrowcicle} className="blog_next_button" /></span>
    <span>
        <p className="blog_chapter_2">Chapter 2 </p>
        </span>
</div>

<div style={{ display: "flex" }}> <span className="blog_short_reels">Short reads</span>
<span> <img className="blog_backarrow" src={backarrow} /></span>
<span> <img src={Arrowcicle} className="blog_Arrowcicle" /></span></div>

<hr  style={{
                width: "88%",
            height: "3px",
            borderTop: "3px solid black",
            marginLeft:"70px"}}/> 


<div style={{ display: "flex" }}> 
      <span> <img className="blog_blogdetails1" src={blogdetails1} /></span>
      <span>
      <p className="blog_blogdetails1_text1"><b>Akame ga Kill: <br/> season finale</b> <br/><br/>met minim mollit non<br/>
ullamco est sit </p></span>

<span> <img src={blogdetails3} className="blog_blogdetails2" /></span>
<span>
      <p className="blog_blogdetails1_text1"><b>Akame ga Kill: <br/> season finale</b> <br/><br/>met minim mollit non <br/>
ullamco est sit </p></span>

<span> <img src={blogdetails2} className="blog_blogdetails2" /></span>
<span>
      <p className="blog_blogdetails1_text1"><b>Akame ga Kill: <br/> season finale</b> <br/><br/>met minim mollit non<br/>
ullamco est sit </p></span>


</div>   

    </>
  );
}
  else
  {
    
    
      return <Navigate replace to="/" />
      

  }

}

