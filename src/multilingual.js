const lang = navigator.language;

console.log(lang);

docum
if (lang == 'zh-CN'){
          document.getElementById("rta--wechat").classList.add("show");
          document.getElementById("block").classList.add("show");
} else{
    window.location.href = '/en';
}