window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}


//change colors
//by elhajji
function redColor(){
    document.getElementById("invoice").className = "papier p-4 text-danger";
}
function blackColor(){
    document.getElementById("invoice").className = "papier p-4 text-black";
}
function blueColor(){
    document.getElementById("invoice").className = "papier p-4 text-primary";
}

//change font 
function myhandWritingFont(){
    document.getElementById("invoice").style.fontFamily = "My_handwriting";
}
function dastenvisFont(){
    document.getElementById("invoice").style.fontFamily = "dastnevis";
}