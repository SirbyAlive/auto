(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{76:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r,o=l(t(3)),s=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};r.get||r.set?Object.defineProperty(a,t,r):a[t]=e[t]}return a.default=e,a}(t(0)),i=l(t(2)),n=l(t(106));function l(e){return e&&e.__esModule?e:{default:e}}function d(e,a,t,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,i=arguments.length-3;if(a||0===i||(a={children:void 0}),a&&s)for(var n in s)void 0===a[n]&&(a[n]=s[n]);else a||(a=s||{});if(1===i)a.children=o;else if(i>1){for(var l=new Array(i),d=0;d<i;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:r,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p=e=>{let{to:a}=e,t=u(e,["to"]);return a.includes("http")?s.default.createElement("a",h({},e,{href:a})):("#"===a[0]&&(a=o.default.join("/auto/","pages/extras/shipit.html")+a),s.default.createElement("a",h({},t,{href:a,onClick:t=>{if(t.preventDefault(),"#"===e.to)return!1;const r=new URL(o.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,a),e.onClick();const s=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(s),!1}})))};p.defaultProps={href:"",onClick:()=>{}};const v={"../../images/default-auto.png":()=>t.e(15).then(t.t.bind(null,111,7)),"../../images/complete-auto.png":()=>t.e(14).then(t.t.bind(null,112,7)),"../../images/next-branch.png":()=>t.e(16).then(t.t.bind(null,113,7))};class g extends s.default.Component{constructor(...e){super(...e),c(this,"state",{image:null,ImageProvider:v[this.props.src]})}componentDidMount(){this.state.image||this.state.ImageProvider().then(e=>{this.setState({image:e.default})})}render(){let{image:e}=this.state;return e&&"object"==typeof e?s.default.createElement(n.default,h({},this.props,{className:(0,i.default)("image",this.props.className),src:e.src.src,width:e.src.width||e.width,height:e.src.height||e.height,placeholder:{lqip:e.preSrc},srcSet:e.src.images?e.src.images.map(e=>(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(a){c(e,a,t[a])})}return e})({},e,{src:e.path})):[{src:e.src,width:e.width}]})):d("img",{className:(0,i.default)("image",this.props.className),src:e})}}const f=e=>{var a,t;return t=a=class extends s.default.Component{constructor(...e){super(...e),c(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?s.default.createElement(e,this.props,this.props.children||null):null}},c(a,"defaultProps",{shouldLoad:!0}),t};f(()=>t.e(31).then(t.bind(null,107))),f(()=>t.e(31).then(t.bind(null,108)));var m=d("p",{},void 0,"Below is the basics steps auto takes when releasing your code through the ",d("code",{},void 0,"shipit")," command."),b=d("p",{},void 0,d(g,{src:"../../images/default-auto.png",alt:"The default shipit workflow"})),y=d("p",{},void 0,"You can customize how this pipeline operates with various flags. The following shows how those flags can effect the workflow."),w=d("p",{},void 0,d(g,{src:"../../images/complete-auto.png",alt:"The entire shipit workflow"})),P=d("code",{},void 0,"versionBranches"),j=d("code",{},void 0,"true"),N=d("p",{},void 0,"With this feature enabled ",d("code",{},void 0,"auto shipit")," will:"),k=d("ul",{},void 0,d("li",{},void 0,"Create a version branch when a ",d("code",{},void 0,"major")," happens (prefixed with ",d("code",{},void 0,"version-"),")"),d("li",{},void 0,"When ran from a ",d("code",{},void 0,"versionBranch")," make a release to that version")),O=d("p",{},void 0,"Now that you have a branch for an old major release, it is super easy to release patches to it! People can make PRs to the the ",d("code",{},void 0,"version-")," branch and once merged create a new release of that version."),x=d("p",{},void 0,"You can customize what the branch names will be by setting ",d("code",{},void 0,"versionBranches")," to a string."),B=d("pre",{},void 0,d("code",{className:"language-json"},void 0,"{",d("br",{}),"  ",d("span",{className:"hljs-attr"},void 0,'"versionBranches"'),": ",d("span",{className:"hljs-string"},void 0,'"Major-"'),d("br",{}),"}",d("br",{}))),S=d("p",{},void 0,"If you are interested in pre-releases (ex: ",d("code",{},void 0,"alpha"),", ",d("code",{},void 0,"beta"),", ",d("code",{},void 0,"next"),") ",d("code",{},void 0,"auto")," has the ability to publish pre-releases in various ways."),L=d("p",{},void 0,"The suggested way to create pre-releases is by managing 2 branches for your repo: ",d("code",{},void 0,"master")," and ",d("code",{},void 0,"next"),".",d("code",{},void 0,"master")," contains the ",d("code",{},void 0,"latest")," stable version of the code, and ",d("code",{},void 0,"next")," contains future updates."),C=d("code",{},void 0,"auto"),T=d("code",{},void 0,".autorc"),R=d("p",{},void 0,d(g,{src:"../../images/next-branch.png",alt:"Example git tree"})),E=d("p",{},void 0,"To update the ",d("code",{},void 0,"latest")," stable version simply merge your pre-release branch into your ",d("code",{},void 0,"baseBranch"),"."),M=d("code",{},void 0,"--only-graduate-with-release-label"),I=d("p",{},void 0,"If you use the ",d("code",{},void 0,"--only-graduate-with-release-label")," flag, you do not have to manage 2 branches. Instead you only have a ",d("code",{},void 0,"baseBranch")," and do all work and pull requests there.",d("code",{},void 0,"auto")," will only publish pre-releases when PRs are merged. To update the ",d("code",{},void 0,"latest")," stable version add the ",d("code",{},void 0,"released")," label to the PR."),D=d("p",{},void 0,"While this setup may be simpler, it restricts you from updating latest while development is happening for the pre-release. With 2 branches you can easily merge update to the latest release, with 1 this is not possible."),_=d("p",{},void 0,"Sometimes you might want to have more rigorous release lines. This can help test out bugs on a smaller set of users."),W=d("p",{},void 0,"One setup you could use to accomplish this is by creating 3 ",d("code",{},void 0,"prereleaseBranches")),q=d("pre",{},void 0,d("code",{className:"language-json"},void 0,"{",d("br",{}),"  ",d("span",{className:"hljs-attr"},void 0,'"prereleaseBranches"'),": [",d("span",{className:"hljs-string"},void 0,'"alpha"'),", ",d("span",{className:"hljs-string"},void 0,'"beta"'),", ",d("span",{className:"hljs-string"},void 0,'"rc"'),"]",d("br",{}),"}",d("br",{}))),z=d("p",{},void 0,"You could then set you default to ",d("code",{},void 0,"alpha")," and ",d("code",{},void 0,"auto")," would publish updates merged to that branch under the ",d("code",{},void 0,"alpha")," release tag. When you are ready for the update to get used by more users just merge ",d("code",{},void 0,"alpha")," into ",d("code",{},void 0,"beta"),". This will publish a ",d("code",{},void 0,"beta")," release to the matching release tag. Repeat this same process when graduating to ",d("code",{},void 0,"rc")," or ",d("code",{},void 0,"latest"),"."),Y=d("p",{},void 0,"Sometimes you are working on a large feature that requires a lot of work. Instead of making a giant PR with a bunch of updates, you can create a ",d("code",{},void 0,"prereleaseBranch")," to track the work."),A=d("pre",{},void 0,d("code",{className:"language-json"},void 0,"{",d("br",{}),"  ",d("span",{className:"hljs-attr"},void 0,'"prereleaseBranches"'),": [",d("span",{className:"hljs-string"},void 0,'"next"'),", ",d("span",{className:"hljs-string"},void 0,'"my-cool-feature"'),"]",d("br",{}),"}",d("br",{}))),$=d("p",{},void 0,"Now instead of just getting a canary version when merging into the ",d("code",{},void 0,"my-cool-feature")," branch, a prerelease version is published under the ",d("code",{},void 0,"my-cool-feature")," release tag! This enables other to consume just this line of work and enables your work to be more flexible.");var F=e=>d("div",{className:e.className},void 0,d("section",{},void 0,d("h2",{id:"release-pipeline"},void 0,"Release Pipeline ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#release-pipeline","aria-hidden":"true"})),m,b,y,w,d("h2",{id:"managing-old-major-versions"},void 0,"Managing Old Major Versions ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#managing-old-major-versions","aria-hidden":"true"})),d("p",{},void 0,"This command also has the ability to help you manage old major versions too! This feature is off by default, to enable set ",P," to ",j," in your ",d(p,{currentPage:e.currentPage,to:"/auto/pages/autorc.html#versionbranches"},void 0,".autorc"),"."),N,k,O,d("h3",{id:"customize-branch-prefix"},void 0,"Customize Branch Prefix ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#customize-branch-prefix","aria-hidden":"true"})),x,B,d("h2",{id:"prereleases"},void 0,"Prereleases ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#prereleases","aria-hidden":"true"})),S,d("p",{},void 0,"Read more about preparing you project for pre-releases ",d(p,{currentPage:e.currentPage,to:"/auto/pages/generated/next.html#setting-up-protected-branches"},void 0,"here"),"."),d("h3",{id:"strategies"},void 0,"Strategies ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#strategies","aria-hidden":"true"})),d("h4",{id:"%22next%22-branch-(default)"},void 0,'"next" Branch (default) ',d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#%22next%22-branch-(default)","aria-hidden":"true"})),L,d("p",{},void 0,"You can change what branches ",C," treats as pre-release branches in your ",d(p,{currentPage:e.currentPage,to:"/auto/pages/autorc.html#prerelease-branches"},void 0,T),"."),R,E,d("h4",{id:"without-%22next%22-branch-(--only-graduate-with-release-label)"},void 0,'Without "next" Branch (',M,") ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#without-%22next%22-branch-(--only-graduate-with-release-label)","aria-hidden":"true"})),I,D,d("h4",{id:"multiple-%22next%22-branches"},void 0,'Multiple "next" Branches ',d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#multiple-%22next%22-branches","aria-hidden":"true"})),_,W,q,z,d("h4",{id:"feature-pre-releases"},void 0,"Feature Pre-releases ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#feature-pre-releases","aria-hidden":"true"})),Y,A,$));a.default=F,e.exports=a.default},88:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r,o=l(t(3)),s=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};r.get||r.set?Object.defineProperty(a,t,r):a[t]=e[t]}return a.default=e,a}(t(0)),i=l(t(2)),n=l(t(106));function l(e){return e&&e.__esModule?e:{default:e}}function d(e,a,t,o){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,i=arguments.length-3;if(a||0===i||(a={children:void 0}),a&&s)for(var n in s)void 0===a[n]&&(a[n]=s[n]);else a||(a=s||{});if(1===i)a.children=o;else if(i>1){for(var l=new Array(i),d=0;d<i;d++)l[d]=arguments[d+3];a.children=l}return{$$typeof:r,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function h(){return(h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const p=e=>{let{to:a}=e,t=u(e,["to"]);return a.includes("http")?s.default.createElement("a",h({},e,{href:a})):("#"===a[0]&&(a=o.default.join("/auto/","pages/generated/shipit.html")+a),s.default.createElement("a",h({},t,{href:a,onClick:t=>{if(t.preventDefault(),"#"===e.to)return!1;const r=new URL(o.default.join(window.location.origin,a));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,a),e.onClick();const s=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(s),!1}})))};p.defaultProps={href:"",onClick:()=>{}};const v={"../../images/default-auto.png":()=>t.e(15).then(t.t.bind(null,111,7)),"../../images/complete-auto.png":()=>t.e(14).then(t.t.bind(null,112,7)),"../../images/next-branch.png":()=>t.e(16).then(t.t.bind(null,113,7))};class g extends s.default.Component{constructor(...e){super(...e),c(this,"state",{image:null,ImageProvider:v[this.props.src]})}componentDidMount(){this.state.image||this.state.ImageProvider().then(e=>{this.setState({image:e.default})})}render(){let{image:e}=this.state;return e&&"object"==typeof e?s.default.createElement(n.default,h({},this.props,{className:(0,i.default)("image",this.props.className),src:e.src.src,width:e.src.width||e.width,height:e.src.height||e.height,placeholder:{lqip:e.preSrc},srcSet:e.src.images?e.src.images.map(e=>(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(a){c(e,a,t[a])})}return e})({},e,{src:e.path})):[{src:e.src,width:e.width}]})):d("img",{className:(0,i.default)("image",this.props.className),src:e})}}const f=e=>{var a,t;return t=a=class extends s.default.Component{constructor(...e){super(...e),c(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?s.default.createElement(e,this.props,this.props.children||null):null}},c(a,"defaultProps",{shouldLoad:!0}),t};f(()=>t.e(31).then(t.bind(null,107))),f(()=>t.e(31).then(t.bind(null,108)));var m=d("h1",{},void 0,d("code",{},void 0,"shipit")),b=d("p",{},void 0,"Run the full ",d("code",{},void 0,"auto")," release pipeline. Detects if in a lerna project."),y=d("ol",{},void 0,d("li",{},void 0,"call from base branch -> latest version released (LATEST)"),d("li",{},void 0,"call from prerelease branch -> prerelease version released (NEXT)"),d("li",{},void 0,"call from PR in CI -> canary version released (CANARY)"),d("li",{},void 0,"call locally when not on base/prerelease branch -> canary version released (CANARY)")),w=d("table",{},void 0,d("thead",{},void 0,d("tr",{},void 0,d("th",{},void 0,"Flag"),d("th",{},void 0,"Type"),d("th",{},void 0,"Description"))),d("tbody",{},void 0,d("tr",{},void 0,d("td",{},void 0,d("code",{},void 0,"--base-branch")),d("td",{},void 0,"String"),d("td",{},void 0,'Branch to treat as the "master" branch')),d("tr",{},void 0,d("td",{},void 0,d("code",{},void 0,"--dry-run"),", ",d("code",{},void 0,"-d")),d("td",{},void 0,"Boolean"),d("td",{},void 0,"Report what command will do but do not actually do anything")),d("tr",{},void 0,d("td",{},void 0,d("code",{},void 0,"--only-graduate-with-release-label")),d("td",{},void 0,"Boolean"),d("td",{},void 0,'Make auto publish prerelease versions when merging to master. Only PRs merged with "release" label will generate a "latest" release. Only use this flag if you do not want to maintain a prerelease branch, and instead only want to use master.')))),P=d("pre",{},void 0,d("code",{className:"language-sh"},void 0,"auto shipit",d("br",{}))),j=d("p",{},void 0,"Below is the basics steps auto takes when releasing your code through the ",d("code",{},void 0,"shipit")," command."),N=d("p",{},void 0,d(g,{src:"../../images/default-auto.png",alt:"The default shipit workflow"})),k=d("p",{},void 0,"You can customize how this pipeline operates with various flags. The following shows how those flags can effect the workflow."),O=d("p",{},void 0,d(g,{src:"../../images/complete-auto.png",alt:"The entire shipit workflow"})),x=d("code",{},void 0,"versionBranches"),B=d("code",{},void 0,"true"),S=d("p",{},void 0,"With this feature enabled ",d("code",{},void 0,"auto shipit")," will:"),L=d("ul",{},void 0,d("li",{},void 0,"Create a version branch when a ",d("code",{},void 0,"major")," happens (prefixed with ",d("code",{},void 0,"version-"),")"),d("li",{},void 0,"When ran from a ",d("code",{},void 0,"versionBranch")," make a release to that version")),C=d("p",{},void 0,"Now that you have a branch for an old major release, it is super easy to release patches to it! People can make PRs to the the ",d("code",{},void 0,"version-")," branch and once merged create a new release of that version."),T=d("p",{},void 0,"You can customize what the branch names will be by setting ",d("code",{},void 0,"versionBranches")," to a string."),R=d("pre",{},void 0,d("code",{className:"language-json"},void 0,"{",d("br",{}),"  ",d("span",{className:"hljs-attr"},void 0,'"versionBranches"'),": ",d("span",{className:"hljs-string"},void 0,'"Major-"'),d("br",{}),"}",d("br",{}))),E=d("p",{},void 0,"If you are interested in pre-releases (ex: ",d("code",{},void 0,"alpha"),", ",d("code",{},void 0,"beta"),", ",d("code",{},void 0,"next"),") ",d("code",{},void 0,"auto")," has the ability to publish pre-releases in various ways."),M=d("p",{},void 0,"The suggested way to create pre-releases is by managing 2 branches for your repo: ",d("code",{},void 0,"master")," and ",d("code",{},void 0,"next"),".",d("code",{},void 0,"master")," contains the ",d("code",{},void 0,"latest")," stable version of the code, and ",d("code",{},void 0,"next")," contains future updates."),I=d("code",{},void 0,"auto"),D=d("code",{},void 0,".autorc"),_=d("p",{},void 0,d(g,{src:"../../images/next-branch.png",alt:"Example git tree"})),W=d("p",{},void 0,"To update the ",d("code",{},void 0,"latest")," stable version simply merge your pre-release branch into your ",d("code",{},void 0,"baseBranch"),"."),q=d("code",{},void 0,"--only-graduate-with-release-label"),z=d("p",{},void 0,"If you use the ",d("code",{},void 0,"--only-graduate-with-release-label")," flag, you do not have to manage 2 branches. Instead you only have a ",d("code",{},void 0,"baseBranch")," and do all work and pull requests there.",d("code",{},void 0,"auto")," will only publish pre-releases when PRs are merged. To update the ",d("code",{},void 0,"latest")," stable version add the ",d("code",{},void 0,"released")," label to the PR."),Y=d("p",{},void 0,"While this setup may be simpler, it restricts you from updating latest while development is happening for the pre-release. With 2 branches you can easily merge update to the latest release, with 1 this is not possible."),A=d("p",{},void 0,"Sometimes you might want to have more rigorous release lines. This can help test out bugs on a smaller set of users."),$=d("p",{},void 0,"One setup you could use to accomplish this is by creating 3 ",d("code",{},void 0,"prereleaseBranches")),F=d("pre",{},void 0,d("code",{className:"language-json"},void 0,"{",d("br",{}),"  ",d("span",{className:"hljs-attr"},void 0,'"prereleaseBranches"'),": [",d("span",{className:"hljs-string"},void 0,'"alpha"'),", ",d("span",{className:"hljs-string"},void 0,'"beta"'),", ",d("span",{className:"hljs-string"},void 0,'"rc"'),"]",d("br",{}),"}",d("br",{}))),J=d("p",{},void 0,"You could then set you default to ",d("code",{},void 0,"alpha")," and ",d("code",{},void 0,"auto")," would publish updates merged to that branch under the ",d("code",{},void 0,"alpha")," release tag. When you are ready for the update to get used by more users just merge ",d("code",{},void 0,"alpha")," into ",d("code",{},void 0,"beta"),". This will publish a ",d("code",{},void 0,"beta")," release to the matching release tag. Repeat this same process when graduating to ",d("code",{},void 0,"rc")," or ",d("code",{},void 0,"latest"),"."),U=d("p",{},void 0,"Sometimes you are working on a large feature that requires a lot of work. Instead of making a giant PR with a bunch of updates, you can create a ",d("code",{},void 0,"prereleaseBranch")," to track the work."),V=d("pre",{},void 0,d("code",{className:"language-json"},void 0,"{",d("br",{}),"  ",d("span",{className:"hljs-attr"},void 0,'"prereleaseBranches"'),": [",d("span",{className:"hljs-string"},void 0,'"next"'),", ",d("span",{className:"hljs-string"},void 0,'"my-cool-feature"'),"]",d("br",{}),"}",d("br",{}))),X=d("p",{},void 0,"Now instead of just getting a canary version when merging into the ",d("code",{},void 0,"my-cool-feature")," branch, a prerelease version is published under the ",d("code",{},void 0,"my-cool-feature")," release tag! This enables other to consume just this line of work and enables your work to be more flexible.");var G=e=>d("div",{className:e.className},void 0,d("section",{},void 0,m,b,y,d("h2",{id:"options"},void 0,"Options ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#options","aria-hidden":"true"})),w,d("h2",{id:"examples"},void 0,"Examples ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#examples","aria-hidden":"true"})),P,d("h2",{id:"release-pipeline"},void 0,"Release Pipeline ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#release-pipeline","aria-hidden":"true"})),j,N,k,O,d("h2",{id:"managing-old-major-versions"},void 0,"Managing Old Major Versions ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#managing-old-major-versions","aria-hidden":"true"})),d("p",{},void 0,"This command also has the ability to help you manage old major versions too! This feature is off by default, to enable set ",x," to ",B," in your ",d(p,{currentPage:e.currentPage,to:"/auto/pages/autorc.html#versionbranches"},void 0,".autorc"),"."),S,L,C,d("h3",{id:"customize-branch-prefix"},void 0,"Customize Branch Prefix ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#customize-branch-prefix","aria-hidden":"true"})),T,R,d("h2",{id:"prereleases"},void 0,"Prereleases ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#prereleases","aria-hidden":"true"})),E,d("p",{},void 0,"Read more about preparing you project for pre-releases ",d(p,{currentPage:e.currentPage,to:"/auto/pages/generated/next.html#setting-up-protected-branches"},void 0,"here"),"."),d("h3",{id:"strategies"},void 0,"Strategies ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#strategies","aria-hidden":"true"})),d("h4",{id:"%22next%22-branch-(default)"},void 0,'"next" Branch (default) ',d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#%22next%22-branch-(default)","aria-hidden":"true"})),M,d("p",{},void 0,"You can change what branches ",I," treats as pre-release branches in your ",d(p,{currentPage:e.currentPage,to:"/auto/pages/autorc.html#prerelease-branches"},void 0,D),"."),_,W,d("h4",{id:"without-%22next%22-branch-(--only-graduate-with-release-label)"},void 0,'Without "next" Branch (',q,") ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#without-%22next%22-branch-(--only-graduate-with-release-label)","aria-hidden":"true"})),z,Y,d("h4",{id:"multiple-%22next%22-branches"},void 0,'Multiple "next" Branches ',d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#multiple-%22next%22-branches","aria-hidden":"true"})),A,$,F,J,d("h4",{id:"feature-pre-releases"},void 0,"Feature Pre-releases ",d(p,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#feature-pre-releases","aria-hidden":"true"})),U,V,X));a.default=G,e.exports=a.default}}]);
//# sourceMappingURL=shipit.js.map