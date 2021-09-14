function generate_pdf(){
    const text = document.getElementsByClassName('words')[0];
    html2pdf()
    .from(text)
    .save();
    
}