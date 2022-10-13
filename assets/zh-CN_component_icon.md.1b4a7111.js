import{_ as m}from"./chunks/contributors.5f24854e.js";import{r as l,o as v,c as f,b as n,a,w as p,d as s,e as c,u as e,m as i,y as k,H as r,ah as b,C as d,_ as y}from"./app.829438bf.js";const q=n("h1",{id:"icon-\u56FE\u6807",tabindex:"-1"},[s("Icon \u56FE\u6807 "),n("a",{class:"header-anchor vp-link",href:"#icon-\u56FE\u6807","aria-hidden":"true"},"#")],-1),T=n("p",null,"Element Plus \u63D0\u4F9B\u4E86\u4E00\u5957\u5E38\u7528\u7684\u56FE\u6807\u96C6\u5408\u3002",-1),x=n("h2",{id:"\u4F7F\u7528\u56FE\u6807",tabindex:"-1"},[s("\u4F7F\u7528\u56FE\u6807 "),n("a",{class:"header-anchor vp-link",href:"#\u4F7F\u7528\u56FE\u6807","aria-hidden":"true"},"#")],-1),S=s("\u5982\u679C\u4F60\u60F3\u50CF\u7528\u4F8B\u4E00\u6837"),I=n("strong",null,"\u76F4\u63A5\u4F7F\u7528",-1),C=s("\uFF0C\u4F60\u9700\u8981"),E={href:"https://v3.vuejs.org/guide/component-registration.html#global-registration",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},V=s("\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6"),w=s("\uFF0C\u624D\u80FD\u591F\u76F4\u63A5\u5728\u9879\u76EE\u91CC\u4F7F\u7528\u3002"),P=s("\u5982\u82E5\u9700\u8981\u67E5\u770B\u6240\u6709\u53EF\u7528\u7684 SVG \u56FE\u6807\u8BF7\u67E5\u9605 "),A={href:"https://unpkg.com/browse/@element-plus/icons-vue@1/dist/es/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},N=s("@element-plus/icons-vue@1.x"),z={href:"https://unpkg.com/browse/@element-plus/icons-vue@latest/dist/types/components/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},D=s("@element-plus/icons-vue@latest"),j=s(" \u548C\u6709\u5173 "),G=n("a",{href:"#icon-collection",class:"vp-link"},"Icon Collection",-1),R=s(" \u7684\u6E90\u7801 "),L={href:"https://github.com/element-plus/element-plus-icons",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},B=s("element-plus-icons"),H=c(`<h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor vp-link" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><h3 id="\u4F7F\u7528\u5305\u7BA1\u7406\u5668" tabindex="-1">\u4F7F\u7528\u5305\u7BA1\u7406\u5668 <a class="header-anchor vp-link" href="#\u4F7F\u7528\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token comment"># \u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668</span>

<span class="token comment"># NPM</span>
$ <span class="token function">npm</span> <span class="token function">install</span> @element-plus/icons-vue
<span class="token comment"># Yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> @element-plus/icons-vue
<span class="token comment"># pnpm</span>
$ <span class="token function">pnpm</span> <span class="token function">install</span> @element-plus/icons-vue
</code></pre></div><h3 id="\u6CE8\u518C\u6240\u6709\u56FE\u6807" tabindex="-1">\u6CE8\u518C\u6240\u6709\u56FE\u6807 <a class="header-anchor vp-link" href="#\u6CE8\u518C\u6240\u6709\u56FE\u6807" aria-hidden="true">#</a></h3><p>\u60A8\u9700\u8981\u4ECE <code>@element-plus/icons-vue</code> \u4E2D\u5BFC\u5165\u6240\u6709\u56FE\u6807\u5E76\u8FDB\u884C\u5168\u5C40\u6CE8\u518C\u3002</p><div class="language-ts"><pre><code><span class="token comment">// main.ts</span>

<span class="token comment">// \u5982\u679C\u60A8\u6B63\u5728\u4F7F\u7528CDN\u5F15\u5165\uFF0C\u8BF7\u5220\u9664\u4E0B\u9762\u4E00\u884C\u3002</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ElementPlusIconsVue <span class="token keyword">from</span> <span class="token string">&#39;@element-plus/icons-vue&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> component<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>ElementPlusIconsVue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> component<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),M=s("\u60A8\u4E5F\u53EF\u4EE5\u53C2\u8003 "),U={href:"https://codepen.io/sxzz/pen/xxpvdrg",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},$=s("\u6B64\u6A21\u677F"),F=s("\u3002"),O=n("h3",{id:"\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165",tabindex:"-1"},[s("\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165 "),n("a",{class:"header-anchor vp-link",href:"#\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165","aria-hidden":"true"},"#")],-1),W=n("p",null,[s("\u76F4\u63A5\u901A\u8FC7\u6D4F\u89C8\u5668\u7684 HTML \u6807\u7B7E\u5BFC\u5165 Element Plus\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u4F7F\u7528\u5168\u5C40\u53D8\u91CF "),n("code",null,"ElementPlusIconsVue"),s("\u4E86\u3002")],-1),Y=s("\u6839\u636E\u4E0D\u540C\u7684 CDN \u63D0\u4F9B\u5546\u6709\u4E0D\u540C\u7684\u5F15\u5165\u65B9\u5F0F\uFF0C \u6839\u636E\u4E0D\u540C\u7684 CDN \u63D0\u4F9B\u5546\u6709\u4E0D\u540C\u7684\u5F15\u5165\u65B9\u5F0F\uFF0C \u6211\u4EEC\u5728\u8FD9\u91CC\u4EE5 "),J={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},K=s("unpkg"),Q=s(" \u548C "),X={href:"https://jsdelivr.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Z=s("jsDelivr"),nn=s(" \u4E3E\u4F8B\u3002 \u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u5B83\u7684 CDN \u4F9B\u5E94\u5546\u3002"),sn=c(`<h4 id="unpkg" tabindex="-1">unpkg <a class="header-anchor vp-link" href="#unpkg" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/@element-plus/icons-vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h4 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor vp-link" href="#jsdelivr" aria-hidden="true">#</a></h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@element-plus/icons-vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,4),an={class:"tip custom-block"},tn=n("p",{class:"custom-block-title"},"TIP",-1),en=s("\u6211\u4EEC\u5EFA\u8BAE\u4F7F\u7528 CDN \u5F15\u5165 Element Plus \u7684\u7528\u6237\u5728\u94FE\u63A5\u5730\u5740\u4E0A\u9501\u5B9A\u7248\u672C\uFF0C\u4EE5\u514D\u5C06\u6765 Element Plus \u5347\u7EA7\u65F6\u53D7\u5230\u975E\u517C\u5BB9\u6027\u66F4\u65B0\u7684\u5F71\u54CD\u3002 \u9501\u5B9A\u7248\u672C\u7684\u65B9\u6CD5\u8BF7\u67E5\u770B "),pn={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},on=s("unpkg.com"),cn=s("\u3002"),ln=n("h3",{id:"\u81EA\u52A8\u5BFC\u5165",tabindex:"-1"},[s("\u81EA\u52A8\u5BFC\u5165 "),n("a",{class:"header-anchor vp-link",href:"#\u81EA\u52A8\u5BFC\u5165","aria-hidden":"true"},"#")],-1),un=s("\u4F7F\u7528 "),kn={href:"https://github.com/antfu/unplugin-icons",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},rn=s("unplugin-icons"),dn=s(" \u548C "),_n={href:"https://github.com/antfu/unplugin-auto-import",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},hn=s("unplugin-auto-import"),gn=s(" \u4ECE iconify \u4E2D\u81EA\u52A8\u5BFC\u5165\u4EFB\u4F55\u56FE\u6807\u96C6\u3002 \u60A8\u53EF\u4EE5\u53C2\u8003"),mn={href:"https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},vn=s("\u6B64\u6A21\u677F"),fn=s("\u3002"),bn=n("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[s("\u57FA\u7840\u7528\u6CD5 "),n("a",{class:"header-anchor vp-link",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),yn={class:"warning custom-block"},qn=n("p",{class:"custom-block-title"},"WARNING",-1),Tn=s("\u56E0\u4E3A HTML \u6807\u51C6\u5DF2\u7ECF\u5B9A\u4E49\u4E86\u4E00\u4E2A\u540D\u4E3A "),xn={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Sn=s("menu"),In=s(" \u7684\u6807\u7B7E\uFF0C \u5982\u679C\u60A8\u6CE8\u518C\u7684 "),Cn=n("code",null,"menu",-1),En=s(" \u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\uFF0C\u60A8\u9700\u8981\u4F7F\u7528\u522B\u540D\u6765\u6E32\u67D3\u56FE\u6807\u3002"),Vn=c(`<div class="language-vue"><pre><code><span class="token comment">&lt;!-- \u4F7F\u7528 el-icon \u4E3A SVG \u56FE\u6807\u63D0\u4F9B\u5C5E\u6027 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>size<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u6216\u8005\u72EC\u7ACB\u4F7F\u7528\u5B83\uFF0C\u4E0D\u4ECE\u7236\u7EA7\u83B7\u53D6\u5C5E\u6027 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),wn=c(`<h2 id="\u7ED3\u5408-el-icon-\u4F7F\u7528" tabindex="-1">\u7ED3\u5408 el-icon \u4F7F\u7528 <a class="header-anchor vp-link" href="#\u7ED3\u5408-el-icon-\u4F7F\u7528" aria-hidden="true">#</a></h2><p><code>el-icon</code> \u4E3A raw SVG \u56FE\u6807\u63D0\u4F9B\u989D\u5916\u7684\u5C5E\u6027, \u63D0\u4F9B\u7684\u8BE6\u7EC6\u5C5E\u6027\u8BF7\u7EE7\u7EED\u9605\u8BFB\u3002</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    with extra class <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>is-loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#409EFC<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no-inherit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Share</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Delete</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>is-loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loading</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">vertical-align</span><span class="token punctuation">:</span> middle</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span> Search <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,3),Pn=n("p",null,[s(" \u901A\u8FC7\u6DFB\u52A0\u989D\u5916\u7684\u7C7B\u540D "),n("b",null,"is-loading"),s("\uFF0C\u4F60\u7684\u56FE\u6807\u5C31\u53EF\u4EE5\u5728 2 \u79D2\u5185\u65CB\u8F6C 360 \u5EA6\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u6539\u5199\u60F3\u8981\u7684\u52A8\u753B\u3002 ")],-1),An={style:{display:"flex","align-items":"center","justify-content":"space-between",width:"100%"}},Nn=n("span",{style:{"vertical-align":"middle"}},"\u641C\u7D22",-1),zn=c(`<h2 id="\u76F4\u63A5\u4F7F\u7528-svg-\u56FE\u6807" tabindex="-1">\u76F4\u63A5\u4F7F\u7528 SVG \u56FE\u6807 <a class="header-anchor vp-link" href="#\u76F4\u63A5\u4F7F\u7528-svg-\u56FE\u6807" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u7531\u4E8ESVG\u56FE\u6807\u9ED8\u8BA4\u4E0D\u643A\u5E26\u4EFB\u4F55\u5C5E\u6027 --&gt;</span>
    <span class="token comment">&lt;!-- \u4F60\u9700\u8981\u76F4\u63A5\u63D0\u4F9B\u5B83\u4EEC --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Edit</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Share</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Delete</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span> <span class="token property">margin-right</span><span class="token punctuation">:</span> 8px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),Dn={style:{"font-size":"20px"}},jn=n("h2",{id:"\u56FE\u6807\u96C6\u5408",tabindex:"-1"},[s("\u56FE\u6807\u96C6\u5408 "),n("a",{class:"header-anchor vp-link",href:"#\u56FE\u6807\u96C6\u5408","aria-hidden":"true"},"#")],-1),Gn=n("div",{class:"tip custom-block"},[n("p",{class:"custom-block-title"},"TIP"),n("p",null,[s("\u53EA\u8981\u4F60\u5B89\u88C5\u4E86 @element-plus/icons\uFF0C"),n("strong",null,"\u5C31\u53EF\u4EE5\u5728\u4EFB\u610F\u7248\u672C\u91CC\u4F7F\u7528 SVG \u56FE\u6807"),s("\u3002")]),n("p",null,[n("strong",null,"\u60A8\u53EF\u4EE5\u70B9\u51FB\u56FE\u6807\u590D\u5236\u4EE3\u7801\u3002")])],-1),Rn=c('<h2 id="icon-\u5C5E\u6027" tabindex="-1">Icon \u5C5E\u6027 <a class="header-anchor vp-link" href="#icon-\u5C5E\u6027" aria-hidden="true">#</a></h2><div class="vp-table"><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>color</code></td><td>svg \u7684 fill \u989C\u8272</td><td><code>Pick&lt;CSSProperties, &#39;color&#39;&gt;</code></td><td>\u7EE7\u627F\u989C\u8272</td></tr><tr><td><code>size</code></td><td>SVG \u56FE\u6807\u7684\u5927\u5C0F\uFF0Csize x size</td><td><code>number | string</code></td><td>\u7EE7\u627F\u5B57\u4F53\u5927\u5C0F</td></tr></tbody></table></div><h2 id="icon-\u63D2\u69FD" tabindex="-1">Icon \u63D2\u69FD <a class="header-anchor vp-link" href="#icon-\u63D2\u69FD" aria-hidden="true">#</a></h2><div class="vp-table"><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>default</code></td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td></tr></tbody></table></div><h2 id="\u6E90\u4EE3\u7801" tabindex="-1">\u6E90\u4EE3\u7801 <a class="header-anchor vp-link" href="#\u6E90\u4EE3\u7801" aria-hidden="true">#</a></h2>',5),Ln={href:"https://github.com/element-plus/element-plus/tree/dev/packages/components/icon",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Bn=s("\u7EC4\u4EF6"),Hn=s(" \u2022 "),Mn={href:"https://github.com/element-plus/element-plus/blob/dev/docs/en-US/component/icon.md",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Un=s("\u6587\u6863"),$n=n("h2",{id:"\u8D21\u732E\u8005",tabindex:"-1"},[s("\u8D21\u732E\u8005 "),n("a",{class:"header-anchor vp-link",href:"#\u8D21\u732E\u8005","aria-hidden":"true"},"#")],-1),Qn='{"title":"Icon \u56FE\u6807","description":"","frontmatter":{"title":"Icon \u56FE\u6807","lang":"zh-CN"},"headers":[{"level":2,"title":"\u4F7F\u7528\u56FE\u6807","slug":"\u4F7F\u7528\u56FE\u6807"},{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u4F7F\u7528\u5305\u7BA1\u7406\u5668","slug":"\u4F7F\u7528\u5305\u7BA1\u7406\u5668"},{"level":3,"title":"\u6CE8\u518C\u6240\u6709\u56FE\u6807","slug":"\u6CE8\u518C\u6240\u6709\u56FE\u6807"},{"level":3,"title":"\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165","slug":"\u6D4F\u89C8\u5668\u76F4\u63A5\u5F15\u5165"},{"level":3,"title":"\u81EA\u52A8\u5BFC\u5165","slug":"\u81EA\u52A8\u5BFC\u5165"},{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u7ED3\u5408 el-icon \u4F7F\u7528","slug":"\u7ED3\u5408-el-icon-\u4F7F\u7528"},{"level":2,"title":"\u76F4\u63A5\u4F7F\u7528 SVG \u56FE\u6807","slug":"\u76F4\u63A5\u4F7F\u7528-svg-\u56FE\u6807"},{"level":2,"title":"\u56FE\u6807\u96C6\u5408","slug":"\u56FE\u6807\u96C6\u5408"},{"level":2,"title":"Icon \u5C5E\u6027","slug":"icon-\u5C5E\u6027"},{"level":2,"title":"Icon \u63D2\u69FD","slug":"icon-\u63D2\u69FD"},{"level":2,"title":"\u6E90\u4EE3\u7801","slug":"\u6E90\u4EE3\u7801"},{"level":2,"title":"\u8D21\u732E\u8005","slug":"\u8D21\u732E\u8005"}],"relativePath":"zh-CN/component/icon.md","lastUpdated":null}',Fn={},Xn=Object.assign(Fn,{__name:"icon",setup(On){return(Wn,Yn)=>{const t=y,o=l("ElIcon"),u=l("ElRow"),_=l("ElButton"),h=l("IconList"),g=m;return v(),f("div",null,[q,T,x,n("ul",null,[n("li",null,[n("p",null,[S,I,C,n("a",E,[V,a(t,{class:"link-icon"})]),w])]),n("li",null,[n("p",null,[P,n("a",A,[N,a(t,{class:"link-icon"})]),n("a",z,[D,a(t,{class:"link-icon"})]),j,G,R,n("a",L,[B,a(t,{class:"link-icon"})])])])]),H,n("p",null,[M,n("a",U,[$,a(t,{class:"link-icon"})]),F]),O,W,n("p",null,[Y,n("a",J,[K,a(t,{class:"link-icon"})]),Q,n("a",X,[Z,a(t,{class:"link-icon"})]),nn]),sn,n("div",an,[tn,n("p",null,[en,n("a",pn,[on,a(t,{class:"link-icon"})]),cn])]),ln,n("p",null,[un,n("a",kn,[rn,a(t,{class:"link-icon"})]),dn,n("a",_n,[hn,a(t,{class:"link-icon"})]),gn,n("a",mn,[vn,a(t,{class:"link-icon"})]),fn]),bn,n("div",yn,[qn,n("p",null,[Tn,n("a",xn,[Sn,a(t,{class:"link-icon"})]),In,Cn,En])]),Vn,a(u,null,{default:p(()=>[n("div",null,[a(o,{size:30},{default:p(()=>[a(e(i))]),_:1}),a(e(i))])]),_:1}),wn,a(u,null,{default:p(()=>[Pn,n("div",An,[a(o,{size:20},{default:p(()=>[a(e(i))]),_:1}),a(o,{color:"#409EFC",class:"no-inherit"},{default:p(()=>[a(e(k))]),_:1}),a(o,null,{default:p(()=>[a(e(r))]),_:1}),a(o,{class:"is-loading"},{default:p(()=>[a(e(b))]),_:1}),a(_,{type:"primary"},{default:p(()=>[a(o,{style:{"vertical-align":"middle",color:"#fff"}},{default:p(()=>[a(e(d))]),_:1}),Nn]),_:1})])]),_:1}),zn,a(u,null,{default:p(()=>[n("div",Dn,[a(e(i),{style:{width:"1em",height:"1em","margin-right":"8px"}}),a(e(k),{style:{width:"1em",height:"1em","margin-right":"8px"}}),a(e(r),{style:{width:"1em",height:"1em","margin-right":"8px"}}),a(e(d),{style:{width:"1em",height:"1em","margin-right":"8px"}})])]),_:1}),jn,Gn,a(h),Rn,n("p",null,[n("a",Ln,[Bn,a(t,{class:"link-icon"})]),Hn,n("a",Mn,[Un,a(t,{class:"link-icon"})])]),$n,a(g,{id:"icon"})])}}});export{Qn as __pageData,Xn as default};