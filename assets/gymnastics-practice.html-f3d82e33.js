import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,b as s,d as c,e as l,a as n}from"./app-b0692979.js";const r={},i=n(`<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><p>typescript类型体操练习，用于学习ts。</p><h3 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h3><p><strong>get-return-type</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>v<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>a<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>v<span class="token punctuation">)</span>
   <span class="token keyword">return</span> <span class="token number">1</span>
 <span class="token keyword">else</span>
   <span class="token keyword">return</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token comment">// inter关键字，表示在extends条件语句中待推断的类型变量</span>
<span class="token keyword">type</span> <span class="token class-name">MyReturnType<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">Function</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">infer</span> p <span class="token operator">?</span> p <span class="token operator">:</span><span class="token builtin">never</span>

<span class="token keyword">type</span> <span class="token class-name">a</span> <span class="token operator">=</span> MyReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> fn<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),k={href:"https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E4%BB%8B%E7%BB%8D",target:"_blank",rel:"noopener noreferrer"},d=n(`<p><strong>Omit</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
 title<span class="token operator">:</span> <span class="token builtin">string</span>
 description<span class="token operator">:</span> <span class="token builtin">string</span>
 completed<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token comment">// 利用as进行类型筛选</span>
<span class="token keyword">type</span> <span class="token class-name">MyOmit<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token punctuation">[</span><span class="token constant">Q</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span> <span class="token keyword">as</span> <span class="token constant">Q</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">R</span></span> <span class="token operator">?</span> <span class="token builtin">never</span> <span class="token operator">:</span> <span class="token constant">Q</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">Q</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">TodoPreview</span> <span class="token operator">=</span> MyOmit<span class="token operator">&lt;</span>Todo<span class="token punctuation">,</span> <span class="token string">&#39;description&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;title&#39;</span><span class="token operator">&gt;</span>

<span class="token keyword">const</span> todo<span class="token operator">:</span> TodoPreview <span class="token operator">=</span> <span class="token punctuation">{</span>
 completed<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function u(v,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[i,s("p",null,[s("a",k,[c("infer关键字介绍"),l(a)])]),d])}const g=e(r,[["render",u],["__file","gymnastics-practice.html.vue"]]);export{g as default};
