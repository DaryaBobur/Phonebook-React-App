"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[843],{1785:function(n,e,t){t.d(e,{W:function(){return r}});var a,o=t(168),r=t(6088).Z.div(a||(a=(0,o.Z)(["\n    padding-top: 50px;\n    padding-left: 30px;\n    padding-bottom: 30px;\n"])))},9843:function(n,e,t){t.r(e),t.d(e,{default:function(){return nn}});var a,o,r=t(885),i=t(2791),c=t(9434),s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},l=t(168),d=t(6088),u=d.Z.form(a||(a=(0,l.Z)(["\nwidth: 250px;\npadding: 20px;\nborder: 2px solid #e7e5e5;\nmargin-bottom: 30px;\n\n\nbutton {\n    display: flex;\n    margin-right: auto;\n    margin-left: auto;\n    color: #2a2a2a;\n    margin-top: 10px;\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 1.15;\n    background-color: #cad7e3;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n   \n    :hover, :focus {\n        background-color: #a5bacd;\n        color: #544d4d;\n    }\n}\n"]))),p=t(3634),h=t(6128),m=t(7205),v=t(6809),f=t(9153),g=t(2626),x=t(184),b=function(){var n=(0,c.I0)(),e=(0,i.useState)(""),t=(0,r.Z)(e,2),a=t[0],o=t[1],l=(0,i.useState)(""),d=(0,r.Z)(l,2),b=d[0],Z=d[1],z=s(),y=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":o(a);break;case"number":Z(a);break;default:return}},j=function(){o(""),Z("")};return(0,x.jsxs)(u,{onSubmit:function(e){e.preventDefault(),n((0,p.uK)({name:a,number:b})),j()},children:[(0,x.jsxs)(v.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,x.jsx)(f.Z,{sx:{mr:1,my:.5}}),(0,x.jsx)(h.Z,{id:z,size:"small",label:"Name",variant:"outlined",value:a,type:"text",name:"name",onChange:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,x.jsxs)(v.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,x.jsx)(g.Z,{sx:{mr:1,my:.5}}),(0,x.jsx)(h.Z,{id:z,size:"small",margin:"normal",label:"Number",variant:"outlined",value:b,type:"tel",name:"number",onChange:y,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,x.jsx)(m.Z,{variant:"contained",type:"submit",children:"Add contact"})]})},Z=t(4808),z=function(n){return n.filter.filterContacts},y=function(n){return n.contacts.items},j=function(n){return n.contacts.isLoading},C=function(n){return n.contacts.error},S=d.Z.ul(o||(o=(0,l.Z)(["\n    padding-left: 0;\n    margin-top: 30px;\n\n    li {\n        display: flex;\n\n        :not(:last-child) {\n            margin-bottom: 15px;\n        }\n    }\n\n    p {\n        display: flex;\n        align-items: center;\n        font-size: 18px;\n        font-weight: 500;\n\n        svg {\n            width: 20px;\n            height: 20px;\n            margin-right: 5px;\n        }\n    }\n\n    button {\n        margin-left: 10px;\n        display: flex;\n        border-radius: 50%;\n        color: #2a2a2a;\n        background-color: #cad7e3;\n        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    \n        :hover, \n        :focus {\n            background-color: #a5bacd;\n            color: #544d4d;\n        }\n    }\n"]))),k=t(4942),w=t(3366),R=t(7462),M=t(8182),I=t(4419),A=t(2065),F=t(6863),L=t(5873),_=t(753),V=t(9853),P=t(5878),H=t(1217);function N(n){return(0,H.Z)("MuiIconButton",n)}var B,q,O=(0,P.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),D=["edge","children","className","color","disabled","disableFocusRipple","size"],T=(0,F.ZP)(_.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,"default"!==t.color&&e["color".concat((0,V.Z)(t.color))],t.edge&&e["edge".concat((0,V.Z)(t.edge))],e["size".concat((0,V.Z)(t.size))]]}})((function(n){var e=n.theme,t=n.ownerState;return(0,R.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?"rgba(".concat(e.vars.palette.action.activeChannel," / ").concat(e.vars.palette.action.hoverOpacity,")"):(0,A.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})}),(function(n){var e=n.theme,t=n.ownerState;return(0,R.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,R.Z)({color:(e.vars||e).palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?"rgba(".concat(e.vars.palette[t.color].mainChannel," / ").concat(e.vars.palette.action.hoverOpacity,")"):(0,A.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},(0,k.Z)({},"&.".concat(O.disabled),{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}))})),E=i.forwardRef((function(n,e){var t=(0,L.Z)({props:n,name:"MuiIconButton"}),a=t.edge,o=void 0!==a&&a,r=t.children,i=t.className,c=t.color,s=void 0===c?"default":c,l=t.disabled,d=void 0!==l&&l,u=t.disableFocusRipple,p=void 0!==u&&u,h=t.size,m=void 0===h?"medium":h,v=(0,w.Z)(t,D),f=(0,R.Z)({},t,{edge:o,color:s,disabled:d,disableFocusRipple:p,size:m}),g=function(n){var e=n.classes,t=n.disabled,a=n.color,o=n.edge,r=n.size,i={root:["root",t&&"disabled","default"!==a&&"color".concat((0,V.Z)(a)),o&&"edge".concat((0,V.Z)(o)),"size".concat((0,V.Z)(r))]};return(0,I.Z)(i,N,e)}(f);return(0,x.jsx)(T,(0,R.Z)({className:(0,M.Z)(g.root,i),centerRipple:!0,focusRipple:!p,disabled:d,ref:e,ownerState:f},v,{children:r}))})),K=t(3604),U=t(5263),W=function(n){var e=n.contacts,t=(0,c.I0)();return(0,x.jsx)(S,{children:e.map((function(n){var e=n.name,a=n.number,o=n.id;return(0,x.jsxs)("li",{children:[(0,x.jsxs)("p",{children:[(0,x.jsx)(K.Z,{})," ",e," : ",a]}),(0,x.jsx)(E,{size:"small",type:"button",onClick:function(){return t((0,p.GK)(o))},children:(0,x.jsx)(U.Z,{fontSize:"small"})})]},s())}))})},G=t(6932),J=function(){var n=(0,c.I0)(),e=(0,c.v9)(z),t=(0,c.v9)(y),a=(0,c.v9)(j),o=(0,c.v9)(C);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.Z,{label:"Find contacts by name",variant:"outlined",value:e,type:"text",name:"filter",onChange:function(e){n((0,Z.D)(e.target.value))},size:"small"}),t&&(0,x.jsx)(W,{contacts:function(){if(!e)return t;var n=e.toLocaleLowerCase();return t.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}))}()}),a&&!o&&(0,x.jsx)(G.Z,{})]})},$=t(6275),Q=d.Z.h1(B||(B=(0,l.Z)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 20px;\n"]))),X=d.Z.h2(q||(q=(0,l.Z)(["\n    margin-bottom: 25px;\n    font-size: 26px;\n"]))),Y=t(1785),nn=function(){var n=(0,c.I0)();return(0,i.useEffect)((function(){n((0,p.yF)())}),[n]),(0,x.jsxs)(Y.W,{children:[(0,x.jsxs)(Q,{children:[(0,x.jsx)($.Z,{sx:{mr:1,my:.5,fontSize:35}}),"Phonebook"]}),(0,x.jsx)(b,{}),(0,x.jsx)(X,{children:"Contacts:"}),(0,x.jsx)(J,{})]})}},3604:function(n,e,t){var a=t(4836);e.Z=void 0;var o=a(t(5649)),r=t(184),i=(0,o.default)((0,r.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircleSharp");e.Z=i},6275:function(n,e,t){var a=t(4836);e.Z=void 0;var o=a(t(5649)),r=t(184),i=(0,o.default)((0,r.jsx)("path",{d:"M23.99 3H0v18h24l-.01-18zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"}),"ContactPhoneSharp");e.Z=i},5263:function(n,e,t){var a=t(4836);e.Z=void 0;var o=a(t(5649)),r=t(184),i=(0,o.default)((0,r.jsx)("path",{d:"M6 21h12V7H6v14zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteSharp");e.Z=i},9153:function(n,e,t){var a=t(4836);e.Z=void 0;var o=a(t(5649)),r=t(184),i=(0,o.default)((0,r.jsx)("path",{d:"M15.39 14.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56C1.61 15.07 1 16.1 1 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm11-3V6h-2v3h-3v2h3v3h2v-3h3V9h-3z"}),"PersonAddAltSharp");e.Z=i},2626:function(n,e,t){var a=t(4836);e.Z=void 0;var o=a(t(5649)),r=t(184),i=(0,o.default)((0,r.jsx)("path",{d:"M18 1H5v22h13V1zm-6.5 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"}),"PhoneIphoneSharp");e.Z=i}}]);
//# sourceMappingURL=843.552d16f5.chunk.js.map