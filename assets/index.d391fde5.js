import{j as w,r as x,R as S,a as T}from"./vendor.74c9a018.js";const $=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))f(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&f(h)}).observe(document,{childList:!0,subtree:!0});function m(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function f(r){if(r.ep)return;r.ep=!0;const i=m(r);fetch(r.href,i)}};$();const o=w.exports.jsx,g=w.exports.jsxs,N=w.exports.Fragment,A=()=>o("header",{className:"App-header",children:"WELCOME TO TIC-TAC-TOE"}),L=()=>o("footer",{});var R=`.game-wrapper{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    border: 1px solid #333;
    max-width: 100%;
    max-height: 100%;
    width: 500px;
    height: 500px;

}
.game-footer{
    display: flex;
    align-items: center;
    
}
.game-footer > div{
    flex-basis: 100%;
}
.item {
    width: 100%;
    height: 100%;
    border: 1px solid #333;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: none;
    box-shadow: none;
    font-size: 2.5rem;
    transition: all cubic-bezier(1,1,1,1.48) 150ms;
}

.item:active {
    /* background-color: rgba(0, 0, 0, 0.1); */
    font-size: 3rem;
    box-shadow: 0 0 12px 80px rgba(255, 212, 104, 0.1) inset, 0 0 12px 40px rgba(0, 0, 0, 0.1) inset;
}

.item.winner{
    background-color: #3e3;
}

.winner-player{
    font-size: 1.5rem;
    font-weight: 600;
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: #f2f2f2;
    color: rgb(27, 123, 0);
}

.reset-btn{
    background-color: darkred;
    border: 1px solid darkred;
    font-size: 1rem;
    color: #fff;
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
}`;const W=()=>{const[b,u]=x.exports.useState([["","",""],["","",""],["","",""]]),[m,f]=x.exports.useState("X"),[r,i]=x.exports.useState(!0),[h,k]=x.exports.useState([["","",""],["","",""],["","",""]]),O=(p,c)=>{const n=[...b];n[p][c]=n[p][c]?n[p][c]:m,u(n),P();const{isWinner:a,winner:y}=C(n);a?(i(!1),k([...y].map(e=>[...e]))):b.reduce((e,d)=>e+d.reduce((l,t)=>l+(t?1:0),0),0)===9&&(i(!1),f("D"))},P=()=>{f(m==="X"?"0":"X")},j=()=>{u([["","",""],["","",""],["","",""]]),k([["","",""],["","",""],["","",""]]),f("X"),i(!0)},C=p=>{const c=[...p].map(e=>[...e]);let n=!1,a=[];const y=c.map(e=>e[0]&&e[1]&&e[2]&&e[0]===e[1]&&e[1]===e[2]&&!n?(n=!0,e):["","",""]);if(n)a=y;else{const e=c.map((d,l)=>d.map((t,s)=>l===s||l+s===2?t:""));if(e[0][0]&&e[1][1]&&e[2][2]&&e[0][0]===e[1][1]&&e[2][2]===e[1][1])a=e.map((d,l)=>d.map((t,s)=>l===s?t:"")),n=!0;else if(e[0][2]&&e[1][1]&&e[2][0]&&e[0][2]===e[1][1]&&e[1][1]===e[2][0])a=e.map((d,l)=>d.map((t,s)=>l+s===2?t:"")),n=!0;else{const d=c.map((l,t,s)=>(s[0][t]&&s[1][t]&&s[2][t]&&s[0][t]===s[1][t]&&s[1][t]===s[2][t]&&!n?n=!0:s[0][t]=s[1][t]=s[2][t]="",l));n&&(a=d)}}return{isWinner:n,winner:a}};return g(N,{children:[o("style",{children:R}),o("div",{className:"game-wrapper",children:b.map((p,c)=>p.map((n,a)=>o("button",{tabIndex:0,type:"button","aria-label":n?`${n} chosen`:`click to Place ${m}`,onClick:()=>{r&&!n&&O(c,a)},className:`item ${h[c][a]?"winner":""}`,children:n||""},`${c}_${a}`)))}),g("div",{className:"game-footer",children:[o("div",{className:"status",children:g("ul",{children:[o("li",{children:r?`Current Player: ${m}`:o("span",{className:"winner-player",children:m==="D"?"No Result":`Winner: ${m==="X"?"0":"X"}`})}),g("li",{children:["Game Status: ",r?"Playing":"Over"]})]})}),o("div",{className:"text-center",children:o("button",{className:"reset-btn",onClick:j,children:"Reset"})})]})]})},X=()=>g(N,{children:[o(A,{}),o("main",{children:o(W,{})}),o(L,{})]});S.render(o(T.StrictMode,{children:o(X,{})}),document.getElementById("root"));
