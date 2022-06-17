(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/About_Me_Image.6a45bd69.jpg"},21:function(e,a,t){e.exports=t.p+"static/media/Chance-Robinson-Resume-2022.62057202.pdf"},24:function(e,a,t){e.exports=t.p+"static/media/photobomb.42ab808f.PNG"},25:function(e,a,t){e.exports=t.p+"static/media/basicWebsite.2d410a17.PNG"},26:function(e,a,t){e.exports=t.p+"static/media/motherEarth.15c6ded8.PNG"},27:function(e,a,t){e.exports=t.p+"static/media/portfolioReact.e3f5ffff.PNG"},28:function(e,a,t){e.exports=t(54)},36:function(e,a,t){},37:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(18),l=t(1),r=t.n(l),c=(t(36),t(19)),o=t.n(c),m=t(20),i=t(3),s=t(6),u=function(){return r.a.createElement("section",{id:"about"},r.a.createElement("h5",null,"Get to know"),r.a.createElement("h2",null,"About Me"),r.a.createElement("div",{className:"container about__container"},r.a.createElement("div",{className:"about__me"},r.a.createElement("div",{className:"about__me-image"},r.a.createElement(s.LazyLoadImage,{src:o.a}))),r.a.createElement("div",{className:"about__content"},r.a.createElement("div",{className:"about__cards"},r.a.createElement("article",{className:"about__card"},r.a.createElement(m.a,{className:"about__icon"}),r.a.createElement("h5",null,"Experience"),r.a.createElement("small",null,"3+ Years in College")),r.a.createElement("a",{href:"https://github.com/chance-robinson",className:"about__card"},r.a.createElement(i.c,{className:"about__icon"}),r.a.createElement("h5",null,"Projects"),r.a.createElement("small",null,"20+ Completed"))),r.a.createElement("p",null,"My name is Chance Robinson, I am a Junior Computer Science major going into my Senior year, I have extensive knowledge of HTML, CSS, JavaScript, SQL, C++, Java, and other frameworks developed during my courses and projects at Brigham Young University. I have always been passionate about web development, which has led me to pursue a Bachelor of Computer Science degree. Although I have gained knowledge through college education, applying code outside of school and going past requirements has allowed to experience the most growth as a programmer."),r.a.createElement("p",null," A project that I have enjoyed working on lately has been this website. I have had the opportunity to challenge myself by learning new libraries, frameworks, and implementing a variety of technologies I have never used before with zero assistance. I created both the front-end and back-end and even challenged myself to host this on a production linux server. "),r.a.createElement("p",null,"I look forward to learning more frameworks, libraries, and challenging myself every day."),r.a.createElement("a",{href:"#contact",className:"btn btn-primary"},"Let's talk"))))},E=t(9),d=(t(37),t(10)),h=t.n(d);h.a.setAppElement("#root");var p=function(){var e=Object(l.useState)(!1),a=Object(E.a)(e,2),t=a[0],n=a[1],c=Object(l.useState)(!1),o=Object(E.a)(c,2),m=o[0],s=o[1];return r.a.createElement("section",{id:"contact"},r.a.createElement("h5",null,"Let's get in touch"),r.a.createElement("h2",null,"Contact Me"),r.a.createElement(h.a,{isOpen:t,onRequestClose:function(){return n(!1)},className:"Modal",overlayClassName:"Modal__Overlay"},r.a.createElement("p",null,"Your form was submitted"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return n(!1)}},"Close")),r.a.createElement(h.a,{isOpen:m,onRequestClose:function(){return s(!1)},className:"Modal",overlayClassName:"Modal__Overlay"},r.a.createElement("p",null,"Form not submitted, try again."),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return s(!1)}},"Close")),r.a.createElement("div",{className:"container contact__container"},r.a.createElement("div",{className:"contact__options"},r.a.createElement("article",{className:"contact__option"},r.a.createElement(i.e,{className:"contact__icons"}),r.a.createElement("h4",null,"Email"),r.a.createElement("h5",null,"brighamyoung2@gmail.com"),r.a.createElement("a",{href:"mailto:brighamyoung2@gmail.com",target:"_blank",rel:"noopener noreferrer"},"Send a message"))),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=document.querySelector("#name").value,t=document.querySelector("#email").value,l=document.querySelector("#message").value,r=new FormData,c=document.getElementById("passContact");r.append("name",a),r.append("email",t),r.append("message",l),fetch("/api",{method:"post",body:r}).then(function(e){c.reset(),n(!0)}).catch(function(e){console.log(e),s(!0)})},id:"passContact",name:"passContact",action:""},r.a.createElement("input",{type:"text",id:"name",name:"name",placeholder:"Full Name",required:!0}),r.a.createElement("input",{id:"email",name:"email",placeholder:"Email",required:!0}),r.a.createElement("textarea",{id:"message",name:"message",rows:"10",placeholder:"Message",required:!0}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Send Message"))))},_=(t(48),t(7)),b=t(8),f=t(4),N=t(2),g=t(5),v=function(){return r.a.createElement("section",{id:"experience"},r.a.createElement("h5",null,"Skills I have used"),r.a.createElement("h2",null,"My Experience"),r.a.createElement("div",{className:"container experience__container"},r.a.createElement("div",{className:"experience__frontend"},r.a.createElement("h3",null,"Frontend Development"),r.a.createElement("div",{className:"experience__content"},r.a.createElement("article",{className:"experience__details"},r.a.createElement(i.d,{className:"experience__icon"}),r.a.createElement("h4",null,"HTML")),r.a.createElement("article",{className:"experience__details"},r.a.createElement(_.a,{className:"experience__icon"}),r.a.createElement("h4",null,"CSS")),r.a.createElement("article",{className:"experience__details"},r.a.createElement(b.a,{className:"experience__icon"}),r.a.createElement("h4",null,"JavaScript")),r.a.createElement("article",{className:"experience__details"},r.a.createElement(f.a,{className:"experience__icon"}),r.a.createElement("h4",null,"Bootstrap")),r.a.createElement("article",{className:"experience__details"},r.a.createElement(N.c,{className:"experience__icon"}),r.a.createElement("h4",null,"React")),r.a.createElement("article",{className:"experience__details"},r.a.createElement(N.d,{className:"experience__icon"}),r.a.createElement("h4",null,"Vue")))),r.a.createElement("div",{className:"experience__backend"},r.a.createElement("h3",null,"Backend Development"),r.a.createElement("div",{className:"experience__content"},r.a.createElement("article",{className:"experience__details"},r.a.createElement(N.a,{className:"experience__icon"}),r.a.createElement("h4",null,"Node JS")),r.a.createElement("article",{className:"experience__details"},r.a.createElement(g.b,{className:"experience__icon"}),r.a.createElement("h4",null,"MongoDB")),r.a.createElement("article",{className:"experience__details"},r.a.createElement(g.c,{className:"experience__icon"}),r.a.createElement("h4",null,"MySQL")),r.a.createElement("article",{className:"experience__details"},r.a.createElement(N.b,{className:"experience__icon"}),r.a.createElement("h4",null,"Python"))))))},y=(t(49),function(){return r.a.createElement("footer",null,r.a.createElement("ul",{className:"permalinks"},r.a.createElement("li",null,r.a.createElement("a",{href:"#top"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"#experience"},"Experience")),r.a.createElement("li",null,r.a.createElement("a",{href:"#portfolio"},"Portfolio")),r.a.createElement("li",null,r.a.createElement("a",{href:"#contact"},"Contact"))),r.a.createElement("div",{className:"footer__socials"},r.a.createElement("a",{href:"https://www.linkedin.com/in/chance-robinson/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.d,null)),r.a.createElement("a",{href:"https://github.com/chance-robinson",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.c,null))),r.a.createElement("div",{className:"footer__copyright"},r.a.createElement("small",null,"Copyright \xa9 2022 Chance Robinson. All Rights Reserved")))}),x=(t(50),t(21)),w=t.n(x),k=function(){return r.a.createElement("div",{className:"cta"},r.a.createElement("a",{href:w.a,download:!0,className:"btn"},"Download Resume"),r.a.createElement("a",{href:"#contact",className:"btn btn-primary"},"Contact Me"))},S=function(){return r.a.createElement("div",{className:"header__socials"},r.a.createElement("a",{href:"https://www.linkedin.com/in/chance-robinson/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.d,null)),r.a.createElement("a",{href:"https://github.com/chance-robinson",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.c,null)))},C=function(){return r.a.createElement("header",null,r.a.createElement("section",{id:"home",className:"container header__container"},r.a.createElement("h5",null,"Hello I'm"),r.a.createElement("h1",null,"Chance Robinson"),r.a.createElement("h5",null,"Software/Web Developer"),r.a.createElement(k,null),r.a.createElement("a",{href:"#contact",className:"scroll__down"},"Scroll Down"),r.a.createElement(S,null)))},L=(t(51),t(22)),I=t(23),M=function(){var e=Object(l.useState)([]),a=Object(E.a)(e,2),t=a[0],n=a[1],c=Object(l.useState)([]),o=Object(E.a)(c,2),m=o[0],s=o[1];return Object(l.useEffect)(function(){n(document.querySelectorAll("section")),s(document.querySelectorAll("nav a"))},[]),Object(l.useEffect)(function(){var e;e=window.screen.width>1024?.4:window.screen.width<=1024&&window.screen.width>600?.3:.2;var a=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&m.forEach(function(a){e.target.id===a.dataset.nav?a.classList.add("active"):a.classList.remove("active")})})},{threshold:e});t.forEach(function(e){a.observe(e)})},[t,m]),r.a.createElement("nav",null,r.a.createElement("a",{"data-nav":"home",href:"#top"},r.a.createElement(L.a,null)),r.a.createElement("a",{"data-nav":"about",href:"#about"},r.a.createElement(I.a,null)),r.a.createElement("a",{"data-nav":"experience",href:"#experience"},r.a.createElement(i.a,null)),r.a.createElement("a",{"data-nav":"portfolio",href:"#portfolio"},r.a.createElement(f.b,null)),r.a.createElement("a",{"data-nav":"contact",href:"#contact"},r.a.createElement(i.b,null)))},j=(t(52),t(24)),O=t.n(j),R=t(25),q=t.n(R),z=t(26),P=t.n(z),W=t(27),A=t.n(W),B=function(){return r.a.createElement("section",{id:"portfolio"},r.a.createElement("h5",null,"My Recent Work"),r.a.createElement("h2",null,"Portfolio"),r.a.createElement("div",{className:"container portfolio__container"},r.a.createElement("div",{className:"portfolio__items"},r.a.createElement("article",{className:"portfolio__item"},r.a.createElement("div",{className:"portfolio__item-image"},r.a.createElement("a",{href:"https://github.com/chance-robinson/portfolioreact",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.LazyLoadImage,{src:A.a}))),r.a.createElement("h3",null,"React Portfolio Website"),r.a.createElement("div",{className:"technologies__container"},r.a.createElement("div",{className:"stacks__container"},r.a.createElement("div",{className:"frontend__container"},r.a.createElement(i.d,null),r.a.createElement(_.a,null),r.a.createElement(b.a,null),r.a.createElement(N.c,null)),r.a.createElement("div",{className:"backend__container"},r.a.createElement(N.a,null),r.a.createElement(N.b,null),r.a.createElement(g.a,null)))),r.a.createElement("div",{className:"portfolio__item-cta"},r.a.createElement("a",{href:"https://github.com/chance-robinson/portfolioreact",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"GitHub"),r.a.createElement("a",{href:"https://portfolio1.chancerobinson.xyz/",target:"_blank",rel:"noopener noreferrer",className:"btn"},"Live Website"))),r.a.createElement("article",{className:"portfolio__item"},r.a.createElement("div",{className:"portfolio__item-image"},r.a.createElement("a",{href:"https://photobomb.chancerobinson.xyz/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.LazyLoadImage,{src:O.a}))),r.a.createElement("h3",null,"Vue Multi-User Photo Website"),r.a.createElement("div",{className:"technologies__container"},r.a.createElement("div",{className:"stacks__container"},r.a.createElement("div",{className:"frontend__container"},r.a.createElement(i.d,null),r.a.createElement(_.a,null),r.a.createElement(b.a,null),r.a.createElement(N.d,null)),r.a.createElement("div",{className:"backend__container"},r.a.createElement(N.a,null),r.a.createElement(g.b,null)))),r.a.createElement("div",{className:"portfolio__item-cta"},r.a.createElement("a",{href:"https://github.com/BYUCS260/photo-bomb-chance-robinson",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"GitHub"),r.a.createElement("a",{href:"https://photobomb.chancerobinson.xyz/",target:"_blank",rel:"noopener noreferrer",className:"btn"},"Live Website"))),r.a.createElement("article",{className:"portfolio__item"},r.a.createElement("div",{className:"portfolio__item-image"},r.a.createElement("a",{href:"https://github.com/chance-robinson/personalwebsite",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.LazyLoadImage,{src:q.a}))),r.a.createElement("h3",null,"Basic Personal Website"),r.a.createElement("div",{className:"technologies__container"},r.a.createElement("div",{className:"stacks__container"},r.a.createElement("div",{className:"frontend__container"},r.a.createElement(i.d,null),r.a.createElement(_.a,null),r.a.createElement(b.a,null),r.a.createElement(f.a,null)))),r.a.createElement("div",{className:"portfolio__item-cta"},r.a.createElement("a",{href:"https://github.com/chance-robinson/personalwebsite",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"GitHub"),r.a.createElement("a",{href:"https://chancerobinson.xyz/",target:"_blank",rel:"noopener noreferrer",className:"btn"},"Live Website"))),r.a.createElement("article",{className:"portfolio__item"},r.a.createElement("div",{className:"portfolio__item-image"},r.a.createElement("a",{href:"https://3b.chancerobinson.xyz/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.LazyLoadImage,{src:P.a}))),r.a.createElement("h3",null,"Shopping Layout"),r.a.createElement("div",{className:"technologies__container"},r.a.createElement("div",{className:"stacks__container"},r.a.createElement("div",{className:"frontend__container"},r.a.createElement(i.d,null),r.a.createElement(_.a,null),r.a.createElement(b.a,null),r.a.createElement(N.d,null)))),r.a.createElement("div",{className:"portfolio__item-cta"},r.a.createElement("a",{href:"https://github.com/BYUCS260/grocery-store-chance-robinson",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"GitHub"),r.a.createElement("a",{href:"https://3b.chancerobinson.xyz/",target:"_blank",rel:"noopener noreferrer",className:"btn"},"Live Website"))))))},G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(M,null),r.a.createElement(u,null),r.a.createElement(v,null),r.a.createElement(B,null),r.a.createElement(p,null),r.a.createElement(y,null))},D=(t(53),document.querySelector("#root"));Object(n.createRoot)(D).render(r.a.createElement(G,null))}},[[28,1,2]]]);
//# sourceMappingURL=main.8ecb3545.chunk.js.map