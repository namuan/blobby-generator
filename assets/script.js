document.getElementById("download").addEventListener("click", function () {
    download_svg()
})

function download_svg() {
    const svgBox = document.getElementById('svg-box');
    const svgData = new Blob([svgBox.outerHTML], {type: 'image/svg+xml'});
    const url = window.URL.createObjectURL(svgData);

    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'blobby.svg';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
