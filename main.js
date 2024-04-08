$('#gradeCalcForm').submit(function (event) {
    event.preventDefault();
    var totalMarks = 0;
    var subjects = ['english', 'mathematics', 'science', 'social', 'it', 'morals', 'odia', 'hindi'];
    var subjectMarks = subjects.map(function (subject) {
        var mark = parseFloat($('#' + subject).val());
        totalMarks += mark;
        return mark;
    });
    var average = totalMarks / subjects.length;
    var resultText = average >= 50 ? 'Pass' : 'Fail';
    $('#result').text(`You ${resultText} with an average percentage of ${average.toFixed(2)}%.`);
});