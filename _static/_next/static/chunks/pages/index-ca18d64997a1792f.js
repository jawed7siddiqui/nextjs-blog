(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3678)}])},8724:function(t,e,s){"use strict";var i=s(7568),a=s(1438),n=s(2951),r=s(8029),l=s(460),o=s(4051),c=s.n(o),d=s(5893),u=s(7294),h=s(1664),x=s.n(h),v=s(3446),m=function(t){(0,r.Z)(s,t);var e=(0,l.Z)(s);function s(t){var i;return(0,a.Z)(this,s),(i=e.call(this,t)).state={post:{},loading:!0},console.log(i.props),i}return(0,n.Z)(s,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var t=this;return(0,i.Z)(c().mark((function e(){var s,i,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.props.slug?t.props.slug:"seo-guide-for-beginners",i=v.Z.route("post/show/"+s),e.next=4,v.Z.get(i);case 4:a=e.sent,t.setState({post:a.data,loading:!1});case 6:case"end":return e.stop()}}),e)})))()}},{key:"render",value:function(){var t,e,s,i,a,n,r,l;return(0,d.jsx)(d.Fragment,{children:this.state.loading?(0,d.jsx)("div",{className:"",children:(0,d.jsx)("div",{className:"text-2xl font-bold text-center my-10",children:"Loading..."})}):(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"my-10",children:[(0,d.jsx)("h6",{className:"text-gray-500 font-bold mb-2",children:null===(t=this.state.post.current)||void 0===t?void 0:t.post_at}),(0,d.jsx)("h1",{className:"text-xl md:text-4xl font-bold leading-snug capitalize",children:null===(e=this.state.post.current)||void 0===e?void 0:e.title})]}),(null===(s=this.state.post.current)||void 0===s?void 0:s.featured_image)&&(0,d.jsx)("img",{src:null===(i=this.state.post.current)||void 0===i?void 0:i.featured_image,alt:"image",className:"w-full rounded-md"}),(0,d.jsxs)("div",{className:"my-10 md:mx-5 font-serif",children:[(0,d.jsx)("div",{className:"leading-10 text-xl",dangerouslySetInnerHTML:{__html:null===(a=this.state.post.current)||void 0===a?void 0:a.description}}),(0,d.jsxs)("div",{className:"",children:[(0,d.jsx)("hr",{className:"mt-10"}),(0,d.jsxs)("div",{className:"",children:[(0,d.jsx)("div",{className:"",children:(null===(n=this.state.post.previous)||void 0===n?void 0:n.id)&&(0,d.jsxs)("a",{href:"/"+this.state.post.previous.slug,style:{textDecoration:"none",color:"black"},children:[(0,d.jsx)("i",{className:"fa fa-arrow-left"})," Previous Article",(0,d.jsx)("h4",{className:"pt-2 footer_previous_btn_data",children:this.state.post.previous.title})]})}),(0,d.jsx)("div",{className:"",children:(null===(r=this.state.post.next)||void 0===r?void 0:r.id)&&(0,d.jsxs)("a",{href:"/"+this.state.post.next.slug,children:["Next Article ",(0,d.jsx)("i",{className:"fa fa-arrow-right"}),(0,d.jsx)("h4",{className:"",children:this.state.post.next.title})]})}),(0,d.jsx)("div",{className:"",children:(0,d.jsx)(x(),{href:"/",children:(0,d.jsxs)("a",{children:["Feeling Lucky",(0,d.jsx)("h4",{className:"",children:"Load a random article"})]})})})]})]}),(0,d.jsx)("div",{className:"bg-white dark:bg-[#171717] dark:text-white text-[#171717]",children:(0,d.jsx)("h5",{className:"",children:null===(l=this.state.post.current)||void 0===l?void 0:l.title})})]})]})})}}]),s}(u.Component);e.Z=m},3678:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return n}});var i=s(5893),a=s(8724);function n(){return(0,i.jsx)("div",{className:"mx-5 md:mx-40 lg:mx-52",children:(0,i.jsx)(a.Z,{})})}}},function(t){t.O(0,[774,888,179],(function(){return e=5557,t(t.s=e);var e}));var e=t.O();_N_E=e}]);