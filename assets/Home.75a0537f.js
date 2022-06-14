import{_ as r,r as d,o as _,c as i,a as s,w as n,F as u,p,b as h,d as e,e as a}from"./app.d13d0657.js";const f={},t=o=>(p("data-v-3b930db6"),o=o(),h(),o),b=t(()=>e("h1",null,"WSL2 Installation",-1)),m=t(()=>e("h5",null,"Windows Subsystem for Linux feature:",-1)),w=t(()=>e("code",{class:"code-snippet"}," dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart ",-1)),x=t(()=>e("h5",null,"Enable Virtual Machine feature",-1)),v=t(()=>e("code",{class:"code-snippet"}," dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart ",-1)),V=a(" Reboot required "),S=t(()=>e("h5",null,"Download the Linux kernel update package",-1)),L=a("Download Linux kernel"),k=t(()=>e("h5",null,"Set WSL2 by default",-1)),y=t(()=>e("code",{class:"code-snippet"},"wsl --set-default-version 2",-1)),I=t(()=>e("h5",null,"Install distributive from Windows Store",-1)),N=a("Ubuntu");function g(o,B){const c=d("VaAlert"),l=d("VaButton");return _(),i(u,null,[b,m,w,x,v,s(c,{color:"warning"},{default:n(()=>[V]),_:1}),S,s(l,{icon:"download",href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi"},{default:n(()=>[L]),_:1}),k,y,I,s(l,{href:"https://www.microsoft.com/store/apps/9N9TNGVNDL3Q"},{default:n(()=>[N]),_:1})],64)}var D=r(f,[["render",g],["__scopeId","data-v-3b930db6"]]);export{D as default};