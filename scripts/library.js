

var documents = `<h5>FrameWorks</h5>
<ul class="C_dtls" id="frameworks">
    <li class="liActive"><a href="#">Angualar js</a></li>
    <li><a href="#">React Js</a></li>
    <li><a href="#">Vue</a></li>
    <li><a href="#">Java SpringBoot</a></li>
    <li><a href="#">Flutter framework</a></li>
    <li><a href="#">Node Javascript</a></li>
</ul>

<h5>Programming Languages</h5>
<ul class="C_dtls" id="proglangs">
    <li><a href="#">Java programming</a></li>
    <li><a href="#">Rust</a></li>
    <li><a href="#">Javascript</a></li>
    <li><a href="#">C++ programming</a></li>
    <li><a href="#">Python</a></li>
    <li><a href="#">Swift</a></li>
</ul>

<h5>Forex Trading</h5>
<ul class="C_dtls" id="forex">
    <li><a href="#">A1 Trading</a></li>
    <li><a href="#">SMC trading</a></li>
    <li><a href="#">Price Action trading</a></li>
    <li><a href="#">Economic theory</a></li>
    <li><a href="#">Inflation and Interest Rates</a></li>
</ul>`;

var minortab = '';

function minortab(val){
    minortab = val;
}



$(document).ready(()=>{

    $("#docs").click(()=>{
        $("#docs").attr("class","active");
        $("#vids").attr("class","");
        $("#pprs").attr("class","");

        $(".clist").html(documents);
    });//docs

    $("#vids").click(()=>{
        $("#vids").attr("class","active");
        $("#docs").attr("class","");
        $("#pprs").attr("class","");

        $('.clist').html("");
    });//docs

    $("#pprs").click(()=>{
        $("#pprs").attr("class","active");
        $("#vids").attr("class","");
        $("#docs").attr("class","");

        $('.clist').html("");
    });//docs


    var pageNumber = $("#pNum").html();
    var pdfUrl = "http://localhost/digital_schools/resources/documents/angular.pdf";

    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
        pdf.getPage(pageNumber).then(function(page) {
            const viewport = page.getViewport({scale: 1});
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);

            $('#infoDetails').html(canvas);

        
        });
    });
});