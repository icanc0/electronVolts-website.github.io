import{S as t,i as e,s,e as a,k as l,t as n,c as r,a as i,d as o,n as c,g as d,b as h,G as u,f as m,F as f,h as p,I as w,j as b,m as g,o as y,x as v,u as E,v as x,w as k,J as $,r as I}from"../chunks/vendor-43644719.js";function T(t){let e,s,b,g,y,v,E,x,k,$;return{c(){e=a("div"),s=a("div"),b=a("iframe"),y=l(),v=a("div"),E=n(t[0]),x=l(),k=a("div"),$=n(t[1]),this.h()},l(a){e=r(a,"DIV",{class:!0});var l=i(e);s=r(l,"DIV",{class:!0});var n=i(s);b=r(n,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),i(b).forEach(o),n.forEach(o),y=c(l),v=r(l,"DIV",{class:!0});var h=i(v);E=d(h,t[0]),h.forEach(o),x=c(l),k=r(l,"DIV",{class:!0});var u=i(k);$=d(u,t[1]),u.forEach(o),l.forEach(o),this.h()},h(){h(b,"class","w-full h-full"),u(b.src,g=t[2])||h(b,"src",g),h(b,"title","YouTube video player"),h(b,"frameborder","0"),h(b,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),b.allowFullscreen=!0,h(s,"class","flex-grow"),h(v,"class","text-3xl pl-4 pt-4"),h(k,"class","text-base text-gray-500 pl-4 pb-4"),h(e,"class","rounded-2xl sm:h-72 shadow-2xl flex flex-col overflow-hidden bg-gray-100 lg\\:w-96 justify-end")},m(t,a){m(t,e,a),f(e,s),f(s,b),f(e,y),f(e,v),f(v,E),f(e,x),f(e,k),f(k,$)},p(t,[e]){4&e&&!u(b.src,g=t[2])&&h(b,"src",g),1&e&&p(E,t[0]),2&e&&p($,t[1])},i:w,o:w,d(t){t&&o(e)}}}function A(t,e,s){let{title:a,description:l,ytlink:n}=e;return t.$$set=t=>{"title"in t&&s(0,a=t.title),"description"in t&&s(1,l=t.description),"ytlink"in t&&s(2,n=t.ytlink)},[a,l,n]}class q extends t{constructor(t){super(),e(this,t,A,T,s,{title:0,description:1,ytlink:2})}}var D=[{title:"bruh moment",description:"pranav bad",ytlink:"https://www.youtube.com/embed/Xqx0KyGEGq0"},{title:"bruh2 moment",description:"pranav bad",ytlink:"https://www.youtube.com/embed/dQw4w9WgXcQ"},{title:"bruh3 moment",description:"pranav bad",ytlink:"https://www.youtube.com/embed/Xqx0KyGEGq0"},{title:"bruh4 moment",description:"pranav gay",ytlink:"https://www.youtube.com/embed/dQw4w9WgXcQ"}];function M(t,e,s){const a=t.slice();return a[1]=e[s],a}function F(t){let e,s;return e=new q({props:{title:t[1].title,description:t[1].description,ytlink:t[1].ytlink}}),{c(){b(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,a){y(e,t,a),s=!0},p:w,i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){E(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function G(t){let e,s,u,p,w,b,g,y,x,T,A,q,D,G,V,X=t[0],Q=[];for(let a=0;a<X.length;a+=1)Q[a]=F(M(t,X,a));const j=t=>E(Q[t],1,1,(()=>{Q[t]=null}));return{c(){e=a("meta"),s=l(),u=a("meta"),p=l(),w=a("meta"),b=l(),g=a("title"),y=n("7393 website"),x=l(),T=a("meta"),A=l(),q=a("meta"),D=l(),G=a("div");for(let t=0;t<Q.length;t+=1)Q[t].c();this.h()},l(t){e=r(t,"META",{charset:!0}),s=c(t),u=r(t,"META",{"http-equiv":!0,content:!0}),p=c(t),w=r(t,"META",{name:!0,content:!0}),b=c(t),g=r(t,"TITLE",{});var a=i(g);y=d(a,"7393 website"),a.forEach(o),x=c(t),T=r(t,"META",{name:!0,content:!0}),A=c(t),q=r(t,"META",{name:!0,content:!0}),D=c(t),G=r(t,"DIV",{id:!0,class:!0});var l=i(G);for(let e=0;e<Q.length;e+=1)Q[e].l(l);l.forEach(o),this.h()},h(){h(e,"charset","utf-8"),h(u,"http-equiv","X-UA-Compatible"),h(u,"content","IE=edge"),h(w,"name","theme-color"),h(w,"content","#BFDBFE"),h(T,"name","description"),h(T,"content","website go brrrr"),h(q,"name","viewport"),h(q,"content","width=device-width, initial-scale=1"),h(G,"id","feed"),h(G,"class","flex flex-col space-y-4 w-full")},m(t,a){m(t,e,a),m(t,s,a),m(t,u,a),m(t,p,a),m(t,w,a),m(t,b,a),m(t,g,a),f(g,y),m(t,x,a),m(t,T,a),m(t,A,a),m(t,q,a),m(t,D,a),m(t,G,a);for(let e=0;e<Q.length;e+=1)Q[e].m(G,null);V=!0},p(t,[e]){if(1&e){let s;for(X=t[0],s=0;s<X.length;s+=1){const a=M(t,X,s);Q[s]?(Q[s].p(a,e),v(Q[s],1)):(Q[s]=F(a),Q[s].c(),v(Q[s],1),Q[s].m(G,null))}for(I(),s=X.length;s<Q.length;s+=1)j(s);k()}},i(t){if(!V){for(let t=0;t<X.length;t+=1)v(Q[t]);V=!0}},o(t){Q=Q.filter(Boolean);for(let e=0;e<Q.length;e+=1)E(Q[e]);V=!1},d(t){t&&o(e),t&&o(s),t&&o(u),t&&o(p),t&&o(w),t&&o(b),t&&o(g),t&&o(x),t&&o(T),t&&o(A),t&&o(q),t&&o(D),t&&o(G),$(Q,t)}}}function V(t){return[D]}class X extends t{constructor(t){super(),e(this,t,V,G,s,{})}}export{X as default};
