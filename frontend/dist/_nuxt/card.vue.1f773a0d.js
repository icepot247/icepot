import{_ as p}from"./nuxt-img.f501b605.js";import{_ as m,a as u}from"./tag.33db9388.js";import{_ as g}from"./arrow.e39e7ca9.js";import{_ as x}from"./nuxt-link.ac064314.js";import{g as f,o as n,c as a,b as o,w as h,a as t,t as s,F as k,z as b}from"./entry.1f193b85.js";const v={class:"group border dark:border-gray-800 m-2 rounded-2xl overflow-hidden shadow-sm text-zinc-700 dark:text-zinc-300"},y={class:"sm:col-span-3"},w={class:"sm:col-span-7 p-5"},z={class:"text-xl font-semibold text-black dark:text-zinc-300 pb-1 group-hover:text-sky-700 dark:group-hover:text-sky-400"},L={class:"text-ellipsis line-clamp-2"},B={class:"text-black dark:text-zinc-300 text-sm mt-2 mb-1 md:flex md:space-x-6"},N={class:"flex items-center"},j={class:"flex items-center gap-1 flex-wrap"},C={class:"flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2"},D=t("p",null,"Read More",-1),R=f({__name:"card",props:{path:{default:"/"},title:{default:"no-title"},date:{default:"no-date"},description:{default:"no-description"},image:{default:"/nuxt-blog/no-image_cyyits.png"},alt:{default:"no-alt"},ogImage:{default:"/nuxt-blog/no-image_cyyits.png"},tags:{default:()=>[]},published:{type:Boolean,default:!1}},setup(F){return(e,I)=>{const r=p,c=m,d=u,i=g,_=x;return n(),a("article",v,[o(_,{to:e.path,class:"grid grid-cols-1 sm:grid-cols-10 gap-1"},{default:h(()=>[t("div",y,[o(r,{class:"h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.02] transition-all duration-500",src:e.image,alt:e.alt},null,8,["src","alt"])]),t("div",w,[t("h2",z,s(e.title),1),t("p",L,s(e.description),1),t("div",B,[t("div",N,[o(c),t("p",null,s(e.date),1)]),t("div",j,[o(d),(n(!0),a(k,null,b(e.tags,l=>(n(),a("p",{key:l},s(l),1))),128))])]),t("div",C,[D,o(i)])])]),_:1},8,["to"])])}}});export{R as _};