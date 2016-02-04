(function () {

    //申明
    var codeRunner = function () {

    };

    //默认设置
    var settings = {
        iframeSrc: "iframe.html",
        iframeMinHeight: "200px",
    };

    //初始化
    codeRunner.initialize = function (set) {
        for (var p in set) {
            settings[p] = set[p];
        }
        return codeRunner;
    }

    //生成iframe和注册事件
    codeRunner.Build = function () {
        var coders = document.getElementsByClassName("coder");

        for (var i = 0; i < coders.length; i++) {

            //闭包
            (function (j) {
                var control = coders[j];
                var ifr = createIframe(settings.iframeSrc);
                control.appendChild(ifr);
                control.getElementsByClassName("btnExecute").item(0).addEventListener("click", function (ev) {
                    var btn = this;
                    var code = control.getElementsByClassName("codeArea").item(0).value,
                    // iframe = btn.parentNode.parentNode.getElementsByTagName("iframe").item(0);
                    ///iframe.contentWindow.document.body.innerHTML = "";
                    //iframe.contentWindow.eval(code);
                    ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
                    ifrw.document.open();
                    ifrw.document.write(code);
                    ifrw.document.close();
                })
            })(i)


            //参考：http://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit
            //function submitTryit() {
            //    var text = document.getElementById("textareaCode").value;
            //    var ifr = document.createElement("iframe");
            //    ifr.setAttribute("frameborder", "0");
            //    ifr.setAttribute("id", "iframeResult");
            //    document.getElementById("iframewrapper").innerHTML = "";
            //    document.getElementById("iframewrapper").appendChild(ifr);
            //    var ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
            //    ifrw.document.open();
            //    ifrw.document.write(text);
            //    ifrw.document.close();
            //}


        }
    }

    //创建iframe
    function createIframe(src) {
        var iframe = document.createElement("iframe");
        iframe.cssText = "width:100%;min-height:200px";
        iframe.src = src;
        return iframe;
    }

    //注册codeRunner
    window.codeRunner = codeRunner;

})()

