(function () {

    //申明
    var codeRunner = function () {

    };

    //默认设置
    var settings = {
        iframeSrc: "iframe.html"
    };

    //初始化
    codeRunner.initialize = function (set) {
        for (var p in set) {
            settings[p] = set[p];
        }
        return codeRunner;
    }

    //生成iframe和注册事件
    codeRunner.build = function () {
        var coders = document.getElementsByClassName("coder");

        for (var i = 0; i < coders.length; i++) {

            //闭包
            (function (j) {
                var control = coders[j];
                setCoder(control);
                control.getElementsByClassName("submitBTN").item(0).addEventListener("click", function (ev) {
                    setCoder(control);
                    var btn = this;
                    var code = control.getElementsByClassName("textareaCode").item(0).value,
                      iframe = btn.parentNode.parentNode.getElementsByTagName("iframe").item(0),
                      resultDiv = iframe.parentNode;

                    //删除旧的iframe                 
                    iframe.remove();

                    //创建新的iframe
                    var iff = createIframe();
                    resultDiv.appendChild(iff);

                    var ifrw = (iff.contentWindow) ? iff.contentWindow : (iff.contentDocument.document) ? iff.contentDocument.document : iff.contentDocument;

                    ifrw.document.open();
                    ifrw.document.write(code);
                    ifrw.document.close();
                })
            })(i);

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

    codeRunner.adjust = function () {
        var coders = document.getElementsByClassName("coder");

        for (var i = 0; i < coders.length; i++) {
            //闭包
            (function (j) {
                var control = coders[j];
                setCoder(control);
            })(i);
        }
    }


    function setCoder(control) {

        //如果没有添加默认的src

        //高度设置
        if (settings.minHeight) {
            control.style.cssText = "min-height:" + settings.minHeight + "px";
        }
    }

    function createIframe() {
        var ifr = document.createElement("iframe");
        ifr.className = "iframeResult";
        return ifr;
    }



    //注册codeRunner
    window.codeRunner = codeRunner;

})()

