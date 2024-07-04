function calculateDate() {
  var dateInput = document.getElementById('date').value;
  var days = document.getElementById('days').value;

  if (!dateInput || !days || isNaN(days)) {
      document.getElementById('result').innerText = 'দয়া করে বৈধ ইনপুট প্রদান করুন।';
      return;
  }

  var date = new Date(dateInput);
  date.setDate(date.getDate() + parseInt(days));
  
  if (isNaN(date.getTime())) {
      document.getElementById('result').innerText = 'অবৈধ তারিখ।';
  } else {
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      document.getElementById('result').innerText = 'ফলাফল তারিখ: ' + date.toLocaleDateString('bn-BD', options);
  }
}