document.getElementById('examForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let exam1 = parseFloat(document.getElementById('exam1').value);
    let exam2 = parseFloat(document.getElementById('exam2').value);
    let exam3 = parseFloat(document.getElementById('exam3').value);
    let exam4 = parseFloat(document.getElementById('exam4').value);
    let exam5 = parseFloat(document.getElementById('exam5').value);
    let exam6 = parseFloat(document.getElementById('exam6').value);
    let exam7 = parseFloat(document.getElementById('exam7').value);

    let anatomyOral = parseFloat(document.getElementById('anatomyOral').value);
    let anatomyLab = parseFloat(document.getElementById('anatomyLab').value);
    let physiologyOral = parseFloat(document.getElementById('physiologyOral').value);
    let histologyOral = parseFloat(document.getElementById('histologyOral').value);
    let tusQuestions = parseFloat(document.getElementById('tusQuestions').value);
    let theoreticalExam = parseFloat(document.getElementById('theoreticalExam').value);

    let averageKurul = (exam1 + exam2 + exam3 + exam4 + exam5 + exam6 + exam7) / 7;

    let finalExamTotal = (anatomyOral * 0.125) + (anatomyLab * 0.125) + (physiologyOral * 0.15) + 
                         (histologyOral * 0.10) + (tusQuestions * 0.10) + (theoreticalExam * 0.50);

    if (finalExamTotal > 100) {
        finalExamTotal = 100; // Toplam puan 100'ü geçemez
    }

    let yearEndAverage = (averageKurul * 0.60) + (finalExamTotal * 0.40);

    document.getElementById('result').innerHTML = `
        <p>Kurul Sınavları Ortalaması: ${averageKurul.toFixed(2)}</p>
        <p>Final Sınavı Toplam Puanı: ${finalExamTotal.toFixed(2)}</p>
        <p>Yıl Sonu Ortalaması: ${yearEndAverage.toFixed(2)}</p>
    `;
});
