import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c,b as s,d as a,e as p,a as i}from"./app-d20bcf44.js";const r={},u={href:"https://www.npmjs.com/package/postcss-px-to-viewport",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.npmjs.com/package/postcss-pxtorem",target:"_blank",rel:"noopener noreferrer"};function d(m,n){const t=o("ExternalLinkIcon");return l(),c("div",null,[n[14]||(n[14]=s("h3",{id:"前言",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),a(" 前言")],-1)),n[15]||(n[15]=s("p",null,"在工作中，我们或多或少会接触到大屏可视化的项目，对于大屏可视化的适配，是一大技术点。",-1)),n[16]||(n[16]=s("h3",{id:"可视化适配方案",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#可视化适配方案","aria-hidden":"true"},"#"),a(" 可视化适配方案")],-1)),n[17]||(n[17]=s("p",null,"通过市面上多种方案的对比，最常见也就三种方案，（vh、vw）方案、rem方案以及scale方案。接下来将分别介绍三种方案。",-1)),s("table",null,[n[13]||(n[13]=s("thead",null,[s("tr",null,[s("th",null,"方案"),s("th",null,"原理"),s("th",null,"优点"),s("th",null,"缺点")])],-1)),s("tbody",null,[s("tr",null,[n[3]||(n[3]=s("td",null,"vh、vw方案",-1)),s("td",null,[n[1]||(n[1]=a("配合")),s("a",u,[n[0]||(n[0]=a("postcss-px-to-viewport")),p(t)]),n[2]||(n[2]=a("插件，将设计稿的px值自动转换为vw或者vh。"))]),n[4]||(n[4]=s("td",null,[a("①灵活性高，只需要将插件的viewportWidth属性配置成设计稿即可。"),s("br"),a("②不会出现留白。"),s("br")],-1)),n[5]||(n[5]=s("td",null,[a("①项目中使用echarts图标时，echarts图表中的px值需要根据屏幕宽度动态设置。所以需要手写一个计算比例的函数。"),s("br"),a("②行内样式的px值需要自己手动转换。")],-1))]),s("tr",null,[n[9]||(n[9]=s("td",null,"rem方案",-1)),s("td",null,[n[7]||(n[7]=a("配合")),s("a",k,[n[6]||(n[6]=a("postcss-pxtorem")),p(t)]),n[8]||(n[8]=a("插件，将设计稿的px值自动转换为rem，然后再根据屏幕宽度自动设置根html的font-size的大小。"))]),n[10]||(n[10]=s("td",null,[a("①将postcss-pxtorem的rootValue配置和设计稿一样的即可"),s("br"),a("②不会出现留白")],-1)),n[11]||(n[11]=s("td",null,[a("①项目中使用echarts图标时，echarts图表中的px值需要根据屏幕宽度动态设置。所以需要手写一个计算比例的函数。"),s("br"),a("②行内样式的px值需要自己手动转换。"),s("br"),a("③需要手动写一个函数自动设置根html的font-size的值。")],-1))]),n[12]||(n[12]=s("tr",null,[s("td",null,"scale方案"),s("td",null,"根据屏幕宽度或者高度，动态设置scale的值"),s("td",null,[a("①不用转换px值。"),s("br"),a("②不用动态设置echarts中的px值。")]),s("td",null,"①当屏幕宽高比例与设计稿比例不一致时，两侧可能出现留白。")],-1))])]),n[18]||(n[18]=i(`<p>经过实践，</p><h3 id="相关代码" tabindex="-1"><a class="header-anchor" href="#相关代码" aria-hidden="true">#</a> 相关代码</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> onUnmounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// 将px值自动转换为rem值</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">px2rem</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">px</span><span class="token operator">:</span> number<span class="token punctuation">,</span> designRem <span class="token operator">=</span> <span class="token number">16</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> px <span class="token operator">/</span> designRem <span class="token operator">+</span> <span class="token string">&#39;rem&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 根据宽度缩放比例，将px值自动转换为vw值</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">px2vw</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">px</span><span class="token operator">:</span> number<span class="token punctuation">,</span> designWidth <span class="token operator">=</span> <span class="token number">1920</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>px <span class="token operator">/</span> designWidth<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">&#39;vw&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 根据宽度缩放比例，自动计算echarts的px值</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getEchartsPx</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">px</span><span class="token operator">:</span> number<span class="token punctuation">,</span> designWidth <span class="token operator">=</span> <span class="token number">1920</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
  <span class="token keyword">const</span> width <span class="token operator">=</span> html<span class="token punctuation">.</span>clientWidth
  <span class="token keyword">const</span> scale <span class="token operator">=</span> width <span class="token operator">/</span> designWidth
  <span class="token keyword">return</span> px <span class="token operator">*</span> scale
<span class="token punctuation">}</span>

<span class="token comment">// 根据宽度缩放比例，自动设置font-size</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">setFontSize</span><span class="token punctuation">(</span><span class="token parameter">designWidth <span class="token operator">=</span> <span class="token number">1920</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
  <span class="token keyword">const</span> width <span class="token operator">=</span> html<span class="token punctuation">.</span>clientWidth
  <span class="token comment">// 缩放比例</span>
  <span class="token keyword">const</span> scale <span class="token operator">=</span> width <span class="token operator">/</span> designWidth
  html<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">.</span>fontSize<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;px&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> scale <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 根据宽度和高度，自动计算scale</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getScale</span><span class="token punctuation">(</span><span class="token parameter">designWidth <span class="token operator">=</span> <span class="token number">1920</span><span class="token punctuation">,</span> designHeight <span class="token operator">=</span> <span class="token number">1080</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> scale <span class="token operator">=</span> ref<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> html <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
  <span class="token keyword">const</span> width <span class="token operator">=</span> html<span class="token punctuation">.</span>clientWidth
  <span class="token keyword">const</span> height <span class="token operator">=</span> html<span class="token punctuation">.</span>clientHeight
  scale<span class="token punctuation">.</span>value <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>width <span class="token operator">/</span> designWidth<span class="token punctuation">,</span> height <span class="token operator">/</span> designHeight<span class="token punctuation">)</span>
  <span class="token keyword">return</span> scale
<span class="token punctuation">}</span>

<span class="token comment">// 大小变化时，监听resize方法</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useResize</span><span class="token punctuation">(</span><span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h3><p>①使用scale缩放方法时，请使用绝对定位或者将body元素overflow:hideen，否则会出现滚动条。</p><p>②使用scale缩放方式时，如果使用了gis地图，会存在点击偏差的情况，这种可以嵌入iframe或者将地图板块和其他数据面板分隔开，动态计算地图板块的宽高。</p>`,6))])}const w=e(r,[["render",d],["__file","visual-adaptive.html.vue"]]);export{w as default};