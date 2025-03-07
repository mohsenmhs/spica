import{r as o,a as Q,u as G,b as J,c as L,d as T,_ as U,K as A,g as Z,m as ee,e as S,f as ne,h as ie,i as ae,k as te,D as se,l as le,W as re,n as ce,j as e,R as E,C as I,o as m,p as W,q as de,F as oe,B as O,N as ue}from"./index-DX5oSMXO.js";import{C as X}from"./index-wFX6hjc_.js";import{R as V}from"./index-Dw9e4qVT.js";/* empty css               */import{S as $}from"./index-BllSl7O7.js";import"./CheckOutlined-CGOol2Z3.js";var he=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],_=o.forwardRef(function(n,i){var l,a=n.prefixCls,t=a===void 0?"rc-switch":a,d=n.className,u=n.checked,r=n.defaultChecked,s=n.disabled,c=n.loadingIcon,h=n.checkedChildren,p=n.unCheckedChildren,w=n.onClick,y=n.onChange,k=n.onKeyDown,q=Q(n,he),z=G(!1,{value:u,defaultValue:r}),P=J(z,2),f=P[0],b=P[1];function v(g,M){var C=f;return s||(C=g,b(C),y==null||y(C,M)),C}function H(g){g.which===A.LEFT?v(!1,g):g.which===A.RIGHT&&v(!0,g),k==null||k(g)}function x(g){var M=v(!f,g);w==null||w(M,g)}var D=L(t,d,(l={},T(l,"".concat(t,"-checked"),f),T(l,"".concat(t,"-disabled"),s),l));return o.createElement("button",U({},q,{type:"button",role:"switch","aria-checked":f,disabled:s,className:D,ref:i,onKeyDown:H,onClick:x}),c,o.createElement("span",{className:"".concat(t,"-inner")},o.createElement("span",{className:"".concat(t,"-inner-checked")},h),o.createElement("span",{className:"".concat(t,"-inner-unchecked")},p)))});_.displayName="Switch";const ge=n=>{const{componentCls:i,trackHeightSM:l,trackPadding:a,trackMinWidthSM:t,innerMinMarginSM:d,innerMaxMarginSM:u,handleSizeSM:r,calc:s}=n,c=`${i}-inner`,h=S(s(r).add(s(a).mul(2)).equal()),p=S(s(u).mul(2).equal());return{[i]:{[`&${i}-small`]:{minWidth:t,height:l,lineHeight:S(l),[`${i}-inner`]:{paddingInlineStart:u,paddingInlineEnd:d,[`${c}-checked, ${c}-unchecked`]:{minHeight:l},[`${c}-checked`]:{marginInlineStart:`calc(-100% + ${h} - ${p})`,marginInlineEnd:`calc(100% - ${h} + ${p})`},[`${c}-unchecked`]:{marginTop:s(l).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${i}-handle`]:{width:r,height:r},[`${i}-loading-icon`]:{top:s(s(r).sub(n.switchLoadingIconSize)).div(2).equal(),fontSize:n.switchLoadingIconSize},[`&${i}-checked`]:{[`${i}-inner`]:{paddingInlineStart:d,paddingInlineEnd:u,[`${c}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${c}-unchecked`]:{marginInlineStart:`calc(100% - ${h} + ${p})`,marginInlineEnd:`calc(-100% + ${h} - ${p})`}},[`${i}-handle`]:{insetInlineStart:`calc(100% - ${S(s(r).add(a).equal())})`}},[`&:not(${i}-disabled):active`]:{[`&:not(${i}-checked) ${c}`]:{[`${c}-unchecked`]:{marginInlineStart:s(n.marginXXS).div(2).equal(),marginInlineEnd:s(n.marginXXS).mul(-1).div(2).equal()}},[`&${i}-checked ${c}`]:{[`${c}-checked`]:{marginInlineStart:s(n.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:s(n.marginXXS).div(2).equal()}}}}}}},me=n=>{const{componentCls:i,handleSize:l,calc:a}=n;return{[i]:{[`${i}-loading-icon${n.iconCls}`]:{position:"relative",top:a(a(l).sub(n.fontSize)).div(2).equal(),color:n.switchLoadingIconColor,verticalAlign:"top"},[`&${i}-checked ${i}-loading-icon`]:{color:n.switchColor}}}},pe=n=>{const{componentCls:i,trackPadding:l,handleBg:a,handleShadow:t,handleSize:d,calc:u}=n,r=`${i}-handle`;return{[i]:{[r]:{position:"absolute",top:l,insetInlineStart:l,width:d,height:d,transition:`all ${n.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:a,borderRadius:u(d).div(2).equal(),boxShadow:t,transition:`all ${n.switchDuration} ease-in-out`,content:'""'}},[`&${i}-checked ${r}`]:{insetInlineStart:`calc(100% - ${S(u(d).add(l).equal())})`},[`&:not(${i}-disabled):active`]:{[`${r}::before`]:{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0},[`&${i}-checked ${r}::before`]:{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}}}}},xe=n=>{const{componentCls:i,trackHeight:l,trackPadding:a,innerMinMargin:t,innerMaxMargin:d,handleSize:u,calc:r}=n,s=`${i}-inner`,c=S(r(u).add(r(a).mul(2)).equal()),h=S(r(d).mul(2).equal());return{[i]:{[s]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:d,paddingInlineEnd:t,transition:`padding-inline-start ${n.switchDuration} ease-in-out, padding-inline-end ${n.switchDuration} ease-in-out`,[`${s}-checked, ${s}-unchecked`]:{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:`margin-inline-start ${n.switchDuration} ease-in-out, margin-inline-end ${n.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:l},[`${s}-checked`]:{marginInlineStart:`calc(-100% + ${c} - ${h})`,marginInlineEnd:`calc(100% - ${c} + ${h})`},[`${s}-unchecked`]:{marginTop:r(l).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${i}-checked ${s}`]:{paddingInlineStart:t,paddingInlineEnd:d,[`${s}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${s}-unchecked`]:{marginInlineStart:`calc(100% - ${c} + ${h})`,marginInlineEnd:`calc(-100% + ${c} - ${h})`}},[`&:not(${i}-disabled):active`]:{[`&:not(${i}-checked) ${s}`]:{[`${s}-unchecked`]:{marginInlineStart:r(a).mul(2).equal(),marginInlineEnd:r(a).mul(-1).mul(2).equal()}},[`&${i}-checked ${s}`]:{[`${s}-checked`]:{marginInlineStart:r(a).mul(-1).mul(2).equal(),marginInlineEnd:r(a).mul(2).equal()}}}}}},be=n=>{const{componentCls:i,trackHeight:l,trackMinWidth:a}=n;return{[i]:Object.assign(Object.assign(Object.assign(Object.assign({},ne(n)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:a,height:l,lineHeight:S(l),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${n.motionDurationMid}`,userSelect:"none",[`&:hover:not(${i}-disabled)`]:{background:n.colorTextTertiary}}),ie(n)),{[`&${i}-checked`]:{background:n.switchColor,[`&:hover:not(${i}-disabled)`]:{background:n.colorPrimaryHover}},[`&${i}-loading, &${i}-disabled`]:{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${i}-rtl`]:{direction:"rtl"}})}},Se=n=>{const{fontSize:i,lineHeight:l,controlHeight:a,colorWhite:t}=n,d=i*l,u=a/2,r=2,s=d-r*2,c=u-r*2;return{trackHeight:d,trackHeightSM:u,trackMinWidth:s*2+r*4,trackMinWidthSM:c*2+r*2,trackPadding:r,handleBg:t,handleSize:s,handleSizeSM:c,handleShadow:`0 2px 4px 0 ${new ae("#00230b").setA(.2).toRgbString()}`,innerMinMargin:s/2,innerMaxMargin:s+r+r*2,innerMinMarginSM:c/2,innerMaxMarginSM:c+r+r*2}},je=Z("Switch",n=>{const i=ee(n,{switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchLoadingIconSize:n.calc(n.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${n.opacityLoading})`,switchHandleActiveInset:"-30%"});return[be(i),xe(i),pe(i),me(i),ge(i)]},Se);var ye=function(n,i){var l={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&i.indexOf(a)<0&&(l[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,a=Object.getOwnPropertySymbols(n);t<a.length;t++)i.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(n,a[t])&&(l[a[t]]=n[a[t]]);return l};const fe=o.forwardRef((n,i)=>{const{prefixCls:l,size:a,disabled:t,loading:d,className:u,rootClassName:r,style:s,checked:c,value:h,defaultChecked:p,defaultValue:w,onChange:y}=n,k=ye(n,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[q,z]=G(!1,{value:c??h,defaultValue:p??w}),{getPrefixCls:P,direction:f,switch:b}=o.useContext(te),v=o.useContext(se),H=(t??v)||d,x=P("switch",l),D=o.createElement("div",{className:`${x}-handle`},d&&o.createElement(ce,{className:`${x}-loading-icon`})),[g,M,C]=je(x),B=le(a),F=L(b==null?void 0:b.className,{[`${x}-small`]:B==="small",[`${x}-loading`]:d,[`${x}-rtl`]:f==="rtl"},u,r,M,C),K=Object.assign(Object.assign({},b==null?void 0:b.style),s),Y=function(){z(arguments.length<=0?void 0:arguments[0]),y==null||y.apply(void 0,arguments)};return g(o.createElement(re,{component:"Switch"},o.createElement(_,Object.assign({},k,{checked:q,onChange:Y,prefixCls:x,className:F,style:K,disabled:H,ref:i,loadingIcon:D}))))}),j=fe;j.__ANT_SWITCH=!0;function Ce(){return e.jsx("div",{className:"step-1 step",children:e.jsx(E,{gutter:150,children:e.jsxs(I,{span:12,children:[e.jsx("p",{children:"Select the number of paraticipants to include in the current study based on the total number available in your plan."}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(m,{name:"study_details",initialValues:{remember:!0},layout:"vertical",requiredMark:"optional",children:e.jsx(m.Item,{name:"name",label:"Study Participants",rules:[{required:!0,message:"Please input your Study name!"}],children:e.jsx(W,{size:"large",placeholder:"Number of your study participants"})})}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("p",{children:["Your available plan participants:",e.jsx("span",{className:"available-participants",children:"300"})]})]})})})}const N={color:"rgb(0, 0, 0)",width:"100%",display:"flex",justifyContent:"space-between",background:"#ececec",padding:"5px 10px",border:"1px solid #ddd",borderRadius:"5px",marginBottom:"10px"};function $e(){const[n,i]=o.useState("Muse"),[l,a]=o.useState(["EEG","PPG","Accelerometry","Gyroscope"]);return o.useEffect(()=>{n==="Muse"?a(["EEG","PPG","Accelerometry","Gyroscope"]):n==="Mentalab"?a(["EEG","Accelerometry"]):n==="Polar 360"?a(["Accelerometry","Heart Rate","PPI","Skin Temprature","Sleep","Steps"]):n==="Xon"&&a(["EEG"])},[n]),e.jsx("div",{className:"step-1 step",children:e.jsxs(E,{gutter:150,children:[e.jsxs(I,{span:12,children:[e.jsx("p",{children:"Choose the device(s) you want to use in your study and the data types to be recorded"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(m,{name:"study_details",initialValues:{remember:!0},layout:"vertical",children:e.jsxs(m.Item,{name:"name",label:"Available Plugins",children:[e.jsxs("div",{style:N,children:[e.jsx("span",{children:"Muse"}),e.jsx(j,{onChange:t=>{t&&i("Muse")},checked:n==="Muse"})]}),e.jsxs("div",{style:N,children:[e.jsx("span",{children:"Mentalab"}),e.jsx(j,{onChange:t=>{t&&i("Mentalab")},checked:n==="Mentalab"})]}),e.jsxs("div",{style:N,children:[e.jsx("span",{children:"Polar 360"}),e.jsx(j,{onChange:t=>{t&&i("Polar 360")},checked:n==="Polar 360"})]}),e.jsxs("div",{style:N,children:[e.jsx("span",{children:"Xon"}),e.jsx(j,{onChange:t=>{t&&i("Xon")},checked:n==="Xon"})]})]})})]}),e.jsxs(I,{span:12,children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(X,{title:n,children:l.map(t=>e.jsxs(e.Fragment,{children:[e.jsx(de,{children:t},t),e.jsx("br",{})]}))})]})]})})}const R={color:"rgb(0, 0, 0)",width:"100%",display:"flex",justifyContent:"space-between",background:"#ececec",padding:"5px 10px",border:"1px solid #ddd",borderRadius:"5px",marginBottom:"10px"};function Ie(){return e.jsx("div",{className:"step-1 step",children:e.jsx(E,{gutter:150,children:e.jsxs(I,{span:12,children:[e.jsx("br",{}),e.jsx(m,{name:"study_details",initialValues:{remember:!0},layout:"vertical",children:e.jsxs(m.Item,{name:"name",label:"Available Tasks",children:[e.jsxs("div",{style:R,children:[e.jsx("span",{children:"Face Morph"}),e.jsx(j,{defaultChecked:!0})]}),e.jsxs("div",{style:R,children:[e.jsx("span",{children:"Affect Labeling"}),e.jsx(j,{})]}),e.jsxs("div",{style:R,children:[e.jsx("span",{children:"Monetary Gambling"}),e.jsx(j,{})]})]})})]})})})}function we(){return e.jsx("div",{className:"step-1 step",children:e.jsx(E,{gutter:150,children:e.jsxs(I,{span:12,children:[e.jsxs("p",{children:["Here, you can select the type of study: ",e.jsx("b",{children:"Standard"})," or ",e.jsx("b",{children:"Research"}),". You can also assign a name to your study."]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(m,{name:"study_details",initialValues:{remember:!0},layout:"vertical",requiredMark:"optional",children:[e.jsx(m.Item,{name:"name",label:"Name",rules:[{required:!0,message:"Please input your Study name!"}],children:e.jsx(W,{size:"large",placeholder:"Name of your Study"})}),e.jsx(m.Item,{name:"type",label:"Type",rules:[{required:!0}],children:e.jsx(V.Group,{options:[{value:1,label:"Standard"},{value:2,label:"Research"}]})})]}),e.jsx("br",{}),e.jsx("br",{})]})})})}function ke(){return e.jsx("div",{className:"step-1 step",children:e.jsx(E,{gutter:150,children:e.jsxs(I,{span:12,children:[e.jsx("p",{children:"If you plan to offer rewards to participants in this study, you can enable the option here."}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(m,{name:"study_details",initialValues:{remember:!0},layout:"vertical",requiredMark:"optional",children:e.jsx(m.Item,{name:"reward",label:"Reward",rules:[{required:!0}],children:e.jsx(V.Group,{options:[{value:1,label:"On"},{value:2,label:"Off"}]})})})]})})})}function ze(){const[n,i]=o.useState(0),l=()=>{i(n+1)},a=()=>{i(n-1)};return e.jsxs(X,{title:"Create Study",style:{height:"100%"},children:[e.jsxs($,{size:"small",current:n,children:[e.jsx($.Step,{stepIndex:0,title:"Details",children:"0"}),e.jsx($.Step,{stepIndex:1,title:"Participants",children:"1"}),e.jsx($.Step,{stepIndex:2,title:"Plugins",children:"2"}),e.jsx($.Step,{stepIndex:3,title:"Tasks",children:"3"}),e.jsx($.Step,{stepIndex:4,title:"Reward",children:"4"})]}),e.jsxs("div",{className:"step-container",children:[n===0&&e.jsx(we,{}),n===1&&e.jsx(Ce,{}),n===2&&e.jsx($e,{}),n===3&&e.jsx(Ie,{}),n===4&&e.jsx(ke,{})]}),e.jsx("div",{className:"wizard-footer",children:e.jsxs(oe,{justify:"space-between",children:[e.jsx(O,{onClick:a,disabled:n===0,children:"Back"}),n<4?e.jsx(O,{onClick:l,disabled:n===4,children:"Next"}):e.jsx(ue,{to:"/study",children:e.jsx(O,{type:"primary",onClick:l,children:"Create Study"})})]})})]})}export{ze as default};
