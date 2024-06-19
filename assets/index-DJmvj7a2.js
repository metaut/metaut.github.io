(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="165",Ps={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cg=0,su=1,lg=2,gd=1,ug=2,Ai=3,Zi=0,vn=1,bi=2,Ki=0,no=1,ou=2,ru=3,au=4,hg=5,_s=100,dg=101,fg=102,pg=103,mg=104,gg=200,_g=201,xg=202,vg=203,Vc=204,zc=205,yg=206,Mg=207,Sg=208,Tg=209,Eg=210,Ag=211,Ng=212,wg=213,bg=214,Rg=0,Cg=1,Lg=2,Kr=3,Pg=4,Ig=5,Dg=6,Ug=7,pa=0,Og=1,Fg=2,In=0,_d=1,xd=2,vd=3,yd=4,Vg=5,Md=6,zg=7,Sd=300,fo=301,po=302,Bc=303,Hc=304,ma=306,kc=1e3,ys=1001,Gc=1002,hn=1003,Bg=1004,vr=1005,Zn=1006,za=1007,Yi=1008,Ji=1009,Hg=1010,kg=1011,Zr=1012,Td=1013,mo=1014,Ri=1015,er=1016,Ed=1017,Ad=1018,go=1020,Gg=35902,Wg=1021,Xg=1022,di=1023,qg=1024,Yg=1025,io=1026,_o=1027,jg=1028,Nd=1029,$g=1030,wd=1031,bd=1033,Ba=33776,Ha=33777,ka=33778,Ga=33779,cu=35840,lu=35841,uu=35842,hu=35843,du=36196,fu=37492,pu=37496,mu=37808,gu=37809,_u=37810,xu=37811,vu=37812,yu=37813,Mu=37814,Su=37815,Tu=37816,Eu=37817,Au=37818,Nu=37819,wu=37820,bu=37821,Wa=36492,Ru=36494,Cu=36495,Kg=36283,Lu=36284,Pu=36285,Iu=36286,Zg=3200,Jg=3201,Ii=0,Rd=1,qi="",$n="srgb",ri="srgb-linear",Sl="display-p3",ga="display-p3-linear",Jr="linear",Et="srgb",Qr="rec709",ea="p3",Ds=7680,Du=519,Qg=512,Cd=513,e_=514,Ld=515,t_=516,n_=517,i_=518,s_=519,ta=35044,Wc=35048,Uu="300 es",ei=2e3,xo=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ou=1234567;const Go=Math.PI/180,vo=180/Math.PI;function Li(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function tn(i,e,t){return Math.max(e,Math.min(t,i))}function Tl(i,e){return(i%e+e)%e}function o_(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function r_(i,e,t){return i!==e?(t-i)/(e-i):0}function Wo(i,e,t){return(1-t)*i+t*e}function a_(i,e,t,n){return Wo(i,e,1-Math.exp(-t*n))}function c_(i,e=1){return e-Math.abs(Tl(i,e*2)-e)}function l_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function u_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function h_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function d_(i,e){return i+Math.random()*(e-i)}function f_(i){return i*(.5-Math.random())}function p_(i){i!==void 0&&(Ou=i);let e=Ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function m_(i){return i*Go}function g_(i){return i*vo}function __(i){return(i&i-1)===0&&i!==0}function x_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function v_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function y_(i,e,t,n,s){const o=Math.cos,r=Math.sin,a=o(t/2),c=r(t/2),l=o((e+n)/2),u=r((e+n)/2),h=o((e-n)/2),d=r((e-n)/2),p=o((n-e)/2),g=r((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qo={DEG2RAD:Go,RAD2DEG:vo,generateUUID:Li,clamp:tn,euclideanModulo:Tl,mapLinear:o_,inverseLerp:r_,lerp:Wo,damp:a_,pingpong:c_,smoothstep:l_,smootherstep:u_,randInt:h_,randFloat:d_,randFloatSpread:f_,seededRandom:p_,degToRad:m_,radToDeg:g_,isPowerOfTwo:__,ceilPowerOfTwo:x_,floorPowerOfTwo:v_,setQuaternionFromProperEuler:y_,normalize:mt,denormalize:Jn};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*n-r*s+e.x,this.y=o*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,t,n,s,o,r,a,c,l){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,r,a,c,l)}set(e,t,n,s,o,r,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],E=s[1],y=s[4],A=s[7],V=s[2],R=s[5],N=s[8];return o[0]=r*x+a*E+c*V,o[3]=r*m+a*y+c*R,o[6]=r*f+a*A+c*N,o[1]=l*x+u*E+h*V,o[4]=l*m+u*y+h*R,o[7]=l*f+u*A+h*N,o[2]=d*x+p*E+g*V,o[5]=d*m+p*y+g*R,o[8]=d*f+p*A+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*a*l-n*o*u+n*a*c+s*o*l-s*r*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*r-a*l,d=a*c-u*o,p=l*o-r*c,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*r)*x,e[3]=d*x,e[4]=(u*t-s*c)*x,e[5]=(s*o-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(r*t-n*o)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+e,-s*l,s*c,-s*(-l*r+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new je;function Pd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function M_(){const i=Yo("canvas");return i.style.display="block",i}const Fu={};function El(i){i in Fu||(Fu[i]=!0,console.warn(i))}function S_(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const Vu=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zu=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yr={[ri]:{transfer:Jr,primaries:Qr,toReference:i=>i,fromReference:i=>i},[$n]:{transfer:Et,primaries:Qr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ga]:{transfer:Jr,primaries:ea,toReference:i=>i.applyMatrix3(zu),fromReference:i=>i.applyMatrix3(Vu)},[Sl]:{transfer:Et,primaries:ea,toReference:i=>i.convertSRGBToLinear().applyMatrix3(zu),fromReference:i=>i.applyMatrix3(Vu).convertLinearToSRGB()}},T_=new Set([ri,ga]),gt={enabled:!0,_workingColorSpace:ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!T_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=yr[e].toReference,s=yr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return yr[i].primaries},getTransfer:function(i){return i===qi?Jr:yr[i].transfer}};function so(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Us;class E_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=Yo("canvas")),Us.width=e.width,Us.height=e.height;const n=Us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=so(o[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(so(t[n]/255)*255):t[n]=so(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A_=0;class Id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Ya(s[r].image)):o.push(Ya(s[r]))}else o=Ya(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?E_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let N_=0;class dn extends Di{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=ys,s=ys,o=Zn,r=Yi,a=di,c=Ji,l=dn.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=Li(),this.name="",this.source=new Id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case ys:e.x=e.x<0?0:1;break;case Gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case ys:e.y=e.y<0?0:1;break;case Gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Sd;dn.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,A=(p+1)/2,V=(f+1)/2,R=(u+d)/4,N=(h+x)/4,F=(g+m)/4;return y>A&&y>V?y<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(y),s=R/n,o=N/n):A>V?A<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(A),n=R/s,o=F/s):V<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(V),n=N/o,s=F/o),this.set(n,s,o,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-x)/E,this.z=(d-u)/E,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qi extends Di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new dn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Id(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends Qi{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Al extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class w_ extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,r,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=o[r+0],p=o[r+1],g=o[r+2],x=o[r+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==d||l!==p||u!==g){let m=1-a;const f=c*d+l*p+u*g+h*x,E=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const V=Math.sqrt(y),R=Math.atan2(V,f*E);m=Math.sin(m*R)/V,a=Math.sin(a*R)/V}const A=a*E;if(c=c*m+d*A,l=l*m+p*A,u=u*m+g*A,h=h*m+x*A,m===1-a){const V=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=V,l*=V,u*=V,h*=V}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=o[r],d=o[r+1],p=o[r+2],g=o[r+3];return e[t]=a*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-a*p,e[t+2]=l*g+u*p+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,r=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(o/2),d=c(n/2),p=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],r=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(o-l)*p,this._z=(r-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(o-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(r-s)/p,this._x=(o+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,r=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-n*l,this._z=o*u+r*l+n*c-s*a,this._w=r*u-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*e._w+n*e._x+s*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*o+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,r=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,r=e.y,a=e.z,c=e.w,l=2*(r*s-a*n),u=2*(a*t-o*s),h=2*(o*n-r*t);return this.x=t+c*l+r*h-a*u,this.y=n+c*u+a*l-o*h,this.z=s+c*h+o*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,r=t.x,a=t.y,c=t.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new D,Bu=new Ts;class tr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,qn):qn.fromBufferAttribute(o,r),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(e.matrixWorld),this.union(Mr)}const s=e.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),Sr.subVectors(this.max,Do),Os.subVectors(e.a,Do),Fs.subVectors(e.b,Do),Vs.subVectors(e.c,Do),zi.subVectors(Fs,Os),Bi.subVectors(Vs,Fs),as.subVectors(Os,Vs);let t=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-as.z,as.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,as.z,0,-as.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-as.y,as.x,0];return!$a(t,Os,Fs,Vs,Sr)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,Os,Fs,Vs,Sr))?!1:(Tr.crossVectors(zi,Bi),t=[Tr.x,Tr.y,Tr.z],$a(t,Os,Fs,Vs,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new D,new D,new D,new D,new D,new D,new D,new D],qn=new D,Mr=new tr,Os=new D,Fs=new D,Vs=new D,zi=new D,Bi=new D,as=new D,Do=new D,Sr=new D,Tr=new D,cs=new D;function $a(i,e,t,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){cs.fromArray(i,o);const a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),c=e.dot(cs),l=t.dot(cs),u=n.dot(cs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const b_=new tr,Uo=new D,Ka=new D;class Nl{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):b_.setFromPoints(e).getCenter(n);let s=0;for(let o=0,r=e.length;o<r;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const t=Uo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Uo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Ka)),this.expandByPoint(Uo.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new D,Za=new D,Er=new D,Hi=new D,Ja=new D,Ar=new D,Qa=new D;class Dd{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Za.copy(e).add(t).multiplyScalar(.5),Er.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Za);const o=e.distanceTo(t)*.5,r=-this.direction.dot(Er),a=Hi.dot(this.direction),c=-Hi.dot(Er),l=Hi.lengthSq(),u=Math.abs(1-r*r);let h,d,p,g;if(u>0)if(h=r*c-a,d=r*a-c,g=o*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,p=h*(h+r*d+2*a)+d*(r*h+d+2*c)+l}else d=o,h=Math.max(0,-(r*d+a)),p=-h*h+d*(d+2*c)+l;else d=-o,h=Math.max(0,-(r*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-r*o+a)),d=h>0?-o:Math.min(Math.max(-o,-c),o),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-o,-c),o),p=d*(d+2*c)+l):(h=Math.max(0,-(r*o+a)),d=h>0?o:Math.min(Math.max(-o,-c),o),p=-h*h+d*(d+2*c)+l);else d=r>0?-o:o,h=Math.max(0,-(r*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Za).addScaledVector(Er,d),p}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,o=e.radius*e.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(o=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,s,o){Ja.subVectors(t,e),Ar.subVectors(n,e),Qa.crossVectors(Ja,Ar);let r=this.direction.dot(Qa),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Hi.subVectors(this.origin,e);const c=a*this.direction.dot(Ar.crossVectors(Hi,Ar));if(c<0)return null;const l=a*this.direction.dot(Ja.cross(Hi));if(l<0||c+l>r)return null;const u=-a*Hi.dot(Qa);return u<0?null:this.at(u/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,n,s,o,r,a,c,l,u,h,d,p,g,x,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,r,a,c,l,u,h,d,p,g,x,m)}set(e,t,n,s,o,r,a,c,l,u,h,d,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=o,f[5]=r,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),o=1/zs.setFromMatrixColumn(e,1).length(),r=1/zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=r*u,p=r*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+p*l,t[10]=r*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,g=l*u,x=l*h;t[0]=d+x*a,t[4]=g*a-p,t[8]=r*l,t[1]=r*h,t[5]=r*u,t[9]=-a,t[2]=p*a-g,t[6]=x+d*a,t[10]=r*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,g=l*u,x=l*h;t[0]=d-x*a,t[4]=-r*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=r*u,t[9]=x-d*a,t[2]=-r*l,t[6]=a,t[10]=r*c}else if(e.order==="ZYX"){const d=r*u,p=r*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=r*c}else if(e.order==="YZX"){const d=r*c,p=r*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+p,t[1]=h,t[5]=r*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=r*c,p=r*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=r*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R_,e,C_)}lookAt(e,t,n){const s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),ki.crossVectors(n,bn),ki.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),ki.crossVectors(n,bn)),ki.normalize(),Nr.crossVectors(bn,ki),s[0]=ki.x,s[4]=Nr.x,s[8]=bn.x,s[1]=ki.y,s[5]=Nr.y,s[9]=bn.y,s[2]=ki.z,s[6]=Nr.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],E=n[3],y=n[7],A=n[11],V=n[15],R=s[0],N=s[4],F=s[8],T=s[12],S=s[1],I=s[5],Z=s[9],q=s[13],ie=s[2],ne=s[6],Q=s[10],se=s[14],J=s[3],Me=s[7],Ae=s[11],be=s[15];return o[0]=r*R+a*S+c*ie+l*J,o[4]=r*N+a*I+c*ne+l*Me,o[8]=r*F+a*Z+c*Q+l*Ae,o[12]=r*T+a*q+c*se+l*be,o[1]=u*R+h*S+d*ie+p*J,o[5]=u*N+h*I+d*ne+p*Me,o[9]=u*F+h*Z+d*Q+p*Ae,o[13]=u*T+h*q+d*se+p*be,o[2]=g*R+x*S+m*ie+f*J,o[6]=g*N+x*I+m*ne+f*Me,o[10]=g*F+x*Z+m*Q+f*Ae,o[14]=g*T+x*q+m*se+f*be,o[3]=E*R+y*S+A*ie+V*J,o[7]=E*N+y*I+A*ne+V*Me,o[11]=E*F+y*Z+A*Q+V*Ae,o[15]=E*T+y*q+A*se+V*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],r=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+o*c*h-s*l*h-o*a*d+n*l*d+s*a*p-n*c*p)+x*(+t*c*p-t*l*d+o*r*d-s*r*p+s*l*u-o*c*u)+m*(+t*l*h-t*a*p-o*r*h+n*r*p+o*a*u-n*l*u)+f*(-s*a*u-t*c*h+t*a*d+s*r*h-n*r*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],E=h*m*l-x*d*l+x*c*p-a*m*p-h*c*f+a*d*f,y=g*d*l-u*m*l-g*c*p+r*m*p+u*c*f-r*d*f,A=u*x*l-g*h*l+g*a*p-r*x*p-u*a*f+r*h*f,V=g*h*c-u*x*c-g*a*d+r*x*d+u*a*m-r*h*m,R=t*E+n*y+s*A+o*V;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/R;return e[0]=E*N,e[1]=(x*d*o-h*m*o-x*s*p+n*m*p+h*s*f-n*d*f)*N,e[2]=(a*m*o-x*c*o+x*s*l-n*m*l-a*s*f+n*c*f)*N,e[3]=(h*c*o-a*d*o-h*s*l+n*d*l+a*s*p-n*c*p)*N,e[4]=y*N,e[5]=(u*m*o-g*d*o+g*s*p-t*m*p-u*s*f+t*d*f)*N,e[6]=(g*c*o-r*m*o-g*s*l+t*m*l+r*s*f-t*c*f)*N,e[7]=(r*d*o-u*c*o+u*s*l-t*d*l-r*s*p+t*c*p)*N,e[8]=A*N,e[9]=(g*h*o-u*x*o-g*n*p+t*x*p+u*n*f-t*h*f)*N,e[10]=(r*x*o-g*a*o+g*n*l-t*x*l-r*n*f+t*a*f)*N,e[11]=(u*a*o-r*h*o-u*n*l+t*h*l+r*n*p-t*a*p)*N,e[12]=V*N,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*m+t*h*m)*N,e[14]=(g*a*s-r*x*s-g*n*c+t*x*c+r*n*m-t*a*m)*N,e[15]=(r*h*s-u*a*s+u*n*c-t*h*c-r*n*d+t*a*d)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,r=e.x,a=e.y,c=e.z,l=o*r,u=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,r){return this.set(1,n,o,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,r=t._y,a=t._z,c=t._w,l=o+o,u=r+r,h=a+a,d=o*l,p=o*u,g=o*h,x=r*u,m=r*h,f=a*h,E=c*l,y=c*u,A=c*h,V=n.x,R=n.y,N=n.z;return s[0]=(1-(x+f))*V,s[1]=(p+A)*V,s[2]=(g-y)*V,s[3]=0,s[4]=(p-A)*R,s[5]=(1-(d+f))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+y)*N,s[9]=(m-E)*N,s[10]=(1-(d+x))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=zs.set(s[0],s[1],s[2]).length();const r=zs.set(s[4],s[5],s[6]).length(),a=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Yn.copy(this);const l=1/o,u=1/r,h=1/a;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,t.setFromRotationMatrix(Yn),n.x=o,n.y=r,n.z=a,this}makePerspective(e,t,n,s,o,r,a=ei){const c=this.elements,l=2*o/(t-e),u=2*o/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(a===ei)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===xo)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,o,r,a=ei){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(r-o),d=(t+e)*l,p=(n+s)*u;let g,x;if(a===ei)g=(r+o)*h,x=-2*h;else if(a===xo)g=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zs=new D,Yn=new At,R_=new D(0,0,0),C_=new D(1,1,1),ki=new D,Nr=new D,bn=new D,Hu=new At,ku=new Ts;class kn{constructor(e=0,t=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L_=0;const Gu=new D,Bs=new Ts,Si=new At,wr=new D,Oo=new D,P_=new D,I_=new Ts,Wu=new D(1,0,0),Xu=new D(0,1,0),qu=new D(0,0,1),Yu={type:"added"},D_={type:"removed"},Hs={type:"childadded",child:null},ec={type:"childremoved",child:null};class qt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new D,t=new kn,n=new Ts,s=new D(1,1,1);function o(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new je}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Gu.copy(e).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wr.copy(e):wr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Oo,wr,this.up):Si.lookAt(wr,Oo,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(Si),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yu),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D_),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yu),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,P_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,I_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++){const a=s[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];o(e.shapes,h)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));s.material=a}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(e.animations,c))}}if(t){const a=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),h=r(e.shapes),d=r(e.skeletons),p=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}qt.DEFAULT_UP=new D(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new D,Ti=new D,tc=new D,Ei=new D,ks=new D,Gs=new D,ju=new D,nc=new D,ic=new D,sc=new D;class hi{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jn.subVectors(e,t),s.cross(jn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){jn.subVectors(s,t),Ti.subVectors(n,t),tc.subVectors(e,t);const r=jn.dot(jn),a=jn.dot(Ti),c=jn.dot(tc),l=Ti.dot(Ti),u=Ti.dot(tc),h=r*l-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,g=(r*u-a*c)*d;return o.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,s,o,r,a,c){return this.getBarycoord(e,t,n,s,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ei.x),c.addScaledVector(r,Ei.y),c.addScaledVector(a,Ei.z),c)}static isFrontFacing(e,t,n,s){return jn.subVectors(n,t),Ti.subVectors(e,t),jn.cross(Ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),jn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return hi.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let r,a;ks.subVectors(s,n),Gs.subVectors(o,n),nc.subVectors(e,n);const c=ks.dot(nc),l=Gs.dot(nc);if(c<=0&&l<=0)return t.copy(n);ic.subVectors(e,s);const u=ks.dot(ic),h=Gs.dot(ic);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(n).addScaledVector(ks,r);sc.subVectors(e,o);const p=ks.dot(sc),g=Gs.dot(sc);if(g>=0&&p<=g)return t.copy(o);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Gs,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return ju.subVectors(o,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(ju,a);const f=1/(m+x+d);return r=x*f,a=d*f,t.copy(n).addScaledVector(ks,r).addScaledVector(Gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},br={h:0,s:0,l:0};function oc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=Tl(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,r=2*n-o;this.r=oc(r,o,e+1/3),this.g=oc(r,o,e),this.b=oc(r,o,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,t=$n){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){const n=Od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}copyLinearToSRGB(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return gt.fromWorkingColorSpace(un.copy(this),e),Math.round(tn(un.r*255,0,255))*65536+Math.round(tn(un.g*255,0,255))*256+Math.round(tn(un.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(un.copy(this),t);const n=un.r,s=un.g,o=un.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case n:c=(s-o)/h+(s<o?6:0);break;case s:c=(o-n)/h+2;break;case o:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=$n){gt.fromWorkingColorSpace(un.copy(this),e);const t=un.r,n=un.g,s=un.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(br);const n=Wo(Gi.h,br.h,t),s=Wo(Gi.s,br.s,t),o=Wo(Gi.l,br.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Fe;Fe.NAMES=Od;let U_=0;class fn extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=no,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=zc,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vc&&(n.blendSrc=this.blendSrc),this.blendDst!==zc&&(n.blendDst=this.blendDst),this.blendEquation!==_s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(t){const o=s(e.textures),r=s(e.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wl extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new D,Rr=new Te;class Bn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ta,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return El("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),o=mt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ta&&(e.usage=this.usage),e}}class Fd extends Bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vd extends Bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Hn extends Bn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let O_=0;const Fn=new At,rc=new qt,Ws=new D,Rn=new tr,Fo=new tr,Zt=new D;class Ui extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pd(e)?Vd:Fd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new je().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Hn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];Rn.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Rn.min,Fo.min),Rn.expandByPoint(Zt),Zt.addVectors(Rn.max,Fo.max),Rn.expandByPoint(Zt)):(Rn.expandByPoint(Fo.min),Rn.expandByPoint(Fo.max))}Rn.getCenter(n);let s=0;for(let o=0,r=e.count;o<r;o++)Zt.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Zt.fromBufferAttribute(a,l),c&&(Ws.fromBufferAttribute(e,l),Zt.add(Ws)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new D,c[F]=new D;const l=new D,u=new D,h=new D,d=new Te,p=new Te,g=new Te,x=new D,m=new D;function f(F,T,S){l.fromBufferAttribute(n,F),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),d.fromBufferAttribute(o,F),p.fromBufferAttribute(o,T),g.fromBufferAttribute(o,S),u.sub(l),h.sub(l),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[F].add(x),a[T].add(x),a[S].add(x),c[F].add(m),c[T].add(m),c[S].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,T=E.length;F<T;++F){const S=E[F],I=S.start,Z=S.count;for(let q=I,ie=I+Z;q<ie;q+=3)f(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const y=new D,A=new D,V=new D,R=new D;function N(F){V.fromBufferAttribute(s,F),R.copy(V);const T=a[F];y.copy(T),y.sub(V.multiplyScalar(V.dot(T))).normalize(),A.crossVectors(R,T);const I=A.dot(c[F])<0?-1:1;r.setXYZW(F,y.x,y.y,y.z,I)}for(let F=0,T=E.length;F<T;++F){const S=E[F],I=S.start,Z=S.count;for(let q=I,ie=I+Z;q<ie;q+=3)N(e.getX(q+0)),N(e.getX(q+1)),N(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new D,o=new D,r=new D,a=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Bn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ui,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const o=e.morphAttributes;for(const l in o){const u=[],h=o[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $u=new At,ls=new Dd,Cr=new Nl,Ku=new D,Xs=new D,qs=new D,Ys=new D,ac=new D,Lr=new D,Pr=new Te,Ir=new Te,Dr=new Te,Zu=new D,Ju=new D,Qu=new D,Ur=new D,Or=new D;class Gt extends qt{constructor(e=new Ui,t=new wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(o&&a){Lr.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],h=o[c];u!==0&&(ac.fromBufferAttribute(h,e),r?Lr.addScaledVector(ac,u):Lr.addScaledVector(ac.sub(t),u))}t.add(Lr)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(o),ls.copy(e.ray).recast(e.near),!(Cr.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Cr,Ku)===null||ls.origin.distanceToSquared(Ku)>(e.far-e.near)**2))&&($u.copy(o).invert(),ls.copy(e.ray).applyMatrix4($u),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=r[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let A=E,V=y;A<V;A+=3){const R=a.getX(A),N=a.getX(A+1),F=a.getX(A+2);s=Fr(this,f,e,n,l,u,h,R,N,F),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const E=a.getX(m),y=a.getX(m+1),A=a.getX(m+2);s=Fr(this,r,e,n,l,u,h,E,y,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=r[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let A=E,V=y;A<V;A+=3){const R=A,N=A+1,F=A+2;s=Fr(this,f,e,n,l,u,h,R,N,F),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const E=m,y=m+1,A=m+2;s=Fr(this,r,e,n,l,u,h,E,y,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function F_(i,e,t,n,s,o,r,a){let c;if(e.side===vn?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,e.side===Zi,a),c===null)return null;Or.copy(a),Or.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Or);return l<t.near||l>t.far?null:{distance:l,point:Or.clone(),object:i}}function Fr(i,e,t,n,s,o,r,a,c,l){i.getVertexPosition(a,Xs),i.getVertexPosition(c,qs),i.getVertexPosition(l,Ys);const u=F_(i,e,t,n,Xs,qs,Ys,Ur);if(u){s&&(Pr.fromBufferAttribute(s,a),Ir.fromBufferAttribute(s,c),Dr.fromBufferAttribute(s,l),u.uv=hi.getInterpolation(Ur,Xs,qs,Ys,Pr,Ir,Dr,new Te)),o&&(Pr.fromBufferAttribute(o,a),Ir.fromBufferAttribute(o,c),Dr.fromBufferAttribute(o,l),u.uv1=hi.getInterpolation(Ur,Xs,qs,Ys,Pr,Ir,Dr,new Te)),r&&(Zu.fromBufferAttribute(r,a),Ju.fromBufferAttribute(r,c),Qu.fromBufferAttribute(r,l),u.normal=hi.getInterpolation(Ur,Xs,qs,Ys,Zu,Ju,Qu,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new D,materialIndex:0};hi.getNormal(Xs,qs,Ys,h.normal),u.face=h}return u}class nr extends Ui{constructor(e=1,t=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,r,o,0),g("z","y","x",1,-1,n,t,-e,r,o,1),g("x","z","y",1,1,e,n,t,s,r,2),g("x","z","y",1,-1,e,n,-t,s,r,3),g("x","y","z",1,-1,e,t,n,s,o,4),g("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new Hn(l,3)),this.setAttribute("normal",new Hn(u,3)),this.setAttribute("uv",new Hn(h,2));function g(x,m,f,E,y,A,V,R,N,F,T){const S=A/N,I=V/F,Z=A/2,q=V/2,ie=R/2,ne=N+1,Q=F+1;let se=0,J=0;const Me=new D;for(let Ae=0;Ae<Q;Ae++){const be=Ae*I-q;for(let tt=0;tt<ne;tt++){const ct=tt*S-Z;Me[x]=ct*E,Me[m]=be*y,Me[f]=ie,l.push(Me.x,Me.y,Me.z),Me[x]=0,Me[m]=0,Me[f]=R>0?1:-1,u.push(Me.x,Me.y,Me.z),h.push(tt/N),h.push(1-Ae/F),se+=1}}for(let Ae=0;Ae<F;Ae++)for(let be=0;be<N;be++){const tt=d+be+ne*Ae,ct=d+be+ne*(Ae+1),ee=d+(be+1)+ne*(Ae+1),le=d+(be+1)+ne*Ae;c.push(tt,ct,le),c.push(ct,ee,le),J+=6}a.addGroup(p,J,T),p+=J,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function _n(i){const e={};for(let t=0;t<i.length;t++){const n=yo(i[t]);for(const s in n)e[s]=n[s]}return e}function V_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const z_={clone:yo,merge:_n};var B_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class es extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B_,this.fragmentShader=H_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=V_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bd extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new D,eh=new Te,th=new Te;class Mn extends Bd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,eh,th),t.subVectors(th,eh)}setViewOffset(e,t,n,s,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Go*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,t-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,$s=1;class k_ extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(js,$s,e,t);s.layers=this.layers,this.add(s);const o=new Mn(js,$s,e,t);o.layers=this.layers,this.add(o);const r=new Mn(js,$s,e,t);r.layers=this.layers,this.add(r);const a=new Mn(js,$s,e,t);a.layers=this.layers,this.add(a);const c=new Mn(js,$s,e,t);c.layers=this.layers,this.add(c);const l=new Mn(js,$s,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,r,a,c]=t;for(const l of t)this.remove(l);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hd extends dn{constructor(e,t,n,s,o,r,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:fo,super(e,t,n,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class G_ extends Ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Hd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new nr(5,5,5),o=new es({name:"CubemapFromEquirect",uniforms:yo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Ki});o.uniforms.tEquirect.value=t;const r=new Gt(s,o),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Zn),new k_(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(o)}}const cc=new D,W_=new D,X_=new je;class Ni{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=cc.subVectors(n,t).cross(W_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||X_.getNormalMatrix(e),s=this.coplanarPoint(cc).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Nl,Vr=new D;class bl{constructor(e=new Ni,t=new Ni,n=new Ni,s=new Ni,o=new Ni,r=new Ni){this.planes=[e,t,n,s,o,r]}set(e,t,n,s,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,s=e.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],E=s[13],y=s[14],A=s[15];if(n[0].setComponents(c-o,d-l,m-p,A-f).normalize(),n[1].setComponents(c+o,d+l,m+p,A+f).normalize(),n[2].setComponents(c+r,d+u,m+g,A+E).normalize(),n[3].setComponents(c-r,d-u,m-g,A-E).normalize(),n[4].setComponents(c-a,d-h,m-x,A-y).normalize(),t===ei)n[5].setComponents(c+a,d+h,m+x,A+y).normalize();else if(t===xo)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Vr.x=s.normal.x>0?e.max.x:e.min.x,Vr.y=s.normal.y>0?e.max.y:e.min.y,Vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kd(){let i=null,e=!1,t=null,n=null;function s(o,r){t(o,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function q_(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,d=c.updateRanges;if(i.bindBuffer(l,a),h.count===-1&&d.length===0&&i.bufferSubData(l,0,u),d.length!==0){for(let p=0,g=d.length;p<g;p++){const x=d[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function r(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class _a extends Ui{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,r=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const E=f*d-r;for(let y=0;y<l;y++){const A=y*h-o;g.push(A,-E,0),x.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){const y=E+l*f,A=E+l*(f+1),V=E+1+l*(f+1),R=E+1+l*f;p.push(y,A,R),p.push(A,V,R)}this.setIndex(p),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(x,3)),this.setAttribute("uv",new Hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.widthSegments,e.heightSegments)}}var Y_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,r0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,a0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,g0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,A0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,U0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,z0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,B0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ux=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ev=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_v=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ev=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Y_,alphahash_pars_fragment:j_,alphamap_fragment:$_,alphamap_pars_fragment:K_,alphatest_fragment:Z_,alphatest_pars_fragment:J_,aomap_fragment:Q_,aomap_pars_fragment:e0,batching_pars_vertex:t0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:o0,iridescence_fragment:r0,bumpmap_pars_fragment:a0,clipping_planes_fragment:c0,clipping_planes_pars_fragment:l0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:h0,color_fragment:d0,color_pars_fragment:f0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:_0,defaultnormal_vertex:x0,displacementmap_pars_vertex:v0,displacementmap_vertex:y0,emissivemap_fragment:M0,emissivemap_pars_fragment:S0,colorspace_fragment:T0,colorspace_pars_fragment:E0,envmap_fragment:A0,envmap_common_pars_fragment:N0,envmap_pars_fragment:w0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:z0,envmap_vertex:R0,fog_vertex:C0,fog_pars_vertex:L0,fog_fragment:P0,fog_pars_fragment:I0,gradientmap_pars_fragment:D0,lightmap_pars_fragment:U0,lights_lambert_fragment:O0,lights_lambert_pars_fragment:F0,lights_pars_begin:V0,lights_toon_fragment:B0,lights_toon_pars_fragment:H0,lights_phong_fragment:k0,lights_phong_pars_fragment:G0,lights_physical_fragment:W0,lights_physical_pars_fragment:X0,lights_fragment_begin:q0,lights_fragment_maps:Y0,lights_fragment_end:j0,logdepthbuf_fragment:$0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:Z0,logdepthbuf_vertex:J0,map_fragment:Q0,map_pars_fragment:ex,map_particle_fragment:tx,map_particle_pars_fragment:nx,metalnessmap_fragment:ix,metalnessmap_pars_fragment:sx,morphinstance_vertex:ox,morphcolor_vertex:rx,morphnormal_vertex:ax,morphtarget_pars_vertex:cx,morphtarget_vertex:lx,normal_fragment_begin:ux,normal_fragment_maps:hx,normal_pars_fragment:dx,normal_pars_vertex:fx,normal_vertex:px,normalmap_pars_fragment:mx,clearcoat_normal_fragment_begin:gx,clearcoat_normal_fragment_maps:_x,clearcoat_pars_fragment:xx,iridescence_pars_fragment:vx,opaque_fragment:yx,packing:Mx,premultiplied_alpha_fragment:Sx,project_vertex:Tx,dithering_fragment:Ex,dithering_pars_fragment:Ax,roughnessmap_fragment:Nx,roughnessmap_pars_fragment:wx,shadowmap_pars_fragment:bx,shadowmap_pars_vertex:Rx,shadowmap_vertex:Cx,shadowmask_pars_fragment:Lx,skinbase_vertex:Px,skinning_pars_vertex:Ix,skinning_vertex:Dx,skinnormal_vertex:Ux,specularmap_fragment:Ox,specularmap_pars_fragment:Fx,tonemapping_fragment:Vx,tonemapping_pars_fragment:zx,transmission_fragment:Bx,transmission_pars_fragment:Hx,uv_pars_fragment:kx,uv_pars_vertex:Gx,uv_vertex:Wx,worldpos_vertex:Xx,background_vert:qx,background_frag:Yx,backgroundCube_vert:jx,backgroundCube_frag:$x,cube_vert:Kx,cube_frag:Zx,depth_vert:Jx,depth_frag:Qx,distanceRGBA_vert:ev,distanceRGBA_frag:tv,equirect_vert:nv,equirect_frag:iv,linedashed_vert:sv,linedashed_frag:ov,meshbasic_vert:rv,meshbasic_frag:av,meshlambert_vert:cv,meshlambert_frag:lv,meshmatcap_vert:uv,meshmatcap_frag:hv,meshnormal_vert:dv,meshnormal_frag:fv,meshphong_vert:pv,meshphong_frag:mv,meshphysical_vert:gv,meshphysical_frag:_v,meshtoon_vert:xv,meshtoon_frag:vv,points_vert:yv,points_frag:Mv,shadow_vert:Sv,shadow_frag:Tv,sprite_vert:Ev,sprite_frag:Av},_e={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},ci={basic:{uniforms:_n([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:_n([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:_n([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:_n([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:_n([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Fe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:_n([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:_n([_e.points,_e.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:_n([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:_n([_e.common,_e.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:_n([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:_n([_e.sprite,_e.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:_n([_e.common,_e.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:_n([_e.lights,_e.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ci.physical={uniforms:_n([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const zr={r:0,b:0,g:0},hs=new kn,Nv=new At;function wv(i,e,t,n,s,o,r){const a=new Fe(0);let c=o===!0?0:1,l,u,h=null,d=0,p=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function x(E){let y=!1;const A=g(E);A===null?f(a,c):A&&A.isColor&&(f(A,1),y=!0);const V=i.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,r):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===ma)?(u===void 0&&(u=new Gt(new nr(1,1,1),new es({name:"BackgroundCubeMaterial",uniforms:yo(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(V,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),hs.copy(y.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(hs)),u.material.toneMapped=gt.getTransfer(A.colorSpace)!==Et,(h!==A||d!==A.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Gt(new _a(2,2),new es({name:"BackgroundMaterial",uniforms:yo(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=gt.getTransfer(A.colorSpace)!==Et,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,y){E.getRGB(zr,zd(i)),n.buffers.color.setClear(zr.r,zr.g,zr.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(a,c)},render:x,addToRenderList:m}}function bv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(S,I,Z,q,ie){let ne=!1;const Q=h(q,Z,I);o!==Q&&(o=Q,l(o.object)),ne=p(S,q,Z,ie),ne&&g(S,q,Z,ie),ie!==null&&e.update(ie,i.ELEMENT_ARRAY_BUFFER),(ne||r)&&(r=!1,A(S,I,Z,q),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,I,Z){const q=Z.wireframe===!0;let ie=n[S.id];ie===void 0&&(ie={},n[S.id]=ie);let ne=ie[I.id];ne===void 0&&(ne={},ie[I.id]=ne);let Q=ne[q];return Q===void 0&&(Q=d(c()),ne[q]=Q),Q}function d(S){const I=[],Z=[],q=[];for(let ie=0;ie<t;ie++)I[ie]=0,Z[ie]=0,q[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Z,attributeDivisors:q,object:S,attributes:{},index:null}}function p(S,I,Z,q){const ie=o.attributes,ne=I.attributes;let Q=0;const se=Z.getAttributes();for(const J in se)if(se[J].location>=0){const Ae=ie[J];let be=ne[J];if(be===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(be=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(be=S.instanceColor)),Ae===void 0||Ae.attribute!==be||be&&Ae.data!==be.data)return!0;Q++}return o.attributesNum!==Q||o.index!==q}function g(S,I,Z,q){const ie={},ne=I.attributes;let Q=0;const se=Z.getAttributes();for(const J in se)if(se[J].location>=0){let Ae=ne[J];Ae===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(Ae=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(Ae=S.instanceColor));const be={};be.attribute=Ae,Ae&&Ae.data&&(be.data=Ae.data),ie[J]=be,Q++}o.attributes=ie,o.attributesNum=Q,o.index=q}function x(){const S=o.newAttributes;for(let I=0,Z=S.length;I<Z;I++)S[I]=0}function m(S){f(S,0)}function f(S,I){const Z=o.newAttributes,q=o.enabledAttributes,ie=o.attributeDivisors;Z[S]=1,q[S]===0&&(i.enableVertexAttribArray(S),q[S]=1),ie[S]!==I&&(i.vertexAttribDivisor(S,I),ie[S]=I)}function E(){const S=o.newAttributes,I=o.enabledAttributes;for(let Z=0,q=I.length;Z<q;Z++)I[Z]!==S[Z]&&(i.disableVertexAttribArray(Z),I[Z]=0)}function y(S,I,Z,q,ie,ne,Q){Q===!0?i.vertexAttribIPointer(S,I,Z,ie,ne):i.vertexAttribPointer(S,I,Z,q,ie,ne)}function A(S,I,Z,q){x();const ie=q.attributes,ne=Z.getAttributes(),Q=I.defaultAttributeValues;for(const se in ne){const J=ne[se];if(J.location>=0){let Me=ie[se];if(Me===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),Me!==void 0){const Ae=Me.normalized,be=Me.itemSize,tt=e.get(Me);if(tt===void 0)continue;const ct=tt.buffer,ee=tt.type,le=tt.bytesPerElement,Ne=ee===i.INT||ee===i.UNSIGNED_INT||Me.gpuType===Td;if(Me.isInterleavedBufferAttribute){const xe=Me.data,Ke=xe.stride,Ge=Me.offset;if(xe.isInstancedInterleavedBuffer){for(let nt=0;nt<J.locationSize;nt++)f(J.location+nt,xe.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let nt=0;nt<J.locationSize;nt++)m(J.location+nt);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let nt=0;nt<J.locationSize;nt++)y(J.location+nt,be/J.locationSize,ee,Ae,Ke*le,(Ge+be/J.locationSize*nt)*le,Ne)}else{if(Me.isInstancedBufferAttribute){for(let xe=0;xe<J.locationSize;xe++)f(J.location+xe,Me.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let xe=0;xe<J.locationSize;xe++)m(J.location+xe);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let xe=0;xe<J.locationSize;xe++)y(J.location+xe,be/J.locationSize,ee,Ae,be*le,be/J.locationSize*xe*le,Ne)}}else if(Q!==void 0){const Ae=Q[se];if(Ae!==void 0)switch(Ae.length){case 2:i.vertexAttrib2fv(J.location,Ae);break;case 3:i.vertexAttrib3fv(J.location,Ae);break;case 4:i.vertexAttrib4fv(J.location,Ae);break;default:i.vertexAttrib1fv(J.location,Ae)}}}}E()}function V(){F();for(const S in n){const I=n[S];for(const Z in I){const q=I[Z];for(const ie in q)u(q[ie].object),delete q[ie];delete I[Z]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const Z in I){const q=I[Z];for(const ie in q)u(q[ie].object),delete q[ie];delete I[Z]}delete n[S.id]}function N(S){for(const I in n){const Z=n[I];if(Z[S.id]===void 0)continue;const q=Z[S.id];for(const ie in q)u(q[ie].object),delete q[ie];delete Z[S.id]}}function F(){T(),r=!0,o!==s&&(o=s,l(o.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:T,dispose:V,releaseStatesOfGeometry:R,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Rv(i,e,t){let n;function s(l){n=l}function o(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function r(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h;p++)this.render(l[p],u[p]);else{d.multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}}function c(l,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)r(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x];for(let x=0;x<d.length;x++)t.update(g,n,d[x])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Cv(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(R){return!(R!==di&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ji&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ri&&!N)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,V=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:f,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:A,maxSamples:V}}function Lv(i){const e=this;let t=null,n=0,s=!1,o=!1;const r=new Ni,a=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||o&&!m)o?u(null):l();else{const E=o?0:n,y=E*4;let A=f.clippingState||null;c.value=A,A=u(g,d,y,p);for(let V=0;V!==y;++V)A[V]=t[V];f.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const f=p+x*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,A=p;y!==x;++y,A+=4)r.copy(h[y]).applyMatrix4(E,a),r.normal.toArray(m,A),m[A+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Pv(i){let e=new WeakMap;function t(r,a){return a===Bc?r.mapping=fo:a===Hc&&(r.mapping=po),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Bc||a===Hc)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new G_(c.height);return l.fromEquirectangularTexture(i,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Rl extends Bd{constructor(e=-1,t=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,r=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zs=4,nh=[.125,.215,.35,.446,.526,.582],xs=20,lc=new Rl,ih=new Fe;let uc=null,hc=0,dc=0,fc=!1;const ms=(1+Math.sqrt(5))/2,Ks=1/ms,sh=[new D(-ms,Ks,0),new D(ms,Ks,0),new D(-Ks,0,ms),new D(Ks,0,ms),new D(0,ms,-Ks),new D(0,ms,Ks),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class oh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,hc,dc),this._renderer.xr.enabled=fc,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fo||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:er,format:di,colorSpace:ri,depthBuffer:!1},s=rh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iv(o)),this._blurMaterial=Dv(o,e,t)}return s}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,lc)}_sceneToCubeUV(e,t,n,s){const a=new Mn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ih),u.toneMapping=In,u.autoClear=!1;const p=new wl({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Gt(new nr,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(ih),x=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const y=this._cubeSize;Br(s,E*y,f>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===fo||e.mapping===po;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Gt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;Br(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,lc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=sh[(s-o-1)%sh.length];this._blur(e,o-1,o,r,a)}t.autoClear=n}_blur(e,t,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",o),this._halfBlur(r,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Gt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*xs-1),x=o/g,m=isFinite(o)?1+Math.floor(u*x):xs;m>xs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xs}`);const f=[];let E=0;for(let N=0;N<xs;++N){const F=N/x,T=Math.exp(-F*F/2);f.push(T),N===0?E+=T:N<m&&(E+=2*T)}for(let N=0;N<f.length;N++)f[N]=f[N]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const A=this._sizeLods[s],V=3*A*(s>y-Zs?s-y+Zs:0),R=4*(this._cubeSize-A);Br(t,V,R,3*A,2*A),c.setRenderTarget(t),c.render(h,lc)}}function Iv(i){const e=[],t=[],n=[];let s=i;const o=i-Zs+1+nh.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let c=1/a;r>i-Zs?c=nh[r-i+Zs-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,f=1,E=new Float32Array(x*g*p),y=new Float32Array(m*g*p),A=new Float32Array(f*g*p);for(let R=0;R<p;R++){const N=R%3*2/3-1,F=R>2?0:-1,T=[N,F,0,N+2/3,F,0,N+2/3,F+1,0,N,F,0,N+2/3,F+1,0,N,F+1,0];E.set(T,x*g*R),y.set(d,m*g*R);const S=[R,R,R,R,R,R];A.set(S,f*g*R)}const V=new Ui;V.setAttribute("position",new Bn(E,x)),V.setAttribute("uv",new Bn(y,m)),V.setAttribute("faceIndex",new Bn(A,f)),e.push(V),s>Zs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rh(i,e,t){const n=new Ss(i,e,t);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Dv(i,e,t){const n=new Float32Array(xs),s=new D(0,1,0);return new es({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function ah(){return new es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function ch(){return new es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Uv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Bc||c===Hc,u=c===fo||c===po;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new oh(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new oh(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Ov(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&El("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fv(i,e,t,n){const s={},o=new WeakMap;function r(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",r),delete s[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let y=0,A=E.length;y<A;y+=3){const V=E[y+0],R=E[y+1],N=E[y+2];d.push(V,R,R,N,N,V)}}else if(g!==void 0){const E=g.array;x=g.version;for(let y=0,A=E.length/3-1;y<A;y+=3){const V=y+0,R=y+1,N=y+2;d.push(V,R,R,N,N,V)}}else return;const m=new(Pd(d)?Vd:Fd)(d,1);m.version=x;const f=o.get(h);f&&e.remove(f),o.set(h,m)}function u(h){const d=o.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Vv(i,e,t){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,p){i.drawElements(n,p,o,d*r),t.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,o,d*r,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<g;m++)this.render(d[m]/r,p[m]);else{x.multiDrawElementsWEBGL(n,p,0,o,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}}function h(d,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/r,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,o,d,0,x,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E];for(let E=0;E<x.length;E++)t.update(f,n,x[E])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function zv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=a*(o/3);break;case i.LINES:t.lines+=a*(o/2);break;case i.LINE_STRIP:t.lines+=a*(o-1);break;case i.LINE_LOOP:t.lines+=a*o;break;case i.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bv(i,e,t){const n=new WeakMap,s=new at;function o(r,a,c){const l=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let S=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let A=0;g===!0&&(A=1),x===!0&&(A=2),m===!0&&(A=3);let V=a.attributes.position.count*A,R=1;V>e.maxTextureSize&&(R=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const N=new Float32Array(V*R*4*h),F=new Al(N,V,R,h);F.type=Ri,F.needsUpdate=!0;const T=A*4;for(let I=0;I<h;I++){const Z=f[I],q=E[I],ie=y[I],ne=V*R*4*I;for(let Q=0;Q<Z.count;Q++){const se=Q*T;g===!0&&(s.fromBufferAttribute(Z,Q),N[ne+se+0]=s.x,N[ne+se+1]=s.y,N[ne+se+2]=s.z,N[ne+se+3]=0),x===!0&&(s.fromBufferAttribute(q,Q),N[ne+se+4]=s.x,N[ne+se+5]=s.y,N[ne+se+6]=s.z,N[ne+se+7]=0),m===!0&&(s.fromBufferAttribute(ie,Q),N[ne+se+8]=s.x,N[ne+se+9]=s.y,N[ne+se+10]=s.z,N[ne+se+11]=ie.itemSize===4?s.w:1)}}d={count:h,texture:F,size:new Te(V,R)},n.set(a,d),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function Hv(i,e,t,n){let s=new WeakMap;function o(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:r}}class ir extends dn{constructor(e,t,n,s,o,r,a,c,l,u=io){if(u!==io&&u!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===io&&(n=mo),n===void 0&&u===_o&&(n=go),super(null,s,o,r,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gd=new dn,Wd=new ir(1,1);Wd.compareFunction=Ld;const Xd=new Al,qd=new w_,Yd=new Hd,lh=[],uh=[],hh=new Float32Array(16),dh=new Float32Array(9),fh=new Float32Array(4);function Eo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=lh[s];if(o===void 0&&(o=new Float32Array(s),lh[s]=o),e!==0){n.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,i[r].toArray(o,a)}return o}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xa(i,e){let t=uh[e];t===void 0&&(t=new Int32Array(e),uh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function Wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function Xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function qv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,n))return;fh.set(n),i.uniformMatrix2fv(this.addr,!1,fh),jt(t,n)}}function Yv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,n))return;dh.set(n),i.uniformMatrix3fv(this.addr,!1,dh),jt(t,n)}}function jv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Yt(t,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),jt(t,n)}}function $v(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function Zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function Jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function Qv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function ty(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function ny(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function iy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const o=this.type===i.SAMPLER_2D_SHADOW?Wd:Gd;t.setTexture2D(e||o,s)}function sy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qd,s)}function oy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Yd,s)}function ry(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xd,s)}function ay(i){switch(i){case 5126:return kv;case 35664:return Gv;case 35665:return Wv;case 35666:return Xv;case 35674:return qv;case 35675:return Yv;case 35676:return jv;case 5124:case 35670:return $v;case 35667:case 35671:return Kv;case 35668:case 35672:return Zv;case 35669:case 35673:return Jv;case 5125:return Qv;case 36294:return ey;case 36295:return ty;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return ry}}function cy(i,e){i.uniform1fv(this.addr,e)}function ly(i,e){const t=Eo(e,this.size,2);i.uniform2fv(this.addr,t)}function uy(i,e){const t=Eo(e,this.size,3);i.uniform3fv(this.addr,t)}function hy(i,e){const t=Eo(e,this.size,4);i.uniform4fv(this.addr,t)}function dy(i,e){const t=Eo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fy(i,e){const t=Eo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function py(i,e){const t=Eo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function my(i,e){i.uniform1iv(this.addr,e)}function gy(i,e){i.uniform2iv(this.addr,e)}function _y(i,e){i.uniform3iv(this.addr,e)}function xy(i,e){i.uniform4iv(this.addr,e)}function vy(i,e){i.uniform1uiv(this.addr,e)}function yy(i,e){i.uniform2uiv(this.addr,e)}function My(i,e){i.uniform3uiv(this.addr,e)}function Sy(i,e){i.uniform4uiv(this.addr,e)}function Ty(i,e,t){const n=this.cache,s=e.length,o=xa(t,s);Yt(n,o)||(i.uniform1iv(this.addr,o),jt(n,o));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Gd,o[r])}function Ey(i,e,t){const n=this.cache,s=e.length,o=xa(t,s);Yt(n,o)||(i.uniform1iv(this.addr,o),jt(n,o));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||qd,o[r])}function Ay(i,e,t){const n=this.cache,s=e.length,o=xa(t,s);Yt(n,o)||(i.uniform1iv(this.addr,o),jt(n,o));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Yd,o[r])}function Ny(i,e,t){const n=this.cache,s=e.length,o=xa(t,s);Yt(n,o)||(i.uniform1iv(this.addr,o),jt(n,o));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Xd,o[r])}function wy(i){switch(i){case 5126:return cy;case 35664:return ly;case 35665:return uy;case 35666:return hy;case 35674:return dy;case 35675:return fy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return gy;case 35668:case 35672:return _y;case 35669:case 35673:return xy;case 5125:return vy;case 36294:return yy;case 36295:return My;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Ny}}class by{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ay(t.type)}}class Ry{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wy(t.type)}}class Cy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(e,t[a.id],n)}}}const pc=/(\w+)(\])?(\[|\.)?/g;function ph(i,e){i.seq.push(e),i.map[e.id]=e}function Ly(i,e,t){const n=i.name,s=n.length;for(pc.lastIndex=0;;){const o=pc.exec(n),r=pc.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){ph(t,l===void 0?new by(a,i,e):new Ry(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Cy(a),ph(t,h)),t=h}}}class qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),r=e.getUniformLocation(t,o.name);Ly(o,r,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,r=t.length;o!==r;++o){const a=t[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function mh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Py=37297;let Iy=0;function Dy(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function Uy(i){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(i);let n;switch(e===t?n="":e===ea&&t===Qr?n="LinearDisplayP3ToLinearSRGB":e===Qr&&t===ea&&(n="LinearSRGBToLinearDisplayP3"),i){case ri:case ga:return[n,"LinearTransferOETF"];case $n:case Sl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function gh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Dy(i.getShaderSource(e),r)}else return s}function Oy(i,e){const t=Uy(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Fy(i,e){let t;switch(e){case _d:t="Linear";break;case xd:t="Reinhard";break;case vd:t="OptimizedCineon";break;case yd:t="ACESFilmic";break;case Md:t="AgX";break;case zg:t="Neutral";break;case Vg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function zy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function By(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:i.getAttribLocation(e,r),locationSize:a}}return t}function ko(i){return i!==""}function _h(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(i){return i.replace(Hy,Gy)}const ky=new Map;function Gy(i,e){let t=$e[e];if(t===void 0){const n=ky.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xc(t)}const Wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(i){return i.replace(Wy,Xy)}function Xy(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function yh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ug?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Yy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fo:case po:e="ENVMAP_TYPE_CUBE";break;case ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function $y(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pa:e="ENVMAP_BLENDING_MULTIPLY";break;case Og:e="ENVMAP_BLENDING_MIX";break;case Fg:e="ENVMAP_BLENDING_ADD";break}return e}function Ky(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zy(i,e,t,n){const s=i.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const c=qy(t),l=Yy(t),u=jy(t),h=$y(t),d=Ky(t),p=Vy(t),g=zy(o),x=s.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ko).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ko).join(`
`),f.length>0&&(f+=`
`)):(m=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),f=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?$e.tonemapping_pars_fragment:"",t.toneMapping!==In?Fy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Oy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),r=Xc(r),r=_h(r,t),r=xh(r,t),a=Xc(a),a=_h(a,t),a=xh(a,t),r=vh(r),a=vh(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=E+m+r,A=E+f+a,V=mh(s,s.VERTEX_SHADER,y),R=mh(s,s.FRAGMENT_SHADER,A);s.attachShader(x,V),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function N(I){if(i.debug.checkShaderErrors){const Z=s.getProgramInfoLog(x).trim(),q=s.getShaderInfoLog(V).trim(),ie=s.getShaderInfoLog(R).trim();let ne=!0,Q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,V,R);else{const se=gh(s,V,"vertex"),J=gh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Z+`
`+se+`
`+J)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(q===""||ie==="")&&(Q=!1);Q&&(I.diagnostics={runnable:ne,programLog:Z,vertexShader:{log:q,prefix:m},fragmentShader:{log:ie,prefix:f}})}s.deleteShader(V),s.deleteShader(R),F=new qr(s,x),T=By(s,x)}let F;this.getUniforms=function(){return F===void 0&&N(this),F};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Py)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=V,this.fragmentShader=R,this}let Jy=0;class Qy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new eM(e),t.set(e,n)),n}}class eM{constructor(e){this.id=Jy++,this.code=e,this.usedTimes=0}}function tM(i,e,t,n,s,o,r){const a=new Ud,c=new Qy,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,S,I,Z,q){const ie=Z.fog,ne=q.geometry,Q=T.isMeshStandardMaterial?Z.environment:null,se=(T.isMeshStandardMaterial?t:e).get(T.envMap||Q),J=se&&se.mapping===ma?se.image.height:null,Me=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Ae=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,be=Ae!==void 0?Ae.length:0;let tt=0;ne.morphAttributes.position!==void 0&&(tt=1),ne.morphAttributes.normal!==void 0&&(tt=2),ne.morphAttributes.color!==void 0&&(tt=3);let ct,ee,le,Ne;if(Me){const lt=ci[Me];ct=lt.vertexShader,ee=lt.fragmentShader}else ct=T.vertexShader,ee=T.fragmentShader,c.update(T),le=c.getVertexShaderID(T),Ne=c.getFragmentShaderID(T);const xe=i.getRenderTarget(),Ke=q.isInstancedMesh===!0,Ge=q.isBatchedMesh===!0,nt=!!T.map,P=!!T.matcap,it=!!se,et=!!T.aoMap,Mt=!!T.lightMap,De=!!T.bumpMap,st=!!T.normalMap,Ze=!!T.displacementMap,We=!!T.emissiveMap,bt=!!T.metalnessMap,b=!!T.roughnessMap,v=T.anisotropy>0,X=T.clearcoat>0,oe=T.dispersion>0,ae=T.iridescence>0,ce=T.sheen>0,Le=T.transmission>0,ge=v&&!!T.anisotropyMap,me=X&&!!T.clearcoatMap,Xe=X&&!!T.clearcoatNormalMap,ue=X&&!!T.clearcoatRoughnessMap,Re=ae&&!!T.iridescenceMap,Qe=ae&&!!T.iridescenceThicknessMap,Ve=ce&&!!T.sheenColorMap,ve=ce&&!!T.sheenRoughnessMap,qe=!!T.specularMap,Ye=!!T.specularColorMap,Lt=!!T.specularIntensityMap,_=Le&&!!T.transmissionMap,Y=Le&&!!T.thicknessMap,H=!!T.gradientMap,j=!!T.alphaMap,re=T.alphaTest>0,Pe=!!T.alphaHash,ke=!!T.extensions;let Pt=In;T.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Pt=i.toneMapping);const Vt={shaderID:Me,shaderType:T.type,shaderName:T.name,vertexShader:ct,fragmentShader:ee,defines:T.defines,customVertexShaderID:le,customFragmentShaderID:Ne,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&q._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&q.instanceColor!==null,instancingMorph:Ke&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:ri,alphaToCoverage:!!T.alphaToCoverage,map:nt,matcap:P,envMap:it,envMapMode:it&&se.mapping,envMapCubeUVHeight:J,aoMap:et,lightMap:Mt,bumpMap:De,normalMap:st,displacementMap:d&&Ze,emissiveMap:We,normalMapObjectSpace:st&&T.normalMapType===Rd,normalMapTangentSpace:st&&T.normalMapType===Ii,metalnessMap:bt,roughnessMap:b,anisotropy:v,anisotropyMap:ge,clearcoat:X,clearcoatMap:me,clearcoatNormalMap:Xe,clearcoatRoughnessMap:ue,dispersion:oe,iridescence:ae,iridescenceMap:Re,iridescenceThicknessMap:Qe,sheen:ce,sheenColorMap:Ve,sheenRoughnessMap:ve,specularMap:qe,specularColorMap:Ye,specularIntensityMap:Lt,transmission:Le,transmissionMap:_,thicknessMap:Y,gradientMap:H,opaque:T.transparent===!1&&T.blending===no&&T.alphaToCoverage===!1,alphaMap:j,alphaTest:re,alphaHash:Pe,combine:T.combine,mapUv:nt&&x(T.map.channel),aoMapUv:et&&x(T.aoMap.channel),lightMapUv:Mt&&x(T.lightMap.channel),bumpMapUv:De&&x(T.bumpMap.channel),normalMapUv:st&&x(T.normalMap.channel),displacementMapUv:Ze&&x(T.displacementMap.channel),emissiveMapUv:We&&x(T.emissiveMap.channel),metalnessMapUv:bt&&x(T.metalnessMap.channel),roughnessMapUv:b&&x(T.roughnessMap.channel),anisotropyMapUv:ge&&x(T.anisotropyMap.channel),clearcoatMapUv:me&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(T.sheenRoughnessMap.channel),specularMapUv:qe&&x(T.specularMap.channel),specularColorMapUv:Ye&&x(T.specularColorMap.channel),specularIntensityMapUv:Lt&&x(T.specularIntensityMap.channel),transmissionMapUv:_&&x(T.transmissionMap.channel),thicknessMapUv:Y&&x(T.thicknessMap.channel),alphaMapUv:j&&x(T.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(st||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ne.attributes.uv&&(nt||j),fog:!!ie,useFog:T.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:tt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:nt&&T.map.isVideoTexture===!0&&gt.getTransfer(T.map.colorSpace)===Et,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===bi,flipSided:T.side===vn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ke&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ke&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function f(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)S.push(I),S.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(E(S,T),y(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function E(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function y(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),T.push(a.mask)}function A(T){const S=g[T.type];let I;if(S){const Z=ci[S];I=z_.clone(Z.uniforms)}else I=T.uniforms;return I}function V(T,S){let I;for(let Z=0,q=u.length;Z<q;Z++){const ie=u[Z];if(ie.cacheKey===S){I=ie,++I.usedTimes;break}}return I===void 0&&(I=new Zy(i,S,T,o),u.push(I)),I}function R(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function N(T){c.remove(T)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:V,releaseProgram:R,releaseShaderCache:N,programs:u,dispose:F}}function nM(){let i=new WeakMap;function e(o){let r=i.get(o);return r===void 0&&(r={},i.set(o,r)),r}function t(o){i.delete(o)}function n(o,r,a){i.get(o)[r]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function iM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sh(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function r(h,d,p,g,x,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,d,p,g,x,m){const f=r(h,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(h,d,p,g,x,m){const f=r(h,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||iM),n.length>1&&n.sort(d||Mh),s.length>1&&s.sort(d||Mh)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function sM(){let i=new WeakMap;function e(n,s){const o=i.get(n);let r;return o===void 0?(r=new Sh,i.set(n,[r])):s>=o.length?(r=new Sh,o.push(r)):r=o[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function oM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Fe};break;case"SpotLight":t={position:new D,direction:new D,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function rM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let aM=0;function cM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lM(i){const e=new oM,t=rM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,o=new At,r=new At;function a(l){let u=0,h=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,E=0,y=0,A=0,V=0,R=0,N=0;l.sort(cM);for(let T=0,S=l.length;T<S;T++){const I=l[T],Z=I.color,q=I.intensity,ie=I.distance,ne=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=Z.r*q,h+=Z.g*q,d+=Z.b*q;else if(I.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(I.sh.coefficients[Q],q);N++}else if(I.isDirectionalLight){const Q=e.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const se=I.shadow,J=t.get(I);J.shadowBias=se.bias,J.shadowNormalBias=se.normalBias,J.shadowRadius=se.radius,J.shadowMapSize=se.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=I.shadow.matrix,E++}n.directional[p]=Q,p++}else if(I.isSpotLight){const Q=e.get(I);Q.position.setFromMatrixPosition(I.matrixWorld),Q.color.copy(Z).multiplyScalar(q),Q.distance=ie,Q.coneCos=Math.cos(I.angle),Q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Q.decay=I.decay,n.spot[x]=Q;const se=I.shadow;if(I.map&&(n.spotLightMap[V]=I.map,V++,se.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[x]=se.matrix,I.castShadow){const J=t.get(I);J.shadowBias=se.bias,J.shadowNormalBias=se.normalBias,J.shadowRadius=se.radius,J.shadowMapSize=se.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=ne,A++}x++}else if(I.isRectAreaLight){const Q=e.get(I);Q.color.copy(Z).multiplyScalar(q),Q.halfWidth.set(I.width*.5,0,0),Q.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=Q,m++}else if(I.isPointLight){const Q=e.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),Q.distance=I.distance,Q.decay=I.decay,I.castShadow){const se=I.shadow,J=t.get(I);J.shadowBias=se.bias,J.shadowNormalBias=se.normalBias,J.shadowRadius=se.radius,J.shadowMapSize=se.mapSize,J.shadowCameraNear=se.camera.near,J.shadowCameraFar=se.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=ne,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=Q,g++}else if(I.isHemisphereLight){const Q=e.get(I);Q.skyColor.copy(I.color).multiplyScalar(q),Q.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[f]=Q,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==x||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==E||F.numPointShadows!==y||F.numSpotShadows!==A||F.numSpotMaps!==V||F.numLightProbes!==N)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=A+V-R,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=N,F.directionalLength=p,F.pointLength=g,F.spotLength=x,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=E,F.numPointShadows=y,F.numSpotShadows=A,F.numSpotMaps=V,F.numLightProbes=N,n.version=aM++)}function c(l,u){let h=0,d=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const y=l[f];if(y.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),h++}else if(y.isSpotLight){const A=n.spot[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const A=n.rectArea[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),r.identity(),o.copy(y.matrixWorld),o.premultiply(m),r.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(r),A.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const A=n.hemi[x];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Th(i){const e=new lM(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function o(u){t.push(u)}function r(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function uM(i){let e=new WeakMap;function t(s,o=0){const r=e.get(s);let a;return r===void 0?(a=new Th(i),e.set(s,[a])):o>=r.length?(a=new Th(i),r.push(a)):a=r[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class hM extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dM extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mM(i,e,t){let n=new bl;const s=new Te,o=new Te,r=new at,a=new hM({depthPacking:Jg}),c=new dM,l={},u=t.maxTextureSize,h={[Zi]:vn,[vn]:Zi,[bi]:bi},d=new es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:fM,fragmentShader:pM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ui;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gd;let f=this.type;this.render=function(R,N,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const T=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Ki),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const q=f!==Ai&&this.type===Ai,ie=f===Ai&&this.type!==Ai;for(let ne=0,Q=R.length;ne<Q;ne++){const se=R[ne],J=se.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const Me=J.getFrameExtents();if(s.multiply(Me),o.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/Me.x),s.x=o.x*Me.x,J.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/Me.y),s.y=o.y*Me.y,J.mapSize.y=o.y)),J.map===null||q===!0||ie===!0){const be=this.type!==Ai?{minFilter:hn,magFilter:hn}:{};J.map!==null&&J.map.dispose(),J.map=new Ss(s.x,s.y,be),J.map.texture.name=se.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const Ae=J.getViewportCount();for(let be=0;be<Ae;be++){const tt=J.getViewport(be);r.set(o.x*tt.x,o.y*tt.y,o.x*tt.z,o.y*tt.w),Z.viewport(r),J.updateMatrices(se,be),n=J.getFrustum(),A(N,F,J.camera,se,this.type)}J.isPointLightShadow!==!0&&this.type===Ai&&E(J,F),J.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,S,I)};function E(R,N){const F=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ss(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(N,null,F,d,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(N,null,F,p,x,null)}function y(R,N,F,T){let S=null;const I=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)S=I;else if(S=F.isPointLight===!0?c:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const Z=S.uuid,q=N.uuid;let ie=l[Z];ie===void 0&&(ie={},l[Z]=ie);let ne=ie[q];ne===void 0&&(ne=S.clone(),ie[q]=ne,N.addEventListener("dispose",V)),S=ne}if(S.visible=N.visible,S.wireframe=N.wireframe,T===Ai?S.side=N.shadowSide!==null?N.shadowSide:N.side:S.side=N.shadowSide!==null?N.shadowSide:h[N.side],S.alphaMap=N.alphaMap,S.alphaTest=N.alphaTest,S.map=N.map,S.clipShadows=N.clipShadows,S.clippingPlanes=N.clippingPlanes,S.clipIntersection=N.clipIntersection,S.displacementMap=N.displacementMap,S.displacementScale=N.displacementScale,S.displacementBias=N.displacementBias,S.wireframeLinewidth=N.wireframeLinewidth,S.linewidth=N.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Z=i.properties.get(S);Z.light=F}return S}function A(R,N,F,T,S){if(R.visible===!1)return;if(R.layers.test(N.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Ai)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const q=e.update(R),ie=R.material;if(Array.isArray(ie)){const ne=q.groups;for(let Q=0,se=ne.length;Q<se;Q++){const J=ne[Q],Me=ie[J.materialIndex];if(Me&&Me.visible){const Ae=y(R,Me,T,S);R.onBeforeShadow(i,R,N,F,q,Ae,J),i.renderBufferDirect(F,null,q,Ae,R,J),R.onAfterShadow(i,R,N,F,q,Ae,J)}}}else if(ie.visible){const ne=y(R,ie,T,S);R.onBeforeShadow(i,R,N,F,q,ne,null),i.renderBufferDirect(F,null,q,ne,R,null),R.onAfterShadow(i,R,N,F,q,ne,null)}}const Z=R.children;for(let q=0,ie=Z.length;q<ie;q++)A(Z[q],N,F,T,S)}function V(R){R.target.removeEventListener("dispose",V);for(const F in l){const T=l[F],S=R.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function gM(i){function e(){let _=!1;const Y=new at;let H=null;const j=new at(0,0,0,0);return{setMask:function(re){H!==re&&!_&&(i.colorMask(re,re,re,re),H=re)},setLocked:function(re){_=re},setClear:function(re,Pe,ke,Pt,Vt){Vt===!0&&(re*=Pt,Pe*=Pt,ke*=Pt),Y.set(re,Pe,ke,Pt),j.equals(Y)===!1&&(i.clearColor(re,Pe,ke,Pt),j.copy(Y))},reset:function(){_=!1,H=null,j.set(-1,0,0,0)}}}function t(){let _=!1,Y=null,H=null,j=null;return{setTest:function(re){re?Ne(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(re){Y!==re&&!_&&(i.depthMask(re),Y=re)},setFunc:function(re){if(H!==re){switch(re){case Rg:i.depthFunc(i.NEVER);break;case Cg:i.depthFunc(i.ALWAYS);break;case Lg:i.depthFunc(i.LESS);break;case Kr:i.depthFunc(i.LEQUAL);break;case Pg:i.depthFunc(i.EQUAL);break;case Ig:i.depthFunc(i.GEQUAL);break;case Dg:i.depthFunc(i.GREATER);break;case Ug:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}H=re}},setLocked:function(re){_=re},setClear:function(re){j!==re&&(i.clearDepth(re),j=re)},reset:function(){_=!1,Y=null,H=null,j=null}}}function n(){let _=!1,Y=null,H=null,j=null,re=null,Pe=null,ke=null,Pt=null,Vt=null;return{setTest:function(lt){_||(lt?Ne(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(lt){Y!==lt&&!_&&(i.stencilMask(lt),Y=lt)},setFunc:function(lt,zt,Bt){(H!==lt||j!==zt||re!==Bt)&&(i.stencilFunc(lt,zt,Bt),H=lt,j=zt,re=Bt)},setOp:function(lt,zt,Bt){(Pe!==lt||ke!==zt||Pt!==Bt)&&(i.stencilOp(lt,zt,Bt),Pe=lt,ke=zt,Pt=Bt)},setLocked:function(lt){_=lt},setClear:function(lt){Vt!==lt&&(i.clearStencil(lt),Vt=lt)},reset:function(){_=!1,Y=null,H=null,j=null,re=null,Pe=null,ke=null,Pt=null,Vt=null}}}const s=new e,o=new t,r=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],p=null,g=!1,x=null,m=null,f=null,E=null,y=null,A=null,V=null,R=new Fe(0,0,0),N=0,F=!1,T=null,S=null,I=null,Z=null,q=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,Q=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(se)[1]),ne=Q>=1):se.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ne=Q>=2);let J=null,Me={};const Ae=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),tt=new at().fromArray(Ae),ct=new at().fromArray(be);function ee(_,Y,H,j){const re=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(_,Pe),i.texParameteri(_,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(_,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<H;ke++)_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(Y+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return Pe}const le={};le[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),Ne(i.DEPTH_TEST),o.setFunc(Kr),De(!1),st(su),Ne(i.CULL_FACE),et(Ki);function Ne(_){l[_]!==!0&&(i.enable(_),l[_]=!0)}function xe(_){l[_]!==!1&&(i.disable(_),l[_]=!1)}function Ke(_,Y){return u[_]!==Y?(i.bindFramebuffer(_,Y),u[_]=Y,_===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Y),_===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function Ge(_,Y){let H=d,j=!1;if(_){H=h.get(Y),H===void 0&&(H=[],h.set(Y,H));const re=_.textures;if(H.length!==re.length||H[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,ke=re.length;Pe<ke;Pe++)H[Pe]=i.COLOR_ATTACHMENT0+Pe;H.length=re.length,j=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,j=!0);j&&i.drawBuffers(H)}function nt(_){return p!==_?(i.useProgram(_),p=_,!0):!1}const P={[_s]:i.FUNC_ADD,[dg]:i.FUNC_SUBTRACT,[fg]:i.FUNC_REVERSE_SUBTRACT};P[pg]=i.MIN,P[mg]=i.MAX;const it={[gg]:i.ZERO,[_g]:i.ONE,[xg]:i.SRC_COLOR,[Vc]:i.SRC_ALPHA,[Eg]:i.SRC_ALPHA_SATURATE,[Sg]:i.DST_COLOR,[yg]:i.DST_ALPHA,[vg]:i.ONE_MINUS_SRC_COLOR,[zc]:i.ONE_MINUS_SRC_ALPHA,[Tg]:i.ONE_MINUS_DST_COLOR,[Mg]:i.ONE_MINUS_DST_ALPHA,[Ag]:i.CONSTANT_COLOR,[Ng]:i.ONE_MINUS_CONSTANT_COLOR,[wg]:i.CONSTANT_ALPHA,[bg]:i.ONE_MINUS_CONSTANT_ALPHA};function et(_,Y,H,j,re,Pe,ke,Pt,Vt,lt){if(_===Ki){g===!0&&(xe(i.BLEND),g=!1);return}if(g===!1&&(Ne(i.BLEND),g=!0),_!==hg){if(_!==x||lt!==F){if((m!==_s||y!==_s)&&(i.blendEquation(i.FUNC_ADD),m=_s,y=_s),lt)switch(_){case no:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ou:i.blendFunc(i.ONE,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case no:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ou:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case au:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}f=null,E=null,A=null,V=null,R.set(0,0,0),N=0,x=_,F=lt}return}re=re||Y,Pe=Pe||H,ke=ke||j,(Y!==m||re!==y)&&(i.blendEquationSeparate(P[Y],P[re]),m=Y,y=re),(H!==f||j!==E||Pe!==A||ke!==V)&&(i.blendFuncSeparate(it[H],it[j],it[Pe],it[ke]),f=H,E=j,A=Pe,V=ke),(Pt.equals(R)===!1||Vt!==N)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Vt),R.copy(Pt),N=Vt),x=_,F=!1}function Mt(_,Y){_.side===bi?xe(i.CULL_FACE):Ne(i.CULL_FACE);let H=_.side===vn;Y&&(H=!H),De(H),_.blending===no&&_.transparent===!1?et(Ki):et(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),o.setFunc(_.depthFunc),o.setTest(_.depthTest),o.setMask(_.depthWrite),s.setMask(_.colorWrite);const j=_.stencilWrite;r.setTest(j),j&&(r.setMask(_.stencilWriteMask),r.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),r.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),We(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(_){T!==_&&(_?i.frontFace(i.CW):i.frontFace(i.CCW),T=_)}function st(_){_!==cg?(Ne(i.CULL_FACE),_!==S&&(_===su?i.cullFace(i.BACK):_===lg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),S=_}function Ze(_){_!==I&&(ne&&i.lineWidth(_),I=_)}function We(_,Y,H){_?(Ne(i.POLYGON_OFFSET_FILL),(Z!==Y||q!==H)&&(i.polygonOffset(Y,H),Z=Y,q=H)):xe(i.POLYGON_OFFSET_FILL)}function bt(_){_?Ne(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function b(_){_===void 0&&(_=i.TEXTURE0+ie-1),J!==_&&(i.activeTexture(_),J=_)}function v(_,Y,H){H===void 0&&(J===null?H=i.TEXTURE0+ie-1:H=J);let j=Me[H];j===void 0&&(j={type:void 0,texture:void 0},Me[H]=j),(j.type!==_||j.texture!==Y)&&(J!==H&&(i.activeTexture(H),J=H),i.bindTexture(_,Y||le[_]),j.type=_,j.texture=Y)}function X(){const _=Me[J];_!==void 0&&_.type!==void 0&&(i.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Le(){try{i.texSubImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Qe(){try{i.texImage3D.apply(i,arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Ve(_){tt.equals(_)===!1&&(i.scissor(_.x,_.y,_.z,_.w),tt.copy(_))}function ve(_){ct.equals(_)===!1&&(i.viewport(_.x,_.y,_.z,_.w),ct.copy(_))}function qe(_,Y){let H=c.get(Y);H===void 0&&(H=new WeakMap,c.set(Y,H));let j=H.get(_);j===void 0&&(j=i.getUniformBlockIndex(Y,_.name),H.set(_,j))}function Ye(_,Y){const j=c.get(Y).get(_);a.get(Y)!==j&&(i.uniformBlockBinding(Y,j,_.__bindingPointIndex),a.set(Y,j))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},J=null,Me={},u={},h=new WeakMap,d=[],p=null,g=!1,x=null,m=null,f=null,E=null,y=null,A=null,V=null,R=new Fe(0,0,0),N=0,F=!1,T=null,S=null,I=null,Z=null,q=null,tt.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:Ne,disable:xe,bindFramebuffer:Ke,drawBuffers:Ge,useProgram:nt,setBlending:et,setMaterial:Mt,setFlipSided:De,setCullFace:st,setLineWidth:Ze,setPolygonOffset:We,setScissorTest:bt,activeTexture:b,bindTexture:v,unbindTexture:X,compressedTexImage2D:oe,compressedTexImage3D:ae,texImage2D:Re,texImage3D:Qe,updateUBOMapping:qe,uniformBlockBinding:Ye,texStorage2D:Xe,texStorage3D:ue,texSubImage2D:ce,texSubImage3D:Le,compressedTexSubImage2D:ge,compressedTexSubImage3D:me,scissor:Ve,viewport:ve,reset:Lt}}function _M(i,e,t,n,s,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Te,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return p?new OffscreenCanvas(b,v):Yo("canvas")}function x(b,v,X){let oe=1;const ae=bt(b);if((ae.width>X||ae.height>X)&&(oe=X/Math.max(ae.width,ae.height)),oe<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ce=Math.floor(oe*ae.width),Le=Math.floor(oe*ae.height);h===void 0&&(h=g(ce,Le));const ge=v?g(ce,Le):h;return ge.width=ce,ge.height=Le,ge.getContext("2d").drawImage(b,0,0,ce,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ce+"x"+Le+")."),ge}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==hn&&b.minFilter!==Zn}function f(b){i.generateMipmap(b)}function E(b,v,X,oe,ae=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce=v;if(v===i.RED&&(X===i.FLOAT&&(ce=i.R32F),X===i.HALF_FLOAT&&(ce=i.R16F),X===i.UNSIGNED_BYTE&&(ce=i.R8)),v===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.R8UI),X===i.UNSIGNED_SHORT&&(ce=i.R16UI),X===i.UNSIGNED_INT&&(ce=i.R32UI),X===i.BYTE&&(ce=i.R8I),X===i.SHORT&&(ce=i.R16I),X===i.INT&&(ce=i.R32I)),v===i.RG&&(X===i.FLOAT&&(ce=i.RG32F),X===i.HALF_FLOAT&&(ce=i.RG16F),X===i.UNSIGNED_BYTE&&(ce=i.RG8)),v===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.RG8UI),X===i.UNSIGNED_SHORT&&(ce=i.RG16UI),X===i.UNSIGNED_INT&&(ce=i.RG32UI),X===i.BYTE&&(ce=i.RG8I),X===i.SHORT&&(ce=i.RG16I),X===i.INT&&(ce=i.RG32I)),v===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),v===i.RGBA){const Le=ae?Jr:gt.getTransfer(oe);X===i.FLOAT&&(ce=i.RGBA32F),X===i.HALF_FLOAT&&(ce=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ce=Le===Et?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function y(b,v){let X;return b?v===null||v===mo||v===go?X=i.DEPTH24_STENCIL8:v===Ri?X=i.DEPTH32F_STENCIL8:v===Zr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mo||v===go?X=i.DEPTH_COMPONENT24:v===Ri?X=i.DEPTH_COMPONENT32F:v===Zr&&(X=i.DEPTH_COMPONENT16),X}function A(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==hn&&b.minFilter!==Zn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function V(b){const v=b.target;v.removeEventListener("dispose",V),N(v),v.isVideoTexture&&u.delete(v)}function R(b){const v=b.target;v.removeEventListener("dispose",R),T(v)}function N(b){const v=n.get(b);if(v.__webglInit===void 0)return;const X=b.source,oe=d.get(X);if(oe){const ae=oe[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&F(b),Object.keys(oe).length===0&&d.delete(X)}n.remove(b)}function F(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const X=b.source,oe=d.get(X);delete oe[v.__cacheKey],r.memory.textures--}function T(b){const v=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(v.__webglFramebuffer[oe]))for(let ae=0;ae<v.__webglFramebuffer[oe].length;ae++)i.deleteFramebuffer(v.__webglFramebuffer[oe][ae]);else i.deleteFramebuffer(v.__webglFramebuffer[oe]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[oe])}else{if(Array.isArray(v.__webglFramebuffer))for(let oe=0;oe<v.__webglFramebuffer.length;oe++)i.deleteFramebuffer(v.__webglFramebuffer[oe]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let oe=0;oe<v.__webglColorRenderbuffer.length;oe++)v.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[oe]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const X=b.textures;for(let oe=0,ae=X.length;oe<ae;oe++){const ce=n.get(X[oe]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),r.memory.textures--),n.remove(X[oe])}n.remove(b)}let S=0;function I(){S=0}function Z(){const b=S;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),S+=1,b}function q(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function ie(b,v){const X=n.get(b);if(b.isVideoTexture&&Ze(b),b.isRenderTargetTexture===!1&&b.version>0&&X.__version!==b.version){const oe=b.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(X,b,v);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+v)}function ne(b,v){const X=n.get(b);if(b.version>0&&X.__version!==b.version){ct(X,b,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+v)}function Q(b,v){const X=n.get(b);if(b.version>0&&X.__version!==b.version){ct(X,b,v);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+v)}function se(b,v){const X=n.get(b);if(b.version>0&&X.__version!==b.version){ee(X,b,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+v)}const J={[kc]:i.REPEAT,[ys]:i.CLAMP_TO_EDGE,[Gc]:i.MIRRORED_REPEAT},Me={[hn]:i.NEAREST,[Bg]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[Zn]:i.LINEAR,[za]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},Ae={[Qg]:i.NEVER,[s_]:i.ALWAYS,[Cd]:i.LESS,[Ld]:i.LEQUAL,[e_]:i.EQUAL,[i_]:i.GEQUAL,[t_]:i.GREATER,[n_]:i.NOTEQUAL};function be(b,v){if(v.type===Ri&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Zn||v.magFilter===za||v.magFilter===vr||v.magFilter===Yi||v.minFilter===Zn||v.minFilter===za||v.minFilter===vr||v.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,J[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,J[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,J[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Me[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Me[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ae[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===hn||v.minFilter!==vr&&v.minFilter!==Yi||v.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function tt(b,v){let X=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",V));const oe=v.source;let ae=d.get(oe);ae===void 0&&(ae={},d.set(oe,ae));const ce=q(v);if(ce!==b.__cacheKey){ae[ce]===void 0&&(ae[ce]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,X=!0),ae[ce].usedTimes++;const Le=ae[b.__cacheKey];Le!==void 0&&(ae[b.__cacheKey].usedTimes--,Le.usedTimes===0&&F(v)),b.__cacheKey=ce,b.__webglTexture=ae[ce].texture}return X}function ct(b,v,X){let oe=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(oe=i.TEXTURE_3D);const ae=tt(b,v),ce=v.source;t.bindTexture(oe,b.__webglTexture,i.TEXTURE0+X);const Le=n.get(ce);if(ce.version!==Le.__version||ae===!0){t.activeTexture(i.TEXTURE0+X);const ge=gt.getPrimaries(gt.workingColorSpace),me=v.colorSpace===qi?null:gt.getPrimaries(v.colorSpace),Xe=v.colorSpace===qi||ge===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ue=x(v.image,!1,s.maxTextureSize);ue=We(v,ue);const Re=o.convert(v.format,v.colorSpace),Qe=o.convert(v.type);let Ve=E(v.internalFormat,Re,Qe,v.colorSpace,v.isVideoTexture);be(oe,v);let ve;const qe=v.mipmaps,Ye=v.isVideoTexture!==!0,Lt=Le.__version===void 0||ae===!0,_=ce.dataReady,Y=A(v,ue);if(v.isDepthTexture)Ve=y(v.format===_o,v.type),Lt&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Ve,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Ve,ue.width,ue.height,0,Re,Qe,null));else if(v.isDataTexture)if(qe.length>0){Ye&&Lt&&t.texStorage2D(i.TEXTURE_2D,Y,Ve,qe[0].width,qe[0].height);for(let H=0,j=qe.length;H<j;H++)ve=qe[H],Ye?_&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,ve.width,ve.height,Re,Qe,ve.data):t.texImage2D(i.TEXTURE_2D,H,Ve,ve.width,ve.height,0,Re,Qe,ve.data);v.generateMipmaps=!1}else Ye?(Lt&&t.texStorage2D(i.TEXTURE_2D,Y,Ve,ue.width,ue.height),_&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Re,Qe,ue.data)):t.texImage2D(i.TEXTURE_2D,0,Ve,ue.width,ue.height,0,Re,Qe,ue.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ye&&Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Y,Ve,qe[0].width,qe[0].height,ue.depth);for(let H=0,j=qe.length;H<j;H++)if(ve=qe[H],v.format!==di)if(Re!==null)if(Ye){if(_)if(v.layerUpdates.size>0){for(const re of v.layerUpdates){const Pe=ve.width*ve.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,re,ve.width,ve.height,1,Re,ve.data.slice(Pe*re,Pe*(re+1)),0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,ue.depth,Re,ve.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Ve,ve.width,ve.height,ue.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?_&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,ue.depth,Re,Qe,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,Ve,ve.width,ve.height,ue.depth,0,Re,Qe,ve.data)}else{Ye&&Lt&&t.texStorage2D(i.TEXTURE_2D,Y,Ve,qe[0].width,qe[0].height);for(let H=0,j=qe.length;H<j;H++)ve=qe[H],v.format!==di?Re!==null?Ye?_&&t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,ve.width,ve.height,Re,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,H,Ve,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?_&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,ve.width,ve.height,Re,Qe,ve.data):t.texImage2D(i.TEXTURE_2D,H,Ve,ve.width,ve.height,0,Re,Qe,ve.data)}else if(v.isDataArrayTexture)if(Ye){if(Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Y,Ve,ue.width,ue.height,ue.depth),_)if(v.layerUpdates.size>0){let H;switch(Qe){case i.UNSIGNED_BYTE:switch(Re){case i.ALPHA:H=1;break;case i.LUMINANCE:H=1;break;case i.LUMINANCE_ALPHA:H=2;break;case i.RGB:H=3;break;case i.RGBA:H=4;break;default:throw new Error(`Unknown texel size for format ${Re}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:H=1;break;default:throw new Error(`Unknown texel size for type ${Qe}.`)}const j=ue.width*ue.height*H;for(const re of v.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,ue.width,ue.height,1,Re,Qe,ue.data.slice(j*re,j*(re+1)));v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Re,Qe,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,ue.width,ue.height,ue.depth,0,Re,Qe,ue.data);else if(v.isData3DTexture)Ye?(Lt&&t.texStorage3D(i.TEXTURE_3D,Y,Ve,ue.width,ue.height,ue.depth),_&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Re,Qe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,ue.width,ue.height,ue.depth,0,Re,Qe,ue.data);else if(v.isFramebufferTexture){if(Lt)if(Ye)t.texStorage2D(i.TEXTURE_2D,Y,Ve,ue.width,ue.height);else{let H=ue.width,j=ue.height;for(let re=0;re<Y;re++)t.texImage2D(i.TEXTURE_2D,re,Ve,H,j,0,Re,Qe,null),H>>=1,j>>=1}}else if(qe.length>0){if(Ye&&Lt){const H=bt(qe[0]);t.texStorage2D(i.TEXTURE_2D,Y,Ve,H.width,H.height)}for(let H=0,j=qe.length;H<j;H++)ve=qe[H],Ye?_&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,Re,Qe,ve):t.texImage2D(i.TEXTURE_2D,H,Ve,Re,Qe,ve);v.generateMipmaps=!1}else if(Ye){if(Lt){const H=bt(ue);t.texStorage2D(i.TEXTURE_2D,Y,Ve,H.width,H.height)}_&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Qe,ue)}else t.texImage2D(i.TEXTURE_2D,0,Ve,Re,Qe,ue);m(v)&&f(oe),Le.__version=ce.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ee(b,v,X){if(v.image.length!==6)return;const oe=tt(b,v),ae=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+X);const ce=n.get(ae);if(ae.version!==ce.__version||oe===!0){t.activeTexture(i.TEXTURE0+X);const Le=gt.getPrimaries(gt.workingColorSpace),ge=v.colorSpace===qi?null:gt.getPrimaries(v.colorSpace),me=v.colorSpace===qi||Le===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Xe=v.isCompressedTexture||v.image[0].isCompressedTexture,ue=v.image[0]&&v.image[0].isDataTexture,Re=[];for(let j=0;j<6;j++)!Xe&&!ue?Re[j]=x(v.image[j],!0,s.maxCubemapSize):Re[j]=ue?v.image[j].image:v.image[j],Re[j]=We(v,Re[j]);const Qe=Re[0],Ve=o.convert(v.format,v.colorSpace),ve=o.convert(v.type),qe=E(v.internalFormat,Ve,ve,v.colorSpace),Ye=v.isVideoTexture!==!0,Lt=ce.__version===void 0||oe===!0,_=ae.dataReady;let Y=A(v,Qe);be(i.TEXTURE_CUBE_MAP,v);let H;if(Xe){Ye&&Lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Y,qe,Qe.width,Qe.height);for(let j=0;j<6;j++){H=Re[j].mipmaps;for(let re=0;re<H.length;re++){const Pe=H[re];v.format!==di?Ve!==null?Ye?_&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,0,0,Pe.width,Pe.height,Ve,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,qe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?_&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,0,0,Pe.width,Pe.height,Ve,ve,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,re,qe,Pe.width,Pe.height,0,Ve,ve,Pe.data)}}}else{if(H=v.mipmaps,Ye&&Lt){H.length>0&&Y++;const j=bt(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Y,qe,j.width,j.height)}for(let j=0;j<6;j++)if(ue){Ye?_&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Re[j].width,Re[j].height,Ve,ve,Re[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qe,Re[j].width,Re[j].height,0,Ve,ve,Re[j].data);for(let re=0;re<H.length;re++){const ke=H[re].image[j].image;Ye?_&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,0,0,ke.width,ke.height,Ve,ve,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,qe,ke.width,ke.height,0,Ve,ve,ke.data)}}else{Ye?_&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ve,ve,Re[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qe,Ve,ve,Re[j]);for(let re=0;re<H.length;re++){const Pe=H[re];Ye?_&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,0,0,Ve,ve,Pe.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,re+1,qe,Ve,ve,Pe.image[j])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),ce.__version=ae.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function le(b,v,X,oe,ae,ce){const Le=o.convert(X.format,X.colorSpace),ge=o.convert(X.type),me=E(X.internalFormat,Le,ge,X.colorSpace);if(!n.get(v).__hasExternalTextures){const ue=Math.max(1,v.width>>ce),Re=Math.max(1,v.height>>ce);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,ce,me,ue,Re,v.depth,0,Le,ge,null):t.texImage2D(ae,ce,me,ue,Re,0,Le,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),st(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ae,n.get(X).__webglTexture,0,De(v)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,ae,n.get(X).__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(b,v,X){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const oe=v.depthTexture,ae=oe&&oe.isDepthTexture?oe.type:null,ce=y(v.stencilBuffer,ae),Le=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=De(v);st(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,ce,v.width,v.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ce,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ce,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,b)}else{const oe=v.textures;for(let ae=0;ae<oe.length;ae++){const ce=oe[ae],Le=o.convert(ce.format,ce.colorSpace),ge=o.convert(ce.type),me=E(ce.internalFormat,Le,ge,ce.colorSpace),Xe=De(v);X&&st(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,me,v.width,v.height):st(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,me,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,me,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),ie(v.depthTexture,0);const oe=n.get(v.depthTexture).__webglTexture,ae=De(v);if(v.depthTexture.format===io)st(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(v.depthTexture.format===_o)st(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ke(b){const v=n.get(b),X=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");xe(v.__webglFramebuffer,b)}else if(X){v.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[oe]),v.__webglDepthbuffer[oe]=i.createRenderbuffer(),Ne(v.__webglDepthbuffer[oe],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Ne(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(b,v,X){const oe=n.get(b);v!==void 0&&le(oe.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ke(b)}function nt(b){const v=b.texture,X=n.get(b),oe=n.get(v);b.addEventListener("dispose",R);const ae=b.textures,ce=b.isWebGLCubeRenderTarget===!0,Le=ae.length>1;if(Le||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=v.version,r.memory.textures++),ce){X.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer[ge]=[];for(let me=0;me<v.mipmaps.length;me++)X.__webglFramebuffer[ge][me]=i.createFramebuffer()}else X.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){X.__webglFramebuffer=[];for(let ge=0;ge<v.mipmaps.length;ge++)X.__webglFramebuffer[ge]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Le)for(let ge=0,me=ae.length;ge<me;ge++){const Xe=n.get(ae[ge]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),r.memory.textures++)}if(b.samples>0&&st(b)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ge=0;ge<ae.length;ge++){const me=ae[ge];X.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ge]);const Xe=o.convert(me.format,me.colorSpace),ue=o.convert(me.type),Re=E(me.internalFormat,Xe,ue,me.colorSpace,b.isXRRenderTarget===!0),Qe=De(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Re,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,X.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(X.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),be(i.TEXTURE_CUBE_MAP,v);for(let ge=0;ge<6;ge++)if(v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)le(X.__webglFramebuffer[ge][me],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,me);else le(X.__webglFramebuffer[ge],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ge=0,me=ae.length;ge<me;ge++){const Xe=ae[ge],ue=n.get(Xe);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),be(i.TEXTURE_2D,Xe),le(X.__webglFramebuffer,b,Xe,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),m(Xe)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ge=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,oe.__webglTexture),be(ge,v),v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)le(X.__webglFramebuffer[me],b,v,i.COLOR_ATTACHMENT0,ge,me);else le(X.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,ge,0);m(v)&&f(ge),t.unbindTexture()}b.depthBuffer&&Ke(b)}function P(b){const v=b.textures;for(let X=0,oe=v.length;X<oe;X++){const ae=v[X];if(m(ae)){const ce=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Le=n.get(ae).__webglTexture;t.bindTexture(ce,Le),f(ce),t.unbindTexture()}}}const it=[],et=[];function Mt(b){if(b.samples>0){if(st(b)===!1){const v=b.textures,X=b.width,oe=b.height;let ae=i.COLOR_BUFFER_BIT;const ce=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(b),ge=v.length>1;if(ge)for(let me=0;me<v.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let me=0;me<v.length;me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[me]);const Xe=n.get(v[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,X,oe,0,0,X,oe,ae,i.NEAREST),c===!0&&(it.length=0,et.length=0,it.push(i.COLOR_ATTACHMENT0+me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(it.push(ce),et.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let me=0;me<v.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Le.__webglColorRenderbuffer[me]);const Xe=n.get(v[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function De(b){return Math.min(s.maxSamples,b.samples)}function st(b){const v=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ze(b){const v=r.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function We(b,v){const X=b.colorSpace,oe=b.format,ae=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||X!==ri&&X!==qi&&(gt.getTransfer(X)===Et?(oe!==di||ae!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),v}function bt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=I,this.setTexture2D=ie,this.setTexture2DArray=ne,this.setTexture3D=Q,this.setTextureCube=se,this.rebindTextures=Ge,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=le,this.useMultisampledRTT=st}function xM(i,e){function t(n,s=qi){let o;const r=gt.getTransfer(s);if(n===Ji)return i.UNSIGNED_BYTE;if(n===Ed)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ad)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hg)return i.BYTE;if(n===kg)return i.SHORT;if(n===Zr)return i.UNSIGNED_SHORT;if(n===Td)return i.INT;if(n===mo)return i.UNSIGNED_INT;if(n===Ri)return i.FLOAT;if(n===er)return i.HALF_FLOAT;if(n===Wg)return i.ALPHA;if(n===Xg)return i.RGB;if(n===di)return i.RGBA;if(n===qg)return i.LUMINANCE;if(n===Yg)return i.LUMINANCE_ALPHA;if(n===io)return i.DEPTH_COMPONENT;if(n===_o)return i.DEPTH_STENCIL;if(n===jg)return i.RED;if(n===Nd)return i.RED_INTEGER;if(n===$g)return i.RG;if(n===wd)return i.RG_INTEGER;if(n===bd)return i.RGBA_INTEGER;if(n===Ba||n===Ha||n===ka||n===Ga)if(r===Et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ba)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ba)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ha)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cu||n===lu||n===uu||n===hu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===cu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===du||n===fu||n===pu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===du||n===fu)return r===Et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===pu)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mu||n===gu||n===_u||n===xu||n===vu||n===yu||n===Mu||n===Su||n===Tu||n===Eu||n===Au||n===Nu||n===wu||n===bu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===mu)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gu)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_u)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xu)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vu)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yu)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mu)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Su)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tu)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eu)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Au)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nu)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wu)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bu)return r===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===Ru||n===Cu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Wa)return r===Et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ru)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kg||n===Lu||n===Pu||n===Iu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Wa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Lu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Iu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===go?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class vM extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hr extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yM={type:"move"};class mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const MM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class TM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new dn,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new es({vertexShader:MM,fragmentShader:SM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gt(new _a(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class EM extends Di{constructor(e,t){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const x=new TM,m=t.getContextAttributes();let f=null,E=null;const y=[],A=[],V=new Te;let R=null;const N=new Mn;N.layers.enable(1),N.viewport=new at;const F=new Mn;F.layers.enable(2),F.viewport=new at;const T=[N,F],S=new vM;S.layers.enable(1),S.layers.enable(2);let I=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let le=y[ee];return le===void 0&&(le=new mc,y[ee]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ee){let le=y[ee];return le===void 0&&(le=new mc,y[ee]=le),le.getGripSpace()},this.getHand=function(ee){let le=y[ee];return le===void 0&&(le=new mc,y[ee]=le),le.getHandSpace()};function q(ee){const le=A.indexOf(ee.inputSource);if(le===-1)return;const Ne=y[le];Ne!==void 0&&(Ne.update(ee.inputSource,ee.frame,l||r),Ne.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ie(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",ne);for(let ee=0;ee<y.length;ee++){const le=A[ee];le!==null&&(A[ee]=null,y[ee].disconnect(le))}I=null,Z=null,x.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,E=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(V),s.renderState.layers===void 0){const le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ss(p.framebufferWidth,p.framebufferHeight,{format:di,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,Ne=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?_o:io,Ne=m.stencil?go:mo);const Ke={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:o};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Ss(d.textureWidth,d.textureHeight,{format:di,type:Ji,depthTexture:new ir(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function ne(ee){for(let le=0;le<ee.removed.length;le++){const Ne=ee.removed[le],xe=A.indexOf(Ne);xe>=0&&(A[xe]=null,y[xe].disconnect(Ne))}for(let le=0;le<ee.added.length;le++){const Ne=ee.added[le];let xe=A.indexOf(Ne);if(xe===-1){for(let Ge=0;Ge<y.length;Ge++)if(Ge>=A.length){A.push(Ne),xe=Ge;break}else if(A[Ge]===null){A[Ge]=Ne,xe=Ge;break}if(xe===-1)break}const Ke=y[xe];Ke&&Ke.connect(Ne)}}const Q=new D,se=new D;function J(ee,le,Ne){Q.setFromMatrixPosition(le.matrixWorld),se.setFromMatrixPosition(Ne.matrixWorld);const xe=Q.distanceTo(se),Ke=le.projectionMatrix.elements,Ge=Ne.projectionMatrix.elements,nt=Ke[14]/(Ke[10]-1),P=Ke[14]/(Ke[10]+1),it=(Ke[9]+1)/Ke[5],et=(Ke[9]-1)/Ke[5],Mt=(Ke[8]-1)/Ke[0],De=(Ge[8]+1)/Ge[0],st=nt*Mt,Ze=nt*De,We=xe/(-Mt+De),bt=We*-Mt;le.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(bt),ee.translateZ(We),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const b=nt+We,v=P+We,X=st-bt,oe=Ze+(xe-bt),ae=it*P/v*b,ce=et*P/v*b;ee.projectionMatrix.makePerspective(X,oe,ae,ce,b,v),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function Me(ee,le){le===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(le.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;x.texture!==null&&(ee.near=x.depthNear,ee.far=x.depthFar),S.near=F.near=N.near=ee.near,S.far=F.far=N.far=ee.far,(I!==S.near||Z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,Z=S.far,N.near=I,N.far=Z,F.near=I,F.far=Z,N.updateProjectionMatrix(),F.updateProjectionMatrix(),ee.updateProjectionMatrix());const le=ee.parent,Ne=S.cameras;Me(S,le);for(let xe=0;xe<Ne.length;xe++)Me(Ne[xe],le);Ne.length===2?J(S,N,F):S.projectionMatrix.copy(N.projectionMatrix),Ae(ee,S,le)};function Ae(ee,le,Ne){Ne===null?ee.matrix.copy(le.matrixWorld):(ee.matrix.copy(Ne.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(le.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=vo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(ee){c=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let be=null;function tt(ee,le){if(u=le.getViewerPose(l||r),g=le,u!==null){const Ne=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let xe=!1;Ne.length!==S.cameras.length&&(S.cameras.length=0,xe=!0);for(let Ge=0;Ge<Ne.length;Ge++){const nt=Ne[Ge];let P=null;if(p!==null)P=p.getViewport(nt);else{const et=h.getViewSubImage(d,nt);P=et.viewport,Ge===0&&(e.setRenderTargetTextures(E,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(E))}let it=T[Ge];it===void 0&&(it=new Mn,it.layers.enable(Ge),it.viewport=new at,T[Ge]=it),it.matrix.fromArray(nt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(nt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(P.x,P.y,P.width,P.height),Ge===0&&(S.matrix.copy(it.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),xe===!0&&S.cameras.push(it)}const Ke=s.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")){const Ge=h.getDepthInformation(Ne[0]);Ge&&Ge.isValid&&Ge.texture&&x.init(e,Ge,s.renderState)}}for(let Ne=0;Ne<y.length;Ne++){const xe=A[Ne],Ke=y[Ne];xe!==null&&Ke!==void 0&&Ke.update(xe,le,l||r)}be&&be(ee,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const ct=new kd;ct.setAnimationLoop(tt),this.setAnimationLoop=function(ee){be=ee},this.dispose=function(){}}}const ds=new kn,AM=new At;function NM(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,zd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,y,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),h(m,f)):f.isMeshPhongMaterial?(o(m,f),u(m,f)):f.isMeshStandardMaterial?(o(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,A)):f.isMeshMatcapMaterial?(o(m,f),g(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),x(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,E,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===vn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===vn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),y=E.envMap,A=E.envMapRotation;y&&(m.envMap.value=y,ds.copy(A),ds.x*=-1,ds.y*=-1,ds.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(AM.makeRotationFromEuler(ds)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===vn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wM(i,e,t,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const A=y.program;n.uniformBlockBinding(E,A)}function l(E,y){let A=s[E.id];A===void 0&&(g(E),A=u(E),s[E.id]=A,E.addEventListener("dispose",m));const V=y.program;n.updateUBOMapping(E,V);const R=e.render.frame;o[E.id]!==R&&(d(E),o[E.id]=R)}function u(E){const y=h();E.__bindingPointIndex=y;const A=i.createBuffer(),V=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,V,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,A),A}function h(){for(let E=0;E<a;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=s[E.id],A=E.uniforms,V=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,N=A.length;R<N;R++){const F=Array.isArray(A[R])?A[R]:[A[R]];for(let T=0,S=F.length;T<S;T++){const I=F[T];if(p(I,R,T,V)===!0){const Z=I.__offset,q=Array.isArray(I.value)?I.value:[I.value];let ie=0;for(let ne=0;ne<q.length;ne++){const Q=q[ne],se=x(Q);typeof Q=="number"||typeof Q=="boolean"?(I.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,Z+ie,I.__data)):Q.isMatrix3?(I.__data[0]=Q.elements[0],I.__data[1]=Q.elements[1],I.__data[2]=Q.elements[2],I.__data[3]=0,I.__data[4]=Q.elements[3],I.__data[5]=Q.elements[4],I.__data[6]=Q.elements[5],I.__data[7]=0,I.__data[8]=Q.elements[6],I.__data[9]=Q.elements[7],I.__data[10]=Q.elements[8],I.__data[11]=0):(Q.toArray(I.__data,ie),ie+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,y,A,V){const R=E.value,N=y+"_"+A;if(V[N]===void 0)return typeof R=="number"||typeof R=="boolean"?V[N]=R:V[N]=R.clone(),!0;{const F=V[N];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return V[N]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function g(E){const y=E.uniforms;let A=0;const V=16;for(let N=0,F=y.length;N<F;N++){const T=Array.isArray(y[N])?y[N]:[y[N]];for(let S=0,I=T.length;S<I;S++){const Z=T[S],q=Array.isArray(Z.value)?Z.value:[Z.value];for(let ie=0,ne=q.length;ie<ne;ie++){const Q=q[ie],se=x(Q),J=A%V;J!==0&&V-J<se.boundary&&(A+=V-J),Z.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=A,A+=se.storage}}}const R=A%V;return R>0&&(A+=V-R),E.__size=A,E.__cache={},this}function x(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const A=r.indexOf(y.__bindingPointIndex);r.splice(A,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);r=[],s={},o={}}return{bind:c,update:l,dispose:f}}class bM{constructor(e={}){const{canvas:t=M_(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=In,this.toneMappingExposure=1;const y=this;let A=!1,V=0,R=0,N=null,F=-1,T=null;const S=new at,I=new at;let Z=null;const q=new Fe(0);let ie=0,ne=t.width,Q=t.height,se=1,J=null,Me=null;const Ae=new at(0,0,ne,Q),be=new at(0,0,ne,Q);let tt=!1;const ct=new bl;let ee=!1,le=!1;const Ne=new At,xe=new D,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function nt(){return N===null?se:1}let P=n;function it(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ml}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",j,!1),P===null){const O="webgl2";if(P=it(O,M),P===null)throw it(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let et,Mt,De,st,Ze,We,bt,b,v,X,oe,ae,ce,Le,ge,me,Xe,ue,Re,Qe,Ve,ve,qe,Ye;function Lt(){et=new Ov(P),et.init(),ve=new xM(P,et),Mt=new Cv(P,et,e,ve),De=new gM(P),st=new zv(P),Ze=new nM,We=new _M(P,et,De,Ze,Mt,ve,st),bt=new Pv(y),b=new Uv(y),v=new q_(P),qe=new bv(P,v),X=new Fv(P,v,st,qe),oe=new Hv(P,X,v,st),Re=new Bv(P,Mt,We),me=new Lv(Ze),ae=new tM(y,bt,b,et,Mt,qe,me),ce=new NM(y,Ze),Le=new sM,ge=new uM(et),ue=new wv(y,bt,b,De,oe,d,c),Xe=new mM(y,oe,Mt),Ye=new wM(P,st,Mt,De),Qe=new Rv(P,et,st),Ve=new Vv(P,et,st),st.programs=ae.programs,y.capabilities=Mt,y.extensions=et,y.properties=Ze,y.renderLists=Le,y.shadowMap=Xe,y.state=De,y.info=st}Lt();const _=new EM(y,P);this.xr=_,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=et.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=et.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(M){M!==void 0&&(se=M,this.setSize(ne,Q,!1))},this.getSize=function(M){return M.set(ne,Q)},this.setSize=function(M,O,G=!0){if(_.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=M,Q=O,t.width=Math.floor(M*se),t.height=Math.floor(O*se),G===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(ne*se,Q*se).floor()},this.setDrawingBufferSize=function(M,O,G){ne=M,Q=O,se=G,t.width=Math.floor(M*G),t.height=Math.floor(O*G),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(Ae)},this.setViewport=function(M,O,G,W){M.isVector4?Ae.set(M.x,M.y,M.z,M.w):Ae.set(M,O,G,W),De.viewport(S.copy(Ae).multiplyScalar(se).round())},this.getScissor=function(M){return M.copy(be)},this.setScissor=function(M,O,G,W){M.isVector4?be.set(M.x,M.y,M.z,M.w):be.set(M,O,G,W),De.scissor(I.copy(be).multiplyScalar(se).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){De.setScissorTest(tt=M)},this.setOpaqueSort=function(M){J=M},this.setTransparentSort=function(M){Me=M},this.getClearColor=function(M){return M.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(M=!0,O=!0,G=!0){let W=0;if(M){let B=!1;if(N!==null){const de=N.texture.format;B=de===bd||de===wd||de===Nd}if(B){const de=N.texture.type,ye=de===Ji||de===mo||de===Zr||de===go||de===Ed||de===Ad,we=ue.getClearColor(),Ce=ue.getClearAlpha(),ze=we.r,Be=we.g,Oe=we.b;ye?(p[0]=ze,p[1]=Be,p[2]=Oe,p[3]=Ce,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=ze,g[1]=Be,g[2]=Oe,g[3]=Ce,P.clearBufferiv(P.COLOR,0,g))}else W|=P.COLOR_BUFFER_BIT}O&&(W|=P.DEPTH_BUFFER_BIT),G&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",j,!1),Le.dispose(),ge.dispose(),Ze.dispose(),bt.dispose(),b.dispose(),oe.dispose(),qe.dispose(),Ye.dispose(),ae.dispose(),_.dispose(),_.removeEventListener("sessionstart",zt),_.removeEventListener("sessionend",Bt),An.stop()};function Y(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=st.autoReset,O=Xe.enabled,G=Xe.autoUpdate,W=Xe.needsUpdate,B=Xe.type;Lt(),st.autoReset=M,Xe.enabled=O,Xe.autoUpdate=G,Xe.needsUpdate=W,Xe.type=B}function j(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function re(M){const O=M.target;O.removeEventListener("dispose",re),Pe(O)}function Pe(M){ke(M),Ze.remove(M)}function ke(M){const O=Ze.get(M).programs;O!==void 0&&(O.forEach(function(G){ae.releaseProgram(G)}),M.isShaderMaterial&&ae.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,G,W,B,de){O===null&&(O=Ke);const ye=B.isMesh&&B.matrixWorld.determinant()<0,we=sg(M,O,G,W,B);De.setMaterial(W,ye);let Ce=G.index,ze=1;if(W.wireframe===!0){if(Ce=X.getWireframeAttribute(G),Ce===void 0)return;ze=2}const Be=G.drawRange,Oe=G.attributes.position;let dt=Be.start*ze,It=(Be.start+Be.count)*ze;de!==null&&(dt=Math.max(dt,de.start*ze),It=Math.min(It,(de.start+de.count)*ze)),Ce!==null?(dt=Math.max(dt,0),It=Math.min(It,Ce.count)):Oe!=null&&(dt=Math.max(dt,0),It=Math.min(It,Oe.count));const Dt=It-dt;if(Dt<0||Dt===1/0)return;qe.setup(B,W,we,G,Ce);let wn,pt=Qe;if(Ce!==null&&(wn=v.get(Ce),pt=Ve,pt.setIndex(wn)),B.isMesh)W.wireframe===!0?(De.setLineWidth(W.wireframeLinewidth*nt()),pt.setMode(P.LINES)):pt.setMode(P.TRIANGLES);else if(B.isLine){let Ie=W.linewidth;Ie===void 0&&(Ie=1),De.setLineWidth(Ie*nt()),B.isLineSegments?pt.setMode(P.LINES):B.isLineLoop?pt.setMode(P.LINE_LOOP):pt.setMode(P.LINE_STRIP)}else B.isPoints?pt.setMode(P.POINTS):B.isSprite&&pt.setMode(P.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?pt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):pt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)pt.renderInstances(dt,Dt,B.count);else if(G.isInstancedBufferGeometry){const Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,mn=Math.min(G.instanceCount,Ie);pt.renderInstances(dt,Dt,mn)}else pt.render(dt,Dt)};function Pt(M,O,G){M.transparent===!0&&M.side===bi&&M.forceSinglePass===!1?(M.side=vn,M.needsUpdate=!0,_r(M,O,G),M.side=Zi,M.needsUpdate=!0,_r(M,O,G),M.side=bi):_r(M,O,G)}this.compile=function(M,O,G=null){G===null&&(G=M),m=ge.get(G),m.init(O),E.push(m),G.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),M!==G&&M.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const W=new Set;return M.traverse(function(B){const de=B.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){const we=de[ye];Pt(we,G,B),W.add(we)}else Pt(de,G,B),W.add(de)}),E.pop(),m=null,W},this.compileAsync=function(M,O,G=null){const W=this.compile(M,O,G);return new Promise(B=>{function de(){if(W.forEach(function(ye){Ze.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){B(M);return}setTimeout(de,10)}et.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Vt=null;function lt(M){Vt&&Vt(M)}function zt(){An.stop()}function Bt(){An.start()}const An=new kd;An.setAnimationLoop(lt),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(M){Vt=M,_.setAnimationLoop(M),M===null?An.stop():An.start()},_.addEventListener("sessionstart",zt),_.addEventListener("sessionend",Bt),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),_.enabled===!0&&_.isPresenting===!0&&(_.cameraAutoUpdate===!0&&_.updateCamera(O),O=_.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,O,N),m=ge.get(M,E.length),m.init(O),E.push(m),Ne.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ct.setFromProjectionMatrix(Ne),le=this.localClippingEnabled,ee=me.init(this.clippingPlanes,le),x=Le.get(M,f.length),x.init(),f.push(x),_.enabled===!0&&_.isPresenting===!0){const de=y.xr.getDepthSensingMesh();de!==null&&Nn(de,O,-1/0,y.sortObjects)}Nn(M,O,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(J,Me),Ge=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,Ge&&ue.addToRenderList(x,M),this.info.render.frame++,ee===!0&&me.beginShadows();const G=m.state.shadowsArray;Xe.render(G,M,O),ee===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=x.opaque,B=x.transmissive;if(m.setupLights(),O.isArrayCamera){const de=O.cameras;if(B.length>0)for(let ye=0,we=de.length;ye<we;ye++){const Ce=de[ye];ss(W,B,M,Ce)}Ge&&ue.render(M);for(let ye=0,we=de.length;ye<we;ye++){const Ce=de[ye];Fi(x,M,Ce,Ce.viewport)}}else B.length>0&&ss(W,B,M,O),Ge&&ue.render(M),Fi(x,M,O);N!==null&&(We.updateMultisampleRenderTarget(N),We.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(y,M,O),qe.resetDefaultState(),F=-1,T=null,E.pop(),E.length>0?(m=E[E.length-1],ee===!0&&me.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Nn(M,O,G,W){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ct.intersectsSprite(M)){W&&xe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ne);const ye=oe.update(M),we=M.material;we.visible&&x.push(M,ye,we,G,xe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ct.intersectsObject(M))){const ye=oe.update(M),we=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),xe.copy(M.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),xe.copy(ye.boundingSphere.center)),xe.applyMatrix4(M.matrixWorld).applyMatrix4(Ne)),Array.isArray(we)){const Ce=ye.groups;for(let ze=0,Be=Ce.length;ze<Be;ze++){const Oe=Ce[ze],dt=we[Oe.materialIndex];dt&&dt.visible&&x.push(M,ye,dt,G,xe.z,Oe)}}else we.visible&&x.push(M,ye,we,G,xe.z,null)}}const de=M.children;for(let ye=0,we=de.length;ye<we;ye++)Nn(de[ye],O,G,W)}function Fi(M,O,G,W){const B=M.opaque,de=M.transmissive,ye=M.transparent;m.setupLightsView(G),ee===!0&&me.setGlobalState(y.clippingPlanes,G),W&&De.viewport(S.copy(W)),B.length>0&&os(B,O,G),de.length>0&&os(de,O,G),ye.length>0&&os(ye,O,G),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function ss(M,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Ss(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?er:Ji,minFilter:Yi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const de=m.state.transmissionRenderTarget[W.id],ye=W.viewport||S;de.setSize(ye.z,ye.w);const we=y.getRenderTarget();y.setRenderTarget(de),y.getClearColor(q),ie=y.getClearAlpha(),ie<1&&y.setClearColor(16777215,.5),Ge?ue.render(G):y.clear();const Ce=y.toneMapping;y.toneMapping=In;const ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),ee===!0&&me.setGlobalState(y.clippingPlanes,W),os(M,G,W),We.updateMultisampleRenderTarget(de),We.updateRenderTargetMipmap(de),et.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Oe=0,dt=O.length;Oe<dt;Oe++){const It=O[Oe],Dt=It.object,wn=It.geometry,pt=It.material,Ie=It.group;if(pt.side===bi&&Dt.layers.test(W.layers)){const mn=pt.side;pt.side=vn,pt.needsUpdate=!0,eu(Dt,G,W,wn,pt,Ie),pt.side=mn,pt.needsUpdate=!0,Be=!0}}Be===!0&&(We.updateMultisampleRenderTarget(de),We.updateRenderTargetMipmap(de))}y.setRenderTarget(we),y.setClearColor(q,ie),ze!==void 0&&(W.viewport=ze),y.toneMapping=Ce}function os(M,O,G){const W=O.isScene===!0?O.overrideMaterial:null;for(let B=0,de=M.length;B<de;B++){const ye=M[B],we=ye.object,Ce=ye.geometry,ze=W===null?ye.material:W,Be=ye.group;we.layers.test(G.layers)&&eu(we,O,G,Ce,ze,Be)}}function eu(M,O,G,W,B,de){M.onBeforeRender(y,O,G,W,B,de),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(y,O,G,W,M,de),B.transparent===!0&&B.side===bi&&B.forceSinglePass===!1?(B.side=vn,B.needsUpdate=!0,y.renderBufferDirect(G,O,W,B,M,de),B.side=Zi,B.needsUpdate=!0,y.renderBufferDirect(G,O,W,B,M,de),B.side=bi):y.renderBufferDirect(G,O,W,B,M,de),M.onAfterRender(y,O,G,W,B,de)}function _r(M,O,G){O.isScene!==!0&&(O=Ke);const W=Ze.get(M),B=m.state.lights,de=m.state.shadowsArray,ye=B.state.version,we=ae.getParameters(M,B.state,de,O,G),Ce=ae.getProgramCacheKey(we);let ze=W.programs;W.environment=M.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(M.isMeshStandardMaterial?b:bt).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,ze===void 0&&(M.addEventListener("dispose",re),ze=new Map,W.programs=ze);let Be=ze.get(Ce);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===ye)return nu(M,we),Be}else we.uniforms=ae.getUniforms(M),M.onBuild(G,we,y),M.onBeforeCompile(we,y),Be=ae.acquireProgram(we,Ce),ze.set(Ce,Be),W.uniforms=we.uniforms;const Oe=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=me.uniform),nu(M,we),W.needsLights=rg(M),W.lightsStateVersion=ye,W.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMap.value=B.state.directionalShadowMap,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotShadowMap.value=B.state.spotShadowMap,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMap.value=B.state.pointShadowMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function tu(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=qr.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function nu(M,O){const G=Ze.get(M);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function sg(M,O,G,W,B){O.isScene!==!0&&(O=Ke),We.resetTextureUnits();const de=O.fog,ye=W.isMeshStandardMaterial?O.environment:null,we=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ri,Ce=(W.isMeshStandardMaterial?b:bt).get(W.envMap||ye),ze=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Oe=!!G.morphAttributes.position,dt=!!G.morphAttributes.normal,It=!!G.morphAttributes.color;let Dt=In;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Dt=y.toneMapping);const wn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=wn!==void 0?wn.length:0,Ie=Ze.get(W),mn=m.state.lights;if(ee===!0&&(le===!0||M!==T)){const On=M===T&&W.id===F;me.setState(W,M,On)}let xt=!1;W.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==mn.state.version||Ie.outputColorSpace!==we||B.isBatchedMesh&&Ie.batching===!1||!B.isBatchedMesh&&Ie.batching===!0||B.isBatchedMesh&&Ie.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ie.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ie.instancing===!1||!B.isInstancedMesh&&Ie.instancing===!0||B.isSkinnedMesh&&Ie.skinning===!1||!B.isSkinnedMesh&&Ie.skinning===!0||B.isInstancedMesh&&Ie.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ie.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ie.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ie.instancingMorph===!1&&B.morphTexture!==null||Ie.envMap!==Ce||W.fog===!0&&Ie.fog!==de||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==me.numPlanes||Ie.numIntersection!==me.numIntersection)||Ie.vertexAlphas!==ze||Ie.vertexTangents!==Be||Ie.morphTargets!==Oe||Ie.morphNormals!==dt||Ie.morphColors!==It||Ie.toneMapping!==Dt||Ie.morphTargetsCount!==pt)&&(xt=!0):(xt=!0,Ie.__version=W.version);let vi=Ie.currentProgram;xt===!0&&(vi=_r(W,O,B));let xr=!1,rs=!1,Oa=!1;const Kt=vi.getUniforms(),Vi=Ie.uniforms;if(De.useProgram(vi.program)&&(xr=!0,rs=!0,Oa=!0),W.id!==F&&(F=W.id,rs=!0),xr||T!==M){Kt.setValue(P,"projectionMatrix",M.projectionMatrix),Kt.setValue(P,"viewMatrix",M.matrixWorldInverse);const On=Kt.map.cameraPosition;On!==void 0&&On.setValue(P,xe.setFromMatrixPosition(M.matrixWorld)),Mt.logarithmicDepthBuffer&&Kt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Kt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),T!==M&&(T=M,rs=!0,Oa=!0)}if(B.isSkinnedMesh){Kt.setOptional(P,B,"bindMatrix"),Kt.setOptional(P,B,"bindMatrixInverse");const On=B.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),Kt.setValue(P,"boneTexture",On.boneTexture,We))}B.isBatchedMesh&&(Kt.setOptional(P,B,"batchingTexture"),Kt.setValue(P,"batchingTexture",B._matricesTexture,We),Kt.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&Kt.setValue(P,"batchingColorTexture",B._colorsTexture,We));const Fa=G.morphAttributes;if((Fa.position!==void 0||Fa.normal!==void 0||Fa.color!==void 0)&&Re.update(B,G,vi),(rs||Ie.receiveShadow!==B.receiveShadow)&&(Ie.receiveShadow=B.receiveShadow,Kt.setValue(P,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Vi.envMap.value=Ce,Vi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Vi.envMapIntensity.value=O.environmentIntensity),rs&&(Kt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&og(Vi,Oa),de&&W.fog===!0&&ce.refreshFogUniforms(Vi,de),ce.refreshMaterialUniforms(Vi,W,se,Q,m.state.transmissionRenderTarget[M.id]),qr.upload(P,tu(Ie),Vi,We)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(qr.upload(P,tu(Ie),Vi,We),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Kt.setValue(P,"center",B.center),Kt.setValue(P,"modelViewMatrix",B.modelViewMatrix),Kt.setValue(P,"normalMatrix",B.normalMatrix),Kt.setValue(P,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const On=W.uniformsGroups;for(let Va=0,ag=On.length;Va<ag;Va++){const iu=On[Va];Ye.update(iu,vi),Ye.bind(iu,vi)}}return vi}function og(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function rg(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,O,G){Ze.get(M.texture).__webglTexture=O,Ze.get(M.depthTexture).__webglTexture=G;const W=Ze.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,O){const G=Ze.get(M);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,G=0){N=M,V=O,R=G;let W=!0,B=null,de=!1,ye=!1;if(M){const Ce=Ze.get(M);Ce.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(P.FRAMEBUFFER,null),W=!1):Ce.__webglFramebuffer===void 0?We.setupRenderTarget(M):Ce.__hasExternalTextures&&We.rebindTextures(M,Ze.get(M.texture).__webglTexture,Ze.get(M.depthTexture).__webglTexture);const ze=M.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ye=!0);const Be=Ze.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?B=Be[O][G]:B=Be[O],de=!0):M.samples>0&&We.useMultisampledRTT(M)===!1?B=Ze.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[G]:B=Be,S.copy(M.viewport),I.copy(M.scissor),Z=M.scissorTest}else S.copy(Ae).multiplyScalar(se).floor(),I.copy(be).multiplyScalar(se).floor(),Z=tt;if(De.bindFramebuffer(P.FRAMEBUFFER,B)&&W&&De.drawBuffers(M,B),De.viewport(S),De.scissor(I),De.setScissorTest(Z),de){const Ce=Ze.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ce.__webglTexture,G)}else if(ye){const Ce=Ze.get(M.texture),ze=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ce.__webglTexture,G||0,ze)}F=-1},this.readRenderTargetPixels=function(M,O,G,W,B,de,ye){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ze.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){De.bindFramebuffer(P.FRAMEBUFFER,we);try{const Ce=M.texture,ze=Ce.format,Be=Ce.type;if(!Mt.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-W&&G>=0&&G<=M.height-B&&P.readPixels(O,G,W,B,ve.convert(ze),ve.convert(Be),de)}finally{const Ce=N!==null?Ze.get(N).__webglFramebuffer:null;De.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,O,G,W,B,de,ye){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ze.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){De.bindFramebuffer(P.FRAMEBUFFER,we);try{const Ce=M.texture,ze=Ce.format,Be=Ce.type;if(!Mt.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=M.width-W&&G>=0&&G<=M.height-B){const Oe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Oe),P.bufferData(P.PIXEL_PACK_BUFFER,de.byteLength,P.STREAM_READ),P.readPixels(O,G,W,B,ve.convert(ze),ve.convert(Be),0),P.flush();const dt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await S_(P,dt,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Oe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,de)}finally{P.deleteBuffer(Oe),P.deleteSync(dt)}return de}}finally{const Ce=N!==null?Ze.get(N).__webglFramebuffer:null;De.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(M,O=null,G=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1]);const W=Math.pow(2,-G),B=Math.floor(M.image.width*W),de=Math.floor(M.image.height*W),ye=O!==null?O.x:0,we=O!==null?O.y:0;We.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,ye,we,B,de),De.unbindTexture()},this.copyTextureToTexture=function(M,O,G=null,W=null,B=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1],O=arguments[2],B=arguments[3]||0,G=null);let de,ye,we,Ce,ze,Be;G!==null?(de=G.max.x-G.min.x,ye=G.max.y-G.min.y,we=G.min.x,Ce=G.min.y):(de=M.image.width,ye=M.image.height,we=0,Ce=0),W!==null?(ze=W.x,Be=W.y):(ze=0,Be=0);const Oe=ve.convert(O.format),dt=ve.convert(O.type);We.setTexture2D(O,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const It=P.getParameter(P.UNPACK_ROW_LENGTH),Dt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),wn=P.getParameter(P.UNPACK_SKIP_PIXELS),pt=P.getParameter(P.UNPACK_SKIP_ROWS),Ie=P.getParameter(P.UNPACK_SKIP_IMAGES),mn=M.isCompressedTexture?M.mipmaps[B]:M.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,mn.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mn.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,we),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ce),M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,B,ze,Be,de,ye,Oe,dt,mn.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,B,ze,Be,mn.width,mn.height,Oe,mn.data):P.texSubImage2D(P.TEXTURE_2D,B,ze,Be,Oe,dt,mn),P.pixelStorei(P.UNPACK_ROW_LENGTH,It),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Dt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,wn),P.pixelStorei(P.UNPACK_SKIP_ROWS,pt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ie),B===0&&O.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(M,O,G=null,W=null,B=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,M=arguments[2],O=arguments[3],B=arguments[4]||0);let de,ye,we,Ce,ze,Be,Oe,dt,It;const Dt=M.isCompressedTexture?M.mipmaps[B]:M.image;G!==null?(de=G.max.x-G.min.x,ye=G.max.y-G.min.y,we=G.max.z-G.min.z,Ce=G.min.x,ze=G.min.y,Be=G.min.z):(de=Dt.width,ye=Dt.height,we=Dt.depth,Ce=0,ze=0,Be=0),W!==null?(Oe=W.x,dt=W.y,It=W.z):(Oe=0,dt=0,It=0);const wn=ve.convert(O.format),pt=ve.convert(O.type);let Ie;if(O.isData3DTexture)We.setTexture3D(O,0),Ie=P.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)We.setTexture2DArray(O,0),Ie=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const mn=P.getParameter(P.UNPACK_ROW_LENGTH),xt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),vi=P.getParameter(P.UNPACK_SKIP_PIXELS),xr=P.getParameter(P.UNPACK_SKIP_ROWS),rs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ce),P.pixelStorei(P.UNPACK_SKIP_ROWS,ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Be),M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Ie,B,Oe,dt,It,de,ye,we,wn,pt,Dt.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Ie,B,Oe,dt,It,de,ye,we,wn,Dt.data):P.texSubImage3D(Ie,B,Oe,dt,It,de,ye,we,wn,pt,Dt),P.pixelStorei(P.UNPACK_ROW_LENGTH,mn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vi),P.pixelStorei(P.UNPACK_SKIP_ROWS,xr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,rs),B===0&&O.generateMipmaps&&P.generateMipmap(Ie),De.unbindTexture()},this.initRenderTarget=function(M){Ze.get(M).__webglFramebuffer===void 0&&We.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?We.setTextureCube(M,0):M.isData3DTexture?We.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?We.setTexture2DArray(M,0):We.setTexture2D(M,0),De.unbindTexture()},this.resetState=function(){V=0,R=0,N=null,De.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sl?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===ga?"display-p3":"srgb"}}class RM extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ta,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return El("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new D;class Ll{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),o=mt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new Bn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ll(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class CM extends fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class LM extends Bn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class $d extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class Kd extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Zd extends dn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=hn,this.minFilter=hn,this.generateMipmaps=!1,this.needsUpdate=!0}}class Gn extends Ui{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const u=[],h=new D,d=new D,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const E=[],y=f/n;let A=0;f===0&&r===0?A=.5/t:f===n&&c===Math.PI&&(A=-.5/t);for(let V=0;V<=t;V++){const R=V/t;h.x=-e*Math.cos(s+R*o)*Math.sin(r+y*a),h.y=e*Math.cos(r+y*a),h.z=e*Math.sin(s+R*o)*Math.sin(r+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(R+A,1-y),E.push(l++)}u.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const y=u[f][E+1],A=u[f][E],V=u[f+1][E],R=u[f+1][E+1];(f!==0||r>0)&&p.push(y,A,R),(f!==n-1||c<Math.PI)&&p.push(A,V,R)}this.setIndex(p),this.setAttribute("position",new Hn(g,3)),this.setAttribute("normal",new Hn(x,3)),this.setAttribute("uv",new Hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class PM extends fn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Fe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Wn extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class IM extends Wn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class DM extends fn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class UM extends fn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class OM extends fn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class FM extends fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class VM extends fn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Fe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jd extends $d{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Eh={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class zM{constructor(e,t,n){const s=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,o===!1&&s.onStart!==void 0&&s.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const BM=new zM;class Pl{constructor(e){this.manager=e!==void 0?e:BM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";class HM extends Pl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,r=Eh.get(e);if(r!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(r),o.manager.itemEnd(e)},0),r;const a=Yo("img");function c(){u(),Eh.add(e,this),t&&t(this),o.manager.itemEnd(e)}function l(h){u(),s&&s(h),o.manager.itemError(e),o.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class Oi extends Pl{constructor(e){super(e)}load(e,t,n,s){const o=new dn,r=new HM(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){o.image=a,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}}class sr extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class kM extends sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const gc=new At,Ah=new D,Nh=new D;class Il{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bl,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ah),Nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nh),t.updateMatrixWorld(),gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class GM extends Il{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qd extends sr{constructor(e,t,n=0,s=Math.PI/3,o=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new GM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wh=new At,Vo=new D,_c=new D;class WM extends Il{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Vo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vo),_c.copy(n.position),_c.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_c),n.updateMatrixWorld(),s.makeTranslation(-Vo.x,-Vo.y,-Vo.z),wh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh)}}class va extends sr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new WM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class XM extends Il{constructor(){super(new Rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qM extends sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new XM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ef extends sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class YM extends jd{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class bh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);const Rh={type:"change"},xc={type:"start"},Ch={type:"end"},kr=new Dd,Lh=new Ni,jM=Math.cos(70*qo.DEG2RAD);class $M extends Di{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ps.ROTATE,MIDDLE:Ps.DOLLY,RIGHT:Ps.PAN},this.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(_){_.addEventListener("keydown",me),this._domElementKeyEvents=_},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",me),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Rh),n.update(),o=s.NONE},this.update=function(){const _=new D,Y=new Ts().setFromUnitVectors(e.up,new D(0,1,0)),H=Y.clone().invert(),j=new D,re=new Ts,Pe=new D,ke=2*Math.PI;return function(Vt=null){const lt=n.object.position;_.copy(lt).sub(n.target),_.applyQuaternion(Y),a.setFromVector3(_),n.autoRotate&&o===s.NONE&&Z(S(Vt)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let zt=n.minAzimuthAngle,Bt=n.maxAzimuthAngle;isFinite(zt)&&isFinite(Bt)&&(zt<-Math.PI?zt+=ke:zt>Math.PI&&(zt-=ke),Bt<-Math.PI?Bt+=ke:Bt>Math.PI&&(Bt-=ke),zt<=Bt?a.theta=Math.max(zt,Math.min(Bt,a.theta)):a.theta=a.theta>(zt+Bt)/2?Math.max(zt,a.theta):Math.min(Bt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let An=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)a.radius=Ae(a.radius);else{const Nn=a.radius;a.radius=Ae(a.radius*l),An=Nn!=a.radius}if(_.setFromSpherical(a),_.applyQuaternion(H),lt.copy(n.target).add(_),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&R){let Nn=null;if(n.object.isPerspectiveCamera){const Fi=_.length();Nn=Ae(Fi*l);const ss=Fi-Nn;n.object.position.addScaledVector(A,ss),n.object.updateMatrixWorld(),An=!!ss}else if(n.object.isOrthographicCamera){const Fi=new D(V.x,V.y,0);Fi.unproject(n.object);const ss=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),An=ss!==n.object.zoom;const os=new D(V.x,V.y,0);os.unproject(n.object),n.object.position.sub(os).add(Fi),n.object.updateMatrixWorld(),Nn=_.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Nn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Nn).add(n.object.position):(kr.origin.copy(n.object.position),kr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(kr.direction))<jM?e.lookAt(n.target):(Lh.setFromNormalAndCoplanarPoint(n.object.up,n.target),kr.intersectPlane(Lh,n.target))))}else if(n.object.isOrthographicCamera){const Nn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Nn!==n.object.zoom&&(n.object.updateProjectionMatrix(),An=!0)}return l=1,R=!1,An||j.distanceToSquared(n.object.position)>r||8*(1-re.dot(n.object.quaternion))>r||Pe.distanceToSquared(n.target)>r?(n.dispatchEvent(Rh),j.copy(n.object.position),re.copy(n.object.quaternion),Pe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Re),n.domElement.removeEventListener("pointerdown",bt),n.domElement.removeEventListener("pointercancel",v),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",v),n.domElement.getRootNode().removeEventListener("keydown",Le,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",me),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=s.NONE;const r=1e-6,a=new bh,c=new bh;let l=1;const u=new D,h=new Te,d=new Te,p=new Te,g=new Te,x=new Te,m=new Te,f=new Te,E=new Te,y=new Te,A=new D,V=new Te;let R=!1;const N=[],F={};let T=!1;function S(_){return _!==null?2*Math.PI/60*n.autoRotateSpeed*_:2*Math.PI/60/60*n.autoRotateSpeed}function I(_){const Y=Math.abs(_*.01);return Math.pow(.95,n.zoomSpeed*Y)}function Z(_){c.theta-=_}function q(_){c.phi-=_}const ie=function(){const _=new D;return function(H,j){_.setFromMatrixColumn(j,0),_.multiplyScalar(-H),u.add(_)}}(),ne=function(){const _=new D;return function(H,j){n.screenSpacePanning===!0?_.setFromMatrixColumn(j,1):(_.setFromMatrixColumn(j,0),_.crossVectors(n.object.up,_)),_.multiplyScalar(H),u.add(_)}}(),Q=function(){const _=new D;return function(H,j){const re=n.domElement;if(n.object.isPerspectiveCamera){const Pe=n.object.position;_.copy(Pe).sub(n.target);let ke=_.length();ke*=Math.tan(n.object.fov/2*Math.PI/180),ie(2*H*ke/re.clientHeight,n.object.matrix),ne(2*j*ke/re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ie(H*(n.object.right-n.object.left)/n.object.zoom/re.clientWidth,n.object.matrix),ne(j*(n.object.top-n.object.bottom)/n.object.zoom/re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function se(_){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(_){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=_:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Me(_,Y){if(!n.zoomToCursor)return;R=!0;const H=n.domElement.getBoundingClientRect(),j=_-H.left,re=Y-H.top,Pe=H.width,ke=H.height;V.x=j/Pe*2-1,V.y=-(re/ke)*2+1,A.set(V.x,V.y,1).unproject(n.object).sub(n.object.position).normalize()}function Ae(_){return Math.max(n.minDistance,Math.min(n.maxDistance,_))}function be(_){h.set(_.clientX,_.clientY)}function tt(_){Me(_.clientX,_.clientX),f.set(_.clientX,_.clientY)}function ct(_){g.set(_.clientX,_.clientY)}function ee(_){d.set(_.clientX,_.clientY),p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Y=n.domElement;Z(2*Math.PI*p.x/Y.clientHeight),q(2*Math.PI*p.y/Y.clientHeight),h.copy(d),n.update()}function le(_){E.set(_.clientX,_.clientY),y.subVectors(E,f),y.y>0?se(I(y.y)):y.y<0&&J(I(y.y)),f.copy(E),n.update()}function Ne(_){x.set(_.clientX,_.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),Q(m.x,m.y),g.copy(x),n.update()}function xe(_){Me(_.clientX,_.clientY),_.deltaY<0?J(I(_.deltaY)):_.deltaY>0&&se(I(_.deltaY)),n.update()}function Ke(_){let Y=!1;switch(_.code){case n.keys.UP:_.ctrlKey||_.metaKey||_.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:_.ctrlKey||_.metaKey||_.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:_.ctrlKey||_.metaKey||_.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:_.ctrlKey||_.metaKey||_.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(-n.keyPanSpeed,0),Y=!0;break}Y&&(_.preventDefault(),n.update())}function Ge(_){if(N.length===1)h.set(_.pageX,_.pageY);else{const Y=Ye(_),H=.5*(_.pageX+Y.x),j=.5*(_.pageY+Y.y);h.set(H,j)}}function nt(_){if(N.length===1)g.set(_.pageX,_.pageY);else{const Y=Ye(_),H=.5*(_.pageX+Y.x),j=.5*(_.pageY+Y.y);g.set(H,j)}}function P(_){const Y=Ye(_),H=_.pageX-Y.x,j=_.pageY-Y.y,re=Math.sqrt(H*H+j*j);f.set(0,re)}function it(_){n.enableZoom&&P(_),n.enablePan&&nt(_)}function et(_){n.enableZoom&&P(_),n.enableRotate&&Ge(_)}function Mt(_){if(N.length==1)d.set(_.pageX,_.pageY);else{const H=Ye(_),j=.5*(_.pageX+H.x),re=.5*(_.pageY+H.y);d.set(j,re)}p.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Y=n.domElement;Z(2*Math.PI*p.x/Y.clientHeight),q(2*Math.PI*p.y/Y.clientHeight),h.copy(d)}function De(_){if(N.length===1)x.set(_.pageX,_.pageY);else{const Y=Ye(_),H=.5*(_.pageX+Y.x),j=.5*(_.pageY+Y.y);x.set(H,j)}m.subVectors(x,g).multiplyScalar(n.panSpeed),Q(m.x,m.y),g.copy(x)}function st(_){const Y=Ye(_),H=_.pageX-Y.x,j=_.pageY-Y.y,re=Math.sqrt(H*H+j*j);E.set(0,re),y.set(0,Math.pow(E.y/f.y,n.zoomSpeed)),se(y.y),f.copy(E);const Pe=(_.pageX+Y.x)*.5,ke=(_.pageY+Y.y)*.5;Me(Pe,ke)}function Ze(_){n.enableZoom&&st(_),n.enablePan&&De(_)}function We(_){n.enableZoom&&st(_),n.enableRotate&&Mt(_)}function bt(_){n.enabled!==!1&&(N.length===0&&(n.domElement.setPointerCapture(_.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",v)),!ve(_)&&(Qe(_),_.pointerType==="touch"?Xe(_):X(_)))}function b(_){n.enabled!==!1&&(_.pointerType==="touch"?ue(_):oe(_))}function v(_){switch(Ve(_),N.length){case 0:n.domElement.releasePointerCapture(_.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",v),n.dispatchEvent(Ch),o=s.NONE;break;case 1:const Y=N[0],H=F[Y];Xe({pointerId:Y,pageX:H.x,pageY:H.y});break}}function X(_){let Y;switch(_.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case Ps.DOLLY:if(n.enableZoom===!1)return;tt(_),o=s.DOLLY;break;case Ps.ROTATE:if(_.ctrlKey||_.metaKey||_.shiftKey){if(n.enablePan===!1)return;ct(_),o=s.PAN}else{if(n.enableRotate===!1)return;be(_),o=s.ROTATE}break;case Ps.PAN:if(_.ctrlKey||_.metaKey||_.shiftKey){if(n.enableRotate===!1)return;be(_),o=s.ROTATE}else{if(n.enablePan===!1)return;ct(_),o=s.PAN}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(xc)}function oe(_){switch(o){case s.ROTATE:if(n.enableRotate===!1)return;ee(_);break;case s.DOLLY:if(n.enableZoom===!1)return;le(_);break;case s.PAN:if(n.enablePan===!1)return;Ne(_);break}}function ae(_){n.enabled===!1||n.enableZoom===!1||o!==s.NONE||(_.preventDefault(),n.dispatchEvent(xc),xe(ce(_)),n.dispatchEvent(Ch))}function ce(_){const Y=_.deltaMode,H={clientX:_.clientX,clientY:_.clientY,deltaY:_.deltaY};switch(Y){case 1:H.deltaY*=16;break;case 2:H.deltaY*=100;break}return _.ctrlKey&&!T&&(H.deltaY*=10),H}function Le(_){_.key==="Control"&&(T=!0,n.domElement.getRootNode().addEventListener("keyup",ge,{passive:!0,capture:!0}))}function ge(_){_.key==="Control"&&(T=!1,n.domElement.getRootNode().removeEventListener("keyup",ge,{passive:!0,capture:!0}))}function me(_){n.enabled===!1||n.enablePan===!1||Ke(_)}function Xe(_){switch(qe(_),N.length){case 1:switch(n.touches.ONE){case Is.ROTATE:if(n.enableRotate===!1)return;Ge(_),o=s.TOUCH_ROTATE;break;case Is.PAN:if(n.enablePan===!1)return;nt(_),o=s.TOUCH_PAN;break;default:o=s.NONE}break;case 2:switch(n.touches.TWO){case Is.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;it(_),o=s.TOUCH_DOLLY_PAN;break;case Is.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;et(_),o=s.TOUCH_DOLLY_ROTATE;break;default:o=s.NONE}break;default:o=s.NONE}o!==s.NONE&&n.dispatchEvent(xc)}function ue(_){switch(qe(_),o){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Mt(_),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;De(_),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ze(_),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;We(_),n.update();break;default:o=s.NONE}}function Re(_){n.enabled!==!1&&_.preventDefault()}function Qe(_){N.push(_.pointerId)}function Ve(_){delete F[_.pointerId];for(let Y=0;Y<N.length;Y++)if(N[Y]==_.pointerId){N.splice(Y,1);return}}function ve(_){for(let Y=0;Y<N.length;Y++)if(N[Y]==_.pointerId)return!0;return!1}function qe(_){let Y=F[_.pointerId];Y===void 0&&(Y=new Te,F[_.pointerId]=Y),Y.set(_.pageX,_.pageY)}function Ye(_){const Y=_.pointerId===N[0]?N[1]:N[0];return F[Y]}n.domElement.addEventListener("contextmenu",Re),n.domElement.addEventListener("pointerdown",bt),n.domElement.addEventListener("pointercancel",v),n.domElement.addEventListener("wheel",ae,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Le,{passive:!0,capture:!0}),this.update()}}const Ph={VERTEX:"vertex",FRAGMENT:"fragment"},Tt={NONE:"none",FRAME:"frame",RENDER:"render",OBJECT:"object"},ya=["x","y","z","w"];function tf(i,e=!1){let t="{";i.isNode===!0&&(t+=i.id);for(const{property:n,childNode:s}of na(i))t+=","+n.slice(0,-4)+":"+s.getCacheKey(e);return t+="}",t}function*na(i,e=!1){for(const t in i){if(t.startsWith("_")===!0)continue;const n=i[t];if(Array.isArray(n)===!0)for(let s=0;s<n.length;s++){const o=n[s];o&&(o.isNode===!0||e&&typeof o.toJSON=="function")&&(yield{property:t,index:s,childNode:o})}else if(n&&n.isNode===!0)yield{property:t,childNode:n};else if(typeof n=="object")for(const s in n){const o=n[s];o&&(o.isNode===!0||e&&typeof o.toJSON=="function")&&(yield{property:t,index:s,childNode:o})}}}function ji(i){if(i==null)return null;const e=typeof i;return i.isNode===!0?"node":e==="number"?"float":e==="boolean"?"bool":e==="string"?"string":e==="function"?"shader":i.isVector2===!0?"vec2":i.isVector3===!0?"vec3":i.isVector4===!0?"vec4":i.isMatrix3===!0?"mat3":i.isMatrix4===!0?"mat4":i.isColor===!0?"color":i instanceof ArrayBuffer?"ArrayBuffer":null}function nf(i,...e){const t=i?i.slice(-4):void 0;return e.length===1&&(t==="vec2"?e=[e[0],e[0]]:t==="vec3"?e=[e[0],e[0],e[0]]:t==="vec4"&&(e=[e[0],e[0],e[0],e[0]])),i==="color"?new Fe(...e):t==="vec2"?new Te(...e):t==="vec3"?new D(...e):t==="vec4"?new at(...e):t==="mat3"?new je(...e):t==="mat4"?new At(...e):i==="bool"?e[0]||!1:i==="float"||i==="int"||i==="uint"?e[0]||0:i==="string"?e[0]||"":i==="ArrayBuffer"?of(e[0]):null}function sf(i){let e="";const t=new Uint8Array(i);for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function of(i){return Uint8Array.from(atob(i),e=>e.charCodeAt(0)).buffer}const Ih=new Map;let KM=0;class Ue extends Di{constructor(e=null){super(),this.nodeType=e,this.updateType=Tt.NONE,this.updateBeforeType=Tt.NONE,this.uuid=qo.generateUUID(),this.version=0,this._cacheKey=null,this._cacheKeyVersion=0,this.global=!1,this.isNode=!0,Object.defineProperty(this,"id",{value:KM++})}set needsUpdate(e){e===!0&&this.version++}get type(){return this.constructor.type}onUpdate(e,t){return this.updateType=t,this.update=e.bind(this.getSelf()),this}onFrameUpdate(e){return this.onUpdate(e,Tt.FRAME)}onRenderUpdate(e){return this.onUpdate(e,Tt.RENDER)}onObjectUpdate(e){return this.onUpdate(e,Tt.OBJECT)}onReference(e){return this.updateReference=e.bind(this.getSelf()),this}getSelf(){return this.self||this}updateReference(){return this}isGlobal(){return this.global}*getChildren(){for(const{childNode:e}of na(this))yield e}dispose(){this.dispatchEvent({type:"dispose"})}traverse(e){e(this);for(const t of this.getChildren())t.traverse(e)}getCacheKey(e=!1){return e=e||this.version!==this._cacheKeyVersion,(e===!0||this._cacheKey===null)&&(this._cacheKey=tf(this,e),this._cacheKeyVersion=this.version),this._cacheKey}getHash(){return this.uuid}getUpdateType(){return this.updateType}getUpdateBeforeType(){return this.updateBeforeType}getElementType(e){const t=this.getNodeType(e);return e.getElementType(t)}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode?t.outputNode.getNodeType(e):this.nodeType}getShared(e){const t=this.getHash(e);return e.getNodeFromHash(t)||this}setup(e){const t=e.getNodeProperties(this);let n=0;for(const s of this.getChildren())t["node"+n++]=s;return null}construct(e){return console.warn("THREE.Node: construct() is deprecated. Use setup() instead."),this.setup(e)}increaseUsage(e){const t=e.getDataFromNode(this);return t.usageCount=t.usageCount===void 0?1:t.usageCount+1,t.usageCount}analyze(e){if(this.increaseUsage(e)===1){const n=e.getNodeProperties(this);for(const s of Object.values(n))s&&s.isNode===!0&&s.build(e)}}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);if(n&&n.isNode===!0)return n.build(e,t)}updateBefore(){console.warn("Abstract function.")}update(){console.warn("Abstract function.")}build(e,t=null){const n=this.getShared(e);if(this!==n)return n.build(e,t);e.addNode(this),e.addChain(this);let s=null;const o=e.getBuildStage();if(o==="setup"){this.updateReference(e);const r=e.getNodeProperties(this);if(r.initialized!==!0||e.context.tempRead===!1){const a=e.stack.nodes.length;r.initialized=!0,r.outputNode=this.setup(e),r.outputNode!==null&&e.stack.nodes.length!==a&&(r.outputNode=e.stack);for(const c of Object.values(r))c&&c.isNode===!0&&c.build(e)}}else if(o==="analyze")this.analyze(e);else if(o==="generate")if(this.generate.length===1){const a=this.getNodeType(e),c=e.getDataFromNode(this);s=c.snippet,s===void 0&&(s=this.generate(e)||"",c.snippet=s),s=e.format(s,a,t)}else s=this.generate(e,t)||"";return e.removeChain(this),s}getSerializeChildren(){return na(this)}serialize(e){const t=this.getSerializeChildren(),n={};for(const{property:s,index:o,childNode:r}of t)o!==void 0?(n[s]===void 0&&(n[s]=Number.isInteger(o)?[]:{}),n[s][o]=r.toJSON(e.meta).uuid):n[s]=r.toJSON(e.meta).uuid;Object.keys(n).length>0&&(e.inputNodes=n)}deserialize(e){if(e.inputNodes!==void 0){const t=e.meta.nodes;for(const n in e.inputNodes)if(Array.isArray(e.inputNodes[n])){const s=[];for(const o of e.inputNodes[n])s.push(t[o]);this[n]=s}else if(typeof e.inputNodes[n]=="object"){const s={};for(const o in e.inputNodes[n]){const r=e.inputNodes[n][o];s[o]=t[r]}this[n]=s}else{const s=e.inputNodes[n];this[n]=t[s]}}}toJSON(e){const{uuid:t,type:n}=this,s=e===void 0||typeof e=="string";s&&(e={textures:{},images:{},nodes:{}});let o=e.nodes[t];o===void 0&&(o={uuid:t,type:n,meta:e,metadata:{version:4.6,type:"Node",generator:"Node.toJSON"}},s!==!0&&(e.nodes[o.uuid]=o),this.serialize(o),delete o.meta);function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}if(s){const a=r(e.textures),c=r(e.images),l=r(e.nodes);a.length>0&&(o.textures=a),c.length>0&&(o.images=c),l.length>0&&(o.nodes=l)}return o}}function te(i,e){if(typeof e!="function"||!i)throw new Error(`Node class ${i} is not a class`);if(Ih.has(i)){console.warn(`Redefinition of node class ${i}`);return}Ih.set(i,e),e.type=i}class yt extends Ue{constructor(e){super(e),this.isTempNode=!0}hasDependencies(e){return e.getDataFromNode(this).usageCount>1}build(e,t){if(e.getBuildStage()==="generate"){const s=e.getVectorType(this.getNodeType(e,t)),o=e.getDataFromNode(this);if(e.context.tempRead!==!1&&o.propertyName!==void 0)return e.format(o.propertyName,s,t);if(e.context.tempWrite!==!1&&s!=="void"&&t!=="void"&&this.hasDependencies(e)){const r=super.build(e,s),a=e.getVarFromNode(this,null,s),c=e.getPropertyName(a);return e.addLineFlowCode(`${c} = ${r}`),o.snippet=r,o.propertyName=c,e.format(o.propertyName,s,t)}}return super.build(e,t)}}te("TempNode",yt);class Ao extends Ue{constructor(e,t){super(),this.node=e,this.indexNode=t,this.isArrayElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=this.node.build(e),n=this.indexNode.build(e,"uint");return`${t}[ ${n} ]`}}te("ArrayElementNode",Ao);class Dl extends Ue{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(e){const t=this.node.getNodeType(e);let n=null;for(const s of this.convertTo.split("|"))(n===null||e.getTypeLength(t)===e.getTypeLength(s))&&(n=s);return n}serialize(e){super.serialize(e),e.convertTo=this.convertTo}deserialize(e){super.deserialize(e),this.convertTo=e.convertTo}generate(e,t){const n=this.node,s=this.getNodeType(e),o=n.build(e,s);return e.format(o,s,t)}}te("ConvertNode",Dl);class rf extends yt{constructor(e=[],t=null){super(t),this.nodes=e}getNodeType(e){return this.nodeType!==null?e.getVectorType(this.nodeType):e.getTypeFromLength(this.nodes.reduce((t,n)=>t+e.getTypeLength(n.getNodeType(e)),0))}generate(e,t){const n=this.getNodeType(e),s=this.nodes,o=e.getComponentType(n),r=[];for(const c of s){let l=c.build(e);const u=e.getComponentType(c.getNodeType(e));u!==o&&(l=e.format(l,u,o)),r.push(l)}const a=`${e.getType(n)}( ${r.join(", ")} )`;return e.format(a,n,t)}}te("JoinNode",rf);const ZM=ya.join("");class qc extends Ue{constructor(e,t="x"){super(),this.node=e,this.components=t,this.isSplitNode=!0}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(ya.indexOf(t)+1,e);return e}getComponentType(e){return e.getComponentType(this.node.getNodeType(e))}getNodeType(e){return e.getTypeFromLength(this.components.length,this.getComponentType(e))}generate(e,t){const n=this.node,s=e.getTypeLength(n.getNodeType(e));let o=null;if(s>1){let r=null;this.getVectorLength()>=s&&(r=e.getTypeFromLength(this.getVectorLength(),this.getComponentType(e)));const c=n.build(e,r);this.components.length===s&&this.components===ZM.slice(0,this.components.length)?o=e.format(c,r,t):o=e.format(`${c}.${this.components}`,this.getNodeType(e),t)}else o=n.build(e,t);return o}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}}te("SplitNode",qc);class af extends yt{constructor(e,t,n){super(),this.sourceNode=e,this.components=t,this.targetNode=n}getNodeType(e){return this.sourceNode.getNodeType(e)}generate(e){const{sourceNode:t,components:n,targetNode:s}=this,o=this.getNodeType(e),r=e.getTypeFromLength(n.length),a=s.build(e,r),c=t.build(e,o),l=e.getTypeLength(o),u=[];for(let h=0;h<l;h++){const d=ya[h];d===n[0]?(u.push(a),h+=n.length-1):u.push(c+"."+d)}return`${e.getType(o)}( ${u.join(", ")} )`}}te("SetNode",af);class Ma extends Ue{constructor(e,t=null){super(t),this.isInputNode=!0,this.value=e,this.precision=null}getNodeType(){return this.nodeType===null?ji(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}setPrecision(e){return this.precision=e,this}serialize(e){super.serialize(e),e.value=this.value,this.value&&this.value.toArray&&(e.value=this.value.toArray()),e.valueType=ji(this.value),e.nodeType=this.nodeType,e.valueType==="ArrayBuffer"&&(e.value=sf(e.value)),e.precision=this.precision}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=Array.isArray(e.value)?nf(e.valueType,...e.value):e.value,this.precision=e.precision||null,this.value&&this.value.fromArray&&(this.value=this.value.fromArray(e.value))}generate(){console.warn("Abstract function.")}}te("InputNode",Ma);class _i extends Ma{constructor(e,t=null){super(e,t),this.isConstNode=!0}generateConst(e){return e.generateConst(this.getNodeType(e),this.value)}generate(e,t){const n=this.getNodeType(e);return e.format(this.generateConst(e),n,t)}}te("ConstNode",_i);let Mo=null;const Js=new Map;function z(i,e){if(Js.has(i)){console.warn(`Redefinition of node element ${i}`);return}if(typeof e!="function")throw new Error(`Node element ${i} is not a function`);Js.set(i,e)}const Dh=i=>i.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),cf={setup(i,e){const t=e.shift();return i(Ea(t),...e)},get(i,e,t){if(typeof e=="string"&&i[e]===void 0){if(i.isStackNode!==!0&&e==="assign")return(...n)=>(Mo.assign(t,...n),t);if(Js.has(e)){const n=Js.get(e);return i.isStackNode?(...s)=>t.add(n(...s)):(...s)=>n(t,...s)}else{if(e==="self")return i;if(e.endsWith("Assign")&&Js.has(e.slice(0,e.length-6))){const n=Js.get(e.slice(0,e.length-6));return i.isStackNode?(...s)=>t.assign(s[0],n(...s)):(...s)=>t.assign(n(t,...s))}else{if(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0)return e=Dh(e),pe(new qc(t,e));if(/^set[XYZWRGBASTPQ]{1,4}$/.test(e)===!0)return e=Dh(e.slice(3).toLowerCase()),e=e.split("").sort().join(""),n=>pe(new af(i,e,n));if(e==="width"||e==="height"||e==="depth")return e==="width"?e="x":e==="height"?e="y":e==="depth"&&(e="z"),pe(new qc(i,e));if(/^\d+$/.test(e)===!0)return pe(new Ao(t,new _i(Number(e),"uint")))}}}return Reflect.get(i,e,t)},set(i,e,t,n){return typeof e=="string"&&i[e]===void 0&&(/^[xyzwrgbastpq]{1,4}$/.test(e)===!0||e==="width"||e==="height"||e==="depth"||/^\d+$/.test(e)===!0)?(n[e].assign(t),!0):Reflect.set(i,e,t,n)}},vc=new WeakMap,Uh=new WeakMap,JM=function(i,e=null){const t=ji(i);if(t==="node"){let n=vc.get(i);return n===void 0&&(n=new Proxy(i,cf),vc.set(i,n),vc.set(n,n)),n}else{if(e===null&&(t==="float"||t==="boolean")||t&&t!=="shader"&&t!=="string")return pe(Yc(i,e));if(t==="shader")return $(i)}return i},QM=function(i,e=null){for(const t in i)i[t]=pe(i[t],e);return i},eS=function(i,e=null){const t=i.length;for(let n=0;n<t;n++)i[n]=pe(i[n],e);return i},tS=function(i,e=null,t=null,n=null){const s=o=>pe(n!==null?Object.assign(o,n):o);return e===null?(...o)=>s(new i(...oo(o))):t!==null?(t=pe(t),(...o)=>s(new i(e,...oo(o),t))):(...o)=>s(new i(e,...oo(o)))},nS=function(i,...e){return pe(new i(...oo(e)))};class iS extends Ue{constructor(e,t){super(),this.shaderNode=e,this.inputNodes=t}getNodeType(e){const t=e.getNodeProperties(this);return t.outputNode===null&&(t.outputNode=this.setupOutput(e)),t.outputNode.getNodeType(e)}call(e){const{shaderNode:t,inputNodes:n}=this;if(t.layout){let r=Uh.get(e.constructor);r===void 0&&(r=new WeakMap,Uh.set(e.constructor,r));let a=r.get(t);return a===void 0&&(a=pe(e.buildFunctionNode(t)),r.set(t,a)),e.currentFunctionNode!==null&&e.currentFunctionNode.includes.push(a),pe(a.call(n))}const s=t.jsFunc,o=n!==null?s(n,e.stack,e):s(e.stack,e);return pe(o)}setup(e){const{outputNode:t}=e.getNodeProperties(this);return t||this.setupOutput(e)}setupOutput(e){return e.addStack(),e.stack.outputNode=this.call(e),e.removeStack()}generate(e,t){const{outputNode:n}=e.getNodeProperties(this);return n===null?this.call(e).build(e,t):super.generate(e,t)}}class sS extends Ue{constructor(e){super(),this.jsFunc=e,this.layout=null}get isArrayInput(){return/^\((\s+)?\[/.test(this.jsFunc.toString())}setLayout(e){return this.layout=e,this}call(e=null){return Ea(e),pe(new iS(this,e))}setup(){return this.call()}}const oS=[!1,!0],rS=[0,1,2,3],aS=[-1,-2],lf=[.5,1.5,1/3,1e-6,1e6,Math.PI,Math.PI*2,1/Math.PI,2/Math.PI,1/(Math.PI*2),Math.PI/2],Ul=new Map;for(const i of oS)Ul.set(i,new _i(i));const Ol=new Map;for(const i of rS)Ol.set(i,new _i(i,"uint"));const Fl=new Map([...Ol].map(i=>new _i(i.value,"int")));for(const i of aS)Fl.set(i,new _i(i,"int"));const Sa=new Map([...Fl].map(i=>new _i(i.value)));for(const i of lf)Sa.set(i,new _i(i));for(const i of lf)Sa.set(-i,new _i(-i));const Ta={bool:Ul,uint:Ol,ints:Fl,float:Sa},Oh=new Map([...Ul,...Sa]),Yc=(i,e)=>Oh.has(i)?Oh.get(i):i.isNode===!0?i:new _i(i,e),cS=i=>{try{return i.getNodeType()}catch{return}},_t=function(i,e=null){return(...t)=>{if((t.length===0||!["bool","float","int","uint"].includes(i)&&t.every(s=>typeof s!="object"))&&(t=[nf(i,...t)]),t.length===1&&e!==null&&e.has(t[0]))return pe(e.get(t[0]));if(t.length===1){const s=Yc(t[0],i);return cS(s)===i?pe(s):pe(new Dl(s,i))}const n=t.map(s=>Yc(s));return pe(new rf(n,i))}},Fh=i=>i&&i.value,lS=i=>i!=null?i.nodeType||i.convertTo||(typeof i=="string"?i:null):null;function Xo(i){return new Proxy(new sS(i),cf)}const pe=(i,e=null)=>JM(i,e),Ea=(i,e=null)=>new QM(i,e),oo=(i,e=null)=>new eS(i,e),k=(...i)=>new tS(...i),he=(...i)=>new nS(...i),$=i=>{const e=new Xo(i),t=(...n)=>{let s;return Ea(n),n[0]&&n[0].isNode?s=[...n]:s=n[0],e.call(s)};return t.shaderNode=e,t.setLayout=n=>(e.setLayout(n),t),t};te("ShaderNode",Xo);z("toGlobal",i=>(i.global=!0,i));const Vh=i=>{Mo=i},uS=()=>Mo,Je=(...i)=>Mo.if(...i);function hS(i){return Mo&&Mo.add(i),i}z("append",hS);const dS=new _t("color"),w=new _t("float",Ta.float),C=new _t("int",Ta.ints),fe=new _t("uint",Ta.uint),Es=new _t("bool",Ta.bool),Ee=new _t("vec2"),Ms=new _t("ivec2"),fS=new _t("uvec2"),pS=new _t("bvec2"),L=new _t("vec3"),mS=new _t("ivec3"),or=new _t("uvec3"),uf=new _t("bvec3"),Se=new _t("vec4"),gS=new _t("ivec4"),_S=new _t("uvec4"),xS=new _t("bvec4"),Vl=new _t("mat2"),vS=new _t("imat2"),yS=new _t("umat2"),MS=new _t("bmat2"),ii=new _t("mat3"),SS=new _t("imat3"),TS=new _t("umat3"),ES=new _t("bmat3"),ro=new _t("mat4"),AS=new _t("imat4"),NS=new _t("umat4"),wS=new _t("bmat4");z("toColor",dS);z("toFloat",w);z("toInt",C);z("toUint",fe);z("toBool",Es);z("toVec2",Ee);z("toIvec2",Ms);z("toUvec2",fS);z("toBvec2",pS);z("toVec3",L);z("toIvec3",mS);z("toUvec3",or);z("toBvec3",uf);z("toVec4",Se);z("toIvec4",gS);z("toUvec4",_S);z("toBvec4",xS);z("toMat2",Vl);z("toImat2",vS);z("toUmat2",yS);z("toBmat2",MS);z("toMat3",ii);z("toImat3",SS);z("toUmat3",TS);z("toBmat3",ES);z("toMat4",ro);z("toImat4",AS);z("toUmat4",NS);z("toBmat4",wS);const bS=k(Ao),RS=(i,e)=>pe(new Dl(pe(i),e));z("element",bS);z("convert",RS);class hf extends yt{constructor(e,t){super(),this.targetNode=e,this.sourceNode=t}hasDependencies(){return!1}getNodeType(e,t){return t!=="void"?this.targetNode.getNodeType(e):"void"}needsSplitAssign(e){const{targetNode:t}=this;if(e.isAvailable("swizzleAssign")===!1&&t.isSplitNode&&t.components.length>1){const n=e.getTypeLength(t.node.getNodeType(e));return ya.join("").slice(0,n)!==t.components}return!1}generate(e,t){const{targetNode:n,sourceNode:s}=this,o=this.needsSplitAssign(e),r=n.getNodeType(e),a=n.context({assign:!0}).build(e),c=s.build(e,r),l=s.getNodeType(e),u=e.getDataFromNode(this);let h;if(u.initialized===!0)t!=="void"&&(h=a);else if(o){const d=e.getVarFromNode(this,null,r),p=e.getPropertyName(d);e.addLineFlowCode(`${p} = ${c}`);const g=n.node.context({assign:!0}).build(e);for(let x=0;x<n.components.length;x++){const m=n.components[x];e.addLineFlowCode(`${g}.${m} = ${p}[ ${x} ]`)}t!=="void"&&(h=a)}else h=`${a} = ${c}`,(t==="void"||l==="void")&&(e.addLineFlowCode(h),t!=="void"&&(h=a));return u.initialized=!0,e.format(h,r,t)}}const CS=k(hf);te("AssignNode",hf);z("assign",CS);class df extends Ue{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVaryingNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}setupVarying(e){const t=e.getNodeProperties(this);let n=t.varying;if(n===void 0){const s=this.name,o=this.getNodeType(e);t.varying=n=e.getVaryingFromNode(this,s,o),t.node=this.node}return n.needsInterpolation||(n.needsInterpolation=e.shaderStage==="fragment"),n}setup(e){this.setupVarying(e)}generate(e){const t=e.getNodeProperties(this),n=this.setupVarying(e);if(t.propertyName===void 0){const s=this.getNodeType(e),o=e.getPropertyName(n,Ph.VERTEX);e.flowNodeFromShaderStage(Ph.VERTEX,this.node,s,o),t.propertyName=o}return e.getPropertyName(n)}}const Wt=k(df);z("varying",Wt);te("VaryingNode",df);class zl extends Ue{constructor(e,t=null,n=null){super(t),this.defaultNode=n,this._attributeName=e}isGlobal(){return!0}getHash(e){return this.getAttributeName(e)}getNodeType(e){let t=super.getNodeType(e);if(t===null){const n=this.getAttributeName(e);if(e.hasGeometryAttribute(n)){const s=e.geometry.getAttribute(n);t=e.getTypeFromAttribute(s)}else t="float"}return t}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=this.getAttributeName(e),n=this.getNodeType(e);if(e.hasGeometryAttribute(t)===!0){const o=e.geometry.getAttribute(t),r=e.getTypeFromAttribute(o),a=e.getAttribute(t,r);return e.shaderStage==="vertex"?e.format(a.name,r,n):Wt(this).build(e,n)}else{console.warn(`AttributeNode: Vertex attribute "${t}" not found on geometry.`);const{defaultNode:o}=this;return o!==null?o.build(e,n):e.generateConst(n)}}}const nn=(i,e,t)=>pe(new zl(i,e,pe(t)));te("AttributeNode",zl);class ff extends Ue{constructor(e,t){super(),this.isBypassNode=!0,this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e){const t=this.callNode.build(e,"void");return t!==""&&e.addLineFlowCode(t),this.outputNode.build(e)}}const pf=k(ff);z("bypass",pf);te("BypassNode",ff);let LS=0;class PS{constructor(){this.id=LS++,this.nodesData=new WeakMap}getNodeData(e){return this.nodesData.get(e)}setNodeData(e,t){this.nodesData.set(e,t)}}class mf extends Ue{constructor(e,t=new PS){super(),this.isCacheNode=!0,this.node=e,this.cache=t}getNodeType(e){return this.node.getNodeType(e)}build(e,...t){const n=e.getCache(),s=this.cache||e.globalCache;e.setCache(s);const o=this.node.build(e,...t);return e.setCache(n),o}}const ia=k(mf),IS=i=>ia(i,null);z("cache",ia);z("globalCache",IS);te("CacheNode",mf);class Bl extends Ue{constructor(e,t={}){super(),this.isContextNode=!0,this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}analyze(e){this.node.build(e)}setup(e){const t=e.getContext();e.setContext({...e.context,...this.context});const n=this.node.build(e);return e.setContext(t),n}generate(e,t){const n=e.getContext();e.setContext({...e.context,...this.context});const s=this.node.build(e,t);return e.setContext(n),s}}const Pi=k(Bl),DS=(i,e)=>Pi(i,{label:e});z("context",Pi);z("label",DS);te("ContextNode",Bl);class pi extends Ue{constructor(e){super("uint"),this.scope=e,this.isInstanceIndexNode=!0}generate(e){const t=this.getNodeType(e),n=this.scope;let s;if(n===pi.VERTEX)s=e.getVertexIndex();else if(n===pi.INSTANCE)s=e.getInstanceIndex();else throw new Error("THREE.IndexNode: Unknown scope: "+n);let o;return e.shaderStage==="vertex"||e.shaderStage==="compute"?o=s:o=Wt(this).build(e,t),o}}pi.VERTEX="vertex";pi.INSTANCE="instance";const US=he(pi,pi.VERTEX),gf=he(pi,pi.INSTANCE);te("IndexNode",pi);class Aa{start(){}finish(){}direct(){}indirectDiffuse(){}indirectSpecular(){}ambientOcclusion(){}}class _f extends Ue{constructor(e,t=null){super(),this.node=e,this.name=t,this.isVarNode=!0}isGlobal(){return!0}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const{node:t,name:n}=this,s=e.getVarFromNode(this,n,e.getVectorType(this.getNodeType(e))),o=e.getPropertyName(s),r=t.build(e,s.type);return e.addLineFlowCode(`${o} = ${r}`),o}}const sa=k(_f);z("temp",sa);z("toVar",(...i)=>sa(...i).append());te("VarNode",_f);class ht extends Ue{constructor(e,t=null,n=!1){super(e),this.name=t,this.varying=n,this.isPropertyNode=!0}getHash(e){return this.name||super.getHash(e)}isGlobal(){return!0}generate(e){let t;return this.varying===!0?(t=e.getVaryingFromNode(this,this.name),t.needsInterpolation=!0):t=e.getVarFromNode(this,this.name),e.getPropertyName(t)}}const Rt=(i,e)=>pe(new ht(i,e)),ai=(i,e)=>pe(new ht(i,e,!0)),St=he(ht,"vec4","DiffuseColor"),$i=he(ht,"float","Roughness"),oa=he(ht,"float","Metalness"),jc=he(ht,"float","Clearcoat"),ra=he(ht,"float","ClearcoatRoughness"),Qs=he(ht,"vec3","Sheen"),Hl=he(ht,"float","SheenRoughness"),kl=he(ht,"float","Iridescence"),xf=he(ht,"float","IridescenceIOR"),vf=he(ht,"float","IridescenceThickness"),$c=he(ht,"float","AlphaT"),gs=he(ht,"float","Anisotropy"),Yr=he(ht,"vec3","AnisotropyT"),ao=he(ht,"vec3","AnisotropyB"),Kn=he(ht,"color","SpecularColor"),aa=he(ht,"float","SpecularF90"),Kc=he(ht,"float","Shininess"),OS=he(ht,"vec4","Output"),co=he(ht,"float","dashSize"),ca=he(ht,"float","gapSize");he(ht,"float","pointWidth");const jr=he(ht,"float","IOR"),Zc=he(ht,"float","Transmission"),yf=he(ht,"float","Thickness"),Mf=he(ht,"float","AttenuationDistance"),Sf=he(ht,"color","AttenuationColor"),Tf=he(ht,"float","Dispersion");te("PropertyNode",ht);class FS extends ht{constructor(e,t=null){super(e,t),this.isParameterNode=!0}getHash(){return this.uuid}generate(){return this.name}}te("ParameterNode",FS);class Gl extends Ue{constructor(e="",t=[],n=""){super("code"),this.isCodeNode=!0,this.code=e,this.language=n,this.includes=t}isGlobal(){return!0}setIncludes(e){return this.includes=e,this}getIncludes(){return this.includes}generate(e){const t=this.getIncludes(e);for(const s of t)s.build(e);const n=e.getCodeFromNode(this,this.getNodeType(e));return n.code=this.code,n.code}serialize(e){super.serialize(e),e.code=this.code,e.language=this.language}deserialize(e){super.deserialize(e),this.code=e.code,this.language=e.language}}k(Gl);te("CodeNode",Gl);class VS extends Gl{constructor(e="",t=[],n=""){super(e,t,n),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const t=e.getDataFromNode(this);let n=t.nodeFunction;return n===void 0&&(n=e.parser.parseFunction(this.code),t.nodeFunction=n),n}generate(e,t){super.generate(e);const n=this.getNodeFunction(e),s=n.name,o=n.type,r=e.getCodeFromNode(this,o);s!==""&&(r.name=s);const a=e.getPropertyName(r);let c=this.getNodeFunction(e).getCode(a);const l=this.keywords,u=Object.keys(l);if(u.length>0)for(const h of u){const d=new RegExp(`\\b${h}\\b`,"g"),p=l[h].build(e,"property");c=c.replace(d,p)}return r.code=c+`
`,t==="property"?a:e.format(`${a}()`,o,t)}}te("FunctionNode",VS);class Wl extends Ue{constructor(e,t=!1){super("string"),this.name=e,this.version=0,this.shared=t,this.isUniformGroup=!0}set needsUpdate(e){e===!0&&this.version++}}const zS=i=>new Wl(i),Ef=i=>new Wl(i,!0);Ef("frame");Ef("render");const BS=zS("object");te("UniformGroupNode",Wl);class bs extends Ma{constructor(e,t=null){super(e,t),this.isUniformNode=!0,this.groupNode=BS}setGroup(e){return this.groupNode=e,this}getGroup(){return this.groupNode}getUniformHash(e){return this.getHash(e)}onUpdate(e,t){const n=this.getSelf();return e=e.bind(n),super.onUpdate(s=>{const o=e(s,n);o!==void 0&&(this.value=o)},t)}generate(e,t){const n=this.getNodeType(e),s=this.getUniformHash(e);let o=e.getNodeFromHash(s);o===void 0&&(e.setHashNode(this,s),o=this);const r=o.getInputType(e),a=e.getUniformFromNode(o,r,e.shaderStage,e.context.label),c=e.getPropertyName(a);return e.context.label!==void 0&&delete e.context.label,e.format(c,n,t)}}const rt=(i,e)=>{const t=lS(e||i),n=i&&i.isNode===!0?i.node&&i.node.value||i.value:i;return pe(new bs(n,t))};te("UniformNode",bs);const xi=i=>nn("uv"+(i>0?i:""),"vec2");class Af extends Ue{constructor(e,t=null){super("uvec2"),this.isTextureSizeNode=!0,this.textureNode=e,this.levelNode=t}generate(e,t){const n=this.textureNode.build(e,"property"),s=this.levelNode.build(e,"int");return e.format(`${e.getMethod("textureDimensions")}( ${n}, ${s} )`,this.getNodeType(e),t)}}const Xl=k(Af);z("textureSize",Xl);te("TextureSizeNode",Af);class wt extends yt{constructor(e,t,n,...s){if(super(),this.op=e,s.length>0){let o=n;for(let r=0;r<s.length;r++)o=new wt(e,o,s[r]);n=o}this.aNode=t,this.bNode=n}getNodeType(e,t){const n=this.op,s=this.aNode,o=this.bNode,r=s.getNodeType(e),a=typeof o<"u"?o.getNodeType(e):null;if(r==="void"||a==="void")return"void";if(n==="%")return r;if(n==="~"||n==="&"||n==="|"||n==="^"||n===">>"||n==="<<")return e.getIntegerType(r);if(n==="!"||n==="=="||n==="&&"||n==="||"||n==="^^")return"bool";if(n==="<"||n===">"||n==="<="||n===">="){const c=t?e.getTypeLength(t):Math.max(e.getTypeLength(r),e.getTypeLength(a));return c>1?`bvec${c}`:"bool"}else return r==="float"&&e.isMatrix(a)?a:e.isMatrix(r)&&e.isVector(a)?e.getVectorFromMatrix(r):e.isVector(r)&&e.isMatrix(a)?e.getVectorFromMatrix(a):e.getTypeLength(a)>e.getTypeLength(r)?a:r}generate(e,t){const n=this.op,s=this.aNode,o=this.bNode,r=this.getNodeType(e,t);let a=null,c=null;r!=="void"?(a=s.getNodeType(e),c=typeof o<"u"?o.getNodeType(e):null,n==="<"||n===">"||n==="<="||n===">="||n==="=="?e.isVector(a)?c=a:a=c="float":n===">>"||n==="<<"?(a=r,c=e.changeComponentType(c,"uint")):e.isMatrix(a)&&e.isVector(c)?c=e.getVectorFromMatrix(a):e.isVector(a)&&e.isMatrix(c)?a=e.getVectorFromMatrix(c):a=c=r):a=c=r;const l=s.build(e,a),u=typeof o<"u"?o.build(e,c):null,h=e.getTypeLength(t),d=e.getFunctionOperator(n);if(t!=="void")return n==="<"&&h>1?e.format(`${e.getMethod("lessThan")}( ${l}, ${u} )`,r,t):n==="<="&&h>1?e.format(`${e.getMethod("lessThanEqual")}( ${l}, ${u} )`,r,t):n===">"&&h>1?e.format(`${e.getMethod("greaterThan")}( ${l}, ${u} )`,r,t):n===">="&&h>1?e.format(`${e.getMethod("greaterThanEqual")}( ${l}, ${u} )`,r,t):n==="!"||n==="~"?e.format(`(${n}${l})`,a,t):d?e.format(`${d}( ${l}, ${u} )`,r,t):e.format(`( ${l} ${n} ${u} )`,r,t);if(a!=="void")return d?e.format(`${d}( ${l}, ${u} )`,r,t):e.format(`${l} ${n} ${u}`,r,t)}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const Un=k(wt,"+"),Ft=k(wt,"-"),ot=k(wt,"*"),ts=k(wt,"/"),HS=k(wt,"%"),kS=k(wt,"=="),GS=k(wt,"!="),WS=k(wt,"<"),Nf=k(wt,">"),XS=k(wt,"<="),qS=k(wt,">="),YS=k(wt,"&&"),jS=k(wt,"||"),$S=k(wt,"!"),KS=k(wt,"^^"),ZS=k(wt,"&"),JS=k(wt,"~"),QS=k(wt,"|"),eT=k(wt,"^"),tT=k(wt,"<<"),nT=k(wt,">>");z("add",Un);z("sub",Ft);z("mul",ot);z("div",ts);z("remainder",HS);z("equal",kS);z("notEqual",GS);z("lessThan",WS);z("greaterThan",Nf);z("lessThanEqual",XS);z("greaterThanEqual",qS);z("and",YS);z("or",jS);z("not",$S);z("xor",KS);z("bitAnd",ZS);z("bitNot",JS);z("bitOr",QS);z("bitXor",eT);z("shiftLeft",tT);z("shiftRight",nT);te("OperatorNode",wt);class U extends yt{constructor(e,t,n=null,s=null){super(),this.method=e,this.aNode=t,this.bNode=n,this.cNode=s}getInputType(e){const t=this.aNode.getNodeType(e),n=this.bNode?this.bNode.getNodeType(e):null,s=this.cNode?this.cNode.getNodeType(e):null,o=e.isMatrix(t)?0:e.getTypeLength(t),r=e.isMatrix(n)?0:e.getTypeLength(n),a=e.isMatrix(s)?0:e.getTypeLength(s);return o>r&&o>a?t:r>a?n:a>o?s:t}getNodeType(e){const t=this.method;return t===U.LENGTH||t===U.DISTANCE||t===U.DOT?"float":t===U.CROSS?"vec3":t===U.ALL?"bool":t===U.EQUALS?e.changeComponentType(this.aNode.getNodeType(e),"bool"):t===U.MOD?this.aNode.getNodeType(e):this.getInputType(e)}generate(e,t){const n=this.method,s=this.getNodeType(e),o=this.getInputType(e),r=this.aNode,a=this.bNode,c=this.cNode,l=e.renderer.isWebGLRenderer===!0;if(n===U.TRANSFORM_DIRECTION){let u=r,h=a;e.isMatrix(u.getNodeType(e))?h=Se(L(h),0):u=Se(L(u),0);const d=ot(u,h).xyz;return jo(d).build(e,t)}else{if(n===U.NEGATE)return e.format("( - "+r.build(e,o)+" )",s,t);if(n===U.ONE_MINUS)return Ft(1,r).build(e,t);if(n===U.RECIPROCAL)return ts(1,r).build(e,t);if(n===U.DIFFERENCE)return kt(Ft(r,a)).build(e,t);{const u=[];return n===U.CROSS||n===U.MOD?u.push(r.build(e,s),a.build(e,s)):n===U.STEP?u.push(r.build(e,e.getTypeLength(r.getNodeType(e))===1?"float":o),a.build(e,o)):l&&(n===U.MIN||n===U.MAX)||n===U.MOD?u.push(r.build(e,o),a.build(e,e.getTypeLength(a.getNodeType(e))===1?"float":o)):n===U.REFRACT?u.push(r.build(e,o),a.build(e,o),c.build(e,"float")):n===U.MIX?u.push(r.build(e,o),a.build(e,o),c.build(e,e.getTypeLength(c.getNodeType(e))===1?"float":o)):(u.push(r.build(e,o)),a!==null&&u.push(a.build(e,o)),c!==null&&u.push(c.build(e,o))),e.format(`${e.getMethod(n,s)}( ${u.join(", ")} )`,s,t)}}}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}U.ALL="all";U.ANY="any";U.EQUALS="equals";U.RADIANS="radians";U.DEGREES="degrees";U.EXP="exp";U.EXP2="exp2";U.LOG="log";U.LOG2="log2";U.SQRT="sqrt";U.INVERSE_SQRT="inversesqrt";U.FLOOR="floor";U.CEIL="ceil";U.NORMALIZE="normalize";U.FRACT="fract";U.SIN="sin";U.COS="cos";U.TAN="tan";U.ASIN="asin";U.ACOS="acos";U.ATAN="atan";U.ABS="abs";U.SIGN="sign";U.LENGTH="length";U.NEGATE="negate";U.ONE_MINUS="oneMinus";U.DFDX="dFdx";U.DFDY="dFdy";U.ROUND="round";U.RECIPROCAL="reciprocal";U.TRUNC="trunc";U.FWIDTH="fwidth";U.BITCAST="bitcast";U.ATAN2="atan2";U.MIN="min";U.MAX="max";U.MOD="mod";U.STEP="step";U.REFLECT="reflect";U.DISTANCE="distance";U.DIFFERENCE="difference";U.DOT="dot";U.CROSS="cross";U.POW="pow";U.TRANSFORM_DIRECTION="transformDirection";U.MIX="mix";U.CLAMP="clamp";U.REFRACT="refract";U.SMOOTHSTEP="smoothstep";U.FACEFORWARD="faceforward";const wf=w(1e-6);w(1e6);const zh=w(Math.PI);w(Math.PI*2);const bf=k(U,U.ALL),iT=k(U,U.ANY),sT=k(U,U.EQUALS),oT=k(U,U.RADIANS),rT=k(U,U.DEGREES),Rf=k(U,U.EXP),Jc=k(U,U.EXP2),Cf=k(U,U.LOG),Na=k(U,U.LOG2),Rs=k(U,U.SQRT),aT=k(U,U.INVERSE_SQRT),No=k(U,U.FLOOR),Lf=k(U,U.CEIL),jo=k(U,U.NORMALIZE),wa=k(U,U.FRACT),wi=k(U,U.SIN),Xi=k(U,U.COS),cT=k(U,U.TAN),lT=k(U,U.ASIN),uT=k(U,U.ACOS),hT=k(U,U.ATAN),kt=k(U,U.ABS),ql=k(U,U.SIGN),lo=k(U,U.LENGTH),dT=k(U,U.NEGATE),fT=k(U,U.ONE_MINUS),pT=k(U,U.DFDX),mT=k(U,U.DFDY),gT=k(U,U.ROUND),_T=k(U,U.RECIPROCAL),Pf=k(U,U.TRUNC),xT=k(U,U.FWIDTH);k(U,U.BITCAST);const vT=k(U,U.ATAN2),Qn=k(U,U.MIN),sn=k(U,U.MAX),yT=k(U,U.MOD),MT=k(U,U.STEP),ST=k(U,U.REFLECT),TT=k(U,U.DISTANCE),ET=k(U,U.DIFFERENCE),wo=k(U,U.DOT),If=k(U,U.CROSS),fi=k(U,U.POW),Df=k(U,U.POW,2),AT=k(U,U.POW,3),NT=k(U,U.POW,4),wT=k(U,U.TRANSFORM_DIRECTION),bT=i=>ot(ql(i),fi(kt(i),1/3)),RT=i=>wo(i,i),$t=k(U,U.MIX),So=(i,e=0,t=1)=>pe(new U(U.CLAMP,pe(i),pe(e),pe(t))),CT=i=>So(i),Uf=k(U,U.REFRACT),mi=k(U,U.SMOOTHSTEP),LT=k(U,U.FACEFORWARD),PT=(i,e,t)=>$t(e,t,i),IT=(i,e,t)=>mi(e,t,i);z("all",bf);z("any",iT);z("equals",sT);z("radians",oT);z("degrees",rT);z("exp",Rf);z("exp2",Jc);z("log",Cf);z("log2",Na);z("sqrt",Rs);z("inverseSqrt",aT);z("floor",No);z("ceil",Lf);z("normalize",jo);z("fract",wa);z("sin",wi);z("cos",Xi);z("tan",cT);z("asin",lT);z("acos",uT);z("atan",hT);z("abs",kt);z("sign",ql);z("length",lo);z("lengthSq",RT);z("negate",dT);z("oneMinus",fT);z("dFdx",pT);z("dFdy",mT);z("round",gT);z("reciprocal",_T);z("trunc",Pf);z("fwidth",xT);z("atan2",vT);z("min",Qn);z("max",sn);z("mod",yT);z("step",MT);z("reflect",ST);z("distance",TT);z("dot",wo);z("cross",If);z("pow",fi);z("pow2",Df);z("pow3",AT);z("pow4",NT);z("transformDirection",wT);z("mix",PT);z("clamp",So);z("refract",Uf);z("smoothstep",IT);z("faceForward",LT);z("difference",ET);z("saturate",CT);z("cbrt",bT);te("MathNode",U);const DT=$(i=>{const{value:e}=i,{rgb:t}=e,n=t.mul(.9478672986).add(.0521327014).pow(2.4),s=t.mul(.0773993808),o=t.lessThanEqual(.04045),r=$t(n,s,o);return Se(r,e.a)}),UT=$(i=>{const{value:e}=i,{rgb:t}=e,n=t.pow(.41666).mul(1.055).sub(.055),s=t.mul(12.92),o=t.lessThanEqual(.0031308),r=$t(n,s,o);return Se(r,e.a)}),Bh=i=>{let e=null;return i===ri?e="Linear":i===$n&&(e="sRGB"),e},Of=(i,e)=>Bh(i)+"To"+Bh(e);class En extends yt{constructor(e,t){super("vec4"),this.method=e,this.node=t}setup(){const{method:e,node:t}=this;return e===En.LINEAR_TO_LINEAR?t:OT[e]({value:t})}}En.LINEAR_TO_LINEAR="LinearToLinear";En.LINEAR_TO_sRGB="LinearTosRGB";En.sRGB_TO_LINEAR="sRGBToLinear";const OT={[En.LINEAR_TO_sRGB]:UT,[En.sRGB_TO_LINEAR]:DT},FT=(i,e)=>pe(new En(Of(ri,e),pe(i))),Ff=(i,e)=>pe(new En(Of(e,ri),pe(i))),VT=k(En,En.LINEAR_TO_sRGB),zT=k(En,En.sRGB_TO_LINEAR);z("linearTosRGB",VT);z("sRGBToLinear",zT);z("linearToColorSpace",FT);z("colorSpaceToLinear",Ff);te("ColorSpaceNode",En);class Vf extends Ue{constructor(e="",t="void"){super(t),this.snippet=e}generate(e,t){const n=this.getNodeType(e),s=this.snippet;if(n==="void")e.addLineFlowCode(s);else return e.format(`( ${s} )`,n,t)}}const ba=k(Vf);te("ExpressionNode",Vf);class zf extends bs{constructor(e){super(0),this.textureNode=e,this.updateType=Tt.FRAME}get texture(){return this.textureNode.value}update(){const e=this.texture,t=e.images,n=t&&t.length>0?t[0]&&t[0].image||t[0]:e.image;if(n&&n.width!==void 0){const{width:s,height:o}=n;this.value=Math.log2(Math.max(s,o))}}}const BT=k(zf);te("MaxMipLevelNode",zf);class Cs extends bs{constructor(e,t=null,n=null){super(e),this.isTextureNode=!0,this.uvNode=t,this.levelNode=n,this.compareNode=null,this.depthNode=null,this.gradNode=null,this.sampler=!0,this.updateMatrix=!1,this.updateType=Tt.NONE,this.referenceNode=null,this._value=e,this.setUpdateMatrix(t===null)}set value(e){this.referenceNode?this.referenceNode.value=e:this._value=e}get value(){return this.referenceNode?this.referenceNode.value:this._value}getUniformHash(){return this.value.uuid}getNodeType(){return this.value.isDepthTexture===!0?"float":"vec4"}getInputType(){return"texture"}getDefaultUV(){return xi(this.value.channel)}updateReference(){return this.value}getTransformedUV(e){const t=this.value;return rt(t.matrix).mul(L(e,1)).xy}setUpdateMatrix(e){return this.updateMatrix=e,this.updateType=e?Tt.FRAME:Tt.NONE,this}setupUV(e,t){const n=this.value;return e.isFlipY()&&(n.isRenderTargetTexture===!0||n.isFramebufferTexture===!0||n.isDepthTexture===!0)&&(t=t.setY(t.y.oneMinus())),t}setup(e){const t=e.getNodeProperties(this);let n=this.uvNode;(n===null||e.context.forceUVContext===!0)&&e.context.getUV&&(n=e.context.getUV(this)),n||(n=this.getDefaultUV()),this.updateMatrix===!0&&(n=this.getTransformedUV(n)),n=this.setupUV(e,n);let s=this.levelNode;s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),t.uvNode=n,t.levelNode=s,t.compareNode=this.compareNode,t.gradNode=this.gradNode,t.depthNode=this.depthNode}generateUV(e,t){return t.build(e,this.sampler===!0?"vec2":"ivec2")}generateSnippet(e,t,n,s,o,r,a){const c=this.value;let l;return s?l=e.generateTextureLevel(c,t,n,s,o):a?l=e.generateTextureGrad(c,t,n,a,o):r?l=e.generateTextureCompare(c,t,n,r,o):this.sampler===!1?l=e.generateTextureLoad(c,t,n,o):l=e.generateTexture(c,t,n,o),l}generate(e,t){const n=e.getNodeProperties(this),s=this.value;if(!s||s.isTexture!==!0)throw new Error("TextureNode: Need a three.js texture.");const o=super.generate(e,"property");if(t==="sampler")return o+"_sampler";if(e.isReference(t))return o;{const r=e.getDataFromNode(this);let a=r.propertyName;if(a===void 0){const{uvNode:u,levelNode:h,compareNode:d,depthNode:p,gradNode:g}=n,x=this.generateUV(e,u),m=h?h.build(e,"float"):null,f=p?p.build(e,"int"):null,E=d?d.build(e,"float"):null,y=g?[g[0].build(e,"vec2"),g[1].build(e,"vec2")]:null,A=e.getVarFromNode(this);a=e.getPropertyName(A);const V=this.generateSnippet(e,o,x,m,f,E,y);e.addLineFlowCode(`${a} = ${V}`),e.context.tempWrite!==!1&&(r.snippet=V,r.propertyName=a)}let c=a;const l=this.getNodeType(e);return e.needsColorSpaceToLinear(s)&&(c=Ff(ba(c,l),s.colorSpace).setup(e).build(e,l)),e.format(c,l,t)}}setSampler(e){return this.sampler=e,this}getSampler(){return this.sampler}uv(e){const t=this.clone();return t.uvNode=e,t.referenceNode=this,pe(t)}blur(e){const t=this.clone();return t.levelNode=e.mul(BT(t)),t.referenceNode=this,pe(t)}level(e){const t=this.clone();return t.levelNode=e,t.referenceNode=this,t}size(e){return Xl(this,e)}compare(e){const t=this.clone();return t.compareNode=pe(e),t.referenceNode=this,pe(t)}grad(e,t){const n=this.clone();return n.gradNode=[pe(e),pe(t)],n.referenceNode=this,pe(n)}depth(e){const t=this.clone();return t.depthNode=pe(e),t.referenceNode=this,pe(t)}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}update(){const e=this.value;e.matrixAutoUpdate===!0&&e.updateMatrix()}clone(){const e=new this.constructor(this.value,this.uvNode,this.levelNode);return e.sampler=this.sampler,e}}const Dn=k(Cs),vs=(...i)=>Dn(...i).setSampler(!1);z("texture",Dn);te("TextureNode",Cs);class Ra extends bs{constructor(e,t,n=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferCount=n}getElementType(e){return this.getNodeType(e)}getInputType(){return"buffer"}}const Yl=(i,e,t)=>pe(new Ra(i,e,t));te("BufferNode",Ra);class HT extends Ao{constructor(e,t){super(e,t),this.isArrayBufferElementNode=!0}getNodeType(e){return this.node.getElementType(e)}generate(e){const t=super.generate(e),n=this.getNodeType();return e.format(t,"vec4",n)}}class Bf extends Ra{constructor(e,t=null){super(null,"vec4"),this.array=e,this.elementType=t,this._elementType=null,this._elementLength=0,this.updateType=Tt.RENDER,this.isArrayBufferNode=!0}getElementType(){return this.elementType||this._elementType}getElementLength(){return this._elementLength}update(){const{array:e,value:t}=this,n=this.getElementLength(),s=this.getElementType();if(n===1)for(let o=0;o<e.length;o++){const r=o*4;t[r]=e[o]}else if(s==="color")for(let o=0;o<e.length;o++){const r=o*4,a=e[o];t[r]=a.r,t[r+1]=a.g,t[r+2]=a.b||0}else for(let o=0;o<e.length;o++){const r=o*4,a=e[o];t[r]=a.x,t[r+1]=a.y,t[r+2]=a.z||0,t[r+3]=a.w||0}}setup(e){const t=this.array.length;return this._elementType=this.elementType===null?ji(this.array[0]):this.elementType,this._elementLength=e.getTypeLength(this._elementType),this.value=new Float32Array(t*4),this.bufferCount=t,super.setup(e)}element(e){return pe(new HT(this,pe(e)))}}const Qc=(i,e)=>pe(new Bf(i,e));te("UniformsNode",Bf);class kT extends Ao{constructor(e,t){super(e,t),this.referenceNode=e,this.isReferenceElementNode=!0}getNodeType(){return this.referenceNode.uniformType}generate(e){const t=super.generate(e),n=this.referenceNode.getNodeType(),s=this.getNodeType();return e.format(t,n,s)}}class bo extends Ue{constructor(e,t,n=null,s=null){super(),this.property=e,this.uniformType=t,this.object=n,this.count=s,this.properties=e.split("."),this.reference=null,this.node=null,this.updateType=Tt.OBJECT}element(e){return pe(new kT(this,pe(e)))}setNodeType(e){let t=null;this.count!==null?t=Yl(null,e,this.count):Array.isArray(this.getValueFromReference())?t=Qc(null,e):e==="texture"?t=Dn(null):t=rt(null,e),this.node=t}getNodeType(e){return this.node===null&&this.updateValue(),this.node.getNodeType(e)}getValueFromReference(e=this.reference){const{properties:t}=this;let n=e[t[0]];for(let s=1;s<t.length;s++)n=n[t[s]];return n}updateReference(e){return this.reference=this.object!==null?this.object:e.object,this.reference}setup(){return this.updateValue(),this.node}update(){this.updateValue()}updateValue(){this.node===null&&this.setNodeType(this.uniformType);const e=this.getValueFromReference();Array.isArray(e)?this.node.array=e:this.node.value=e}}const si=(i,e,t)=>pe(new bo(i,e,t)),GT=(i,e,t,n)=>pe(new bo(i,e,n,t));te("ReferenceNode",bo);class Hf extends bo{constructor(e,t,n=null){super(e,t,n),this.material=n}updateReference(e){return this.reference=this.material!==null?this.material:e.material,this.reference}}const Ci=(i,e,t)=>pe(new Hf(i,e,t));te("MaterialReferenceNode",Hf);const yc=rt("float").onRenderUpdate(({camera:i})=>i.near),Mc=rt("float").onRenderUpdate(({camera:i})=>i.far),WT=rt("float").onRenderUpdate(({camera:i})=>2/(Math.log(i.far+1)/Math.LN2)),li=rt("mat4").onRenderUpdate(({camera:i})=>i.projectionMatrix),Ro=rt("mat4").onRenderUpdate(({camera:i})=>i.matrixWorldInverse),kf=rt(new D).onRenderUpdate(({camera:i},e)=>e.value.setFromMatrixPosition(i.matrixWorld));class He extends Ue{constructor(e=He.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=Tt.OBJECT,this._uniformNode=new bs(null)}getNodeType(){const e=this.scope;if(e===He.WORLD_MATRIX||e===He.VIEW_MATRIX)return"mat4";if(e===He.NORMAL_MATRIX)return"mat3";if(e===He.POSITION||e===He.VIEW_POSITION||e===He.DIRECTION||e===He.SCALE)return"vec3"}update(e){const t=this.object3d,n=this._uniformNode,s=this.scope;if(s===He.VIEW_MATRIX)n.value=t.modelViewMatrix;else if(s===He.NORMAL_MATRIX)n.value=t.normalMatrix;else if(s===He.WORLD_MATRIX)n.value=t.matrixWorld;else if(s===He.POSITION)n.value=n.value||new D,n.value.setFromMatrixPosition(t.matrixWorld);else if(s===He.SCALE)n.value=n.value||new D,n.value.setFromMatrixScale(t.matrixWorld);else if(s===He.DIRECTION)n.value=n.value||new D,t.getWorldDirection(n.value);else if(s===He.VIEW_POSITION){const o=e.camera;n.value=n.value||new D,n.value.setFromMatrixPosition(t.matrixWorld),n.value.applyMatrix4(o.matrixWorldInverse)}}generate(e){const t=this.scope;return t===He.WORLD_MATRIX||t===He.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===He.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":(t===He.POSITION||t===He.VIEW_POSITION||t===He.DIRECTION||t===He.SCALE)&&(this._uniformNode.nodeType="vec3"),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}He.VIEW_MATRIX="viewMatrix";He.NORMAL_MATRIX="normalMatrix";He.WORLD_MATRIX="worldMatrix";He.POSITION="position";He.SCALE="scale";He.VIEW_POSITION="viewPosition";He.DIRECTION="direction";k(He,He.DIRECTION);k(He,He.VIEW_MATRIX);k(He,He.NORMAL_MATRIX);k(He,He.WORLD_MATRIX);const el=k(He,He.POSITION);k(He,He.SCALE);const Gf=k(He,He.VIEW_POSITION);te("Object3DNode",He);class cn extends He{constructor(e=cn.VIEW_MATRIX){super(e)}update(e){this.object3d=e.object,super.update(e)}}he(cn,cn.DIRECTION);const As=he(cn,cn.VIEW_MATRIX).label("modelViewMatrix").temp("ModelViewMatrix"),Wf=he(cn,cn.NORMAL_MATRIX),$o=he(cn,cn.WORLD_MATRIX);he(cn,cn.POSITION);he(cn,cn.SCALE);he(cn,cn.VIEW_POSITION);const XT=rt(new At).onObjectUpdate(({object:i},e)=>e.value.copy(i.matrixWorld).invert());te("ModelNode",cn);const la=nn("normal","vec3",L(0,1,0)),oi=la.toVar("normalLocal"),ns=Wt(Wf.mul(oi),"v_normalView").normalize().toVar("normalView"),qT=Wt(ns.transformDirection(Ro),"v_normalWorld").normalize().toVar("transformedNormalWorld"),Ot=Rt("vec3","transformedNormalView"),Xf=Ot.transformDirection(Ro).normalize().toVar("transformedNormalWorld"),eo=Rt("vec3","transformedClearcoatNormalView"),Hh=new Map;class K extends Ue{constructor(e){super(),this.scope=e}getCache(e,t){let n=Hh.get(e);return n===void 0&&(n=Ci(e,t),Hh.set(e,n)),n}getFloat(e){return this.getCache(e,"float")}getColor(e){return this.getCache(e,"color")}getTexture(e){return this.getCache(e==="map"?"map":e+"Map","texture")}setup(e){const t=e.context.material,n=this.scope;let s=null;if(n===K.COLOR){const o=this.getColor(n);t.map&&t.map.isTexture===!0?s=o.mul(this.getTexture("map")):s=o}else if(n===K.OPACITY){const o=this.getFloat(n);t.alphaMap&&t.alphaMap.isTexture===!0?s=o.mul(this.getTexture("alpha")):s=o}else if(n===K.SPECULAR_STRENGTH)t.specularMap&&t.specularMap.isTexture===!0?s=this.getTexture("specular").r:s=w(1);else if(n===K.SPECULAR_INTENSITY){const o=this.getFloat(n);t.specularMap?s=o.mul(this.getTexture(n).a):s=o}else if(n===K.SPECULAR_COLOR){const o=this.getColor(n);t.specularColorMap&&t.specularColorMap.isTexture===!0?s=o.mul(this.getTexture(n).rgb):s=o}else if(n===K.ROUGHNESS){const o=this.getFloat(n);t.roughnessMap&&t.roughnessMap.isTexture===!0?s=o.mul(this.getTexture(n).g):s=o}else if(n===K.METALNESS){const o=this.getFloat(n);t.metalnessMap&&t.metalnessMap.isTexture===!0?s=o.mul(this.getTexture(n).b):s=o}else if(n===K.EMISSIVE){const o=this.getColor(n);t.emissiveMap&&t.emissiveMap.isTexture===!0?s=o.mul(this.getTexture(n)):s=o}else if(n===K.NORMAL)t.normalMap?s=this.getTexture("normal").normalMap(this.getCache("normalScale","vec2")):t.bumpMap?s=this.getTexture("bump").r.bumpMap(this.getFloat("bumpScale")):s=ns;else if(n===K.CLEARCOAT){const o=this.getFloat(n);t.clearcoatMap&&t.clearcoatMap.isTexture===!0?s=o.mul(this.getTexture(n).r):s=o}else if(n===K.CLEARCOAT_ROUGHNESS){const o=this.getFloat(n);t.clearcoatRoughnessMap&&t.clearcoatRoughnessMap.isTexture===!0?s=o.mul(this.getTexture(n).r):s=o}else if(n===K.CLEARCOAT_NORMAL)t.clearcoatNormalMap?s=this.getTexture(n).normalMap(this.getCache(n+"Scale","vec2")):s=ns;else if(n===K.SHEEN){const o=this.getColor("sheenColor").mul(this.getFloat("sheen"));t.sheenColorMap&&t.sheenColorMap.isTexture===!0?s=o.mul(this.getTexture("sheenColor").rgb):s=o}else if(n===K.SHEEN_ROUGHNESS){const o=this.getFloat(n);t.sheenRoughnessMap&&t.sheenRoughnessMap.isTexture===!0?s=o.mul(this.getTexture(n).a):s=o,s=s.clamp(.07,1)}else if(n===K.ANISOTROPY)if(t.anisotropyMap&&t.anisotropyMap.isTexture===!0){const o=this.getTexture(n);s=Vl(zo.x,zo.y,zo.y.negate(),zo.x).mul(o.rg.mul(2).sub(Ee(1)).normalize().mul(o.b))}else s=zo;else if(n===K.IRIDESCENCE_THICKNESS){const o=si("1","float",t.iridescenceThicknessRange);if(t.iridescenceThicknessMap){const r=si("0","float",t.iridescenceThicknessRange);s=o.sub(r).mul(this.getTexture(n).g).add(r)}else s=o}else if(n===K.TRANSMISSION){const o=this.getFloat(n);t.transmissionMap?s=o.mul(this.getTexture(n).r):s=o}else if(n===K.THICKNESS){const o=this.getFloat(n);t.thicknessMap?s=o.mul(this.getTexture(n).g):s=o}else if(n===K.IOR)s=this.getFloat(n);else{const o=this.getNodeType(e);s=this.getCache(n,o)}return s}}K.ALPHA_TEST="alphaTest";K.COLOR="color";K.OPACITY="opacity";K.SHININESS="shininess";K.SPECULAR="specular";K.SPECULAR_STRENGTH="specularStrength";K.SPECULAR_INTENSITY="specularIntensity";K.SPECULAR_COLOR="specularColor";K.REFLECTIVITY="reflectivity";K.ROUGHNESS="roughness";K.METALNESS="metalness";K.NORMAL="normal";K.CLEARCOAT="clearcoat";K.CLEARCOAT_ROUGHNESS="clearcoatRoughness";K.CLEARCOAT_NORMAL="clearcoatNormal";K.EMISSIVE="emissive";K.ROTATION="rotation";K.SHEEN="sheen";K.SHEEN_ROUGHNESS="sheenRoughness";K.ANISOTROPY="anisotropy";K.IRIDESCENCE="iridescence";K.IRIDESCENCE_IOR="iridescenceIOR";K.IRIDESCENCE_THICKNESS="iridescenceThickness";K.IOR="ior";K.TRANSMISSION="transmission";K.THICKNESS="thickness";K.ATTENUATION_DISTANCE="attenuationDistance";K.ATTENUATION_COLOR="attenuationColor";K.LINE_SCALE="scale";K.LINE_DASH_SIZE="dashSize";K.LINE_GAP_SIZE="gapSize";K.LINE_WIDTH="linewidth";K.LINE_DASH_OFFSET="dashOffset";K.POINT_WIDTH="pointWidth";K.DISPERSION="dispersion";const YT=he(K,K.ALPHA_TEST),Ko=he(K,K.COLOR),jT=he(K,K.SHININESS),$T=he(K,K.EMISSIVE),qf=he(K,K.OPACITY),KT=he(K,K.SPECULAR),kh=he(K,K.SPECULAR_INTENSITY),ZT=he(K,K.SPECULAR_COLOR),JT=he(K,K.SPECULAR_STRENGTH);he(K,K.REFLECTIVITY);const QT=he(K,K.ROUGHNESS),eE=he(K,K.METALNESS),tE=he(K,K.NORMAL),nE=he(K,K.CLEARCOAT),iE=he(K,K.CLEARCOAT_ROUGHNESS),sE=he(K,K.CLEARCOAT_NORMAL),oE=he(K,K.ROTATION),rE=he(K,K.SHEEN),aE=he(K,K.SHEEN_ROUGHNESS),cE=he(K,K.ANISOTROPY),lE=he(K,K.IRIDESCENCE),uE=he(K,K.IRIDESCENCE_IOR),hE=he(K,K.IRIDESCENCE_THICKNESS),dE=he(K,K.TRANSMISSION),fE=he(K,K.THICKNESS),pE=he(K,K.IOR),mE=he(K,K.ATTENUATION_DISTANCE),gE=he(K,K.ATTENUATION_COLOR),tl=he(K,K.LINE_SCALE),Yf=he(K,K.LINE_DASH_SIZE),jf=he(K,K.LINE_GAP_SIZE),Sc=he(K,K.LINE_WIDTH),Gh=he(K,K.LINE_DASH_OFFSET),_E=he(K,K.POINT_WIDTH),xE=he(K,K.DISPERSION),zo=rt(new Te).onReference(function(i){return i.material}).onRenderUpdate(function({material:i}){this.value.set(i.anisotropy*Math.cos(i.anisotropyRotation),i.anisotropy*Math.sin(i.anisotropyRotation))});te("MaterialNode",K);const xn=nn("position","vec3"),rn=xn.toVar("positionLocal"),nl=Wt($o.mul(rn).xyz,"v_positionWorld"),vE=Wt(rn.transformDirection($o),"v_positionWorldDirection").normalize().toVar("positionWorldDirection"),Ln=Wt(As.mul(rn).xyz,"v_positionView"),Ct=Wt(Ln.negate(),"v_positionViewDirection").normalize().toVar("positionViewDirection");class $f extends yt{constructor(e=null){super("vec4"),this.positionNode=e}setup(e){if(e.shaderStage==="fragment")return Wt(e.context.mvp);const t=this.positionNode||rn;return li.mul(As).mul(t)}}const Wh=k($f);te("ModelViewProjectionNode",$f);class Kf extends Ma{constructor(e,t=null,n=0,s=0){super(e,t),this.isBufferNode=!0,this.bufferType=t,this.bufferStride=n,this.bufferOffset=s,this.usage=ta,this.instanced=!1,this.attribute=null,e&&e.isBufferAttribute===!0&&(this.attribute=e,this.usage=e.usage,this.instanced=e.isInstancedBufferAttribute)}getNodeType(e){return this.bufferType===null&&(this.bufferType=e.getTypeFromAttribute(this.attribute)),this.bufferType}setup(e){if(this.attribute!==null)return;const t=this.getNodeType(e),n=this.value,s=e.getTypeLength(t),o=this.bufferStride||s,r=this.bufferOffset,a=n.isInterleavedBuffer===!0?n:new jd(n,o),c=new Ll(a,s,r);a.setUsage(this.usage),this.attribute=c,this.attribute.isInstancedBufferAttribute=this.instanced}generate(e){const t=this.getNodeType(e),n=e.getBufferAttributeFromNode(this,t),s=e.getPropertyName(n);let o=null;return e.shaderStage==="vertex"||e.shaderStage==="compute"?(this.name=s,o=s):o=Wt(this).build(e,t),o}getInputType(){return"bufferAttribute"}setUsage(e){return this.usage=e,this}setInstanced(e){return this.instanced=e,this}}const Ca=(i,e,t,n)=>pe(new Kf(i,e,t,n)),yE=(i,e,t,n)=>Ca(i,e,t,n).setUsage(Wc),Xh=(i,e,t,n)=>Ca(i,e,t,n).setInstanced(!0),qh=(i,e,t,n)=>yE(i,e,t,n).setInstanced(!0);z("toAttribute",i=>Ca(i.value));te("BufferAttributeNode",Kf);class Zf extends Ue{constructor(e){super("void"),this.instanceMesh=e,this.instanceMatrixNode=null,this.instanceColorNode=null}setup(){let e=this.instanceMatrixNode;const t=this.instanceMesh;if(e===null){const c=t.instanceMatrix,l=new YM(c.array,16,1),u=c.usage===Wc?qh:Xh,h=[u(l,"vec4",16,0),u(l,"vec4",16,4),u(l,"vec4",16,8),u(l,"vec4",16,12)];e=ro(...h),this.instanceMatrixNode=e}const n=t.instanceColor;if(n&&this.instanceColorNode===null){const c=new LM(n.array,3),l=n.usage===Wc?qh:Xh;this.instanceColorNode=L(l(c,"vec3",3,0))}const s=e.mul(rn).xyz,o=ii(e[0].xyz,e[1].xyz,e[2].xyz),r=oi.div(L(o[0].dot(o[0]),o[1].dot(o[1]),o[2].dot(o[2]))),a=o.mul(r).xyz;rn.assign(s),oi.assign(a),this.instanceColorNode!==null&&ai("vec3","vInstanceColor").assign(this.instanceColorNode)}}const ME=k(Zf);te("InstanceNode",Zf);const Jf=$((i,e)=>(e.geometry.hasAttribute("tangent")===!1&&e.geometry.computeTangents(),nn("tangent","vec4")))(),jl=Jf.xyz.toVar("tangentLocal"),Qf=Wt(As.mul(Se(jl,0)).xyz,"v_tangentView").normalize().toVar("tangentView");class ep extends Ue{constructor(e){super("void"),this.batchMesh=e,this.instanceColorNode=null,this.batchingIdNode=null}setup(e){this.batchingIdNode===null&&(this.batchingIdNode=nn("batchId"));const t=this.batchMesh._matricesTexture,n=Xl(vs(t),0),s=w(C(this.batchingIdNode)).mul(4).toVar(),o=C(s.mod(n)),r=C(s).div(C(n)),a=ro(vs(t,Ms(o,r)),vs(t,Ms(o.add(1),r)),vs(t,Ms(o.add(2),r)),vs(t,Ms(o.add(3),r))),c=ii(a[0].xyz,a[1].xyz,a[2].xyz);rn.assign(a.mul(rn));const l=oi.div(L(c[0].dot(c[0]),c[1].dot(c[1]),c[2].dot(c[2]))),u=c.mul(l).xyz;oi.assign(u),e.hasGeometryAttribute("tangent")&&jl.mulAssign(c)}}const SE=k(ep);te("batch",ep);class tp extends Ue{constructor(e,t=!1){super("void"),this.skinnedMesh=e,this.useReference=t,this.updateType=Tt.OBJECT,this.skinIndexNode=nn("skinIndex","uvec4"),this.skinWeightNode=nn("skinWeight","vec4");let n,s,o;t?(n=si("bindMatrix","mat4"),s=si("bindMatrixInverse","mat4"),o=GT("skeleton.boneMatrices","mat4",e.skeleton.bones.length)):(n=rt(e.bindMatrix,"mat4"),s=rt(e.bindMatrixInverse,"mat4"),o=Yl(e.skeleton.boneMatrices,"mat4",e.skeleton.bones.length)),this.bindMatrixNode=n,this.bindMatrixInverseNode=s,this.boneMatricesNode=o}setup(e){const{skinIndexNode:t,skinWeightNode:n,bindMatrixNode:s,bindMatrixInverseNode:o,boneMatricesNode:r}=this,a=r.element(t.x),c=r.element(t.y),l=r.element(t.z),u=r.element(t.w),h=s.mul(rn),d=Un(a.mul(n.x).mul(h),c.mul(n.y).mul(h),l.mul(n.z).mul(h),u.mul(n.w).mul(h)),p=o.mul(d).xyz;let g=Un(n.x.mul(a),n.y.mul(c),n.z.mul(l),n.w.mul(u));g=o.mul(g).mul(s);const x=g.transformDirection(oi).xyz;rn.assign(p),oi.assign(x),e.hasGeometryAttribute("tangent")&&jl.assign(x)}generate(e,t){if(t!=="void")return rn.build(e,t)}update(e){(this.useReference?e.object:this.skinnedMesh).skeleton.update()}}const TE=i=>pe(new tp(i,!0));te("SkinningNode",tp);class np extends Ue{constructor(e=[]){super(),this.params=e}getVarName(e){return String.fromCharCode(105+e)}getProperties(e){const t=e.getNodeProperties(this);if(t.stackNode!==void 0)return t;const n={};for(let s=0,o=this.params.length-1;s<o;s++){const r=this.params[s],a=r.isNode!==!0&&r.name||this.getVarName(s),c=r.isNode!==!0&&r.type||"int";n[a]=ba(a,c)}return t.returnsNode=this.params[this.params.length-1](n,e.addStack(),e),t.stackNode=e.removeStack(),t}getNodeType(e){const{returnsNode:t}=this.getProperties(e);return t?t.getNodeType(e):"void"}setup(e){this.getProperties(e)}generate(e){const t=this.getProperties(e),n={tempWrite:!1},s=this.params,o=t.stackNode;for(let c=0,l=s.length-1;c<l;c++){const u=s[c];let h=null,d=null,p=null,g=null,x=null,m=null;u.isNode?(g="int",p=this.getVarName(c),h="0",d=u.build(e,g),x="<"):(g=u.type||"int",p=u.name||this.getVarName(c),h=u.start,d=u.end,x=u.condition,m=u.update,typeof h=="number"?h=h.toString():h&&h.isNode&&(h=h.build(e,g)),typeof d=="number"?d=d.toString():d&&d.isNode&&(d=d.build(e,g)),h!==void 0&&d===void 0?(h=h+" - 1",d="0",x=">="):d!==void 0&&h===void 0&&(h="0",x="<"),x===void 0&&(Number(h)>Number(d)?x=">=":x="<"));const f={start:h,end:d,condition:x},E=f.start,y=f.end;let A="",V="",R="";m||(g==="int"||g==="uint"?x.includes("<")?m="++":m="--":x.includes("<")?m="+= 1.":m="-= 1."),A+=e.getVar(g,p)+" = "+E,V+=p+" "+x+" "+y,R+=p+" "+m;const N=`for ( ${A}; ${V}; ${R} )`;e.addFlowCode((c===0?`
`:"")+e.tab+N+` {

`).addFlowTab()}const r=Pi(o,n).build(e,"void"),a=t.returnsNode?t.returnsNode.build(e):"";e.removeFlowTab().addFlowCode(`
`+e.tab+r);for(let c=0,l=this.params.length-1;c<l;c++)e.addFlowCode((c===0?"":e.tab)+`}

`).removeFlowTab();return e.addFlowTab(),a}}const vt=(...i)=>pe(new np(oo(i,"int"))).append(),ip=()=>ba("break").append();z("loop",(i,...e)=>pf(i,vt(...e)));te("LoopNode",np);const Tc=new WeakMap,Cn=new at,Yh=$(({bufferMap:i,influence:e,stride:t,width:n,depth:s,offset:o})=>{const r=C(US).mul(t).add(o),a=r.div(n),c=r.sub(a.mul(n));return vs(i,Ms(c,a)).depth(s).mul(e)});function EE(i){const e=i.morphAttributes.position!==void 0,t=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,s=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,o=s!==void 0?s.length:0;let r=Tc.get(i);if(r===void 0||r.count!==o){let E=function(){m.dispose(),Tc.delete(i),i.removeEventListener("dispose",E)};var a=E;r!==void 0&&r.texture.dispose();const c=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],u=i.morphAttributes.color||[];let h=0;e===!0&&(h=1),t===!0&&(h=2),n===!0&&(h=3);let d=i.attributes.position.count*h,p=1;const g=4096;d>g&&(p=Math.ceil(d/g),d=g);const x=new Float32Array(d*p*4*o),m=new Al(x,d,p,o);m.type=Ri,m.needsUpdate=!0;const f=h*4;for(let y=0;y<o;y++){const A=c[y],V=l[y],R=u[y],N=d*p*4*y;for(let F=0;F<A.count;F++){const T=F*f;e===!0&&(Cn.fromBufferAttribute(A,F),x[N+T+0]=Cn.x,x[N+T+1]=Cn.y,x[N+T+2]=Cn.z,x[N+T+3]=0),t===!0&&(Cn.fromBufferAttribute(V,F),x[N+T+4]=Cn.x,x[N+T+5]=Cn.y,x[N+T+6]=Cn.z,x[N+T+7]=0),n===!0&&(Cn.fromBufferAttribute(R,F),x[N+T+8]=Cn.x,x[N+T+9]=Cn.y,x[N+T+10]=Cn.z,x[N+T+11]=R.itemSize===4?Cn.w:1)}}r={count:o,texture:m,stride:h,size:new Te(d,p)},Tc.set(i,r),i.addEventListener("dispose",E)}return r}class sp extends Ue{constructor(e){super("void"),this.mesh=e,this.morphBaseInfluence=rt(1),this.updateType=Tt.OBJECT}setup(e){const{geometry:t}=e,n=t.morphAttributes.position!==void 0,s=t.morphAttributes.normal!==void 0,o=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,r=o!==void 0?o.length:0,{texture:a,stride:c,size:l}=EE(t);n===!0&&rn.mulAssign(this.morphBaseInfluence),s===!0&&oi.mulAssign(this.morphBaseInfluence);const u=C(l.width);vt(r,({i:h})=>{const d=w(0).toVar();this.mesh.isInstancedMesh===!0&&this.mesh.morphTexture!==null&&this.mesh.morphTexture!==void 0?d.assign(vs(this.mesh.morphTexture,Ms(C(h).add(1),C(gf))).r):d.assign(si("morphTargetInfluences","float").element(h).toVar()),n===!0&&rn.addAssign(Yh({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(0)})),s===!0&&oi.addAssign(Yh({bufferMap:a,influence:d,stride:c,width:u,depth:h,offset:C(1)}))})}update(){const e=this.morphBaseInfluence;this.mesh.geometry.morphTargetsRelative?e.value=1:e.value=1-this.mesh.morphTargetInfluences.reduce((t,n)=>t+n,0)}}const AE=k(sp);te("MorphNode",sp);const NE=Ct.negate().reflect(Ot),wE=NE.transformDirection(Ro).toVar("reflectVector");class op extends Cs{constructor(e,t=null,n=null){super(e,t,n),this.isCubeTextureNode=!0}getInputType(){return"cubeTexture"}getDefaultUV(){return wE}setUpdateMatrix(){}setupUV(e,t){const n=this.value;return e.renderer.coordinateSystem===xo||!n.isRenderTargetTexture?L(t.x.negate(),t.yz):t}generateUV(e,t){return t.build(e,"vec3")}}const rp=k(op);z("cubeTexture",rp);te("CubeTextureNode",op);class rr extends Ue{constructor(){super("vec3")}generate(){console.warn("Abstract function.")}}te("LightingNode",rr);let Bo=null;class Ls extends rr{constructor(e=null){super(),this.updateType=Tt.FRAME,this.light=e,this.rtt=null,this.shadowNode=null,this.shadowMaskNode=null,this.color=new Fe,this._defaultColorNode=rt(this.color),this.colorNode=this._defaultColorNode,this.isAnalyticLightNode=!0}getCacheKey(){return super.getCacheKey()+"-"+(this.light.id+"-"+(this.light.castShadow?"1":"0"))}getHash(){return this.light.uuid}setupShadow(e){const{object:t}=e;if(t.receiveShadow===!1)return;let n=this.shadowNode;if(n===null){Bo===null&&(Bo=e.createNodeMaterial(),Bo.fragmentNode=Se(0,0,0,1),Bo.isShadowNodeMaterial=!0);const s=this.light.shadow,o=e.createRenderTarget(s.mapSize.width,s.mapSize.height),r=new ir;r.minFilter=hn,r.magFilter=hn,r.image.width=s.mapSize.width,r.image.height=s.mapSize.height,r.compareFunction=Cd,o.depthTexture=r,s.camera.updateProjectionMatrix();const a=si("bias","float",s),c=si("normalBias","float",s),l=t.material.shadowPositionNode||nl;let u=rt(s.matrix).mul(l.add(qT.mul(c)));u=u.xyz.div(u.w);const h=u.x.greaterThanEqual(0).and(u.x.lessThanEqual(1)).and(u.y.greaterThanEqual(0)).and(u.y.lessThanEqual(1)).and(u.z.lessThanEqual(1));let d=u.z.add(a);e.renderer.coordinateSystem===xo&&(d=d.mul(2).sub(1)),u=L(u.x,u.y.oneMinus(),d),n=((m,f,E)=>Dn(m,f).compare(E))(r,u.xy,u.z);const g=Dn(o.texture,u),x=h.mix(1,n.mix(g.a.mix(1,g),1));this.rtt=o,this.colorNode=this.colorNode.mul(x),this.shadowNode=n,this.shadowMaskNode=x,this.updateBeforeType=Tt.RENDER}}setup(e){this.light.castShadow?this.setupShadow(e):this.shadowNode!==null&&this.disposeShadow()}updateShadow(e){const{rtt:t,light:n}=this,{renderer:s,scene:o,camera:r}=e,a=o.overrideMaterial;o.overrideMaterial=Bo,t.setSize(n.shadow.mapSize.width,n.shadow.mapSize.height),n.shadow.updateMatrices(n),n.shadow.camera.layers.mask=r.layers.mask;const c=s.toneMapping,l=s.getRenderTarget(),u=s.getRenderObjectFunction();s.setRenderObjectFunction((h,...d)=>{h.castShadow===!0&&s.renderObject(h,...d)}),s.setRenderTarget(t),s.toneMapping=In,s.render(o,n.shadow.camera),s.setRenderTarget(l),s.setRenderObjectFunction(u),s.toneMapping=c,o.overrideMaterial=a}disposeShadow(){this.rtt.dispose(),this.shadowNode=null,this.shadowMaskNode=null,this.rtt=null,this.colorNode=this._defaultColorNode}updateBefore(e){const{light:t}=this;t.castShadow&&this.updateShadow(e)}update(){const{light:e}=this;this.color.copy(e.color).multiplyScalar(e.intensity)}}te("AnalyticLightNode",Ls);const ua=new WeakMap,bE=i=>i.sort((e,t)=>e.id-t.id);class RE extends Ue{constructor(e=[]){super("vec3"),this.totalDiffuseNode=L().temp("totalDiffuse"),this.totalSpecularNode=L().temp("totalSpecular"),this.outgoingLightNode=L().temp("outgoingLight"),this.lightNodes=e,this._hash=null}get hasLight(){return this.lightNodes.length>0}getHash(){if(this._hash===null){const e=[];for(const t of this.lightNodes)e.push(t.getHash());this._hash="lights-"+e.join(",")}return this._hash}analyze(e){const t=e.getDataFromNode(this);for(const n of t.nodes)n.build(e)}setup(e){const t=e.context,n=t.lightingModel;let s=this.outgoingLightNode;if(n){const{lightNodes:o,totalDiffuseNode:r,totalSpecularNode:a}=this;t.outgoingLight=s;const c=e.addStack(),l=e.getDataFromNode(this);l.nodes=c.nodes,n.start(t,c,e);for(const f of o)f.build(e);n.indirectDiffuse(t,c,e),n.indirectSpecular(t,c,e),n.ambientOcclusion(t,c,e);const{backdrop:u,backdropAlpha:h}=t,{directDiffuse:d,directSpecular:p,indirectDiffuse:g,indirectSpecular:x}=t.reflectedLight;let m=d.add(g);u!==null&&(h!==null?m=L(h.mix(m,u)):m=L(u),t.material.transparent=!0),r.assign(m),a.assign(p.add(x)),s.assign(r.add(a)),n.finish(t,c,e),s=s.bypass(e.removeStack())}return s}_getLightNodeById(e){for(const t of this.lightNodes)if(t.isAnalyticLightNode&&t.light.id===e)return t;return null}fromLights(e=[]){const t=[];e=bE(e);for(const n of e){let s=this._getLightNodeById(n.id);if(s===null){const o=n.constructor,r=ua.has(o)?ua.get(o):Ls;s=pe(new r(n))}t.push(s)}return this.lightNodes=t,this._hash=null,this}}const CE=k(RE);function Co(i,e){if(ua.has(i)){console.warn(`Redefinition of light node ${e.type}`);return}if(typeof i!="function")throw new Error(`Light ${i.name} is not a class`);if(typeof e!="function"||!e.type)throw new Error(`Light node ${e.type} is not a class`);ua.set(i,e)}class ap extends rr{constructor(e=null){super(),this.aoNode=e}setup(e){const n=this.aoNode.x.sub(1).mul(1).add(1);e.context.ambientOcclusion.mulAssign(n)}}te("AONode",ap);class cp extends Bl{constructor(e,t=null,n=null,s=null){super(e),this.lightingModel=t,this.backdropNode=n,this.backdropAlphaNode=s,this._context=null}getContext(){const{backdropNode:e,backdropAlphaNode:t}=this,n=L().temp("directDiffuse"),s=L().temp("directSpecular"),o=L().temp("indirectDiffuse"),r=L().temp("indirectSpecular"),a={directDiffuse:n,directSpecular:s,indirectDiffuse:o,indirectSpecular:r};return{radiance:L().temp("radiance"),irradiance:L().temp("irradiance"),iblIrradiance:L().temp("iblIrradiance"),ambientOcclusion:w(1).temp("ambientOcclusion"),reflectedLight:a,backdrop:e,backdropAlpha:t}}setup(e){return this.context=this._context||(this._context=this.getContext()),this.context.lightingModel=this.lightingModel||e.context.lightingModel,super.setup(e)}}const lp=k(cp);z("lightingContext",lp);te("LightingContextNode",cp);const LE=i=>i.mul(Jf.w).xyz,PE=Wt(LE(ns.cross(Qf)),"v_bitangentView").normalize().toVar("bitangentView"),to=ii(Qf,PE,ns);Ct.mul(to);const IE=(()=>{let i=ao.cross(Ct);return i=i.cross(ao).normalize(),i=$t(i,Ot,gs.mul($i.oneMinus()).oneMinus().pow2().pow2()).normalize(),i})();class $l extends Ue{constructor(e,t,n=null){super(),this.condNode=e,this.ifNode=t,this.elseNode=n}getNodeType(e){const t=this.ifNode.getNodeType(e);if(this.elseNode!==null){const n=this.elseNode.getNodeType(e);if(e.getTypeLength(n)>e.getTypeLength(t))return n}return t}generate(e,t){const n=this.getNodeType(e),s={tempWrite:!1},o=e.getDataFromNode(this);if(o.nodeProperty!==void 0)return o.nodeProperty;const{ifNode:r,elseNode:a}=this,c=t!=="void",l=c?Rt(n).build(e):"";o.nodeProperty=l;const u=Pi(this.condNode).build(e,"bool");e.addFlowCode(`
${e.tab}if ( ${u} ) {

`).addFlowTab();let h=Pi(r,s).build(e,n);if(h&&(c?h=l+" = "+h+";":h="return "+h+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+h+`

`+e.tab+"}"),a!==null){e.addFlowCode(` else {

`).addFlowTab();let d=Pi(a,s).build(e,n);d&&(c?d=l+" = "+d+";":d="return "+d+";"),e.removeFlowTab().addFlowCode(e.tab+"	"+d+`

`+e.tab+`}

`)}else e.addFlowCode(`

`);return e.format(l,n,t)}}const Pn=k($l);z("cond",Pn);te("CondNode",$l);const jh=w(1),il=w(-2),Gr=w(.8),Ec=w(-1),Wr=w(.4),Ac=w(2),Xr=w(.305),Nc=w(3),$h=w(.21),DE=w(4),Kh=w(4),UE=w(16),OE=$(([i])=>{const e=L(kt(i)).toVar(),t=w(-1).toVar();return Je(e.x.greaterThan(e.z),()=>{Je(e.x.greaterThan(e.y),()=>{t.assign(Pn(i.x.greaterThan(0),0,3))}).else(()=>{t.assign(Pn(i.y.greaterThan(0),1,4))})}).else(()=>{Je(e.z.greaterThan(e.y),()=>{t.assign(Pn(i.z.greaterThan(0),2,5))}).else(()=>{t.assign(Pn(i.y.greaterThan(0),1,4))})}),t}).setLayout({name:"getFace",type:"float",inputs:[{name:"direction",type:"vec3"}]}),FE=$(([i,e])=>{const t=Ee().toVar();return Je(e.equal(0),()=>{t.assign(Ee(i.z,i.y).div(kt(i.x)))}).elseif(e.equal(1),()=>{t.assign(Ee(i.x.negate(),i.z.negate()).div(kt(i.y)))}).elseif(e.equal(2),()=>{t.assign(Ee(i.x.negate(),i.y).div(kt(i.z)))}).elseif(e.equal(3),()=>{t.assign(Ee(i.z.negate(),i.y).div(kt(i.x)))}).elseif(e.equal(4),()=>{t.assign(Ee(i.x.negate(),i.z).div(kt(i.y)))}).else(()=>{t.assign(Ee(i.x,i.y).div(kt(i.z)))}),ot(.5,t.add(1))}).setLayout({name:"getUV",type:"vec2",inputs:[{name:"direction",type:"vec3"},{name:"face",type:"float"}]}),VE=$(([i])=>{const e=w(0).toVar();return Je(i.greaterThanEqual(Gr),()=>{e.assign(jh.sub(i).mul(Ec.sub(il)).div(jh.sub(Gr)).add(il))}).elseif(i.greaterThanEqual(Wr),()=>{e.assign(Gr.sub(i).mul(Ac.sub(Ec)).div(Gr.sub(Wr)).add(Ec))}).elseif(i.greaterThanEqual(Xr),()=>{e.assign(Wr.sub(i).mul(Nc.sub(Ac)).div(Wr.sub(Xr)).add(Ac))}).elseif(i.greaterThanEqual($h),()=>{e.assign(Xr.sub(i).mul(DE.sub(Nc)).div(Xr.sub($h)).add(Nc))}).else(()=>{e.assign(w(-2).mul(Na(ot(1.16,i))))}),e}).setLayout({name:"roughnessToMip",type:"float",inputs:[{name:"roughness",type:"float"}]});$(([i,e])=>{const t=i.toVar();t.assign(ot(2,t).sub(1));const n=L(t,1).toVar();return Je(e.equal(0),()=>{n.assign(n.zyx)}).elseif(e.equal(1),()=>{n.assign(n.xzy),n.xz.mulAssign(-1)}).elseif(e.equal(2),()=>{n.x.mulAssign(-1)}).elseif(e.equal(3),()=>{n.assign(n.zyx),n.xz.mulAssign(-1)}).elseif(e.equal(4),()=>{n.assign(n.xzy),n.xy.mulAssign(-1)}).elseif(e.equal(5),()=>{n.z.mulAssign(-1)}),n}).setLayout({name:"getDirection",type:"vec3",inputs:[{name:"uv",type:"vec2"},{name:"face",type:"float"}]});const zE=$(([i,e,t,n,s,o])=>{const r=w(t),a=L(e),c=So(VE(r),il,o),l=wa(c),u=No(c),h=L(sl(i,a,u,n,s,o)).toVar();return Je(l.notEqual(0),()=>{const d=L(sl(i,a,u.add(1),n,s,o)).toVar();h.assign($t(h,d,l))}),h}),sl=$(([i,e,t,n,s,o])=>{const r=w(t).toVar(),a=L(e),c=w(OE(a)).toVar(),l=w(sn(Kh.sub(r),0)).toVar();r.assign(sn(r,Kh));const u=w(Jc(r)).toVar(),h=Ee(FE(a,c).mul(u.sub(2)).add(1)).toVar();return Je(c.greaterThan(2),()=>{h.y.addAssign(u),c.subAssign(3)}),h.x.addAssign(c.mul(u)),h.x.addAssign(l.mul(ot(3,UE))),h.y.addAssign(ot(4,Jc(o).sub(u))),h.x.mulAssign(n),h.y.mulAssign(s),i.uv(h).grad(Ee(),Ee())}),wc=$(({envMap:i,mipInt:e,outputDirection:t,theta:n,axis:s,CUBEUV_TEXEL_WIDTH:o,CUBEUV_TEXEL_HEIGHT:r,CUBEUV_MAX_MIP:a})=>{const c=Xi(n),l=t.mul(c).add(s.cross(t).mul(wi(n))).add(s.mul(s.dot(t).mul(c.oneMinus())));return sl(i,l,e,o,r,a)});$(({n:i,latitudinal:e,poleAxis:t,outputDirection:n,weights:s,samples:o,dTheta:r,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})=>{const d=L(Pn(e,t,If(t,n))).toVar();Je(bf(d.equals(L(0))),()=>{d.assign(L(n.z,0,n.x.negate()))}),d.assign(jo(d));const p=L().toVar();return p.addAssign(s.element(C(0)).mul(wc({theta:0,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),vt({start:C(1),end:i},({i:g})=>{Je(g.greaterThanEqual(o),()=>{ip()});const x=w(r.mul(w(g))).toVar();p.addAssign(s.element(g).mul(wc({theta:x.mul(-1),axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h}))),p.addAssign(s.element(g).mul(wc({theta:x,axis:d,outputDirection:n,mipInt:a,envMap:c,CUBEUV_TEXEL_WIDTH:l,CUBEUV_TEXEL_HEIGHT:u,CUBEUV_MAX_MIP:h})))}),Se(p,1)});let ha=null;const Zh=new WeakMap;function BE(i){const e=Math.log2(i)-2,t=1/i;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function HE(i){let e=Zh.get(i);if((e!==void 0?e.pmremVersion:-1)!==i.pmremVersion){if(i.isCubeTexture){if(i.source.data.some(n=>n===void 0))throw new Error("PMREMNode: Undefined texture in CubeTexture. Use onLoad callback or async loader");e=ha.fromCubemap(i,e)}else{if(i.image===void 0)throw new Error("PMREMNode: Undefined image in Texture. Use onLoad callback or async loader");e=ha.fromEquirectangular(i,e)}e.pmremVersion=i.pmremVersion,Zh.set(i,e)}return e.texture}class up extends yt{constructor(e,t=null,n=null){super("vec3"),this._value=e,this._pmrem=null,this.uvNode=t,this.levelNode=n,this._generator=null,this._texture=Dn(null),this._width=rt(0),this._height=rt(0),this._maxMip=rt(0),this.updateBeforeType=Tt.RENDER}set value(e){this._value=e,this._pmrem=null}get value(){return this._value}updateFromTexture(e){const t=BE(e.image.height);this._texture.value=e,this._width.value=t.texelWidth,this._height.value=t.texelHeight,this._maxMip.value=t.maxMip}updateBefore(){let e=this._pmrem;const t=e?e.pmremVersion:-1,n=this._value;t!==n.pmremVersion&&(n.isPMREMTexture===!0?e=n:e=HE(n),this._pmrem=e,this.updateFromTexture(e))}setup(e){ha===null&&(ha=e.createPMREMGenerator()),this.updateBefore(e);let t=this.uvNode;t===null&&e.context.getUV&&(t=e.context.getUV(this));const n=this.value;e.renderer.coordinateSystem===ei&&n.isPMREMTexture!==!0&&n.isRenderTargetTexture===!0&&(t=L(t.x.negate(),t.yz));let s=this.levelNode;return s===null&&e.context.getTextureLevel&&(s=e.context.getTextureLevel(this)),zE(this._texture,t,s,this._width,this._height,this._maxMip)}}const kE=k(up);te("PMREMNode",up);const Jh=new WeakMap;class hp extends rr{constructor(e=null){super(),this.envNode=e}setup(e){let t=this.envNode;if(t.isTextureNode){let d=Jh.get(t.value);d===void 0&&(d=kE(t.value),Jh.set(t.value,d)),t=d}const{material:n}=e,o=n.envMap?si("envMapIntensity","float",e.material):si("environmentIntensity","float",e.scene),a=n.useAnisotropy===!0||n.anisotropy>0?IE:Ot,c=Pi(t,Qh($i,a)).mul(o),l=Pi(t,GE(Xf)).mul(Math.PI).mul(o),u=ia(c);e.context.radiance.addAssign(u),e.context.iblIrradiance.addAssign(l);const h=e.context.lightingModel.clearcoatRadiance;if(h){const d=Pi(t,Qh(ra,eo)).mul(o),p=ia(d);h.addAssign(p)}}}const Qh=(i,e)=>{let t=null;return{getUV:()=>(t===null&&(t=Ct.negate().reflect(e),t=i.mul(i).mix(t,e).normalize(),t=t.transformDirection(Ro)),t),getTextureLevel:()=>i}},GE=i=>({getUV:()=>i,getTextureLevel:()=>w(1)});te("EnvironmentNode",hp);class dp extends rr{constructor(e){super(),this.node=e}setup(e){e.context.irradiance.addAssign(this.node)}}te("IrradianceNode",dp);let bc,Rc;class ut extends Ue{constructor(e){super(),this.scope=e,this.isViewportNode=!0}getNodeType(){return this.scope===ut.VIEWPORT?"vec4":this.scope===ut.COORDINATE?"vec3":"vec2"}getUpdateType(){let e=Tt.NONE;return(this.scope===ut.RESOLUTION||this.scope===ut.VIEWPORT)&&(e=Tt.RENDER),this.updateType=e,e}update({renderer:e}){this.scope===ut.VIEWPORT?e.getViewport(Rc):e.getDrawingBufferSize(bc)}setup(){const e=this.scope;let t=null;if(e===ut.RESOLUTION)t=rt(bc||(bc=new Te));else if(e===ut.VIEWPORT)t=rt(Rc||(Rc=new at));else{t=WE.div(ol);let n=t.x,s=t.y;/bottom/i.test(e)&&(s=s.oneMinus()),/right/i.test(e)&&(n=n.oneMinus()),t=Ee(n,s)}return t}generate(e){if(this.scope===ut.COORDINATE){let t=e.getFragCoord();if(e.isFlipY()){const n=e.getNodeProperties(ol).outputNode.build(e);t=`${e.getType("vec3")}( ${t}.x, ${n}.y - ${t}.y, ${t}.z )`}return t}return super.generate(e)}}ut.COORDINATE="coordinate";ut.RESOLUTION="resolution";ut.VIEWPORT="viewport";ut.TOP_LEFT="topLeft";ut.BOTTOM_LEFT="bottomLeft";ut.TOP_RIGHT="topRight";ut.BOTTOM_RIGHT="bottomRight";const WE=he(ut,ut.COORDINATE),ol=he(ut,ut.RESOLUTION),uo=he(ut,ut.VIEWPORT),Zo=he(ut,ut.TOP_LEFT);he(ut,ut.BOTTOM_LEFT);he(ut,ut.TOP_RIGHT);he(ut,ut.BOTTOM_RIGHT);te("ViewportNode",ut);const Ho=new Te;class ar extends Cs{constructor(e=Zo,t=null,n=null){n===null&&(n=new Zd,n.minFilter=Yi),super(n,e,t),this.generateMipmaps=!1,this.isOutputTextureNode=!0,this.updateBeforeType=Tt.FRAME}updateBefore(e){const t=e.renderer;t.getDrawingBufferSize(Ho);const n=this.value;(n.image.width!==Ho.width||n.image.height!==Ho.height)&&(n.image.width=Ho.width,n.image.height=Ho.height,n.needsUpdate=!0);const s=n.generateMipmaps;n.generateMipmaps=this.generateMipmaps,t.copyFramebufferToTexture(n),n.generateMipmaps=s}clone(){const e=new this.constructor(this.uvNode,this.levelNode,this.value);return e.generateMipmaps=this.generateMipmaps,e}}const XE=k(ar),fp=k(ar,null,null,{generateMipmaps:!0});z("viewportTexture",XE);z("viewportMipTexture",fp);te("ViewportTextureNode",ar);let Cc=null;class pp extends ar{constructor(e=Zo,t=null){Cc===null&&(Cc=new ir),super(e,t,Cc)}}const mp=k(pp);z("viewportDepthTexture",mp);te("ViewportDepthTextureNode",pp);class on extends Ue{constructor(e,t=null){super("float"),this.scope=e,this.valueNode=t,this.isViewportDepthNode=!0}generate(e){const{scope:t}=this;return t===on.DEPTH_PIXEL?e.getFragDepth():super.generate(e)}setup(){const{scope:e}=this;let t=null;if(e===on.DEPTH)t=rl(Ln.z,yc,Mc);else if(e===on.DEPTH_TEXTURE){const n=this.valueNode||mp(),s=gp(n,yc,Mc);t=rl(s,yc,Mc)}else e===on.DEPTH_PIXEL&&this.valueNode!==null&&(t=_p().assign(this.valueNode));return t}}const rl=(i,e,t)=>i.add(e).div(e.sub(t)),gp=(i,e,t)=>e.mul(t).div(t.sub(e).mul(i).sub(t));on.DEPTH="depth";on.DEPTH_TEXTURE="depthTexture";on.DEPTH_PIXEL="depthPixel";const _p=k(on,on.DEPTH_PIXEL);he(on,on.DEPTH);k(on,on.DEPTH_TEXTURE);const xp=he(on,on.DEPTH_PIXEL);xp.assign=i=>_p(i);te("ViewportDepthNode",on);class is extends Ue{constructor(e=is.DEFAULT){super(),this.scope=e}setup(e){super.setup(e);const t=e.clippingContext,{localClipIntersection:n,localClippingCount:s,globalClippingCount:o}=t,r=o+s,a=n?r-s:r;return this.scope===is.ALPHA_TO_COVERAGE?this.setupAlphaToCoverage(t.planes,r,a):this.setupDefault(t.planes,r,a)}setupAlphaToCoverage(e,t,n){return $(()=>{const s=Qc(e),o=Rt("float","distanceToPlane"),r=Rt("float","distanceToGradient"),a=Rt("float","clipOpacity");a.assign(1);let c;if(vt(n,({i:l})=>{c=s.element(l),o.assign(Ln.dot(c.xyz).negate().add(c.w)),r.assign(o.fwidth().div(2)),a.mulAssign(mi(r.negate(),r,o)),a.equal(0).discard()}),n<t){const l=Rt("float","unionclipOpacity");l.assign(1),vt({start:n,end:t},({i:u})=>{c=s.element(u),o.assign(Ln.dot(c.xyz).negate().add(c.w)),r.assign(o.fwidth().div(2)),l.mulAssign(mi(r.negate(),r,o).oneMinus())}),a.mulAssign(l.oneMinus())}St.a.mulAssign(a),St.a.equal(0).discard()})()}setupDefault(e,t,n){return $(()=>{const s=Qc(e);let o;if(vt(n,({i:r})=>{o=s.element(r),Ln.dot(o.xyz).greaterThan(o.w).discard()}),n<t){const r=Rt("bool","clipped");r.assign(!0),vt({start:n,end:t},({i:a})=>{o=s.element(a),r.assign(Ln.dot(o.xyz).greaterThan(o.w).and(r))}),r.discard()}})()}}is.ALPHA_TO_COVERAGE="alphaToCoverage";is.DEFAULT="default";const qE=()=>pe(new is),YE=()=>pe(new is(is.ALPHA_TO_COVERAGE));class vp extends Ue{constructor(){super("bool"),this.isFrontFacingNode=!0}generate(e){const{renderer:t,material:n}=e;return t.coordinateSystem===ei&&n.side===vn?"false":e.getFrontFacing()}}const jE=he(vp),da=w(jE).mul(2).sub(1);te("FrontFacingNode",vp);const al=new Map;class pn extends fn{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.type,this.forceSinglePass=!1,this.fog=!0,this.lights=!0,this.normals=!0,this.lightsNode=null,this.envNode=null,this.aoNode=null,this.colorNode=null,this.normalNode=null,this.opacityNode=null,this.backdropNode=null,this.backdropAlphaNode=null,this.alphaTestNode=null,this.positionNode=null,this.depthNode=null,this.shadowNode=null,this.shadowPositionNode=null,this.outputNode=null,this.fragmentNode=null,this.vertexNode=null}customProgramCacheKey(){return this.type+tf(this)}build(e){this.setup(e)}setup(e){e.addStack(),e.stack.outputNode=this.vertexNode||this.setupPosition(e),e.addFlow("vertex",e.removeStack()),e.addStack();let t;const n=this.setupClipping(e);if(this.depthWrite===!0&&this.setupDepth(e),this.fragmentNode===null){this.normals===!0&&this.setupNormal(e),this.setupDiffuseColor(e),this.setupVariants(e);const s=this.setupLighting(e);n!==null&&e.stack.add(n);const o=Se(s,St.a).max(0);t=this.setupOutput(e,o),OS.assign(t),this.outputNode!==null&&(t=this.outputNode)}else{let s=this.fragmentNode;s.isOutputStructNode!==!0&&(s=Se(s)),t=this.setupOutput(e,s)}e.stack.outputNode=t,e.addFlow("fragment",e.removeStack())}setupClipping(e){if(e.clippingContext===null)return null;const{globalClippingCount:t,localClippingCount:n}=e.clippingContext;let s=null;return(t||n)&&(this.alphaToCoverage?s=YE():e.stack.add(qE())),s}setupDepth(e){const{renderer:t}=e;let n=this.depthNode;n===null&&t.logarithmicDepthBuffer===!0&&(n=Wh().w.add(1).log2().mul(WT).mul(.5)),n!==null&&xp.assign(n).append()}setupPosition(e){const{object:t}=e,n=t.geometry;if(e.addStack(),(n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color)&&AE(t).append(),t.isSkinnedMesh===!0&&TE(t).append(),this.displacementMap){const o=Ci("displacementMap","texture"),r=Ci("displacementScale","float"),a=Ci("displacementBias","float");rn.addAssign(oi.normalize().mul(o.x.mul(r).add(a)))}t.isBatchedMesh&&SE(t).append(),t.instanceMatrix&&t.instanceMatrix.isInstancedBufferAttribute===!0&&e.isAvailable("instance")===!0&&ME(t).append(),this.positionNode!==null&&rn.assign(this.positionNode);const s=Wh();return e.context.vertex=e.removeStack(),e.context.mvp=s,s}setupDiffuseColor({object:e,geometry:t}){let n=this.colorNode?Se(this.colorNode):Ko;this.vertexColors===!0&&t.hasAttribute("color")&&(n=Se(n.xyz.mul(nn("color","vec3")),n.a)),e.instanceColor&&(n=ai("vec3","vInstanceColor").mul(n)),St.assign(n);const s=this.opacityNode?w(this.opacityNode):qf;if(St.a.assign(St.a.mul(s)),this.alphaTestNode!==null||this.alphaTest>0){const o=this.alphaTestNode!==null?w(this.alphaTestNode):YT;St.a.lessThanEqual(o).discard()}}setupVariants(){}setupNormal(){if(this.flatShading===!0){const e=Ln.dFdx().cross(Ln.dFdy()).normalize();Ot.assign(e.mul(da))}else{const e=this.normalNode?L(this.normalNode):tE;Ot.assign(e.mul(da))}}getEnvNode(e){let t=null;return this.envNode?t=this.envNode:this.envMap?t=this.envMap.isCubeTexture?rp(this.envMap):Dn(this.envMap):e.environmentNode&&(t=e.environmentNode),t}setupLights(e){const t=this.getEnvNode(e),n=[];if(t&&n.push(new hp(t)),e.material.lightMap&&n.push(new dp(Ci("lightMap","texture"))),this.aoNode!==null||e.material.aoMap){const o=this.aoNode!==null?this.aoNode:Dn(e.material.aoMap);n.push(new ap(o))}let s=this.lightsNode||e.lightsNode;return n.length>0&&(s=CE([...s.lightNodes,...n])),s}setupLightingModel(){}setupLighting(e){const{material:t}=e,{backdropNode:n,backdropAlphaNode:s,emissiveNode:o}=this,a=this.lights===!0||this.lightsNode!==null?this.setupLights(e):null;let c=St.rgb;if(a&&a.hasLight!==!1){const l=this.setupLightingModel(e);c=lp(a,l,n,s)}else n!==null&&(c=L(s!==null?$t(c,n,s):n));return(o&&o.isNode===!0||t.emissive&&t.emissive.isColor===!0)&&(c=c.add(L(o||$T))),c}setupOutput(e,t){const n=e.fogNode;return n&&(t=Se(n.mix(t.rgb,n.colorNode),t.a)),t}setDefaultValues(e){for(const n in e){const s=e[n];this[n]===void 0&&(this[n]=s,s&&s.clone&&(this[n]=s.clone()))}const t=Object.getOwnPropertyDescriptors(e.constructor.prototype);for(const n in t)Object.getOwnPropertyDescriptor(this.constructor.prototype,n)===void 0&&t[n].get!==void 0&&Object.defineProperty(this.constructor.prototype,n,t[n])}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{},nodes:{}});const n=fn.prototype.toJSON.call(this,e),s=na(this);n.inputNodes={};for(const{property:r,childNode:a}of s)n.inputNodes[r]=a.toJSON(e).uuid;function o(r){const a=[];for(const c in r){const l=r[c];delete l.metadata,a.push(l)}return a}if(t){const r=o(e.textures),a=o(e.images),c=o(e.nodes);r.length>0&&(n.textures=r),a.length>0&&(n.images=a),c.length>0&&(n.nodes=c)}return n}copy(e){return this.lightsNode=e.lightsNode,this.envNode=e.envNode,this.colorNode=e.colorNode,this.normalNode=e.normalNode,this.opacityNode=e.opacityNode,this.backdropNode=e.backdropNode,this.backdropAlphaNode=e.backdropAlphaNode,this.alphaTestNode=e.alphaTestNode,this.positionNode=e.positionNode,this.depthNode=e.depthNode,this.shadowNode=e.shadowNode,this.shadowPositionNode=e.shadowPositionNode,this.outputNode=e.outputNode,this.fragmentNode=e.fragmentNode,this.vertexNode=e.vertexNode,super.copy(e)}static fromMaterial(e){if(e.isNodeMaterial===!0)return e;const t=e.type.replace("Material","NodeMaterial"),n=$E(t);if(n===void 0)throw new Error(`NodeMaterial: Material "${e.type}" is not compatible.`);for(const s in e)n[s]=e[s];return n}}function en(i,e){if(typeof e!="function"||!i)throw new Error(`Node material ${i} is not a class`);if(al.has(i)){console.warn(`Redefinition of node material ${i}`);return}al.set(i,e),e.type=i}function $E(i){const e=al.get(i);if(e!==void 0)return new e}en("NodeMaterial",pn);class yp extends Ue{constructor(e=null){super(),this.nodes=[],this.outputNode=null,this.parent=e,this._currentCond=null,this.isStackNode=!0}getNodeType(e){return this.outputNode?this.outputNode.getNodeType(e):"void"}add(e){return this.nodes.push(e),this}if(e,t){const n=new Xo(t);return this._currentCond=Pn(e,n),this.add(this._currentCond)}elseif(e,t){const n=new Xo(t),s=Pn(e,n);return this._currentCond.elseNode=s,this._currentCond=s,this}else(e){return this._currentCond.elseNode=new Xo(e),this}build(e,...t){const n=uS();Vh(this);for(const s of this.nodes)s.build(e,"void");return Vh(n),this.outputNode?this.outputNode.build(e,...t):super.build(e,...t)}}k(yp);te("StackNode",yp);class Mp extends yt{constructor(e=vE){super("vec2"),this.dirNode=e}setup(){const e=this.dirNode,t=e.z.atan2(e.x).mul(1/(Math.PI*2)).add(.5),n=e.y.clamp(-1,1).asin().mul(1/Math.PI).add(.5);return Ee(t,n)}}k(Mp);te("EquirectUVNode",Mp);class Sp extends Ue{constructor(e){super(),this.types=e,this.isStructTypeNode=!0}getMemberTypes(){return this.types}}te("StructTypeNode",Sp);class Tp extends Ue{constructor(...e){super(),this.members=e,this.isOutputStructNode=!0}setup(e){super.setup(e);const t=this.members,n=[];for(let s=0;s<t.length;s++)n.push(t[s].getNodeType(e));this.nodeType=e.getStructTypeFromNode(new Sp(n)).name}generate(e,t){const n=e.getOutputStructName(),s=this.members,o=n!==""?n+".":"";for(let r=0;r<s.length;r++){const a=s[r].build(e,t);e.addLineFlowCode(`${o}m${r} = ${a}`)}return n}}k(Tp);te("OutputStructNode",Tp);class Ep extends Ue{constructor(e){super(),this.seedNode=e}setup(){const e=this.seedNode.toUint().mul(747796405).add(2891336453),t=e.shiftRight(e.shiftRight(28).add(4)).bitXor(e).mul(277803737);return t.shiftRight(22).bitXor(t).toFloat().mul(1/2**32)}}const KE=k(Ep);z("hash",KE);te("HashNode",Ep);const cl=(i,e)=>fi(ot(4,i.mul(Ft(1,i))),e),ZE=(i,e)=>i.lessThan(.5)?cl(i.mul(2),e).div(2):Ft(1,cl(ot(Ft(1,i),2),e).div(2)),JE=(i,e,t)=>fi(ts(fi(i,e),Un(fi(i,e),fi(Ft(1,i),t))),1/e),QE=(i,e)=>wi(zh.mul(e.mul(i).sub(1))).div(zh.mul(e.mul(i).sub(1)));z("parabola",cl);z("gain",ZE);z("pcurve",JE);z("sinc",QE);const ui=$(([i])=>i.fract().sub(.5).abs()),Ap=$(([i])=>L(ui(i.z.add(ui(i.y.mul(1)))),ui(i.z.add(ui(i.x.mul(1)))),ui(i.y.add(ui(i.x.mul(1)))))),eA=$(([i,e,t])=>{const n=L(i).toVar(),s=w(1.4).toVar(),o=w(0).toVar(),r=L(n).toVar();return vt({start:w(0),end:w(3),type:"float",condition:"<="},()=>{const a=L(Ap(r.mul(2))).toVar();n.addAssign(a.add(t.mul(w(.1).mul(e)))),r.mulAssign(1.8),s.mulAssign(1.5),n.mulAssign(1.2);const c=w(ui(n.z.add(ui(n.x.add(ui(n.y)))))).toVar();o.addAssign(c.div(s)),r.addAssign(.14)}),o});ui.setLayout({name:"tri",type:"float",inputs:[{name:"x",type:"float"}]});Ap.setLayout({name:"tri3",type:"vec3",inputs:[{name:"p",type:"vec3"}]});eA.setLayout({name:"triNoise3D",type:"float",inputs:[{name:"p",type:"vec3"},{name:"spd",type:"float"},{name:"time",type:"float"}]});let Lc;class Np extends $l{constructor(e){Lc=Lc||ba("discard"),super(e,Lc)}}const tA=k(Np),nA=i=>tA(i).append();z("discard",nA);te("DiscardNode",Np);class wp extends Ue{constructor(e=[],...t){super(),this.functionNodes=e,this.parametersNodes=t,this._candidateFnCall=null}getNodeType(){return this.functionNodes[0].shaderNode.layout.type}setup(e){const t=this.parametersNodes;let n=this._candidateFnCall;if(n===null){let s=null,o=-1;for(const r of this.functionNodes){const c=r.shaderNode.layout;if(c===null)throw new Error("FunctionOverloadingNode: FunctionNode must be a layout.");const l=c.inputs;if(t.length===l.length){let u=0;for(let h=0;h<t.length;h++){const d=t[h],p=l[h];d.getNodeType(e)===p.type?u++:u=0}u>o&&(s=r,o=u)}}this._candidateFnCall=n=s(...t)}return n}}const iA=k(wp),Xn=i=>(...e)=>iA(i,...e);te("FunctionOverloadingNode",wp);class bp extends yt{constructor(){super("vec2")}setup(){const e=L(Ct.z,0,Ct.x.negate()).normalize(),t=Ct.cross(e);return Ee(e.dot(Ot),t.dot(Ot)).mul(.495).add(.5)}}const sA=he(bp);te("MatcapUVNode",bp);class Sn extends bs{constructor(e=Sn.LOCAL,t=1,n=0){super(n),this.scope=e,this.scale=t,this.updateType=Tt.FRAME}update(e){const t=this.scope,n=this.scale;t===Sn.LOCAL?this.value+=e.deltaTime*n:t===Sn.DELTA?this.value=e.deltaTime*n:t===Sn.FRAME?this.value=e.frameId:this.value=e.time*n}serialize(e){super.serialize(e),e.scope=this.scope,e.scale=this.scale}deserialize(e){super.deserialize(e),this.scope=e.scope,this.scale=e.scale}}Sn.LOCAL="local";Sn.GLOBAL="global";Sn.DELTA="delta";Sn.FRAME="frame";const oA=(i,e=0)=>pe(new Sn(Sn.LOCAL,i,e));he(Sn,Sn.FRAME).toUint();te("TimerNode",Sn);class Xt extends Ue{constructor(e=Xt.SINE,t=oA()){super(),this.method=e,this.timeNode=t}getNodeType(e){return this.timeNode.getNodeType(e)}setup(){const e=this.method,t=pe(this.timeNode);let n=null;return e===Xt.SINE?n=t.add(.75).mul(Math.PI*2).sin().mul(.5).add(.5):e===Xt.SQUARE?n=t.fract().round():e===Xt.TRIANGLE?n=t.add(.5).fract().mul(2).sub(1).abs():e===Xt.SAWTOOTH&&(n=t.fract()),n}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}Xt.SINE="sine";Xt.SQUARE="square";Xt.TRIANGLE="triangle";Xt.SAWTOOTH="sawtooth";k(Xt,Xt.SINE);k(Xt,Xt.SQUARE);k(Xt,Xt.TRIANGLE);k(Xt,Xt.SAWTOOTH);te("OscNode",Xt);class gi extends yt{constructor(e,t){super(),this.scope=e,this.node=t}getNodeType(e){return this.node.getNodeType(e)}setup(){const{scope:e,node:t}=this;let n=null;return e===gi.DIRECTION_TO_COLOR?n=t.mul(.5).add(.5):e===gi.COLOR_TO_DIRECTION&&(n=t.mul(2).sub(1)),n}}gi.DIRECTION_TO_COLOR="directionToColor";gi.COLOR_TO_DIRECTION="colorToDirection";const Rp=k(gi,gi.DIRECTION_TO_COLOR),rA=k(gi,gi.COLOR_TO_DIRECTION);z("directionToColor",Rp);z("colorToDirection",rA);te("PackingNode",gi);class Kl extends Ue{constructor(e,t,n,s=w(0),o=w(1)){super(),this.node=e,this.inLowNode=t,this.inHighNode=n,this.outLowNode=s,this.outHighNode=o,this.doClamp=!0}setup(){const{node:e,inLowNode:t,inHighNode:n,outLowNode:s,outHighNode:o,doClamp:r}=this;let a=e.sub(t).div(n.sub(t));return r===!0&&(a=a.clamp()),a.mul(o.sub(s)).add(s)}}const aA=k(Kl,null,null,{doClamp:!1}),cA=k(Kl);z("remap",aA);z("remapClamp",cA);te("RemapNode",Kl);class Cp extends yt{constructor(e,t,n=Ee(.5)){super("vec2"),this.uvNode=e,this.rotationNode=t,this.centerNode=n}setup(){const{uvNode:e,rotationNode:t,centerNode:n}=this;return e.sub(n).rotate(t).add(n)}}const lA=k(Cp);z("rotateUV",lA);te("RotateUVNode",Cp);class Lp extends yt{constructor(e,t){super(),this.positionNode=e,this.rotationNode=t}getNodeType(e){return this.positionNode.getNodeType(e)}setup(e){const{rotationNode:t,positionNode:n}=this;if(this.getNodeType(e)==="vec2"){const o=t.cos(),r=t.sin();return Vl(o,r,r.negate(),o).mul(n)}else{const o=t,r=ro(Se(1,0,0,0),Se(0,Xi(o.x),wi(o.x).negate(),0),Se(0,wi(o.x),Xi(o.x),0),Se(0,0,0,1)),a=ro(Se(Xi(o.y),0,wi(o.y),0),Se(0,1,0,0),Se(wi(o.y).negate(),0,Xi(o.y),0),Se(0,0,0,1)),c=ro(Se(Xi(o.z),wi(o.z).negate(),0,0),Se(wi(o.z),Xi(o.z),0,0),Se(0,0,1,0),Se(0,0,0,1));return r.mul(a).mul(c).mul(Se(n,1)).xyz}}}const uA=k(Lp);z("rotate",uA);te("RotateNode",Lp);class Pp extends Ue{constructor(e,t=xi(),n=w(0)){super("vec2"),this.countNode=e,this.uvNode=t,this.frameNode=n}setup(){const{frameNode:e,uvNode:t,countNode:n}=this,{width:s,height:o}=n,r=e.mod(s.mul(o)).floor(),a=r.mod(s),c=o.sub(r.add(1).div(s).ceil()),l=n.reciprocal(),u=Ee(a,c);return t.add(u).mul(l)}}k(Pp);te("SpriteSheetUVNode",Pp);class Ip extends Ao{constructor(e,t){super(e,t),this.isStorageArrayElementNode=!0}set storageBufferNode(e){this.node=e}get storageBufferNode(){return this.node}setup(e){return e.isAvailable("storageBuffer")===!1&&!this.node.instanceIndex&&this.node.bufferObject===!0&&e.setupPBO(this.node),super.setup(e)}generate(e,t){let n;const s=e.context.assign;if(e.isAvailable("storageBuffer")===!1){const{node:o}=this;!o.instanceIndex&&this.node.bufferObject===!0&&s!==!0?n=e.generatePBO(this):n=o.build(e)}else n=super.generate(e);if(s!==!0){const o=this.getNodeType(e);n=e.format(n,o,t)}return n}}const Dp=k(Ip);z("storageElement",Dp);te("StorageArrayElementNode",Ip);class Up extends Ue{constructor(e,t=null,n=null,s=w(1),o=rn,r=oi){super("vec4"),this.textureXNode=e,this.textureYNode=t,this.textureZNode=n,this.scaleNode=s,this.positionNode=o,this.normalNode=r}setup(){const{textureXNode:e,textureYNode:t,textureZNode:n,scaleNode:s,positionNode:o,normalNode:r}=this;let a=r.abs().normalize();a=a.div(a.dot(L(1)));const c=o.yz.mul(s),l=o.zx.mul(s),u=o.xy.mul(s),h=e.value,d=t!==null?t.value:h,p=n!==null?n.value:h,g=Dn(h,c).mul(a.x),x=Dn(d,l).mul(a.y),m=Dn(p,u).mul(a.z);return Un(g,x,m)}}const hA=k(Up),dA=(...i)=>hA(...i);z("triplanarTexture",dA);te("TriplanarTexturesNode",Up);new Ni;new D;new D;new D;new At;new D(0,0,-1);new at;new D;new D;new at;new Te;new Qi;Ee(Zo.x.oneMinus(),Zo.y);class fA extends zl{constructor(e=0){super(null,"vec4"),this.isVertexColorNode=!0,this.index=e}getAttributeName(){const e=this.index;return"color"+(e>0?e:"")}generate(e){const t=this.getAttributeName(e),n=e.hasGeometryAttribute(t);let s;return n===!0?s=super.generate(e):s=e.generateConst(this.nodeType,new at(1,1,1,1)),s}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}te("VertexColorNode",fA);class Op extends bo{constructor(e,t,n=null){super(e,t,n),this.renderer=n}updateReference(e){return this.reference=this.renderer!==null?this.renderer:e.renderer,this.reference}}const pA=(i,e,t)=>pe(new Op(i,e,t));te("RendererReferenceNode",Op);const La=1/6,Fp=i=>ot(La,ot(i,ot(i,i.negate().add(3)).sub(3)).add(1)),ll=i=>ot(La,ot(i,ot(i,ot(3,i).sub(6))).add(4)),Vp=i=>ot(La,ot(i,ot(i,ot(-3,i).add(3)).add(3)).add(1)),ul=i=>ot(La,fi(i,3)),ed=i=>Fp(i).add(ll(i)),td=i=>Vp(i).add(ul(i)),nd=i=>Un(-1,ll(i).div(Fp(i).add(ll(i)))),id=i=>Un(1,ul(i).div(Vp(i).add(ul(i)))),sd=(i,e,t)=>{const n=i.uvNode,s=ot(n,e.zw).add(.5),o=No(s),r=wa(s),a=ed(r.x),c=td(r.x),l=nd(r.x),u=id(r.x),h=nd(r.y),d=id(r.y),p=Ee(o.x.add(l),o.y.add(h)).sub(.5).mul(e.xy),g=Ee(o.x.add(u),o.y.add(h)).sub(.5).mul(e.xy),x=Ee(o.x.add(l),o.y.add(d)).sub(.5).mul(e.xy),m=Ee(o.x.add(u),o.y.add(d)).sub(.5).mul(e.xy),f=ed(r.y).mul(Un(a.mul(i.uv(p).level(t)),c.mul(i.uv(g).level(t)))),E=td(r.y).mul(Un(a.mul(i.uv(x).level(t)),c.mul(i.uv(m).level(t))));return f.add(E)},mA=(i,e)=>{const t=Ee(i.size(C(e))),n=Ee(i.size(C(e.add(1)))),s=ts(1,t),o=ts(1,n),r=sd(i,Se(s,t),No(e)),a=sd(i,Se(o,n),Lf(e));return wa(e).mix(r,a)};class zp extends yt{constructor(e,t=w(3)){super("vec4"),this.textureNode=e,this.blurNode=t}setup(){return mA(this.textureNode,this.blurNode)}}const gA=k(zp);z("bicubic",gA);te("TextureBicubicNode",zp);class Bp extends Ue{constructor(){super("vec2"),this.isPointUVNode=!0}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}he(Bp);te("PointUVNode",Bp);class ti extends Ue{constructor(e=ti.BACKGROUND_BLURRINESS,t=null){super(),this.scope=e,this.scene=t}setup(e){const t=this.scope,n=this.scene!==null?this.scene:e.scene;let s;return t===ti.BACKGROUND_BLURRINESS?s=si("backgroundBlurriness","float",n):t===ti.BACKGROUND_INTENSITY?s=si("backgroundIntensity","float",n):console.error("THREE.SceneNode: Unknown scope:",t),s}}ti.BACKGROUND_BLURRINESS="backgroundBlurriness";ti.BACKGROUND_INTENSITY="backgroundIntensity";he(ti,ti.BACKGROUND_BLURRINESS);he(ti,ti.BACKGROUND_INTENSITY);te("SceneNode",ti);class _A extends Ra{constructor(e,t,n=0){super(e,t,n),this.isStorageBufferNode=!0,this.bufferObject=!1,this._attribute=null,this._varying=null,e.isStorageBufferAttribute!==!0&&e.isStorageInstancedBufferAttribute!==!0&&(e.isInstancedBufferAttribute?e.isStorageInstancedBufferAttribute=!0:e.isStorageBufferAttribute=!0)}getInputType(){return"storageBuffer"}element(e){return Dp(this,e)}setBufferObject(e){return this.bufferObject=e,this}generate(e){if(e.isAvailable("storageBuffer"))return super.generate(e);const t=this.getNodeType(e);this._attribute===null&&(this._attribute=Ca(this.value),this._varying=Wt(this._attribute));const n=this._varying.build(e,t);return e.registerTransform(n,this._attribute),n}}te("StorageBufferNode",_A);const xA={WriteOnly:"write-only",ReadOnly:"read-only",ReadWrite:"read-write"};class Hp extends Cs{constructor(e,t,n=null){super(e,t),this.storeNode=n,this.isStorageTextureNode=!0,this.access=xA.WriteOnly}getInputType(){return"storageTexture"}setup(e){super.setup(e);const t=e.getNodeProperties(this);t.storeNode=this.storeNode}setAccess(e){return this.access=e,this}generate(e,t){let n;return this.storeNode!==null?n=this.generateStore(e):n=super.generate(e,t),n}generateStore(e){const t=e.getNodeProperties(this),{uvNode:n,storeNode:s}=t,o=super.generate(e,"property"),r=n.build(e,"uvec2"),a=s.build(e,"vec4"),c=e.generateTextureStore(e,o,r,a);e.addLineFlowCode(c)}}k(Hp);te("StorageTextureNode",Hp);const vA=$(({texture:i,uv:e})=>{const n=L().temp();return Je(e.x.lessThan(1e-4),()=>{n.assign(L(1,0,0))}).elseif(e.y.lessThan(1e-4),()=>{n.assign(L(0,1,0))}).elseif(e.z.lessThan(1e-4),()=>{n.assign(L(0,0,1))}).elseif(e.x.greaterThan(1-1e-4),()=>{n.assign(L(-1,0,0))}).elseif(e.y.greaterThan(1-1e-4),()=>{n.assign(L(0,-1,0))}).elseif(e.z.greaterThan(1-1e-4),()=>{n.assign(L(0,0,-1))}).else(()=>{const o=i.uv(e.add(L(-.01,0,0))).r.sub(i.uv(e.add(L(.01,0,0))).r),r=i.uv(e.add(L(0,-.01,0))).r.sub(i.uv(e.add(L(0,.01,0))).r),a=i.uv(e.add(L(0,0,-.01))).r.sub(i.uv(e.add(L(0,0,.01))).r);n.assign(L(o,r,a))}),n.normalize()});class kp extends Cs{constructor(e,t=null,n=null){super(e,t,n),this.isTexture3DNode=!0}getInputType(){return"texture3D"}getDefaultUV(){return L(.5,.5,.5)}setUpdateMatrix(){}setupUV(e,t){return t}generateUV(e,t){return t.build(e,"vec3")}normal(e){return vA({texture:this,uv:e})}}const yA=k(kp);te("Texture3DNode",kp);class MA extends bo{constructor(e,t,n=null){super(e,t,n),this.userData=n}update(e){this.reference=this.userData!==null?this.userData:e.object.userData,super.update(e)}}te("UserDataNode",MA);const SA=$(({base:i,blend:e})=>{const t=n=>e[n].lessThan(wf).cond(e[n],i[n].oneMinus().div(e[n]).oneMinus().max(0));return L(t("x"),t("y"),t("z"))}).setLayout({name:"burnColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),TA=$(({base:i,blend:e})=>{const t=n=>e[n].equal(1).cond(e[n],i[n].div(e[n].oneMinus()).max(0));return L(t("x"),t("y"),t("z"))}).setLayout({name:"dodgeColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),EA=$(({base:i,blend:e})=>{const t=n=>i[n].oneMinus().mul(e[n].oneMinus()).oneMinus();return L(t("x"),t("y"),t("z"))}).setLayout({name:"screenColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]}),AA=$(({base:i,blend:e})=>{const t=n=>i[n].lessThan(.5).cond(i[n].mul(e[n],2),i[n].oneMinus().mul(e[n].oneMinus()).oneMinus());return L(t("x"),t("y"),t("z"))}).setLayout({name:"overlayColor",type:"vec3",inputs:[{name:"base",type:"vec3"},{name:"blend",type:"vec3"}]});class Qt extends yt{constructor(e,t,n){super(),this.blendMode=e,this.baseNode=t,this.blendNode=n}setup(){const{blendMode:e,baseNode:t,blendNode:n}=this,s={base:t,blend:n};let o=null;return e===Qt.BURN?o=SA(s):e===Qt.DODGE?o=TA(s):e===Qt.SCREEN?o=EA(s):e===Qt.OVERLAY&&(o=AA(s)),o}}Qt.BURN="burn";Qt.DODGE="dodge";Qt.SCREEN="screen";Qt.OVERLAY="overlay";const NA=k(Qt,Qt.BURN),wA=k(Qt,Qt.DODGE),bA=k(Qt,Qt.OVERLAY),RA=k(Qt,Qt.SCREEN);z("burn",NA);z("dodge",wA);z("overlay",bA);z("screen",RA);te("BlendModeNode",Qt);const CA=$(({textureNode:i,bumpScale:e})=>{const t=s=>i.cache().context({getUV:o=>s(o.uvNode||xi()),forceUVContext:!0}),n=w(t(s=>s));return Ee(w(t(s=>s.add(s.dFdx()))).sub(n),w(t(s=>s.add(s.dFdy()))).sub(n)).mul(e)}),LA=$(i=>{const{surf_pos:e,surf_norm:t,dHdxy:n}=i,s=e.dFdx().normalize(),o=e.dFdy().normalize(),r=t,a=o.cross(r),c=r.cross(s),l=s.dot(a).mul(da),u=l.sign().mul(n.x.mul(a).add(n.y.mul(c)));return l.abs().mul(t).sub(u).normalize()});class Gp extends yt{constructor(e,t=null){super("vec3"),this.textureNode=e,this.scaleNode=t}setup(){const e=this.scaleNode!==null?this.scaleNode:1,t=CA({textureNode:this.textureNode,bumpScale:e});return LA({surf_pos:Ln,surf_norm:ns,dHdxy:t})}}const PA=k(Gp);z("bumpMap",PA);te("BumpMapNode",Gp);const IA=$(({color:i,adjustment:e})=>e.mix(Wp(i.rgb),i.rgb)),DA=$(({color:i,adjustment:e})=>{const t=Un(i.r,i.g,i.b).div(3),n=i.r.max(i.g.max(i.b)),s=n.sub(t).mul(e).mul(-3);return $t(i.rgb,n,s)}),UA=$(({color:i,adjustment:e})=>{const t=L(.57735,.57735,.57735),n=e.cos();return L(i.rgb.mul(n).add(t.cross(i.rgb).mul(e.sin()).add(t.mul(wo(t,i.rgb).mul(n.oneMinus())))))});class Tn extends yt{constructor(e,t,n=w(1)){super("vec3"),this.method=e,this.colorNode=t,this.adjustmentNode=n}setup(){const{method:e,colorNode:t,adjustmentNode:n}=this,s={color:t,adjustment:n};let o=null;return e===Tn.SATURATION?o=IA(s):e===Tn.VIBRANCE?o=DA(s):e===Tn.HUE?o=UA(s):console.error(`${this.type}: Method "${this.method}" not supported!`),o}}Tn.SATURATION="saturation";Tn.VIBRANCE="vibrance";Tn.HUE="hue";const OA=k(Tn,Tn.SATURATION),FA=k(Tn,Tn.VIBRANCE),VA=k(Tn,Tn.HUE),zA=L(.2125,.7154,.0721),Wp=(i,e=zA)=>wo(i,e),Xp=(i,e)=>$t(L(0),i,Wp(i).sub(e).max(0));z("saturation",OA);z("vibrance",FA);z("hue",VA);z("threshold",Xp);te("ColorAdjustmentNode",Tn);const BA=$(i=>{const{eye_pos:e,surf_norm:t,mapN:n,uv:s}=i,o=e.dFdx(),r=e.dFdy(),a=s.dFdx(),c=s.dFdy(),l=t,u=r.cross(l),h=l.cross(o),d=u.mul(a.x).add(h.mul(c.x)),p=u.mul(a.y).add(h.mul(c.y)),g=d.dot(d).max(p.dot(p)),x=da.mul(g.inverseSqrt());return Un(d.mul(n.x,x),p.mul(n.y,x),l.mul(n.z)).normalize()});class qp extends yt{constructor(e,t=null){super("vec3"),this.node=e,this.scaleNode=t,this.normalMapType=Ii}setup(e){const{normalMapType:t,scaleNode:n}=this;let s=this.node.mul(2).sub(1);n!==null&&(s=L(s.xy.mul(n),s.z));let o=null;return t===Rd?o=Wf.mul(s).normalize():t===Ii&&(e.hasGeometryAttribute("tangent")===!0?o=to.mul(s).normalize():o=BA({eye_pos:Ln,surf_norm:ns,mapN:s,uv:xi()})),o}}const HA=k(qp);z("normalMap",HA);te("NormalMapNode",qp);class Yp extends yt{constructor(e,t){super(),this.sourceNode=e,this.stepsNode=t}setup(){const{sourceNode:e,stepsNode:t}=this;return e.mul(t).floor().div(t)}}const kA=k(Yp);z("posterize",kA);te("PosterizeNode",Yp);const GA=$(({color:i,exposure:e})=>i.mul(e).clamp()),WA=$(({color:i,exposure:e})=>(i=i.mul(e),i.div(i.add(1)).clamp())),XA=$(({color:i,exposure:e})=>{i=i.mul(e),i=i.sub(.004).max(0);const t=i.mul(i.mul(6.2).add(.5)),n=i.mul(i.mul(6.2).add(1.7)).add(.06);return t.div(n).pow(2.2)}),qA=$(({color:i})=>{const e=i.mul(i.add(.0245786)).sub(90537e-9),t=i.mul(i.add(.432951).mul(.983729)).add(.238081);return e.div(t)}),YA=$(({color:i,exposure:e})=>{const t=ii(.59719,.35458,.04823,.076,.90834,.01566,.0284,.13383,.83777),n=ii(1.60475,-.53108,-.07367,-.10208,1.10813,-.00605,-.00327,-.07276,1.07602);return i=i.mul(e).div(.6),i=t.mul(i),i=qA({color:i}),i=n.mul(i),i.clamp()}),jA=ii(L(1.6605,-.1246,-.0182),L(-.5876,1.1329,-.1006),L(-.0728,-.0083,1.1187)),$A=ii(L(.6274,.0691,.0164),L(.3293,.9195,.088),L(.0433,.0113,.8956)),KA=$(([i])=>{const e=L(i).toVar(),t=L(e.mul(e)).toVar(),n=L(t.mul(t)).toVar();return w(15.5).mul(n.mul(t)).sub(ot(40.14,n.mul(e))).add(ot(31.96,n).sub(ot(6.868,t.mul(e))).add(ot(.4298,t).add(ot(.1191,e).sub(.00232))))}),ZA=$(({color:i,exposure:e})=>{const t=L(i).toVar(),n=ii(L(.856627153315983,.137318972929847,.11189821299995),L(.0951212405381588,.761241990602591,.0767994186031903),L(.0482516061458583,.101439036467562,.811302368396859)),s=ii(L(1.1271005818144368,-.1413297634984383,-.14132976349843826),L(-.11060664309660323,1.157823702216272,-.11060664309660294),L(-.016493938717834573,-.016493938717834257,1.2519364065950405)),o=w(-12.47393),r=w(4.026069);return t.mulAssign(e),t.assign($A.mul(t)),t.assign(n.mul(t)),t.assign(sn(t,1e-10)),t.assign(Na(t)),t.assign(t.sub(o).div(r.sub(o))),t.assign(So(t,0,1)),t.assign(KA(t)),t.assign(s.mul(t)),t.assign(fi(sn(L(0),t),L(2.2))),t.assign(jA.mul(t)),t.assign(So(t,0,1)),t}),JA={[_d]:GA,[xd]:WA,[vd]:XA,[yd]:YA,[Md]:ZA};class jp extends yt{constructor(e=In,t=eN,n=null){super("vec3"),this.toneMapping=e,this.exposureNode=t,this.colorNode=n}getCacheKey(){let e=super.getCacheKey();return e="{toneMapping:"+this.toneMapping+",nodes:"+e+"}",e}setup(e){const t=this.colorNode||e.context.color,n=this.toneMapping;if(n===In)return t;const s={exposure:this.exposureNode,color:t},o=JA[n];let r=null;return o?r=o(s):(console.error("ToneMappingNode: Unsupported Tone Mapping configuration.",n),r=t),r}}const QA=(i,e,t)=>pe(new jp(i,pe(e),pe(t))),eN=pA("toneMappingExposure","float");z("toneMapping",(i,e,t)=>QA(e,t,i));te("ToneMappingNode",jp);let Pc=null;class $p extends ar{constructor(e=Zo,t=null){Pc===null&&(Pc=new Zd),super(e,t,Pc)}updateReference(){return this}}const tN=k($p);z("viewportSharedTexture",tN);te("ViewportSharedTextureNode",$p);const nN=new Te;class hl extends Cs{constructor(e,t){super(t),this.passNode=e,this.setUpdateMatrix(!1)}setup(e){return this.passNode.build(e),super.setup(e)}clone(){return new this.constructor(this.passNode,this.value)}}class cr extends yt{constructor(e,t,n){super("vec4"),this.scope=e,this.scene=t,this.camera=n,this._pixelRatio=1,this._width=1,this._height=1;const s=new ir;s.isRenderTargetTexture=!0,s.name="PostProcessingDepth";const o=new Qi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:er});o.texture.name="PostProcessing",o.depthTexture=s,this.renderTarget=o,this.updateBeforeType=Tt.FRAME,this._textureNode=pe(new hl(this,o.texture)),this._depthTextureNode=pe(new hl(this,s)),this._depthNode=null,this._viewZNode=null,this._cameraNear=rt(0),this._cameraFar=rt(0),this.isPassNode=!0}isGlobal(){return!0}getTextureNode(){return this._textureNode}getTextureDepthNode(){return this._depthTextureNode}getViewZNode(){if(this._viewZNode===null){const e=this._cameraNear,t=this._cameraFar;this._viewZNode=gp(this._depthTextureNode,e,t)}return this._viewZNode}getDepthNode(){if(this._depthNode===null){const e=this._cameraNear,t=this._cameraFar;this._depthNode=rl(this.getViewZNode(),e,t)}return this._depthNode}setup(){return this.scope===cr.COLOR?this.getTextureNode():this.getDepthNode()}updateBefore(e){const{renderer:t}=e,{scene:n,camera:s}=this;this._pixelRatio=t.getPixelRatio();const o=t.getSize(nN);this.setSize(o.width,o.height);const r=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget();this._cameraNear.value=s.near,this._cameraFar.value=s.far,t.toneMapping=In,t.toneMappingNode=null,t.setRenderTarget(this.renderTarget),t.render(n,s),t.toneMapping=r,t.toneMappingNode=a,t.setRenderTarget(c)}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget.setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget.dispose()}}cr.COLOR="color";cr.DEPTH="depth";const Zl=(i,e)=>pe(new hl(i,e));te("PassNode",cr);const Ic=new Rl(-1,1,1,-1,0,1);class iN extends Ui{constructor(e=!1){super();const t=e===!1?[0,-1,0,1,2,1]:[0,2,0,0,2,0];this.setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Hn(t,2))}}const sN=new iN;class Pa extends Gt{constructor(e=null){super(sN,e),this.camera=Ic}renderAsync(e){return e.renderAsync(this,Ic)}render(e){e.render(this,Ic)}}const od=new Pa,rd=new Pa;class oN extends yt{constructor(e,t=2){super("vec4"),this.textureNode=e,this.sigma=t,this.directionNode=Ee(1),this._invSize=rt(new Te),this._passDirection=rt(new Te),this._horizontalRT=new Qi,this._horizontalRT.texture.name="GaussianBlurNode.horizontal",this._verticalRT=new Qi,this._verticalRT.texture.name="GaussianBlurNode.vertical",this._textureNode=Zl(this,this._verticalRT.texture),this.updateBeforeType=Tt.RENDER,this.resolution=new Te(1,1)}setSize(e,t){e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._invSize.value.set(1/e,1/t),this._horizontalRT.setSize(e,t),this._verticalRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value,o=t.getRenderTarget(),r=n.value;od.material=this._material,rd.material=this._material,this.setSize(s.image.width,s.image.height);const a=s.type;this._horizontalRT.texture.type=a,this._verticalRT.texture.type=a,t.setRenderTarget(this._horizontalRT),this._passDirection.value.set(1,0),od.render(t),n.value=this._horizontalRT.texture,t.setRenderTarget(this._verticalRT),this._passDirection.value.set(0,1),rd.render(t),t.setRenderTarget(o),n.value=r}getTextureNode(){return this._textureNode}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("GaussianBlurNode requires a TextureNode."),Se();const n=t.uvNode||xi(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),o=$(()=>{const c=3+2*this.sigma,l=this._getCoefficients(c),u=this._invSize,h=Ee(this.directionNode).mul(this._passDirection),d=w(l[0]).toVar(),p=Se(s(n).mul(d)).toVar();for(let g=1;g<c;g++){const x=w(g),m=w(l[g]),f=Ee(h.mul(u.mul(x))).toVar(),E=Se(s(n.add(f))),y=Se(s(n.sub(f)));p.addAssign(E.add(y).mul(m)),d.addAssign(ot(2,m))}return p.div(d)}),r=this._material||(this._material=e.createNodeMaterial());r.fragmentNode=o();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}_getCoefficients(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return t}}const rN=(i,e)=>pe(new oN(pe(i),e));z("gaussianBlur",rN);const Dc=new Te,ad=new Pa;class aN extends yt{constructor(e,t=.96){super(e),this.textureNode=e,this.textureNodeOld=Dn(),this.damp=rt(t),this._compRT=new Qi,this._compRT.texture.name="AfterImageNode.comp",this._oldRT=new Qi,this._oldRT.texture.name="AfterImageNode.old",this._textureNode=Zl(this,this._compRT.texture),this.updateBeforeType=Tt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._compRT.setSize(e,t),this._oldRT.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,o=n.value.type;this._compRT.texture.type=o,this._oldRT.texture.type=o,t.getDrawingBufferSize(Dc),this.setSize(Dc.x,Dc.y);const r=t.toneMapping,a=t.toneMappingNode,c=t.getRenderTarget(),l=n.value;this.textureNodeOld.value=this._oldRT.texture,t.toneMapping=In,t.toneMappingNode=null,t.setRenderTarget(this._compRT),ad.render(t);const u=this._oldRT;this._oldRT=this._compRT,this._compRT=u,t.toneMapping=r,t.toneMappingNode=a,t.setRenderTarget(c),n.value=l}setup(e){const t=this.textureNode,n=this.textureNodeOld;if(t.isTextureNode!==!0)return console.error("AfterImageNode requires a TextureNode."),Se();const s=t.uvNode||xi();n.uvNode=s;const o=u=>t.cache().context({getUV:()=>u,forceUVContext:!0}),r=$(([u,h])=>{const d=w(h).toVar(),p=Se(u).toVar();return sn(ql(p.sub(d)),0)}),a=$(()=>{const u=Se(n),h=Se(o(s));return u.mulAssign(this.damp.mul(r(u,.1))),sn(h,u)}),c=this._materialComposed||(this._materialComposed=e.createNodeMaterial());c.fragmentNode=a(),ad.material=c;const l=e.getNodeProperties(this);return l.textureNode=t,this._textureNode}}const cN=(i,e)=>pe(new aN(pe(i),e));z("afterImage",cN);const cd=new Pa;class lN extends yt{constructor(e,t,n,s){super("vec4"),this.textureNode=e,this.tresholdNode=t,this.scaleNode=n,this.colorNode=L(.1,0,1),this.samples=s,this.resolution=new Te(1,1),this._renderTarget=new Qi,this._renderTarget.texture.name="anamorphic",this._invSize=rt(new Te),this._textureNode=Zl(this,this._renderTarget.texture),this.updateBeforeType=Tt.RENDER}getTextureNode(){return this._textureNode}setSize(e,t){this._invSize.value.set(1/e,1/t),e=Math.max(Math.round(e*this.resolution.x),1),t=Math.max(Math.round(t*this.resolution.y),1),this._renderTarget.setSize(e,t)}updateBefore(e){const{renderer:t}=e,n=this.textureNode,s=n.value;this._renderTarget.texture.type=s.type;const o=t.getRenderTarget(),r=n.value;cd.material=this._material,this.setSize(s.image.width,s.image.height),t.setRenderTarget(this._renderTarget),cd.render(t),t.setRenderTarget(o),n.value=r}setup(e){const t=this.textureNode;if(t.isTextureNode!==!0)return console.error("AnamorphNode requires a TextureNode."),Se();const n=t.uvNode||xi(),s=c=>t.cache().context({getUV:()=>c,forceUVContext:!0}),o=$(()=>{const c=this.samples,l=Math.floor(c/2),u=L(0).toVar();return vt({start:-l,end:l},({i:h})=>{const d=w(h).abs().div(l).oneMinus(),p=Ee(n.x.add(this._invSize.x.mul(h).mul(this.scaleNode)),n.y),g=s(p),x=Xp(g,this.tresholdNode).mul(d);u.addAssign(x)}),u.mul(this.colorNode)}),r=this._material||(this._material=e.createNodeMaterial());r.fragmentNode=o();const a=e.getNodeProperties(this);return a.textureNode=t,this._textureNode}}const uN=(i,e=.9,t=3,n=32)=>pe(new lN(pe(i),pe(e),pe(t),n));z("anamorphic",uN);class Kp extends yt{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],n=this.functionNode,s=n.getInputs(e),o=this.parameters;if(Array.isArray(o))for(let a=0;a<o.length;a++){const c=s[a],l=o[a];t.push(l.build(e,c.type))}else for(const a of s){const c=o[a.name];if(c!==void 0)t.push(c.build(e,a.type));else throw new Error(`FunctionCallNode: Input '${a.name}' not found in FunctionNode.`)}return`${n.build(e,"property")}( ${t.join(", ")} )`}}const hN=(i,...e)=>(e=e.length>1||e[0]&&e[0].isNode===!0?oo(e):Ea(e[0]),pe(new Kp(pe(i),e)));z("call",hN);te("FunctionCallNode",Kp);class Zp extends Ue{constructor(e=null){super(),this._value=e,this._cache=null,this.inputType=null,this.outpuType=null,this.events=new Di,this.isScriptableValueNode=!0}get isScriptableOutputNode(){return this.outputType!==null}set value(e){this._value!==e&&(this._cache&&this.inputType==="URL"&&this.value.value instanceof ArrayBuffer&&(URL.revokeObjectURL(this._cache),this._cache=null),this._value=e,this.events.dispatchEvent({type:"change"}),this.refresh())}get value(){return this._value}refresh(){this.events.dispatchEvent({type:"refresh"})}getValue(){const e=this.value;if(e&&this._cache===null&&this.inputType==="URL"&&e.value instanceof ArrayBuffer)this._cache=URL.createObjectURL(new Blob([e.value]));else if(e&&e.value!==null&&e.value!==void 0&&((this.inputType==="URL"||this.inputType==="String")&&typeof e.value=="string"||this.inputType==="Number"&&typeof e.value=="number"||this.inputType==="Vector2"&&e.value.isVector2||this.inputType==="Vector3"&&e.value.isVector3||this.inputType==="Vector4"&&e.value.isVector4||this.inputType==="Color"&&e.value.isColor||this.inputType==="Matrix3"&&e.value.isMatrix3||this.inputType==="Matrix4"&&e.value.isMatrix4))return e.value;return this._cache||e}getNodeType(e){return this.value&&this.value.isNode?this.value.getNodeType(e):"float"}setup(){return this.value&&this.value.isNode?this.value:w()}serialize(e){super.serialize(e),this.value!==null?this.inputType==="ArrayBuffer"?e.value=sf(this.value):e.value=this.value?this.value.toJSON(e.meta).uuid:null:e.value=null,e.inputType=this.inputType,e.outputType=this.outputType}deserialize(e){super.deserialize(e);let t=null;e.value!==null&&(e.inputType==="ArrayBuffer"?t=of(e.value):e.inputType==="Texture"?t=e.meta.textures[e.value]:t=e.meta.nodes[e.value]||null),this.value=t,this.inputType=e.inputType,this.outputType=e.outputType}}const $r=k(Zp);z("scriptableValue",$r);te("ScriptableValueNode",Zp);class Jp extends Map{get(e,t=null,...n){if(this.has(e))return super.get(e);if(t!==null){const s=t(...n);return this.set(e,s),s}}}class dN{constructor(e){this.scriptableNode=e}get parameters(){return this.scriptableNode.parameters}get layout(){return this.scriptableNode.getLayout()}getInputLayout(e){return this.scriptableNode.getInputLayout(e)}get(e){const t=this.parameters[e];return t?t.getValue():null}}const Uc=new Jp;class Qp extends Ue{constructor(e=null,t={}){super(),this.codeNode=e,this.parameters=t,this._local=new Jp,this._output=$r(),this._outputs={},this._source=this.source,this._method=null,this._object=null,this._value=null,this._needsOutputUpdate=!0,this.onRefresh=this.onRefresh.bind(this),this.isScriptableNode=!0}get source(){return this.codeNode?this.codeNode.code:""}setLocal(e,t){return this._local.set(e,t)}getLocal(e){return this._local.get(e)}onRefresh(){this._refresh()}getInputLayout(e){for(const t of this.getLayout())if(t.inputType&&(t.id===e||t.name===e))return t}getOutputLayout(e){for(const t of this.getLayout())if(t.outputType&&(t.id===e||t.name===e))return t}setOutput(e,t){const n=this._outputs;return n[e]===void 0?n[e]=$r(t):n[e].value=t,this}getOutput(e){return this._outputs[e]}getParameter(e){return this.parameters[e]}setParameter(e,t){const n=this.parameters;return t&&t.isScriptableNode?(this.deleteParameter(e),n[e]=t,n[e].getDefaultOutput().events.addEventListener("refresh",this.onRefresh)):t&&t.isScriptableValueNode?(this.deleteParameter(e),n[e]=t,n[e].events.addEventListener("refresh",this.onRefresh)):n[e]===void 0?(n[e]=$r(t),n[e].events.addEventListener("refresh",this.onRefresh)):n[e].value=t,this}getValue(){return this.getDefaultOutput().getValue()}deleteParameter(e){let t=this.parameters[e];return t&&(t.isScriptableNode&&(t=t.getDefaultOutput()),t.events.removeEventListener("refresh",this.onRefresh)),this}clearParameters(){for(const e of Object.keys(this.parameters))this.deleteParameter(e);return this.needsUpdate=!0,this}call(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s(...t)}async callAsync(e,...t){const s=this.getObject()[e];if(typeof s=="function")return s.constructor.name==="AsyncFunction"?await s(...t):s(...t)}getNodeType(e){return this.getDefaultOutputNode().getNodeType(e)}refresh(e=null){e!==null?this.getOutput(e).refresh():this._refresh()}getObject(){if(this.needsUpdate&&this.dispose(),this._object!==null)return this._object;const e=()=>this.refresh(),t=(l,u)=>this.setOutput(l,u),n=new dN(this),s=Uc.get("THREE"),o=Uc.get("TSL"),r=this.getMethod(this.codeNode),a=[n,this._local,Uc,e,t,s,o];this._object=r(...a);const c=this._object.layout;if(c&&(c.cache===!1&&this._local.clear(),this._output.outputType=c.outputType||null,Array.isArray(c.elements)))for(const l of c.elements){const u=l.id||l.name;l.inputType&&(this.getParameter(u)===void 0&&this.setParameter(u,null),this.getParameter(u).inputType=l.inputType),l.outputType&&(this.getOutput(u)===void 0&&this.setOutput(u,null),this.getOutput(u).outputType=l.outputType)}return this._object}deserialize(e){super.deserialize(e);for(const t in this.parameters){let n=this.parameters[t];n.isScriptableNode&&(n=n.getDefaultOutput()),n.events.addEventListener("refresh",this.onRefresh)}}getLayout(){return this.getObject().layout}getDefaultOutputNode(){const e=this.getDefaultOutput().value;return e&&e.isNode?e:w()}getDefaultOutput(){return this._exec()._output}getMethod(){if(this.needsUpdate&&this.dispose(),this._method!==null)return this._method;const e=["parameters","local","global","refresh","setOutput","THREE","TSL"],n=["layout","init","main","dispose"].join(", "),s="var "+n+`; var output = {};
`,o=`
return { ...output, `+n+" };",r=s+this.codeNode.code+o;return this._method=new Function(...e,r),this._method}dispose(){this._method!==null&&(this._object&&typeof this._object.dispose=="function"&&this._object.dispose(),this._method=null,this._object=null,this._source=null,this._value=null,this._needsOutputUpdate=!0,this._output.value=null,this._outputs={})}setup(){return this.getDefaultOutputNode()}set needsUpdate(e){e===!0&&this.dispose()}get needsUpdate(){return this.source!==this._source}_exec(){return this.codeNode===null?this:(this._needsOutputUpdate===!0&&(this._value=this.call("main"),this._needsOutputUpdate=!1),this._output.value=this._value,this)}_refresh(){this.needsUpdate=!0,this._exec(),this._output.refresh()}}const fN=k(Qp);z("scriptable",fN);te("ScriptableNode",Qp);class Ia extends Ue{constructor(e,t){super("float"),this.isFogNode=!0,this.colorNode=e,this.factorNode=t}getViewZNode(e){let t;const n=e.context.getViewZ;return n!==void 0&&(t=n(this)),(t||Ln.z).negate()}setup(){return this.factorNode}}const pN=k(Ia);z("fog",pN);te("FogNode",Ia);class em extends Ia{constructor(e,t,n){super(e),this.isFogRangeNode=!0,this.nearNode=t,this.farNode=n}setup(e){const t=this.getViewZNode(e);return mi(this.nearNode,this.farNode,t)}}const mN=k(em);z("rangeFog",mN);te("FogRangeNode",em);class tm extends Ia{constructor(e,t){super(e),this.isFogExp2Node=!0,this.densityNode=t}setup(e){const t=this.getViewZNode(e),n=this.densityNode;return n.mul(n,t,t).negate().exp().oneMinus()}}const gN=k(tm);z("densityFog",gN);te("FogExp2Node",tm);let fs=null,ps=null;class nm extends Ue{constructor(e=w(),t=w()){super(),this.minNode=e,this.maxNode=t}getVectorLength(e){const t=e.getTypeLength(ji(this.minNode.value)),n=e.getTypeLength(ji(this.maxNode.value));return t>n?t:n}getNodeType(e){return e.object.isInstancedMesh===!0?e.getTypeFromLength(this.getVectorLength(e)):"float"}setup(e){const t=e.object;let n=null;if(t.isInstancedMesh===!0){const s=this.minNode.value,o=this.maxNode.value,r=e.getTypeLength(ji(s)),a=e.getTypeLength(ji(o));fs=fs||new at,ps=ps||new at,fs.setScalar(0),ps.setScalar(0),r===1?fs.setScalar(s):s.isColor?fs.set(s.r,s.g,s.b):fs.set(s.x,s.y,s.z||0,s.w||0),a===1?ps.setScalar(o):o.isColor?ps.set(o.r,o.g,o.b):ps.set(o.x,o.y,o.z||0,o.w||0);const c=4,l=c*t.count,u=new Float32Array(l);for(let d=0;d<l;d++){const p=d%c,g=fs.getComponent(p),x=ps.getComponent(p);u[d]=qo.lerp(g,x,Math.random())}const h=this.getNodeType(e);n=Yl(u,"vec4",t.count).element(gf).convert(h)}else n=w(0);return n}}k(nm);te("RangeNode",nm);class im extends Ue{constructor(e,t,n=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=t,this.workgroupSize=n,this.dispatchCount=0,this.version=1,this.updateBeforeType=Tt.OBJECT,this.updateDispatchCount()}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let n=t[0];for(let s=1;s<t.length;s++)n*=t[s];this.dispatchCount=Math.ceil(e/n)}onInit(){}updateBefore({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if(t==="compute"){const n=this.computeNode.build(e,"void");n!==""&&e.addLineFlowCode(n)}}}const _N=(i,e,t)=>pe(new im(pe(i),e,t));z("compute",_N);te("ComputeNode",im);class Ns extends Ue{constructor(e=Ns.TARGET_DIRECTION,t=null){super(),this.scope=e,this.light=t}setup(){const{scope:e,light:t}=this;let n=null;return e===Ns.TARGET_DIRECTION&&(n=Ro.transformDirection(el(t).sub(el(t.target)))),n}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}Ns.TARGET_DIRECTION="targetDirection";const sm=k(Ns,Ns.TARGET_DIRECTION);te("LightNode",Ns);const om=$(i=>{const{lightDistance:e,cutoffDistance:t,decayExponent:n}=i,s=e.pow(n).max(.01).reciprocal();return t.greaterThan(0).cond(s.mul(e.div(t).pow4().oneMinus().clamp().pow2()),s)});class rm extends Ls{constructor(e=null){super(e),this.cutoffDistanceNode=rt(0),this.decayExponentNode=rt(0)}update(e){const{light:t}=this;super.update(e),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}setup(e){const{colorNode:t,cutoffDistanceNode:n,decayExponentNode:s,light:o}=this,r=e.context.lightingModel,a=Gf(o).sub(Ln),c=a.normalize(),l=a.length(),u=om({lightDistance:l,cutoffDistance:n,decayExponent:s}),h=t.mul(u),d=e.context.reflectedLight;r.direct({lightDirection:c,lightColor:h,reflectedLight:d,shadowMask:this.shadowMaskNode},e.stack,e)}}te("PointLightNode",rm);Co(va,rm);class am extends Ls{constructor(e=null){super(e)}setup(e){super.setup(e);const t=e.context.lightingModel,n=this.colorNode,s=sm(this.light),o=e.context.reflectedLight;t.direct({lightDirection:s,lightColor:n,reflectedLight:o,shadowMask:this.shadowMaskNode},e.stack,e)}}te("DirectionalLightNode",am);Co(qM,am);class Jl extends Ls{constructor(e=null){super(e),this.coneCosNode=rt(0),this.penumbraCosNode=rt(0),this.cutoffDistanceNode=rt(0),this.decayExponentNode=rt(0)}update(e){super.update(e);const{light:t}=this;this.coneCosNode.value=Math.cos(t.angle),this.penumbraCosNode.value=Math.cos(t.angle*(1-t.penumbra)),this.cutoffDistanceNode.value=t.distance,this.decayExponentNode.value=t.decay}getSpotAttenuation(e){const{coneCosNode:t,penumbraCosNode:n}=this;return mi(t,n,e)}setup(e){super.setup(e);const t=e.context.lightingModel,{colorNode:n,cutoffDistanceNode:s,decayExponentNode:o,light:r}=this,a=Gf(r).sub(Ln),c=a.normalize(),l=c.dot(sm(r)),u=this.getSpotAttenuation(l),h=a.length(),d=om({lightDistance:h,cutoffDistance:s,decayExponent:o}),p=n.mul(u).mul(d),g=e.context.reflectedLight;t.direct({lightDirection:c,lightColor:p,reflectedLight:g,shadowMask:this.shadowMaskNode},e.stack,e)}}te("SpotLightNode",Jl);Co(Qd,Jl);class xN extends Qd{constructor(e,t,n,s,o,r){super(e,t,n,s,o,r),this.iesMap=null}copy(e,t){return super.copy(e,t),this.iesMap=e.iesMap,this}}class cm extends Jl{getSpotAttenuation(e){const t=this.light.iesMap;let n=null;if(t&&t.isTexture===!0){const s=e.acos().mul(1/Math.PI);n=Dn(t,Ee(s,0),0).r}else n=super.getSpotAttenuation(e);return n}}te("IESSpotLightNode",cm);Co(xN,cm);class lm extends Ls{constructor(e=null){super(e)}setup({context:e}){e.irradiance.addAssign(this.colorNode)}}te("AmbientLightNode",lm);Co(ef,lm);class um extends Ls{constructor(e=null){super(e),this.lightPositionNode=el(e),this.lightDirectionNode=this.lightPositionNode.normalize(),this.groundColorNode=rt(new Fe)}update(e){const{light:t}=this;super.update(e),this.lightPositionNode.object3d=t,this.groundColorNode.value.copy(t.groundColor).multiplyScalar(t.intensity)}setup(e){const{colorNode:t,groundColorNode:n,lightDirectionNode:s}=this,r=ns.dot(s).mul(.5).add(.5),a=$t(n,t,r);e.context.irradiance.addAssign(a)}}te("HemisphereLightNode",um);Co(kM,um);const vN=$(i=>{const e=i.uv.mul(2),t=e.x.floor(),n=e.y.floor();return t.add(n).mod(2).sign()});class hm extends yt{constructor(e=xi()){super("float"),this.uvNode=e}setup(){return vN({uv:this.uvNode})}}const yN=k(hm);z("checker",yN);te("CheckerNode",hm);const MN=new Kd;class SN extends pn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.pointWidth=1,this.pointColorNode=null,this.setDefaultValues(MN),this.setupShaders(),this.setValues(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor;this.vertexNode=$(()=>{Wt(Ee(),"vUv").assign(xi());const n=nn("instancePosition"),s=Rt("vec4","mvPos");s.assign(As.mul(Se(n,1)));const o=uo.z.div(uo.w),r=li.mul(s),a=Rt("vec2","offset");return a.assign(xn.xy),a.assign(a.mul(_E)),a.assign(a.div(uo.z)),a.y.assign(a.y.mul(o)),a.assign(a.mul(r.w)),r.assign(r.add(Se(a,0,0))),r})(),this.fragmentNode=$(()=>{const n=Wt(Ee(),"vUv"),s=Rt("float","alpha");s.assign(1);const o=n.x,r=n.y,a=o.mul(o).add(r.mul(r));if(e){const l=Rt("float","dlen");l.assign(a.fwidth()),s.assign(mi(l.oneMinus(),l.add(1),a).oneMinus())}else a.greaterThan(1).discard();let c;return this.pointColorNode?c=this.pointColorNode:t?c=nn("instanceColor").mul(Ko):c=Ko,Se(c,s)})(),this.needsUpdate=!0}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.setupShaders())}}en("InstancedPointsNodeMaterial",SN);const TN=new $d;class EN extends pn{constructor(e){super(),this.isLineBasicNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(TN),this.setValues(e)}}en("LineBasicNodeMaterial",EN);const AN=new Jd;class NN extends pn{constructor(e){super(),this.isLineDashedNodeMaterial=!0,this.lights=!1,this.normals=!1,this.setDefaultValues(AN),this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setupVariants(){const e=this.offsetNode,t=this.dashScaleNode?w(this.dashScaleNode):tl,n=this.dashSizeNode?w(this.dashSizeNode):Yf,s=this.dashSizeNode?w(this.dashGapNode):jf;co.assign(n),ca.assign(s);const o=Wt(nn("lineDistance").mul(t));(e?o.add(e):o).mod(co.add(ca)).greaterThan(co).discard()}}en("LineDashedNodeMaterial",NN);const wN=new Jd;class bN extends pn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.setDefaultValues(wN),this.useAlphaToCoverage=!0,this.useColor=e.vertexColors,this.useDash=e.dashed,this.useWorldUnits=!1,this.dashOffset=0,this.lineWidth=1,this.lineColorNode=null,this.offsetNode=null,this.dashScaleNode=null,this.dashSizeNode=null,this.gapSizeNode=null,this.setValues(e)}setup(e){this.setupShaders(),super.setup(e)}setupShaders(){const e=this.alphaToCoverage,t=this.useColor,n=this.dashed,s=this.worldUnits,o=$(({start:a,end:c})=>{const l=li.element(2).element(2),d=li.element(3).element(2).mul(-.5).div(l).sub(a.z).div(c.z.sub(a.z));return Se($t(a.xyz,c.xyz,d),c.w)});this.vertexNode=$(()=>{ai("vec2","vUv").assign(xi());const a=nn("instanceStart"),c=nn("instanceEnd"),l=Rt("vec4","start"),u=Rt("vec4","end");l.assign(As.mul(Se(a,1))),u.assign(As.mul(Se(c,1))),s&&(ai("vec3","worldStart").assign(l.xyz),ai("vec3","worldEnd").assign(u.xyz));const h=uo.z.div(uo.w),d=li.element(2).element(3).equal(-1);Je(d,()=>{Je(l.z.lessThan(0).and(u.z.greaterThan(0)),()=>{u.assign(o({start:l,end:u}))}).elseif(u.z.lessThan(0).and(l.z.greaterThanEqual(0)),()=>{l.assign(o({start:u,end:l}))})});const p=li.mul(l),g=li.mul(u),x=p.xyz.div(p.w),m=g.xyz.div(g.w),f=m.xy.sub(x.xy).temp();f.x.assign(f.x.mul(h)),f.assign(f.normalize());const E=sa(Se());if(s){const y=u.xyz.sub(l.xyz).normalize(),A=$t(l.xyz,u.xyz,.5).normalize(),V=y.cross(A).normalize(),R=y.cross(V),N=ai("vec4","worldPos");N.assign(xn.y.lessThan(.5).cond(l,u));const F=Sc.mul(.5);N.addAssign(Se(xn.x.lessThan(0).cond(V.mul(F),V.mul(F).negate()),0)),n||(N.addAssign(Se(xn.y.lessThan(.5).cond(y.mul(F).negate(),y.mul(F)),0)),N.addAssign(Se(R.mul(F),0)),Je(xn.y.greaterThan(1).or(xn.y.lessThan(0)),()=>{N.subAssign(Se(R.mul(2).mul(F),0))})),E.assign(li.mul(N));const T=sa(L());T.assign(xn.y.lessThan(.5).cond(x,m)),E.z.assign(T.z.mul(E.w))}else{const y=Rt("vec2","offset");y.assign(Ee(f.y,f.x.negate())),f.x.assign(f.x.div(h)),y.x.assign(y.x.div(h)),y.assign(xn.x.lessThan(0).cond(y.negate(),y)),Je(xn.y.lessThan(0),()=>{y.assign(y.sub(f))}).elseif(xn.y.greaterThan(1),()=>{y.assign(y.add(f))}),y.assign(y.mul(Sc)),y.assign(y.div(uo.w)),E.assign(xn.y.lessThan(.5).cond(p,g)),y.assign(y.mul(E.w)),E.assign(E.add(Se(y,0,0)))}return E})();const r=$(({p1:a,p2:c,p3:l,p4:u})=>{const h=a.sub(l),d=u.sub(l),p=c.sub(a),g=h.dot(d),x=d.dot(p),m=h.dot(p),f=d.dot(d),y=p.dot(p).mul(f).sub(x.mul(x)),V=g.mul(x).sub(m.mul(f)).div(y).clamp(),R=g.add(x.mul(V)).div(f).clamp();return Ee(V,R)});this.fragmentNode=$(()=>{const a=ai("vec2","vUv");if(n){const u=this.offsetNode?w(this.offsetNodeNode):Gh,h=this.dashScaleNode?w(this.dashScaleNode):tl,d=this.dashSizeNode?w(this.dashSizeNode):Yf,p=this.dashSizeNode?w(this.dashGapNode):jf;co.assign(d),ca.assign(p);const g=nn("instanceDistanceStart"),x=nn("instanceDistanceEnd"),m=xn.y.lessThan(.5).cond(h.mul(g),tl.mul(x)),f=Wt(m.add(Gh)),E=u?f.add(u):f;a.y.lessThan(-1).or(a.y.greaterThan(1)).discard(),E.mod(co.add(ca)).greaterThan(co).discard()}const c=Rt("float","alpha");if(c.assign(1),s){const u=ai("vec3","worldStart"),h=ai("vec3","worldEnd"),d=ai("vec4","worldPos").xyz.normalize().mul(1e5),p=h.sub(u),g=r({p1:u,p2:h,p3:L(0,0,0),p4:d}),x=u.add(p.mul(g.x)),m=d.mul(g.y),y=x.sub(m).length().div(Sc);if(!n)if(e){const A=y.fwidth();c.assign(mi(A.negate().add(.5),A.add(.5),y).oneMinus())}else y.greaterThan(.5).discard()}else if(e){const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1)),d=u.mul(u).add(h.mul(h)),p=Rt("float","dlen");p.assign(d.fwidth()),Je(a.y.abs().greaterThan(1),()=>{c.assign(mi(p.oneMinus(),p.add(1),d).oneMinus())})}else Je(a.y.abs().greaterThan(1),()=>{const u=a.x,h=a.y.greaterThan(0).cond(a.y.sub(1),a.y.add(1));u.mul(u).add(h.mul(h)).greaterThan(1).discard()});let l;if(this.lineColorNode)l=this.lineColorNode;else if(t){const u=nn("instanceColorStart"),h=nn("instanceColorEnd");l=xn.y.lessThan(.5).cond(u,h).mul(Ko)}else l=Ko;return Se(l,c)})()}get worldUnits(){return this.useWorldUnits}set worldUnits(e){this.useWorldUnits!==e&&(this.useWorldUnits=e,this.needsUpdate=!0)}get dashed(){return this.useDash}set dashed(e){this.useDash!==e&&(this.useDash=e,this.needsUpdate=!0)}get alphaToCoverage(){return this.useAlphaToCoverage}set alphaToCoverage(e){this.useAlphaToCoverage!==e&&(this.useAlphaToCoverage=e,this.needsUpdate=!0)}}en("Line2NodeMaterial",bN);const RN=new OM;class CN extends pn{constructor(e){super(),this.isMeshNormalNodeMaterial=!0,this.setDefaultValues(RN),this.setValues(e)}setupDiffuseColor(){const e=this.opacityNode?w(this.opacityNode):qf;St.assign(Se(Rp(Ot),e))}}en("MeshNormalNodeMaterial",CN);const LN=new wl;class PN extends pn{constructor(e){super(),this.isMeshBasicNodeMaterial=!0,this.lights=!1,this.setDefaultValues(LN),this.setValues(e)}}en("MeshBasicNodeMaterial",PN);const Jo=$(({f0:i,f90:e,dotVH:t})=>{const n=t.mul(-5.55473).sub(6.98316).mul(t).exp2();return i.mul(n.oneMinus()).add(e.mul(n))}),To=$(i=>i.diffuseColor.mul(1/Math.PI)),IN=()=>w(.25),DN=$(({dotNH:i})=>Kc.mul(w(.5)).add(1).mul(w(1/Math.PI)).mul(i.pow(Kc))),UN=$(({lightDirection:i})=>{const e=i.add(Ct).normalize(),t=Ot.dot(e).clamp(),n=Ct.dot(e).clamp(),s=Jo({f0:Kn,f90:1,dotVH:n}),o=IN(),r=DN({dotNH:t});return s.mul(o).mul(r)});class dm extends Aa{constructor(e=!0){super(),this.specular=e}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const o=Ot.dot(e).clamp().mul(t);n.directDiffuse.addAssign(o.mul(To({diffuseColor:St.rgb}))),this.specular===!0&&n.directSpecular.addAssign(o.mul(UN({lightDirection:e})).mul(JT))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(To({diffuseColor:St})))}}const ON=new FM;class FN extends pn{constructor(e){super(),this.isMeshLambertNodeMaterial=!0,this.lights=!0,this.setDefaultValues(ON),this.setValues(e)}setupLightingModel(){return new dm(!1)}}en("MeshLambertNodeMaterial",FN);const VN=new DM;class zN extends pn{constructor(e){super(),this.isMeshPhongNodeMaterial=!0,this.lights=!0,this.shininessNode=null,this.specularNode=null,this.setDefaultValues(VN),this.setValues(e)}setupLightingModel(){return new dm}setupVariants(){const e=(this.shininessNode?w(this.shininessNode):jT).max(1e-4);Kc.assign(e);const t=this.specularNode||KT;Kn.assign(t)}copy(e){return this.shininessNode=e.shininessNode,this.specularNode=e.specularNode,super.copy(e)}}en("MeshPhongNodeMaterial",zN);const BN=$(()=>{const i=la.dFdx().abs().max(la.dFdy().abs());return i.x.max(i.y).max(i.z)}),fm=$(i=>{const{roughness:e}=i,t=BN();let n=e.max(.0525);return n=n.add(t),n=n.min(1),n}),HN=$(({alpha:i,dotNL:e,dotNV:t})=>{const n=i.pow2(),s=e.mul(n.add(n.oneMinus().mul(t.pow2())).sqrt()),o=t.mul(n.add(n.oneMinus().mul(e.pow2())).sqrt());return ts(.5,s.add(o).max(wf))}).setLayout({name:"V_GGX_SmithCorrelated",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNL",type:"float"},{name:"dotNV",type:"float"}]}),kN=$(({alphaT:i,alphaB:e,dotTV:t,dotBV:n,dotTL:s,dotBL:o,dotNV:r,dotNL:a})=>{const c=a.mul(L(i.mul(t),e.mul(n),r).length()),l=r.mul(L(i.mul(s),e.mul(o),a).length());return ts(.5,c.add(l)).saturate()}).setLayout({name:"V_GGX_SmithCorrelated_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotTV",type:"float",qualifier:"in"},{name:"dotBV",type:"float",qualifier:"in"},{name:"dotTL",type:"float",qualifier:"in"},{name:"dotBL",type:"float",qualifier:"in"},{name:"dotNV",type:"float",qualifier:"in"},{name:"dotNL",type:"float",qualifier:"in"}]}),GN=$(({alpha:i,dotNH:e})=>{const t=i.pow2(),n=e.pow2().mul(t.oneMinus()).oneMinus();return t.div(n.pow2()).mul(1/Math.PI)}).setLayout({name:"D_GGX",type:"float",inputs:[{name:"alpha",type:"float"},{name:"dotNH",type:"float"}]}),WN=w(1/Math.PI),XN=$(({alphaT:i,alphaB:e,dotNH:t,dotTH:n,dotBH:s})=>{const o=i.mul(e),r=L(e.mul(n),i.mul(s),o.mul(t)),a=r.dot(r),c=o.div(a);return WN.mul(o.mul(c.pow2()))}).setLayout({name:"D_GGX_Anisotropic",type:"float",inputs:[{name:"alphaT",type:"float",qualifier:"in"},{name:"alphaB",type:"float",qualifier:"in"},{name:"dotNH",type:"float",qualifier:"in"},{name:"dotTH",type:"float",qualifier:"in"},{name:"dotBH",type:"float",qualifier:"in"}]}),ld=$(i=>{const{lightDirection:e,f0:t,f90:n,roughness:s,f:o,USE_IRIDESCENCE:r,USE_ANISOTROPY:a}=i,c=i.normalView||Ot,l=s.pow2(),u=e.add(Ct).normalize(),h=c.dot(e).clamp(),d=c.dot(Ct).clamp(),p=c.dot(u).clamp(),g=Ct.dot(u).clamp();let x=Jo({f0:t,f90:n,dotVH:g}),m,f;if(Fh(r)&&(x=kl.mix(x,o)),Fh(a)){const E=Yr.dot(e),y=Yr.dot(Ct),A=Yr.dot(u),V=ao.dot(e),R=ao.dot(Ct),N=ao.dot(u);m=kN({alphaT:$c,alphaB:l,dotTV:y,dotBV:R,dotTL:E,dotBL:V,dotNV:d,dotNL:h}),f=XN({alphaT:$c,alphaB:l,dotNH:p,dotTH:A,dotBH:N})}else m=HN({alpha:l,dotNL:h,dotNV:d}),f=GN({alpha:l,dotNH:p});return x.mul(m).mul(f)}),pm=$(({roughness:i,dotNV:e})=>{const t=Se(-1,-.0275,-.572,.022),n=Se(1,.0425,1.04,-.04),s=i.mul(t).add(n),o=s.x.mul(s.x).min(e.mul(-9.28).exp2()).mul(s.x).add(s.y);return Ee(-1.04,1.04).mul(o).add(s.zw)}).setLayout({name:"DFGApprox",type:"vec2",inputs:[{name:"roughness",type:"float"},{name:"dotNV",type:"vec3"}]}),mm=$(i=>{const{dotNV:e,specularColor:t,specularF90:n,roughness:s}=i,o=pm({dotNV:e,roughness:s});return t.mul(o.x).add(n.mul(o.y))}),qN=$(({f:i,f90:e,dotVH:t})=>{const n=t.oneMinus().saturate(),s=n.mul(n),o=n.mul(s,s).clamp(0,.9999);return i.sub(L(e).mul(o)).div(o.oneMinus())}).setLayout({name:"Schlick_to_F0",type:"vec3",inputs:[{name:"f",type:"vec3"},{name:"f90",type:"float"},{name:"dotVH",type:"float"}]}),YN=$(({roughness:i,dotNH:e})=>{const t=i.pow2(),n=w(1).div(t),o=e.pow2().oneMinus().max(.0078125);return w(2).add(n).mul(o.pow(n.mul(.5))).div(2*Math.PI)}).setLayout({name:"D_Charlie",type:"float",inputs:[{name:"roughness",type:"float"},{name:"dotNH",type:"float"}]}),jN=$(({dotNV:i,dotNL:e})=>w(1).div(w(4).mul(e.add(i).sub(e.mul(i))))).setLayout({name:"V_Neubelt",type:"float",inputs:[{name:"dotNV",type:"float"},{name:"dotNL",type:"float"}]}),$N=$(({lightDirection:i})=>{const e=i.add(Ct).normalize(),t=Ot.dot(i).clamp(),n=Ot.dot(Ct).clamp(),s=Ot.dot(e).clamp(),o=YN({roughness:Hl,dotNH:s}),r=jN({dotNV:n,dotNL:t});return Qs.mul(o).mul(r)}),ud=$(([i,e,t,n,s])=>{const o=L(Uf(e.negate(),jo(i),ts(1,n))),r=L(lo(s[0].xyz),lo(s[1].xyz),lo(s[2].xyz));return jo(o).mul(t.mul(r))}).setLayout({name:"getVolumeTransmissionRay",type:"vec3",inputs:[{name:"n",type:"vec3"},{name:"v",type:"vec3"},{name:"thickness",type:"float"},{name:"ior",type:"float"},{name:"modelMatrix",type:"mat4"}]}),KN=$(([i,e])=>i.mul(So(e.mul(2).sub(2),0,1))).setLayout({name:"applyIorToRoughness",type:"float",inputs:[{name:"roughness",type:"float"},{name:"ior",type:"float"}]}),ZN=fp(),hd=$(([i,e,t])=>{const n=ZN.uv(i),s=Na(w(ol.x)).mul(KN(e,t));return n.bicubic(s)}),dd=$(([i,e,t])=>(Je(t.notEqual(0),()=>{const n=Cf(e).negate().div(t);return Rf(n.negate().mul(i))}),L(1))).setLayout({name:"volumeAttenuation",type:"vec3",inputs:[{name:"transmissionDistance",type:"float"},{name:"attenuationColor",type:"vec3"},{name:"attenuationDistance",type:"float"}]}),JN=$(([i,e,t,n,s,o,r,a,c,l,u,h,d,p,g])=>{let x,m;if(g){x=Se().toVar(),m=L().toVar();const V=u.sub(1).mul(g.mul(.025)),R=L(u.sub(V),u,u.add(V));vt({start:0,end:3},({i:N})=>{const F=R.element(N),T=ud(i,e,h,F,a),S=r.add(T),I=l.mul(c.mul(Se(S,1))),Z=Ee(I.xy.div(I.w)).toVar();Z.addAssign(1),Z.divAssign(2),Z.assign(Ee(Z.x,Z.y.oneMinus()));const q=hd(Z,t,F);x.element(N).assign(q.element(N)),x.a.addAssign(q.a),m.element(N).assign(n.element(N).mul(dd(lo(T),d,p).element(N)))}),x.a.divAssign(3)}else{const V=ud(i,e,h,u,a),R=r.add(V),N=l.mul(c.mul(Se(R,1))),F=Ee(N.xy.div(N.w)).toVar();F.addAssign(1),F.divAssign(2),F.assign(Ee(F.x,F.y.oneMinus())),x=hd(F,t,u),m=n.mul(dd(lo(V),d,p))}const f=m.rgb.mul(x.rgb),E=i.dot(e).clamp(),y=L(mm({dotNV:E,specularColor:s,specularF90:o,roughness:t})),A=m.r.add(m.g,m.b).div(3);return Se(y.oneMinus().mul(f),x.a.oneMinus().mul(A).oneMinus())}),QN=ii(3.2404542,-.969266,.0556434,-1.5371385,1.8760108,-.2040259,-.4985314,.041556,1.0572252),ew=i=>{const e=i.sqrt();return L(1).add(e).div(L(1).sub(e))},fd=(i,e)=>i.sub(e).div(i.add(e)).pow2(),tw=(i,e)=>{const t=i.mul(2*Math.PI*1e-9),n=L(54856e-17,44201e-17,52481e-17),s=L(1681e3,1795300,2208400),o=L(43278e5,93046e5,66121e5),r=w(9747e-17*Math.sqrt(2*Math.PI*45282e5)).mul(t.mul(2239900).add(e.x).cos()).mul(t.pow2().mul(-45282e5).exp());let a=n.mul(o.mul(2*Math.PI).sqrt()).mul(s.mul(t).add(e).cos()).mul(t.pow2().negate().mul(o).exp());return a=L(a.x.add(r),a.y,a.z).div(10685e-11),QN.mul(a)},nw=$(({outsideIOR:i,eta2:e,cosTheta1:t,thinFilmThickness:n,baseF0:s})=>{const o=$t(i,e,mi(0,.03,n)),r=i.div(o).pow2().mul(w(1).sub(t.pow2())),c=w(1).sub(r).sqrt(),l=fd(o,i),u=Jo({f0:l,f90:1,dotVH:t}),h=u.oneMinus(),d=o.lessThan(i).cond(Math.PI,0),p=w(Math.PI).sub(d),g=ew(s.clamp(0,.9999)),x=fd(g,o.toVec3()),m=Jo({f0:x,f90:1,dotVH:c}),f=L(g.x.lessThan(o).cond(Math.PI,0),g.y.lessThan(o).cond(Math.PI,0),g.z.lessThan(o).cond(Math.PI,0)),E=o.mul(n,c,2),y=L(p).add(f),A=u.mul(m).clamp(1e-5,.9999),V=A.sqrt(),R=h.pow2().mul(m).div(L(1).sub(A));let F=u.add(R),T=R.sub(h);for(let S=1;S<=2;++S){T=T.mul(V);const I=tw(w(S).mul(E),w(S).mul(y)).mul(2);F=F.add(T.mul(I))}return F.max(L(0))}).setLayout({name:"evalIridescence",type:"vec3",inputs:[{name:"outsideIOR",type:"float"},{name:"eta2",type:"float"},{name:"cosTheta1",type:"float"},{name:"thinFilmThickness",type:"float"},{name:"baseF0",type:"vec3"}]}),iw=$(({normal:i,viewDir:e,roughness:t})=>{const n=i.dot(e).saturate(),s=t.pow2(),o=Pn(t.lessThan(.25),w(-339.2).mul(s).add(w(161.4).mul(t)).sub(25.9),w(-8.48).mul(s).add(w(14.3).mul(t)).sub(9.95)),r=Pn(t.lessThan(.25),w(44).mul(s).sub(w(23.7).mul(t)).add(3.26),w(1.97).mul(s).sub(w(3.27).mul(t)).add(.72));return Pn(t.lessThan(.25),0,w(.1).mul(t).sub(.025)).add(o.mul(n).add(r).exp()).mul(1/Math.PI).saturate()}),Oc=L(.04),Fc=w(1);class Ql extends Aa{constructor(e=!1,t=!1,n=!1,s=!1,o=!1,r=!1){super(),this.clearcoat=e,this.sheen=t,this.iridescence=n,this.anisotropy=s,this.transmission=o,this.dispersion=r,this.clearcoatRadiance=null,this.clearcoatSpecularDirect=null,this.clearcoatSpecularIndirect=null,this.sheenSpecularDirect=null,this.sheenSpecularIndirect=null,this.iridescenceFresnel=null,this.iridescenceF0=null}start(e){if(this.clearcoat===!0&&(this.clearcoatRadiance=L().temp("clearcoatRadiance"),this.clearcoatSpecularDirect=L().temp("clearcoatSpecularDirect"),this.clearcoatSpecularIndirect=L().temp("clearcoatSpecularIndirect")),this.sheen===!0&&(this.sheenSpecularDirect=L().temp("sheenSpecularDirect"),this.sheenSpecularIndirect=L().temp("sheenSpecularIndirect")),this.iridescence===!0){const t=Ot.dot(Ct).clamp();this.iridescenceFresnel=nw({outsideIOR:w(1),eta2:xf,cosTheta1:t,thinFilmThickness:vf,baseF0:Kn}),this.iridescenceF0=qN({f:this.iridescenceFresnel,f90:1,dotVH:t})}if(this.transmission===!0){const t=nl,n=kf.sub(nl).normalize(),s=Xf;e.backdrop=JN(s,n,$i,St,Kn,aa,t,$o,Ro,li,jr,yf,Sf,Mf,this.dispersion?Tf:null),e.backdropAlpha=Zc,St.a.mulAssign($t(1,e.backdrop.a,Zc))}}computeMultiscattering(e,t,n){const s=Ot.dot(Ct).clamp(),o=pm({roughness:$i,dotNV:s}),a=(this.iridescenceF0?kl.mix(Kn,this.iridescenceF0):Kn).mul(o.x).add(n.mul(o.y)),l=o.x.add(o.y).oneMinus(),u=Kn.add(Kn.oneMinus().mul(.047619)),h=a.mul(u).div(l.mul(u).oneMinus());e.addAssign(a),t.addAssign(h.mul(l))}direct({lightDirection:e,lightColor:t,reflectedLight:n}){const o=Ot.dot(e).clamp().mul(t);if(this.sheen===!0&&this.sheenSpecularDirect.addAssign(o.mul($N({lightDirection:e}))),this.clearcoat===!0){const a=eo.dot(e).clamp().mul(t);this.clearcoatSpecularDirect.addAssign(a.mul(ld({lightDirection:e,f0:Oc,f90:Fc,roughness:ra,normalView:eo})))}n.directDiffuse.addAssign(o.mul(To({diffuseColor:St.rgb}))),n.directSpecular.addAssign(o.mul(ld({lightDirection:e,f0:Kn,f90:1,roughness:$i,iridescence:this.iridescence,f:this.iridescenceFresnel,USE_IRIDESCENCE:this.iridescence,USE_ANISOTROPY:this.anisotropy})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(To({diffuseColor:St})))}indirectSpecular({radiance:e,iblIrradiance:t,reflectedLight:n}){if(this.sheen===!0&&this.sheenSpecularIndirect.addAssign(t.mul(Qs,iw({normal:Ot,viewDir:Ct,roughness:Hl}))),this.clearcoat===!0){const l=eo.dot(Ct).clamp(),u=mm({dotNV:l,specularColor:Oc,specularF90:Fc,roughness:ra});this.clearcoatSpecularIndirect.addAssign(this.clearcoatRadiance.mul(u))}const s=L().temp("singleScattering"),o=L().temp("multiScattering"),r=t.mul(1/Math.PI);this.computeMultiscattering(s,o,aa);const a=s.add(o),c=St.mul(a.r.max(a.g).max(a.b).oneMinus());n.indirectSpecular.addAssign(e.mul(s)),n.indirectSpecular.addAssign(o.mul(r)),n.indirectDiffuse.addAssign(c.mul(r))}ambientOcclusion({ambientOcclusion:e,reflectedLight:t}){const s=Ot.dot(Ct).clamp().add(e),o=$i.mul(-16).oneMinus().negate().exp2(),r=e.sub(s.pow(o).oneMinus()).clamp();this.clearcoat===!0&&this.clearcoatSpecularIndirect.mulAssign(e),this.sheen===!0&&this.sheenSpecularIndirect.mulAssign(e),t.indirectDiffuse.mulAssign(e),t.indirectSpecular.mulAssign(r)}finish(e){const{outgoingLight:t}=e;if(this.clearcoat===!0){const n=eo.dot(Ct).clamp(),s=Jo({dotVH:n,f0:Oc,f90:Fc}),o=t.mul(jc.mul(s).oneMinus()).add(this.clearcoatSpecularDirect.add(this.clearcoatSpecularIndirect).mul(jc));t.assign(o)}if(this.sheen===!0){const n=Qs.r.max(Qs.g).max(Qs.b).mul(.157).oneMinus(),s=t.mul(n).add(this.sheenSpecularDirect,this.sheenSpecularIndirect);t.assign(s)}}}const sw=new Wn;class gm extends pn{constructor(e){super(),this.isMeshStandardNodeMaterial=!0,this.emissiveNode=null,this.metalnessNode=null,this.roughnessNode=null,this.setDefaultValues(sw),this.setValues(e)}setupLightingModel(){return new Ql}setupSpecular(){const e=$t(L(.04),St.rgb,oa);Kn.assign(e),aa.assign(1)}setupVariants(){const e=this.metalnessNode?w(this.metalnessNode):eE;oa.assign(e);let t=this.roughnessNode?w(this.roughnessNode):QT;t=fm({roughness:t}),$i.assign(t),this.setupSpecular(),St.assign(Se(St.rgb.mul(e.oneMinus()),St.a))}copy(e){return this.emissiveNode=e.emissiveNode,this.metalnessNode=e.metalnessNode,this.roughnessNode=e.roughnessNode,super.copy(e)}}en("MeshStandardNodeMaterial",gm);const ow=new IM;class _m extends gm{constructor(e){super(),this.isMeshPhysicalNodeMaterial=!0,this.clearcoatNode=null,this.clearcoatRoughnessNode=null,this.clearcoatNormalNode=null,this.sheenNode=null,this.sheenRoughnessNode=null,this.iridescenceNode=null,this.iridescenceIORNode=null,this.iridescenceThicknessNode=null,this.specularIntensityNode=null,this.specularColorNode=null,this.iorNode=null,this.transmissionNode=null,this.thicknessNode=null,this.attenuationDistanceNode=null,this.attenuationColorNode=null,this.dispersionNode=null,this.anisotropyNode=null,this.setDefaultValues(ow),this.setValues(e)}get useClearcoat(){return this.clearcoat>0||this.clearcoatNode!==null}get useIridescence(){return this.iridescence>0||this.iridescenceNode!==null}get useSheen(){return this.sheen>0||this.sheenNode!==null}get useAnisotropy(){return this.anisotropy>0||this.anisotropyNode!==null}get useTransmission(){return this.transmission>0||this.transmissionNode!==null}get useDispersion(){return this.dispersion>0||this.dispersionNode!==null}setupSpecular(){const e=this.iorNode?w(this.iorNode):pE;jr.assign(e),Kn.assign($t(Qn(Df(jr.sub(1).div(jr.add(1))).mul(ZT),L(1)).mul(kh),St.rgb,oa)),aa.assign($t(kh,1,oa))}setupLightingModel(){return new Ql(this.useClearcoat,this.useSheen,this.useIridescence,this.useAnisotropy,this.useTransmission,this.useDispersion)}setupVariants(e){if(super.setupVariants(e),this.useClearcoat){const t=this.clearcoatNode?w(this.clearcoatNode):nE,n=this.clearcoatRoughnessNode?w(this.clearcoatRoughnessNode):iE;jc.assign(t),ra.assign(fm({roughness:n}))}if(this.useSheen){const t=this.sheenNode?L(this.sheenNode):rE,n=this.sheenRoughnessNode?w(this.sheenRoughnessNode):aE;Qs.assign(t),Hl.assign(n)}if(this.useIridescence){const t=this.iridescenceNode?w(this.iridescenceNode):lE,n=this.iridescenceIORNode?w(this.iridescenceIORNode):uE,s=this.iridescenceThicknessNode?w(this.iridescenceThicknessNode):hE;kl.assign(t),xf.assign(n),vf.assign(s)}if(this.useAnisotropy){const t=(this.anisotropyNode?Ee(this.anisotropyNode):cE).toVar();gs.assign(t.length()),Je(gs.equal(0),()=>{t.assign(Ee(1,0))}).else(()=>{t.divAssign(gs),gs.assign(gs.saturate())}),$c.assign(gs.pow2().mix($i.pow2(),1)),Yr.assign(to[0].mul(t.x).add(to[1].mul(t.y))),ao.assign(to[1].mul(t.x).sub(to[0].mul(t.y)))}if(this.useTransmission){const t=this.transmissionNode?w(this.transmissionNode):dE,n=this.thicknessNode?w(this.thicknessNode):fE,s=this.attenuationDistanceNode?w(this.attenuationDistanceNode):mE,o=this.attenuationColorNode?L(this.attenuationColorNode):gE;if(Zc.assign(t),yf.assign(n),Mf.assign(s),Sf.assign(o),this.useDispersion){const r=this.dispersionNode?w(this.dispersionNode):xE;Tf.assign(r)}}}setupNormal(e){super.setupNormal(e);const t=this.clearcoatNormalNode?L(this.clearcoatNormalNode):sE;eo.assign(t)}copy(e){return this.clearcoatNode=e.clearcoatNode,this.clearcoatRoughnessNode=e.clearcoatRoughnessNode,this.clearcoatNormalNode=e.clearcoatNormalNode,this.sheenNode=e.sheenNode,this.sheenRoughnessNode=e.sheenRoughnessNode,this.iridescenceNode=e.iridescenceNode,this.iridescenceIORNode=e.iridescenceIORNode,this.iridescenceThicknessNode=e.iridescenceThicknessNode,this.specularIntensityNode=e.specularIntensityNode,this.specularColorNode=e.specularColorNode,this.transmissionNode=e.transmissionNode,this.thicknessNode=e.thicknessNode,this.attenuationDistanceNode=e.attenuationDistanceNode,this.attenuationColorNode=e.attenuationColorNode,this.dispersionNode=e.dispersionNode,this.anisotropyNode=e.anisotropyNode,super.copy(e)}}en("MeshPhysicalNodeMaterial",_m);class rw extends Ql{constructor(e,t,n,s){super(e,t,n),this.useSSS=s}direct({lightDirection:e,lightColor:t,reflectedLight:n},s,o){if(this.useSSS===!0){const r=o.material,{thicknessColorNode:a,thicknessDistortionNode:c,thicknessAmbientNode:l,thicknessAttenuationNode:u,thicknessPowerNode:h,thicknessScaleNode:d}=r,p=e.add(Ot.mul(c)).normalize(),g=w(Ct.dot(p.negate()).saturate().pow(h).mul(d)),x=L(g.add(l).mul(a));n.directDiffuse.addAssign(x.mul(u.mul(t)))}super.direct({lightDirection:e,lightColor:t,reflectedLight:n},s,o)}}class aw extends _m{constructor(e){super(e),this.thicknessColorNode=null,this.thicknessDistortionNode=w(.1),this.thicknessAmbientNode=w(0),this.thicknessAttenuationNode=w(.1),this.thicknessPowerNode=w(2),this.thicknessScaleNode=w(10)}get useSSS(){return this.thicknessColorNode!==null}setupLightingModel(){return new rw(this.useClearcoat,this.useSheen,this.useIridescence,this.useSSS)}copy(e){return this.thicknessColorNode=e.thicknessColorNode,this.thicknessDistortionNode=e.thicknessDistortionNode,this.thicknessAmbientNode=e.thicknessAmbientNode,this.thicknessAttenuationNode=e.thicknessAttenuationNode,this.thicknessPowerNode=e.thicknessPowerNode,this.thicknessScaleNode=e.thicknessScaleNode,super.copy(e)}}en("MeshSSSNodeMaterial",aw);const cw=$(({normal:i,lightDirection:e,builder:t})=>{const n=i.dot(e),s=Ee(n.mul(.5).add(.5),0);if(t.material.gradientMap){const o=Ci("gradientMap","texture").context({getUV:()=>s});return L(o.r)}else{const o=s.fwidth().mul(.5);return $t(L(.7),L(1),mi(w(.7).sub(o.x),w(.7).add(o.x),s.x))}});class lw extends Aa{direct({lightDirection:e,lightColor:t,reflectedLight:n},s,o){const r=cw({normal:la,lightDirection:e,builder:o}).mul(t);n.directDiffuse.addAssign(r.mul(To({diffuseColor:St.rgb})))}indirectDiffuse({irradiance:e,reflectedLight:t}){t.indirectDiffuse.addAssign(e.mul(To({diffuseColor:St})))}}const uw=new UM;class hw extends pn{constructor(e){super(),this.isMeshToonNodeMaterial=!0,this.lights=!0,this.setDefaultValues(uw),this.setValues(e)}setupLightingModel(){return new lw}}en("MeshToonNodeMaterial",hw);const dw=new VM;class fw extends pn{constructor(e){super(),this.isMeshMatcapNodeMaterial=!0,this.lights=!1,this.setDefaultValues(dw),this.setValues(e)}setupVariants(e){const t=sA;let n;e.material.matcap?n=Ci("matcap","texture").context({getUV:()=>t}):n=L($t(.2,.8,t.y)),St.rgb.mulAssign(n.rgb)}}en("MeshMatcapNodeMaterial",fw);const pw=new Kd;class mw extends pn{constructor(e){super(),this.isPointsNodeMaterial=!0,this.lights=!1,this.normals=!1,this.transparent=!0,this.sizeNode=null,this.setDefaultValues(pw),this.setValues(e)}copy(e){return this.sizeNode=e.sizeNode,super.copy(e)}}en("PointsNodeMaterial",mw);const gw=new CM;class _w extends pn{constructor(e){super(),this.isSpriteNodeMaterial=!0,this.lights=!1,this.normals=!1,this.positionNode=null,this.rotationNode=null,this.scaleNode=null,this.setDefaultValues(gw),this.setValues(e)}setupPosition({object:e,context:t}){const{positionNode:n,rotationNode:s,scaleNode:o}=this,r=rn;let a=As.mul(L(n||0)),c=Ee($o[0].xyz.length(),$o[1].xyz.length());o!==null&&(c=c.mul(o));let l=r.xy;e.center&&e.center.isVector2===!0&&(l=l.sub(rt(e.center).sub(.5))),l=l.mul(c);const u=w(s||oE),h=l.rotate(u);a=Se(a.xy.add(h),a.zw);const d=li.mul(a);return t.vertex=r,d}copy(e){return this.positionNode=e.positionNode,this.rotationNode=e.rotationNode,this.scaleNode=e.scaleNode,super.copy(e)}}en("SpriteNodeMaterial",_w);class xw extends Aa{constructor(){super(),this.shadowNode=w(1).toVar("shadowMask")}direct({shadowMask:e}){this.shadowNode.mulAssign(e)}finish(e){St.a.mulAssign(this.shadowNode.oneMinus()),e.outgoingLight.rgb.assign(St.rgb)}}const vw=new PM;class yw extends pn{constructor(e){super(),this.isShadowNodeMaterial=!0,this.lights=!0,this.setDefaultValues(vw),this.setValues(e)}setupLightingModel(){return new xw}}en("ShadowNodeMaterial",yw);class Mw extends pn{constructor(e={}){super(),this.normals=!1,this.lights=!1,this.isVolumeNodeMaterial=!0,this.testNode=null,this.setValues(e)}setup(e){const t=yA(this.map,null,0),n=$(({orig:s,dir:o})=>{const r=L(-.5),a=L(.5),c=o.reciprocal(),l=r.sub(s).mul(c),u=a.sub(s).mul(c),h=Qn(l,u),d=sn(l,u),p=sn(h.x,sn(h.y,h.z)),g=Qn(d.x,Qn(d.y,d.z));return Ee(p,g)});this.fragmentNode=$(()=>{const s=Wt(L(XT.mul(Se(kf,1)))),r=Wt(xn.sub(s)).normalize(),a=Rt("vec2","bounds").assign(n({orig:s,dir:r}));a.x.greaterThan(a.y).discard(),a.assign(Ee(sn(a.x,0),a.y));const c=Rt("vec3","p").assign(s.add(a.x.mul(r))),l=Rt("vec3","inc").assign(L(r.abs().reciprocal())),u=Rt("float","delta").assign(Qn(l.x,Qn(l.y,l.z)));u.divAssign(Ci("steps","float"));const h=Rt("vec4","ac").assign(Se(Ci("base","color"),0));return vt({type:"float",start:a.x,end:a.y,update:"+= delta"},()=>{const d=Rt("float","d").assign(t.uv(c.add(.5)).r);this.testNode!==null?this.testNode({map:t,mapValue:d,probe:c,finalColor:h}).append():(h.a.assign(1),ip()),c.addAssign(r.mul(u))}),h.a.equal(0).discard(),Se(h)})(),super.setup(e)}}en("VolumeNodeMaterial",Mw);const ho=$(([i,e,t])=>{const n=w(t).toVar(),s=w(e).toVar(),o=Es(i).toVar();return Pn(o,s,n)}),Qo=$(([i,e])=>{const t=Es(e).toVar(),n=w(i).toVar();return Pn(t,n.negate(),n)}),Ut=$(([i])=>{const e=w(i).toVar();return C(No(e))}),Nt=$(([i,e])=>{const t=w(i).toVar();return e.assign(Ut(t)),t.sub(w(e))}),xm=$(([i,e,t,n,s,o])=>{const r=w(o).toVar(),a=w(s).toVar(),c=w(n).toVar(),l=w(t).toVar(),u=w(e).toVar(),h=w(i).toVar(),d=w(Ft(1,a)).toVar();return Ft(1,r).mul(h.mul(d).add(u.mul(a))).add(r.mul(l.mul(d).add(c.mul(a))))}),vm=$(([i,e,t,n,s,o])=>{const r=w(o).toVar(),a=w(s).toVar(),c=L(n).toVar(),l=L(t).toVar(),u=L(e).toVar(),h=L(i).toVar(),d=w(Ft(1,a)).toVar();return Ft(1,r).mul(h.mul(d).add(u.mul(a))).add(r.mul(l.mul(d).add(c.mul(a))))}),ym=Xn([xm,vm]),Mm=$(([i,e,t,n,s,o,r,a,c,l,u])=>{const h=w(u).toVar(),d=w(l).toVar(),p=w(c).toVar(),g=w(a).toVar(),x=w(r).toVar(),m=w(o).toVar(),f=w(s).toVar(),E=w(n).toVar(),y=w(t).toVar(),A=w(e).toVar(),V=w(i).toVar(),R=w(Ft(1,p)).toVar(),N=w(Ft(1,d)).toVar();return w(Ft(1,h)).toVar().mul(N.mul(V.mul(R).add(A.mul(p))).add(d.mul(y.mul(R).add(E.mul(p))))).add(h.mul(N.mul(f.mul(R).add(m.mul(p))).add(d.mul(x.mul(R).add(g.mul(p))))))}),Sm=$(([i,e,t,n,s,o,r,a,c,l,u])=>{const h=w(u).toVar(),d=w(l).toVar(),p=w(c).toVar(),g=L(a).toVar(),x=L(r).toVar(),m=L(o).toVar(),f=L(s).toVar(),E=L(n).toVar(),y=L(t).toVar(),A=L(e).toVar(),V=L(i).toVar(),R=w(Ft(1,p)).toVar(),N=w(Ft(1,d)).toVar();return w(Ft(1,h)).toVar().mul(N.mul(V.mul(R).add(A.mul(p))).add(d.mul(y.mul(R).add(E.mul(p))))).add(h.mul(N.mul(f.mul(R).add(m.mul(p))).add(d.mul(x.mul(R).add(g.mul(p))))))}),Tm=Xn([Mm,Sm]),Em=$(([i,e,t])=>{const n=w(t).toVar(),s=w(e).toVar(),o=fe(i).toVar(),r=fe(o.bitAnd(fe(7))).toVar(),a=w(ho(r.lessThan(fe(4)),s,n)).toVar(),c=w(ot(2,ho(r.lessThan(fe(4)),n,s))).toVar();return Qo(a,Es(r.bitAnd(fe(1)))).add(Qo(c,Es(r.bitAnd(fe(2)))))}),Am=$(([i,e,t,n])=>{const s=w(n).toVar(),o=w(t).toVar(),r=w(e).toVar(),a=fe(i).toVar(),c=fe(a.bitAnd(fe(15))).toVar(),l=w(ho(c.lessThan(fe(8)),r,o)).toVar(),u=w(ho(c.lessThan(fe(4)),o,ho(c.equal(fe(12)).or(c.equal(fe(14))),r,s))).toVar();return Qo(l,Es(c.bitAnd(fe(1)))).add(Qo(u,Es(c.bitAnd(fe(2)))))}),Jt=Xn([Em,Am]),Nm=$(([i,e,t])=>{const n=w(t).toVar(),s=w(e).toVar(),o=or(i).toVar();return L(Jt(o.x,s,n),Jt(o.y,s,n),Jt(o.z,s,n))}),wm=$(([i,e,t,n])=>{const s=w(n).toVar(),o=w(t).toVar(),r=w(e).toVar(),a=or(i).toVar();return L(Jt(a.x,r,o,s),Jt(a.y,r,o,s),Jt(a.z,r,o,s))}),Vn=Xn([Nm,wm]),bm=$(([i])=>{const e=w(i).toVar();return ot(.6616,e)}),Rm=$(([i])=>{const e=w(i).toVar();return ot(.982,e)}),Cm=$(([i])=>{const e=L(i).toVar();return ot(.6616,e)}),Lm=Xn([bm,Cm]),Pm=$(([i])=>{const e=L(i).toVar();return ot(.982,e)}),Im=Xn([Rm,Pm]),yn=$(([i,e])=>{const t=C(e).toVar(),n=fe(i).toVar();return n.shiftLeft(t).bitOr(n.shiftRight(C(32).sub(t)))}),Dm=$(([i,e,t])=>{i.subAssign(t),i.bitXorAssign(yn(t,C(4))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(yn(i,C(6))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(yn(e,C(8))),e.addAssign(i),i.subAssign(t),i.bitXorAssign(yn(t,C(16))),t.addAssign(e),e.subAssign(i),e.bitXorAssign(yn(i,C(19))),i.addAssign(t),t.subAssign(e),t.bitXorAssign(yn(e,C(4))),e.addAssign(i)}),Lo=$(([i,e,t])=>{const n=fe(t).toVar(),s=fe(e).toVar(),o=fe(i).toVar();return n.bitXorAssign(s),n.subAssign(yn(s,C(14))),o.bitXorAssign(n),o.subAssign(yn(n,C(11))),s.bitXorAssign(o),s.subAssign(yn(o,C(25))),n.bitXorAssign(s),n.subAssign(yn(s,C(16))),o.bitXorAssign(n),o.subAssign(yn(n,C(4))),s.bitXorAssign(o),s.subAssign(yn(o,C(14))),n.bitXorAssign(s),n.subAssign(yn(s,C(24))),n}),an=$(([i])=>{const e=fe(i).toVar();return w(e).div(w(fe(C(4294967295))))}),ni=$(([i])=>{const e=w(i).toVar();return e.mul(e.mul(e.mul(e.mul(e.mul(6).sub(15)).add(10))))}),Um=$(([i])=>{const e=C(i).toVar(),t=fe(fe(1)).toVar(),n=fe(fe(C(3735928559)).add(t.shiftLeft(fe(2)).add(fe(13)))).toVar();return Lo(n.add(fe(e)),n,n)}),Om=$(([i,e])=>{const t=C(e).toVar(),n=C(i).toVar(),s=fe(fe(2)).toVar(),o=fe().toVar(),r=fe().toVar(),a=fe().toVar();return o.assign(r.assign(a.assign(fe(C(3735928559)).add(s.shiftLeft(fe(2)).add(fe(13)))))),o.addAssign(fe(n)),r.addAssign(fe(t)),Lo(o,r,a)}),Fm=$(([i,e,t])=>{const n=C(t).toVar(),s=C(e).toVar(),o=C(i).toVar(),r=fe(fe(3)).toVar(),a=fe().toVar(),c=fe().toVar(),l=fe().toVar();return a.assign(c.assign(l.assign(fe(C(3735928559)).add(r.shiftLeft(fe(2)).add(fe(13)))))),a.addAssign(fe(o)),c.addAssign(fe(s)),l.addAssign(fe(n)),Lo(a,c,l)}),Vm=$(([i,e,t,n])=>{const s=C(n).toVar(),o=C(t).toVar(),r=C(e).toVar(),a=C(i).toVar(),c=fe(fe(4)).toVar(),l=fe().toVar(),u=fe().toVar(),h=fe().toVar();return l.assign(u.assign(h.assign(fe(C(3735928559)).add(c.shiftLeft(fe(2)).add(fe(13)))))),l.addAssign(fe(a)),u.addAssign(fe(r)),h.addAssign(fe(o)),Dm(l,u,h),l.addAssign(fe(s)),Lo(l,u,h)}),zm=$(([i,e,t,n,s])=>{const o=C(s).toVar(),r=C(n).toVar(),a=C(t).toVar(),c=C(e).toVar(),l=C(i).toVar(),u=fe(fe(5)).toVar(),h=fe().toVar(),d=fe().toVar(),p=fe().toVar();return h.assign(d.assign(p.assign(fe(C(3735928559)).add(u.shiftLeft(fe(2)).add(fe(13)))))),h.addAssign(fe(l)),d.addAssign(fe(c)),p.addAssign(fe(a)),Dm(h,d,p),h.addAssign(fe(r)),d.addAssign(fe(o)),Lo(h,d,p)}),ft=Xn([Um,Om,Fm,Vm,zm]),Bm=$(([i,e])=>{const t=C(e).toVar(),n=C(i).toVar(),s=fe(ft(n,t)).toVar(),o=or().toVar();return o.x.assign(s.bitAnd(C(255))),o.y.assign(s.shiftRight(C(8)).bitAnd(C(255))),o.z.assign(s.shiftRight(C(16)).bitAnd(C(255))),o}),Hm=$(([i,e,t])=>{const n=C(t).toVar(),s=C(e).toVar(),o=C(i).toVar(),r=fe(ft(o,s,n)).toVar(),a=or().toVar();return a.x.assign(r.bitAnd(C(255))),a.y.assign(r.shiftRight(C(8)).bitAnd(C(255))),a.z.assign(r.shiftRight(C(16)).bitAnd(C(255))),a}),zn=Xn([Bm,Hm]),km=$(([i])=>{const e=Ee(i).toVar(),t=C().toVar(),n=C().toVar(),s=w(Nt(e.x,t)).toVar(),o=w(Nt(e.y,n)).toVar(),r=w(ni(s)).toVar(),a=w(ni(o)).toVar(),c=w(ym(Jt(ft(t,n),s,o),Jt(ft(t.add(C(1)),n),s.sub(1),o),Jt(ft(t,n.add(C(1))),s,o.sub(1)),Jt(ft(t.add(C(1)),n.add(C(1))),s.sub(1),o.sub(1)),r,a)).toVar();return Lm(c)}),Gm=$(([i])=>{const e=L(i).toVar(),t=C().toVar(),n=C().toVar(),s=C().toVar(),o=w(Nt(e.x,t)).toVar(),r=w(Nt(e.y,n)).toVar(),a=w(Nt(e.z,s)).toVar(),c=w(ni(o)).toVar(),l=w(ni(r)).toVar(),u=w(ni(a)).toVar(),h=w(Tm(Jt(ft(t,n,s),o,r,a),Jt(ft(t.add(C(1)),n,s),o.sub(1),r,a),Jt(ft(t,n.add(C(1)),s),o,r.sub(1),a),Jt(ft(t.add(C(1)),n.add(C(1)),s),o.sub(1),r.sub(1),a),Jt(ft(t,n,s.add(C(1))),o,r,a.sub(1)),Jt(ft(t.add(C(1)),n,s.add(C(1))),o.sub(1),r,a.sub(1)),Jt(ft(t,n.add(C(1)),s.add(C(1))),o,r.sub(1),a.sub(1)),Jt(ft(t.add(C(1)),n.add(C(1)),s.add(C(1))),o.sub(1),r.sub(1),a.sub(1)),c,l,u)).toVar();return Im(h)}),Sw=Xn([km,Gm]),Wm=$(([i])=>{const e=Ee(i).toVar(),t=C().toVar(),n=C().toVar(),s=w(Nt(e.x,t)).toVar(),o=w(Nt(e.y,n)).toVar(),r=w(ni(s)).toVar(),a=w(ni(o)).toVar(),c=L(ym(Vn(zn(t,n),s,o),Vn(zn(t.add(C(1)),n),s.sub(1),o),Vn(zn(t,n.add(C(1))),s,o.sub(1)),Vn(zn(t.add(C(1)),n.add(C(1))),s.sub(1),o.sub(1)),r,a)).toVar();return Lm(c)}),Xm=$(([i])=>{const e=L(i).toVar(),t=C().toVar(),n=C().toVar(),s=C().toVar(),o=w(Nt(e.x,t)).toVar(),r=w(Nt(e.y,n)).toVar(),a=w(Nt(e.z,s)).toVar(),c=w(ni(o)).toVar(),l=w(ni(r)).toVar(),u=w(ni(a)).toVar(),h=L(Tm(Vn(zn(t,n,s),o,r,a),Vn(zn(t.add(C(1)),n,s),o.sub(1),r,a),Vn(zn(t,n.add(C(1)),s),o,r.sub(1),a),Vn(zn(t.add(C(1)),n.add(C(1)),s),o.sub(1),r.sub(1),a),Vn(zn(t,n,s.add(C(1))),o,r,a.sub(1)),Vn(zn(t.add(C(1)),n,s.add(C(1))),o.sub(1),r,a.sub(1)),Vn(zn(t,n.add(C(1)),s.add(C(1))),o,r.sub(1),a.sub(1)),Vn(zn(t.add(C(1)),n.add(C(1)),s.add(C(1))),o.sub(1),r.sub(1),a.sub(1)),c,l,u)).toVar();return Im(h)}),Tw=Xn([Wm,Xm]),Ew=$(([i])=>{const e=w(i).toVar(),t=C(Ut(e)).toVar();return an(ft(t))}),Aw=$(([i])=>{const e=Ee(i).toVar(),t=C(Ut(e.x)).toVar(),n=C(Ut(e.y)).toVar();return an(ft(t,n))}),Nw=$(([i])=>{const e=L(i).toVar(),t=C(Ut(e.x)).toVar(),n=C(Ut(e.y)).toVar(),s=C(Ut(e.z)).toVar();return an(ft(t,n,s))}),ww=$(([i])=>{const e=Se(i).toVar(),t=C(Ut(e.x)).toVar(),n=C(Ut(e.y)).toVar(),s=C(Ut(e.z)).toVar(),o=C(Ut(e.w)).toVar();return an(ft(t,n,s,o))}),qm=$(([i])=>{const e=w(i).toVar(),t=C(Ut(e)).toVar();return L(an(ft(t,C(0))),an(ft(t,C(1))),an(ft(t,C(2))))}),Ym=$(([i])=>{const e=Ee(i).toVar(),t=C(Ut(e.x)).toVar(),n=C(Ut(e.y)).toVar();return L(an(ft(t,n,C(0))),an(ft(t,n,C(1))),an(ft(t,n,C(2))))}),jm=$(([i])=>{const e=L(i).toVar(),t=C(Ut(e.x)).toVar(),n=C(Ut(e.y)).toVar(),s=C(Ut(e.z)).toVar();return L(an(ft(t,n,s,C(0))),an(ft(t,n,s,C(1))),an(ft(t,n,s,C(2))))}),$m=$(([i])=>{const e=Se(i).toVar(),t=C(Ut(e.x)).toVar(),n=C(Ut(e.y)).toVar(),s=C(Ut(e.z)).toVar(),o=C(Ut(e.w)).toVar();return L(an(ft(t,n,s,o,C(0))),an(ft(t,n,s,o,C(1))),an(ft(t,n,s,o,C(2))))}),Km=Xn([qm,Ym,jm,$m]),fa=$(([i,e,t,n])=>{const s=w(n).toVar(),o=w(t).toVar(),r=C(e).toVar(),a=L(i).toVar(),c=w(0).toVar(),l=w(1).toVar();return vt({start:C(0),end:r},({i:u})=>{c.addAssign(l.mul(Sw(a))),l.mulAssign(s),a.mulAssign(o)}),c}),Zm=$(([i,e,t,n])=>{const s=w(n).toVar(),o=w(t).toVar(),r=C(e).toVar(),a=L(i).toVar(),c=L(0).toVar(),l=w(1).toVar();return vt({start:C(0),end:r},({i:u})=>{c.addAssign(l.mul(Tw(a))),l.mulAssign(s),a.mulAssign(o)}),c}),bw=$(([i,e,t,n])=>{const s=w(n).toVar(),o=w(t).toVar(),r=C(e).toVar(),a=L(i).toVar();return Ee(fa(a,r,o,s),fa(a.add(L(C(19),C(193),C(17))),r,o,s))}),Rw=$(([i,e,t,n])=>{const s=w(n).toVar(),o=w(t).toVar(),r=C(e).toVar(),a=L(i).toVar(),c=L(Zm(a,r,o,s)).toVar(),l=w(fa(a.add(L(C(19),C(193),C(17))),r,o,s)).toVar();return Se(c,l)}),Jm=$(([i,e,t,n,s,o,r])=>{const a=C(r).toVar(),c=w(o).toVar(),l=C(s).toVar(),u=C(n).toVar(),h=C(t).toVar(),d=C(e).toVar(),p=Ee(i).toVar(),g=L(Km(Ee(d.add(u),h.add(l)))).toVar(),x=Ee(g.x,g.y).toVar();x.subAssign(.5),x.mulAssign(c),x.addAssign(.5);const m=Ee(Ee(w(d),w(h)).add(x)).toVar(),f=Ee(m.sub(p)).toVar();return Je(a.equal(C(2)),()=>kt(f.x).add(kt(f.y))),Je(a.equal(C(3)),()=>sn(kt(f.x),kt(f.y))),wo(f,f)}),Qm=$(([i,e,t,n,s,o,r,a,c])=>{const l=C(c).toVar(),u=w(a).toVar(),h=C(r).toVar(),d=C(o).toVar(),p=C(s).toVar(),g=C(n).toVar(),x=C(t).toVar(),m=C(e).toVar(),f=L(i).toVar(),E=L(Km(L(m.add(p),x.add(d),g.add(h)))).toVar();E.subAssign(.5),E.mulAssign(u),E.addAssign(.5);const y=L(L(w(m),w(x),w(g)).add(E)).toVar(),A=L(y.sub(f)).toVar();return Je(l.equal(C(2)),()=>kt(A.x).add(kt(A.y).add(kt(A.z)))),Je(l.equal(C(3)),()=>sn(sn(kt(A.x),kt(A.y)),kt(A.z))),wo(A,A)}),Po=Xn([Jm,Qm]),Cw=$(([i,e,t])=>{const n=C(t).toVar(),s=w(e).toVar(),o=Ee(i).toVar(),r=C().toVar(),a=C().toVar(),c=Ee(Nt(o.x,r),Nt(o.y,a)).toVar(),l=w(1e6).toVar();return vt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{vt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=w(Po(c,u,h,r,a,s,n)).toVar();l.assign(Qn(l,d))})}),Je(n.equal(C(0)),()=>{l.assign(Rs(l))}),l}),Lw=$(([i,e,t])=>{const n=C(t).toVar(),s=w(e).toVar(),o=Ee(i).toVar(),r=C().toVar(),a=C().toVar(),c=Ee(Nt(o.x,r),Nt(o.y,a)).toVar(),l=Ee(1e6,1e6).toVar();return vt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{vt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=w(Po(c,u,h,r,a,s,n)).toVar();Je(d.lessThan(l.x),()=>{l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.y.assign(d)})})}),Je(n.equal(C(0)),()=>{l.assign(Rs(l))}),l}),Pw=$(([i,e,t])=>{const n=C(t).toVar(),s=w(e).toVar(),o=Ee(i).toVar(),r=C().toVar(),a=C().toVar(),c=Ee(Nt(o.x,r),Nt(o.y,a)).toVar(),l=L(1e6,1e6,1e6).toVar();return vt({start:-1,end:C(1),name:"x",condition:"<="},({x:u})=>{vt({start:-1,end:C(1),name:"y",condition:"<="},({y:h})=>{const d=w(Po(c,u,h,r,a,s,n)).toVar();Je(d.lessThan(l.x),()=>{l.z.assign(l.y),l.y.assign(l.x),l.x.assign(d)}).elseif(d.lessThan(l.y),()=>{l.z.assign(l.y),l.y.assign(d)}).elseif(d.lessThan(l.z),()=>{l.z.assign(d)})})}),Je(n.equal(C(0)),()=>{l.assign(Rs(l))}),l}),Iw=$(([i,e,t])=>{const n=C(t).toVar(),s=w(e).toVar(),o=L(i).toVar(),r=C().toVar(),a=C().toVar(),c=C().toVar(),l=L(Nt(o.x,r),Nt(o.y,a),Nt(o.z,c)).toVar(),u=w(1e6).toVar();return vt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{vt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{vt({start:-1,end:C(1),name:"z",condition:"<="},({z:p})=>{const g=w(Po(l,h,d,p,r,a,c,s,n)).toVar();u.assign(Qn(u,g))})})}),Je(n.equal(C(0)),()=>{u.assign(Rs(u))}),u}),Dw=$(([i,e,t])=>{const n=C(t).toVar(),s=w(e).toVar(),o=L(i).toVar(),r=C().toVar(),a=C().toVar(),c=C().toVar(),l=L(Nt(o.x,r),Nt(o.y,a),Nt(o.z,c)).toVar(),u=Ee(1e6,1e6).toVar();return vt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{vt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{vt({start:-1,end:C(1),name:"z",condition:"<="},({z:p})=>{const g=w(Po(l,h,d,p,r,a,c,s,n)).toVar();Je(g.lessThan(u.x),()=>{u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.y.assign(g)})})})}),Je(n.equal(C(0)),()=>{u.assign(Rs(u))}),u}),Uw=$(([i,e,t])=>{const n=C(t).toVar(),s=w(e).toVar(),o=L(i).toVar(),r=C().toVar(),a=C().toVar(),c=C().toVar(),l=L(Nt(o.x,r),Nt(o.y,a),Nt(o.z,c)).toVar(),u=L(1e6,1e6,1e6).toVar();return vt({start:-1,end:C(1),name:"x",condition:"<="},({x:h})=>{vt({start:-1,end:C(1),name:"y",condition:"<="},({y:d})=>{vt({start:-1,end:C(1),name:"z",condition:"<="},({z:p})=>{const g=w(Po(l,h,d,p,r,a,c,s,n)).toVar();Je(g.lessThan(u.x),()=>{u.z.assign(u.y),u.y.assign(u.x),u.x.assign(g)}).elseif(g.lessThan(u.y),()=>{u.z.assign(u.y),u.y.assign(g)}).elseif(g.lessThan(u.z),()=>{u.z.assign(g)})})})}),Je(n.equal(C(0)),()=>{u.assign(Rs(u))}),u});ho.setLayout({name:"mx_select",type:"float",inputs:[{name:"b",type:"bool"},{name:"t",type:"float"},{name:"f",type:"float"}]});Qo.setLayout({name:"mx_negate_if",type:"float",inputs:[{name:"val",type:"float"},{name:"b",type:"bool"}]});Ut.setLayout({name:"mx_floor",type:"int",inputs:[{name:"x",type:"float"}]});xm.setLayout({name:"mx_bilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"}]});vm.setLayout({name:"mx_bilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"}]});Mm.setLayout({name:"mx_trilerp_0",type:"float",inputs:[{name:"v0",type:"float"},{name:"v1",type:"float"},{name:"v2",type:"float"},{name:"v3",type:"float"},{name:"v4",type:"float"},{name:"v5",type:"float"},{name:"v6",type:"float"},{name:"v7",type:"float"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Sm.setLayout({name:"mx_trilerp_1",type:"vec3",inputs:[{name:"v0",type:"vec3"},{name:"v1",type:"vec3"},{name:"v2",type:"vec3"},{name:"v3",type:"vec3"},{name:"v4",type:"vec3"},{name:"v5",type:"vec3"},{name:"v6",type:"vec3"},{name:"v7",type:"vec3"},{name:"s",type:"float"},{name:"t",type:"float"},{name:"r",type:"float"}]});Em.setLayout({name:"mx_gradient_float_0",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"}]});Am.setLayout({name:"mx_gradient_float_1",type:"float",inputs:[{name:"hash",type:"uint"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});Nm.setLayout({name:"mx_gradient_vec3_0",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"}]});wm.setLayout({name:"mx_gradient_vec3_1",type:"vec3",inputs:[{name:"hash",type:"uvec3"},{name:"x",type:"float"},{name:"y",type:"float"},{name:"z",type:"float"}]});bm.setLayout({name:"mx_gradient_scale2d_0",type:"float",inputs:[{name:"v",type:"float"}]});Rm.setLayout({name:"mx_gradient_scale3d_0",type:"float",inputs:[{name:"v",type:"float"}]});Cm.setLayout({name:"mx_gradient_scale2d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});Pm.setLayout({name:"mx_gradient_scale3d_1",type:"vec3",inputs:[{name:"v",type:"vec3"}]});yn.setLayout({name:"mx_rotl32",type:"uint",inputs:[{name:"x",type:"uint"},{name:"k",type:"int"}]});Lo.setLayout({name:"mx_bjfinal",type:"uint",inputs:[{name:"a",type:"uint"},{name:"b",type:"uint"},{name:"c",type:"uint"}]});an.setLayout({name:"mx_bits_to_01",type:"float",inputs:[{name:"bits",type:"uint"}]});ni.setLayout({name:"mx_fade",type:"float",inputs:[{name:"t",type:"float"}]});Um.setLayout({name:"mx_hash_int_0",type:"uint",inputs:[{name:"x",type:"int"}]});Om.setLayout({name:"mx_hash_int_1",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});Fm.setLayout({name:"mx_hash_int_2",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});Vm.setLayout({name:"mx_hash_int_3",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"}]});zm.setLayout({name:"mx_hash_int_4",type:"uint",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xx",type:"int"},{name:"yy",type:"int"}]});Bm.setLayout({name:"mx_hash_vec3_0",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"}]});Hm.setLayout({name:"mx_hash_vec3_1",type:"uvec3",inputs:[{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"}]});km.setLayout({name:"mx_perlin_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"}]});Gm.setLayout({name:"mx_perlin_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"}]});Wm.setLayout({name:"mx_perlin_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"}]});Xm.setLayout({name:"mx_perlin_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"}]});Ew.setLayout({name:"mx_cell_noise_float_0",type:"float",inputs:[{name:"p",type:"float"}]});Aw.setLayout({name:"mx_cell_noise_float_1",type:"float",inputs:[{name:"p",type:"vec2"}]});Nw.setLayout({name:"mx_cell_noise_float_2",type:"float",inputs:[{name:"p",type:"vec3"}]});ww.setLayout({name:"mx_cell_noise_float_3",type:"float",inputs:[{name:"p",type:"vec4"}]});qm.setLayout({name:"mx_cell_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"float"}]});Ym.setLayout({name:"mx_cell_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec2"}]});jm.setLayout({name:"mx_cell_noise_vec3_2",type:"vec3",inputs:[{name:"p",type:"vec3"}]});$m.setLayout({name:"mx_cell_noise_vec3_3",type:"vec3",inputs:[{name:"p",type:"vec4"}]});fa.setLayout({name:"mx_fractal_noise_float",type:"float",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Zm.setLayout({name:"mx_fractal_noise_vec3",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});bw.setLayout({name:"mx_fractal_noise_vec2",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Rw.setLayout({name:"mx_fractal_noise_vec4",type:"vec4",inputs:[{name:"p",type:"vec3"},{name:"octaves",type:"int"},{name:"lacunarity",type:"float"},{name:"diminish",type:"float"}]});Jm.setLayout({name:"mx_worley_distance_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Qm.setLayout({name:"mx_worley_distance_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"x",type:"int"},{name:"y",type:"int"},{name:"z",type:"int"},{name:"xoff",type:"int"},{name:"yoff",type:"int"},{name:"zoff",type:"int"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Cw.setLayout({name:"mx_worley_noise_float_0",type:"float",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Lw.setLayout({name:"mx_worley_noise_vec2_0",type:"vec2",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Pw.setLayout({name:"mx_worley_noise_vec3_0",type:"vec3",inputs:[{name:"p",type:"vec2"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Iw.setLayout({name:"mx_worley_noise_float_1",type:"float",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Dw.setLayout({name:"mx_worley_noise_vec2_1",type:"vec2",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});Uw.setLayout({name:"mx_worley_noise_vec3_1",type:"vec3",inputs:[{name:"p",type:"vec3"},{name:"jitter",type:"float"},{name:"metric",type:"int"}]});const Ow=$(([i])=>{const e=L(i).toVar(),t=w(e.x).toVar(),n=w(e.y).toVar(),s=w(e.z).toVar();Je(n.lessThan(1e-4),()=>L(s,s,s)).else(()=>{t.assign(ot(6,t.sub(No(t))));const o=C(Pf(t)).toVar(),r=w(t.sub(w(o))).toVar(),a=w(s.mul(Ft(1,n))).toVar(),c=w(s.mul(Ft(1,n.mul(r)))).toVar(),l=w(s.mul(Ft(1,n.mul(Ft(1,r))))).toVar();return Je(o.equal(C(0)),()=>L(s,l,a)).elseif(o.equal(C(1)),()=>L(c,s,a)).elseif(o.equal(C(2)),()=>L(a,s,l)).elseif(o.equal(C(3)),()=>L(a,c,s)).elseif(o.equal(C(4)),()=>L(l,a,s)),L(s,a,c)})}),Fw=$(([i])=>{const e=L(i).toVar(),t=w(e.x).toVar(),n=w(e.y).toVar(),s=w(e.z).toVar(),o=w(Qn(t,Qn(n,s))).toVar(),r=w(sn(t,sn(n,s))).toVar(),a=w(r.sub(o)).toVar(),c=w().toVar(),l=w().toVar(),u=w().toVar();return u.assign(r),Je(r.greaterThan(0),()=>{l.assign(a.div(r))}).else(()=>{l.assign(0)}),Je(l.lessThanEqual(0),()=>{c.assign(0)}).else(()=>{Je(t.greaterThanEqual(r),()=>{c.assign(n.sub(s).div(a))}).elseif(n.greaterThanEqual(r),()=>{c.assign(Un(2,s.sub(t).div(a)))}).else(()=>{c.assign(Un(4,t.sub(n).div(a)))}),c.mulAssign(1/6),Je(c.lessThan(0),()=>{c.addAssign(1)})}),L(c,l,u)});Ow.setLayout({name:"mx_hsvtorgb",type:"vec3",inputs:[{name:"hsv",type:"vec3"}]});Fw.setLayout({name:"mx_rgbtohsv",type:"vec3",inputs:[{name:"c",type:"vec3"}]});const Vw=$(([i])=>{const e=L(i).toVar(),t=uf(Nf(e,L(.04045))).toVar(),n=L(e.div(12.92)).toVar(),s=L(fi(sn(e.add(L(.055)),L(0)).div(1.055),L(2.4))).toVar();return $t(n,s,t)});Vw.setLayout({name:"mx_srgb_texture_to_lin_rec709",type:"vec3",inputs:[{name:"color",type:"vec3"}]});const Da=new RM,ws=new Mn(75,window.innerWidth/window.innerHeight,.01,1e3),Ua=new bM({canvas:document.querySelector("#bg")});Ua.setPixelRatio(window.devicePixelRatio);Ua.setSize(window.innerWidth,window.innerHeight);ws.position.setZ(1e3);ws.position.setY(0);ws.position.setX(0);const eg=new va(16746496,100,1e5);eg.position.set(3,4,1e3,1e3);const tg=new va(16746496,100,1e4);tg.position.set(-3,4,1e3,1e3);const ng=new va(16746496,100,1e4);ng.position.set(0,-4,1e3,1e3);const zw=new ef(16777215,1);Da.add(eg,tg,ng,zw);const Bw=new $M(ws,Ua.domElement);function Hw(){const i=new Gn(.25,24,24),e=new Wn({color:16777215}),t=new Gt(i,e),[n,s,o]=Array(3).fill().map(()=>Math.random()<.5?-qo.randFloatSpread(400)-100:qo.randFloatSpread(400)+100);t.position.set(n,s,o),Da.add(t)}Array(1e3).fill().forEach(Hw);//!!!!!!Planets!!!!!!!
const kw=new Oi().load(" https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Solarsystemscope_texture_2k_uranus.jpg/1200px-Solarsystemscope_texture_2k_uranus.jpg"),lr=new Gt(new Gn(6,32,32),new Wn({map:kw})),Gw=new Oi().load("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Solarsystemscope_texture_2k_neptune.jpg/1200px-Solarsystemscope_texture_2k_neptune.jpg"),ur=new Gt(new Gn(5,32,32),new Wn({map:Gw})),Ww=new Oi().load("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Solarsystemscope_texture_2k_saturn.jpg/1024px-Solarsystemscope_texture_2k_saturn.jpg"),hr=new Gt(new Gn(14,32,32),new Wn({map:Ww})),Xw=new Oi().load(" https://upload.wikimedia.org/wikipedia/commons/5/5e/Solarsystemscope_texture_8k_jupiter.jpg"),dr=new Gt(new Gn(16,32,32),new Wn({map:Xw})),qw=new Oi().load("https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Solarsystemscope_texture_2k_mars.jpg/1280px-Solarsystemscope_texture_2k_mars.jpg"),fr=new Gt(new Gn(4,32,32),new Wn({map:qw})),Yw=new Oi().load("https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Land_ocean_ice_cloud_hires.jpg/2560px-Land_ocean_ice_cloud_hires.jpg"),pr=new Gt(new Gn(3,32,32),new Wn({map:Yw})),jw=new Oi().load(" https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Solarsystemscope_texture_8k_venus_surface.jpg/1200px-Solarsystemscope_texture_8k_venus_surface.jpg?20201026210231"),mr=new Gt(new Gn(3,32,32),new Wn({map:jw})),$w=new Oi().load("https://upload.wikimedia.org/wikipedia/commons/2/27/Solarsystemscope_texture_8k_mercury.jpg"),gr=new Gt(new Gn(1,32,32),new Wn({map:$w})),Kw=new Oi().load("Solarsystemscope_texture_2k_sun.jpg"),Io=new Gt(new Gn(1,32,32),new Wn({map:Kw}));Da.add(ur,lr,dr,hr,fr,pr,mr,gr,Io);ur.position.z=20;lr.position.z=160;hr.position.z=280;dr.position.z=440;fr.position.z=600;pr.position.z=750;mr.position.z=840;gr.position.z=920;Io.position.z=998.5;Io.position.x=-.6;function ig(){ur.rotation.y+=.001,lr.rotation.y+=.001,hr.rotation.y+=.001,dr.rotation.y+=.001,fr.rotation.y+=.001,pr.rotation.y+=.001,mr.rotation.y+=.001,gr.rotation.y+=.001,Io.rotation.y+=.001,requestAnimationFrame(ig),Bw.update(),Ua.render(Da,ws)}ig();const dl=-200,fl=-200,pl=-180,ml=-300,gl=-90,_l=-100,xl=-40,vl=-8,yl=-.6,Zw=10,Jw=25,Qw=90,eb=300,tb=150,nb=310,ib=184,sb=110,ob=-800;ur.position.x=dl;lr.position.x=fl;hr.position.x=pl;dr.position.x=ml;fr.position.x=gl;pr.position.x=_l;mr.position.x=xl;gr.position.x=vl;Io.position.x=yl;const pd=1e3,md=20,rb=document.documentElement.scrollHeight-window.innerHeight;function ab(){const i=window.scrollY,e=Math.min(Math.max(i/rb,0),1),t=pd+(md-pd)*e;ws.position.z=t,ws.lookAt(0,0,md),Io.position.x=yl+(ob-yl)*e,gr.position.x=vl+(sb-vl)*e,mr.position.x=xl+(ib-xl)*e,pr.position.x=_l+(nb-_l)*e,fr.position.x=gl+(tb-gl)*e,dr.position.x=ml+(eb-ml)*e,hr.position.x=pl+(Qw-pl)*e,lr.position.x=fl+(Jw-fl)*e,ur.position.x=dl+(Zw-dl)*e}document.addEventListener("scroll",ab);document.addEventListener("scroll",movePlanetsOnScroll);
