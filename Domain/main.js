window.addEventListener('load', ()=>{
    const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const email = params.get('email');
    const mobile = params.get('phone');
    const domainName = params.get('domain');
    const domainExtension = params.get('domainEx');

    document.querySelectorAll('.name').forEach(item=>{
        item.innerText = name
    })
    document.querySelector('#email').innerText = email
    document.querySelector('#mobile').innerText = mobile
    document.querySelectorAll('.domain-extension').forEach(item=>{
        item.innerText = domainName+"."+domainExtension
    })
    document.querySelector('#just-domain-extension').innerText = domainExtension
})
document.getElementById('download').addEventListener('click', function(){

    html2canvas($('#container'),{
        onrendered: function(canvas){
            var a = document.createElement("a");
            a.href = canvas.toDataURL("image/jpg");
            a.download = "cover.jpg";
            a.click();
        }
    })
})