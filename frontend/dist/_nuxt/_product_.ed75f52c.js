import{_ as h,a as x}from"./Toc.vue.119ea2d8.js";import f from"./ContentRenderer.e3cfdfba.js";import{g as w,h as b,i as k,n as C,j as B,u as $,o as _,c as I,a as p,b as v,k as a,l as N,w as q,m as R}from"./entry.a118a1ca.js";import{u as V,q as A}from"./query.10fbaf7b.js";import"./nuxt-img.234d6e97.js";import"./tag.2751f153.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./nuxt-link.f4ccda79.js";import"./ContentRendererMarkdown.vue.40943d2b.js";import"./index.a6ef77ff.js";import"./preview.01622b25.js";const H={class:"px-6 container max-w-5xl mx-auto sm:grid grid-cols-12 gap-x-12"},T={class:"col-span-12 lg:col-span-9"},j={class:"prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc dark:prose-invert prose-img:rounded-lg"},z=p("p",null,"No content found.",-1),U=w({__name:"[product]",async setup(D){let n,m;const{path:o}=b(),{data:t,error:y}=([n,m]=k(()=>V(`blog-post-${o}`,()=>A(o).findOne())),n=await n,m(),n);y.value&&C("/404");const e=B(()=>{var l,c,i,r,s,d,u,g;return{title:((l=t.value)==null?void 0:l.title)||"no-title available",description:((c=t.value)==null?void 0:c.description)||"no-descriptoin available",image:((i=t.value)==null?void 0:i.image)||"/nuxt-blog/no-image_cyyits.png",alt:((r=t.value)==null?void 0:r.alt)||"no alter data available",ogImage:((s=t.value)==null?void 0:s.ogImage)||"/nuxt-blog/no-image_cyyits.png",date:((d=t.value)==null?void 0:d.date)||"not-date-available",tags:((u=t.value)==null?void 0:u.tags)||[],published:((g=t.value)==null?void 0:g.published)||!1}});return $({title:e.value.title||"",meta:[{name:"description",content:e.value.description},{name:"description",content:e.value.description},{property:"og:site_name",content:"icePot"},{hid:"og:type",property:"og:type",content:"website"},{property:"og:url",content:`https://blog-nurriyad.vercel.app/${o}`},{property:"og:title",content:e.value.title},{property:"og:description",content:e.value.description},{property:"og:image",content:e.value.ogImage||e.value.image},{name:"twitter:site",content:"@qdnvubp"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:url",content:`http://localhost:3000/${o}`},{name:"twitter:title",content:e.value.title},{name:"twitter:description",content:e.value.description},{name:"twitter:image",content:e.value.ogImage||e.value.image}],link:[{rel:"canonical",href:`http://localhost:3000/${o}`}]}),(l,c)=>{const i=h,r=f,s=x;return _(),I("div",H,[p("div",T,[v(i,{title:a(e).title,image:a(e).image,alt:a(e).alt,date:a(e).date,description:a(e).description,tags:a(e).tags},null,8,["title","image","alt","date","description","tags"]),p("div",j,[a(t)?(_(),N(r,{key:0,value:a(t)},{empty:q(()=>[z]),_:1},8,["value"])):R("",!0)])]),v(s)])}}});export{U as default};
