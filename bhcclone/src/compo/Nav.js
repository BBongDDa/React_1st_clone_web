import React from 'react'
import './Nav.css'

function Nav(){
    return(
        <>
        <div className="Navheader">
            <div className="NavWrap">
            <img src={ require('../img/logo.png')} className="logo" alt="logo"/>
            <div className="Choice">
            <>
            <a className="Choice1" href="https://www.bhc.co.kr/">메뉴소개</a>
            <a className="Choice1" href="https://www.bhc.co.kr/">매장소개</a>
            </>
            <>
            <a className="Choice1" href="https://www.bhc.co.kr/">창업정보</a>
            <a className="Choice1" href="https://www.bhc.co.kr/">BHC소식</a>
            </>
            <>
            <a className="Choice1" href="https://www.bhc.co.kr/">BHC소개</a>
            <a className="Choice1" href="https://www.bhc.co.kr/">고객센터</a>
            </>
            <a className="Choice2" href="https://www.bhc.co.kr/">E쿠폰안내</a>
            </div>
            <div className="buttonwrap">
            <button className="button1">로그인</button> <button className="button1">아이디등록</button>
            </div>
            </div>
        </div>
        </>
    )
}

export default Nav;
