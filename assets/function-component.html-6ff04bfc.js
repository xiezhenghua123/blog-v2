import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as o,b as n,d as c,a as l}from"./app-36220692.js";const i=n("h3",{id:"demo实现",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo实现","aria-hidden":"true"},"#"),c(" demo实现")],-1),u=n("p",null,"（项目vue版本为3，demo演示只能使用vue3）",-1),r=l(`<details class="hint-container details"><summary>vue2代码</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> templateVue <span class="token keyword">from</span> <span class="token string">&#39;./index.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">openDialog</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> DialogConstructor <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>templateVue<span class="token punctuation">)</span>
  <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DialogConstructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">propsData</span><span class="token operator">:</span> options
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  instance<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
  <span class="token keyword">return</span> instance
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video-play-dialog<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-mask<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>close-btn<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closeDialog()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog-wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
     {{ props.title }}
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">proxy</span><span class="token operator">:</span> instance <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
   <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;标题&#39;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 卸载组件</span>
<span class="token keyword">const</span> <span class="token function-variable function">closeDialog</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 instance <span class="token operator">&amp;&amp;</span> instance<span class="token punctuation">.</span>$el <span class="token operator">&amp;&amp;</span> instance<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>parentNode <span class="token operator">&amp;&amp;</span> instance<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
 instance <span class="token operator">&amp;&amp;</span> instance<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.video-play-dialog</span> <span class="token punctuation">{</span>
 <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
 <span class="token property">z-index</span><span class="token punctuation">:</span> 999<span class="token punctuation">;</span>
 <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token property">pointer-events</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
 <span class="token selector">.dialog-mask</span> <span class="token punctuation">{</span>
   <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
   <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token selector">.close-btn</span> <span class="token punctuation">{</span>
   <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
   <span class="token property">top</span><span class="token punctuation">:</span> 56px<span class="token punctuation">;</span>
   <span class="token property">right</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
   <span class="token property">width</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
   <span class="token property">height</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
   <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
   <span class="token property">background-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>
   <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token selector">.dialog-wrapper</span> <span class="token punctuation">{</span>
   <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
   <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
   <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
   <span class="token property">width</span><span class="token punctuation">:</span> 1183px<span class="token punctuation">;</span>
   <span class="token property">height</span><span class="token punctuation">:</span> 665px<span class="token punctuation">;</span>
   <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
   <span class="token property">padding</span><span class="token punctuation">:</span> 70px 60px 48px<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),k={__name:"function-component.html",setup(d){return(s,a)=>(e(),o("div",null,[i,u,n("p",null,[n("button",{onClick:a[0]||(a[0]=(...t)=>s.openDialogVue3&&s.openDialogVue3(...t))},"vue3打开弹窗")]),r]))}},b=p(k,[["__file","function-component.html.vue"]]);export{b as default};
